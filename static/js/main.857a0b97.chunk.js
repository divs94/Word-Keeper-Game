(this.webpackJsonpgooglekeeper=this.webpackJsonpgooglekeeper||[]).push([[0],{41:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(11),r=n.n(o),s=(n(41),n(33)),a=n(19),j=n(2),i=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("header",{children:[Object(j.jsx)("img",{src:"https://2.bp.blogspot.com/-zIvQs25onUg/UifUadIDMuI/AAAAAAAAABc/TrZWubaCjrY/s1600/Logo+Persis.jpg",alt:"logo",width:"80",height:"60"}),Object(j.jsx)("h1",{children:"Word Keeper"})]})})},l=function(){var e=(new Date).getFullYear();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("p",{children:["copyright \xa9 Tech Spot ",e]})})})},b=n(23),u=n(26),O=n(64),d=n(31),h=n.n(d),x=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),o=n[0],r=n[1],s=Object(c.useState)({title:"",content:""}),i=Object(a.a)(s,2),l=i[0],d=i[1],x=function(e){var t=e.target,n=t.name,c=t.value;d((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(b.a)({},n,c))})),console.log(l)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main_note",onDoubleClick:function(){r(!1)},children:Object(j.jsxs)("form",{children:[o?Object(j.jsx)("input",{type:"text",name:"title",value:l.title,onChange:x,placeholder:"Title",autoComplete:"off"}):null,Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{rows:"",column:"",name:"content",value:l.content,onChange:x,placeholder:"Write Your Note...",onClick:function(){r(!0)}}),o?Object(j.jsx)(O.a,{onClick:function(){e.passNote(l),d({title:"",content:""})},className:"btn",variant:"contained",color:"secondary",children:Object(j.jsx)(h.a,{className:"icon"})}):null]})})})},f=n(32),m=n.n(f),g=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"note",children:[Object(j.jsxs)("h1",{children:[" ",e.title," "]}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:e.content}),Object(j.jsx)(O.a,{className:"btn",onClick:function(){e.deleteItem(e.id)},children:Object(j.jsx)(m.a,{className:"deletIcon"})})]})})},p=(n(48),function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],o=t[1],r=function(e){o((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(i,{}),Object(j.jsx)(x,{passNote:function(e){o((function(t){return[].concat(Object(s.a)(t),[e])})),console.log(e)}}),n.map((function(e,t){return Object(j.jsx)(g,{id:t,title:e.title,content:e.content,deleteItem:r},t)})),Object(j.jsx)(l,{})]})});r.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.857a0b97.chunk.js.map