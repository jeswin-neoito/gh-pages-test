parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dGFL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GET_CALENDLY_EVENT_TYPES=void 0;var e,n=require("@apollo/client");function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var t=(0,n.gql)(e||(e=r(["\n    query GetCalendlyEventTypesOfUser {\n        getCalendlyEventTypesOfUser {\n            duration\n            name\n            scheduling_url\n            slug\n            uri\n        }\n    }\n"])));exports.GET_CALENDLY_EVENT_TYPES=t;
},{"@apollo/client":"mEz9"}],"eOF5":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ConnectedAppsStatus=void 0,exports.ConnectedAppsStatus=e,function(e){e.pending="PENDING",e.completed="COMPLETED"}(e||(exports.ConnectedAppsStatus=e={}));
},{}],"focE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useStyles=void 0;var e=require("@material-ui/styles"),t=r(require("styles/themes"));function r(e){return e&&e.__esModule?e:{default:e}}var a=(0,e.makeStyles)(function(){return(0,e.createStyles)({radioCard:{minWidth:"90%",display:"flex",background:t.default.palette.common.white,borderRadius:8,padding:10,marginBottom:10},radioCardLeft:{color:t.default.palette.primary.main,padding:2},radioCardRight:{"& h5":{fontWeight:700,fontSize:16,color:t.default.palette.primary.main},"& p":{fontWeight:300,fontSize:14,color:t.default.palette.primary.main,margin:0}}})});exports.useStyles=a;
},{"@material-ui/styles":"thJn","styles/themes":"bzqE"}],"x92y":[function(require,module,exports) {

},{}],"V684":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react/jsx-runtime"),s=require("./styles");require("./style.scss");var i=function(i){var r=i.title,a=i.subTitle,d=i.checked,t=i.onChange,c=(0,s.useStyles)();return(0,e.jsxs)("div",Object.assign({className:c.radioCard},{children:[(0,e.jsxs)("div",Object.assign({className:"radioCardLeft"},{children:[(0,e.jsx)("input",{type:"radio",name:"radio_card",checked:d,onChange:t},void 0),(0,e.jsx)("span",{className:"check"},void 0)]}),void 0),(0,e.jsxs)("div",Object.assign({className:c.radioCardRight},{children:[(0,e.jsx)("h5",{children:r},void 0),(0,e.jsx)("p",{children:a},void 0)]}),void 0)]}),void 0)},r=i;exports.default=r;
},{"react/jsx-runtime":"plwR","./styles":"focE","./style.scss":"x92y"}],"uMqn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react/jsx-runtime"),n=require("./styles"),t=m(require("component/layout/custom_layout")),r=require("react"),i=require("@apollo/client"),o=require("graph_ql/calendly/queries"),l=require("../types"),a=require("graph_ql/connected_apps/mutations"),u=require("react-router-dom"),s=require("routes/constant"),d=require("graph_ql/connected_apps/queries"),c=m(require("component/StandardRadioCard")),v=require("@material-ui/core"),p=m(require("styles/themes"));function m(e){return e&&e.__esModule?e:{default:e}}function y(e,n){return N(e)||g(e,n)||h(e,n)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e,n){if(e){if("string"==typeof e)return C(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?C(e,n):void 0}}function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function g(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],l=!0,a=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);l=!0);}catch(u){a=!0,i=u}finally{try{l||null==t.return||t.return()}finally{if(a)throw i}}return o}}function N(e){if(Array.isArray(e))return e}var E=function(){var m=(0,n.useStyles)(),f=(0,u.useHistory)(),h=y((0,r.useState)(),2),C=h[0],g=h[1],N=y((0,r.useState)([]),2),E=N[0],b=N[1],j=y((0,r.useState)(!1),2),T=j[0],_=j[1],A=y((0,r.useState)(),2),O=A[0],q=A[1],S=(0,i.useQuery)(d.MY_CONNECTED_APPS,{onCompleted:function(e){null==e||e.myConnectedApps.filter(function(e){return"CALENDLY"===e.app&&(q(e),g({eventName:e.eventName,schedulingLink:e.schedulingLink})),!0})}}).loading,x=(0,i.useQuery)(o.GET_CALENDLY_EVENT_TYPES,{onCompleted:function(e){var n;(null===(n=null==e?void 0:e.getCalendlyEventTypesOfUser)||void 0===n?void 0:n.length)?b(null==e?void 0:e.getCalendlyEventTypesOfUser):f.push(s.PATH.CONNECTED_ACCOUNTS,{noCalendlyEventTypes:!0})},onError:function(e){console.log("Get Calendly Event Type Error: ",e),f.push(s.PATH.CONNECTED_ACCOUNTS)},fetchPolicy:"cache-and-network"}).loading,P=y((0,i.useMutation)(a.UPDATE_CONNECTED_APP,{onCompleted:function(){_(!1),f.push(s.PATH.CONNECTED_ACCOUNTS)},onError:function(e){console.error("Update Connected App Error: ",e)}}),1)[0];return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(t.default,Object.assign({title:"Calendly",showHeader:!0},{children:x||T||S?(0,e.jsx)("div",Object.assign({className:m.loadingSection},{children:(0,e.jsxs)("span",Object.assign({className:m.loadingText},{children:["Loading Calendly..   ",(0,e.jsx)(v.CircularProgress,{style:{width:14,height:14,color:p.default.palette.primary.main}},void 0)]}),void 0)}),void 0):(0,e.jsxs)("div",Object.assign({className:m.pageContainer},{children:[(0,e.jsx)("div",Object.assign({className:m.meetingsCardContainer},{children:null==E?void 0:E.map(function(n){return(0,e.jsx)(c.default,{title:null==n?void 0:n.name,subTitle:"".concat(null==n?void 0:n.slug,", one-to-one session"),checked:(null==C?void 0:C.eventName)===(null==n?void 0:n.name),onChange:function(){return g({eventName:null==n?void 0:n.name,schedulingLink:null==n?void 0:n.scheduling_url})}},n.uri)})}),void 0),(0,e.jsx)("div",Object.assign({className:m.buttonContainer},{children:(0,e.jsx)("button",Object.assign({className:m.saveButton,disabled:x||!(null==C?void 0:C.eventName),onClick:function(){_(!0),C&&P({variables:{input:{id:null==O?void 0:O.id,eventName:null==C?void 0:C.eventName,schedulingLink:null==C?void 0:C.schedulingLink,status:l.ConnectedAppsStatus.completed}}})}},{children:"Save"}),void 0)}),void 0)]}),void 0)}),void 0)},void 0)},b=E;exports.default=b;
},{"react/jsx-runtime":"plwR","./styles":"ELsE","component/layout/custom_layout":"cpyL","react":"n8MK","@apollo/client":"mEz9","graph_ql/calendly/queries":"dGFL","../types":"eOF5","graph_ql/connected_apps/mutations":"BQin","react-router-dom":"uc19","routes/constant":"QgAm","graph_ql/connected_apps/queries":"hhVP","component/StandardRadioCard":"V684","@material-ui/core":"dT3j","styles/themes":"bzqE"}]},{},[], null)