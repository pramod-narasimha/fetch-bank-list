(this["webpackJsonpinfratab-test"]=this["webpackJsonpinfratab-test"]||[]).push([[0],{168:function(e,t,a){e.exports=a(304)},173:function(e,t,a){},174:function(e,t,a){},270:function(e,t,a){},304:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),o=a.n(i),c=(a(173),a(32)),l=(a(89),a(23)),s=a(164),u=(a(174),a(305)),p=a(48),d=a(315),m=a(316),f=a(312),E=a(317),h=a(318),v=a(307),y=a(309),b=a(311),k=a(313),g=a(58),S=a(86),L=a(67),I=a.n(L),D="https://pramod-narasimha.github.io/apiResponse.json";function O(e){return{type:"SET_API_DATA",payload:e}}function C(e){return{type:"IS_LOADING",payload:e}}function T(e){return{type:"SET_CITY_LIST",payload:e}}function F(e){return{type:"SET_FAVOURITE_LIST",payload:e}}function _(e){return{type:"SET_FILTERED_LIST",payload:e}}function A(e){return{type:"SET_SEARCH_KEY",payload:e}}var w=function(e){return function(t){t(C(!0));var a="undefined"===typeof localStorage.getItem("bankListData")?null:JSON.parse(localStorage.getItem("bankListData")),n=[];a?(t(T(Object(S.a)(new Set(a.map((function(e){return e.city})).filter((function(e){return!!e})))))),t(F(a.map((function(e){return e.isFavourite?e.key:""})).filter((function(e){return"number"===typeof e})))),t(O(a)),t(C(!1))):I.a.get(D,e).then((function(e){n=Object(S.a)(e.data),console.log("response copy",n),n.forEach((function(e,t){e.key=t,e.isFavourite=!1})),t(T(Object(S.a)(new Set(n.map((function(e){return e.city})).filter((function(e){return!!e})))))),localStorage.setItem("bankListData",JSON.stringify(n)),t(O(n)),t(C(!1))}))}},j=function(e,t,a){return function(n){t[e].isFavourite=a,n(F(t.map((function(e){return e.isFavourite?e.key:""})).filter((function(e){return"number"===typeof e})))),n(O(t)),localStorage.setItem("bankListData",JSON.stringify(t))}},x=Object(g.b)((function(e){return{isLoading:e.apiData.isLoading,favList:e.apiData.favList,bankList:e.apiData.bankList}}),(function(e){return{fetchApiData:function(){return e(w())},setFavourite:function(t,a,n){return e(j(t,a,n))},clearSearch:function(){return e((function(e){e(_([])),e(A(""))}))}}}))((function(e){var t,a,n,i,o,c,s,u,p,d,m,E,h,g=Object(l.f)(),S=Object(l.h)("/banks/:name"),L=Object(l.h)("/favourite/:name"),I=(null===S||void 0===S?void 0:S.params.name)||(null===L||void 0===L?void 0:L.params.name);return r.a.useEffect((function(){e.fetchApiData(),e.clearSearch()}),[]),r.a.createElement(v.a,{title:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{paddingRight:"10px",display:"inline"}},r.a.createElement(b.a,{onClick:function(){return g.goBack()}})),r.a.createElement("span",null,"Bank Details")),bordered:!1,style:{width:"100%"}},r.a.createElement(y.a,null,r.a.createElement(y.a.Item,{label:r.a.createElement(r.a.Fragment,null,(null===(t=e.bankList)||void 0===t?void 0:t[I])&&r.a.createElement("div",{style:{paddingRight:"10px",display:"inline"}},(null===(a=e.bankList)||void 0===a?void 0:null===(n=a[I])||void 0===n?void 0:n.isFavourite)?r.a.createElement(f.a,{onClick:function(){return e.setFavourite(I,e.bankList,!1)},style:{color:"#FFB75D"}}):r.a.createElement(k.a,{onClick:function(){return e.setFavourite(I,e.bankList,!0)},style:{color:"#FFB75D"}})),r.a.createElement("span",null,"Bank Name")),span:3},null===(i=e.bankList)||void 0===i?void 0:null===(o=i[I])||void 0===o?void 0:o.bank_name),r.a.createElement(y.a.Item,{label:"IFSC",span:3},null===(c=e.bankList)||void 0===c?void 0:null===(s=c[I])||void 0===s?void 0:s.ifsc),r.a.createElement(y.a.Item,{label:"Branch",span:3},null===(u=e.bankList)||void 0===u?void 0:null===(p=u[I])||void 0===p?void 0:p.branch),r.a.createElement(y.a.Item,{label:"Bank ID",span:3},null===(d=e.bankList)||void 0===d?void 0:null===(m=d[I])||void 0===m?void 0:m.bank_id),r.a.createElement(y.a.Item,{label:"Address",span:3},null===(E=e.bankList)||void 0===E?void 0:null===(h=E[I])||void 0===h?void 0:h.address)))})),B=a(60),K=a(310),N=a(49),R=function(e){return r.a.createElement(B.a,{justify:"center"},r.a.createElement(K.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:r.a.createElement(c.b,{to:"/"},r.a.createElement(N.a,{type:"primary"},"Go to home"))}),",")},U=a(145),H=a(146),M=a(165),J=a(147),P=a(166),V=a(70),G=a(308),Y=(a(270),a(306)),W=function(e){var t=e.loading,a=e.rowSelection,n=e.tableData,i=Object(l.f)(),o=Object(l.g)(),c=[{title:"Bank Name",dataIndex:"bank_name",render:function(e,t){return r.a.createElement("span",{onClick:function(){i.push("".concat(o.pathname,"/").concat(t.key))}},e)}},{title:"IFSC",dataIndex:"ifsc",render:function(e,t){return r.a.createElement("span",{onClick:function(){i.push("".concat(o.pathname,"/").concat(t.key))}},e)}},{title:"Branch",dataIndex:"branch",render:function(e,t){return r.a.createElement("span",{onClick:function(){i.push("".concat(o.pathname,"/").concat(t.key))}},e)}},{title:"Bank ID",dataIndex:"bank_id",render:function(e,t){return r.a.createElement("span",{onClick:function(){i.push("".concat(o.pathname,"/").concat(t.key))}},e)}},{title:"Address",dataIndex:"address",render:function(e,t){return r.a.createElement("span",{onClick:function(){i.push("".concat(o.pathname,"/").concat(t.key))}},e)}}];return r.a.createElement(Y.a,{loading:t,rowSelection:a,columns:c,dataSource:n,pagination:{showSizeChanger:!0}})},z=V.a.Option,$=function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(M.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).state={timerId:0},a.onSelectChange=function(e){e.map((function(e){return"number"===typeof e&&a.props.setFavourite(e,a.props.bankList,!0),null})),a.props.favList.length&&a.props.favList.map((function(t){return e.includes(t)||a.props.setFavourite(t,a.props.bankList,!1),null})),a.setState({selectedRowKeys:e})},a.onFieldSearch=function(e){clearTimeout(a.state.timerId),a.setState({timerId:setTimeout((function(){a.props.setSearchKey(e,a.props.bankList)}),1e3)})},a.displayData=function(){var e,t;return a.props.isOnlyFavourites?a.props.searchKey.length>0?null===(e=a.props.filteredData)||void 0===e?void 0:e.filter((function(e){return e.isFavourite})):null===(t=a.props.bankList)||void 0===t?void 0:t.filter((function(e){return e.isFavourite})):a.props.searchKey.length>0?a.props.filteredData:a.props.bankList},a}return Object(P.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchApiData()}},{key:"render",value:function(){var e=this,t={selectedRowKeys:this.props.favList,hideDefaultSelections:"true",onChange:this.onSelectChange};return r.a.createElement("div",null,r.a.createElement("div",{style:{marginBottom:16}},r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(V.a,{bordered:!1,showSearch:!0,style:{width:200},placeholder:"Select city",optionFilterProp:"children",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0}},this.props.cityList.map((function(e){return r.a.createElement(z,{key:e,value:e},e)}))),r.a.createElement("div",{style:{width:"25%"}},r.a.createElement(G.a.Search,{onChange:function(t){return e.onFieldSearch(t.target.value)},placeholder:"Search for key words you remember",size:"small"})))),r.a.createElement(W,{loading:this.props.loading,tableData:this.displayData(),rowSelection:t}))}}]),t}(r.a.Component),q=Object(g.b)((function(e){return{isLoading:e.apiData.isLoading,favList:e.apiData.favList,bankList:e.apiData.bankList,cityList:e.apiData.cityList,searchKey:e.apiData.searchKey,filteredData:e.apiData.filteredData}}),(function(e){return{fetchApiData:function(){return e(w())},setFavourite:function(t,a,n){return e(j(t,a,n))},setSearchKey:function(t,a){return e(function e(t,a){return function(n){console.log("search key => ",t);var r=a.filter((function(e){return!!(e.bank_name.toUpperCase().includes(t.toUpperCase())||e.ifsc.toUpperCase().toUpperCase().includes(t.toUpperCase())||e.branch.toUpperCase().includes(t.toUpperCase())||e.bank_id.toString().toUpperCase().includes(t.toUpperCase())||e.address.toUpperCase().includes(t.toUpperCase()))}));n(A(e)),n(_(r))}}(t,a))}}}))($),Q=a(314),X=function(e){return r.a.createElement(B.a,{justify:"center"},r.a.createElement(K.a,{icon:r.a.createElement(Q.a,null),title:"Great, we have landed to the home page!",extra:r.a.createElement(c.b,{to:"/banks"},r.a.createElement(N.a,{type:"primary"},"Lets go to Bank-Lists"))}),",")},Z=u.a.Header,ee=u.a.Sider,te=u.a.Content,ae=function(e){var t=e.path,a=Object(l.f)(),n=r.a.useState(!1),i=Object(s.a)(n,2),o=i[0],c=i[1];return r.a.createElement(u.a,null,r.a.createElement(ee,{trigger:null,collapsible:!0,collapsed:o},r.a.createElement("div",{className:"logo"}),r.a.createElement(p.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["HOME"],selectedKeys:[t]},r.a.createElement(p.a.Item,{key:"HOME",onClick:function(){return a.push("/")}},r.a.createElement(d.a,null),r.a.createElement("span",null,"HOME")),r.a.createElement(p.a.Item,{key:"BANKS",onClick:function(){return a.push("/banks")}},r.a.createElement(m.a,null),r.a.createElement("span",null,"BANKS")),r.a.createElement(p.a.Item,{key:"FAVOURITE",onClick:function(){return a.push("/favourite")}},r.a.createElement(f.a,null),r.a.createElement("span",null,"FAVOURITE")))),r.a.createElement(u.a,{className:"site-layout"},r.a.createElement(Z,{className:"site-layout-background",style:{padding:0}},r.a.createElement("div",{className:"header-wrapper"},r.a.createElement(o?E.a:h.a,{className:"trigger",onClick:function(){c(!o)}}),r.a.createElement("div",{className:"header-background"}))),r.a.createElement(te,{className:"site-layout-background",style:{margin:"24px 16px",padding:24}},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:["/","/home"]},r.a.createElement(X,null)),r.a.createElement(l.a,{exact:!0,path:["/favourite/:bankID","/banks/:bankID"]},r.a.createElement(x,null)),r.a.createElement(l.a,{exact:!0,path:"/banks"},r.a.createElement(q,null)),r.a.createElement(l.a,{exact:!0,path:"/favourite"},r.a.createElement(q,{isOnlyFavourites:!0})),r.a.createElement(l.a,null,r.a.createElement(R,null))))))},ne=function(){return r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:["/","/home"]},r.a.createElement(ae,{path:"HOME"})),r.a.createElement(l.a,{exact:!0,path:"/banks"},r.a.createElement(ae,{path:"BANKS"})),r.a.createElement(l.a,{exact:!0,path:"/favourite"},r.a.createElement(ae,{path:"FAVOURITE"})),r.a.createElement(l.a,null,r.a.createElement(ae,null)))},re=a(39),ie=a(161),oe=a(162),ce={isLoading:!0,bankList:[],favList:[],postsList:[],postDataList:[],searchKey:"",filteredData:[],cityList:[]},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload,r=function(t){return Object.assign({},e,t)},i=function(){return Object.assign({},e,ce)};switch(a){case"IS_LOADING":return r({isLoading:n});case"SET_API_DATA":return r({bankList:n});case"SET_FAVOURITE_LIST":return r({favList:n});case"SET_POST_API_DATA":return r({postDataList:n});case"SET_CITY_LIST":return r({cityList:n});case"SET_FILTERED_LIST":return r({filteredData:n});case"SET_SEARCH_KEY":return r({searchKey:n});case"RESET_DATA":return i();default:return e}},se=Object(re.combineReducers)({apiData:le});I.a.defaults.withCredentials=!0;var ue=Object(re.applyMiddleware)(oe.a.withExtraArgument(I.a)),pe=Object(re.createStore)(se,Object(ie.composeWithDevTools)(ue));var de=function(){return r.a.createElement(g.a,{store:pe},r.a.createElement(c.a,null,r.a.createElement(ne,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[168,1,2]]]);
//# sourceMappingURL=main.4e18eede.chunk.js.map