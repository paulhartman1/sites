(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{3085:function(e,t,i){"use strict";i.d(t,{ZP:function(){return x}});var r=i(6006),o=i(7386),a=i(922),s=i(2167);(0,s.zo)("div",{});let n=(0,s.zo)("div",{margin:0,boxSizing:"border-box",padding:"$$gridGapUnit"});var l=i(9268);let d=e=>{let t=0===e?"none":"inherit";if("number"==typeof e){let i=100/12*e,r=i>100?"100%":i<0?"0":`${i}%`;return{flexGrow:0,display:t,maxWidth:r,flexBasis:r}}return{flexGrow:1,display:t,maxWidth:"100%",flexBasis:"0"}},c=r.forwardRef(({xs:e,sm:t,md:i,lg:a,xl:s,css:c,justify:u,direction:m,alignItems:g,alignContent:h,children:x,className:p,...f},b)=>{let $=(0,r.useMemo)(()=>{let r={xs:e,sm:t,md:i,lg:a,xl:s};return Object.keys(r).reduce((e,t)=>void 0!==r[t]&&!1!==r[t]?`${e} ${t}`:e,"").trim()},[e,t,i,a,s]);return(0,l.jsx)(n,{ref:b,className:(0,o.Z)("nextui-grid-item",$,p),css:{alignItems:g,alignContent:h,justifyContent:u,flexDirection:m,"&.xs":{...d(e)},"@xsMax":{"&.xs":{...d(e)}},"@sm":{"&.sm":{...d(t)}},"@md":{"&.md":{...d(i)}},"@lg":{"&.lg":{...d(a)}},"@xl":{"&.xl":{...d(s)}},...c},...f,children:x})});c.displayName="NextUI.GridItem",c.toString=()=>".nextui-grid-item";var u=(0,a.Z)(c,{xs:!1,sm:!1,md:!1,lg:!1,xl:!1,className:""});let m=r.forwardRef(({children:e,css:t,...i},r)=>(0,l.jsx)(u,{ref:r,css:t,...i,children:e}));m.displayName="NextUI.Grid",m.toString=()=>".nextui-grid";let g=r.forwardRef(({gap:e,wrap:t,css:i,children:a,className:s,...n},d)=>{let c=(0,r.useMemo)(()=>`calc(${e} * $space$3)`,[e]);return(0,l.jsx)(u,{ref:d,className:(0,o.Z)("nextui-grid-container",s),css:{$$gridGapUnit:c,display:"flex",flexWrap:t,boxSizing:"border-box",margin:"calc(-1 * $$gridGapUnit)",width:"calc(100% + $$gridGapUnit * 2)",...i},...n,children:a})});g.displayName="NextUI.GridContainer",g.toString=()=>".nextui-grid-container";var h=(0,a.Z)(g,{gap:0,wrap:"wrap",className:""});m.Container=h;var x=m},8421:function(e,t,i){"use strict";i.d(t,{ZP:function(){return y}});var r=i(6006);let o=(e,t)=>{if(!e)return 0;let i=e.includes("px")?+e.split("px")[0]:e.includes("%")?+e.split("%")[0]*t*.01:e;return Number.isNaN(+i)?0:+i},a=e=>{if(!e||"undefined"==typeof window)return{width:0,height:0};let t=e.getBoundingClientRect(),{width:i,height:r}=window.getComputedStyle(e);return{width:o(`${i}`,t.width),height:o(`${r}`,t.height)}};var s=e=>{let[t,i]=(0,r.useState)({width:0,height:0}),o=()=>{let{width:t,height:r}=a(e.current);i({width:t,height:r})};return(0,r.useEffect)(()=>o(),[e.current]),[t,o]},n=i(4062),l=(e,t=!0)=>{(0,r.useEffect)(()=>{let i=()=>e();return t&&i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[])},d=i(5738),c=i(4493),u=i(7386),m=i(2167);let g=(0,m.F4)({"0%":{backgroundPosition:"200% 0"},to:{backgroundPosition:"-200% 0"}}),h=(0,m.zo)("div",{opacity:0,margin:"0 auto",position:"relative",overflow:"hidden",maxWidth:"100%",transition:"transform 250ms ease 0ms, opacity 200ms ease-in 0ms","@motion":{transition:"none"},variants:{ready:{true:{opacity:1},false:{opacity:0}}}}),x=(0,m.zo)("img",{size:"100%",display:"block"}),p=(0,m.zo)("div",{position:"absolute",top:0,left:0,right:0,bottom:0,size:"100%",borderRadius:"inherit",backgroundImage:"linear-gradient(270deg, $colors$accents1, $colors$accents2, $colors$accents2, $colors$accents1)",backgroundSize:"400% 100%",animation:`${g} 5s ease-in-out infinite`,transition:"opacity 300ms ease-out"});var f=i(922),b=i(9268);let $=r.memo(({opacity:e,css:t,className:i,...r})=>(0,b.jsx)(p,{className:(0,u.Z)("nextui-image-skeleton",i),css:{opacity:e,...t},...r}));c.Ts&&($.displayName="NextUI.ImageSkeleton"),$.toString=()=>".nextui-image-skeleton";var w=(0,f.Z)($,{opacity:.5,className:""});let v=r.forwardRef((e,t)=>{let{src:i,width:o,height:a,showSkeleton:c=!0,className:m,maxDelay:g=3e3,autoResize:p=!1,objectFit:f="scale-down",containerCss:$,css:v,...y}=e,N=(0,d.gy)(t),[S,C]=(0,r.useState)(!0),[j,k]=(0,r.useState)(c),{w:z,h:P}=(0,r.useMemo)(()=>({w:o?"number"==typeof o?`${o}px`:o:"auto",h:a?"number"==typeof a?`${a}px`:a:"auto"}),[o,a]),[I,R,Z]=(0,n.Z)(P),[E,F]=s(N),T=c&&!!o&&!!a;(0,r.useEffect)(()=>{N.current&&N.current.complete&&(C(!1),k(!1))}),(0,r.useEffect)(()=>{let e=setTimeout(()=>{T&&k(!1),clearTimeout(e)},g);return()=>clearTimeout(e)},[S]),(0,r.useEffect)(()=>{if(!p)return;let e=0===E.width,t="auto"===Z.current;!e&&o&&a&&(E.width<o?t||R("auto"):t&&R(P))},[E,o]),l(()=>{p&&F()});let W=(0,r.useMemo)(()=>S?"loading":"ready",[S]);return(0,b.jsxs)(h,{className:(0,u.Z)("nextui-image-container",`nextui-image--${W}`,m),css:{width:z,height:I,...$},"data-state":W,ready:!S||j,children:[j&&(0,b.jsx)(w,{opacity:1}),(0,b.jsx)(x,{ref:N,alt:e.alt||"",className:"nextui-image",css:{objectFit:f,...v},"data-state":W,height:a,src:i,width:o,onLoad:()=>{C(!1)},...y})]})});c.Ts&&(v.displayName="NextUI.Image"),v.toString=()=>".nextui-image";var y=r.memo(v)},691:function(e,t,i){Promise.resolve().then(i.bind(i,5072))},5072:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return F}});var r=i(9268),o=i(3085),a=i(6006),s=i(8421),n=i(922);let l=e=>`calc(${15.25*e}pt + 1px * ${e-1})`;var d=i(2167);let c=(0,d.zo)("div",{width:"100%",maxWidth:"100%",position:"relative",variants:{color:{default:{bg:"$border"},primary:{bg:"$primary"},secondary:{bg:"$secondary"},success:{bg:"$success"},warning:{bg:"$warning"},error:{bg:"$error"}}},defaultVariants:{color:"default"}}),u=(0,d.zo)("span",{position:"absolute",left:"50%",top:"50%",minHeight:"100%",display:"inline-flex",jc:"center",ai:"center",transform:"translate(-50%, -50%)",padding:"0 $lg",fontSize:"$base",fontWeight:"bold",textTransform:"capitalize",backgroundColor:"$background",zIndex:"$1",variants:{color:{default:{color:"$text"},primary:{color:"$primary"},secondary:{color:"$secondary"},success:{color:"$success"},warning:{color:"$warning"},error:{color:"$error"}}}}),m=({height:e,x:t,y:i,align:o,children:s,textColor:n,css:d,...m})=>{let g=(0,a.useMemo)(()=>{if(o&&"center"!==o)return"left"===o||"start"===o?{transform:"translateY(-50%)",left:"7%"}:{transform:"translateY(-50%)",left:"auto",right:"7%"}},[o]),h=i?l(i/2):0,x=t?l(t/2):0;return(0,r.jsx)(c,{css:{margin:`${h} ${x}`,height:`calc(${e} * 1px)`,...d},role:"separator",...m,children:s&&(0,r.jsx)(u,{className:"nextui-divider-text",color:n,css:{...g},children:s})})};m.toString=()=>".nextui-divider";let g=a.memo(m);var h=(0,n.Z)(g,{x:0,y:0,height:1,align:"center"}),x=i(7386);let p=(0,d.F4)({"0%":{opacity:0,transform:"scale(0.25)"},"30%":{opacity:1},"80%":{opacity:.5},"100%":{transform:"scale(28)",opacity:0}}),f=(0,d.zo)("div",{position:"absolute",left:0,right:0,top:0,bottom:0,"& svg":{position:"absolute",animation:`350ms linear ${p}`,animationFillMode:"forwards",width:"$md",height:"$md"}}),b=a.memo(({visible:e,x:t,y:i,color:o,onCompleted:s,className:n,...l})=>{let d=(0,a.useRef)(null),c=Number.isNaN(+i)?0:i-10,u=Number.isNaN(+t)?0:t-10;return(0,a.useEffect)(()=>{let e=d.current;if(e)return e.addEventListener("animationend",s),()=>{e&&e.removeEventListener("animationend",s)}}),e?(0,r.jsx)(f,{ref:d,className:(0,x.Z)("nextui-drip",n),...l,children:(0,r.jsx)("svg",{height:"20",style:{top:c,left:u},viewBox:"0 0 20 20",width:"20",children:(0,r.jsx)("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:(0,r.jsx)("g",{className:"nextui-drip-filler",fill:o,children:(0,r.jsx)("rect",{height:"100%",rx:"10",width:"100%"})})})})}):null});var $=(0,n.Z)(b,{visible:!1,x:0,y:0,className:""}),w=i(4493),v=i(622),y=i(3234),N=i(6846),S=(e=!1,t)=>{let[i,r]=(0,a.useState)(e),[o,s]=(0,a.useState)(0),[n,l]=(0,a.useState)(0);return{visible:i,x:o,y:n,onClick:e=>{if(!t.current)return;let i=t.current.getBoundingClientRect();r(!0),s(e.clientX-i.left),l(e.clientY-i.top)},onCompleted:()=>{r(!1),s(0),l(0)}}},C=i(5738);let j=e=>{let{ref:t,disableAnimation:i=!1,disableRipple:r=!1,variant:o="shadow",isHoverable:s=!1,borderWeight:n="light",isPressable:l=!1,onClick:d,onPress:c,autoFocus:u,allowTextSelectionOnPress:m=!0,...g}=e,h=(0,C.gy)(t),{onClick:x,...p}=S(!1,h),f=e=>{i||r||!h.current||x(e)},{isPressed:b,pressProps:$}=(0,N.r7)({isDisabled:!l,onPress:e=>{"keyboard"!==e.pointerType&&"virtual"!==e.pointerType||(f(e),null==d||d(e)),null==c||c(e)},allowTextSelectionOnPress:m,...g}),{hoverProps:w,isHovered:j}=(0,N.XI)({isDisabled:!s,...g}),{isFocusVisible:k,focusProps:z}=(0,v.Fx)({autoFocus:u});$.onClick=e=>{l&&(f(e),null==d||d(e))};let P=(0,a.useCallback)((e={})=>({...(0,y.dG)(l?{...$,...z}:{},s?w:{},g,e)}),[l,s,$,z,w,g]);return{cardRef:h,variant:o,borderWeight:n,isPressable:l,isHovered:j,isPressed:b,disableAnimation:i,disableRipple:r,dripBindings:p,onDripClickHandler:x,isFocusVisible:k,getCardProps:P}};var k=i(3567);let z=(0,d.zo)("div",{d:"flex",w:"100%",h:"auto",flex:"1 1 auto",fd:"column",jc:"inherit",ai:"inherit",ac:"inherit",py:"$lg",px:"$sm",oy:"auto",position:"relative",ta:"left"}),P=(0,d.zo)("div",{$$cardColor:"$colors$backgroundContrast",$$cardTextColor:"$colors$text",m:0,p:0,br:"$lg",bg:"$$cardColor",color:"$$cardTextColor",position:"relative",display:"flex",overflow:"hidden",fd:"column",width:"100%",height:"auto",boxSizing:"border-box","@motion":{transition:"none"},".nextui-image":{width:"100%"},[`& ${f}`]:{zIndex:"$1",".nextui-drip-filler":{opacity:.25,fill:"$accents6"}},variants:{variant:{flat:{bg:"$accents0"},shadow:{dropShadow:"$lg","@safari":{boxShadow:"$lg",dropShadow:"none"},"@-moz-document url-prefix()":{boxShadow:"$lg",dropShadow:"none"}},bordered:{borderStyle:"solid",borderColor:"$border"}},borderWeight:{light:{bw:"$light"},normal:{bw:"$normal"},bold:{bw:"$bold"},extrabold:{bw:"$extrabold"},black:{bw:"$black"}},disableAnimation:{true:{transition:"none"},false:{transition:"$card"}},isPressable:{true:{cursor:"pointer",us:"none",WebkitTapHighlightColor:"transparent"}},isPressed:{true:{}},isHovered:{true:{dropShadow:"$lg","@safari":{boxShadow:"$lg",dropShadow:"none"},"@-moz-document url-prefix()":{boxShadow:"$lg",dropShadow:"none"}}}},compoundVariants:[{isPressed:!0,disableAnimation:!1,css:{transform:"scale(0.97)"}},{isHovered:!0,disableAnimation:!1,css:{transform:"translateY(-2px)"}},{isHovered:!0,variant:"shadow",css:{dropShadow:"$xl","@safari":{boxShadow:"$xl",dropShadow:"none"},"@-moz-document url-prefix()":{boxShadow:"$xl",dropShadow:"none"}}}]},k.UU,k.BM),I=(0,d.zo)("div",{w:"100%",display:"flex",flexShrink:0,zIndex:"$1",jc:"flex-start",ai:"center",overflow:"hidden",color:"inherit",p:"$sm"}),R=(0,d.zo)("div",{w:"100%",h:"auto",p:"$sm",d:"flex",ai:"center",overflow:"hidden",color:"inherit",bblr:"$lg",bbrr:"$lg",variants:{isBlurred:{true:{bf:"saturate(180%) blur(10px)",bg:"$$cardColor"}}}}),Z=a.forwardRef(({...e},t)=>{let{as:i,css:o,children:a,...s}=e,{cardRef:n,variant:l,isFocusVisible:d,isPressable:c,isPressed:u,disableAnimation:m,disableRipple:g,borderWeight:h,isHovered:x,getCardProps:p,dripBindings:f}=j({...s,ref:t});return(0,r.jsxs)(P,{ref:n,as:i,borderWeight:h,css:o,disableAnimation:m,isFocusVisible:d,isHovered:x,isPressable:c,isPressed:u,role:c?"button":"region",tabIndex:c?0:-1,variant:l,...p(),children:[c&&!m&&!g&&(0,r.jsx)($,{...f}),a]})});function E(e){return(0,r.jsx)(Z,{style:{width:"200px"},children:(0,r.jsx)(Z.Image,{src:e.image,objectFit:"cover",width:"100%",height:240,alt:e.title})})}function F(e){let[t,i]=(0,a.useState)(e.images);return(0,a.useEffect)(()=>{i(e.images)},[e,t]),(0,r.jsx)(o.ZP.Container,{gap:2,children:t.map(e=>(0,r.jsx)(o.ZP,{xs:12,sm:3,children:(0,r.jsx)(E,{title:e.name,image:e.url})},e.id))})}w.Ts&&(Z.displayName="NextUI.Card"),Z.toString=()=>".nextui-card",Z.Header=I,Z.Body=z,Z.Footer=R,Z.Image=s.ZP,Z.Divider=h}},function(e){e.O(0,[106,901,253,961,744],function(){return e(e.s=691)}),_N_E=e.O()}]);