"use strict";
exports.id = 779;
exports.ids = [779];
exports.modules = {

/***/ 22779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Nav)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/cjs/index.js
var cjs = __webpack_require__(80345);
// EXTERNAL MODULE: ./node_modules/react-calendar/dist/cjs/index.js
var dist_cjs = __webpack_require__(77726);
var dist_cjs_default = /*#__PURE__*/__webpack_require__.n(dist_cjs);
// EXTERNAL MODULE: ./node_modules/react-calendar/dist/Calendar.css
var Calendar = __webpack_require__(84448);
;// CONCATENATED MODULE: ./src/app/components/calendar/page.tsx



var TileClasses;
(function(TileClasses) {
    TileClasses[TileClasses["BOOKED"] = 0] = "BOOKED";
    TileClasses[TileClasses["AVAILABLE"] = 1] = "AVAILABLE";
    TileClasses[TileClasses["UNAVAILABLE"] = 2] = "UNAVAILABLE";
})(TileClasses || (TileClasses = {}));
function tileDisabled({ date, view }) {
    return false;
}
async function getCalendarData() {
    const res = await fetch("http://localhost:3000/cal").then((res)=>{
        console.log(res);
        return res;
    }).catch((err)=>{
        console.log(err);
    });
// const data = await res.json();
// return data;
}
function page_Calendar(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx((dist_cjs_default()), {
        onChange: props.onChange,
        value: props.date,
        tileClassName: "red",
        tileDisabled: tileDisabled
    });
}

;// CONCATENATED MODULE: ./src/app/components/modals/calendar/page.tsx




// export interface CalendarModalProps {
//     open: boolean;
//     onClose(): void;
//     onChange(date?:Date): void;
//     date?: Date;
// }
function CalendarModal(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(cjs.Modal, {
        closeButton: true,
        "aria-labelledby": "modal-title",
        open: props.open,
        onClose: props.onClose,
        children: /*#__PURE__*/ jsx_runtime_.jsx(cjs.Modal.Body, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(page_Calendar, {
                onChange: props.onChange,
                date: props.date
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/app/components/nav/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Nav() {
    const [showCalModal, setShowCalModal] = (0,react_.useState)(false);
    const [categories, setCategories] = (0,react_.useState)([
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
    const [collapseItems, setCollapseItems] = (0,react_.useState)([]);
    const router = (0,navigation.useRouter)();
    (0,react_.useEffect)(()=>{
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(cjs.Navbar, {
                isBordered: true,
                variant: "floating",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(cjs.Navbar.Toggle, {
                        showIn: "md"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(cjs.Navbar.Brand, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(cjs.Text, {
                            b: true,
                            color: "inherit",
                            className: "logo-text",
                            onClick: handleClick,
                            children: "David G Hartman"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(cjs.Navbar.Content, {
                        hideIn: "md",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(cjs.Navbar.Link, {
                                href: "#",
                                onClick: ()=>{
                                    setShowCalModal(true);
                                },
                                children: "Book Me"
                            }),
                            categories.map((category, index)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx(cjs.Navbar.Link, {
                                    href: `/${index}`,
                                    children: category[index]
                                }, index);
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(cjs.Navbar.Content, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(cjs.Navbar.Link, {
                            color: "inherit",
                            href: "#",
                            children: "Login"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(cjs.Navbar.Collapse, {
                        children: collapseItems.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(cjs.Navbar.CollapseItem, {
                                activeColor: "warning",
                                css: {
                                    color: index === collapseItems.length - 1 ? "$error" : ""
                                },
                                isActive: index === 2,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(cjs.Link, {
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
            /*#__PURE__*/ jsx_runtime_.jsx(cjs.Modal, {
                closeButton: true,
                "aria-labelledby": "modal-title",
                open: showCalModal,
                onClose: calCloseHandler,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cjs.Modal.Body, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CalendarModal, {
                        open: showCalModal,
                        onClose: calCloseHandler,
                        onChange: calOnChangeHandler
                    })
                })
            })
        ]
    });
}


/***/ })

};
;