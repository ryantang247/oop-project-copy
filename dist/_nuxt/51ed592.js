(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,6],{399:function(t,e,o){var content=o(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(133).default)("4a784edb",content,!0,{sourceMap:!1})},403:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this._self._c;this._self._setupProxy;return t("div",{staticClass:"logo"},[t("img",{attrs:{src:o(405),alt:"Company Logo"}})])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("li",[e("a",{attrs:{href:"/"}},[t._v("Home")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("li",[e("a",{attrs:{href:"/Contact"}},[t._v("Contact")])])}],r={__name:"Header",setup:function(t){return{__sfc:!0}}},l=(o(406),o(50)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("header",[t._m(0),t._v(" "),e("nav",[e("ul",[t._m(1),t._v(" "),e("li",[e("NuxtLink",{attrs:{to:"/Dorm"}},[t._v("Select Dorm")])],1),t._v(" "),t._m(2)])])])}),n,!1,null,"6db0a185",null);e.default=component.exports;installComponents(component,{Header:o(403).default})},405:function(t,e,o){t.exports=o.p+"img/logo_sustech_long.f1fa520.png"},406:function(t,e,o){"use strict";o(399)},407:function(t,e,o){var n=o(132)((function(i){return i[1]}));n.push([t.i,'header[data-v-6db0a185]{align-items:center;background-color:#fff;display:flex;justify-content:space-between;padding:10px 0}.logo img[data-v-6db0a185]{max-height:50px}nav ul[data-v-6db0a185]{display:flex;list-style:none}nav li[data-v-6db0a185]{margin-right:20px}nav a[data-v-6db0a185]{color:#333;font-family:"Roboto",sans-serif;font-size:16px;font-weight:700;-webkit-text-decoration:none;text-decoration:none}',""]),n.locals={},t.exports=n},416:function(t,e,o){"use strict";o.r(e);var n={name:"AMap",data:function(){return{mapWidth:"80%",mapHeight:"500px",margin:"0",position:"justify"}},mounted:function(){this.initMap(),window._AMapSecurityConfig={securityJsCode:"6dcf279b3051f93ca87a74cf70cca816"}},methods:{initMap:function(){var script=document.createElement("script");script.src="//webapi.amap.com/maps?v=2.0&key=20db94d3028c1d2472ae4f29ab518e4b&plugin=AMap.ControlBar,AMap.ToolBar",script.async=!0,script.onload=function(){var map=new AMap.Map("map-container",{rotateEnable:!0,pitchEnable:!0,zoom:17,pitch:50,rotation:-15,viewMode:"3D",zooms:[2,20],center:[113.99913918407441,22.60212445711336]});new AMap.ControlBar({position:{right:"10px",top:"10px"}}).addTo(map),new AMap.ToolBar({position:{right:"40px",top:"110px"}}).addTo(map);var t={fontSize:12,fontWeight:"normal",fillColor:"#22886f",strokeColor:"#fff",strokeWidth:2,fold:!0,padding:"2, 5"},e={type:"image",image:"https://a.amap.com/jsapi_demos/static/demo-center/marker/express2.png",size:[64,30],anchor:"center"},o=[{name:"湖畔11栋",position:[113.99913918407441,22.60212445711336],zooms:[10,20],opacity:1,zIndex:10,fold:!0,houseIcon:e,text:{content:"湖畔11栋",direction:"right",offset:[-20,-5],style:{fontSize:12,fillColor:"#22886f",strokeColor:"#fff",strokeWidth:2,fold:!0,padding:"2, 5"}}},{name:"湖畔12栋",position:[113.99970781238557,22.60249588729417],zooms:[10,20],opacity:1,zIndex:16,houseIcon:e,text:{content:"湖畔12栋",direction:"right",offset:[-20,-5],style:t}},{name:"湖畔13栋",position:[113.99953078659058,22.601594548320616],zooms:[10,20],opacity:1,zIndex:8,houseIcon:e,text:{content:"湖畔13栋",direction:"right",offset:[-20,-5],style:t}},{name:"湖畔15栋",position:[114.0004159155655,22.602169028788456],zooms:[10,20],opacity:1,zIndex:23,houseIcon:e,text:{content:"湖畔15栋",direction:"right",offset:[-20,-5],style:t}},{name:"荔园1栋",position:[114.00006186397553,22.604060835446735],zooms:[10,20],opacity:1,zIndex:6,houseIcon:e,text:{content:"荔园1栋",direction:"right",offset:[-20,-5],style:t}},{name:"荔园2栋",position:[114.00012623699189,22.604387689460186],zooms:[10,20],opacity:1,zIndex:5,houseIcon:e,text:{content:"荔园2栋",direction:"right",offset:[-20,-5],style:t}}],n=[],r=new AMap.LabelsLayer({zooms:[3,20],zIndex:1e3,allowCollision:!1});r.add(n),map.add(r);for(var i=0;i<o.length;i++){var l=o[i];l.extData={index:i};var c=new AMap.LabelMarker(l);n.push(c)}c.on("click",(function(t){var e=o[t.target.getExtData().index];console.log("Clicked Data:",e)})),r.add(n)},document.head.appendChild(script)}}},r=o(50),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{style:{width:t.mapWidth,height:t.mapHeight},attrs:{id:"map-container"}})])}),[],!1,null,null,null);e.default=component.exports},420:function(t,e,o){"use strict";o.r(e);var n={name:"IndexPage"},r=o(50),component=Object(r.a)(n,(function(){var t=this._self._c;return t("div",[t("Header"),this._v(" "),t("AMapTest")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(403).default,AMapTest:o(416).default})}}]);