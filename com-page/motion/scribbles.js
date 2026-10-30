/* Packing Panic · scribbles
 *
 * Jens's hand-drawn marks from Figma ("Mark · looping scribble", "Brush strikes", "Brush underline",
 * "Handwritten brush strokes"), drawn on the live page with their motion:
 *   loop       pale knot behind the headline · written on load (1.3 s), unwinds while the section
 *              scrolls away: the knot disappears from its start, the calm line stays
 *   strike     red line through a line of text, edge to edge · written by the scroll position
 *              (82 % → 46 % of the window height), scrolling back takes it back
 *   underline  green line under a word · written by the scroll position, like the strikes
 *   signature  "Jens" + swash · written letter by letter when the portrait comes into view
 * prefers-reduced-motion: everything is already written, nothing moves.
 *
 * Markup: data-scribble="loop | strike | underline | signature" (see README.md). No dependencies.
 * Look: load scribbles-brush.js before this file for Figma's NOIR brush; without it the same
 * paths are drawn as plain pen strokes (7 KB instead of about 85 KB gzipped).
 * Generated from src/scribbles/scribbles.src.js by scripts/build-scribbles.js; edit that file.
 */
(function () {
  'use strict';
  if (typeof window === 'undefined' || window.PPScribbles) return;

  var PEN = {"loop":{"ink":"tone","strokes":[{"name":"Loops → trailing line","sw":9.96,"d":"M261.5 121.7C276.8 139.6 260.2 160.3 242.8 168.4C238.7 170.3 234.2 171.8 229.6 172C228.1 172.1 226.6 171.6 225.1 171.9C224.3 172 221.7 173.7 220.7 172.9C218.6 171.3 226.1 165.8 227.2 165C235.8 159 246.1 155.1 256.2 152.5C265.1 150.1 274.2 148.8 283.4 148.2C288 147.9 292.7 148.2 297.2 147.5C303.2 146.5 309.2 144.9 315.3 144.1C333.5 141.5 352.1 141.7 370.3 144.8C422.9 153.9 474.5 187.9 498.6 236.5C507.7 254.7 518.3 289.5 498.1 304.3C478.6 318.7 454.9 295.3 446.6 278.7C429.9 245.2 437.8 205.4 456.2 174.4C501.9 97.3 612.3 68.8 694.8 91.9C736 103.4 780.5 130.9 790.3 175.7C801 224.6 763.8 266.4 722.5 286.1C657.3 317.1 571.9 308.1 513.9 265.2C486.9 245.2 461.5 214.2 464.1 178.4C465.2 163.9 471.8 150.3 481.8 139.9C516.5 104.1 582 107.6 622.6 130.5C645.1 143.1 668.3 166 663.9 194.3C659.8 220 636.1 236.3 614.2 246.5C567.7 268.1 498.1 268.9 450.4 250.8C425.2 241.2 387.2 220.5 389.7 188.3C391.4 167.9 406.7 152.6 423.6 142.9C457.5 123.5 501.4 118.2 539.2 127.3C560.6 132.5 590.8 145.5 591.4 171.6C591.9 191.3 573.9 206.1 558.1 214.4C530.1 229.1 495 233.2 464.4 225.3C458.6 223.8 452.8 221.8 447.3 219C444.7 217.7 442.1 215.8 439.3 214.8C434.3 213.1 428.9 212.6 423.8 210.8C410.7 206.1 393.1 195.2 393.9 179.1C394.4 170.3 401.4 164.5 409.6 163.1C411.8 162.7 414.2 163 416.4 162.2C419.9 160.9 423.1 158.8 426.8 157.7C459.2 147.2 506.2 162.5 517.3 197.2C534.4 250.8 448.5 280 421.4 226.1C404.1 191.6 421.1 148.5 440.7 118.9C486 50.2 579.1 17.7 641.5 84.7C650.7 94.5 657.9 107.2 662.9 119.7C670.6 138.7 673.8 159.9 672.3 180.4C671 199.4 666.6 218.8 657.7 235.9C644.3 261.8 625.1 283.1 599.4 297.2C520.4 340.7 414 289.4 389.4 205.1C384.8 189.4 383.1 172.7 386 156.6C397.9 89.9 470.4 79.5 521.9 108.2C544.2 120.6 566.3 144.8 565.6 172C564.8 199.6 542.6 218.2 517.7 225.5C488.5 234.1 453 230.5 427.1 213.8C395 193.2 384.3 158.6 408.9 126.9C434.7 93.6 477.6 76.5 517.3 66.7C606.2 44.9 724.8 52.8 805.2 98.9C826.1 110.8 846.8 126.2 859.2 147.2C863.6 154.6 866.8 162.8 867.7 171.3C867.9 173 867.2 178.6 869.5 179.2C871.1 179.6 878.4 175.8 880.1 175.1C883.5 173.6 889.9 172 891.7 168.4C893.7 164.5 889.1 158 888 154.2C885.9 146.4 887.1 138.3 892.3 132C895.6 127.9 900.1 124.9 905 123C913.1 119.8 932.9 118.2 933 131.4C933.1 151 891.4 168.4 875.8 172.9C841.8 182.7 802.4 181.1 771.8 162C727.8 134.5 732.5 79.1 769.4 47.9C783.3 36.2 799.5 27.3 817.2 23.4C839.6 18.4 863.4 18.6 885 27.1C950.3 53 967.3 131 937.3 190.2C905.8 252.7 835 293 765.2 272.5C748.7 267.7 732.7 259.9 719.3 248.8C671.4 209.3 649 133.3 683.3 77.8C710.9 33 765.7 25.2 805.9 58.6C818.1 68.8 826.9 81.4 834.1 95.4C849 105 885.9 136.3 923.6 152.7C961.3 169 1019.8 184.6 1060.3 193.4C1100.8 202.2 1138.8 200.6 1166.6 205.5C1194.4 210.4 1217.2 219.7 1227.3 222.6","len":6683.3,"split":0.9372}]},"strikes":{"ink":"red","strokes":[{"name":"Strike 1","sw":13,"d":"M-25.4 139.6C10.2 138 45.9 136.6 81.5 136.6C124.3 136.5 167.1 137.7 209.9 137C273.4 135.8 336.8 129.4 400.3 129C458.7 128.5 517 132.2 575.4 132.2C634.4 132.1 693.3 128.8 752.3 129.9C803.5 130.9 854.7 134.6 905.9 134.7C961 134.8 1016 130.6 1071.1 129.2C1128.8 127.7 1186.5 130.1 1244.2 129C1265.6 128.7 1287 127.5 1308.4 126.6C1347.2 125.1 1386 123.7 1424.8 123.7","len":1450.8},{"name":"Strike 2","sw":13,"d":"M-25 283.6C73.5 280.9 171.5 268.6 270.1 266.6C344.7 265.1 419.1 270.1 493.6 273.7C537 275.8 580.5 276.9 623.9 276.9C699.1 277 774.3 274.3 849.5 275C935.7 275.7 1021.9 279.7 1108.2 278.6C1175 277.8 1241.6 273.7 1308.4 271C1347.9 269.4 1387.5 269.6 1427 269.6","len":1453.0},{"name":"Strike 3","sw":13,"d":"M-23.3 421.4C111.4 416.7 246.3 413.6 381.1 412.1C455 411.3 529 411.3 602.9 411C687.1 410.6 771.4 409.4 855.7 409.8C907.6 410.1 959.4 411.3 1011.3 412.9C1067 414.7 1122.7 417 1178.5 417.3C1265.2 417.9 1352 413.5 1438.6 410.2","len":1462.3},{"name":"Strike 4","sw":13,"d":"M-23.1 559.3C63.1 555 149.3 556.4 235.5 553.3C314.6 550.4 393.4 542.8 472.6 543.8C532.3 544.7 591.7 550.7 651.2 554.6C693.9 557.4 736.7 558.8 779.5 558.5C839.1 558 898.7 555.2 958.4 554.9C1025.2 554.5 1092 556.4 1158.7 553.9C1209.9 552 1260.9 547 1312.1 544.1C1351.2 541.9 1390.5 541.5 1429.8 542.3","len":1454.1}]},"underline":{"ink":"green","strokes":[{"name":"Weight saved · underline","sw":9,"d":"M214.3 723.1C261.2 719.6 308.1 716.1 355.1 713.3C370.3 712.4 385.6 711.5 400.9 710.6C408.5 710.2 416.2 709.5 423.8 709.4C430.1 709.4 436.6 710 442.9 710.4","len":229.1}]},"signature":{"ink":"green","strokes":[{"name":"J · main","sw":11.95,"d":"M750.6 510.1C749.1 511.3 742.3 514.8 738 520.3C733.7 525.8 720.9 544.9 713.8 557.1C706.6 569.2 685.8 608.5 676.8 624.8C667.8 641.1 646.8 681.6 636.5 696.9C626.1 712.1 597.8 745.5 588.5 755.5C579.3 765.5 566.5 777.2 557.5 783C546.8 792.1 520.7 803.2 511.5 804.8C502.3 806.4 491.3 807.6 479 796.8C470.8 789.6 470.9 781.7 473.3 768.1C475.4 755.7 491.9 740.3 501.7 730.4C511.6 720.4 548.4 690.1 559.7 681.9C571 673.8 588.8 665.2 598.9 660.5C609.1 655.6 636.6 644.3 646.8 640.8C656.9 637.3 677.3 632.6 686.1 630.6C695 628.6 718.4 624.5 722.7 623.7","len":752.3},{"name":"J · flourish","sw":11.95,"d":"M592.8 610.9C590.9 609.3 577.9 602.6 576.4 597.1C574.9 591.6 576.9 570.6 580.2 564C583.5 557.3 595.8 544.5 604.7 540C613.6 535.4 644.9 527.2 656.5 525C668.1 522.9 693.7 521.1 704 521.4C714.3 521.6 738.2 525.6 744.9 527.2C751.6 528.8 759.3 534.3 761.2 535.2","len":251.4},{"name":"e","sw":11.95,"d":"M746.8 705.5C750.7 703.7 773.1 693.8 780.4 690.4C787.6 687 803.6 680.4 808.9 676.4C814.2 672.3 824.2 659.7 826 655.3C827.7 651 826.8 641.2 824.1 639.1C821.3 636.9 810.5 634.2 802.3 636.9C794 639.6 761.6 657.9 753.5 662.3C745.5 666.8 738.5 671.1 733.4 675.2C728.4 679.3 714.9 692.5 710.4 697.4C705.9 702.2 697.4 712.5 694.9 716.9C692.5 721.4 689.2 731.6 689.1 735.7C689.1 739.7 690.5 748.5 694.4 751.9C703.3 761.1 713.2 764.7 722.9 764.7C759.3 764.7 768.8 755 777.4 751.9C786 748.8 791.1 741.9 796.5 738C801.9 734.1 818.6 722.8 823.8 718.4C829 714 839.3 702.8 841.4 700.7","len":479.6},{"name":"n","sw":11.95,"d":"M913 652.5C905.7 665.9 849.9 761.3 850.3 767.6C850.7 773.9 904.2 717.8 916.6 706.5C929.1 695.1 949.4 676.6 957.4 670.7C965.3 664.9 979 658.8 984.5 656.3C989.9 653.7 1001.4 648.8 1004 649C1006.7 649.3 1010.7 652.2 1007.3 658.5C1003.9 664.8 981.1 693.7 974.7 703C968.3 712.4 955.1 732.2 952.2 738.8C949.3 745.3 948.6 755.5 949.6 759.2C950.7 763 956.9 770.2 961 771.2C965.1 772.1 978.6 770 984.6 767.6C990.5 765.2 1005.5 755.6 1012.1 750.8C1018.7 746.1 1035.5 732 1040.9 727C1046.3 721.9 1056.1 709.9 1058.1 707.6","len":595.3},{"name":"s · upper","sw":11.95,"d":"M1042 703.1C1044 701.7 1056.3 693.8 1059.9 690.4C1063.5 687 1069.1 678.8 1072.5 674C1075.9 669.1 1084.4 654.7 1089.1 648.9C1093.8 643.1 1104 629.5 1113.1 624.3C1122.2 619.1 1158.7 607.1 1167 604.5C1175.4 601.9 1180.2 601.7 1184.3 601.9C1188.5 602 1200.5 603.8 1202.7 605.6C1204.9 607.4 1203.7 614.4 1203.2 617.2C1202.7 619.9 1199.7 627 1198.4 629.1C1197 631.2 1192.3 634.4 1191.5 635.1","len":235.4},{"name":"s · lower","sw":11.95,"d":"M1080.6 669.1C1081.1 670.9 1081 680.5 1085 684.5C1089.1 688.4 1110.6 698.9 1115.4 703.1C1120.2 707.4 1125.4 717 1126.2 721.1C1126.9 725.2 1124.7 734.2 1121.8 738.6C1118.9 743 1107.3 754.5 1101.4 758.6C1095.4 762.7 1076.8 771.1 1071 773.9C1065.2 776.6 1056.3 781 1051.5 782.1C1046.6 783.2 1032.5 783.7 1029.6 783.3C1026.8 782.9 1027 780.7 1026.9 778.6C1026.9 776.5 1028 768 1029.3 765.6C1030.5 763.3 1036.8 759.4 1037.8 758.6","len":227.7},{"name":"Swash · right to left","sw":13.14,"d":"M1444 835.1C1375.9 837 1205.7 843.5 1035.4 846.6C865.2 849.8 592.8 853.1 422.6 853.9C252.3 854.8 82.1 852 14 851.6","len":1430.2}]}};

  // The coded homepage at 1440 px, the layout the scribbles were drawn on in Figma
  var REF = {
    w: 1440,
    loop: { cx: 720, cy: 168.96 },                       // headline centre: top + 52 % of its height
    strike: { lineH: 167, at: [128.52, 269.52, 410.52, 551.52], x1: -24, x2: 1464 },
    underline: { x1: 212.7, x2: 435.64, y: 715.7 },
    // signature: baseline origin and size of the old layout rule; the drawn letters sit in box (relative to x, y),
    // the swash's lowest ink is swashBottom below the baseline
    sign: { x: 435.225, y: 755.592, size: 377.917, swash: [24, 1416], box: { l: 36.7, r: 768.8, t: -245.5, b: 50.2 }, swashBottom: 104.5 }
  };
  var NS = 'http://www.w3.org/2000/svg';
  var EASE = 'cubic-bezier(.45,.05,.25,1)';
  var still = window.matchMedia('(prefers-reduced-motion: reduce)');
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var ease = function (t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; };

  var drawn = {};                  // scribble id → true once written (survives rebuilds on resize)
  var unwound = {};                // loop id → how far it has unwound (dash offset)
  var layers = [], observers = [], scrubbers = [], uid = 0;

  // ------------------------------------------------------------------ geometry
  // Section-local, unzoomed CSS pixels (pages that use CSS zoom on wide screens included)
  function frame(host) {
    var r = host.getBoundingClientRect();
    return { r: r, z: r.width / (host.offsetWidth || r.width) || 1, w: host.offsetWidth, h: host.offsetHeight };
  }
  function local(rect, fr) {
    return { x: (rect.left - fr.r.left) / fr.z, y: (rect.top - fr.r.top) / fr.z, w: rect.width / fr.z, h: rect.height / fr.z };
  }
  function textRange(el) { var r = document.createRange(); r.selectNodeContents(el); return r; }
  function lines(el, fr) {
    return Array.prototype.slice.call(textRange(el).getClientRects()).map(function (r) { return local(r, fr); })
      .filter(function (r) { return r.w > 4; });
  }
  function textBox(el, fr) { return local(textRange(el).getBoundingClientRect(), fr); }
  function pick(host, attr, fallback) {
    var sel = host.getAttribute(attr);
    return sel ? host.querySelector(sel) : fallback ? host.querySelector(fallback) : null;
  }
  function hostOf(el) {
    return el.closest('[data-scribble-host]') || el.closest('section') || el.parentElement;
  }
  function opt(el, name, fallback) {
    var v = el.getAttribute('data-scribble-' + name);
    return v == null || v === '' ? fallback : v;
  }

  // ------------------------------------------------------------------ placement
  // Each returns marks: { id, host, layer, ink, trigger, items: [{ group, i, m: { sx, sy, tx, ty }, at }], ... }
  var PLACE = {
    loop: function (host, n) {
      var fr = frame(host);
      var anchor = pick(host, 'data-scribble-anchor', 'h1, h2') || host;
      var t = anchor === host ? { x: 0, y: 0, w: fr.w, h: fr.h } : textBox(anchor, fr);
      var s = fr.w / REF.w * (fr.w < 768 ? 1.2 : 1) * parseFloat(opt(host, 'scale', '1'));
      var cx = fr.w / 2, cy = t.y + t.h * 0.52;
      return [{ id: 'loop' + n, host: host, layer: 'back', ink: PEN.loop.ink, trigger: 'load', delay: 100, duration: 1300, unwind: PEN.loop.strokes[0].split,
        items: [{ group: 'loop', i: 0, m: { sx: s, sy: s, tx: cx - REF.loop.cx * s, ty: cy - REF.loop.cy * s } }] }];
    },

    strike: function (el, n, count) {
      var host = hostOf(el), fr = frame(host), R = REF.strike;
      var text = opt(el, 'span', 'edge') === 'text';
      return lines(el, fr).map(function (r, k) {
        var j = (count.strike++) % R.at.length;
        var x1 = text ? r.x - 8 : R.x1 * fr.w / REF.w, x2 = text ? r.x + r.w + 8 : fr.w + (R.x2 - REF.w) * fr.w / REF.w;
        var sx = (x2 - x1) / (R.x2 - R.x1), sy = clamp(r.h / R.lineH, 0.22, 1.4);
        var y = r.y + r.h * 0.56;
        return { id: 'strike' + n + '-' + k, host: host, layer: 'over', ink: PEN.strikes.ink, trigger: opt(el, 'trigger', 'scrub'), watch: el, speed: 1.7,
          items: [{ group: 'strikes', i: j, m: { sx: sx, sy: sy, tx: x1 - R.x1 * sx, ty: y - R.at[j] * sy }, at: r.y + r.h * 0.5 }] };
      });
    },

    underline: function (el, n) {
      var host = hostOf(el), fr = frame(host), U = REF.underline;
      var b = textBox(el, fr), x1 = b.x - 4, x2 = b.x + b.w + 4, s = (x2 - x1) / (U.x2 - U.x1), y = b.y + b.h * 0.9;
      return [{ id: 'underline' + n, host: host, layer: 'front', ink: PEN.underline.ink, trigger: opt(el, 'trigger', 'scrub'), watch: el, speed: 1.4,
        items: [{ group: 'underline', i: 0, m: { sx: s, sy: s, tx: x1 - U.x1 * s, ty: y - U.y * s }, at: b.y + b.h }] }];
    },

    signature: function (host, n) {
      var fr = frame(host), S0 = REF.sign;
      var portrait = pick(host, 'data-scribble-portrait'), quote = pick(host, 'data-scribble-quote');
      var links = pick(host, 'data-scribble-links'), text = pick(host, 'data-scribble-text');
      var size, x, y, sw1, sw2, lift = 0, B = S0.box;
      if (fr.w >= 1200 && quote && links && text) {
        // signed under the quote: "J" on the portrait, "ens" in the free space between quote and links,
        // the swash under it almost from edge to edge
        var q = local(quote.getBoundingClientRect(), fr), l = local(links.getBoundingClientRect(), fr), tx = local(text.getBoundingClientRect(), fr);
        size = clamp((l.y - (q.y + q.h) - 44) / 0.6, 180, (fr.w - 48) / 1.62);
        y = q.y + q.h + 14 + size * 0.46;
        x = tx.x - size * 0.78;
        sw1 = 24; sw2 = fr.w - 24;
        // the swash stays clear of the links under it
        lift = Math.min(0, (l.y - 10) - (y + S0.swashBottom * size / S0.size));
      } else if (portrait) {
        // stacked: across the lower part of the portrait
        var m = local(portrait.getBoundingClientRect(), fr);
        var k = Math.min(m.w * 0.86 / (B.r - B.l), m.h * 0.5 / (B.b - B.t));
        size = S0.size * k;
        x = m.x + m.w * 0.07 - B.l * k; y = m.y + m.h * 0.78 - B.b * k;
        sw1 = x + B.l * k - m.w * 0.04; sw2 = x + B.r * k + m.w * 0.03;
      } else {
        // no layout hints: the whole drawing scaled to the element's width
        var k = fr.w / REF.w;
        size = S0.size * k; x = S0.x * k; y = (S0.y - 508) * k; sw1 = S0.swash[0] * k; sw2 = S0.swash[1] * k;
      }
      var S = size / S0.size, sxw = (sw2 - sw1) / (S0.swash[1] - S0.swash[0]);
      var last = PEN.signature.strokes.length - 1;
      var items = PEN.signature.strokes.map(function (st, i) {
        return { group: 'signature', i: i, m: i === last
          ? { sx: sxw, sy: S, tx: sw1 - S0.swash[0] * sxw, ty: y - S0.y * S + lift }
          : { sx: S, sy: S, tx: x - S0.x * S, ty: y - S0.y * S } };
      });
      return [{ id: 'signature' + n, host: host, layer: 'front', ink: PEN.signature.ink, trigger: opt(host, 'trigger', 'view'), watch: portrait || host,
        delay: 150, speed: 2.4, gap: 60, items: items }];
    }
  };

  // ------------------------------------------------------------------ rendering
  function el(name, attrs, parent) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function layer(host, kind) {
    var svg = host.querySelector(':scope > svg.pp-scribbles--' + kind);
    if (!svg) {
      host.classList.add('pp-scribble-host');
      svg = el('svg', { 'class': 'pp-scribbles pp-scribbles--' + kind, 'aria-hidden': 'true', focusable: 'false' });
      el('defs', {}, svg);
      host.insertBefore(svg, kind === 'back' ? host.firstChild : null);
      layers.push(svg);
    }
    return svg;
  }
  function penOnly(node) {
    var root = node.closest('[data-scribble-ink]') || document.documentElement;
    return root.getAttribute('data-scribble-ink') === 'pen' || !window.PPScribbleBrush;
  }
  var f3 = function (v) { return Math.round(v * 1000) / 1000; };

  function render(mk) {
    var svg = layer(mk.host, mk.layer), defs = svg.firstChild;
    var g = el('g', { 'class': 'pp-scribble pp-scribble--' + mk.ink, 'data-scribble-id': mk.id }, svg);
    var done = drawn[mk.id] || still.matches, pen = penOnly(mk.host);
    return mk.items.map(function (it) {
      var st = PEN[it.group].strokes[it.i], m = it.m;
      var wrap = el('g', { transform: 'matrix(' + [m.sx, 0, 0, m.sy, m.tx, m.ty].map(f3).join(' ') + ')' }, g);
      var line, brush = !pen && window.PPScribbleBrush[it.group] && window.PPScribbleBrush[it.group][it.i];
      var common = { d: st.d, fill: 'none', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', pathLength: 1, 'stroke-dasharray': '1 1' };
      if (brush) {
        // the brush outline, revealed along the Figma centreline
        var id = 'pp-scribble-' + uid++;
        var mask = el('mask', { id: id, maskUnits: 'userSpaceOnUse', x: -20000, y: -20000, width: 40000, height: 40000 }, defs);
        common.stroke = '#fff'; common['stroke-width'] = st.sw * 1.7;
        line = el('path', common, mask);
        el('path', { d: brush, fill: 'currentColor', mask: 'url(#' + id + ')' }, wrap);
      } else {
        common.stroke = 'currentColor'; common['stroke-width'] = st.sw * 0.85;
        line = el('path', common, wrap);
      }
      line.style.strokeDashoffset = done ? (unwound[mk.id] || 0) : 1;
      return { line: line, length: st.len * Math.max(Math.abs(m.sx), Math.abs(m.sy)), at: it.at };
    });
  }

  // ------------------------------------------------------------------ motion
  function write(mk, strokes) {
    if (drawn[mk.id] || still.matches) { drawn[mk.id] = true; return; }
    var t = mk.delay || 0;
    strokes.forEach(function (s, i) {
      var dur = mk.duration ? mk.duration / strokes.length : clamp(s.length / (mk.speed || 1.6), 160, 1600);
      var a = s.line.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: dur, delay: t, easing: EASE, fill: 'forwards' });
      t += dur + (mk.gap || 0);
      a.finished.then(function () { s.line.style.strokeDashoffset = 0; a.cancel(); if (i === strokes.length - 1) drawn[mk.id] = true; });
    });
  }
  // The knot disappears from its start while the section scrolls away; the calm line stays.
  function unwind(mk, strokes) {
    var line = strokes[0].line;
    scrubbers.push(function () {
      if (!drawn[mk.id]) return;
      var r = mk.host.getBoundingClientRect();
      unwound[mk.id] = -clamp(-r.top / (r.height * 0.7), 0, 1) * mk.unwind;
      line.style.strokeDashoffset = unwound[mk.id];
    });
  }
  // Written by the scroll position: a stroke runs while its line moves from 82 % to 46 % of the window.
  function scrub(mk, strokes) {
    scrubbers.push(function () {
      var r = mk.host.getBoundingClientRect(), z = r.width / (mk.host.offsetWidth || r.width) || 1, vh = window.innerHeight;
      strokes.forEach(function (s) {
        var p = clamp((vh * 0.82 - (r.top + s.at * z)) / (vh * 0.36), 0, 1);
        s.line.style.strokeDashoffset = 1 - ease(p);
      });
    });
  }

  function build(root) {
    root = root || document;
    observers.forEach(function (o) { o.disconnect(); });
    layers.forEach(function (s) { if (s.parentNode) s.parentNode.removeChild(s); });
    observers = []; scrubbers = []; layers = [];
    var count = { strike: 0 }, seen = {};
    Array.prototype.slice.call(root.querySelectorAll('[data-scribble]')).forEach(function (node) {
      var kind = node.getAttribute('data-scribble');
      if (!PLACE[kind]) return;
      var n = seen[kind] = (seen[kind] || 0) + 1;
      var marks;
      try { marks = PLACE[kind](node, n, count); } catch (e) { console.warn('scribbles: ' + kind, e); return; }
      marks.forEach(function (mk) {
        var strokes = render(mk);
        if (still.matches) return;
        if (mk.trigger === 'scrub') scrub(mk, strokes);
        else if (mk.trigger === 'load') write(mk, strokes);
        else if (!drawn[mk.id]) {
          var io = new IntersectionObserver(function (es) {
            if (es.some(function (e) { return e.isIntersecting; })) { io.disconnect(); write(mk, strokes); }
          }, { rootMargin: '0px 0px -28% 0px' });
          io.observe(mk.watch || mk.host);
          observers.push(io);
        }
        if (mk.unwind) unwind(mk, strokes);
      });
    });
    tick();
  }

  var queued = false;
  function tick() { scrubbers.forEach(function (f) { f(); }); }
  window.addEventListener('scroll', function () {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; tick(); });
  }, { passive: true });

  window.PPScribbles = {
    data: PEN,
    build: build,
    replay: function () { drawn = {}; unwound = {}; build(); }
  };

  function start() {
    var ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    ready.then(function () {
      build();
      var w = window.innerWidth, t;
      window.addEventListener('resize', function () {
        if (Math.abs(window.innerWidth - w) < 2) return;
        w = window.innerWidth;
        clearTimeout(t);
        t = setTimeout(function () { build(); }, 160);
      });
      if (still.addEventListener) still.addEventListener('change', function () { build(); });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
