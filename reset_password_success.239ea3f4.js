parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"akZi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react/jsx-runtime"),t=require("@material-ui/core"),i=require("component/customize_style_component/styled_title"),n=d(require("component/layout/custom_layout")),s=require("contexts/AuthContext"),o=require("react"),r=require("react-router-dom"),c=require("routes/constant"),a=require("./style"),l=require("../../../component/customize_style_component/styled_button"),u=d(require("styles/themes"));function d(e){return e&&e.__esModule?e:{default:e}}function m(){var d=(0,a.useStyles)(),m=(0,r.useHistory)(),p=(0,s.useAuth)().currentUser;return(0,o.useEffect)(function(){p&&m.push(c.PATH.HOME)},[p,m]),(0,e.jsx)(n.default,Object.assign({className:d.backgroundHome,showSideBarBtn:!1,showBackBtn:!1,hideBottomNav:!0},{children:(0,e.jsxs)("div",Object.assign({style:{position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",alignItems:"center"}},{children:[(0,e.jsxs)(t.Box,Object.assign({px:3,width:"100%"},{children:[(0,e.jsxs)(t.Box,Object.assign({textAlign:"center",m:"40px 0 20px 0",width:"100%"},{children:[(0,e.jsx)(i.TitlePage,{children:"Check your email"},void 0),(0,e.jsx)(i.Text,Object.assign({margin:"10px 0 0 0"},{children:"We have sent a password recovery instructions to your email."}),void 0)]}),void 0),(0,e.jsx)(l.PrimaryButton,Object.assign({onClick:function(){return window.open("https://mail.google.com/mail/u/0")},"data-testid":"submit-login",type:"submit"},{children:"Open the app"}),void 0)]}),void 0),(0,e.jsx)(t.Box,Object.assign({style:{width:238,margin:"auto",fontFamily:"Open Sans",textAlign:"center",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end"}},{children:(0,e.jsxs)("p",Object.assign({style:{color:"".concat(u.default.palette.grey[300]),fontSize:14}},{children:["Did not receive the email? Check your spam filter or "," ",(0,e.jsx)("span",Object.assign({style:{color:"".concat(u.default.palette.primary.main)},onClick:function(){return m.push(c.PATH.FORGOT_PASSWORD)}},{children:"Send instuctions again."}),void 0)," "]}),void 0)}),void 0)]}),void 0)}),void 0)}var p=m;exports.default=p;
},{"react/jsx-runtime":"plwR","@material-ui/core":"dT3j","component/customize_style_component/styled_title":"OtKn","component/layout/custom_layout":"cpyL","contexts/AuthContext":"QPxp","react":"n8MK","react-router-dom":"uc19","routes/constant":"QgAm","./style":"vcKG","../../../component/customize_style_component/styled_button":"cwde","styles/themes":"bzqE"}]},{},[], null)