(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    9396: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 3414));
    },
    3414: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return eo;
          },
        });
      var s = l(7437),
        a = l(2575),
        i = l(3648),
        r = l(3772),
        n = l(9805),
        d = l(4901),
        c = l(2265),
        o = l(3160);
      function L(e) {
        let { position: t, marker: l, showHeaderAndHideBody: a } = e;
        return "RankingImproved" === l ? (0, s.jsxs)("div", { className: (0, o.AK)(a ? "h-0" : "pt-1 pb-1", "bg-rc-green text-white px-2 w-6 flex flex-col items-center rounded-sm font-black"), children: [(0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "8", height: "4", viewBox: "0 0 8 4", fill: "none", children: (0, s.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 3.9863L4.03333 4L0 4L4.03333 0L8 3.9863Z", fill: "white" }) }), (0, s.jsx)("div", { children: t })] }) : "RankingDeclined" === l ? (0, s.jsxs)("div", { className: (0, o.AK)(a ? "h-0" : "pt-1 pb-1", "bg-rc-red text-white w-6 flex flex-col items-center rounded-sm font-black"), children: [(0, s.jsx)("div", { children: t }), (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "8", height: "4", viewBox: "0 0 8 4", fill: "none", children: (0, s.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 0.0136986L4.03333 5.48497e-07L0 0L4.03333 4L8 0.0136986Z", fill: "white" }) })] }) : (0, s.jsx)("div", { className: (0, o.AK)(a ? "h-0" : "py-1", "w-6 flex flex-col items-center rounded-sm text-black font-black bg-stone-200"), children: (0, s.jsx)("div", { className: (0, o.AK)(a ? "h-0" : ""), children: t }) });
      }
      var m = l(7668);
      function u(e) {
        let { tire: t } = e,
          { configData: l } = (0, m.Zq)();
        return "A" === t && (null == l ? void 0 : l.alt_tire_color) === "green"
          ? (0, s.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [(0, s.jsx)("rect", { width: "24", height: "24", rx: "12", fill: "#04B704" }), (0, s.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7911 20.8678L11.9716 21L12.4351 20.6362L12.7853 20.3603L13.1238 20.0729L13.4633 19.786L13.7796 19.499L14.0964 19.19L14.4015 18.8699L14.5933 18.6493L14.887 18.3182L15.1812 17.9865L15.4405 17.6333L15.7115 17.28L15.9718 16.9267L16.2542 16.5077L16.48 16.1318L16.7063 15.7459L16.9321 15.3705L17.2258 14.7967L17.4187 14.4097L17.6106 14.0017L17.7911 13.6042L17.9721 13.1404L18.1187 12.7319L18.2545 12.3123L18.3667 11.8927L18.5256 11.2636L18.6161 10.8335L18.6953 10.4028L18.7627 9.96113L18.8419 9.28778L18.8872 8.85714L18.9211 8.41595L18.9546 7.97425L18.9777 7.31196L18.9998 6.87027V5.85472L18.808 5.69995L18.5143 5.47935L18.2093 5.28087L17.8924 5.10398L17.3503 4.87234L16.9666 4.72862L16.5705 4.60702L16.0171 4.45275L15.5871 4.35376L15.1581 4.26532L14.5141 4.17688L14.0733 4.1216L13.6212 4.07738L12.9319 4.02211L12.4803 4.01105L12.0508 4L11.5082 4.01105L11.0674 4.02211L10.446 4.05527L9.99443 4.09949L9.55362 4.15477L9.06755 4.20954L8.63806 4.28743L8.18646 4.36431L7.58723 4.50802L7.16906 4.62913L6.7622 4.76179L6.18611 5.01555L5.81372 5.20348L5.46292 5.41302L5.12396 5.66729L5.0108 5.75522L5 5.79944V6.69389L5.0108 7.13559L5.03343 7.58783L5.04475 8.02953L5.0787 8.47072L5.10133 8.91241L5.13528 9.36517L5.2258 10.0717L5.2937 10.5023L5.3724 10.9325L5.46292 11.3742L5.56477 11.7937L5.67793 12.2244L5.76845 12.5002L5.91505 12.9198L6.06164 13.3284L6.23138 13.7253L6.49113 14.3434L6.6835 14.7409L6.88667 15.1278L7.10116 15.5137L7.31616 15.9006L7.59855 16.3418L7.84749 16.7172L8.09593 17.0705L8.35568 17.4348L8.63806 17.788L9.02229 18.2629L9.3165 18.5935L9.60969 18.9141L9.91522 19.2453L10.2315 19.5654L10.5931 19.9076L10.9208 20.2055L11.2598 20.4704L11.61 20.7467L11.7911 20.8678ZM11.2145 18.682L11.9717 19.3995L12.2993 19.1237L12.4351 18.9689L12.7622 18.6599L13.0786 18.3619L13.3728 18.0307L13.6665 17.7106L13.9494 17.3684L14.221 17.0262L14.4802 16.673L14.8649 16.1428L15.1129 15.779L15.35 15.4147L15.5871 15.0394L15.8134 14.6529L15.9718 14.3655L16.175 13.9685L16.3679 13.5711L16.5484 13.1736L16.7856 12.6219L16.91 12.2133L17.034 11.8048L17.1353 11.3852L17.2037 11.0541L17.3051 10.6239L17.3843 10.1933L17.4516 9.76264L17.5309 9.10035L17.5761 8.6697L17.6106 8.22801L17.6327 7.78682L17.6666 7.1798L17.6774 6.73811L17.6898 6.55017L17.6106 6.50595L17.4408 6.40646L17.124 6.21902L16.7747 6.0532L16.424 5.92105L16.0624 5.8105L15.5763 5.68889L15.1694 5.60095L14.7513 5.53462L14.0399 5.43513L13.6099 5.40196L13.1578 5.3693L12.4804 5.33614H11.7006L11.2485 5.35825L10.7855 5.3693L10.1071 5.42407L9.6663 5.46829L9.22601 5.52357L8.7852 5.60095L8.09596 5.75522L7.6891 5.86577L7.27093 6.00898L6.83012 6.18586L6.46904 6.37379L6.33325 6.43962V7.09136L6.35588 7.53255L6.37851 7.97425L6.40115 8.41594L6.44641 8.85714L6.49116 9.29883L6.54774 9.74053L6.61563 10.1712L6.71696 10.8445L6.8188 11.2636L6.93196 11.6942L7.05644 12.1138L7.1804 12.5334L7.33882 12.9419L7.63252 13.7032L7.82489 14.0896L8.02807 14.4761L8.23175 14.863L8.46887 15.2268L8.73994 15.6795L8.98837 16.0549L9.23732 16.4082L9.50839 16.7614L9.77946 17.1147L10.0618 17.4458L10.5592 18.0086L10.8642 18.3292L11.1693 18.6493L11.2145 18.682Z", fill: "white" }), (0, s.jsx)("path", { d: "M10.6431 9.63695L10.6878 9.56383H10.5073L10.3263 9.55386L9.98781 9.56383L9.62573 9.59564L9.27597 9.65784L8.93703 9.7414L8.59756 9.87671L8.31519 10.0125L8.21387 10.0647L8.2365 9.97072L8.28176 9.81404L8.34965 9.51208L8.47361 9.22009L8.6202 8.93807L8.77861 8.66698L8.98228 8.40632L9.19677 8.16656L9.44519 7.9681L9.6823 7.8119L9.94255 7.67612L10.2702 7.56122L10.5186 7.51944L10.7902 7.49902L11.0499 7.50947H11.1065L14.6991 7.94721H14.8236L15.0494 7.95766L15.2989 7.93677L15.5236 7.88502L15.7499 7.8119L15.9649 7.7179L16.1686 7.59255L16.2139 7.57166L16.202 7.59255V7.70745L16.1907 7.85368L16.1686 8.06211L16.1115 8.28098L16.021 8.48941L15.9084 8.68787L15.7618 8.86496L15.6141 9.03208L15.4676 9.15742L15.2757 9.29273L15.0607 9.39718L14.8468 9.48027L14.4399 9.59564L14.1575 9.63695L13.7836 9.66828H13.5249L12.5184 9.65784L12.4623 9.82496L12.4397 9.96027L12.4057 10.2314V10.5238L12.4397 10.7949L12.5076 11.066L12.5184 11.1287L12.5976 11.0556L12.6768 10.9825L12.8578 10.8676L13.0497 10.7636L13.2533 10.6905L13.4673 10.6278L13.6823 10.6069L13.9318 10.6278L14.1123 10.6591L14.2933 10.7218L14.5073 10.8258L14.677 10.9302L14.711 10.9616L14.1123 12.6304L14.0783 12.5991L14.0218 12.5364L13.9086 12.4324L13.7728 12.328L13.6262 12.2549L13.4673 12.1922L13.3099 12.1504L13.1402 12.1404L12.9699 12.1504L12.7781 12.1922H12.756L12.7673 12.328L12.7781 12.5051V12.7244L12.7673 13.0791L12.722 13.4233L12.6547 13.7675L12.5523 14.0486L12.417 14.341L12.2812 14.6226L12.0668 14.8937L11.8862 15.0608L11.6712 15.217L11.4341 15.3319L11.2305 15.4155L11.0047 15.4677L10.7784 15.499H10.5299L10.2815 15.4781L10.0104 15.3841L9.9765 15.3737L10.0439 15.3319L10.1118 15.2901L10.2136 15.1752L10.3263 15.0399L10.3941 14.9041L10.4507 14.7584L10.496 14.6017V14.3306L10.462 14.1848L10.4168 14.0386L10.3715 13.861L9.89729 12.1295L9.88598 11.9838L9.86335 11.6918L9.87466 11.3998L9.91992 11.1183L9.98781 10.8258L10.0778 10.5447L10.2136 10.2836L10.3607 10.0334L10.5412 9.75184L10.6431 9.63695Z", fill: "white" })] })
          : "A" === t
          ? (0, s.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [(0, s.jsx)("rect", { width: "24", height: "24", rx: "12", fill: "#EC1E2F" }), (0, s.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7911 20.8678L11.9716 21L12.4351 20.6362L12.7853 20.3603L13.1238 20.0729L13.4633 19.786L13.7796 19.499L14.0964 19.19L14.4015 18.8699L14.5933 18.6493L14.887 18.3182L15.1812 17.9865L15.4405 17.6333L15.7115 17.28L15.9718 16.9267L16.2542 16.5077L16.48 16.1318L16.7063 15.7459L16.9321 15.3705L17.2258 14.7967L17.4187 14.4097L17.6106 14.0017L17.7911 13.6042L17.9721 13.1404L18.1187 12.7319L18.2545 12.3123L18.3667 11.8927L18.5256 11.2636L18.6161 10.8335L18.6953 10.4028L18.7627 9.96113L18.8419 9.28778L18.8872 8.85714L18.9211 8.41595L18.9546 7.97425L18.9777 7.31196L18.9998 6.87027V5.85472L18.808 5.69995L18.5143 5.47935L18.2093 5.28087L17.8924 5.10398L17.3503 4.87234L16.9666 4.72862L16.5705 4.60702L16.0171 4.45275L15.5871 4.35376L15.1581 4.26532L14.5141 4.17688L14.0733 4.1216L13.6212 4.07738L12.9319 4.02211L12.4803 4.01105L12.0508 4L11.5082 4.01105L11.0674 4.02211L10.446 4.05527L9.99443 4.09949L9.55362 4.15477L9.06755 4.20954L8.63806 4.28743L8.18646 4.36431L7.58723 4.50802L7.16906 4.62913L6.7622 4.76179L6.18611 5.01555L5.81372 5.20348L5.46292 5.41302L5.12396 5.66729L5.0108 5.75522L5 5.79944V6.69389L5.0108 7.13559L5.03343 7.58783L5.04475 8.02953L5.0787 8.47072L5.10133 8.91241L5.13528 9.36517L5.2258 10.0717L5.2937 10.5023L5.3724 10.9325L5.46292 11.3742L5.56477 11.7937L5.67793 12.2244L5.76845 12.5002L5.91505 12.9198L6.06164 13.3284L6.23138 13.7253L6.49113 14.3434L6.6835 14.7409L6.88667 15.1278L7.10116 15.5137L7.31616 15.9006L7.59855 16.3418L7.84749 16.7172L8.09593 17.0705L8.35568 17.4348L8.63806 17.788L9.02229 18.2629L9.3165 18.5935L9.60969 18.9141L9.91522 19.2453L10.2315 19.5654L10.5931 19.9076L10.9208 20.2055L11.2598 20.4704L11.61 20.7467L11.7911 20.8678ZM11.2145 18.682L11.9717 19.3995L12.2993 19.1237L12.4351 18.9689L12.7622 18.6599L13.0786 18.3619L13.3728 18.0307L13.6665 17.7106L13.9494 17.3684L14.221 17.0262L14.4802 16.673L14.8649 16.1428L15.1129 15.779L15.35 15.4147L15.5871 15.0394L15.8134 14.6529L15.9718 14.3655L16.175 13.9685L16.3679 13.5711L16.5484 13.1736L16.7856 12.6219L16.91 12.2133L17.034 11.8048L17.1353 11.3852L17.2037 11.0541L17.3051 10.6239L17.3843 10.1933L17.4516 9.76264L17.5309 9.10035L17.5761 8.6697L17.6106 8.22801L17.6327 7.78682L17.6666 7.1798L17.6774 6.73811L17.6898 6.55017L17.6106 6.50595L17.4408 6.40646L17.124 6.21902L16.7747 6.0532L16.424 5.92105L16.0624 5.8105L15.5763 5.68889L15.1694 5.60095L14.7513 5.53462L14.0399 5.43513L13.6099 5.40196L13.1578 5.3693L12.4804 5.33614H11.7006L11.2485 5.35825L10.7855 5.3693L10.1071 5.42407L9.6663 5.46829L9.22601 5.52357L8.7852 5.60095L8.09596 5.75522L7.6891 5.86577L7.27093 6.00898L6.83012 6.18586L6.46904 6.37379L6.33325 6.43962V7.09136L6.35588 7.53255L6.37851 7.97425L6.40115 8.41594L6.44641 8.85714L6.49116 9.29883L6.54774 9.74053L6.61563 10.1712L6.71696 10.8445L6.8188 11.2636L6.93196 11.6942L7.05644 12.1138L7.1804 12.5334L7.33882 12.9419L7.63252 13.7032L7.82489 14.0896L8.02807 14.4761L8.23175 14.863L8.46887 15.2268L8.73994 15.6795L8.98837 16.0549L9.23732 16.4082L9.50839 16.7614L9.77946 17.1147L10.0618 17.4458L10.5592 18.0086L10.8642 18.3292L11.1693 18.6493L11.2145 18.682Z", fill: "white" }), (0, s.jsx)("path", { d: "M10.6431 9.63695L10.6878 9.56383H10.5073L10.3263 9.55386L9.98781 9.56383L9.62573 9.59564L9.27597 9.65784L8.93703 9.7414L8.59756 9.87671L8.31519 10.0125L8.21387 10.0647L8.2365 9.97072L8.28176 9.81404L8.34965 9.51208L8.47361 9.22009L8.6202 8.93807L8.77861 8.66698L8.98228 8.40632L9.19677 8.16656L9.44519 7.9681L9.6823 7.8119L9.94255 7.67612L10.2702 7.56122L10.5186 7.51944L10.7902 7.49902L11.0499 7.50947H11.1065L14.6991 7.94721H14.8236L15.0494 7.95766L15.2989 7.93677L15.5236 7.88502L15.7499 7.8119L15.9649 7.7179L16.1686 7.59255L16.2139 7.57166L16.202 7.59255V7.70745L16.1907 7.85368L16.1686 8.06211L16.1115 8.28098L16.021 8.48941L15.9084 8.68787L15.7618 8.86496L15.6141 9.03208L15.4676 9.15742L15.2757 9.29273L15.0607 9.39718L14.8468 9.48027L14.4399 9.59564L14.1575 9.63695L13.7836 9.66828H13.5249L12.5184 9.65784L12.4623 9.82496L12.4397 9.96027L12.4057 10.2314V10.5238L12.4397 10.7949L12.5076 11.066L12.5184 11.1287L12.5976 11.0556L12.6768 10.9825L12.8578 10.8676L13.0497 10.7636L13.2533 10.6905L13.4673 10.6278L13.6823 10.6069L13.9318 10.6278L14.1123 10.6591L14.2933 10.7218L14.5073 10.8258L14.677 10.9302L14.711 10.9616L14.1123 12.6304L14.0783 12.5991L14.0218 12.5364L13.9086 12.4324L13.7728 12.328L13.6262 12.2549L13.4673 12.1922L13.3099 12.1504L13.1402 12.1404L12.9699 12.1504L12.7781 12.1922H12.756L12.7673 12.328L12.7781 12.5051V12.7244L12.7673 13.0791L12.722 13.4233L12.6547 13.7675L12.5523 14.0486L12.417 14.341L12.2812 14.6226L12.0668 14.8937L11.8862 15.0608L11.6712 15.217L11.4341 15.3319L11.2305 15.4155L11.0047 15.4677L10.7784 15.499H10.5299L10.2815 15.4781L10.0104 15.3841L9.9765 15.3737L10.0439 15.3319L10.1118 15.2901L10.2136 15.1752L10.3263 15.0399L10.3941 14.9041L10.4507 14.7584L10.496 14.6017V14.3306L10.462 14.1848L10.4168 14.0386L10.3715 13.861L9.89729 12.1295L9.88598 11.9838L9.86335 11.6918L9.87466 11.3998L9.91992 11.1183L9.98781 10.8258L10.0778 10.5447L10.2136 10.2836L10.3607 10.0334L10.5412 9.75184L10.6431 9.63695Z", fill: "white" })] })
          : "W" === t
          ? (0, s.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [(0, s.jsx)("rect", { width: "24", height: "24", rx: "12", fill: "#CCCCCC" }), (0, s.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7911 20.8678L11.9716 21L12.4351 20.6362L12.7853 20.3603L13.1238 20.0729L13.4633 19.786L13.7796 19.499L14.0964 19.19L14.4015 18.8699L14.5933 18.6493L14.887 18.3182L15.1812 17.9865L15.4405 17.6333L15.7115 17.28L15.9718 16.9267L16.2542 16.5077L16.48 16.1318L16.7063 15.7459L16.9321 15.3705L17.2258 14.7967L17.4187 14.4097L17.6106 14.0017L17.7911 13.6042L17.9721 13.1404L18.1187 12.7319L18.2545 12.3123L18.3667 11.8927L18.5256 11.2636L18.6161 10.8335L18.6953 10.4028L18.7627 9.96113L18.8419 9.28778L18.8872 8.85714L18.9211 8.41595L18.9546 7.97425L18.9777 7.31196L18.9998 6.87027V5.85472L18.808 5.69995L18.5143 5.47935L18.2093 5.28087L17.8924 5.10398L17.3503 4.87234L16.9666 4.72862L16.5705 4.60702L16.0171 4.45275L15.5871 4.35376L15.1581 4.26532L14.5141 4.17688L14.0733 4.1216L13.6212 4.07738L12.9319 4.02211L12.4803 4.01105L12.0508 4L11.5082 4.01105L11.0674 4.02211L10.446 4.05527L9.99443 4.09949L9.55362 4.15477L9.06755 4.20954L8.63806 4.28743L8.18646 4.36431L7.58723 4.50802L7.16906 4.62913L6.7622 4.76179L6.18611 5.01555L5.81372 5.20348L5.46292 5.41302L5.12396 5.66729L5.0108 5.75522L5 5.79944V6.69389L5.0108 7.13559L5.03343 7.58783L5.04475 8.02953L5.0787 8.47072L5.10133 8.91241L5.13528 9.36517L5.2258 10.0717L5.2937 10.5023L5.3724 10.9325L5.46292 11.3742L5.56477 11.7937L5.67793 12.2244L5.76845 12.5002L5.91505 12.9198L6.06164 13.3284L6.23138 13.7253L6.49113 14.3434L6.6835 14.7409L6.88667 15.1278L7.10116 15.5137L7.31616 15.9006L7.59855 16.3418L7.84749 16.7172L8.09593 17.0705L8.35568 17.4348L8.63806 17.788L9.02229 18.2629L9.3165 18.5935L9.60969 18.9141L9.91522 19.2453L10.2315 19.5654L10.5931 19.9076L10.9208 20.2055L11.2598 20.4704L11.61 20.7467L11.7911 20.8678ZM11.2145 18.682L11.9717 19.3995L12.2993 19.1237L12.4351 18.9689L12.7622 18.6599L13.0786 18.3619L13.3728 18.0307L13.6665 17.7106L13.9494 17.3684L14.221 17.0262L14.4802 16.673L14.8649 16.1428L15.1129 15.779L15.35 15.4147L15.5871 15.0394L15.8134 14.6529L15.9718 14.3655L16.175 13.9685L16.3679 13.5711L16.5484 13.1736L16.7856 12.6219L16.91 12.2133L17.034 11.8048L17.1353 11.3852L17.2037 11.0541L17.3051 10.6239L17.3843 10.1933L17.4516 9.76264L17.5309 9.10035L17.5761 8.6697L17.6106 8.22801L17.6327 7.78682L17.6666 7.1798L17.6774 6.73811L17.6898 6.55017L17.6106 6.50595L17.4408 6.40646L17.124 6.21902L16.7747 6.0532L16.424 5.92105L16.0624 5.8105L15.5763 5.68889L15.1694 5.60095L14.7513 5.53462L14.0399 5.43513L13.6099 5.40196L13.1578 5.3693L12.4804 5.33614H11.7006L11.2485 5.35825L10.7855 5.3693L10.1071 5.42407L9.6663 5.46829L9.22601 5.52357L8.7852 5.60095L8.09596 5.75522L7.6891 5.86577L7.27093 6.00898L6.83012 6.18586L6.46904 6.37379L6.33325 6.43962V7.09136L6.35588 7.53255L6.37851 7.97425L6.40115 8.41594L6.44641 8.85714L6.49116 9.29883L6.54774 9.74053L6.61563 10.1712L6.71696 10.8445L6.8188 11.2636L6.93196 11.6942L7.05644 12.1138L7.1804 12.5334L7.33882 12.9419L7.63252 13.7032L7.82489 14.0896L8.02807 14.4761L8.23175 14.863L8.46887 15.2268L8.73994 15.6795L8.98837 16.0549L9.23732 16.4082L9.50839 16.7614L9.77946 17.1147L10.0618 17.4458L10.5592 18.0086L10.8642 18.3292L11.1693 18.6493L11.2145 18.682Z", fill: "black" }), (0, s.jsx)("path", { d: "M10.6431 9.63695L10.6878 9.56383H10.5073L10.3263 9.55386L9.98781 9.56383L9.62573 9.59564L9.27597 9.65784L8.93703 9.7414L8.59756 9.87671L8.31519 10.0125L8.21387 10.0647L8.2365 9.97072L8.28176 9.81404L8.34965 9.51208L8.47361 9.22009L8.6202 8.93807L8.77861 8.66698L8.98228 8.40632L9.19677 8.16656L9.44519 7.9681L9.6823 7.8119L9.94255 7.67612L10.2702 7.56122L10.5186 7.51944L10.7902 7.49902L11.0499 7.50947H11.1065L14.6991 7.94721H14.8236L15.0494 7.95766L15.2989 7.93677L15.5236 7.88502L15.7499 7.8119L15.9649 7.7179L16.1686 7.59255L16.2139 7.57166L16.202 7.59255V7.70745L16.1907 7.85368L16.1686 8.06211L16.1115 8.28098L16.021 8.48941L15.9084 8.68787L15.7618 8.86496L15.6141 9.03208L15.4676 9.15742L15.2757 9.29273L15.0607 9.39718L14.8468 9.48027L14.4399 9.59564L14.1575 9.63695L13.7836 9.66828H13.5249L12.5184 9.65784L12.4623 9.82496L12.4397 9.96027L12.4057 10.2314V10.5238L12.4397 10.7949L12.5076 11.066L12.5184 11.1287L12.5976 11.0556L12.6768 10.9825L12.8578 10.8676L13.0497 10.7636L13.2533 10.6905L13.4673 10.6278L13.6823 10.6069L13.9318 10.6278L14.1123 10.6591L14.2933 10.7218L14.5073 10.8258L14.677 10.9302L14.711 10.9616L14.1123 12.6304L14.0783 12.5991L14.0218 12.5364L13.9086 12.4324L13.7728 12.328L13.6262 12.2549L13.4673 12.1922L13.3099 12.1504L13.1402 12.1404L12.9699 12.1504L12.7781 12.1922H12.756L12.7673 12.328L12.7781 12.5051V12.7244L12.7673 13.0791L12.722 13.4233L12.6547 13.7675L12.5523 14.0486L12.417 14.341L12.2812 14.6226L12.0668 14.8937L11.8862 15.0608L11.6712 15.217L11.4341 15.3319L11.2305 15.4155L11.0047 15.4677L10.7784 15.499H10.5299L10.2815 15.4781L10.0104 15.3841L9.9765 15.3737L10.0439 15.3319L10.1118 15.2901L10.2136 15.1752L10.3263 15.0399L10.3941 14.9041L10.4507 14.7584L10.496 14.6017V14.3306L10.462 14.1848L10.4168 14.0386L10.3715 13.861L9.89729 12.1295L9.88598 11.9838L9.86335 11.6918L9.87466 11.3998L9.91992 11.1183L9.98781 10.8258L10.0778 10.5447L10.2136 10.2836L10.3607 10.0334L10.5412 9.75184L10.6431 9.63695Z", fill: "black" })] })
          : (0, s.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [(0, s.jsx)("rect", { width: "24", height: "24", rx: "12", fill: "black" }), (0, s.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7911 20.8678L11.9716 21L12.4351 20.6362L12.7853 20.3603L13.1238 20.0729L13.4633 19.786L13.7796 19.499L14.0964 19.19L14.4015 18.8699L14.5933 18.6493L14.887 18.3182L15.1812 17.9865L15.4405 17.6333L15.7115 17.28L15.9718 16.9267L16.2542 16.5077L16.48 16.1318L16.7063 15.7459L16.9321 15.3705L17.2258 14.7967L17.4187 14.4097L17.6106 14.0017L17.7911 13.6042L17.9721 13.1404L18.1187 12.7319L18.2545 12.3123L18.3667 11.8927L18.5256 11.2636L18.6161 10.8335L18.6953 10.4028L18.7627 9.96113L18.8419 9.28778L18.8872 8.85714L18.9211 8.41595L18.9546 7.97425L18.9777 7.31196L18.9998 6.87027V5.85472L18.808 5.69995L18.5143 5.47935L18.2093 5.28087L17.8924 5.10398L17.3503 4.87234L16.9666 4.72862L16.5705 4.60702L16.0171 4.45275L15.5871 4.35376L15.1581 4.26532L14.5141 4.17688L14.0733 4.1216L13.6212 4.07738L12.9319 4.02211L12.4803 4.01105L12.0508 4L11.5082 4.01105L11.0674 4.02211L10.446 4.05527L9.99443 4.09949L9.55362 4.15477L9.06755 4.20954L8.63806 4.28743L8.18646 4.36431L7.58723 4.50802L7.16906 4.62913L6.7622 4.76179L6.18611 5.01555L5.81372 5.20348L5.46292 5.41302L5.12396 5.66729L5.0108 5.75522L5 5.79944V6.69389L5.0108 7.13559L5.03343 7.58783L5.04475 8.02953L5.0787 8.47072L5.10133 8.91241L5.13528 9.36517L5.2258 10.0717L5.2937 10.5023L5.3724 10.9325L5.46292 11.3742L5.56477 11.7937L5.67793 12.2244L5.76845 12.5002L5.91505 12.9198L6.06164 13.3284L6.23138 13.7253L6.49113 14.3434L6.6835 14.7409L6.88667 15.1278L7.10116 15.5137L7.31616 15.9006L7.59855 16.3418L7.84749 16.7172L8.09593 17.0705L8.35568 17.4348L8.63806 17.788L9.02229 18.2629L9.3165 18.5935L9.60969 18.9141L9.91522 19.2453L10.2315 19.5654L10.5931 19.9076L10.9208 20.2055L11.2598 20.4704L11.61 20.7467L11.7911 20.8678ZM11.2145 18.682L11.9717 19.3995L12.2993 19.1237L12.4351 18.9689L12.7622 18.6599L13.0786 18.3619L13.3728 18.0307L13.6665 17.7106L13.9494 17.3684L14.221 17.0262L14.4802 16.673L14.8649 16.1428L15.1129 15.779L15.35 15.4147L15.5871 15.0394L15.8134 14.6529L15.9718 14.3655L16.175 13.9685L16.3679 13.5711L16.5484 13.1736L16.7856 12.6219L16.91 12.2133L17.034 11.8048L17.1353 11.3852L17.2037 11.0541L17.3051 10.6239L17.3843 10.1933L17.4516 9.76264L17.5309 9.10035L17.5761 8.6697L17.6106 8.22801L17.6327 7.78682L17.6666 7.1798L17.6774 6.73811L17.6898 6.55017L17.6106 6.50595L17.4408 6.40646L17.124 6.21902L16.7747 6.0532L16.424 5.92105L16.0624 5.8105L15.5763 5.68889L15.1694 5.60095L14.7513 5.53462L14.0399 5.43513L13.6099 5.40196L13.1578 5.3693L12.4804 5.33614H11.7006L11.2485 5.35825L10.7855 5.3693L10.1071 5.42407L9.6663 5.46829L9.22601 5.52357L8.7852 5.60095L8.09596 5.75522L7.6891 5.86577L7.27093 6.00898L6.83012 6.18586L6.46904 6.37379L6.33325 6.43962V7.09136L6.35588 7.53255L6.37851 7.97425L6.40115 8.41594L6.44641 8.85714L6.49116 9.29883L6.54774 9.74053L6.61563 10.1712L6.71696 10.8445L6.8188 11.2636L6.93196 11.6942L7.05644 12.1138L7.1804 12.5334L7.33882 12.9419L7.63252 13.7032L7.82489 14.0896L8.02807 14.4761L8.23175 14.863L8.46887 15.2268L8.73994 15.6795L8.98837 16.0549L9.23732 16.4082L9.50839 16.7614L9.77946 17.1147L10.0618 17.4458L10.5592 18.0086L10.8642 18.3292L11.1693 18.6493L11.2145 18.682Z", fill: "white" }), (0, s.jsx)("path", { d: "M10.6431 9.63695L10.6878 9.56383H10.5073L10.3263 9.55386L9.98781 9.56383L9.62573 9.59564L9.27597 9.65784L8.93703 9.7414L8.59756 9.87671L8.31519 10.0125L8.21387 10.0647L8.2365 9.97072L8.28176 9.81404L8.34965 9.51208L8.47361 9.22009L8.6202 8.93807L8.77861 8.66698L8.98228 8.40632L9.19677 8.16656L9.44519 7.9681L9.6823 7.8119L9.94255 7.67612L10.2702 7.56122L10.5186 7.51944L10.7902 7.49902L11.0499 7.50947H11.1065L14.6991 7.94721H14.8236L15.0494 7.95766L15.2989 7.93677L15.5236 7.88502L15.7499 7.8119L15.9649 7.7179L16.1686 7.59255L16.2139 7.57166L16.202 7.59255V7.70745L16.1907 7.85368L16.1686 8.06211L16.1115 8.28098L16.021 8.48941L15.9084 8.68787L15.7618 8.86496L15.6141 9.03208L15.4676 9.15742L15.2757 9.29273L15.0607 9.39718L14.8468 9.48027L14.4399 9.59564L14.1575 9.63695L13.7836 9.66828H13.5249L12.5184 9.65784L12.4623 9.82496L12.4397 9.96027L12.4057 10.2314V10.5238L12.4397 10.7949L12.5076 11.066L12.5184 11.1287L12.5976 11.0556L12.6768 10.9825L12.8578 10.8676L13.0497 10.7636L13.2533 10.6905L13.4673 10.6278L13.6823 10.6069L13.9318 10.6278L14.1123 10.6591L14.2933 10.7218L14.5073 10.8258L14.677 10.9302L14.711 10.9616L14.1123 12.6304L14.0783 12.5991L14.0218 12.5364L13.9086 12.4324L13.7728 12.328L13.6262 12.2549L13.4673 12.1922L13.3099 12.1504L13.1402 12.1404L12.9699 12.1504L12.7781 12.1922H12.756L12.7673 12.328L12.7781 12.5051V12.7244L12.7673 13.0791L12.722 13.4233L12.6547 13.7675L12.5523 14.0486L12.417 14.341L12.2812 14.6226L12.0668 14.8937L11.8862 15.0608L11.6712 15.217L11.4341 15.3319L11.2305 15.4155L11.0047 15.4677L10.7784 15.499H10.5299L10.2815 15.4781L10.0104 15.3841L9.9765 15.3737L10.0439 15.3319L10.1118 15.2901L10.2136 15.1752L10.3263 15.0399L10.3941 14.9041L10.4507 14.7584L10.496 14.6017V14.3306L10.462 14.1848L10.4168 14.0386L10.3715 13.861L9.89729 12.1295L9.88598 11.9838L9.86335 11.6918L9.87466 11.3998L9.91992 11.1183L9.98781 10.8258L10.0778 10.5447L10.2136 10.2836L10.3607 10.0334L10.5412 9.75184L10.6431 9.63695Z", fill: "white" })] });
      }
      function h(e) {
        let {} = e,
          { leaderboardData: t } = (0, a.$1)(),
          { showLegendModal: l, setShowLegendModal: o } = (0, i.zB)();
        return (0, s.jsx)(n.u.Root, {
          show: l,
          as: c.Fragment,
          children: (0, s.jsxs)(d.V, {
            as: "div",
            className: "relative z-10",
            onClose: o,
            children: [
              (0, s.jsx)(n.u.Child, { as: c.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, s.jsx)("div", { className: "fixed inset-0 bg-black bg-opacity-80 transition-opacity" }) }),
              (0, s.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, s.jsx)("div", {
                  className: "flex min-h-full items-end justify-center p-4 pb-6 text-center sm:items-center sm:p-0",
                  children: (0, s.jsx)(n.u.Child, {
                    as: c.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    children: (0, s.jsx)(d.V.Panel, {
                      className: "relative transform overflow-hidden w-full rounded-lg bg-white px-4 pb-6 pt-4 text-left shadow-xl transition-all md:my-8 md:w-full md:max-w-2xl md:p-6",
                      children: (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsxs)("div", { className: "flex justify-between items-center pb-2 mb-4", children: [(0, s.jsx)(d.V.Title, { as: "h3", className: "headline", children: "Legend" }), (0, s.jsx)("button", { type: "button", className: "inline-flex justify-center rounded-md px-3 py-2 text-sm font-semibold text-white hover:bg-rc-light-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rc-gray", onClick: () => o(!1), children: (0, s.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [(0, s.jsx)("g", { opacity: "0.5", clipPath: "url(#clip0_111_4805)", children: (0, s.jsx)("path", { d: "M12 10.5857L16.95 5.63574L18.364 7.04974L13.414 11.9997L18.364 16.9497L16.95 18.3637L12 13.4137L7.04999 18.3637L5.63599 16.9497L10.586 11.9997L5.63599 7.04974L7.04999 5.63574L12 10.5857Z", fill: "black" }) }), (0, s.jsx)("defs", { children: (0, s.jsx)("clipPath", { id: "clip0_111_4805", children: (0, s.jsx)("rect", { width: "24", height: "24", fill: "white" }) }) })] }) })] }),
                          (0, s.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 md:gap-6",
                            children: [
                              (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "subhead font-semibold", children: "Position Markers" }), (0, s.jsx)("hr", {}), (0, s.jsxs)("div", { className: "mt-2 mb-3", children: [(0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "cell-data font-bold mb-0.5", children: (0, s.jsx)(L, { position: 3, marker: null, showHeaderAndHideBody: !1 }) }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5 flex items-center", children: "Current Position" })] }), (0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "cell-data font-bold mb-0.5", children: (0, s.jsx)(L, { position: 1, marker: "RankingImproved", showHeaderAndHideBody: !1 }) }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5 flex items-center", children: "Position Improved" })] }), (0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "cell-data font-bold mb-0.5", children: (0, s.jsx)(L, { position: 2, marker: "RankingDeclined", showHeaderAndHideBody: !1 }) }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5 flex items-center", children: "Position Declined" })] })] }), (null == t ? void 0 : t.leaderboardHeartbeat.series) === "I" && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("div", { className: "subhead font-semibold", children: "TIRES" }), (0, s.jsx)("hr", {}), (0, s.jsxs)("div", { className: "mt-2 mb-3", children: [(0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "cell-data font-bold mb-0.5", children: (0, s.jsx)(u, { tire: "P" }) }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5 flex items-center", children: "Primary" })] }), (0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "cell-data font-bold mb-0.5", children: (0, s.jsx)(u, { tire: "A" }) }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5 flex items-center", children: "Alternate" })] }), (0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "cell-data font-bold mb-0.5", children: (0, s.jsx)(u, { tire: "W" }) }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5 flex items-center", children: "Rain" })] })] })] }), (0, s.jsx)("div", { className: "subhead font-semibold", children: "Status" }), (0, s.jsx)("hr", {}), (0, s.jsxs)("div", { className: "mt-2 mb-3", children: [(0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "inline-flex items-center justify-center mt-0.5 mb-0.5 rounded-md bg-rc-green/90 px-2 tracking-wider text-xxs font-bold text-stone-50 ring-1 ring-inset ring-rc-green/10 uppercase whitespace-nowrap mr-1 w-fit h-fit py-0.5", children: "Active" }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5 flex items-center mt-1", children: "Running / On-Track" })] }), (0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "inline-flex items-center justify-center mt-0.5 mb-0.5 rounded-md bg-rc-purple/90 px-2 tracking-wider text-xxs font-bold text-stone-50 ring-1 ring-inset ring-rc-purple/10 uppercase mr-1 w-fit h-fit py-0.5", children: "Best Lap" }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5 flex items-center mt-1", children: "New Personal Best Lap" })] }), (0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "inline-flex items-center justify-center mt-0.5 mb-0.5 rounded-md bg-rc-dark-gray/90 px-2 tracking-wider text-xxs font-bold text-stone-50 ring-1 ring-inset ring-rc-dark-gray/10 uppercase mr-1 w-fit h-fit py-0.5", children: "In Pit" }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5 flex items-center mt-1", children: "In Pit Lane" })] }), (0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "inline-flex items-center justify-center mt-0.5 mb-0.5 rounded-md bg-rc-red/90 px-2 tracking-wider text-xxs font-bold text-stone-50 ring-1 ring-inset ring-rc-red/10 uppercase mr-1 w-fit h-fit py-0.5", children: "Cont." }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5 flex items-center mt-1", children: "Contact" })] }), (0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "inline-flex items-center justify-center mt-0.5 mb-0.5 rounded-md bg-rc-red/90 px-2 tracking-wider text-xxs font-bold text-stone-50 ring-1 ring-inset ring-rc-red/10 uppercase mr-1 w-fit h-fit py-0.5", children: "Off." }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5 flex items-center mt-1", children: "Off Track" })] }), (0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "inline-flex items-center justify-center mt-0.5 mb-0.5 rounded-md bg-rc-red/90 px-2 tracking-wider text-xxs font-bold text-stone-50 ring-1 ring-inset ring-rc-red/10 uppercase mr-1 w-fit h-fit py-0.5", children: "Mech." }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5 flex items-center mt-1", children: "Mechanical Failure" })] }), (0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "inline-flex items-center justify-center mt-0.5 mb-0.5 rounded-md bg-rc-red/90 px-2 tracking-wider text-xxs font-bold text-stone-50 ring-1 ring-inset ring-rc-red/10 uppercase mr-1 w-fit h-fit py-0.5", children: "DQ" }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5 flex items-center mt-1", children: "Disqualified" })] }), (0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "inline-flex items-center justify-center mt-0.5 mb-0.5 rounded-md bg-rc-red/90 px-2 tracking-wider text-xxs font-bold text-stone-50 ring-1 ring-inset ring-rc-red/10 uppercase mr-1 w-fit h-fit py-0.5", children: "DNF" }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5 flex items-center mt-1", children: "Did not finish" })] })] })] }),
                              (0, s.jsxs)("div", {
                                children: [
                                  (0, s.jsx)("div", { className: "subhead font-semibold", children: "Leaderboard Columns" }),
                                  (0, s.jsx)("hr", {}),
                                  (0, s.jsxs)("div", {
                                    className: "mt-2",
                                    children: [
                                      (0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "cell-data font-black mb-0.5", children: "POS" }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5", children: "Position" })] }),
                                      (0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "cell-data font-black mb-0.5", children: "NAME/NO." }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5", children: "Driver Name / Car Number" })] }),
                                      null == t
                                        ? void 0
                                        : t.leaderboardColumns.map((e) => {
                                            let t = r.a[e];
                                            return "rank" === e || "liveRank" === e ? (0, s.jsx)("div", {}, "rank") : (0, s.jsxs)("div", { className: "grid grid-cols-4", children: [(0, s.jsx)("div", { className: "cell-data font-black mb-0.5", children: t.label }), (0, s.jsx)("div", { className: "col-span-3 cell-data mb-0.5", children: t.description })] }, e);
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var x = l(6691),
        p = l.n(x);
      function v(e) {
        let { showWaysToWatchModal: t, setShowWaysToWatchModal: l } = e,
          { configData: a } = (0, m.Zq)();
        return (0, s.jsx)(n.u.Root, { show: t, as: c.Fragment, children: (0, s.jsxs)(d.V, { as: "div", className: "relative z-10", onClose: l, children: [(0, s.jsx)(n.u.Child, { as: c.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, s.jsx)("div", { className: "fixed inset-0 bg-black bg-opacity-80 transition-opacity" }) }), (0, s.jsx)("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: (0, s.jsx)("div", { className: "flex min-h-full items-end justify-center p-4 pb-6 text-center sm:items-center sm:p-0", children: (0, s.jsx)(n.u.Child, { as: c.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", children: (0, s.jsx)(d.V.Panel, { className: "relative transform overflow-hidden w-full rounded-lg bg-white px-4 pb-4 pt-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6", children: (0, s.jsxs)("div", { children: [(0, s.jsxs)("div", { className: "flex justify-between items-center border-b pb-2 mb-4 border-b-rc-gray", children: [(0, s.jsx)(d.V.Title, { as: "h3", className: "headline ", children: "Ways to Watch" }), (0, s.jsx)("button", { type: "button", className: "inline-flex justify-center rounded-md px-3 py-2 text-sm font-semibold text-white hover:bg-rc-light-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rc-gray", onClick: () => l(!1), children: (0, s.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [(0, s.jsx)("g", { opacity: "0.5", clipPath: "url(#clip0_111_4805)", children: (0, s.jsx)("path", { d: "M12 10.5857L16.95 5.63574L18.364 7.04974L13.414 11.9997L18.364 16.9497L16.95 18.3637L12 13.4137L7.04999 18.3637L5.63599 16.9497L10.586 11.9997L5.63599 7.04974L7.04999 5.63574L12 10.5857Z", fill: "black" }) }), (0, s.jsx)("defs", { children: (0, s.jsx)("clipPath", { id: "clip0_111_4805", children: (0, s.jsx)("rect", { width: "24", height: "24", fill: "white" }) }) })] }) })] }), (0, s.jsx)("div", { children: null == a ? void 0 : a.ways_to_watch.filter((e) => e.show).map((e, t) => (0, s.jsxs)("a", { href: e.url, target: "_blank", className: "flex justify-between items-center px-4 py-3 border border-rc-gray bg-rc-light-gray rounded-lg w-full mb-2 hover:bg-rc-gray transition-all", children: [(0, s.jsx)("div", { children: (0, s.jsx)(p(), { src: e.image.source, width: e.image.width, height: e.image.height, alt: e.image.alt }) }), (0, s.jsxs)("div", { className: "flex space-x-1 items-center", children: [(0, s.jsx)("div", { className: "cta-secondary", children: e.text }), (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: (0, s.jsx)("path", { d: "M3.02502 9.5L5.52502 6L3.02502 2.5H4.25002L6.75003 6L4.25002 9.5H3.02502ZM6.00002 9.5L8.50002 6L6.00002 2.5H7.22503L9.72503 6L7.22503 9.5H6.00002Z", fill: "black" }) })] })] }, t)) })] }) }) }) }) })] }) });
      }
      function f(e) {
        var t, l, i, r, n, d, c, L, m, u, h, x, v, f, g, b, w, j;
        let {} = e,
          { enlargeLeaderboard: y, leaderboardData: N } = (0, a.$1)();
        return (0, s.jsxs)("section", { className: (0, o.AK)(y ? "lg:hidden" : "lg:block", "sticky left-0 z-20 bg-rc-light-gray p-2 pb-4 w-screen lg:w-full"), children: [(0, s.jsxs)("div", { className: "flex justify-between", children: [(0, s.jsx)("div", { className: "section-header flex-grow", children: "Quick Insights" }), (0, s.jsxs)("div", { className: "flex items-center w-fit", children: [(0, s.jsx)("div", { className: "label-sm text-rc-text-gray mr-1", children: "Powered by" }), (0, s.jsx)(p(), { src: (0, o.yq)(o.BB ? "https://d1b8ufspcmikd1.cloudfront.net/scripts/indycar/racecontrol/" : "/", "ntt-logo.png"), width: 45, height: 16, alt: "NTT Logo" })] })] }), (0, s.jsxs)("div", { className: (0, o.AK)("grid grid-cols-2 gap-2 mt-2 w-full", (null == N ? void 0 : N.leaderboardHeartbeat.series) === "L" ? "text-rc-indynxt" : "text-rc-indycar"), children: [(null == N ? void 0 : N.leaderboardHeartbeat.sessionType) === "P" && ((null == N ? void 0 : N.leaderboardHeartbeat.trackType) === "RC" || (null == N ? void 0 : N.leaderboardHeartbeat.trackType) === "SC" || (null == N ? void 0 : N.leaderboardHeartbeat.trackType) === void 0) && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Total Laps" }), (0, s.jsx)("div", { className: "data font-medium", children: null == N ? void 0 : N.leaderboardQuickInsights.totalLaps })] }), (0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Red Flags" }), (0, s.jsx)("div", { className: "data font-medium", children: null !== (h = null == N ? void 0 : null === (l = N.leaderboardQuickInsights.flagCounts) || void 0 === l ? void 0 : null === (t = l.red) || void 0 === t ? void 0 : t.length) && void 0 !== h ? h : 0 })] }), (0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Green Flag Time" }), (0, s.jsx)("div", { className: "data font-medium", children: null !== (x = null == N ? void 0 : null === (i = N.leaderboardQuickInsights.flagTimes) || void 0 === i ? void 0 : i.green) && void 0 !== x ? x : "00:00" })] }), (0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Red Flag Time" }), (0, s.jsx)("div", { className: "data font-medium", children: null !== (v = null == N ? void 0 : null === (r = N.leaderboardQuickInsights.flagTimes) || void 0 === r ? void 0 : r.red) && void 0 !== v ? v : "00:00" })] })] }), (null == N ? void 0 : N.leaderboardHeartbeat.sessionType) === "Q" && ((null == N ? void 0 : N.leaderboardHeartbeat.trackType) === "RC" || (null == N ? void 0 : N.leaderboardHeartbeat.trackType) === "SC" || (null == N ? void 0 : N.leaderboardHeartbeat.trackType) === void 0) && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Total Laps" }), (0, s.jsx)("div", { className: "data font-medium", children: null == N ? void 0 : N.leaderboardQuickInsights.totalLaps })] }), (0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(null == N ? void 0 : N.leaderboardQuickInsights.cutLine) === 1 ? (0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Pole Time" }) : (0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Cut Line Time" }), (0, s.jsx)("div", { className: "data font-medium", children: null == N ? void 0 : N.leaderboardQuickInsights.cutLineTime })] }), (0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Green Flag Time" }), (0, s.jsx)("div", { className: "data font-medium", children: null !== (f = null == N ? void 0 : null === (n = N.leaderboardQuickInsights.flagTimes) || void 0 === n ? void 0 : n.green) && void 0 !== f ? f : "00:00" })] }), (0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Red Flag Time" }), (0, s.jsx)("div", { className: "data font-medium", children: null !== (g = null == N ? void 0 : null === (d = N.leaderboardQuickInsights.flagTimes) || void 0 === d ? void 0 : d.red) && void 0 !== g ? g : "00:00" })] })] }), (null == N ? void 0 : N.leaderboardHeartbeat.sessionType) === "R" && ((null == N ? void 0 : N.leaderboardHeartbeat.trackType) === "RC" || (null == N ? void 0 : N.leaderboardHeartbeat.trackType) === "SC" || (null == N ? void 0 : N.leaderboardHeartbeat.trackType) === void 0) && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Avg. Speed" }), (0, s.jsx)("div", { className: "data font-medium", children: null == N ? void 0 : N.leaderboardQuickInsights.averageSpeed })] }), (0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "On-Track Passes" }), (0, s.jsx)("div", { className: "data font-medium", children: null == N ? void 0 : N.leaderboardQuickInsights.totalPasses })] }), (0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Lead Changes" }), (0, s.jsx)("div", { className: "data font-medium", children: null == N ? void 0 : N.leaderboardQuickInsights.leadChanges })] }), (0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Race Leaders" }), (0, s.jsx)("div", { className: "data font-medium", children: null == N ? void 0 : N.leaderboardQuickInsights.raceLeaders })] })] }), (null == N ? void 0 : N.leaderboardHeartbeat.sessionType) === "P" && ((null == N ? void 0 : N.leaderboardHeartbeat.trackType) === "O" || (null == N ? void 0 : N.leaderboardHeartbeat.trackType) === "I") && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Total Laps" }), (0, s.jsx)("div", { className: "data font-medium", children: null == N ? void 0 : N.leaderboardQuickInsights.totalLaps })] }), (0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Yellow Flags" }), (0, s.jsx)("div", { className: "data font-medium", children: null !== (b = null == N ? void 0 : null === (L = N.leaderboardQuickInsights.flagCounts) || void 0 === L ? void 0 : null === (c = L.yellow) || void 0 === c ? void 0 : c.length) && void 0 !== b ? b : 0 })] }), (0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Green Flag Time" }), (0, s.jsx)("div", { className: "data font-medium", children: null !== (w = null == N ? void 0 : null === (m = N.leaderboardQuickInsights.flagTimes) || void 0 === m ? void 0 : m.green) && void 0 !== w ? w : "00:00" })] }), (0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Yellow Flag Time" }), (0, s.jsx)("div", { className: "data font-medium", children: null !== (j = null == N ? void 0 : null === (u = N.leaderboardQuickInsights.flagTimes) || void 0 === u ? void 0 : u.yellow) && void 0 !== j ? j : "00:00" })] })] }), (null == N ? void 0 : N.leaderboardHeartbeat.sessionType) === "R" && ((null == N ? void 0 : N.leaderboardHeartbeat.trackType) === "O" || (null == N ? void 0 : N.leaderboardHeartbeat.trackType) === "I") && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Avg. Speed" }), (0, s.jsx)("div", { className: "data font-medium", children: null == N ? void 0 : N.leaderboardQuickInsights.averageSpeed })] }), (0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "On-Track Passes" }), (0, s.jsx)("div", { className: "data font-medium", children: null == N ? void 0 : N.leaderboardQuickInsights.totalPasses })] }), (0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Lead Changes" }), (0, s.jsx)("div", { className: "data font-medium", children: null == N ? void 0 : N.leaderboardQuickInsights.leadChanges })] }), (0, s.jsxs)("div", { className: "bg-white rounded-md flex items-center justify-between w-full py-1 px-2", children: [(0, s.jsx)("div", { className: "label text-rc-text-gray", children: "Race Leaders" }), (0, s.jsx)("div", { className: "data font-medium", children: null == N ? void 0 : N.leaderboardQuickInsights.raceLeaders })] })] })] })] });
      }
      var g = l(9661);
      let b = ["driverName", "carEndplateImage", "comment"],
        w = ["rank", "liveRank", "startPosition", "bestLap", "pitStops", "lastPitLap", "totalDriverPoints", "noTowRank", "lapsSincePit", "passes", "overtakeRemaining", "predictedNextPitLap", "lapDistance", "runningDriverPoints"],
        j = ["diff", "liveDiff", "gap", "liveGap", "laps", "bestLapTime", "bestLapSpeed", "lastLapTime", "lastLapSpeed", "carNumber", "noTowBestTime", "S1", "S2", "S3", "BS1", "BS2", "BS3", "TS1", "TS2", "TS3", "BTS1", "BTS2", "BTS3", "Q1", "Q2", "Q3", "Q4", "QTotal", "QS1", "QS2", "QS3", "QS4", "QSAverage", "averageSpeed"],
        y = ["predictedNextPitLap"],
        N = ["rank", "carNumber", "comment", "diff", "gap", "engine", "tire", "lastLapTime", "lastLapSpeed", "bestLapTime", "bestLapSpeed", "bestLap", "laps", "S1", "S2", "S3", "BS1", "BS2", "BS3"],
        T = ["rank", "carNumber", "comment", "diff", "gap", "engine", "tire", "bestLapTime", "lastLapTime", "bestLapSpeed", "lastLapSpeed", "laps", "S1", "S2", "S3", "BS1", "BS2", "BS3"],
        k = ["liveRank", "carNumber", "comment", "liveDiff", "liveGap", "engine", "tire", "bestLapTime", "lastLapTime", "bestLapSpeed", "lastLapSpeed", "laps", "startPosition", "pitStops", "lapsSincePit", "predictedNextPitLap", "passes", "overtakeRemaining"],
        H = ["rank", "carNumber", "comment", "engine", "tire", "bestLapSpeed", "bestLapTime", "bestLap", "lastLapSpeed", "lastLapTime", "laps", "noTowBestTime", "noTowRank"],
        S = ["rank", "carNumber", "comment", "diff", "gap", "engine", "tire", "lastLapTime", "lastLapSpeed", "bestLapTime", "bestLap", "laps", "noTowRank", "noTowBestTime"],
        A = ["liveRank", "carNumber", "comment", "liveDiff", "liveGap", "engine", "tire", "bestLapSpeed", "lastLapSpeed", "bestLapTime", "lastLapTime", "laps", "startPosition", "pitStops", "lapsSincePit", "passes"],
        I = ["rank", "carNumber", "comment", "diff", "gap", "bestLapTime", "lastLapTime", "bestLapSpeed", "lastLapSpeed", "bestLap", "laps", "S1", "S2", "S3", "BS1", "BS2", "BS3"],
        B = ["rank", "carNumber", "comment", "diff", "gap", "bestLapTime", "lastLapTime", "bestLapSpeed", "lastLapSpeed", "laps", "S1", "S2", "S3", "BS1", "BS2", "BS3"],
        _ = ["liveRank", "carNumber", "comment", "liveDiff", "liveGap", "bestLapTime", "lastLapTime", "bestLapSpeed", "lastLapSpeed", "laps", "startPosition", "passes", "overtakeRemaining"],
        R = ["rank", "carNumber", "comment", "diff", "gap", "engine", "tire", "lastLapTime", "lastLapSpeed", "bestLapTime", "bestLap", "laps", "noTowRank", "noTowBestTime"],
        C = ["rank", "carNumber", "comment", "diff", "gap", "engine", "tire", "lastLapTime", "lastLapSpeed", "bestLapTime", "bestLap", "laps", "noTowRank", "noTowBestTime"],
        D = ["liveRank", "carNumber", "comment", "liveDiff", "liveGap", "engine", "tire", "bestLapSpeed", "lastLapSpeed", "bestLapTime", "lastLapTime", "laps", "startPosition", "pitStops", "lapsSincePit", "passes", "comment"],
        P = ["rank", "carNumber", "comment", "diff", "gap", "engine", "tire", "lastLapTime", "lastLapSpeed", "bestLapTime", "bestLapSpeed", "bestLap", "laps"];
      class V {
        getLeaderboardColumns(e) {
          if (e) {
            if ("O" === e.trackType || "I" === e.trackType) {
              if ("I" === e.series)
                switch (e.sessionType) {
                  case "P":
                    return H;
                  case "Q":
                    return S;
                  case "R":
                    return A;
                }
              else
                switch (e.sessionType) {
                  case "P":
                    return R;
                  case "Q":
                    return C;
                  case "R":
                    return D;
                }
            } else if ("I" === e.series)
              switch (e.sessionType) {
                case "P":
                  return N;
                case "Q":
                  return T;
                case "R":
                  return k;
              }
            else
              switch (e.sessionType) {
                case "P":
                  return I;
                case "Q":
                  return B;
                case "R":
                  return _;
              }
          }
          return P;
        }
        constructor(e, t, l, s) {
          var a, i;
          (this.leaderboardHeartbeat = new q(null == e ? void 0 : e.timing_results.heartbeat)),
            "L" === this.leaderboardHeartbeat.series
              ? (this.leaderboardItems =
                  null !==
                    (a =
                      null == e
                        ? void 0
                        : e.timing_results.Item.map((t) => {
                            var a;
                            return new F(
                              t,
                              null == e ? void 0 : e.timing_results.Item,
                              null !==
                                (a =
                                  null == l
                                    ? void 0
                                    : l.drivers.driver.filter((e) => {
                                        var l;
                                        return e.rc_driver_id === (null == t ? void 0 : null === (l = t.DriverID) || void 0 === l ? void 0 : l.toString());
                                      })[0]) && void 0 !== a
                                ? a
                                : null,
                              s
                            );
                          })) && void 0 !== a
                    ? a
                    : [])
              : (this.leaderboardItems =
                  null !==
                    (i =
                      null == e
                        ? void 0
                        : e.timing_results.Item.map((l) => {
                            var a;
                            return new F(
                              l,
                              null == e ? void 0 : e.timing_results.Item,
                              null !==
                                (a =
                                  null == t
                                    ? void 0
                                    : t.drivers.driver.filter((e) => {
                                        var t;
                                        return e.rc_driver_id === (null == l ? void 0 : null === (t = l.DriverID) || void 0 === t ? void 0 : t.toString());
                                      })[0]) && void 0 !== a
                                ? a
                                : null,
                              s
                            );
                          })) && void 0 !== i
                    ? i
                    : []),
            (this.leaderboardQuickInsights = new K(this.leaderboardHeartbeat, this.leaderboardItems)),
            (this.leaderboardColumns = this.getLeaderboardColumns(this.leaderboardHeartbeat));
        }
      }
      class q {
        getLapNumber(e, t) {
          if (null == e || null == t) return null;
          let l = parseInt(e),
            s = parseInt(t);
          if (Number.isNaN(l) || Number.isNaN(s)) return null;
          let a = l + 1;
          return a > s ? s : a;
        }
        constructor(e) {
          if (e) {
            var t, l, s, a;
            (this.preamble = e.preamble), (this.eventName = e.eventName), (this.trackName = e.trackName), (this.trackLength = e.trackLength), (this.trackType = e.trackType), (this.currentFlag = e.currentFlag), (this.totalLaps = e.totalLaps), (this.lapNumber = this.getLapNumber(e.lapNumber, e.totalLaps)), (this.sessionName = e.SessionName), (this.sessionType = e.SessionType), (this.specificSessionType = null !== (s = null === (t = e.preamble) || void 0 === t ? void 0 : t.split(".")[0]) && void 0 !== s ? s : null), (this.sessionStatus = e.SessionStatus), (this.eventId = e.EventID), (this.overallTimeToGo = e.overallTimeToGo), (this.flagTimes = e.flagTimes), (this.flagCounts = e.flagCounts), (this.leadChanges = e.leadChanges), (this.raceLeaders = e.raceLeaders), (this.series = null !== (a = null === (l = e.preamble) || void 0 === l ? void 0 : l.split(".")[1]) && void 0 !== a ? a : "I");
          } else (this.preamble = ""), (this.eventName = ""), (this.trackName = ""), (this.trackLength = ""), (this.trackType = null), (this.currentFlag = "UNFLAGGED"), (this.totalLaps = ""), (this.lapNumber = null), (this.sessionName = ""), (this.sessionType = null), (this.specificSessionType = null), (this.sessionStatus = "UNFLAGGED"), (this.eventId = ""), (this.overallTimeToGo = ""), (this.series = "I"), (this.flagTimes = null), (this.flagCounts = null), (this.leadChanges = 0), (this.raceLeaders = 1);
        }
      }
      class F {
        getLiveDiffFromLiveGap(e, t) {
          let l = 0;
          if (e.liveRank) {
            let s = t.filter((e) => 1 === e.liveRank);
            if (s.length > 0) {
              let t = s[0];
              if (t.laps && e.laps) {
                let l = parseInt(t.laps),
                  s = parseInt(e.laps);
                if (!Number.isNaN(l) && !Number.isNaN(s)) {
                  let e = l - s;
                  if (e >= 2) return { text: "".concat(e, " laps"), value: 999 };
                }
              }
            }
            t.filter((t) => t.liveRank && e.liveRank && t.liveRank <= e.liveRank && 1 !== t.liveRank).forEach((e) => {
              if (!e.liveGap) return;
              let t = parseFloat(e.liveGap);
              !Number.isNaN(t) && t && (l += t);
            });
          }
          return { text: l.toFixed(4), value: l };
        }
        constructor(e, t, l, s) {
          var a, i, r, n;
          if (((this.rank = e.rank), (this.liveRank = e.liveRank), (this.marker = e.marker), (this.driverId = e.DriverID), (this.driverName = ((a = e.firstName), (i = e.lastName), "".concat(null == a ? void 0 : a.substring(0, 1), ". ").concat(i))), (this.carEndplateImage = l ? l.endplatesmall : null), (this.diff = { text: e.diff, value: Q(e.diff) }), (this.gap = { text: e.gap, value: Q(e.gap) }), (this.liveDiff = this.getLiveDiffFromLiveGap(e, t)), (this.liveGap = { text: e.liveRank && 1 === e.liveRank ? "0.0000" : e.liveGap, value: Q(e.liveRank && 1 === e.liveRank ? "0.0000" : e.liveGap) }), (this.laps = { text: e.laps, value: Q(e.laps) }), (this.lastLapTime = { text: e.lastLapTime, value: Q(e.lastLapTime) }), (this.lastLapSpeed = { text: e.LastSpeed, value: null !== e.LastSpeed ? parseFloat(e.LastSpeed) : null }), (this.bestLapTime = { text: e.bestLapTime, value: Q(e.bestLapTime) }), (this.bestLapSpeed = { text: e.BestSpeed, value: null !== e.BestSpeed ? parseFloat(e.BestSpeed) : null }), (this.bestLap = null !== e.bestLap ? parseInt(e.bestLap) : null), (this.startPosition = e.startPosition), (this.S1 = { text: e.I1, value: Q(e.I1) }), (this.S2 = { text: e.I2, value: Q(e.I2) }), (this.S3 = { text: e.I3, value: Q(e.I3) }), (this.BS1 = { text: e.Best_I1, value: Q(e.Best_I1) }), (this.BS2 = { text: e.Best_I2, value: Q(e.Best_I2) }), (this.BS3 = { text: e.Best_I3, value: Q(e.Best_I3) }), (this.TS1 = { text: e.T1_SPD, value: null !== e.T1_SPD ? parseFloat(e.T1_SPD) : null }), (this.TS2 = { text: e.T2_SPD, value: null !== e.T2_SPD ? parseFloat(e.T2_SPD) : null }), (this.TS3 = { text: e.T3_SPD, value: null !== e.T3_SPD ? parseFloat(e.T3_SPD) : null }), (this.BTS1 = { text: e.Best_T1_SPD, value: null !== e.Best_T1_SPD ? parseFloat(e.Best_T1_SPD) : null }), (this.BTS2 = { text: e.Best_T2_SPD, value: null !== e.Best_T2_SPD ? parseFloat(e.Best_T2_SPD) : null }), (this.BTS3 = { text: e.Best_T3_SPD, value: null !== e.Best_T3_SPD ? parseFloat(e.Best_T3_SPD) : null }), (this.Q1 = { text: e.lap1QualTime, value: Q(e.lap1QualTime) }), (this.Q2 = { text: e.lap2QualTime, value: Q(e.lap2QualTime) }), (this.Q3 = { text: e.lap3QualTime, value: Q(e.lap3QualTime) }), (this.Q4 = { text: e.lap4QualTime, value: Q(e.lap4QualTime) }), (this.QTotal = { text: e.totalQualTime, value: Q(e.totalQualTime) }), (this.QS1 = { text: e.lap1QualSpeed, value: null !== e.lap1QualSpeed ? parseFloat(e.lap1QualSpeed) : null }), (this.QS2 = { text: e.lap2QualSpeed, value: null !== e.lap2QualSpeed ? parseFloat(e.lap2QualSpeed) : null }), (this.QS3 = { text: e.lap3QualSpeed, value: null !== e.lap3QualSpeed ? parseFloat(e.lap3QualSpeed) : null }), (this.QS4 = { text: e.lap4QualSpeed, value: null !== e.lap4QualSpeed ? parseFloat(e.lap4QualSpeed) : null }), (this.QSAverage = { text: e.AverageSpeed, value: null !== e.AverageSpeed ? parseFloat(e.AverageSpeed) : null }), (this.status = e.status), (this.qualifyingStatus = e.QStatus), (this.onBubble = "True" === e.onBubble), (this.onTrack = "True" === e.onTrack), (this.pitStops = e.pitStops), (this.lastPitLap = e.lastPitLap), (this.carNumber = { text: e.no, value: null !== e.no ? parseInt(e.no) : null }), (this.equipment = e.equipment), (this.license = e.license), (this.totalDriverPoints = e.totalDriverPoints), (this.runningDriverPoints = e.runningDriverPoints), (this.comment = e.comment), (this.overtakeRemaining = e.OverTake_Remain), (this.isOvertakeActive = "True" === e.OverTake_Active), (this.tire = e.Tire), (this.engine = l ? l.engine : null), (this.noTowRank = e.NTRank), (this.noTowBestTime = { text: e.NTBestTime, value: Q(e.NTBestTime) }), (this.passes = e.Passes), (this.lapsSincePit = e.sincePitLap), (this.predictedNextPitLap = null), (this.lapDistance = e.lapDistance ? Math.round(e.lapDistance) : 0), (this.averageSpeed = { text: e.AverageSpeed, value: null !== e.AverageSpeed ? parseFloat(e.AverageSpeed) : null }), s)) {
            let e = s.pitPredictionData.filter((e) => {
              var t;
              return e.Car === (null === (t = this.carNumber) || void 0 === t ? void 0 : t.text);
            });
            if (e.length > 0) {
              let t = null !== (r = e[0]["Next Pit 1"]) && void 0 !== r ? r : null;
              t && t >= (null !== (n = this.laps.value) && void 0 !== n ? n : 0) && (this.predictedNextPitLap = t);
            }
          }
        }
      }
      class K {
        getAverageSpeed(e) {
          var t, l;
          let s = e.filter((e) => 1 === e.rank);
          return 0 === s.length ? "000.000" : (null === (t = s[0].averageSpeed) || void 0 === t ? void 0 : t.text) ? (null === (l = s[0].averageSpeed) || void 0 === l ? void 0 : l.text) : "000.000";
        }
        static getQualifyingCutLine(e, t) {
          let l = -1,
            s = "00:00.0000";
          if (("I" === e.series && ("RC" === e.trackType || "SC" === e.trackType) && ("Q1" === e.specificSessionType || "Q2" === e.specificSessionType || "Q3" === e.specificSessionType) ? (l = 6) : ("I" === e.series && ("RC" === e.trackType || "SC" === e.trackType) && e.specificSessionType, (l = 1)), -1 !== l && t.length >= l)) {
            var a, i;
            let e = t.filter((e) => e.rank === l);
            e.length > 0 && (null === (a = e[0].bestLapTime) || void 0 === a ? void 0 : a.text) && (s = null === (i = e[0].bestLapTime) || void 0 === i ? void 0 : i.text);
          }
          return { cutLine: l, cutLineTime: s };
        }
        constructor(e, t) {
          var l, s;
          (this.totalLaps = t.reduce((e, t) => {
            var l, s;
            return (null === (l = t.laps) || void 0 === l ? void 0 : l.value) ? (null === (s = t.laps) || void 0 === s ? void 0 : s.value) + e : e;
          }, 0)),
            (this.flagCounts = e.flagCounts),
            (this.flagTimes = e.flagTimes),
            (this.flagTimes = e.flagTimes);
          let { cutLine: a, cutLineTime: i } = K.getQualifyingCutLine(e, t);
          (this.cutLine = a), (this.cutLineTime = i), (this.averageSpeed = this.getAverageSpeed(t)), (this.totalPasses = t.reduce((e, t) => (t.passes ? t.passes + e : e), 0)), (this.leadChanges = null !== (l = e.leadChanges) && void 0 !== l ? l : 0), (this.raceLeaders = null !== (s = e.raceLeaders) && void 0 !== s ? s : 1);
        }
      }
      function Q(e) {
        if (null == e || -1 !== e.indexOf("lap")) return 0;
        let t = 0,
          l = e.split(".");
        l.length > 1 && (t += parseInt(l[1]) / 1e4);
        let s = l[0];
        if (0 === (s.match(/:/g) || []).length) t += parseInt(s);
        else if (1 === (s.match(/:/g) || []).length) {
          let e = s.split(":");
          t += 60 * parseInt(e[0]) + parseInt(e[1]);
        } else if (2 === (s.match(/:/g) || []).length) {
          let e = s.split(":");
          t += 3600 * parseInt(e[0]) + 60 * parseInt(e[1]) + parseInt(e[2]);
        }
        return t;
      }
      function Z(e) {
        let { show: t, sortType: l, showHeaderAndHideBody: i } = e,
          { leaderboardData: r } = (0, a.$1)();
        return t ? ("ascending" === l ? (0, s.jsx)("svg", { className: (0, o.AK)((null == r ? void 0 : r.leaderboardHeartbeat.series) === "L" ? "fill-rc-indynxt" : "fill-rc-indycar", i ? "" : "h-0 lg:h-auto"), xmlns: "http://www.w3.org/2000/svg", width: "17", height: "16", viewBox: "0 0 17 16", children: (0, s.jsx)("path", { d: "M13.1667 11.9667L8.5 8.63334L3.83333 11.9667V10.3333L8.5 7.00001L13.1667 10.3333V11.9667ZM13.1667 8.00001L8.5 4.66667L3.83333 8.00001V6.36667L8.5 3.03334L13.1667 6.36667V8.00001Z" }) }) : "descending" === l ? (0, s.jsx)("svg", { className: (0, o.AK)((null == r ? void 0 : r.leaderboardHeartbeat.series) === "L" ? "fill-rc-indynxt" : "fill-rc-indycar", i ? "" : "h-0 lg:h-auto"), xmlns: "http://www.w3.org/2000/svg", width: "17", height: "16", viewBox: "0 0 17 16", children: (0, s.jsx)("path", { d: "M3.83329 4.0332L8.49996 7.36654L13.1666 4.0332V5.66654L8.49996 8.99987L3.83329 5.66654V4.0332ZM3.83329 7.99987L8.49996 11.3332L13.1666 7.99987V9.6332L8.49996 12.9665L3.83329 9.6332V7.99987Z" }) }) : (0, s.jsx)(s.Fragment, {})) : (0, s.jsx)("div", { className: "w-4 h-4" });
      }
      function M(e) {
        let { columnName: t, topHeight: l, showHeaderAndHideBody: i } = e,
          { leaderboardSortingColumn: n, setLeaderboardSortingColumn: d } = (0, g.OZ)(),
          { leaderboardData: c } = (0, a.$1)();
        if (y.includes(t) && c) {
          let e = null == c ? void 0 : c.leaderboardItems.length;
          if (((w.includes(t) || b.includes(t)) && (e = c.leaderboardItems.filter((e) => null != e[t]).length), 0 === e)) return (0, s.jsx)(s.Fragment, {});
        }
        let L = { top: "".concat(l, "px") };
        return "rank" === t
          ? (0, s.jsx)("th", {
              className: (0, o.AK)(i ? "pt-2 pb-1 h-full px-0" : "m-0 p-0 lg:pt-3 lg:pb-1", "sticky lg:!top-0 left-0 z-20 bg-rc-dark-gray w-11 lg:w-9"),
              style: L,
              children: (0, s.jsxs)("button", {
                title: "Position",
                onClick: () => {
                  (0, o.g$)("rank", n, d);
                },
                className: (0, o.AK)(i ? "" : "h-0 lg:h-full", "flex flex-col justify-start items-center w-11 lg:w-9"),
                children: [(0, s.jsx)("div", { className: (0, o.AK)(i ? "" : "h-0 hidden lg:block lg:h-auto", "label whitespace-nowrap leading-4"), children: "POS" }), (0, s.jsx)(Z, { show: "rank" === n.columnName, sortType: n.sortType, showHeaderAndHideBody: i })],
              }),
            })
          : "liveRank" === t
          ? (0, s.jsx)("th", {
              className: (0, o.AK)(i ? "pt-2 pb-1 h-full px-0" : "m-0 p-0 lg:pt-3 lg:pb-1", "sticky lg:!top-0 left-0 z-20 bg-rc-dark-gray w-11 lg:w-9"),
              style: L,
              children: (0, s.jsxs)("button", {
                title: "Position",
                onClick: () => {
                  (0, o.g$)("liveRank", n, d);
                },
                className: (0, o.AK)(i ? "" : "h-0 lg:h-full", "flex flex-col justify-start items-center w-11 lg:w-9"),
                children: [(0, s.jsx)("div", { className: (0, o.AK)(i ? "" : "h-0 hidden lg:block lg:h-auto", "label whitespace-nowrap leading-4"), children: "POS" }), (0, s.jsx)(Z, { show: "liveRank" === n.columnName || "rank" === n.columnName, sortType: n.sortType, showHeaderAndHideBody: i })],
              }),
            })
          : "carNumber" === t
          ? (0, s.jsx)("th", {
              title: "Name, Number, Status Badge",
              className: (0, o.AK)(i ? "pt-2 pb-1 h-1" : "m-0 p-0 lg:pt-3 lg:pb-1", "sticky lg:!top-0 z-20 w-[51px] left-11 lg:left-9 bg-rc-dark-gray border-r border-black"),
              style: L,
              children: (0, s.jsxs)("button", {
                onClick: () => {
                  (0, o.g$)("carNumber", n, d);
                },
                className: (0, o.AK)(i ? "h-full" : "h-0 lg:h-full", "flex flex-col justify-start items-center"),
                children: [(0, s.jsx)("div", { className: (0, o.AK)(i ? "" : "h-0 hidden lg:block lg:h-auto", "label whitespace-nowrap leading-4 text-left"), children: "No./Name" }), (0, s.jsx)(Z, { show: "carNumber" === n.columnName, sortType: n.sortType, showHeaderAndHideBody: i })],
              }),
            })
          : "disabled" !== r.a[t].defaultSort
          ? (0, s.jsx)("th", {
              className: (0, o.AK)(i ? "py-2 pt-2 pb-1 h-1 px-0" : "p-0 m-0 lg:py-2 lg:pt-3 lg:pb-1", "sticky lg:!top-0 z-auto bg-rc-dark-gray"),
              style: L,
              children: (0, s.jsx)("button", {
                title: r.a[t].description,
                onClick: () => {
                  (0, o.g$)(t, n, d);
                },
                className: (0, o.AK)(i ? "h-full" : "h-0 lg:h-full", "flex flex-col ".concat(r.a[t].align, " justify-start min-w-10 w-full")),
                children: (0, s.jsxs)("div", { className: "flex flex-col items-center w-fit", children: [(0, s.jsx)("div", { className: (0, o.AK)(i ? "" : "h-0 invisible lg:visible lg:h-full", "flex label whitespace-nowrap leading-4 px-2"), children: r.a[t].label ? r.a[t].label : t }), (0, s.jsx)(Z, { show: n.columnName === t, sortType: n.sortType, showHeaderAndHideBody: i })] }),
              }),
            })
          : (0, s.jsx)("th", { className: (0, o.AK)(i ? "py-2 pt-2 pb-1 h-1 px-0" : "p-0 m-0 lg:py-2 lg:pt-3 lg:pb-1", "sticky lg:!top-0 z-auto bg-rc-dark-gray"), style: L, children: (0, s.jsx)("div", { className: (0, o.AK)(i ? "h-full" : "h-0 lg:h-full", "flex flex-col ".concat(r.a[t].align, " justify-start min-w-10 w-full")), children: (0, s.jsxs)("div", { className: "flex flex-col items-center w-fit", children: [(0, s.jsx)("div", { className: (0, o.AK)(i ? "" : "h-0 invisible lg:visible lg:h-full", "flex label whitespace-nowrap leading-4 px-2"), children: r.a[t].label ? r.a[t].label : t }), (0, s.jsx)(Z, { show: !1, sortType: "ascending", showHeaderAndHideBody: i })] }) }) });
      }
      function E(e) {
        let { engine: t, showHeaderAndHideBody: l } = e;
        return l ? (0, s.jsx)("div", { className: "w-[34px] h-0" }) : "Honda" === t ? (0, s.jsx)("div", { className: "flex items-center justify-center w-[30px] h-[25px]", children: (0, s.jsx)(p(), { src: "https://d1b8ufspcmikd1.cloudfront.net/-/media/IndyCar/Logos/honda-logo-icon.png", height: 24, width: 30, alt: "Honda badge" }) }) : "Chevrolet" === t ? (0, s.jsx)("div", { className: "flex items-center justify-center w-[34px] h-[25px]", children: (0, s.jsx)(p(), { src: "https://d1b8ufspcmikd1.cloudfront.net/-/media/IndyCar/Logos/chevrolet-logo-icon.png", height: 24, width: 34, alt: "Honda badge" }) }) : (0, s.jsx)("div", { className: "w-[34px] h-[30px]" });
      }
      function O(e) {
        var t, l, a, i, r;
        let { showHeaderAndHideBody: n, row: d, leaderboardHeartbeat: c } = e;
        if ((null === (t = d.comment) || void 0 === t ? void 0 : t.toLowerCase()) === "contact") return (0, s.jsx)("div", { className: (0, o.AK)(n ? "h-0" : "", "inline-flex items-center justify-center mt-0.5 mb-0.5 rounded-md bg-rc-red/90 px-2 tracking-wider text-xxs font-bold text-stone-50 ring-1 ring-inset ring-rc-red/10 uppercase min-w-[65px] mr-1"), children: "Cont." });
        if ((null === (l = d.comment) || void 0 === l ? void 0 : l.toLowerCase()) === "off track") return (0, s.jsx)("div", { className: (0, o.AK)(n ? "h-0" : "", "inline-flex items-center justify-center mt-0.5 mb-0.5 rounded-md bg-rc-red/90 px-2 tracking-wider text-xxs font-bold text-stone-50 ring-1 ring-inset ring-rc-red/10 uppercase min-w-[65px] mr-1"), children: "Off." });
        if ((null === (a = d.comment) || void 0 === a ? void 0 : a.toLowerCase()) === "mechanical") return (0, s.jsx)("div", { className: (0, o.AK)(n ? "h-0" : "", "inline-flex items-center justify-center mt-0.5 mb-0.5 rounded-md bg-rc-red/90 px-2 tracking-wider text-xxs font-bold text-stone-50 ring-1 ring-inset ring-rc-red/10 uppercase min-w-[65px] mr-1"), children: "Mech." });
        if ((null === (i = d.comment) || void 0 === i ? void 0 : i.toLowerCase()) === "disqualified") return (0, s.jsx)("div", { className: (0, o.AK)(n ? "h-0" : "", "inline-flex items-center justify-center mt-0.5 mb-0.5 rounded-md bg-rc-red/90 px-2 tracking-wider text-xxs font-bold text-stone-50 ring-1 ring-inset ring-rc-red/10 uppercase min-w-[65px] mr-1"), children: "DQ" });
        if ("DNF" === d.status) return (0, s.jsx)("div", { className: (0, o.AK)(n ? "h-0" : "", "inline-flex items-center justify-center mt-0.5 mb-0.5 rounded-md bg-rc-red/90 px-2 tracking-wider text-xxs font-bold text-stone-50 ring-1 ring-inset ring-rc-red/10 uppercase min-w-[65px] mr-1"), children: "DNF" });
        if ("InPit" === d.marker) return (0, s.jsx)("div", { className: (0, o.AK)(n ? "h-0" : "", "inline-flex items-center justify-center mt-0.5 mb-0.5 rounded-md bg-rc-dark-gray/90 px-2 tracking-wider text-xxs font-bold text-stone-50 ring-1 ring-inset ring-rc-dark-gray/10 uppercase min-w-[65px] mr-1"), children: "In Pit" });
        if (d.bestLap === (null === (r = d.laps) || void 0 === r ? void 0 : r.value) && 0 !== d.bestLap && d.onTrack && !("Q" === c.sessionType && ("O" === c.trackType || "I" === c.trackType))) return (0, s.jsx)("div", { className: (0, o.AK)(n ? "h-0" : "", "inline-flex items-center justify-center mt-0.5 mb-0.5 rounded-md bg-rc-purple/90 px-2 tracking-wider text-xxs font-bold text-stone-50 ring-1 ring-inset ring-rc-purple/10 uppercase min-w-[65px] mr-1"), children: "Best Lap" });
        else return (0, s.jsx)("div", { className: (0, o.AK)(n ? "h-0" : "", "inline-flex items-center justify-center mt-0.5 mb-0.5 rounded-md bg-rc-green/90 px-2 tracking-wider text-xxs font-bold text-stone-50 ring-1 ring-inset ring-rc-green/10 uppercase min-w-[65px] whitespace-nowrap mr-1"), children: "Active" });
      }
      var z = l(5989),
        G = l(2120);
      function W(e) {
        var t, l, i, n, d, c, m, h;
        let { columnName: x, row: v, showHeaderAndHideBody: f, lapNumber: g, lapsCompleted: N } = e,
          { compactLeaderboard: T, leaderboardData: k } = (0, a.$1)(),
          { setShowDriverProfileModal: H, setDriverProfileModal: S } = (0, z.MH)(),
          { trackMapHighlightedDriverRef: A } = (0, G.qI)();
        if (!k) return (0, s.jsx)("td", {});
        if (y.includes(x)) {
          let e = k.leaderboardItems.length;
          if (((w.includes(x) || b.includes(x)) && (e = k.leaderboardItems.filter((e) => null != e[x]).length), 0 === e)) return (0, s.jsx)(s.Fragment, {});
        }
        if ("rank" === x) return (0, s.jsx)("td", { className: (0, o.AK)(f ? "h-0 m-0" : "h-1", "sticky left-0 z-auto bg-inherit p-0 w-11 lg:w-9"), children: (0, s.jsx)("div", { className: (0, o.AK)(f ? "h-0" : "h-full flex items-center justify-center w-11 lg:w-9"), children: (0, s.jsx)("div", { className: (0, o.AK)(f ? "h-0" : "", "flex justify-center"), children: null !== v.rank && (0, s.jsx)(L, { position: v.rank, marker: v.marker, showHeaderAndHideBody: f }) }) }) });
        if ("liveRank" === x) return (0, s.jsx)("td", { className: (0, o.AK)(f ? "h-0 m-0" : "h-1", "sticky left-0 z-auto bg-inherit p-0 w-11 lg:w-9"), children: (0, s.jsx)("div", { className: (0, o.AK)(f ? "h-0" : "h-full flex items-center justify-center w-11 lg:w-9"), children: (0, s.jsx)("div", { className: (0, o.AK)(f ? "h-0" : "", "flex justify-center"), children: null !== v.liveRank && (0, s.jsx)(L, { position: v.liveRank, marker: v.marker, showHeaderAndHideBody: f }) }) }) });
        if ("carNumber" === x)
          return (0, s.jsx)("td", {
            className: (0, o.AK)(f ? "h-0 m-0" : "box-border", "p-0 sticky left-11 lg:left-9 bg-inherit z-auto whitespace-nowrap text-left border-r border-rc-gray text-rc-indycar-text"),
            children: (0, s.jsxs)("div", {
              className: (0, o.AK)(f ? "h-0" : "h-full py-1.5 w-full", "flex"),
              children: [
                v.carEndplateImage ? (0, s.jsx)("div", { className: (0, o.AK)(f ? "h-0" : "h-auto", "flex items-center justify-center w-[34px] -ml-1 mr-1"), children: (0, s.jsx)(p(), { src: v.carEndplateImage, width: 30, height: 21, alt: "End plate image for ".concat(v.driverName) }) }) : (0, s.jsx)("div", { className: "w-[34px] -ml-1 mt-[1px] mr-1 font-industry flex items-center justify-center font-black text-rc-dark-gray text-base", children: null === (t = v.carNumber) || void 0 === t ? void 0 : t.text }),
                (0, s.jsx)("button", {
                  onClick: () => {
                    S(v), H(!0);
                  },
                  className: (0, o.AK)(f ? "h-0" : T ? "h-[25px]" : "h-[41px]", "flex flex-col justify-center"),
                  children: (0, s.jsx)("div", { className: (0, o.AK)(f ? "h-0" : "h-4", "flex items-center"), children: (0, s.jsx)("div", { className: (0, o.AK)(f ? "h-0" : "pt-0.5", "font-semibold leading-3 mr-0.5 lg:mr-1.5 uppercase max-w-[114px] lg:max-w-fit overflow-ellipsis whitespace-nowrap overflow-hidden"), children: v.driverName }) }),
                }),
              ],
            }),
          });
        if ("diff" === x || ("liveDiff" === x && ("CHECKERED" === k.leaderboardHeartbeat.sessionStatus || "COLD" === k.leaderboardHeartbeat.sessionStatus))) {
          let e = v.diff.text;
          return g && null !== N && N < g - 1 && (e = "".concat(g - 1 - N, " LAP").concat(g - 1 - N > 1 ? "S" : "")), (0, s.jsx)("td", { className: (0, o.AK)(f ? "m-0" : "h-1", "p-0"), children: (0, s.jsx)("div", { className: (0, o.AK)(f ? "h-0" : "h-full flex items-center", "".concat(r.a[x].align.replace("items", "justify").replace("items", "justify"), " px-2 w-full")), children: (0, s.jsx)("div", { children: e }) }) });
        }
        if ("gap" === x || ("liveGap" === x && ("CHECKERED" === k.leaderboardHeartbeat.sessionStatus || "COLD" === k.leaderboardHeartbeat.sessionStatus))) {
          let e = v.gap.text;
          if (g && null !== N && N < g - 1) {
            let t = k.leaderboardItems.filter((e) => {
              var t;
              return e.rank === (null !== (t = v.rank) && void 0 !== t ? t : 0) - 1;
            });
            if (t && t.length > 0) {
              let s = t[0];
              if (null !== (i = null === (l = s.laps) || void 0 === l ? void 0 : l.value) && void 0 !== i ? i : -1 > N) {
                let t = (null !== (d = null === (n = s.laps) || void 0 === n ? void 0 : n.value) && void 0 !== d ? d : -1) - N;
                e = "".concat(t, " LAP").concat(t > 1 ? "S" : "");
              }
            }
          }
          return (0, s.jsx)("td", { className: (0, o.AK)(f ? "m-0" : "h-1", "p-0"), children: (0, s.jsx)("div", { className: (0, o.AK)(f ? "h-0" : "h-full flex items-center", "".concat(r.a[x].align.replace("items", "justify").replace("items", "justify"), " px-2 w-full")), children: (0, s.jsx)("div", { children: e }) }) });
        }
        if ("liveGap" === x) {
          let e = v[x].text;
          if (g && null !== N && N < g - 1) {
            let t = k.leaderboardItems.filter((e) => {
              var t;
              return e.liveRank === (null !== (t = v.liveRank) && void 0 !== t ? t : 0) - 1;
            });
            if (t && t.length > 0) {
              let l = (null !== (m = null === (c = t[0].laps) || void 0 === c ? void 0 : c.value) && void 0 !== m ? m : -1) - N;
              l > 0 && (e = "".concat(l, " LAP").concat(l > 1 ? "S" : ""));
            }
          }
          return "WARM" === k.leaderboardHeartbeat.currentFlag && (e = "0.0000"), (0, s.jsx)("td", { className: (0, o.AK)(f ? "m-0" : "h-1", "p-0"), children: (0, s.jsx)("div", { className: (0, o.AK)(f ? "h-0" : "h-full flex items-center", "".concat(r.a[x].align.replace("items", "justify").replace("items", "justify"), " px-2 w-full")), children: (0, s.jsx)("div", { children: e }) }) });
        }
        if ("liveDiff" === x) {
          let e = v[x].text;
          if (g && null !== N && N === g - 2) {
            let t = k.leaderboardItems.filter((e) => {
              var t;
              return (null === (t = e.laps) || void 0 === t ? void 0 : t.value) === N;
            });
            t && 1 === t.length && (e = "".concat(g - 1 - N, " LAP").concat(g - 1 - N > 1 ? "S" : ""));
          }
          return "WARM" === k.leaderboardHeartbeat.currentFlag && (e = "0.0000"), (0, s.jsx)("td", { className: (0, o.AK)(f ? "m-0" : "h-1", "p-0"), children: (0, s.jsx)("div", { className: (0, o.AK)(f ? "h-0" : "h-full flex items-center text-center whitespace-nowrap", "".concat(r.a[x].align.replace("items", "justify").replace("items", "justify"), " px-2 w-full")), children: (0, s.jsx)("div", { children: e }) }) });
        } else if ("tire" === x) return (0, s.jsx)("td", { className: (0, o.AK)(f ? "m-0" : "h-1", "p-0"), children: (0, s.jsx)("div", { className: (0, o.AK)(f ? "h-0" : "h-full flex items-center", "".concat(r.a[x].align.replace("items", "justify"), " flex justify-center px-2 w-full")), children: null !== v.tire && (0, s.jsx)(u, { tire: v.tire }) }) });
        else if ("engine" === x) return (0, s.jsx)("td", { className: (0, o.AK)(f ? "m-0" : "h-1", "p-0"), children: (0, s.jsx)("div", { className: (0, o.AK)(f ? "h-0" : "h-full flex items-center", "flex justify-center px-2 w-full"), children: (0, s.jsx)(E, { engine: v.engine, showHeaderAndHideBody: f }) }) });
        else if ("comment" === x) return (0, s.jsx)("td", { className: (0, o.AK)(f ? "m-0" : "h-1", "p-0"), children: (0, s.jsx)("div", { className: (0, o.AK)(f ? "h-0" : "h-full flex items-center", "flex justify-center px-2 w-full"), children: (0, s.jsx)(O, { row: v, leaderboardHeartbeat: k.leaderboardHeartbeat, showHeaderAndHideBody: f }) }) });
        else if (b.includes(x) || w.includes(x)) return (0, s.jsx)("td", { className: (0, o.AK)(f ? "m-0" : "h-1", "p-0"), children: (0, s.jsx)("div", { className: (0, o.AK)(f ? "h-0" : "h-full flex items-center", "".concat(r.a[x].align.replace("items", "justify"), " px-2 w-full")), children: (0, s.jsx)("div", { children: null === (h = v[x]) || void 0 === h ? void 0 : h.toString() }) }) });
        else if (j.includes(x)) return (0, s.jsx)("td", { className: (0, o.AK)(f ? "m-0" : "h-1", "p-0"), children: (0, s.jsx)("div", { className: (0, o.AK)(f ? "h-0" : "h-full flex items-center", "".concat(r.a[x].align.replace("items", "justify"), " px-2 w-full")), children: (0, s.jsx)("div", { children: v[x].text }) }) });
        else return (0, s.jsx)("td", { className: (0, o.AK)(f ? "m-0" : "h-1", "p-0"), children: (0, s.jsx)("div", { className: "".concat(r.a[x].align.replace("items", "justify"), " px-2 w-full") }) });
      }
      function $(e) {
        let { row: t, showHeaderAndHideBody: l, cutLine: i } = e,
          { leaderboardData: r } = (0, a.$1)();
        return r
          ? (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)("tr", {
                className: "cell-data even:bg-rc-light-gray odd:bg-white text-rc-text-gray",
                children: r.leaderboardColumns.map((e) => {
                  var a, i;
                  return (0, s.jsx)(W, { row: t, columnName: e, showHeaderAndHideBody: l, lapNumber: r.leaderboardHeartbeat.lapNumber, lapsCompleted: null !== (i = null === (a = t.laps) || void 0 === a ? void 0 : a.value) && void 0 !== i ? i : null }, "".concat(t.driverName, "-").concat(e));
                }),
              }),
            })
          : (0, s.jsx)("tr", {});
      }
      function Y(e) {
        let { sessionHeaderHeight: t, sessionStatusBarHeight: l, leaderboardTableRef: i, showHeaderAndHideBody: r } = e,
          { leaderboardSortingColumn: n } = (0, g.OZ)(),
          { leaderboardData: d } = (0, a.$1)();
        if (null != d) {
          let e, a;
          let { cutLine: c } = K.getQualifyingCutLine(d.leaderboardHeartbeat, d.leaderboardItems);
          return (0, s.jsx)("div", {
            ref: i,
            children: (0, s.jsxs)("table", {
              className: "border-separate border-spacing-0 w-full",
              children: [
                (0, s.jsx)("thead", { children: (0, s.jsx)("tr", { className: "text-white h-full bg-rc-dark-gray", children: d.leaderboardColumns.map((e) => (0, s.jsx)(M, { columnName: e, topHeight: t + l, showHeaderAndHideBody: r }, e)) }) }),
                (0, s.jsx)("tbody", {
                  children: ((e = [...d.leaderboardItems]),
                  "rank" === (a = n.columnName) && d.leaderboardColumns.includes("liveRank") && (a = "liveRank"),
                  (e = e.sort((e, t) => {
                    var l, s;
                    if (b.includes(a)) {
                      if ("descending" === n.sortType) return t[a].localeCompare(e[a]);
                      if ("ascending" === n.sortType) return e[a].localeCompare(t[a]);
                    } else if (w.includes(a)) {
                      if ("descending" === n.sortType) return t[a] - e[a];
                      if ("ascending" === n.sortType) return e[a] - t[a];
                    } else if (j.includes(a)) {
                      if ("descending" === n.sortType) return t[a].value - e[a].value;
                      if ("ascending" === n.sortType) return e[a].value - t[a].value;
                    } else if (n.subColumnName) {
                      if ("descending" === n.sortType) return t[a][n.subColumnName].value - e[a][n.subColumnName].value;
                      if ("ascending" === n.sortType) return e[a][n.subColumnName].value - t[a][n.subColumnName].value;
                    } else {
                      if ("descending" === n.sortType) return t[a] - e[a];
                      if ("ascending" === n.sortType) return e[a] - t[a];
                    }
                    return (null !== (l = e.rank) && void 0 !== l ? l : 999) - (null !== (s = t.rank) && void 0 !== s ? s : 999);
                  }))).map((e) => (0, s.jsx)($, { row: e, showHeaderAndHideBody: r, cutLine: c }, "".concat(e.driverId, "-").concat(d.leaderboardHeartbeat.preamble))),
                }),
              ],
            }),
          });
        }
        return (0, s.jsx)("div", {});
      }
      function U(e) {
        let { sessionHeaderHeight: t, sessionStatusBarHeight: l, leaderboardTableRef: a, showHeaderAndHideBody: i } = e;
        return (0, s.jsx)("section", { children: (0, s.jsx)(Y, { sessionHeaderHeight: t, sessionStatusBarHeight: l, leaderboardTableRef: a, showHeaderAndHideBody: i }) });
      }
      function J(e) {
        let { mobile: t, showFloatingButtons: l } = e,
          { leaderboardData: r } = (0, a.$1)(),
          { showLegendModal: d, setShowLegendModal: c } = (0, i.zB)();
        return (0, s.jsx)(n.u, {
          className: (0, o.AK)(t ? "w-fit lg:hidden" : "hidden lg:block"),
          show: l,
          enter: "transition-opacity duration-150",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "transition-opacity duration-300",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: (0, s.jsx)("div", {
            className: (0, o.AK)("z-50 fixed bottom-7 left-1/2 -translate-x-1/2 flex space-x-4 rounded-lg shadow-lg lg:relative lg:w-fit lg:bottom-auto lg:left-auto lg:translate-x-0 lg:mt-4", (null == r ? void 0 : r.leaderboardHeartbeat.series) === "L" ? "bg-rc-indynxt" : "bg-rc-indycar"),
            children: (0, s.jsxs)("button", {
              className: "flex items-center py-3 px-4",
              onClick: () => {
                c(!d);
              },
              children: [(0, s.jsx)("div", { className: "mr-1", children: (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: (0, s.jsx)("path", { d: "M4 19V17H20V19H4ZM4 15V13H20V15H4ZM4 11V8.65L10 5L15 8.55L20 5V7.45L15 11L9.925 7.4L4 11Z", fill: "white" }) }) }), (0, s.jsx)("div", { className: "cta-primary text-white", children: "Legend" })],
            }),
          }),
        });
      }
      let X = (e) => {
        let t = (0, c.useRef)(0),
          l = (0, c.useRef)(null),
          s = (a) => {
            void 0 != l.current && e(a - l.current), (l.current = a), t.current && (t.current = requestAnimationFrame(s));
          };
        (0, c.useEffect)(() => ((t.current = requestAnimationFrame(s)), () => cancelAnimationFrame(t.current)), []);
      };
      var ee = (0, c.memo)(function () {
        let { trackMapHighlightedDriverRef: e, driverPositions: t, wssUriRef: l, wssKeyRef: a, trackDirectionReverseRef: i, trackMapPathDRef: r } = (0, G.qI)(),
          n = (0, c.useRef)(null),
          d = (0, c.useRef)(1),
          L = (0, c.useRef)(null);
        console.log("rendered track map");
        let m = (0, c.useRef)(t.reduce((e, t) => ((e[t.carNumber] = (0, c.createRef)()), e), {})),
          u = (0, c.useRef)({});
        return (
          X((e) => {
            Object.keys(u.current).forEach((e) => {
              let t = u.current[e],
                l = new Date().getTime() - t.lockedTimestamp;
              l > 1e3 && ((t.lapDistanceForPointA = t.renderedLapDistance), (t.lapDistanceForPointB = t.incomingLapDistance), (t.lockedTimestamp = new Date().getTime()), (l = 0));
              let s = t.lapDistanceForPointB - t.lapDistanceForPointA,
                a = l / 1e3;
              t.renderedLapDistance = s * a;
            });
          }),
          (0, c.useEffect)(() => {
            let e = l.current,
              t = a.current,
              s = e.replace("https://", "").replace("/graphql", ""),
              i = e.replace("https", "wss").replace("appsync-api", "appsync-realtime-api"),
              r = btoa('{"host": "'.concat(s, '" ,"x-api-key": "').concat(t, '"}')),
              n = "".concat(i, "?header=").concat(r, "&payload=e30=");
            (L.current = new WebSocket(n, "graphql-ws")),
              (L.current.onopen = () => {
                L.current && (console.log("open"), L.current.send(JSON.stringify({ type: "connection_init" })), L.current.send(JSON.stringify({ id: crypto.randomUUID(), payload: { data: '{"query": "subscription subscribe { subscribe (name: \\"telemetry\\") { data } }", "variables": {}}', extensions: { authorization: { host: s, "x-api-key": t } } }, type: "start" })));
              }),
              (L.current.onclose = () => console.log("ws closed"));
            let d = L.current;
            return () => {
              d.close();
            };
          }, [l.current, a.current]),
          (0, c.useEffect)(() => {
            L.current &&
              (L.current.onmessage = (e) => {
                let t = JSON.parse(e.data);
                console.log(t),
                  "data" === t.type &&
                    (0, o.O6)(t.payload.data.subscribe.data).then((e) => {
                      e &&
                        (1 === d.current && e.trackInformation.length > 0 && 0 != e.trackInformation[0].trackLength && (d.current = 1609.344 * e.trackInformation[0].trackLength),
                        e.telemetryMessages.forEach((e) => {
                          e.carNumber in u.current ? u.current[e.carNumber].incomingLapDistance !== e.lapDistance && ((u.current[e.carNumber].incomingLapDistance = e.lapDistance), (u.current[e.carNumber].timestamp = new Date().getTime()), (u.current[e.carNumber].speed = e.vehicleSpeed)) : (u.current[e.carNumber] = { lapDistanceForPointA: -1, lapDistanceForPointB: -1, lockedTimestamp: new Date().getTime(), renderedLapDistance: -1, incomingLapDistance: e.lapDistance, speed: e.vehicleSpeed, isInPit: e.isInPit, timestamp: new Date().getTime() });
                        }));
                    });
              });
          }, [d]),
          (0, s.jsx)("section", { className: (0, o.AK)("sticky left-0 z-20 flex items-center justify-center py-2 px-9 w-screen lg:w-full bg-white"), children: (0, s.jsxs)("div", { className: "relative", style: { width: "300px", height: "200px" }, children: [(0, s.jsx)("svg", { width: "300", height: "200", viewBox: "0 0 300 200", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, s.jsx)("path", { ref: n, d: r.current, stroke: "black", strokeWidth: "5" }) }), t.map((t, l) => (0, s.jsx)("div", { "data-key": "".concat(l, "-").concat(t.carNumber), ref: m.current[t.carNumber], className: "absolute hidden -translate-x-1/2 -translate-y-1/2", style: { zIndex: l + 5, opacity: e.current ? (e.current === t.carNumber ? "1" : "0.2") : "1" }, children: t.carNumber }, "".concat(l, "-").concat(t.carNumber)))] }) })
        );
      });
      function et() {
        let { configData: e } = (0, m.Zq)(),
          { enlargeLeaderboard: t } = (0, a.$1)();
        return e && e.track_map_url ? (0, s.jsx)("section", { className: (0, o.AK)(t ? "lg:hidden" : "lg:flex", "flex items-center justify-center py-2 px-9 w-screen lg:w-full bg-white"), children: (0, s.jsx)(p(), { src: null == e ? void 0 : e.track_map_url, height: 166, width: 254, alt: "St. Petersburg Track Map" }) }) : (0, s.jsx)("div", {});
      }
      function el(e) {
        var t, l;
        let i;
        let { driverFeedData: r, nxtDriverFeedData: L } = e,
          { leaderboardData: m } = (0, a.$1)(),
          { showDriverProfileModal: u, setShowDriverProfileModal: h, driverProfileModal: x, setDriverProfileModal: p } = (0, z.MH)(),
          v = null;
        if ((null == m ? void 0 : m.leaderboardHeartbeat.series) === "I") {
          let e =
            null == r
              ? void 0
              : r.drivers.driver.filter((e) => {
                  var t;
                  return e.rc_driver_id === (null == x ? void 0 : null === (t = x.driverId) || void 0 === t ? void 0 : t.toString());
                });
          e && e.length > 0 && (v = e[0]);
        } else if ((null == m ? void 0 : m.leaderboardHeartbeat.series) === "L") {
          let e =
            null == L
              ? void 0
              : L.drivers.driver.filter((e) => {
                  var t;
                  return e.rc_driver_id === (null == x ? void 0 : null === (t = x.driverId) || void 0 === t ? void 0 : t.toString());
                });
          e && e.length > 0 && (v = e[0]);
        }
        let f = (0, c.useMemo)(
          () =>
            r && r.drivers && r.drivers.driver
              ? Math.max(
                  ...r.drivers.driver.map((e) => {
                    var t;
                    return (null == e ? void 0 : null === (t = e.stats) || void 0 === t ? void 0 : t.points) && "--" !== e.stats.points && !Number.isNaN(parseInt(e.stats.points)) ? parseInt(e.stats.points) : 0;
                  })
                )
              : 0,
          [m, null == m ? void 0 : m.leaderboardItems]
        );
        return (0, s.jsx)(n.u.Root, {
          show: u,
          as: c.Fragment,
          children: (0, s.jsxs)(d.V, {
            as: "div",
            className: "relative z-10",
            onClose: () => {
              h(!1),
                setTimeout(() => {
                  p(null), (v = null);
                }, 350);
            },
            children: [
              (0, s.jsx)(n.u.Child, { as: c.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, s.jsx)("div", { className: "fixed inset-0 bg-black bg-opacity-80 transition-opacity" }) }),
              (0, s.jsx)("div", {
                className: "fixed inset-0 z-10 w-screen overflow-y-auto",
                children: (0, s.jsx)("div", {
                  className: "flex min-h-full items-end justify-center p-4 pb-6 text-center sm:items-center sm:p-0",
                  children: (0, s.jsx)(n.u.Child, {
                    as: c.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    children: (0, s.jsx)(d.V.Panel, {
                      className: "relative transform overflow-hidden w-full rounded-lg bg-white px-4 pb-4 pt-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-fit sm:p-8",
                      children: (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsxs)("div", {
                            className: "flex justify-between items-center border-b pb-2 mb-2 border-b-rc-gray",
                            children: [
                              (0, s.jsx)(d.V.Title, { as: "h3", className: "headline ", children: "Driver Profile" }),
                              (0, s.jsx)("button", {
                                type: "button",
                                className: "inline-flex justify-center rounded-md px-3 py-2 text-sm font-semibold text-white hover:bg-rc-light-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rc-gray",
                                onClick: () => {
                                  h(!1),
                                    setTimeout(() => {
                                      p(null), (v = null);
                                    }, 350);
                                },
                                children: (0, s.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [(0, s.jsx)("g", { opacity: "0.5", clipPath: "url(#clip0_111_4805)", children: (0, s.jsx)("path", { d: "M12 10.5857L16.95 5.63574L18.364 7.04974L13.414 11.9997L18.364 16.9497L16.95 18.3637L12 13.4137L7.04999 18.3637L5.63599 16.9497L10.586 11.9997L5.63599 7.04974L7.04999 5.63574L12 10.5857Z", fill: "black" }) }), (0, s.jsx)("defs", { children: (0, s.jsx)("clipPath", { id: "clip0_111_4805", children: (0, s.jsx)("rect", { width: "24", height: "24", fill: "white" }) }) })] }),
                              }),
                            ],
                          }),
                          v ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("div", { className: "w-full flex justify-center", children: (0, s.jsx)("div", { className: "driver-profile-container w-full sm:w-[500px] flex justify-center my-4", children: (0, s.jsx)("div", { className: "driver-profile-svg relative w-[184px]", children: (0, s.jsxs)("div", { className: "relative flex w-fit", style: { width: "184px", height: "88px" }, children: [(0, s.jsxs)("div", { className: "relative mb-[11px] ml-[16px] h-[75px]", children: [(null == v ? void 0 : v.waistupimage) && (0, s.jsx)("img", { className: "mr-[6px] h-[75px] w-[50px]", src: null == v ? void 0 : v.waistupimage, alt: "Bust of ".concat(null == v ? void 0 : v.name, ", driver of the #").concat(null == v ? void 0 : v.number) }), (0, s.jsx)("img", { className: "absolute w-[16px]", style: { top: "8px", right: "2px" }, src: null == v ? void 0 : v.endplatelarge, alt: "".concat(null == v ? void 0 : v.name, " car number, #").concat(null == v ? void 0 : v.number) })] }), (0, s.jsx)("div", { className: "ml-[2px] mt-[8px] flex-grow", children: (0, s.jsxs)("div", { className: "flex justify-between", children: [(0, s.jsxs)("div", { className: "h-fit flex-grow font-industry uppercase", children: [(0, s.jsxs)("div", { className: "text-[9px] font-bold leading-[7px] text-indycar", children: [(0, s.jsxs)("span", { className: "sr-only", children: ["#", null == v ? void 0 : v.number, " driver first name: "] }), null == v ? void 0 : v.name.split(" ")[0]] }), (0, s.jsxs)("div", { className: "text-[9px] font-bold leading-[7px] text-indycar", children: [(0, s.jsxs)("span", { className: "sr-only", children: ["#", null == v ? void 0 : v.number, " driver last name: "] }), null == v ? void 0 : v.name.split(" ")[1]] }), (0, s.jsxs)("div", { className: "mt-[1px] text-[6px] font-medium max-w-[86px]", children: [(0, s.jsxs)("span", { className: "sr-only", children: ["#", null == v ? void 0 : v.number, " driver team: "] }), null == v ? void 0 : v.team] }), (null == m ? void 0 : m.leaderboardHeartbeat.series) === "I" && (0, s.jsx)("img", { className: "mt-[1px] h-[7px]", src: null == v ? void 0 : v.engine_logo, alt: "".concat(null == v ? void 0 : v.engine, " Badge") })] }), (0, s.jsx)("div", { className: "flex w-[24px] flex-col", children: (0, s.jsx)("img", { src: null == v ? void 0 : v.flag, alt: "Home country flag of ".concat(null == v ? void 0 : v.name, ", driver of the #").concat(null == v ? void 0 : v.number) }) })] }) }), (0, s.jsxs)("div", { className: "absolute bottom-0", children: [(0, s.jsx)("div", { className: "relative", children: (null == v ? void 0 : v.radiofrequency) && (0, s.jsxs)("div", { className: "absolute right-0 top-0 flex items-center justify-end", children: [(0, s.jsx)("svg", { className: "mr-[2px] w-[6px]", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", "aria-label": "Wavy icon for car radio frequency", children: (0, s.jsx)("path", { d: "M434.3 64H462l1.9 13.8 34.6 254 29.8-158.8 2.4-13.1h25.4l3.3 11.6L588.1 272H624h16v32H624 576 563.9l-3.3-11.6-13.4-46.8L511.7 434.9 509.3 448H482l-1.9-13.8L447 191.4l-47.2 307L397.7 512H370l-1.8-13.9L320 137.1 271.9 498.1 270 512H242.3l-2.1-13.6L193 191.4 159.9 434.2 158 448H130.7l-2.4-13.1L92.8 245.6 79.4 292.4 76.1 304H64 16 0V272H16 51.9L80.6 171.6 83.9 160h25.3l2.4 13.1 29.8 158.8 34.6-254L178 64h27.7l2.1 13.6 47.1 305.9L304.1 13.9 306 0h28l1.8 13.9 49.3 369.5L432.2 77.6 434.3 64z" }) }), (0, s.jsxs)("div", { className: "font-industry text-[6px] font-semibold", children: [(0, s.jsxs)("span", { className: "sr-only", children: [null == v ? void 0 : v.number, " radio frequency: "] }), null == v ? void 0 : v.radiofrequency] })] }) }), (0, s.jsx)("img", { style: { width: "184px" }, src: null == v ? void 0 : v.carillustration, alt: "Driver of the #06 ".concat(null == v ? void 0 : v.name, " Livery for ").concat(null == m ? void 0 : m.leaderboardHeartbeat.eventName) })] })] }) }) }) }), (0, s.jsxs)("div", { className: "w-full grid grid-cols-3 my-4 gap-2", children: [(0, s.jsxs)("div", { className: "bg-rc-light-gray flex items-center justify-center flex-col py-4 px-2 rounded-lg", children: [(0, s.jsx)("div", { className: "section-header text-xl mb-1 font-bold text-center", children: "Poles" }), (0, s.jsx)("div", { className: "subhead text-xl font-bold", children: null == v ? void 0 : v.stats.poles })] }), (0, s.jsxs)("div", { className: "bg-rc-light-gray flex items-center justify-center flex-col py-4 px-2 rounded-lg", children: [(0, s.jsx)("div", { className: "section-header text-xl mb-1 font-bold text-center", children: "Points" }), (0, s.jsx)("div", { className: "subhead text-xl font-bold", children: null == v ? void 0 : v.stats.points })] }), (0, s.jsxs)("div", { className: "bg-rc-light-gray flex items-center justify-center flex-col py-4 px-2 rounded-lg", children: [(0, s.jsx)("div", { className: "section-header text-xl mb-1 font-bold text-center", children: "Behind" }), (0, s.jsx)("div", { className: "subhead text-xl font-bold", children: ((l = null == v ? void 0 : v.stats.points), (i = 0), r && r.drivers && r.drivers.driver && l && "--" !== l && !Number.isNaN(parseInt(l)) && (i = parseInt(l)), i - f) })] })] }), (0, s.jsxs)("a", { href: "https://www.indycar.com/Series/".concat((null == m ? void 0 : null === (t = m.leaderboardHeartbeat) || void 0 === t ? void 0 : t.series) === "L" ? "INDY-NXT" : "IndyCar-Series", "/").concat(null == v ? void 0 : v.name.replaceAll(" ", "-").replaceAll("'", "").replaceAll(".", "").replaceAll('"', "")), target: "_blank", className: (0, o.AK)("flex space-x-2 justify-center rounded-lg py-3 px-4 items-center text-white", (null == m ? void 0 : m.leaderboardHeartbeat.series) === "L" ? "bg-rc-indynxt" : "bg-rc-indycar"), children: [(0, s.jsx)("svg", { width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, s.jsx)("path", { fill: "white", d: "M5.5 21C4.95 21 4.47917 20.8042 4.0875 20.4125C3.69583 20.0208 3.5 19.55 3.5 19V5C3.5 4.45 3.69583 3.97917 4.0875 3.5875C4.47917 3.19583 4.95 3 5.5 3H12.5V5H5.5V19H19.5V12H21.5V19C21.5 19.55 21.3042 20.0208 20.9125 20.4125C20.5208 20.8042 20.05 21 19.5 21H5.5ZM10.2 15.7L8.8 14.3L18.1 5H14.5V3H21.5V10H19.5V6.4L10.2 15.7Z" }) }), (0, s.jsx)("div", { className: "cta-primary text-xl", children: "View Full Bio" })] })] }) : (0, s.jsx)("div", { children: "Unable to retrieve driver profile. Try again later." }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var es = l(2678);
      function ea(e) {
        let {} = e,
          { leaderboardData: t } = (0, a.$1)(),
          l = (0, c.useRef)(null),
          [i, r] = (0, c.useState)("ready");
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("button", {
              onClick: function () {
                null !== l.current && "loading" !== i && ("ready" === i ? (l.current.play(), r("playing")) : "playing" === i ? (l.current.pause(), r("paused")) : "paused" === i && (l.current.load(), l.current.play(), r("playing")));
              },
              className: (0, o.AK)("p-2 rounded-full h-fit", (null == t ? void 0 : t.leaderboardHeartbeat.series) === "L" ? "bg-rc-light-indynxt" : "bg-rc-light-indycar"),
              children: [("ready" === i || "paused" === i) && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("div", { className: "sr-only", children: "Start Radio" }), (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 -960 960 960", width: "24", fill: "white", children: (0, s.jsx)("path", { d: "M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z" }) })] }), "loading" === i && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("div", { className: "sr-only", children: "Radio is loading..." }), (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 -960 960 960", width: "24", children: (0, s.jsx)("path", { d: "M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z" }) })] }), "playing" === i && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("div", { className: "sr-only", children: "Pause Radio" }), (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", fill: "none", children: (0, s.jsx)("path", { d: "M14 19V5H18V19H14ZM6 19V5H10V19H6Z", fill: "white" }) })] })],
            }),
            (0, s.jsx)("audio", { ref: l, src: "https://edge.mixlr.com/channel/qsbtz" }),
          ],
        });
      }
      function ei(e) {
        let { sessionHeaderRef: t, setShowWaysToWatchModal: l } = e,
          { configData: i } = (0, m.Zq)(),
          { leaderboardData: r } = (0, a.$1)(),
          n = (0, c.useRef)(null),
          d = (0, c.useRef)(null),
          L = (0, c.useRef)(null);
        return (
          (0, c.useEffect)(() => {
            let e = setInterval(() => {
              if (n.current && d.current) {
                let e = n.current.clientWidth,
                  t = d.current.offsetWidth;
                t > e && !d.current.classList.contains("scrolling-text") ? d.current.classList.add("scrolling-text") : t < e && d.current.classList.contains("scrolling-text") && d.current.classList.remove("scrolling-text");
              }
            }, 1e3);
            return () => {
              clearInterval(e);
            };
          }, [n, n.current, d, d.current, null == r ? void 0 : r.leaderboardHeartbeat.eventName]),
          (0, c.useEffect)(() => {
            let e = setInterval(() => {
              if (n.current && L.current) {
                let e = n.current.clientWidth,
                  t = L.current.offsetWidth;
                t > e && !L.current.classList.contains("scrolling-text") ? L.current.classList.add("scrolling-text") : t < e && L.current.classList.contains("scrolling-text") && L.current.classList.remove("scrolling-text");
              }
            }, 1e3);
            return () => {
              clearInterval(e);
            };
          }, [n, n.current, L, L.current, null == r ? void 0 : r.leaderboardHeartbeat.eventName]),
          (0, s.jsxs)("section", {
            ref: t,
            className: (0, o.AK)("sticky left-0 top-0 z-30 py-3 px-2 flex items-center w-screen lg:w-full", (null == r ? void 0 : r.leaderboardHeartbeat.series) === "L" ? "bg-rc-indynxt" : "bg-rc-indycar"),
            children: [
              (0, s.jsxs)("div", { ref: n, className: "flex-grow overflow-hidden relative h-12 mr-2", children: [(null == r ? void 0 : r.leaderboardHeartbeat.eventName) ? (0, s.jsx)("h1", { ref: d, className: "headline absolute top-0 left-0 whitespace-nowrap text-white", children: null == r ? void 0 : r.leaderboardHeartbeat.eventName }) : (0, s.jsx)("h1", { ref: d, className: "headline absolute top-0 left-0 whitespace-nowrap text-white", children: null == r ? void 0 : r.leaderboardHeartbeat.trackName }), (null == r ? void 0 : r.leaderboardHeartbeat.sessionName) && (0, s.jsxs)("p", { ref: L, className: "subhead absolute bottom-0 left-0 -mt-1 whitespace-nowrap truncate text-white", children: [(null == r ? void 0 : r.leaderboardHeartbeat.series) === "L" ? "INDY NXT" : "NTT INDYCAR SERIES", " - ", null == r ? void 0 : r.leaderboardHeartbeat.sessionName] })] }),
              (0, s.jsxs)("div", {
                className: "flex space-x-2 w-fit",
                children: [
                  (0, s.jsx)(ea, {}),
                  (null == i ? void 0 : i.ways_to_watch) &&
                    (null == i ? void 0 : i.ways_to_watch.filter((e) => e.show).length) > 0 &&
                    (0, s.jsxs)("button", {
                      onClick: () => {
                        l(!0);
                      },
                      className: (0, o.AK)("p-2 rounded-full h-fit", (null == r ? void 0 : r.leaderboardHeartbeat.series) === "L" ? "bg-rc-light-indynxt" : "bg-rc-light-indycar"),
                      children: [(0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 -960 960 960", width: "24", fill: "white", children: (0, s.jsx)("path", { d: "m380-340 280-180-280-180v360Zm-60 220v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z" }) }), (0, s.jsx)("div", { className: "sr-only", children: "Open Ways to Watch modal" })],
                    }),
                ],
              }),
            ],
          })
        );
      }
      function er(e) {
        let { sessionHeaderHeight: t, sessionStatusRef: l } = e,
          { enlargeLeaderboard: i, leaderboardData: r } = (0, a.$1)(),
          { configData: n } = (0, m.Zq)();
        if (!r || !n) return (0, s.jsx)("div", {});
        let d = (0, o.eR)(r.leaderboardHeartbeat);
        return "WARM" === d ? (0, s.jsx)("section", { className: (0, o.AK)(i ? "lg:w-[400px] lg:relative lg:!top-0" : "lg:w-full", "sticky left-0 top-0 z-30 w-screen"), style: { top: "".concat(t, "px") }, ref: l, children: (0, s.jsx)("div", { className: "flex space-x-2 py-1.5 items-center justify-center bg-rc-flag-warm text-white", children: (0, s.jsx)("div", { className: "section-header", children: d }) }) }) : (0, s.jsxs)("section", { className: (0, o.AK)(i ? "lg:w-[400px] lg:relative lg:!top-0 lg:grid-cols-1" : "lg:w-full", "sticky left-0 top-0 z-30 grid grid-cols-2 w-screen"), style: { top: "".concat(t, "px") }, ref: l, children: [(0, s.jsxs)("div", { className: "flex space-x-2 py-1.5 items-center justify-center bg-white border-b", children: [(0, s.jsxs)("div", { children: ["CHECKERED" === d && (0, s.jsx)("svg", { width: "25", height: "25", viewBox: "0 0 25 25", fill: "black", xmlns: "http://www.w3.org/2000/svg", children: (0, s.jsx)("path", { d: "M9.98389 6H11.9839V4H9.98389V6ZM13.9839 6V4H15.9839V6H13.9839ZM9.98389 14V12H11.9839V14H9.98389ZM17.9839 10V8H19.9839V10H17.9839ZM17.9839 14V12H19.9839V14H17.9839ZM13.9839 14V12H15.9839V14H13.9839ZM17.9839 6V4H19.9839V6H17.9839ZM11.9839 8V6H13.9839V8H11.9839ZM5.98389 20V4H7.98389V6H9.98389V8H7.98389V10H9.98389V12H7.98389V20H5.98389ZM15.9839 12V10H17.9839V12H15.9839ZM11.9839 12V10H13.9839V12H11.9839ZM9.98389 10V8H11.9839V10H9.98389ZM13.9839 10V8H15.9839V10H13.9839ZM15.9839 8V6H17.9839V8H15.9839Z", fill: "#1C1B1F" }) }), "GREEN" === d && (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: (0, s.jsx)("path", { d: "M9.52 3.08824L9.2 1.5H2V15H3.6V9.44118H8.08L8.4 11.0294H14V3.08824H9.52Z", fill: "#00B215" }) }), "YELLOW" === d && (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: (0, s.jsx)("path", { d: "M9.52 3.08824L9.2 1.5H2V15H3.6V9.44118H8.08L8.4 11.0294H14V3.08824H9.52Z", fill: "#FDC214" }) }), "RED" === d && (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: (0, s.jsx)("path", { d: "M9.52 3.08824L9.2 1.5H2V15H3.6V9.44118H8.08L8.4 11.0294H14V3.08824H9.52Z", fill: "#DA291C" }) })] }), (0, s.jsx)("div", { className: "section-header mt-1", children: d })] }), (0, s.jsx)("div", { className: "bg-black flex items-center justify-center", children: (0, s.jsx)("div", { className: "section-header text-white mt-1", children: (0, o.vQ)(r.leaderboardHeartbeat, n) }) })] });
      }
      function en() {
        var e;
        let { leaderboardData: t } = (0, a.$1)();
        return (0, s.jsx)("a", { href: "https://indycar.com", target: "_blank", className: (0, o.AK)((null == t ? void 0 : null === (e = t.leaderboardHeartbeat) || void 0 === e ? void 0 : e.series) === "L" ? "bg-rc-indynxt hover:bg-rc-indynxt-hover" : "bg-rc-indycar hover:bg-rc-indycar-hover", "pointer-events-auto mb-3 flex items-center justify-between gap-x-6 transition-all px-6 py-2.5 rounded-lg mx-3 sm:mx-0 sm:py-3 sm:pl-4 sm:pr-3.5"), children: (0, s.jsxs)("div", { className: "w-full flex items-center justify-between text-sm leading-6 text-white", children: [(0, s.jsxs)("div", { children: [(0, s.jsx)("svg", { className: "inline mr-2 fill-white", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 -960 960 960", width: "24", children: (0, s.jsx)("path", { d: "M558-84q-15 8-30.5 2.5T504-102l-60-120q-8-15-2.5-30.5T462-276q15-8 30.5-2.5T516-258l60 120q8 15 2.5 30.5T558-84Zm240 0q-15 8-30.5 2.5T744-102l-60-120q-8-15-2.5-30.5T702-276q15-8 30.5-2.5T756-258l60 120q8 15 2.5 30.5T798-84Zm-480 0q-15 8-30.5 2.5T264-102l-60-120q-8-15-2.5-30.5T222-276q15-8 30.5-2.5T276-258l60 120q8 15 2.5 30.5T318-84Zm-18-236q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Zm0-80h400q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-40q0-66-47-113t-113-47q-48 0-87.5 26T333-704l-10 24h-25q-57 2-97.5 42.5T160-540q0 58 41 99t99 41Zm180-200Z" }) }), (0, s.jsx)("strong", { className: "font-semibold", children: "Rain Delay" }), (0, s.jsx)("svg", { viewBox: "0 0 2 2", className: "mx-2 inline h-0.5 w-0.5 fill-current", "aria-hidden": "true", children: (0, s.jsx)("circle", { cx: 1, cy: 1, r: 1 }) }), "Please visit INDYCAR.com for updates\xa0", (0, s.jsx)("span", { "aria-hidden": "true" })] }), (0, s.jsx)("svg", { className: "fill-white", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 -960 960 960", width: "24", children: (0, s.jsx)("path", { d: "m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" }) })] }) });
      }
      function ed(e) {
        var t;
        let {} = e,
          { enlargeLeaderboard: l, leaderboardData: i } = (0, a.$1)();
        return (0, s.jsx)("div", { className: (0, o.AK)(l ? "lg:hidden" : "lg:flex", "flex-1 flex items-end w-full"), children: (0, s.jsx)("div", { className: "".concat((null == i ? void 0 : null === (t = i.leaderboardHeartbeat) || void 0 === t ? void 0 : t.series) === "L" ? "bg-rc-indynxt" : "bg-rc-indycar", " p-2.5 w-full"), children: (0, s.jsx)("div", { className: "max-w-container mx-auto", children: (0, s.jsxs)("p", { className: "font-industry font-bold text-white text-[13px] uppercase text-center lg:text-start", children: [new Date().getFullYear(), " INDYCAR\xae IS A REGISTERED TRADEMARK OF BRICKYARD TRADEMARKS, INC. / ", (0, s.jsx)("a", { href: "/privacy", children: "PRIVACY POLICY" }), " & ", (0, s.jsx)("a", { href: "/terms-of-use", children: "TERMS OF USE" })] }) }) }) });
      }
      function ec() {
        let { enlargeLeaderboard: e, setEnlargeLeaderboard: t, compactLeaderboard: l, setCompactLeaderboard: r } = (0, a.$1)(),
          { showLegendModal: n, setShowLegendModal: d } = (0, i.zB)();
        return (0, s.jsxs)("div", {
          className: "flex flex-col items-center space-y-3",
          children: [
            (0, s.jsxs)("div", {
              className: "flex flex-col items-center",
              children: [
                (0, s.jsx)("div", { className: "text-xs font-black font-industry uppercase mb-0 text-rc-text-gray", children: "Enlarge" }),
                (0, s.jsx)("button", {
                  onClick: () => {
                    t((e) => !e);
                  },
                  className: (0, o.AK)(e ? "bg-rc-indycar fill-white hover:bg-white hover:fill-rc-indycar" : "fill-rc-indycar hover:bg-rc-indycar hover:fill-white", "p-1 rounded-md h-fit border-2 border-rc-indycar transition-all"),
                  title: e ? "Unenlarge Leaderboard" : "Enlarge Leaderboard",
                  children: e ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("div", { className: "sr-only", children: "Unenlarge Leaderboard" }), (0, s.jsx)("svg", { className: "w-7 h-7", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 -960 960 960", width: "24", children: (0, s.jsx)("path", { d: "m156-100-56-56 124-124H120v-80h240v240h-80v-104L156-100Zm648 0L680-224v104h-80v-240h240v80H736l124 124-56 56ZM120-600v-80h104L100-804l56-56 124 124v-104h80v240H120Zm480 0v-240h80v104l124-124 56 56-124 124h104v80H600Z" }) })] }) : (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("div", { className: "sr-only", children: "Enlarge Leaderboard" }), (0, s.jsx)("svg", { className: "w-7 h-7", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 -960 960 960", width: "24", children: (0, s.jsx)("path", { d: "M120-120v-240h80v104l124-124 56 56-124 124h104v80H120Zm480 0v-80h104L580-324l56-56 124 124v-104h80v240H600ZM324-580 200-704v104h-80v-240h240v80H256l124 124-56 56Zm312 0-56-56 124-124H600v-80h240v240h-80v-104L636-580Z" }) })] }),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "flex flex-col items-center",
              children: [
                (0, s.jsx)("div", { className: "text-xs font-black font-industry uppercase mb-0 text-rc-text-gray", children: "Legend" }),
                (0, s.jsxs)("button", {
                  onClick: () => {
                    d(!0);
                  },
                  className: "bg-rc-indycar fill-white hover:bg-white hover:fill-rc-indycar p-1 rounded-md h-fit border-2 border-rc-indycar transition-all",
                  title: "Open Legend",
                  children: [(0, s.jsx)("div", { className: "sr-only", children: "Open legend modal" }), (0, s.jsx)("svg", { className: "w-7 h-7", xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 -960 960 960", width: "24", children: (0, s.jsx)("path", { d: "M424-320q0-81 14.5-116.5T500-514q41-36 62.5-62.5T584-637q0-41-27.5-68T480-732q-51 0-77.5 31T365-638l-103-44q21-64 77-111t141-47q105 0 161.5 58.5T698-641q0 50-21.5 85.5T609-475q-49 47-59.5 71.5T539-320H424Zm56 240q-33 0-56.5-23.5T400-160q0-33 23.5-56.5T480-240q33 0 56.5 23.5T560-160q0 33-23.5 56.5T480-80Z" }) })],
                }),
              ],
            }),
          ],
        });
      }
      function eo() {
        let { configData: e, setConfigData: t } = (0, m.Zq)(),
          { enlargeLeaderboard: l, leaderboardData: i, setLeaderboardData: r } = (0, a.$1)(),
          n = (0, es.E3)(),
          { driverPositions: d, setDriverPositions: L, wssUriRef: u, wssKeyRef: x, trackMapPathDRef: g, trackDirectionReverseRef: b } = (0, G.qI)(),
          w = (0, c.useRef)(null),
          j = (0, c.useRef)(null),
          y = (0, c.useRef)(null),
          N = (0, c.useRef)(null),
          T = (0, c.useRef)(null),
          k = (0, c.useRef)(null),
          [H, S] = (0, c.useState)(null),
          [A, I] = (0, c.useState)(null),
          [B, _] = (0, c.useState)(72),
          [R, C] = (0, c.useState)(32),
          [D, P] = (0, c.useState)(!1),
          [q, F] = (0, c.useState)(!1);
        function K() {
          fetch(o.BB ? "https://indycar.blob.core.windows.net/racecontrol/tsconfig.json?".concat(new Date().getTime()) : "http://localhost:3001/tsconfig.json?".concat(new Date().getTime()))
            .then((e) => e.json())
            .then((e) => {
              t(e), e && e.track_map && e.track_map.wss_uri && e.track_map.wss_uri !== u.current && (u.current = e.track_map.wss_uri), e && e.track_map && e.track_map.wss_key && e.track_map.wss_key !== x.current && (x.current = e.track_map.wss_key), e && e.track_map && e.track_map.map_svg_path_d && e.track_map.map_svg_path_d !== g.current && (g.current = e.track_map.map_svg_path_d), e && e.track_map && e.track_map.reverse_direction !== b.current && (b.current = e.track_map.reverse_direction);
            })
            .catch((e) => {
              console.log(e);
            });
        }
        return ((0, c.useEffect)(() => {
          window.onscroll = (e) => {
            let t = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop,
              l = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - t - (screen.height || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
            (t < 25 || l < 25) && D ? P(!1) : t >= 25 && l >= 25 && !D && P(!0);
          };
        }, [D]),
        (0, c.useEffect)(() => {
          fetch((o.BB, "https://indycar.blob.core.windows.net/racecontrol/driversfeed.json?".concat(new Date().getTime())))
            .then((e) => e.text())
            .then((e) => {
              let t = e.replaceAll("driverCallback(", "");
              S(JSON.parse((t = t.replaceAll(");", ""))));
            })
            .catch((e) => {
              console.log(e);
            });
        }, []),
        (0, c.useEffect)(() => {
          fetch((o.BB, "https://indycar.blob.core.windows.net/racecontrol/driversfeed_fil.json?".concat(new Date().getTime())))
            .then((e) => e.text())
            .then((e) => {
              let t = e.replaceAll("driverFILCallback(", "");
              I(JSON.parse((t = t.replaceAll(");", ""))));
            })
            .catch((e) => {
              console.log(e);
            });
        }, []),
        (0, c.useEffect)(() => {
          if (w.current) {
            var e;
            _(null === (e = w.current) || void 0 === e ? void 0 : e.offsetHeight);
          }
        }, [w, w.current]),
        (0, c.useEffect)(() => {
          if (j.current) {
            var e;
            C(null === (e = j.current) || void 0 === e ? void 0 : e.offsetHeight);
          }
        }, [j, j.current]),
        (0, c.useEffect)(() => {
          K();
          let e = setInterval(() => {
            K();
          }, 5e3);
          return () => clearInterval(e);
        }, []),
        (0, c.useEffect)(() => {
          let t = setInterval(() => {
            null === e ||
              e.no_track_activity ||
              fetch(o.BB ? "https://indycar.blob.core.windows.net/racecontrol/timingscoring-ris.json?".concat(new Date().getTime()) : "http://localhost:3001/timing-scoring.json?".concat(new Date().getTime()))
                .then((e) => e.json())
                .then((e) => {
                  if (null !== e) {
                    let t = new V(e, H, A, n);
                    r(t);
                    let l = t.leaderboardItems.filter((e) => 1 === e.liveRank),
                      s = t.leaderboardItems
                        .sort((e, t) => {
                          var l, s;
                          return (null !== (l = t.liveRank) && void 0 !== l ? l : -1) - (null !== (s = e.liveRank) && void 0 !== s ? s : -1);
                        })
                        .filter((e) => {
                          var t;
                          return null === (t = e.carNumber) || void 0 === t ? void 0 : t.text;
                        })
                        .map((e) => {
                          var s, a, i, r;
                          return { carNumber: null !== (r = null === (s = e.carNumber) || void 0 === s ? void 0 : s.text) && void 0 !== r ? r : "", onLeadLap: "P" === t.leaderboardHeartbeat.sessionType || "Q" === t.leaderboardHeartbeat.sessionType || (l && l.length > 0 && (null === (a = l[0].laps) || void 0 === a ? void 0 : a.value) === (null === (i = e.laps) || void 0 === i ? void 0 : i.value)), onTrack: e.onTrack };
                        });
                    d
                      .map((e) =>
                        ""
                          .concat(e.carNumber, "-")
                          .concat(e.onLeadLap ? 1 : 0, "-")
                          .concat(e.onTrack ? 1 : 0)
                      )
                      .join(",") !==
                      s
                        .map((e) =>
                          ""
                            .concat(e.carNumber, "-")
                            .concat(e.onLeadLap ? 1 : 0, "-")
                            .concat(e.onTrack ? 1 : 0)
                        )
                        .join(",") && L(s),
                      "R" === t.leaderboardHeartbeat.sessionType && "I" === t.leaderboardHeartbeat.series ? n.fetchData() : n.clearData();
                  }
                })
                .catch((e) => {
                  console.log(e);
                });
          }, 1e3);
          return () => clearInterval(t);
        }, [e, null == e ? void 0 : e.no_track_activity, H, A, n, d]),
        (0, c.useEffect)(() => {
          T &&
            T.current &&
            k &&
            k.current &&
            (k.current.onscroll = (e) => {
              if (T.current && k.current) {
                var t;
                T.current.scrollLeft = null === (t = k.current) || void 0 === t ? void 0 : t.scrollLeft;
              }
            });
        }, [T, T.current, k, k.current]),
        e && !e.no_track_activity && i)
          ? (0, s.jsxs)("div", { className: "w-screen h-full flex flex-col", children: [(0, s.jsxs)("div", { className: (0, o.AK)(l ? "lg:p-6 xl:px-8 xl:py-2" : "lg:p-6 xl:px-8 xl:py-6"), children: [e.rain_delay && (0, s.jsx)(en, {}), (0, s.jsxs)("div", { className: (0, o.AK)(l ? "lg:flex-col" : "", "lg:flex"), children: [(0, s.jsxs)("div", { className: (0, o.AK)(l ? "lg:w-full lg:flex lg:flex-row lg:items-stretch lg:bg-rc-indycar" : "lg:min-w-[400px] lg:w-[400px]", "lg:h-fit lg:overflow-hidden lg:bg-rc-light-gray lg:border lg:border-rc-gray lg:rounded-lg"), children: [(0, s.jsx)(ei, { sessionHeaderRef: w, setShowWaysToWatchModal: F }), (null == i ? void 0 : i.leaderboardHeartbeat.currentFlag) && (0, s.jsx)(er, { sessionHeaderHeight: B, sessionStatusRef: j }), e.show_static_track_map && (0, s.jsx)(et, {}), e.track_map.show && !l && (0, s.jsx)(ee, {}), (null == i ? void 0 : i.leaderboardItems.length) > 0 && (0, s.jsxs)(s.Fragment, { children: [e.show_quick_insights && (0, s.jsx)(f, {}), (0, s.jsxs)("div", { className: "lg:hidden", children: [(0, s.jsx)("div", { ref: T, className: "sticky overflow-hidden w-screen z-30", style: { top: "".concat(B + R, "px") }, children: (0, s.jsx)(U, { sessionHeaderHeight: B, sessionStatusBarHeight: R, leaderboardTableRef: N, showHeaderAndHideBody: !0 }) }), (0, s.jsx)("div", { ref: k, className: "overflow-x-scroll w-screen", children: (0, s.jsx)(U, { sessionHeaderHeight: B, sessionStatusBarHeight: R, leaderboardTableRef: y, showHeaderAndHideBody: !1 }) })] })] })] }), (null == i ? void 0 : i.leaderboardItems.length) > 0 && (0, s.jsx)(s.Fragment, { children: (0, s.jsxs)("div", { className: (0, o.AK)(l ? "lg:mt-2" : "lg:ml-7 xl:ml-10", "flex-grow overflow-auto flex flex-col items-center"), children: [(0, s.jsxs)("div", { className: "hidden lg:flex w-full space-x-3", children: [(0, s.jsx)("div", { className: (0, o.AK)(l ? "lg:max-h-[calc(100vh_-180px)]" : "lg:max-h-[calc(100vh_-215px)]", "w-full overflow-auto border border-rc-gray rounded-lg relative"), children: (0, s.jsx)(U, { sessionHeaderHeight: B, sessionStatusBarHeight: R, leaderboardTableRef: y, showHeaderAndHideBody: !1 }) }), (0, s.jsx)(ec, {})] }), (0, s.jsx)(J, { mobile: !0, showFloatingButtons: D })] }) })] })] }), (0, s.jsx)(ed, {}), (0, s.jsx)(h, {}), (0, s.jsx)(v, { showWaysToWatchModal: q, setShowWaysToWatchModal: F }), (0, s.jsx)(el, { driverFeedData: H, nxtDriverFeedData: A })] })
          : e && e.no_track_activity
          ? (0, s.jsxs)("div", { className: "w-full h-full flex flex-col items-center justify-center", children: [(0, s.jsxs)("div", { className: "mt-6 sm:mt-12", children: [e.rain_delay && (0, s.jsx)("div", { className: "w-full max-w-[1270px]", children: (0, s.jsx)(en, {}) }), (0, s.jsx)(p(), { src: (0, o.yq)(o.BB ? "https://d1b8ufspcmikd1.cloudfront.net/scripts/indycar/racecontrol/" : "/", "NoTrackActivity_400px.jpg"), width: 1270, height: 400, alt: "No track activity placeholder image" })] }), (0, s.jsx)(ed, {})] })
          : (0, s.jsxs)("div", { className: "w-full h-full flex flex-col items-center justify-center", children: [(0, s.jsx)("div", { className: "mt-6 sm:mt-12", children: (0, s.jsx)("svg", { className: "fill-rc-indycar animate-spin", xmlns: "http://www.w3.org/2000/svg", height: "48", viewBox: "0 -960 960 960", width: "48", children: (0, s.jsx)("path", { d: "M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z" }) }) }), (0, s.jsx)(ed, {})] });
      }
    },
  },
  function (e) {
    e.O(0, [299, 808, 24, 971, 938, 744], function () {
      return e((e.s = 9396));
    }),
      (_N_E = e.O());
  },
]);
