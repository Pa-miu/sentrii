import { WARD, BOX, TOWER, SENTRY, PULL, STACK } from '../constants/MapConstants';

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
          { id: 'R9', x: 654, y: 711 },
          { id: 'R10', x: 718, y: 698 },
          { id: 'R11', x: 750, y: 650 },
          { id: 'R12', x: 772, y: 708 }
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
          { id: 'O3-r', x: 289, y: 249 },
          { id: 'O4-r', x: 449, y: 246 },
          { id: 'O5-r', x: 315, y: 204 },
          { id: 'O6-r', x: 488, y: 455 },
          { id: 'O7-r', x: 510, y: 360 },
          { id: 'O8-r', x: 566, y: 542 },
          { id: 'O9-r', x: 583, y: 205 },
          { id: 'O10-r', x: 716, y: 534 },
          { id: 'O11-r', x: 747, y: 477 },
          { id: 'O12-r', x: 860, y: 423 },
          { id: 'O13-r', x: 792, y: 589 }
        ]
      },
      dire: {
        type: WARD,
        attributes: {
          color: 0xffae73
        },
        points: [
          { id: 'D1-r', x: 207, y: 536 },
          { id: 'D2-r', x: 233, y: 657 },
          { id: 'D3-r', x: 415, y: 773 },
          { id: 'D4-r', x: 550, y: 669 },
          { id: 'D5-r', x: 622, y: 810 },
          { id: 'D6-r', x: 660, y: 776 },
          { id: 'D7-r', x: 749, y: 823 },
          { id: 'D8-r', x: 812, y: 784 }
        ]
      }
    },
    defense: {
      radiant: {
        type: WARD,
        attributes: {
          color: 0xd9ff66
        },
        points: [
          { id: 'D1-r', x: 207, y: 536 },
          { id: 'D2-r', x: 233, y: 657 },
          { id: 'D3-r', x: 415, y: 773 },
          { id: 'D4-r', x: 550, y: 669 },
          { id: 'D5-r', x: 612, y: 800 },
          { id: 'D5-r', x: 612, y: 800 },
          { id: 'D6-r', x: 812, y: 784 },
          { id: 'D7-r', x: 877, y: 688 }
        ]
      },
      dire: {
        type: WARD,
        attributes: {
          color: 0xd9ff66
        },
        points: [
          { id: 'O1-r', x: 109, y: 325 },
          { id: 'O1-r', x: 197, y: 243 },
          { id: 'O2-r', x: 253, y: 249 },
          { id: 'O3-r', x: 449, y: 246 },
          { id: 'O4-r', x: 488, y: 455 },
          { id: 'O5-r', x: 510, y: 360 },
          { id: 'O6-r', x: 566, y: 542 },
          { id: 'O7-r', x: 583, y: 205 },
          { id: 'O8-r', x: 716, y: 534 },
          { id: 'O9-r', x: 747, y: 477 },
          { id: 'O10-r', x: 860, y: 423 },
          { id: 'O11-r', x: 792, y: 589 }
        ]
      }
    },
    push: {
      radiant: {
        type: WARD,
        attributes: {
          color: 0x94efff
        },
        points: [
          { id: 'Pu1-t-d', x: 296, y: 135 },
          { id: 'Pu2-t-d', x: 558, y: 186 },
          { id: 'Pu3-t-d', x: 718, y: 105 },
          { id: 'Pu1-m-d', x: 626, y: 427 },
          { id: 'Pu2-m-d', x: 714, y: 327 },
          { id: 'Pu3-m-d', x: 733, y: 220 },
          { id: 'Pu1-b-d', x: 893, y: 541 },
          { id: 'Pu3-b-d', x: 839, y: 332 }
        ]
      },
      dire: {
        type: WARD,
        attributes: {
          color: 0x94efff
        },
        points: [
          { id: 'Pu1-t-r', x: 116, y: 476 },
          { id: 'Pu2-t-r', x: 109, y: 623 },
          { id: 'Pu3-t-r', x: 165, y: 713 },
          { id: 'Pu1-m-r', x: 351, y: 628 },
          { id: 'Pu2-m-r', x: 290, y: 746 },
          { id: 'Pu1-b-r', x: 763, y: 872 },
          { id: 'Pu2-b-r', x: 421, y: 876 },
          { id: 'Pu3-b-r', x: 266, y: 820 }
        ]
      }
    }
  },
  truesight: {
    tower: {
      neutral: {
        type: TOWER,
        attributes: {
          alpha: 0.4,
          towerColor: 0xe9e95d,
          detectionColor: 0x4b91e7,
          range: 55
        },
        points: [
          { id: 'T1-t-r', x: 137, y: 402 },
          { id: 'T2-t-r', x: 135, y: 564 },
          { id: 'T3-t-r', x: 105, y: 716 },
          { id: 'T1-m-r', x: 417, y: 600 },
          { id: 'T2-m-r', x: 296, y: 682 },
          { id: 'T3-m-r', x: 228, y: 762 },
          { id: 'T1-b-r', x: 830, y: 883 },
          { id: 'T2-b-r', x: 484, y: 885 },
          { id: 'T3-b-r', x: 275, y: 886 },
          { id: 'T1-t-d', x: 183, y: 138 },
          { id: 'T2-t-d', x: 515, y: 137 },
          { id: 'T3-t-d', x: 751, y: 157 },
          { id: 'T1-m-d', x: 577, y: 482 },
          { id: 'T2-m-d', x: 657, y: 365 },
          { id: 'T3-m-d', x: 784, y: 266 },
          { id: 'T1-b-d', x: 907, y: 608 },
          { id: 'T2-b-d', x: 918, y: 472 },
          { id: 'T3-b-d', x: 906, y: 316 }
        ]
      }
    },
    sentry: {
      neutral: {
        type: SENTRY,
        attributes: {
          alpha: 0.4,
          color: 0x4b91e7,
          range: 52
        },
        points: [
          { id: 'S1', x: 650, y: 642 }
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
          { verts: [0, 0, 58, 0, 58, 55, 40, 55, 26, 42, 0, 36], id: 'B2-r', x: 403, y: 720 },
          { verts: [0, 0, 64, 0, 64, 63, 0, 63], id: 'B3-r', x: 450, y: 651 },
          { verts: [0, 0, 72, 0, 72, 81, 0, 81], id: 'B4-r', x: 590, y: 703 },
          { verts: [0, 0, 99, 0, 99, 63, 0, 63], id: 'B5-r', x: 657, y: 772 },
          { verts: [0, 0, 44, 0, 68, 20, 68, 68, 0, 68], id: 'B6-r', x: 688, y: 690 },
          { verts: [0, 0, 85, 0, 85, 60, 0, 60], id: 'B1-d', x: 187, y: 240 },
          { verts: [0, 0, 50, 0, 50, 60, 0, 60], id: 'B2-d', x: 290, y: 200 },
          { verts: [0, 0, 60, 0, 60, 48, 0, 48], id: 'B3-d', x: 395, y: 310 },
          { verts: [0, 0, 48, 0, 48, 52, 6, 52], id: 'B4-d', x: 463, y: 254 },
          { verts: [0, 0, 70, 0, 70, 58, 0, 58], id: 'B5-d', x: 536, y: 273 },
          { verts: [0, 0, 60, 0, 60, 40, 0, 40], id: 'B6-d', x: 735, y: 540 }
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
