import { React, sinon, assert, expect, TestUtils } from '../test_exports';
import Header from '../../src/js/components/Header';

describe('Header component', () => {
  let header, container, titleGroup, title, subtitle, navbar, navItems;
  let findDOMWithClass = TestUtils.findRenderedDOMComponentWithClass;
  let scryDOMWithClass = TestUtils.scryRenderedDOMComponentsWithClass;

  before(() => {
    header = TestUtils.renderIntoDocument(<Header/>);
    container = findDOMWithClass(header, 'header-container');
    titleGroup = findDOMWithClass(header, 'title-group');
    title = findDOMWithClass(header, 'title');
    subtitle = findDOMWithClass(header, 'subtitle');
    navbar = findDOMWithClass(header, 'navbar');
    navItems = scryDOMWithClass(header, 'nav-item');
  });

  it('should render into the DOM', () => {
    expect(container).to.not.equal(null);
    expect(titleGroup).to.not.equal(null);
    expect(title).to.not.equal(null);
    expect(subtitle).to.not.equal(null);
    expect(navbar).to.not.equal(null);
    expect(navItems.length).to.equal(3);
  });
});
