(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0iUn":function(n,t,e){"use strict";function o(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}e.d(t,"a",function(){return o})},"AT/M":function(n,t,e){"use strict";function o(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}e.d(t,"a",function(){return o})},BEAS:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components",function(){return e("leKb")}])},MI3g:function(n,t,e){"use strict";var o=e("XVgq"),i=e.n(o),l=e("Z7t5"),u=e.n(l);function r(n){return(r="function"===typeof u.a&&"symbol"===typeof i.a?function(n){return typeof n}:function(n){return n&&"function"===typeof u.a&&n.constructor===u.a&&n!==u.a.prototype?"symbol":typeof n})(n)}function a(n){return(a="function"===typeof u.a&&"symbol"===r(i.a)?function(n){return r(n)}:function(n){return n&&"function"===typeof u.a&&n.constructor===u.a&&n!==u.a.prototype?"symbol":r(n)})(n)}var c=e("AT/M");function s(n,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(c.a)(n):t}e.d(t,"a",function(){return s})},Tit0:function(n,t,e){"use strict";var o=e("SqZg"),i=e.n(o),l=e("TRZx"),u=e.n(l);function r(n,t){return(r=u.a||function(n,t){return n.__proto__=t,n})(n,t)}function a(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=i()(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&r(n,t)}e.d(t,"a",function(){return a})},a7VT:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var o=e("Bhuq"),i=e.n(o),l=e("TRZx"),u=e.n(l);function r(n){return(r=u.a?i.a:function(n){return n.__proto__||i()(n)})(n)}},leKb:function(n,t,e){"use strict";e.r(t);var o=e("0iUn"),i=e("sLSF"),l=e("MI3g"),u=e("a7VT"),r=e("AT/M"),a=e("Tit0"),c=e("vYYK"),s=e("ln6h"),d=e.n(s),f=e("eVuF"),h=e.n(f);function p(n,t,e,o,i,l,u){try{var r=n[l](u),a=r.value}catch(c){return void e(c)}r.done?t(a):h.a.resolve(a).then(o,i)}var m=e("LRgh"),b=e("ERkP"),v=e.n(b),g=v.a.createElement,w=function(){var n,t=(n=d.a.mark(function n(){var t;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.J.dialogs.confirm({title:"Blah",actions:{cancel:"Cancel",confirm:"Make it so!"}});case 2:t=n.sent,m.J.notifications.show({type:"success",text:"You triggered the ".concat(t," action.")});case 4:case"end":return n.stop()}},n)}),function(){var t=this,e=arguments;return new h.a(function(o,i){var l=n.apply(t,e);function u(n){p(l,o,i,u,r,"next",n)}function r(n){p(l,o,i,u,r,"throw",n)}u(void 0)})});return function(){return t.apply(this,arguments)}}(),S=function(n){console.log(n)},x=function(n){function t(n){var e;return Object(o.a)(this,t),e=Object(l.a)(this,Object(u.a)(t).call(this,n)),Object(c.a)(Object(r.a)(e),"handleFormSubmitted",function(n){n.preventDefault(),e.setState({formSubmitted:!0})}),e.state={buttonClicked:!1,checkBoxValue:!1,dropdownOptions:[{value:"foo",label:"Foo"},{value:"bar",label:"Bar"}],dropdownOptionSelected:"foo",formValue:"",formSubmitted:!1,textAreaValue:"",textBoxValue:"",toggleOptionSelected:"Option 1",isBoxVisible:!0,showModal:!1},e}return Object(a.a)(t,n),Object(i.a)(t,[{key:"render",value:function(){var n=this,t=this.state,e=t.buttonClicked,o=t.checkBoxValue,i=t.dropdownOptions,l=t.dropdownOptionSelected,u=t.formValue,r=t.formSubmitted,a=t.isBoxVisible,c=t.showModal,s=t.textAreaValue,d=t.textBoxValue,f=t.toggleOptionSelected;return g(m.a,null,g(m.u,{id:"sidebar"},g(m.v,null,g(m.t,{name:"App"})),g(m.x,{iconName:"account",id:"sidebar-item-account"},g(m.x,null,"Authenticated as (anonymous)"),g(m.x,{id:"sidebar-item-logout",onClick:function(){return S("clicked::clicked::logout")}},"Logout")),g(m.w,null,g(m.q,{href:"https://www.thenativeweb.io",isExternal:!0},g(m.b,{type:"minimal",color:"monochrome",isInteractive:!0})))),g(m.f,{isScrollable:!0,vertical:"stretch",horizontal:"stretch",style:{padding:"20px"}},g("div",null,g("section",null,g(m.n,null,"Test app")),g("section",null,g(m.n,{level:"2"},"Button"),g(m.d,{id:"button",onClick:function(){return n.setState({buttonClicked:!0})}},e?"Thanks!":"Click me"),g(m.d,{id:"button-with-icon",icon:"heart",onClick:function(){return S("button-with-icon::clicked")}},"Subtle Button"),g(m.d,{id:"button-icon-only",icon:"heart",onClick:function(){return S("button-subtle::clicked")}}),g(m.d,{id:"button-subtle",isSubtle:!0,onClick:function(){return S("button-subtle::clicked")}},"Subtle Button"),g(m.d,{id:"button-subtle",isSubtle:!0,icon:"heart",onClick:function(){return S("button-subtle-with-icon::clicked")}},"Subtle Button with icon")),g("section",null,g(m.n,{level:"2"},"BusyIndicator"),g(m.c,null)),g("section",null,g(m.n,{level:"2"},"ControlGroup"),g(m.g,null,"This is a control group")),g("section",null,g(m.n,{level:"2"},"classNames"),g("div",{id:"classNames",className:Object(m.G)({custom:!0})},"This div has a custom class name using className.")),g("section",null,g(m.n,{level:"2"},"Dialogs"),g(m.d,{id:"show-confirm",onClick:w},"Show confirm")),g("section",null,g(m.n,{level:"2"},"Dropdown"),g(m.i,{value:l,options:i,onChange:function(t){return n.setState({dropdownOptionSelected:t})}})),g("section",null,g(m.n,{level:"2"},"Form"),g(m.j,{onSubmit:this.handleFormSubmitted},g(m.g,null,g(m.h,{label:"TextBox with label"},g(m.A,{value:u,onChange:function(t){return n.setState({formValue:t.target.value})}}))),g(m.g,null,g(m.h,{label:"Checkbox with label"},g(m.e,{id:"form-checkbox",checked:o,onChange:function(){return n.setState({checkBoxValue:!o})}}))),g(m.g,null,g(m.d,null,"Cancel")," ",g(m.d,{id:"form-submit",isPrimary:!0},r?"Thanks!":"Submit")))),g("section",null,g(m.n,{level:"2"},"Grid"),g(m.l,{id:"grid"},g(m.m,{columnSpan:"6",id:"grid-item-span6-first"},"First column"),g(m.m,{columnSpan:"6",id:"grid-item-span6-second"},"Second column"),g(m.m,{columnSpan:{xs:12,md:6},id:"grid-item-span6-responsive-third"},"Third column"),g(m.m,{columnSpan:{xs:12,md:6},id:"grid-item-span6-responsive-fourth"},"Fourth column"))),g("section",null,g(m.n,{level:"2"},"Icon"),g(m.o,{name:"help",size:"sm"}),g(m.o,{name:"help",size:"lg"})),g("section",null,g(m.n,{level:"2"},"Link"),g(m.q,{href:"/interal"},"This is an internal link!"),g(m.q,{href:"http://www.google.de",isExternal:!0},"This is an external link!")),g("section",null,g(m.n,{level:"2"},"Message"),g(m.r,{type:"error"},"This is an error!"),g(m.r,{type:"info"},"This is an info.")),g("section",null,g(m.n,{level:"2"},"Modal"),g(m.d,{id:"show-modal",onClick:function(){return n.setState({showModal:!0})}},"Show modal"),g(m.s,{attach:"sidebar",size:"md",isVisible:c,onCancel:function(){return n.setState({showModal:!1})}},g(m.j,{onSubmit:function(){return n.setState({showModal:!1})}},g(m.n,{level:"2"},"Headline"),g("div",{id:"modal-content"},"This is the content of the modal."),g(m.k,null,g(m.d,{id:"cancel-modal",onClick:function(){return n.setState({showModal:!1})}},"Cancel"),g(m.d,{id:"submit-modal",isPrimary:!0},"Submit"))))),g("section",null,g(m.n,{level:"2"},"Notifications"),g(m.d,{id:"show-notification-error",onClick:function(){return m.J.notifications.show({type:"error",text:"This is a notification of type error!"})}},"Show notification (error)"),g(m.d,{id:"show-notification-success",onClick:function(){return m.J.notifications.show({type:"success",text:"This is a notification of type success!"})}},"Show notification (success)")),g("section",null,g(m.n,{level:"2"},"Text"),g("div",null,g(m.y,null,"This is medium text"),g(m.y,{size:"sm"},"This is small text"))),g("section",null,g(m.n,{level:"2"},"TextArea"),g(m.z,{value:s,placeholder:"Enter text",onChange:function(t){return n.setState({textAreaValue:t.target.value})}})),g("section",null,g(m.n,{level:"2"},"TextBox"),g(m.A,{value:d,placeholder:"Enter text",onChange:function(t){return n.setState({textBoxValue:t.target.value})}})),g("section",null,g(m.n,{level:"2"},"Toggle"),g("div",null,g(m.C,{id:"toggle",values:["Option 1","Option 2"],selectedValue:f,onChange:function(t){return n.setState({toggleOptionSelected:t})}}),"Selected option is: ",g("span",{id:"toggle-value"},f))),g("section",null,g(m.n,{level:"2"},"Transition"),g(m.j,null,g(m.g,null,g(m.h,{label:"Show box?"},g(m.e,{id:"transition-checkbox",onChange:function(){return n.setState(function(n){return{isBoxVisible:!n.isBoxVisible}})}})))),g("div",{style:{width:200,height:200}},g(m.D,{type:"FadeInRight",in:a},g(m.f,{style:{width:200,height:200,background:"orange",textAlign:"center"}},"This box will be animated in and out using `FadeInRight`.")))))))}}]),t}(v.a.Component);t.default=x},sLSF:function(n,t,e){"use strict";e.d(t,"a",function(){return u});var o=e("hfKm"),i=e.n(o);function l(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),i()(n,o.key,o)}}function u(n,t,e){return t&&l(n.prototype,t),e&&l(n,e),n}},vYYK:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var o=e("hfKm"),i=e.n(o);function l(n,t,e){return t in n?i()(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}}},[["BEAS",1,0]]]);