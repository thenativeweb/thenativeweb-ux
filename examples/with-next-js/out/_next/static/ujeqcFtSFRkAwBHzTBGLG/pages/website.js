(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"51rn":function(e,t,n){"use strict";n.r(t);var r=n("YFqc"),o=n.n(r),i=n("LRgh"),a=n("ERkP"),s=n.n(a).a.createElement;t.default=function(){return s(i.G,null,s("header",null,"Universally rendered Next.js website"),s(o.a,{href:"/"},s("a",null,"Link to application page")))}},YFqc:function(e,t,n){e.exports=n("cTJO")},aSEr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/website",function(){return n("51rn")}])},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),a=n("/+P4"),s=n("N9n2"),f=n("5Uuq"),c=n("KI45");t.__esModule=!0,t.default=void 0;var p,l=c(n("LX0d")),u=n("CxY0"),h=f(n("ERkP")),d=(c(n("17x9")),c(n("nOHt"))),v=n("P5f7"),w=n("g/15");function y(e){return e&&"object"===typeof e?(0,w.formatWithValidation)(e):e}var E=new l.default,_=window.IntersectionObserver;function m(){return p||(_?p=new _(function(e){e.forEach(function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),E.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var g=function(e){function t(e){var n;return r(this,t),(n=i(this,a(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}(function(e,t){return{href:y(e),as:t?y(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,s=i.as;if(function(e){var t=(0,u.parse)(e,!1,!0),n=(0,u.parse)((0,w.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var f=window.location.pathname;a=(0,u.resolve)(f,a),s=s?(0,u.resolve)(f,s):a,e.preventDefault();var c=n.props.scroll;null==c&&(c=s.indexOf("#")<0),d.default[n.props.replace?"replace":"push"](a,s,{shallow:n.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return s(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&_&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=m();return n?(n.observe(e),E.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}E.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,u.resolve)(e,t);d.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,v.rewriteUrlForNextExport)(a.href)),h.default.cloneElement(i,a)}}]),t}(h.Component);g.propTypes=void 0;var k=g;t.default=k}},[["aSEr",1,0]]]);