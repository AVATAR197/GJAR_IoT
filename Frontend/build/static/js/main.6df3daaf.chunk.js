(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports={whitebox:"AboutUsPage_whitebox__19Cmd",aboutProject:"AboutUsPage_aboutProject__30u5J",aboutProjectText:"AboutUsPage_aboutProjectText__2LlQY",image:"AboutUsPage_image__1Bijv",about_us_title:"AboutUsPage_about_us_title__3ZIbe",about_us:"AboutUsPage_about_us__2IWWK"}},209:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(76),c=a.n(o),i=(a(97),a(9)),s=a(10),l=a(12),u=a(11),m=a(13),v=a(44),d=a.n(v),p=a(21),b=a.n(p),h=function(e){var t=e.active?b.a.isactive:null;return n.a.createElement("div",{className:[b.a.hamburger,b.a.hamburgersqueeze,t].join(" "),onClick:e.click},n.a.createElement("div",{className:b.a.hamburgerbox},n.a.createElement("div",{className:b.a.hamburgerinner})))},_=a(32),g=a.n(_),E=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:g.a.GjarIot},"GJAR IOT"),n.a.createElement("p",{className:g.a.Activeroom},e.title),n.a.createElement("div",{className:g.a.HamburgerButton},n.a.createElement(h,{click:e.click,active:e.active})))},k=a(25),f=a.n(k),j=a(91),N=a(19),y=[{name:"Byt",number:29},{name:"Inf Kabinet",number:53},{name:"III.A",number:61},{name:"Kniznica",number:70},{name:"Aj 1",number:71},{name:"Nj 2",number:77},{name:"Bio kabinet",number:83},{name:"VI.OA",number:84}],x=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,"1. poschodie"),y.map(function(t,a){var r=null;return 29===t.number?r="2. poschodie":77===t.number&&(r="3. poschodie"),n.a.createElement(n.a.Fragment,{key:a},n.a.createElement(N.b,{style:{textDecoration:"none"},to:"/"},n.a.createElement("li",{onClick:function(){return e.click("".concat(t.name," (").concat(t.number,")"),t.number)}},t.name," (",t.number,")")),null!==r?n.a.createElement("div",null,r):null)}),n.a.createElement(N.b,{style:{textDecoration:"none"},to:"/about-project"},n.a.createElement("div",{style:{textDecoration:"underline"},onClick:e.aboutProjectClick},"O projekte")))},C=function(e){var t=e.active?[f.a.SideDrawer,f.a.Active].join(" "):f.a.SideDrawer;return n.a.createElement("div",{className:t},n.a.createElement("div",{className:f.a.CloseBtn,onClick:e.clicked},n.a.createElement(j.a,{size:"1.7em",value:{style:{verticalAlign:"middle"}}}),"Close"),n.a.createElement(x,{aboutProjectClick:e.aboutProjectClick,click:e.click}))},w=a(79),A=a.n(w),B=function(e){return e.show?n.a.createElement("div",{className:A.a.Backdrop,onClick:e.clicked}):null},P=a(47),D=a.n(P),O=function(e){return n.a.createElement("div",{className:D.a.DesktopSideDrawer},n.a.createElement(x,{aboutProjectClick:e.aboutProjectClick,styling:D.a,click:e.click}))},M=a(48),R=a.n(M),S=a(80),H=a.n(S),I=a(81),G=a.n(I),z=a(82),F=a.n(z),W=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null,t=null,a=null;return"temperature"===this.props.type?(a="Aktu\xe1lna teplota",t="\xb0C",e=n.a.createElement("img",{src:H.a,alt:"chart"})):"humidity"===this.props.type?(a="Aktu\xe1lna vlhkos\u0165",t="%",e=n.a.createElement("img",{src:F.a,alt:"chart"})):"brightness"===this.props.type&&(a="Aktu\xe1lna osvietenos\u0165",t="%",e=n.a.createElement("img",{src:G.a,alt:"chart"})),n.a.createElement("div",{className:R.a.Whitebox},n.a.createElement("p",null,a),n.a.createElement("h1",null,this.props.value,t),n.a.createElement("div",{className:R.a.Icon},e))}}]),t}(r.Component),L=a(83),T=a.n(L),J=function(e){return n.a.createElement("div",{className:T.a.Boxes},n.a.createElement(W,{type:"temperature",value:e.temperature}),n.a.createElement(W,{type:"humidity",value:e.humidity}),n.a.createElement(W,{type:"brightness",value:e.brightness}))},U=a(84),q=a(86),Q=a.n(q),Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={chartData:{labels:a.props.time,datasets:[{label:"Teplota",data:a.props.temperature,fill:!0,backgroundColor:"rgba(85, 186, 254, .3)",borderWidth:4,borderColor:"#55D8FE"},{label:"Vlhkos\u0165",data:a.props.humidity,fill:!0,backgroundColor:"rgba(163, 160, 251, .3)",borderWidth:4,borderColor:"#A3A0FB"},{label:"Osvietenos\u0165",data:a.props.brightness,fill:!0,backgroundColor:"rgba(94, 226, 160, .3)",borderWidth:4,borderColor:"#5EE2A0"}]}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:Q.a.Graph},n.a.createElement(U.a,{data:this.state.chartData,options:{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"}}}))}}]),t}(r.Component),K=a(87),V=a.n(K),Z=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:V.a.MainPage},n.a.createElement(J,{temperature:this.props.values.temperature[this.props.values.temperature.length-1],humidity:this.props.values.humidity[this.props.values.humidity.length-1],brightness:this.props.values.brightness[this.props.values.brightness.length-1]}),n.a.createElement(Y,{temperature:this.props.values.temperature,humidity:this.props.values.humidity,brightness:this.props.values.brightness,time:this.props.values.times}))}}]),t}(r.Component),$=a(88),X=a.n($).a.create({baseURL:"https://iot.gjar-po.sk/"}),ee=a(33),te=a.n(ee),ae=function(){return n.a.createElement("div",{className:te.a.spinner},n.a.createElement("div",{className:te.a.cube1}),n.a.createElement("div",{className:te.a.cube2}))},re=a(89),ne=a.n(re),oe=function(e){return n.a.createElement("div",{className:ne.a.errDiv},n.a.createElement("p",null,e.errMessage))},ce=a(15),ie=a(18),se=a.n(ie),le=a(90),ue=a.n(le),me=function(){return n.a.createElement("div",{className:se.a.whitebox},n.a.createElement("div",{className:se.a.aboutProject},n.a.createElement("div",{className:se.a.image},n.a.createElement("img",{src:ue.a,alt:"wemos"})),n.a.createElement("div",{className:se.a.aboutProjectText},n.a.createElement("p",null,"Cie\u013eom tohto projektu je moderniz\xe1cia \u0161koly. V miestnostiach \u0161koly sa bude mera\u0165 teplota vzduchu, osvietenos\u0165 a vlkos\u0165."))),n.a.createElement("div",{className:se.a.about_us_title},"Na projekte pracovali:"),n.a.createElement("div",{className:se.a.about_us},n.a.createElement("div",null,n.a.createElement("h2",null,"Maro\u0161"),n.a.createElement("p",null,"Pracoval som na koncepte tohto projektu a hardware pre Node jednotky. M\xe1m 19 rokov a som absolvent Gymn\xe1zia J\xe1na Adama Raymana.")),n.a.createElement("div",null,n.a.createElement("h2",null,"Samo"),n.a.createElement("p",null,"Pracoval som na softv\xe9ri a spr\xe1ve servera. M\xe1m 20 rokov a som absolventom Gymn\xe1zia J\xe1na Adama Raymana.")),n.a.createElement("div",null,n.a.createElement("h2",null,"Daniel"),n.a.createElement("p",null,"Pracoval som na webstr\xe1nke. M\xe1m 17 rokov. Nav\u0161tevujem Gymn\xe1zium J\xe1na Adama Raymana v Pre\u0161ove a som \u017eiakom 3.D triedy.")),n.a.createElement("div",null,n.a.createElement("h2",null,"Miro"),n.a.createElement("p",null,"Pracoval som na softv\xe9ri pre Node. M\xe1m 18 rokov. Nav\u0161tevujem Gymn\xe1zium J\xe1na Adama Raymana v Pre\u0161ove a som \u017eiakom 4.C triedy."))))},ve=a(14),de=a.n(ve),pe=(a(208),function(e){return e.format("YYYY-MM-DD")}),be=de()().format("LTS"),he=de()().subtract(3,"hours"),_e=pe(de()(he)),ge=pe(de()()),Ee=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={activeNav:!1,activeRoom:"Byt (29)",activeRoomNumber:null,values:{temperature:[],humidity:[],brightness:[],times:[]},render:!1,serverError:!1,errMessage:null},a.hamburgerButtonClickedHandler=function(){a.setState(function(){return{activeNav:!a.state.activeNav}})},a.changeActiveRoomHandler=function(e,t){var r={room:t,time:{"time-from":"".concat(_e," ").concat(de()(he).format("LTS")),"time-to":"".concat(ge," ").concat(be)}};a.state.activeRoomNumber===t&&null!==a.state.activeRoomNumber||(a.setState({activeRoom:e,activeRoomNumber:t,render:!1,serverError:!1,errMessage:null}),!0===a.state.activeNav&&a.setState({activeNav:!a.state.activeNav}),X({method:"POST",data:r,url:"api/v1/view",headers:{"content-type":"application/json","cache-control":"no-cache"}}).then(function(e){a.processResponse(e)}).catch(function(e){a.setState({render:!1,serverError:!0,errMessage:e.message})}))},a.processResponse=function(e){if(e.data.data.length<=0)a.setState({errMessage:"No Data",serverError:!0,render:!1});else{for(var t=[],r=[],n=[],o=[],c=0;c<e.data.data.length;c++){var i=e.data.data[c].time.split(" ",2)[1].split(":",2),s=i[0]+":"+i[1];t.push(parseFloat(e.data.data[c].temperature).toFixed(2)),r.push(parseFloat(e.data.data[c].humidity).toFixed(2)),n.push(parseFloat(e.data.data[c].brightness).toFixed(2)),o.push(s)}a.setState({values:{temperature:t,humidity:r,brightness:n,times:o},render:!0,serverError:!1})}},a.aboutProjectClickHandler=function(){a.setState({activeRoom:"O projekte",activeRoomNumber:null}),!0===a.state.activeNav&&a.setState({activeNav:!a.state.activeNav})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.changeActiveRoomHandler("Byt (29)",16)}},{key:"render",value:function(){var e=n.a.createElement(ae,null);return this.state.serverError?e=n.a.createElement(oe,{errMessage:this.state.errMessage}):this.state.serverError||this.state.render?this.state.render&&(e=n.a.createElement(Z,{activeRoomNumber:this.state.activeRoomNumber,values:this.state.values,render:this.state.render})):e=n.a.createElement(ae,null),n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:d.a.Navbar},n.a.createElement(E,{click:this.hamburgerButtonClickedHandler,active:this.state.activeNav,title:this.state.activeRoom})),n.a.createElement("main",{className:d.a.Content},n.a.createElement(ce.a,{path:"/",exact:!0,render:function(){return e}}),n.a.createElement(ce.a,{path:"/about-project",exact:!0,component:me})),n.a.createElement(O,{aboutProjectClick:this.aboutProjectClickHandler,click:this.changeActiveRoomHandler}),n.a.createElement(C,{aboutProjectClick:this.aboutProjectClickHandler,active:this.state.activeNav,clicked:this.hamburgerButtonClickedHandler,click:this.changeActiveRoomHandler}),n.a.createElement(B,{show:this.state.activeNav,clicked:this.hamburgerButtonClickedHandler}))}}]),t}(r.Component);var ke=function(){return n.a.createElement(N.a,null,n.a.createElement(Ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},21:function(e,t,a){e.exports={hamburger:"HamburgerButton_hamburger__64Akx",isactive:"HamburgerButton_isactive__1AQG7",hamburgerinner:"HamburgerButton_hamburgerinner__1itlo",hamburgerbox:"HamburgerButton_hamburgerbox__3h85a",hamburgersqueeze:"HamburgerButton_hamburgersqueeze__4lISa"}},25:function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__3smbF",CloseBtn:"SideDrawer_CloseBtn__1HUd5",Active:"SideDrawer_Active__3imPz"}},32:function(e,t,a){e.exports={GjarIot:"Navbar_GjarIot__2Qttq",Activeroom:"Navbar_Activeroom__xz8mC",HamburgerButton:"Navbar_HamburgerButton__3fc73"}},33:function(e,t,a){e.exports={spinner:"Loader_spinner__Qmy01",cube1:"Loader_cube1__3c88C",cube2:"Loader_cube2__239Wu","sk-cubemove":"Loader_sk-cubemove__2gTsA"}},44:function(e,t,a){e.exports={Content:"Layout_Content__13egM",Navbar:"Layout_Navbar__1xjZI",ErrMessage:"Layout_ErrMessage__11vPr"}},47:function(e,t,a){e.exports={DesktopSideDrawer:"DesktopSideDrawer_DesktopSideDrawer__iIxTO"}},48:function(e,t,a){e.exports={Icon:"Box_Icon__cWBqO",Whitebox:"Box_Whitebox__1lIf3"}},79:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3459l"}},80:function(e,t,a){e.exports=a.p+"static/media/bluechart.1e9aebf7.svg"},81:function(e,t,a){e.exports=a.p+"static/media/greenchart.dcd133bc.svg"},82:function(e,t,a){e.exports=a.p+"static/media/purplechart.cce984ae.svg"},83:function(e,t,a){e.exports={Boxes:"Boxes_Boxes__121GO"}},86:function(e,t,a){e.exports={Graph:"Graph_Graph__3Kd4d"}},87:function(e,t,a){e.exports={MainPage:"MainPage_MainPage__GgwGw"}},89:function(e,t,a){e.exports={errDiv:"ErrorDiv_errDiv__3MB5Q"}},90:function(e,t,a){e.exports=a.p+"static/media/wemos.4187a81e.jpg"},92:function(e,t,a){e.exports=a(209)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.6df3daaf.chunk.js.map