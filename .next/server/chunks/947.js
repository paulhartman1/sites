exports.id = 947;
exports.ids = [947];
exports.modules = {

/***/ 12947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80345);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modals_calendar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79520);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Nav() {
    const [showCalModal, setShowCalModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            0: "Face Painting"
        },
        {
            1: "Bug Shows"
        },
        {
            2: "Guitar Lessons"
        },
        {
            3: "Art Projects"
        },
        {
            4: "Performance Schedule"
        }
    ]);
    const [collapseItems, setCollapseItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const items = categories.map((category, index)=>{
            return category[index];
        });
        setCollapseItems(items);
    }, [
        categories
    ]);
    const calCloseHandler = ()=>{
        setShowCalModal(false);
    };
    const calOnChangeHandler = (e)=>{
        console.log(e);
    };
    function handleClick() {
        router.push("/");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Navbar, {
                isBordered: true,
                variant: "floating",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Navbar.Toggle, {
                        showIn: "md"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Navbar.Brand, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                            b: true,
                            color: "inherit",
                            className: "logo-text",
                            onClick: handleClick,
                            children: "David G Hartman"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Navbar.Content, {
                        hideIn: "md",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Navbar.Link, {
                                href: "#",
                                onClick: ()=>{
                                    setShowCalModal(true);
                                },
                                children: "Book Me"
                            }),
                            categories.map((category, index)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Navbar.Link, {
                                    href: `/${index}`,
                                    children: category[index]
                                }, index);
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Navbar.Content, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Navbar.Link, {
                            color: "inherit",
                            href: "#",
                            children: "Login"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Navbar.Collapse, {
                        children: collapseItems.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Navbar.CollapseItem, {
                                activeColor: "warning",
                                css: {
                                    color: index === collapseItems.length - 1 ? "$error" : ""
                                },
                                isActive: index === 2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                    color: "inherit",
                                    css: {
                                        minWidth: "100%"
                                    },
                                    href: "#",
                                    children: item
                                })
                            }, item))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Modal, {
                closeButton: true,
                "aria-labelledby": "modal-title",
                open: showCalModal,
                onClose: calCloseHandler,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Modal.Body, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modals_calendar_page__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        open: showCalModal,
                        onClose: calCloseHandler,
                        onChange: calOnChangeHandler
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 59483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(97376)


/***/ })

};
;