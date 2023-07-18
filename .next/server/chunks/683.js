"use strict";
exports.id = 683;
exports.ids = [683];
exports.modules = {

/***/ 14683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Gallery)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/cjs/index.js
var cjs = __webpack_require__(80345);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/app/components/artCard/page.tsx



function ArtCard(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(cjs.Card, {
        style: {
            width: "200px"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(cjs.Card.Image, {
            src: props.image,
            objectFit: "cover",
            width: "100%",
            height: 240,
            alt: props.title
        })
    });
}

;// CONCATENATED MODULE: ./src/app/components/gallery/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Gallery(props) {
    const [images, setImages] = (0,react_.useState)(props.images);
    (0,react_.useEffect)(()=>{
        setImages(props.images);
    }, [
        props,
        images
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(cjs.Grid.Container, {
        gap: 2,
        children: images.map((image)=>/*#__PURE__*/ jsx_runtime_.jsx(cjs.Grid, {
                xs: 12,
                sm: 3,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ArtCard, {
                    title: image.name,
                    image: image.url
                })
            }, image.id))
    });
}


/***/ })

};
;