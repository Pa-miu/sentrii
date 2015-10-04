import babelify from 'babelify';
import browserify from 'browserify';
import gulp from 'gulp';
import concat from 'gulp-concat';
import htmlreplace from 'gulp-html-replace';
import livereload from 'gulp-livereload';
import cssmin from 'gulp-minify-css';
import streamify from 'gulp-streamify';
import uglify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import watchify from 'watchify';

const path = {
  HTML: 'src/index.html',
  STYLES: 'src/styles/**/*.css',
  IMAGES: 'src/images/**/*.png',
  DEV_JS: 'build.js',
  DEV_CSS: 'style.css',
  MINIFIED_JS: 'build.min.js',
  MINIFIED_CSS: 'build.min.css',
  APPEND_JS: 'js/',
  APPEND_STYLES: 'styles/',
  APPEND_IMAGES: 'images/',
  DEST_PROD: 'prod/',
  DEST_DEV: 'dev/',
  ENTRY_POINT: 'src/js/app.js'
};

/*
  Development Tasks
*/
gulp.task('refresh', () => {
  livereload.listen();
});

gulp.task('copyHTML', () => {
  gulp.src(path.HTML)
      .pipe(htmlreplace({
        js: path.APPEND_JS + path.DEV_JS,
        css: path.APPEND_STYLES + path.DEV_CSS
      }))
      .pipe(gulp.dest(path.DEST_DEV))
      .pipe(livereload());
});

gulp.task('copyCSS', () => {
  gulp.src(path.STYLES)
      .pipe(concat(path.DEV_CSS))
      .pipe(cssmin())
      .pipe(gulp.dest(path.DEST_DEV + path.APPEND_STYLES))
      .pipe(livereload());
});

gulp.task('copyImages', () => {
  gulp.src(path.IMAGES)
    .pipe(gulp.dest(path.DEST_DEV + path.APPEND_IMAGES))
    .pipe(livereload());
});

gulp.task('bundleJS', () => {
  const browser = browserify({
    entries: [path.ENTRY_POINT],
    transform: [babelify],
    debug: true,
    cache: {}, packageCache: {}, fullpaths: true
  });

  browser.bundle()
          .pipe(source(path.DEV_JS))
          .pipe(gulp.dest(path.DEST_DEV + path.APPEND_JS));
  console.log('Bundled scripts');
});

gulp.task('watch', () => {
  gulp.watch(path.HTML, ['copyHTML']);
  gulp.watch(path.STYLES, ['copyCSS']);
  gulp.watch(path.IMAGES, ['copyImages']);

  const watcher = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [babelify],
    debug: true,
    cache: {}, packageCache: {}, fullpaths: true
  }));

  return watcher.on('update', () => {
    watcher.bundle().on('error', (e) => console.log(e.message))
            .pipe(source(path.DEV_JS))
            .pipe(gulp.dest(path.DEST_DEV + path.APPEND_JS))
            .pipe(livereload());
    console.log('Updated');
  })
      .bundle()
      .pipe(source(path.DEV_JS))
      .pipe(gulp.dest(path.DEST_DEV + path.APPEND_JS));
});

/*
  Production Tasks
*/
gulp.task('build', () => {
  browserify({
    entries: [path.ENTRY_POINT],
    transform: [babelify]
  })
    .bundle()
    .pipe(source(path.MINIFIED_JS))
    .pipe(streamify(uglify({ file: path.MINIFIED_JS })))
    .pipe(gulp.dest(path.DEST_PROD + path.APPEND_JS));
});

gulp.task('buildHTML', () => {
  gulp.src(path.HTML)
      .pipe(htmlreplace({
        js: path.APPEND_JS + path.MINIFIED_JS,
        css: path.APPEND_STYLES + path.MINIFIED_CSS
      }))
      .pipe(gulp.dest(path.DEST_PROD));
});

gulp.task('buildCSS', () => {
  gulp.src(path.STYLES)
      .pipe(concat(path.MINIFIED_CSS))
      .pipe(cssmin())
      .pipe(gulp.dest(path.DEST_PROD + path.APPEND_STYLES));
});

gulp.task('buildImages', () => {
  gulp.src(path.IMAGES)
      .pipe(gulp.dest(path.DEST_PROD + path.APPEND_IMAGES));
});

/* Composited Tasks */
gulp.task('default', ['dev', 'refresh', 'watch']);
gulp.task('dev', ['bundleJS', 'copyHTML', 'copyCSS', 'copyImages']);
gulp.task('prod', ['buildHTML', 'buildCSS', 'buildImages', 'build']);
