(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{416:function(o,t,e){"use strict";e.r(t);var n={name:"AMap",data:function(){return{mapWidth:"80%",mapHeight:"500px",margin:"0",position:"justify"}},mounted:function(){this.initMap(),window._AMapSecurityConfig={securityJsCode:"6dcf279b3051f93ca87a74cf70cca816"}},methods:{initMap:function(){var script=document.createElement("script");script.src="//webapi.amap.com/maps?v=2.0&key=20db94d3028c1d2472ae4f29ab518e4b&plugin=AMap.ControlBar,AMap.ToolBar",script.async=!0,script.onload=function(){var map=new AMap.Map("map-container",{rotateEnable:!0,pitchEnable:!0,zoom:17,pitch:50,rotation:-15,viewMode:"3D",zooms:[2,20],center:[113.99913918407441,22.60212445711336]});new AMap.ControlBar({position:{right:"10px",top:"10px"}}).addTo(map),new AMap.ToolBar({position:{right:"40px",top:"110px"}}).addTo(map);var o={fontSize:12,fontWeight:"normal",fillColor:"#22886f",strokeColor:"#fff",strokeWidth:2,fold:!0,padding:"2, 5"},t={type:"image",image:"https://a.amap.com/jsapi_demos/static/demo-center/marker/express2.png",size:[64,30],anchor:"center"},e=[{name:"湖畔11栋",position:[113.99913918407441,22.60212445711336],zooms:[10,20],opacity:1,zIndex:10,fold:!0,houseIcon:t,text:{content:"湖畔11栋",direction:"right",offset:[-20,-5],style:{fontSize:12,fillColor:"#22886f",strokeColor:"#fff",strokeWidth:2,fold:!0,padding:"2, 5"}}},{name:"湖畔12栋",position:[113.99970781238557,22.60249588729417],zooms:[10,20],opacity:1,zIndex:16,houseIcon:t,text:{content:"湖畔12栋",direction:"right",offset:[-20,-5],style:o}},{name:"湖畔13栋",position:[113.99953078659058,22.601594548320616],zooms:[10,20],opacity:1,zIndex:8,houseIcon:t,text:{content:"湖畔13栋",direction:"right",offset:[-20,-5],style:o}},{name:"湖畔15栋",position:[114.0004159155655,22.602169028788456],zooms:[10,20],opacity:1,zIndex:23,houseIcon:t,text:{content:"湖畔15栋",direction:"right",offset:[-20,-5],style:o}},{name:"荔园1栋",position:[114.00006186397553,22.604060835446735],zooms:[10,20],opacity:1,zIndex:6,houseIcon:t,text:{content:"荔园1栋",direction:"right",offset:[-20,-5],style:o}},{name:"荔园2栋",position:[114.00012623699189,22.604387689460186],zooms:[10,20],opacity:1,zIndex:5,houseIcon:t,text:{content:"荔园2栋",direction:"right",offset:[-20,-5],style:o}}],n=[],r=new AMap.LabelsLayer({zooms:[3,20],zIndex:1e3,allowCollision:!1});r.add(n),map.add(r);for(var i=0;i<e.length;i++){var c=e[i];c.extData={index:i};var d=new AMap.LabelMarker(c);n.push(d)}d.on("click",(function(o){var t=e[o.target.getExtData().index];console.log("Clicked Data:",t)})),r.add(n)},document.head.appendChild(script)}}},r=e(50),component=Object(r.a)(n,(function(){var o=this,t=o._self._c;return t("div",[t("div",{style:{width:o.mapWidth,height:o.mapHeight},attrs:{id:"map-container"}})])}),[],!1,null,null,null);t.default=component.exports}}]);