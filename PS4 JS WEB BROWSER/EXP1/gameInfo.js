(window.pswCommerceAnywhere=window.pswCommerceAnywhere||[]).push([[13],{222:function(e,t,n){"use strict";n.r(t);var r=n(32),a=n(29),c=n.n(a),o=n(5),s=n.n(o),l=n(0),p=n(1),u=n.n(p),i=n(2),f=n.n(i),g=n(20),d=n.n(g),b=n(21),w=n.n(b),m=n(14),y=n.n(m),v=n(11),O=n(90);function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y()(e);if(t){var a=y()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return w()(this,n)}}var h=function(e){d()(n,e);var t=j(n);function n(){return u()(this,n),t.apply(this,arguments)}return f()(n,[{key:"render",value:function(){var e=this.props,t=e.format,n=e.qa,r=e.releaseDate,a=e.releaseDateType,c=e.publisherName,o=e.genres,s=e.spokenLanguages,p=e.screenLanguages,u=e.platforms,i=[{key:"msgid_platform",value:function(){return u},dataQa:"".concat(n,"#platform")},{key:"msgid_release",value:function(){return r&&t("date",r,Object(O.a)(a))},dataQa:"".concat(n,"#releaseDate")},{key:"msgid_publisher_no_colon",value:function(){return c},dataQa:"".concat(n,"#publisher")},{key:"msgid_genre",value:function(){return o&&l.g.createElement("span",{style:{textTransform:"capitalize"}},o)},dataQa:"".concat(n,"#genre")},{key:"msgid_voice",value:function(){return s},dataQa:"".concat(n,"#voice")},{key:"msgid_screen_languages",value:function(){return p},dataQa:"".concat(n,"#subtitles")}];return l.g.createElement("dl",{"data-qa":n,className:Object(v.b)("psw-l-grid","psw-fill-x","psw-m-y-0")},i.map((function(e){var n=e.key,r=e.value,a=e.dataQa,c=r();return c&&l.g.createElement(l.c,{key:n},l.g.createElement("dt",{className:Object(v.b)("psw-p-l-6","psw-p-l-0@tablet-s","psw-l-w-1/2","psw-l-w-1/6@tablet-s","psw-l-w-1/6@tablet-l","psw-l-w-1/24@laptop","psw-l-w-1/12@desktop","psw-l-w-1/12@max"),"data-qa":"".concat(a,"-key")},"".concat(t("string",n),":")),l.g.createElement("dd",{className:Object(v.b)("psw-p-r-6","psw-p-r-0@tablet-s","psw-t-bold","psw-l-w-1/2","psw-l-w-1/6@tablet-s","psw-l-w-1/6@tablet-l","psw-l-w-1/8@laptop","psw-l-w-1/6@desktop","psw-l-w-1/6@max"),"data-qa":"".concat(a,"-value")},c))})))}}]),n}(l.d);h.defaultProps={format:function(){return arguments.length<=1?void 0:arguments[1]},qa:"mfe-release-information",releaseDate:"",releaseDateType:"",publisherName:"",genres:"",spokenLanguages:"",screenLanguages:"",platforms:""};var P=h;function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y()(e);if(t){var a=y()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return w()(this,n)}}var I=function(e){d()(n,e);var t=D(n);function n(){return u()(this,n),t.apply(this,arguments)}return f()(n,[{key:"render",value:function(){var e=this.props,t=e.format,n=e.sanitizeHtml,r=e.qa,a=e.releaseDate,c=e.releaseDateType,o=e.publisherName,s=e.genres,p=e.spokenLanguages,u=e.screenLanguages,i=e.platforms,f=e.legal;return l.g.createElement("div",{"data-qa":r,className:Object(v.b)("psw-c-bg-0","psw-t-secondary","psw-l-grid")},l.g.createElement("div",{className:Object(v.b)("psw-l-w-1/4","psw-l-w-1/6@tablet-s","psw-l-w-1/6@tablet-l","psw-l-exclude@below-tablet-s")}),l.g.createElement("div",{className:Object(v.b)("psw-l-w-1/1","psw-l-w-1/3@tablet-s","psw-l-w-1/3@tablet-l","psw-l-w-1/4@laptop","psw-l-w-1/4@desktop","psw-l-w-1/4@max")},l.g.createElement(P,{qa:"".concat(r,"#releaseInformation"),format:t,releaseDate:a,releaseDateType:c,publisherName:o,genres:s,spokenLanguages:t("languages",p),screenLanguages:t("screenLanguages",u),platforms:i})),f&&l.g.createElement(l.g.Fragment,null,l.g.createElement("div",{className:Object(v.b)("psw-m-t-7","psw-l-exclude@tablet-s")}),l.g.createElement("div",{className:Object(v.b)("psw-l-w-1/24","psw-l-exclude@below-desktop")}),l.g.createElement("div",{"data-qa":"".concat(r,"#legalText"),className:Object(v.b)("psw-t-preserve","psw-l-w-1/1","psw-l-w-1/3@tablet-s","psw-l-w-1/3@tablet-l","psw-l-w-5/24@laptop","psw-l-w-5/24@desktop","psw-l-w-5/24@max","psw-p-x-6","psw-p-x-0@tablet-s"),dangerouslySetInnerHTML:{__html:n(f)}})))}}]),n}(l.d);I.defaultProps={format:function(){return arguments.length<=1?void 0:arguments[1]},qa:"gameInfo",releaseDate:"",releaseDateType:"",publisherName:"",genres:"",spokenLanguages:[],screenLanguages:[],platforms:"",legal:"",sanitizeHtml:function(e){return e}};var k=I,E=n(56),R=n(13),L=n.n(R),q=n(12);function x(){var e=L()(["\n  fragment ProductInfo on Product {\n    id\n    localizedGenres {\n      value\n    }\n    publisherName\n    releaseDate\n    spokenLanguages\n    screenLanguages\n    platforms\n    descriptions {\n      type\n      subType\n      value\n    }\n  }\n"]);return x=function(){return e},e}var N=Object(q.gql)(x());function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(){var e=L()(["query conceptRetrieveForGameInfo($conceptId: String!) {\n  conceptRetrieve(conceptId: $conceptId) {\n    id\n    localizedGenres {\n      value\n    }\n    publisherName\n    releaseDate {\n      type\n      value\n    }\n    descriptions {\n      type\n      subType\n      value\n    }\n    defaultProduct {\n      ...ProductInfo\n    }\n  }\n}\n\n","\n"]);return _=function(){return e},e}var z=Object(q.gql)(_(),N),Q=function(e){var t=e.conceptId;return T(T({},e.options),{},{query:z,variables:{conceptId:t}})};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(){var e=L()(["query productRetrieveForGameInfo($productId: String!) {\n  productRetrieve(productId: $productId) {\n    ...ProductInfo\n  }\n}\n","\n"]);return H=function(){return e},e}var $=Object(q.gql)(H(),N),A=function(e){var t=e.productId;return G(G({},e.options),{},{query:$,variables:{productId:t}})},F=function(e){var t=e.data,n=t.conceptRetrieve?Object(E.a)(t,"conceptRetrieve.defaultProduct")||t.conceptRetrieve:t.productRetrieve,r=n||{},a=r.localizedGenres,c=r.publisherName,o=r.releaseDate,s=r.spokenLanguages,l=r.screenLanguages,p=r.platforms,u=r.descriptions;return{genres:(a||[]).map((function(e){return e.value})).join(", "),publisherName:c,releaseDate:"string"==typeof o?o:Object(E.a)(o,"value"),releaseDateType:Object(E.a)(o,"type"),spokenLanguages:s||[],screenLanguages:l||[],platforms:(p||[]).map((function(e){return e.toUpperCase()})).join(", "),legal:(u||[]).filter((function(e){return"LEGAL"===e.type&&"PUBLISHER"!==e.subType})).map((function(e){return e.value.replace(/^\s*(\s*<br\s*\/?>\s*)+\s*/,"").replace(/\s*(\s*<br\s*\/?>\s*)+\s*$/,"")})).join("<br><br>"),isEmpty:!n}},U=function(e){return e.conceptId?Q(e):A(e)},B=function(e){var t=e.apolloClient,n=e.context,r=n.conceptId,a=n.productId;return{fetch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.options;return t.query(U({conceptId:r,productId:a,options:n})).then(F)},get:function(e){var n;try{n=t.readQuery(U({conceptId:r,productId:a}),!0)}catch(e){return console.log("ERROR",e),null}var c=F({data:n});return e?Object(E.a)(c,e):c}}},M=function(e){var t=e.app,n=e.context,r=void 0===n?{}:n;return{info:B({apolloClient:t.apolloClient,context:r})}};function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Object(r.default)("gameInfo",(function(e){var t=e.app,n=e.render,r=e.args,a=e.overrides;return{name:"gameInfo",core:M({app:t,context:r}),getInitialProps:function(){return this.core.info.fetch(r)},isEmpty:function(){return this.core.info.get("isEmpty")},render:function(e){var o=K(K(K({},r),a),e);return n(l.g.createElement(k,c()({sanitizeHtml:t.sanitizeHtml,format:t.i18n.format},o)))}}}))}},[[222,2,1,3,4,5,0]]]);