"use strict";
exports.id = 284;
exports.ids = [284];
exports.modules = {

/***/ 32284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/cjs/index.js
var cjs = __webpack_require__(80345);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./public/landingText.tsx

function LandingText() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "banner-text",
        children: [
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, suscipit deleniti quo eveniet accusamus facilis dolore ex quae corrupti odio molestiae fugiat repudiandae soluta, ullam, corporis non. Corporis, ipsam sint.",
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, suscipit deleniti quo eveniet accusamus facilis dolore ex quae corrupti odio molestiae fugiat repudiandae soluta, ullam, corporis non. Corporis, ipsam sint.",
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, suscipit deleniti quo eveniet accusamus facilis dolore ex quae corrupti odio molestiae fugiat repudiandae soluta, ullam, corporis non. Corporis, ipsam sint."
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/components/layout/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
/* eslint-disable react/no-unescaped-entities */ 


function Layout(props) {
    const [bannerImage, setBannerImage] = (0,react_.useState)(props.bannerImage || "/dave.png");
    const [bodyData, setBodyData] = (0,react_.useState)(props.bodyData || LandingText);
    const [bodyTitle, setBodyTitle] = (0,react_.useState)(props.bodyTitle || null);
    (0,react_.useEffect)(()=>{
        setBannerImage(props.bannerImage || "/dave.png");
        setBodyData(props.bodyData || LandingText);
        setBodyTitle(props.bodyTitle || null);
    }, [
        props
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(cjs.Grid.Container, {
        gap: 2,
        style: {
            marginTop: "50px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(cjs.Grid, {
                xs: 0,
                sm: 3,
                style: {
                    marginTop: "35px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(cjs.Image, {
                    className: "banner-image",
                    height: 450,
                    src: bannerImage,
                    alt: "Picture of the author",
                    objectFit: "cover"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(cjs.Grid, {
                xs: 12,
                sm: 9,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "banner-body",
                    children: bodyData
                })
            })
        ]
    });
}


/***/ })

};
;