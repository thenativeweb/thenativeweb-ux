(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"/h46":function(e,n,t){t("cHUd")("Map")},"23aj":function(e,n,t){"use strict";t.r(n);var r=t("YFqc"),o=t.n(r),i=t("LRgh"),a=t("ERkP"),s=t.n(a).a.createElement;n.default=function(){return s(i.a,null,s(i.u,null,s(i.v,null,s(i.t,{name:"App"})),s(i.x,{iconName:"account"},s(i.x,null,"You are logged in as Sophie"),s(i.x,{onClick:function(){return i.K.notifications.show({type:"success",text:"You clicked!"})}},"Logout")),s(i.x,{iconName:"help",isActive:!0}),s(o.a,{href:"/second"},s(i.x,{iconName:"help"}))),s(i.f,{id:"index-page",isScrollable:!0,vertical:"stretch",horizontal:"stretch",style:{padding:"20px"}},s("div",null,s(i.n,{id:"headline"},"Universally rendered Next.js app"),s(o.a,{href:"/second"},s("a",null,"Link to second page")),s(o.a,{href:"/website"},s("a",null,"Link to website")))))}},LX0d:function(e,n,t){e.exports=t("UDep")},UDep:function(e,n,t){t("wgeU"),t("FlQf"),t("bBy9"),t("g33z"),t("XLbu"),t("/h46"),t("dVTT"),e.exports=t("WEpk").Map},XLbu:function(e,n,t){var r=t("Y7ZC");r(r.P+r.R,"Map",{toJSON:t("8iia")("Map")})},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("/HRN"),o=t("WaGi"),i=t("ZDA2"),a=t("/+P4"),s=t("N9n2"),c=t("5Uuq"),u=t("KI45");n.__esModule=!0,n.default=void 0;var f,p=u(t("LX0d")),l=t("CxY0"),h=c(t("ERkP")),d=(u(t("17x9")),u(t("nOHt"))),v=t("P5f7"),g=t("g/15");function w(e){return e&&"object"===typeof e?(0,g.formatWithValidation)(e):e}var y=new p.default,m=window.IntersectionObserver;function k(){return f||(m?f=new m(function(e){e.forEach(function(e){if(y.has(e.target)){var n=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),n())}})},{rootMargin:"200px"}):void 0)}var x=function(e){function n(e){var t;return r(this,n),(t=i(this,a(n).call(this,e))).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var n=null,t=null,r=null;return function(o,i){if(r&&o===n&&i===t)return r;var a=e(o,i);return n=o,t=i,r=a,a}}(function(e,n){return{href:w(e),as:n?w(n):n}}),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),a=i.href,s=i.as;if(function(e){var n=(0,l.parse)(e,!1,!0),t=(0,l.parse)((0,g.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(a)){var c=window.location.pathname;a=(0,l.resolve)(c,a),s=s?(0,l.resolve)(c,s):a,e.preventDefault();var u=t.props.scroll;null==u&&(u=s.indexOf("#")<0),d.default[t.props.replace?"replace":"push"](a,s,{shallow:t.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})}}},t.p=!1!==e.prefetch,t}return s(n,e),o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var n=this;this.p&&m&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,n){var t=k();return t?(t.observe(e),y.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}y.delete(e)}):function(){}}(e,function(){n.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href,t=(0,l.resolve)(e,n);d.default.prefetch(t)}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,o=t.as;"string"===typeof n&&(n=h.default.createElement("a",null,n));var i=h.Children.only(n),a={ref:function(n){e.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),e.prefetch()},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,v.rewriteUrlForNextExport)(a.href)),h.default.cloneElement(i,a)}}]),n}(h.Component);x.propTypes=void 0;var E=x;n.default=E},dVTT:function(e,n,t){t("aPfg")("Map")},g33z:function(e,n,t){"use strict";var r=t("Wu5q"),o=t("n3ko");e.exports=t("raTm")("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var n=r.getEntry(o(this,"Map"),e);return n&&n.v},set:function(e,n){return r.def(o(this,"Map"),0===e?0:e,n)}},r,!0)}},[["/EDR",1,0]]]);