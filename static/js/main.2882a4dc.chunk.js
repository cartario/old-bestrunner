(this.webpackJsonpbestrunner=this.webpackJsonpbestrunner||[]).push([[0],{171:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(61),o=t.n(i),l=(t(72),t(13)),c=t(3),u=t(1),d=t(2);function m(){var n=Object(d.a)(["\n  width: 90%;\n  padding: 10px;\n  font-weight: bold;\n  border: 1px solid white;\n\n  &:hover{\n    color: ",";\n  }\n\n  &:active{\n    color: white;\n  }\n    \n  @media (max-width: ","){\n    width: 100%;\n    padding: 20px;\n  }\n"]);return m=function(){return n},n}function s(){var n=Object(d.a)(["\n  width: 10%;\n  padding: 10px;\n  border: 1px solid white;  \n\n  &:hover{\n    color: ",";\n  }\n\n  &:active{\n    color: white;\n  }\n  \n  @media (max-width: ",") {\n    display: none;    \n"]);return s=function(){return n},n}function h(){var n=Object(d.a)(["\n  display: flex;  \n  color: white; \n  cursor: pointer; \n  background-color: ",";  \n\n  \n"]);return h=function(){return n},n}function p(){var n=Object(d.a)(["  \n  text-align: center;\n  font-family: ",";  \n"]);return p=function(){return n},n}var b=u.b.header(p(),(function(n){return n.theme.font})),f=u.b.nav(h(),(function(n){return n.theme.primary})),g=u.b.div(s(),(function(n){return n.theme.secondary}),(function(n){return n.theme.mobile})),E=u.b.div(m(),(function(n){return n.theme.secondary}),(function(n){return n.theme.mobile})),v=function(){return r.a.createElement(b,null,r.a.createElement(f,null,r.a.createElement(g,null,"[Logo]"),r.a.createElement(E,null,"[BEST RUNNER]")))},w=t(41);function x(){var n=Object(d.a)([" \n  width: 15%;\n"]);return x=function(){return n},n}function y(){var n=Object(d.a)(["\n  width: 30%;\n"]);return y=function(){return n},n}function k(){var n=Object(d.a)(["\n  width: 40%;\n  height: 50px;\n  display: inline-block;  \n  margin: 0;  \n  \n  border-radius: 5px;\n  color: black;  \n"]);return k=function(){return n},n}function j(){var n=Object(d.a)(["\n  display:block;  \n  width: 15%;\n  height: 17px;\n  \n  border-radius: 5px; \n  color: black;   \n"]);return j=function(){return n},n}function O(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;  \n  max-height: 50px;\n  margin: 5px 0; \n  padding: 10px;\n  text-align: left;  \n  \n  color: ",";\n  background-color: white;\n  \n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); \n\n  &:hover{\n    background-color: lightgrey;    \n  }\n"]);return O=function(){return n},n}var S=u.b.li(O(),(function(n){return n.theme.secondary})),D=u.b.span(j()),C=u.b.p(k()),H=Object(u.b)(C)(y()),_=u.b.div(x()),B=function(n){var e=n.mock,t=n.togglePopupHandler;return r.a.createElement(S,null,r.a.createElement(C,null,e.type),r.a.createElement(D,null,e.date.getFullYear()),r.a.createElement(H,null,e.distance,"km"),r.a.createElement(_,{onClick:function(){return t(e.id)}},r.a.createElement("img",{width:"15",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Info_Simple_bw.svg/768px-Info_Simple_bw.svg.png"})))},F=t(25),P=t(26),z=t(28),I=t(27);function N(){var n=Object(d.a)(["\n  position: absolute;\n  left: 25%;\n  right: 25%;\n  top: 25%;\n  bottom: 25%;\n  margin: auto;\n  background: white;\n"]);return N=function(){return n},n}function W(){var n=Object(d.a)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: rgba(0,0,0, 0.5);\n"]);return W=function(){return n},n}var R=u.b.div(W()),T=u.b.div(N()),q=function(n){Object(z.a)(t,n);var e=Object(I.a)(t);function t(n){var a;return Object(F.a)(this,t),(a=e.call(this,n)).state={isDeleting:!1,isShowing:!1},a}return Object(P.a)(t,[{key:"_toggleEditDeleting",value:function(){this.setState({isDeleting:!this.state.isDeleting})}},{key:"render",value:function(){var n=this,e=this.props,t=e.sessions,a=e.currentId,i=e.togglePopupHandler,o=t.find((function(n){return n.id===a}));return r.a.createElement(R,null,r.a.createElement(T,null,r.a.createElement("form",{onSubmit:i},r.a.createElement("h2",null,o.type),r.a.createElement("a",{href:"#",onClick:i},"Go-back"),r.a.createElement("p",null,o.date.getFullYear()),r.a.createElement("p",null,o.distance),r.a.createElement("textarea",{placeholder:"comment"}),!this.state.isShowing&&r.a.createElement("button",{onClick:function(){return n.setState({isShowing:!0,isDeleting:!0})}},"delete"),!this.state.isShowing&&r.a.createElement("button",{onClick:function(){return n.setState({isShowing:!0,isDeleting:!1})}},"Edit"),this.state.isShowing&&r.a.createElement("button",{onClick:function(){return n.setState({isShowing:!1,isDeleting:!1})}},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"),this.state.isShowing&&r.a.createElement("button",{type:"submit"},this.state.isDeleting?"\u041f\u0440\u0430\u0432\u0434\u0430 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?":"\u0412\u043d\u0435\u0441\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"))))}}]),t}(r.a.Component);function J(){var n=Object(d.a)(["\n  margin:0;\n  padding:0;\n  list-style: none;\n"]);return J=function(){return n},n}var Y=[{id:1,type:"\u0412\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434",date:new Date,distance:10},{id:2,type:"\u0411\u0435\u0433",date:new Date,distance:15},{id:3,type:"\u041b\u044b\u0436\u0438",date:new Date,distance:5},{id:4,type:"\u041f\u043b\u0430\u0432\u0430\u043d\u0438\u0435",date:new Date,distance:7},{id:5,type:"\u0425\u043e\u0434\u044c\u0431\u0430",date:new Date,distance:11}],A=u.b.ul(J()),G=function(n){var e=Object(a.useState)(!1),t=Object(w.a)(e,2),i=t[0],o=t[1],l=Object(a.useState)(0),c=Object(w.a)(l,2),u=c[0],d=c[1],m=function(n){o(!i),d(n)};return r.a.createElement(A,null,Y.map((function(n){return r.a.createElement(B,{key:n.id,mock:n,togglePopupHandler:m})})),i&&r.a.createElement(q,{currentId:u,sessions:Y,togglePopupHandler:function(){return m(u)}}))};function L(){var n=Object(d.a)(["\n  width: ","%;  \n  color: grey;\n  cursor: pointer;\n  text-align: left;  \n\n  &:hover{\n    color: ",";\n  }\n\n  &:active{\n    color: ","\n  }\n"]);return L=function(){return n},n}function M(){var n=Object(d.a)(["\n  display: flex;  \n  width: 100%;\n  margin: 0px;  \n  padding: 10px;\n  box-sizing: border-box;\n  font-size: 18px;\n  font-weight: bold;\n  list-style: none;\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); \n"]);return M=function(){return n},n}var U=u.b.ul(M()),$=u.b.li(L(),(function(n){return n.width}),(function(n){return n.theme.primary}),(function(n){return n.theme.secondary})),K=function(n){return r.a.createElement(U,null,r.a.createElement($,{width:40},"Type"),r.a.createElement($,{width:15},"Date"),r.a.createElement($,{width:15},"Distance"))},Q=t(65),V=function(n){return r.a.createElement("section",{style:{margin:0,padding:"20px",minHeight:"280px"}},r.a.createElement(Q.Bar,{data:{labels:["timeWork","timeFlight","timeBlock","timeNight","timeBiologicalNight"],datasets:[{barPercentage:.5,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:1,data:[1,2,3,4,5]}]},options:{title:{display:!0,text:"\u0421\u0432\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0435\u0440\u0438\u043e\u0434",fontSize:20},legend:{display:!1}}}))};function X(){var n=Object(d.a)(["\n  position: fixed;  \n  z-index: 1;\n  bottom: 20px;\n  right: 30px;\n  display: block;\n  width: 100px;\n  height: 100px;\n  font-size: 50px;\n  background-color: ",";\n  outline: none;\n  border: none;\n  color: white;\n  border-radius: 50%;  \n  transition: 0.5s transform ease;\n\n  &:hover{\n    transform: scale(1.5);\n  }\n\n  &:active{\n    background-color: grey;\n  }\n"]);return X=function(){return n},n}function Z(){var n=Object(d.a)(["\n  text-align: center;\n  font-family: ","; \n  background-color: white; \n"]);return Z=function(){return n},n}var nn=u.b.main(Z(),(function(n){return n.theme.font})),en=u.b.button(X(),(function(n){return n.theme.pink})),tn=function(){return r.a.createElement(nn,null,r.a.createElement("h1",{style:{display:"none"}},"BestRunner"),r.a.createElement(K,null),r.a.createElement(G,null),r.a.createElement(V,null),r.a.createElement(l.b,{to:"/new"},r.a.createElement(en,{onClick:function(){return console.log("plus")}},"+")))};function an(){var n=Object(d.a)(["\n  padding: 10px;\n  cursor: pointer;\n\n  &:hover{\n    color: ",";\n  }\n\n  &:active{\n    color: white;\n  }\n"]);return an=function(){return n},n}function rn(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-around;  \n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  @media (max-width:","){\n    flex-direction: column;\n  }\n"]);return rn=function(){return n},n}function on(){var n=Object(d.a)([" \n  text-align: center;\n  font-family: ",";\n  background-color: ",";\n  color: white;\n"]);return on=function(){return n},n}var ln=u.b.footer(on(),(function(n){return n.theme.font}),(function(n){return n.theme.primary})),cn=u.b.ul(rn(),(function(n){return n.theme.mobile})),un=u.b.li(an(),(function(n){return n.theme.secondary})),dn=function(){return r.a.createElement(ln,null,r.a.createElement(cn,null,r.a.createElement(un,null,"[Copyright]"),r.a.createElement(un,null,"[\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438]"),r.a.createElement(un,null,"[\u0410\u0434\u0440\u0435\u0441]")))},mn=t(66),sn=t(18),hn=function(n){Object(z.a)(t,n);var e=Object(I.a)(t);function t(n){var a;return Object(F.a)(this,t),(a=e.call(this,n)).state={id:100,type:"",distance:"",comment:"",date:new Date},a._changeHandler=a._changeHandler.bind(Object(sn.a)(a)),a._submitHandler=a._submitHandler.bind(Object(sn.a)(a)),a}return Object(P.a)(t,[{key:"_submitHandler",value:function(n){n.preventDefault()}},{key:"_changeHandler",value:function(n){var e=n.target.name;this.setState(Object(mn.a)({},e,n.target.value))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{to:"/"},"go-back"),r.a.createElement("form",{onSubmit:this._submitHandler,style:{display:"flex",width:"50%",flexDirection:"column"}},r.a.createElement("h2",null,"form"),r.a.createElement("p",null,"Type"),r.a.createElement("select",{name:"type",value:this.state.type,onChange:this._changeHandler},r.a.createElement("option",null,"\u0422\u0438\u043f"),r.a.createElement("option",null,"\u0412\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434"),r.a.createElement("option",null,"\u0411\u0435\u0433"),r.a.createElement("option",null,"\u041b\u044b\u0436\u0438"),r.a.createElement("option",null,"\u041f\u043b\u0430\u0432\u0430\u043d\u0438\u0435"),r.a.createElement("option",null,"\u0425\u043e\u0434\u044c\u0431\u0430")),r.a.createElement("textarea",{required:!0,placeholder:"distance",name:"distance",value:this.state.distance,onChange:this._changeHandler}),r.a.createElement("textarea",{required:!0,placeholder:"comment",name:"comment",value:this.state.comment,onChange:this._changeHandler}),r.a.createElement("button",null,"Send")))}}]),t}(r.a.Component),pn={primary:"#3B5AF5",secondary:"tomato",pink:"#F9057C",bgc:"white",mobile:"660px",font:"Poppins"},bn=function(){return r.a.createElement(l.a,null,r.a.createElement(u.a,{theme:pn},r.a.createElement(v,null),r.a.createElement(c.a,{exact:!0,path:"/"},r.a.createElement(tn,null)),r.a.createElement(c.a,{exact:!0,path:"/new"},r.a.createElement(hn,null)),r.a.createElement(dn,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(bn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},67:function(n,e,t){n.exports=t(171)},72:function(n,e,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.2882a4dc.chunk.js.map