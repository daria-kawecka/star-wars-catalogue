(this["webpackJsonpstar-wars-task"]=this["webpackJsonpstar-wars-task"]||[]).push([[0],{75:function(n,e,t){},76:function(n,e,t){"use strict";t.r(e);var i,r,o,a,A,c,s,l,u,p,f=t(0),d=t.n(f),b=t(16),h=t.n(b),m=t(2),x=t(3),j=Object(m.b)(i||(i=Object(x.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *::after, *::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    font-family: 'Quicksand',sans-serif;\n    background: #151414;\n    overflow-x: hidden;\n  }\n\n  a, button {\n    font-family: 'Quicksand',sans-serif;\n  }\n"]))),g={colors:{yellow:"#e0cc28",yellowWithOpacity:"rgba(207,207,31,0.7)",error:"#CF1F22",dark:"#131212",grey:"#212429",light:"#cdcdcd"},mixins:{backgroundColor:"radial-gradient(circle, rgba(205,205,205,1) 0%, rgba(106,106,106,1) 100%)"},fontSize:{xl:"32px",l:"26px",m:"22px",s:"16px",xs:"12px"}},O=t(11),v=t(18),z=t.n(v),w=t(7),L=t(35),S=t(4),y=["https://swapi.dev/api/people/?page=1","https://swapi.dev/api/people/?page=2","https://swapi.dev/api/people/?page=3","https://swapi.dev/api/people/?page=4","https://swapi.dev/api/people/?page=5","https://swapi.dev/api/people/?page=6","https://swapi.dev/api/people/?page=7","https://swapi.dev/api/people/?page=8","https://swapi.dev/api/people/?page=9"],k=t(6),Z=t.n(k),H=t(1),U=d.a.createContext({filteredCharacters:[],counter:10,isReady:!1,searchPhrase:"",loadingProgres:0,searchError:!1,handleClick:function(){},handleInputValue:function(){}}),C=function(n){var e=n.children,t=Object(f.useState)([]),i=Object(S.a)(t,2),r=i[0],o=i[1],a=Object(f.useState)(!1),A=Object(S.a)(a,2),c=A[0],s=A[1],l=Object(f.useState)(0),u=Object(S.a)(l,2),p=u[0],d=u[1],b=Object(f.useState)(!1),h=Object(S.a)(b,2),m=h[0],x=h[1],j=Object(f.useState)([]),g=Object(S.a)(j,2),O=g[0],v=g[1],k=Object(f.useState)(""),C=Object(S.a)(k,2),N=C[0],T=C[1],B=Object(f.useState)(10),K=Object(S.a)(B,2),P=K[0],X=K[1],I=function(){var n=Object(L.a)(z.a.mark((function n(e){return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Z.a.all(e.map((function(n){return Z.a.get(n)}))).then(Z.a.spread((function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];e.map((function(n){return o((function(e){return[].concat(Object(w.a)(e),Object(w.a)(n.data.results))}))})),x(!0)}))).catch((function(n){console.log(n)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();Object(f.useEffect)((function(){I(y),window.addEventListener("scroll",F);var n=setInterval((function(){d((function(e){if(100===e)return clearInterval(n),100;var t=parseInt(15*Math.random(),10);return Math.min(e+t,100)}))}),150);return function(){return window.removeEventListener("scroll",F)}}),[]),Object(f.useEffect)((function(){V(),O.length||s(!0)}),[N,r]),Object(f.useEffect)((function(){O.length||s(!0)}),[N,O.length]);var F=function(){window.scrollY+document.documentElement.clientHeight===document.documentElement.scrollHeight&&X((function(n){return n+5}))},V=function(){v(r.filter((function(n){if(n.name.toLowerCase().includes(N.toLowerCase()))return s(!1),n})))};return Object(H.jsx)(U.Provider,{value:{filteredCharacters:O,counter:P,isReady:m,searchPhrase:N,loadingProgress:p,searchError:c,handleClick:function(){X((function(n){return n+5})),T("")},handleInputValue:function(n){T(n.target.value)}},children:e})},N="375px",T="425px",B="768px",K="1366px",P="1024px",X="1440px",I="1920px",F={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(N,")"),mobileL:"(max-width: ".concat(T,")"),mobileLand:"(max-width:".concat(K,") and (max-height:").concat(T,") and (orientation:landscape)"),tablet:"(max-width: ".concat(B,")"),tabletL:"(max-width: ".concat(K,")"),laptop:"(max-width: ".concat(P,")"),desktop:"(max-width: ".concat(X,")"),desktopL:"(max-width: ".concat(I,")")},V=m.c.ul(r||(r=Object(x.a)(["\n  padding: 15px 0px;\n  width: 100%;\n  margin: 10vh auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  cursor: default;\n  z-index: 200;\n  @media "," {\n    margin-top: 12vw;\n  }\n"])),F.mobileLand),R=m.c.p(o||(o=Object(x.a)(["\n  font-size: ",";\n  color: ",";\n  text-align: center;\n  font-weight: 700;\n  text-transform: uppercase;\n  @media "," {\n    font-size: ",";\n  }\n  @media "," {\n    font-size: ",";\n    margin: 25px;\n  }\n"])),(function(n){return n.theme.fontSize.xl}),(function(n){return n.theme.colors.yellow}),F.tablet,(function(n){return n.theme.fontSize.l}),F.mobileL,(function(n){return n.theme.fontSize.m})),W=m.c.button(a||(a=Object(x.a)(["\n  color: ",";\n  outline: none;\n  border: none;\n  padding: 8px 25px;\n  font-weight: 700;\n  font-size: ",";\n  border-radius: 15px;\n  background-color: ",";\n  margin-top: 2%;\n  transition: all 0.4s linear;\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.1);\n    color: ",";\n    background-color: ",";\n  }\n  @media "," {\n    font-size: ",";\n    padding: 8px 15px;\n  } ;\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.fontSize.m}),(function(n){return n.theme.colors.yellow}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.light}),F.mobileL,(function(n){return n.theme.fontSize.s})),G=function(){var n=Object(f.useContext)(U).handleClick;return Object(H.jsx)(W,{onClick:n,children:"Show more characters"})},Q=m.c.li(A||(A=Object(x.a)(["\n  color: ",";\n  width: 35vw;\n  padding: 35px;\n  list-style: none;\n  text-decoration: none;\n  margin: 30px 0px;\n  text-align: center;\n  text-transform: uppercase;\n  border-radius: 15px;\n  box-shadow: 0 0 1px 2px #efc34a, 0 0 12px 7px #e3e111;\n  position: relative;\n  top: 0;\n  overflow: hidden;\n  @media "," {\n    width: 45vw;\n  }\n  @media "," {\n    width: 60vw;\n    padding: 20px;\n  }\n"])),(function(n){return n.theme.colors.light}),F.tablet,F.mobileL),J=m.c.p(c||(c=Object(x.a)(["\n  font-size: ",";\n  padding: 15px;\n  transition: all 0.6s linear;\n  &:hover {\n    transform: scale(1.05);\n  }\n  @media "," {\n    font-size: 18px;\n    padding: 5px;\n  }\n"])),(function(n){return n.theme.fontSize.m}),F.mobileL),E=m.c.p(s||(s=Object(x.a)(["\n  font-size: ",";\n  color: ",";\n  transition: all 0.6s linear;\n  &:hover {\n    transform: scale(1.1);\n  }\n  @media "," {\n    font-size: 18px;\n    padding: 5px;\n  }\n"])),(function(n){return n.theme.fontSize.m}),(function(n){return"male"===n.gender?"#3355cd":"female"===n.gender?"pink":"#888888"}),F.mobileL),q=m.c.p(l||(l=Object(x.a)(["\n  color: ",";\n  font-size: ",";\n  text-align: left;\n  position: absolute;\n  top: 15px;\n  left: 25px;\n  @media "," {\n    top: 10px;\n    left: 15px;\n  }\n  @media "," {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.colors.yellowWithOpacity}),(function(n){return n.theme.fontSize.s}),F.mobileL,F.mobileM,(function(n){return n.theme.fontSize.xs})),M=m.c.button(u||(u=Object(x.a)(["\n  font-size: ",";\n  outline: none;\n  padding: 5px 10px;\n  margin-top: 2%;\n  background-color: ",";\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.4s ease-in;\n  &:hover {\n    background-color: ",";\n  }\n  @media "," {\n    font-size: ",";\n    padding: 5px 8px;\n    margin: 2% 0 4% 0;\n  }\n"])),(function(n){return n.theme.fontSize.s}),(function(n){return n.theme.colors.yellow}),(function(n){return n.theme.colors.yellowWithOpacity}),F.mobileM,(function(n){return n.theme.fontSize.xs})),D=m.c.p(p||(p=Object(x.a)(["\n  padding: 3px;\n  color: ",";\n  font-size: ",";\n  transition: all 0.6s linear;\n  &:hover {\n    transform: scale(1.1);\n  }\n  @media "," {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.fontSize.s}),F.mobileM,(function(n){return n.theme.fontSize.xs}));function Y(n){var e=parseInt(n)+1+" YO";return"unknown"===n&&(e="Uhm... im not sure"),e}var _,$,nn,en,tn,rn,on,an,An,cn,sn,ln,un,pn,fn,dn,bn,hn=t.p+"static/media/iconfinder_bb8.eaa17228.png",mn=Object(m.d)(_||(_=Object(x.a)(["\nfrom{\n  transform: translateX(0);\n}\n  to{\n    transform: translateX(100%);\n  }\n"]))),xn=m.c.div($||($=Object(x.a)(["\n  width: ",";\n  height: ",";\n  margin-top: ",";\n  font-size: ",";\n  position: relative;\n  right: 25px;\n  top: 0;\n  display: flex;\n  justify-content: flex-start;\n  animation: "," 4s alternate infinite;\n  animation-play-state: running;\n  @media "," {\n    margin-top: ",";\n    height: ",";\n  }\n  @media "," {\n    height: ",";\n  }\n  @media "," {\n    height: ",";\n    width: ",";\n    margin-top: ",";\n  }\n"])),(function(n){return"big"===n.size?"80vw":"100%"}),(function(n){return"big"===n.size?"35vh":"12vh"}),(function(n){return"big"===n.size?"15%":"5%"}),(function(n,e){return"big"===n.size?"25px":"12px"}),mn,F.tablet,(function(n){return"big"===n.size?"25%":"5%"}),(function(n){return"big"===n.size?"45vh":"15vh"}),F.mobileLand,(function(n){return"big"===n.size?"35vh":"25vh"}),F.mobileL,(function(n){return"big"===n.size?"38vh":"15vh"}),(function(n){return"big"===n.size?"70vw":"80%"}),(function(n){return"big"===n.size?"35%":"5%"})),jn=m.c.p(nn||(nn=Object(x.a)(["\n  color: ",";\n  text-transform: uppercase;\n  position: absolute;\n  left: 20%;\n  top: 0;\n  @media "," {\n    left: ",";\n    width: ",";\n    top: 5%;\n  }\n  @media "," {\n    font-size: ",";\n    width: 35%;\n    left: ",";\n  }\n  @media "," {\n    font-size: ",";\n    width: ",";\n    left: ",";\n  }\n  @media "," {\n    font-size: ",";\n    left: ",";\n  }\n"])),(function(n){return n.theme.colors.light}),F.tabletL,(function(n){return"small"===n.size?"40%":"45%"}),(function(n){return"small"===n.size?"35%":"40%"}),F.mobileLand,(function(n){return"small"===n.size?"13px":"20px"}),(function(n){return"small"===n.size?"45%":"30%"}),F.mobileL,(function(n){return"small"===n.size?"10px":"25px"}),(function(n){return"small"===n.size?"50%":"30%"}),(function(n){return"small"===n.size?"43%":"65%"}),F.mobileS,(function(n){return"small"===n.size?"8px":"16px"}),(function(n){return"small"===n.size?"45%":"65%"})),gn=m.c.img(en||(en=Object(x.a)(["\n  height: 100%;\n  position: absolute;\n  left: ",";\n  top: 0;\n  @media "," {\n    left: ",";\n  }\n  @media "," {\n    left: ",";\n  }\n  @media "," {\n    left: 0px;\n    height: ",";\n  }\n"])),(function(n){return"small"===n.size?"0px":"-70px"}),F.tabletL,(function(n){return"small"===n.size?"0px":"-50px"}),F.mobileLand,(function(n){return"small"===n.size?"30px":"0px"}),F.mobileS,(function(n){return"small"===n.size?"100%":"90%"})),On=function(n){var e=n.size;return Object(H.jsxs)(xn,{size:e,children:[Object(H.jsx)(gn,{size:e,src:hn,alt:"bb-8"}),Object(H.jsx)(jn,{size:e,children:"beep-boop-beep"})]})},vn=function(n){var e=n.name,t=Object(f.useContext)(U).filteredCharacters,i=Object(f.useState)(!1),r=Object(S.a)(i,2),o=r[0],a=r[1],A=Object(f.useState)(""),c=Object(S.a)(A,2),s=c[0],l=c[1],u=Object(f.useState)([]),p=Object(S.a)(u,2),d=p[0],b=p[1],h=Object(f.useState)(!1),m=Object(S.a)(h,2),x=m[0],j=m[1];return Object(f.useEffect)((function(){var n;return l.apply(void 0,Object(w.a)(t.filter((function(n){if(n.name===e)return n})))),a(!0),o&&(n=s.films,Z.a.all(n.map((function(n){return Z.a.get(n)}))).then(Z.a.spread((function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];e.map((function(n){b((function(e){return[].concat(Object(w.a)(e),[n.data.title])})),j(!0)}))})))),function(){return a(!1)}}),[o]),Object(H.jsxs)("div",{children:[Object(H.jsxs)(D,{children:[s.height," cm"]}),Object(H.jsx)(D,{children:Y(s.birth_year)}),x?d.map((function(n,e){return Object(H.jsx)(D,{children:n},e)})):Object(H.jsx)(On,{size:"small"})]})},zn=function(n){var e=n.number,t=n.characterData,i=t.name,r=t.gender,o=t.birth_year,a=Object(f.useState)(!1),A=Object(S.a)(a,2),c=A[0],s=A[1];return Object(H.jsxs)(Q,{children:[Object(H.jsx)(q,{children:e+1}),Object(H.jsxs)(J,{children:["name: ",i]}),Object(H.jsxs)(E,{gender:r,children:["gender: ",r]}),Object(H.jsxs)(J,{children:["birth year: ",o]}),Object(H.jsx)(M,{onClick:function(){s(!c)},children:"More info..."}),c&&Object(H.jsx)(vn,{name:i})]})},wn=m.c.div(tn||(tn=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 25px;\n"]))),Ln=m.c.p(rn||(rn=Object(x.a)(["\n  color: ",";\n  font-size: ","\n  @media "," {\n    font-size: ","\n  }\n  };\n"])),(function(n){return n.theme.colors.error}),(function(n){return n.theme.fontSize.m}),F.mobileS,(function(n){return n.theme.fontSize.s})),Sn=m.c.img(on||(on=Object(x.a)(["\n  height: 100%;\n  @media "," {\n    width: 65%;\n  }\n"])),F.mobileS),yn=function(){return Object(H.jsxs)(wn,{children:[Object(H.jsx)(Sn,{src:"data:image/png;base64,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",alt:"yoda"}),Object(H.jsx)(Ln,{children:"There nothing here is"})]})},kn=function(){var n=Object(f.useContext)(U),e=n.filteredCharacters,t=n.counter,i=n.isReady,r=n.loadingProgress,o=n.searchError;return Object(H.jsx)(H.Fragment,{children:i&&100===r?Object(H.jsxs)(V,{children:[Object(H.jsx)(R,{children:"A long time ago in a galaxy far, far away..."}),e.slice(0,t).map((function(n,e){return Object(H.jsx)(zn,{number:e,characterData:n},e)})),o&&Object(H.jsx)(yn,{}),Object(H.jsx)(G,{})]}):Object(H.jsx)(On,{size:"big"})})},Zn=t(36),Hn="pageLeave",Un=m.c.div(an||(an=Object(x.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  overflow: -moz-scrollbars-none;\n  z-index: 100;\n  width: 100vw;\n  height: 100vh;\n  background-color: #151414;\n  &.","-leave.","-leave-active {\n    opacity: 0;\n    transition: opacity 500ms ease-in;\n  }\n\n  &.","-leave-active {\n    opacity: 0;\n    transition: all ","ms ease-out;\n  }\n"])),Hn,Hn,Hn,500),Cn=Object(m.d)(An||(An=Object(x.a)(["\n  from {\n    transform:scale(1) translate(0);\n  }\n  to {\n    transform: scale(1) translate(70px);\n  }\n"]))),Nn=m.c.img(cn||(cn=Object(x.a)(["\n  position: absolute;\n  bottom: 0;\n  right: -30px;\n  height: 55%;\n  animation: "," 1.5s alternate forwards infinite;\n  @media "," {\n    height: 40%;\n    right: -50px;\n  }\n  @media "," {\n    height: 35%;\n    right: -30px;\n  }\n  @media "," {\n    height: 55%;\n    right: -60px;\n  }\n"])),Cn,F.tabletL,F.mobileL,F.mobileLand),Tn=Object(m.d)(sn||(sn=Object(x.a)(["\n  from {\n    transform:scale(1) translateX(0) translateY(0);\n  }\n  to {\n    transform: scale(1.2) translateX(55px) translateY(30px);\n  }\n"]))),Bn=m.c.img(ln||(ln=Object(x.a)(["\n  position: absolute;\n  top: 25px;\n  left: 45px;\n  height: 35%;\n  animation: "," 3s alternate forwards infinite;\n  @media "," {\n    height: 25%;\n    left: 30px;\n  }\n  @media "," {\n    height: 15%;\n    left: 10px;\n  }\n  @media "," {\n    height: 25%;\n    left: 5px;\n    top: 5px;\n  }\n"])),Tn,F.tabletL,F.mobileL,F.mobileLand),Kn=m.c.p(un||(un=Object(x.a)(["\n  color: ",";\n  font-size: ",";\n  text-shadow: 0px 0px 15px ",";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  @media "," {\n    font-size: ",";\n  }\n  @media "," {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.fontSize.l}),(function(n){return n.theme.colors.yellow}),F.tablet,(function(n){return n.theme.fontSize.m}),F.mobileL,(function(n){return n.theme.fontSize.s})),Pn=t.p+"static/media/darth-vader.a805cd42.png",Xn=t.p+"static/media/death-star.e27fc376.png",In=function(){var n=Object(f.useContext)(U),e=n.loadingProgress,t=n.isReady;return Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(Zn.CSSTransitionGroup,{transitionName:"pageLeave",transitionLeave:!0,transitionLeaveTimeout:500,children:e<100||!1===t?Object(H.jsxs)(Un,{children:[Object(H.jsx)(O.a,{numStars:250,maxStarSpeed:.35,scale:1.5,style:{position:"absolute",width:"100vw",height:"100vh"},starColor:"255,255, 255"}),Object(H.jsxs)(Kn,{children:[e," %"]}),Object(H.jsx)(Nn,{src:Pn,alt:"darth-vader"}),Object(H.jsx)(Bn,{src:Xn,alt:"death-star"})]}):null})})},Fn=m.c.input(pn||(pn=Object(x.a)(["\n  color: ",";\n  outline: none;\n  border: none;\n  padding: 8px 25px;\n  font-weight: 700;\n  border-radius: 15px;\n  background-color: ",";\n  @media "," {\n    padding: 5px 10px;\n    font-size: ",";\n    font-weight: 500;\n  }\n  @media "," {\n    padding: 5px 5px;\n    width: 83%;\n  }\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.yellow}),F.mobileL,(function(n){return n.theme.fontSize.xs}),F.mobileS),Vn=m.c.form(fn||(fn=Object(x.a)(["\n  margin: 5vw;\n"]))),Rn=function(){var n=Object(f.useContext)(U),e=n.handleInputValue,t=n.searchPhrase;return Object(H.jsx)(Vn,{onSubmit:function(n){return n.preventDefault()},children:Object(H.jsx)(Fn,{type:"text",onChange:e,placeholder:"JEDI SEARCH",value:t})})},Wn=m.c.div(dn||(dn=Object(x.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 6vh;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n  box-shadow: 0px 0px 10px 2px #e3e111;\n  z-index: 1;\n  opacity: 1;\n  @media "," {\n    height: 10vh;\n  }\n  @media "," {\n    height: 8vw;\n  }\n"])),(function(n){return n.theme.colors.dark}),F.mobileL,F.mobileLand),Gn=m.c.p(bn||(bn=Object(x.a)(["\n  justify-items: flex-start;\n  color: ",";\n  font-size: ",";\n  margin: 35px;\n  @media "," {\n    font-size: 20px;\n  }\n  @media "," {\n    font-size: ",";\n    margin: 20px;\n  }\n  @media "," {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.fontSize.m}),F.mobileLand,F.mobileL,(function(n){return n.theme.fontSize.s}),F.mobileS,(function(n){return n.theme.fontSize.xs})),Qn=function(){return Object(H.jsxs)(Wn,{children:[Object(H.jsx)(Gn,{children:"Catalogue from space"}),Object(H.jsx)(Rn,{})]})},Jn=function(){return Object(H.jsx)("div",{children:Object(H.jsxs)(m.a,{theme:g,children:[Object(H.jsx)(j,{}),Object(H.jsx)(O.a,{numStars:260,maxStarSpeed:.35,scale:1.5,style:{position:"fixed",top:"50px",left:"0",width:"100vw",height:"100vh",zIndex:"-1"},starColor:"255,255, 255"}),Object(H.jsxs)(C,{children:[Object(H.jsx)(In,{}),Object(H.jsx)(Qn,{}),Object(H.jsx)(kn,{})]})]})})};t(75);h.a.render(Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(Jn,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.36e9d97b.chunk.js.map