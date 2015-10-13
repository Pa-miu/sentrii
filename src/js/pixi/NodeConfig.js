import { WARD, BOX, TOWER, STACK } from '../constants/MapConstants';

export const NodeConfig = {
  wards: {
    runes: {
      neutral: {
        type: WARD,
        attributes: {
          color: 0xff7979
        },
        points: [
          { id: 'R1', x: 294, y: 376 },
          { id: 'R2', x: 379, y: 339 },
          { id: 'R3', x: 380, y: 481 },
          { id: 'R4', x: 403, y: 466 },
          { id: 'R5', x: 448, y: 431 },
          { id: 'R6', x: 625, y: 686 },
          { id: 'R7', x: 660, y: 590 },
          { id: 'R8', x: 679, y: 665 },
          { id: 'R9', x: 718, y: 698 },
          { id: 'R10', x: 750, y: 650 },
          { id: 'R11', x: 772, y: 708 }
        ]
      }
    },
    offense: {
      radiant: {
        type: WARD,
        attributes: {
          color: 0xffae73
        },
        points: [
          { id: 'O1-r', x: 197, y: 243 },
          { id: 'O2-r', x: 253, y: 249 },
          { id: 'O3-r', x: 301, y: 201 },
          { id: 'O4-r', x: 307, y: 147 },
          { id: 'O5-r', x: 449, y: 246 },
          { id: 'O6-r', x: 488, y: 455 },
          { id: 'O7-r', x: 510, y: 306 },
          { id: 'O8-r', x: 566, y: 542 },
          { id: 'O9-r', x: 583, y: 205 },
          { id: 'O10-r', x: 716, y: 534 },
          { id: 'O11-r', x: 747, y: 477 },
          { id: 'O12-r', x: 792, y: 589 },
          { id: 'O13-r', x: 906, y: 689 }
        ]
      }
    }
  },
  truesight: {
    tower: {
      neutral: {
        type: TOWER,
        attributes: {
          towerColor: 0xe9e95d,
          detectionColor: 0x4b91e7,
          alpha: 0.4,
          range: 55
        },
        points: [
          { id: 'T1-t-r', x: 137, y: 402 },
          { id: 'T2-t-r', x: 135, y: 564 },
          { id: 'T3-t-r', x: 105, y: 716 },
          { id: 'T1-m-r', x: 417, y: 600 },
          { id: 'T2-m-r', x: 296, y: 682 },
          { id: 'T3-m-r', x: 228, y: 762 },
          { id: 'T1-b-r', x: 807, y: 883 },
          { id: 'T2-b-r', x: 475, y: 885 },
          { id: 'T3-b-r', x: 275, y: 886 }
        ]
      }
    }
  },
  camps: {
    box: {
      neutral: {
        type: BOX,
        attributes: {
          alpha: 0.4,
          color: 0x1dcd4c,
          outlineColor: 0x1dcd4c
        },
        points: [
          { verts: [0, 0, 57, 0, 57, 62, 0, 62], id: 'B1-r', x: 292, y: 466 },
          { verts: [0, 0, 58, 0, 58, 55, 24, 55, 23, 40, 0, 40], id: 'B2-r', x: 413, y: 720 },
          { verts: [0, 0, 64, 0, 64, 63, 0, 63], id: 'B3-r', x: 450, y: 651 },
          { verts: [0, 0, 72, 0, 72, 81, 0, 81], id: 'B4-r', x: 590, y: 703 },
          { verts: [0, 0, 107, 0, 107, 63, 0, 63], id: 'B5-r', x: 657, y: 772 },
          { verts: [0, 0, 68, 0, 68, 72, 0, 72], id: 'B6-r', x: 688, y: 699 }
        ]
      }
    },
    stack: {
      radiant: {
        type: STACK,
        attributes: {
          alpha: 0.8,
          color: 0x0cd3f56
        },
        points: [
          { rotation: -0.52, times: [54, 53, 51], textx: 16, texty: 9, id: 'Pl1-r', x: 340, y: 490 },
          { rotation: -1.5, times: [54, 53, 51], textx: 0, texty: 14, id: 'Pl2-r', x: 433, y: 737 },
          { rotation: -0.26, times: [55], textx: 15, texty: 7, id: 'Pl3-r', x: 490, y: 682 },
          { rotation: 3, times: [54, 53, 51], textx: -15, texty: 15, id: 'Pl4-r', x: 615, y: 745 },
          { rotation: 0.86, times: [53], textx: 60, texty: 0, id: 'Pl5-r', x: 710, y: 807 },
          { rotation: 3, times: [54, 53], textx: 30, texty: -30, id: 'Pl6-r', x: 712, y: 734 }
        ]
      }
    }
  }
};
