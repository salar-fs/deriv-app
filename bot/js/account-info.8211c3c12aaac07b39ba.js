(window.webpackJsonp=window.webpackJsonp||[]).push([["account-info"],{717:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),o=n(2),r=n.n(o),i=n(0),s=n.n(i),l=n(111),u=n(7),p=n(183),_=n.n(p),d=(n(261),n(130)),f=n.n(d),m=(n(182),n(15)),g=n.n(m),h=n(3),y=n(66),b=n(35),w=n.n(b),v=(n(87),function(e){var t=e.children,n=e.onClick;return s.a.createElement("div",{className:"acc-switcher__new-account"},s.a.createElement(w.a,{id:"upgrade-account",onClick:n,className:"acc-switcher__new-account-link"},t))});v.propTypes={onClick:r.a.func,text:r.a.string};var E=v,N=n(8),O=n(16),j=n(11);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t,n,a,c,o,r){try{var i=e[o](r),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(a,c)}function S(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function x(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=x(this,(e=A(t)).call.apply(e,[this].concat(c)))).setWrapperRef=function(e){n.wrapper_ref=e},n.handleClickOutside=function(e){var t=!e.target.classList.contains("acc-info");n.wrapper_ref&&!n.wrapper_ref.contains(e.target)&&n.props.is_visible&&t&&n.props.toggle()},n.handleLogout=function(){n.props.toggle(),n.props.is_positions_drawer_on&&n.props.togglePositionsDrawer(),Object(O.c)().then(n.props.cleanUp)},n}var n,a,o,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside),this.props.hideDialog()}},{key:"doSwitch",value:(r=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.toggle(),this.props.account_loginid!==t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.props.switchAccount(t);case 5:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(n,a){var c=r.apply(e,t);function o(e){C(c,n,a,o,i,"next",e)}function i(e){C(c,n,a,o,i,"throw",e)}o(void 0)}))},function(e){return i.apply(this,arguments)})},{key:"render",value:function(){var e=this;if(!this.props.is_logged_in)return!1;var t=!!(this.props.is_upgrade_enabled&&this.props.is_virtual&&this.props.can_upgrade_to);return this.props.account_list.sort((function(t,n){var a=e.props.accounts[t.loginid].currency,c=e.props.accounts[n.loginid].currency,o=g.a.isCryptocurrency(a),r=g.a.isCryptocurrency(c),i=!o,s=!r;return t.is_virtual||n.is_virtual?t.is_virtual?1:-1:o&&r||i&&s?a<c?-1:1:i&&r?-1:1})),s.a.createElement("div",{className:"acc-switcher__list",ref:this.setWrapperRef,style:{display:this.props.display}},s.a.createElement("div",{className:t||this.can_manage_currency?void 0:"acc-switcher__list-group"},s.a.createElement("span",{className:"acc-switcher__list-title"},s.a.createElement(u.a,{i18n_default_text:"Accounts"})),s.a.createElement("div",{className:"acc-switcher__accounts"},this.props.account_list.map((function(t){return s.a.createElement(f.a,{alignment:"left",message:t.loginid,key:t.loginid},s.a.createElement("div",{id:"dt_".concat(t.loginid),className:c()("acc-switcher__account",{"acc-switcher__account--selected":t.loginid===e.props.account_loginid}),onClick:e.doSwitch.bind(e,t.loginid)},s.a.createElement("span",{className:"acc-switcher__id"},s.a.createElement(N.a,{icon:"IconAccountsCurrency",className:"acc-switcher__id-icon acc-switcher__id-icon--".concat(t.icon),type:t.icon}),s.a.createElement("span",null,t.is_virtual?s.a.createElement(u.a,{i18n_default_text:"Demo"}):"REAL"===t.icon.toUpperCase()?s.a.createElement(u.a,{i18n_default_text:"Real"}):t.icon.toUpperCase()),"balance"in e.props.accounts[t.loginid]&&s.a.createElement("span",{className:c()("acc-switcher__balance",{"acc-swithcer__balance--virtual":t.is_virtual})},e.props.accounts[t.loginid].currency&&s.a.createElement(_.a,{currency:e.props.accounts[t.loginid].currency,amount:g.a.formatMoney(e.props.accounts[t.loginid].currency,e.props.accounts[t.loginid].balance,!0),should_format:!1}),!e.props.accounts[t.loginid].currency&&s.a.createElement("span",{className:"no-currency"},s.a.createElement(u.a,{i18n_default_text:"No currency assigned"}))))))}))),this.can_manage_currency&&!t&&s.a.createElement(E,{onClick:this.props.openRealAccountSignup},s.a.createElement(N.a,{icon:"IconAdd"}),s.a.createElement("div",{className:"btn__text"},s.a.createElement(u.a,{i18n_default_text:"Add/manage account"})))),t&&s.a.createElement(E,{onClick:function(){"svg"===e.props.can_upgrade_to?e.props.openRealAccountSignup():window.open(Object(y.urlFor)("new_account/maltainvestws",void 0,void 0,!0))}},s.a.createElement(N.a,{icon:"IconAdd"}),s.a.createElement("div",{className:"btn__text"},s.a.createElement(u.a,{i18n_default_text:"Add a real account"}))),s.a.createElement("div",{className:"acc-switcher__separator"}),s.a.createElement("div",{className:"acc-switcher__total"},s.a.createElement(u.a,{i18n_default_text:"Total assets"}),s.a.createElement("span",{className:"acc-switcher__balance"},s.a.createElement(_.a,{currency:this.props.obj_total_balance.currency,amount:g.a.formatMoney(this.props.obj_total_balance.currency,this.props.obj_total_balance.amount,!0),should_format:!1}))),s.a.createElement("div",{className:"acc-switcher__separator"}),s.a.createElement("div",{id:"dt_logout_button",className:"acc-switcher__logout",onClick:this.handleLogout},s.a.createElement("span",{className:"acc-switcher__logout-text"},Object(h.localize)("Log out")),s.a.createElement(N.a,{icon:"IconLogout",className:"acc-switcher__logout-icon drawer__icon"})))}},{key:"can_manage_currency",get:function(){return this.props.can_change_currency||!this.props.is_virtual&&!this.props.has_fiat&&this.props.can_upgrade_to}}])&&S(n.prototype,a),o&&S(n,o),t}(s.a.Component);D.propTypes={account_list:r.a.array,account_loginid:r.a.string,accounts:r.a.object,cleanUp:r.a.func,display:r.a.string,has_fiat:r.a.bool,hideDialog:r.a.func,is_logged_in:r.a.bool,is_positions_drawer_on:r.a.bool,is_upgrade_enabled:r.a.bool,is_virtual:r.a.bool,is_visible:r.a.bool,obj_total_balance:r.a.object,toggle:r.a.func,togglePositionsDrawer:r.a.func};var R=Object(j.b)((function(e){var t=e.client,n=e.ui;return{accounts:t.accounts,has_fiat:t.has_fiat,can_change_currency:t.can_change_currency,account_list:t.account_list,can_upgrade:t.can_upgrade,can_upgrade_to:t.can_upgrade_to,account_loginid:t.loginid,is_logged_in:t.is_logged_in,is_virtual:t.is_virtual,obj_total_balance:t.obj_total_balance,switchAccount:t.switchAccount,cleanUp:t.cleanUp,is_positions_drawer_on:n.is_positions_drawer_on,openRealAccountSignup:n.openRealAccountSignup,togglePositionsDrawer:n.togglePositionsDrawer}}))(D);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function U(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var W=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=U(this,(e=I(t)).call.apply(e,[this].concat(c)))).state={display:"none"},n.showDialog=function(){n.setState({display:"block"})},n.hideDialog=function(){n.setState({display:"none"})},n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e,t,n,a=this.props,o=a.balance,r=a.currency,i=a.is_dialog_on,p=a.is_upgrade_enabled,_=a.is_virtual,d=a.toggleDialog;return s.a.createElement("div",{className:"acc-info__wrapper"},s.a.createElement("div",{className:"acc-info__separator"}),s.a.createElement("div",{className:c()("acc-info",{"acc-info--show":i,"acc-info--is-virtual":_}),onClick:d},s.a.createElement("span",{className:"acc-info__id"},s.a.createElement(N.a,{icon:"IconAccountsCurrency",className:"acc-info__id-icon acc-info__id-icon--".concat(_?"virtual":r),type:_?"virtual":(r||"real").toLowerCase()})),void 0!==o&&s.a.createElement("p",{className:"acc-info__balance"},s.a.createElement("span",{className:c()("symbols",(e={},t="symbols--".concat((r||"").toLowerCase()),n=r,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e))}),!r&&s.a.createElement(u.a,{i18n_default_text:"No currency assigned"}),r&&o),s.a.createElement(N.a,{icon:"IconArrowBold",className:"acc-info__select-arrow"})),s.a.createElement(l.CSSTransition,{in:i,timeout:200,classNames:{enter:"acc-switcher__wrapper--enter",enterDone:"acc-switcher__wrapper--enter-done",exit:"acc-switcher__wrapper--exit"},onEntered:this.showDialog,unmountOnExit:!0},s.a.createElement("div",{className:"acc-switcher__wrapper"},s.a.createElement(R,{is_visible:i,hideDialog:this.hideDialog,display:this.state.display,toggle:d,is_upgrade_enabled:p}))))}}])&&T(n.prototype,a),o&&T(n,o),t}(s.a.Component);W.propTypes={account_type:r.a.string,balance:r.a.string,currency:r.a.string,is_dialog_on:r.a.bool,is_upgrade_enabled:r.a.bool,is_virtual:r.a.bool,loginid:r.a.string,toggleDialog:r.a.func};t.default=W}}]);
//# sourceMappingURL=account-info.8211c3c12aaac07b39ba.js.map