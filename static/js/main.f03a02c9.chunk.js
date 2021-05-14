(this.webpackJsonpcovid19tracker=this.webpackJsonpcovid19tracker||[]).push([[0],{102:function(e,t,a){e.exports={container:"Chart_container__jnB9c",image:"Chart_image__28jqZ"}},103:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2dH3C"}},24:function(e,t,a){e.exports={container:"Cards_container__2wrKi",card:"Cards_card__12FJM",infected:"Cards_infected__17s4a",recovered:"Cards_recovered__GMzkL",deaths:"Cards_deaths__2JJem",active:"Cards_active__aeNa3"}},242:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(92),c=a.n(o),s=a(10),i=a.n(s),l=a(16),u=a(3),d=a(4),f=a(7),b=a(6),m=a(260),h=a(264),p=a(261),j=a(262),v=a(24),x=a.n(v),O=a(93),g=a.n(O),y=a(94),C=a.n(y),k=a(2),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,r=t.deaths,o=t.lastUpdate,c=e.country;if(!a)return"Loading...";var s=a.value-n.value-r.value,i=[{style:x.a.infected,text:"Infected",value:a.value,bottomText:"Number of infect cases of COVID-19"},{style:x.a.recovered,text:"Recovered",value:n.value,bottomText:"Number of recoveries from COVID-19"},{style:x.a.deaths,text:"Deaths",value:r.value,bottomText:"Number of deaths caused by COVID-19"},{style:x.a.active,text:"Active",value:s,bottomText:"Number of active cases of COVID-19"}];return Object(k.jsx)("div",{className:x.a.container,children:Object(k.jsx)(m.a,{container:!0,spacing:3,justify:"center",children:i.map((function(e,t){return Object(k.jsx)(m.a,{item:!0,component:h.a,xs:12,md:2,className:C()(x.a.Card,e.style),style:{margin:"0px 23.675px",padding:"12px"},children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(j.a,{color:"textPrimary",gutterBottom:!0,children:Object(k.jsx)("b",{children:e.text})}),Object(k.jsx)(j.a,{variant:"h5",children:Object(k.jsx)(g.a,{start:0,end:e.value,duration:2,separator:","})}),Object(k.jsx)(j.a,{color:"textPrimary",children:"Last Updated at : "}),Object(k.jsx)(j.a,{color:"textSecondary",variant:"body2",children:new Date(o).toDateString()}),Object(k.jsx)(j.a,{color:"textSecondary",variant:"body2",children:new Date(o).toLocaleTimeString()}),Object(k.jsx)(j.a,{variant:"body2",children:e.bottomText}),Object(k.jsxs)(j.a,{color:"textPrimary",children:[" ",c," "]})]})},t)}))})})},_=a(43),N=a(44),M=a.n(N),S="https://covid19.mathdro.id/api",I=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r,o,c,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,M.a.get(a);case 5:return n=e.sent,r=n.data,o=r.confirmed,c=r.recovered,s=r.deaths,l=r.lastUpdate,e.abrupt("return",{confirmed:o,recovered:c,deaths:s,lastUpdate:l});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),P=a(63),L=a(102),T=a.n(L),F=function(e){var t,a=e.data,r=a.confirmed,o=a.recovered,c=a.deaths,s=e.country,u=Object(n.useState)([]),d=Object(_.a)(u,2),f=d[0],b=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=b,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),f&&(t=f.length?Object(k.jsx)(P.b,{data:{labels:f.map((function(e){return e.date})),datasets:[{data:f.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:f.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null);var m=r?Object(k.jsx)(P.a,{data:{labels:["Infected","Recovered","Deaths","Active"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)","rgba(242, 234, 0, 0.5)"],hoverBackgroundColor:["rgba(0, 77, 153)","rgba(30, 102, 49)","rgba(255, 51, 51)","rgba(204, 153, 0)"],data:[r.value,o.value,c.value,r.value-(o.value+c.value)]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return Object(k.jsx)("div",{className:T.a.container,children:s?m:t})},B=a(265),V=a(263),G=a(103),J=a.n(G),U=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),r=Object(_.a)(a,2),o=r[0],c=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,D();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(k.jsx)(B.a,{className:J.a.formControl,children:Object(k.jsxs)(V.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(k.jsx)("option",{value:"",children:"Global"}),o.map((function(e,t){return Object(k.jsx)("option",{value:e,children:e},t)}))]})})},z=a(62),E=a.n(z),R=a.p+"static/media/image.9e5d4fc7.png",W=a(45),X=a.n(W),q=function(){var e=function(e){e.target.style.color="#cccccc"};return Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)("div",{className:X.a.container,children:Object(k.jsxs)("h6",{style:{display:"block",marginBottom:"0px",fontSize:30,marginTop:"40px",textAlign:"center"},children:["Created by"," ",Object(k.jsx)("a",{href:"https://github.com/saksheek",target:"_blank",rel:"noopener noreferrer",style:{color:"rgba(0,0,255,0.6)",textDecoration:"none"},children:"Sakshee Kolhe"})]})}),Object(k.jsxs)("div",{className:X.a.container,children:[Object(k.jsx)("br",{}),Object(k.jsx)("ul",{className:"list",style:{listStyleType:"none"},children:[{SocialMediaName:"LinkedIn",ProfileLink:"https://www.linkedin.com/in/sabesan96/",fontAwesomeIconName:"fab fa-linkedin",OnMouseOverColor:"#4875B4"},{SocialMediaName:"GitHub",ProfileLink:"https://github.com/sabesansathananthan",fontAwesomeIconName:"fab fa-github",OnMouseOverColor:"#211F1F"},{SocialMediaName:"Medium",ProfileLink:"https://medium.com/@sabesan96",fontAwesomeIconName:"fab fa-medium",OnMouseOverColor:"#12100e"},{SocialMediaName:"StackOverFlow",ProfileLink:"https://stackoverflow.com/users/8629258/sathananthan-sabesan",fontAwesomeIconName:"fab fa-stack-overflow",OnMouseOverColor:"#f48024"},{SocialMediaName:"Gmail",ProfileLink:"mailto:sabesan996@gmail.com",fontAwesomeIconName:"far fa-envelope",OnMouseOverColor:"#D44638",_comment:"OnMouseOverColor for yahoo mail: #720e9e"},{SocialMediaName:"WhatsApp",ProfileLink:"https://wa.me/94770711017",fontAwesomeIconName:"fab fa-whatsapp",OnMouseOverColor:"#25d366"},{SocialMediaName:"Telegram",ProfileLink:"https://telegram.me/TheSabesan",fontAwesomeIconName:"fab fa-telegram",OnMouseOverColor:"#0088cc"},{SocialMediaName:"Twitter",ProfileLink:"https://twitter.com/TheSabesan",fontAwesomeIconName:"fab fa-twitter",OnMouseOverColor:"#1da1f2"},{SocialMediaName:"Facebook",ProfileLink:"https://www.facebook.com/sathananthan.sabesan",fontAwesomeIconName:"fab fa-facebook-f",OnMouseOverColor:"#1877f2"}].map((function(t,a){return Object(k.jsx)("li",{style:{display:"inline-block",marginRight:"17px"},children:Object(k.jsx)("a",{onMouseOver:function(e){e.target.style.color="".concat(t.OnMouseOverColor)},onMouseOut:e,href:t.ProfileLink,target:"_blank",rel:"noopener noreferrer",style:{color:"#cccccc",fontSize:"40px"},children:Object(k.jsx)("i",{className:"".concat(t.fontAwesomeIconName)})})},a)}))})]}),Object(k.jsx)("div",{className:X.a.container,children:Object(k.jsxs)("h6",{style:{display:"block",marginBottom:"0px",fontSize:16,marginTop:"20px",textAlign:"center"},children:["Data provided  by"," ",Object(k.jsx)("a",{href:"https://github.com/mathdroid/covid-19-api",target:"_blank",rel:"noopener noreferrer",style:{color:"rgba(0,0,255,0.6)",textDecoration:"none"},children:"Mathdroid"})]})})]})},H=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(k.jsxs)("div",{className:E.a.container,children:[Object(k.jsx)("img",{className:E.a.image,src:R,alt:"COVID-19"}),Object(k.jsx)("br",{}),Object(k.jsx)("text",{children:Object(k.jsx)("b",{children:"Global and Country Wise Cases of Corona Virus"})}),Object(k.jsx)("br",{}),Object(k.jsx)("text",{children:Object(k.jsx)("i",{children:"(For a Particular country, select a Country from below)"})}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)(w,{data:t,country:a}),Object(k.jsx)(U,{handleCountryChange:this.handleCountryChange}),Object(k.jsx)(F,{data:t,country:a}),Object(k.jsx)(q,{})]})}}]),a}(r.a.Component);c.a.render(Object(k.jsx)(H,{}),document.getElementById("root"))},45:function(e,t,a){e.exports={container:"Footer_container__3GUJq",list:"Footer_list__3WXX8"}},62:function(e,t,a){e.exports={container:"App_container__CayXt",image:"App_image__1Yk_Q"}}},[[242,1,2]]]);
//# sourceMappingURL=main.f03a02c9.chunk.js.map