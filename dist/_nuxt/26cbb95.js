(window.webpackJsonp=window.webpackJsonp||[]).push([[22,6,9],{398:function(t,e,n){var content=n(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(133).default)("5407a9e3",content,!0,{sourceMap:!1})},402:function(t,e,n){"use strict";n(398)},403:function(t,e,n){var o=n(132)((function(i){return i[1]}));o.push([t.i,".top-nav[data-v-078c4029]{background-color:#4b4a4a;color:#fff}.nav-title[data-v-078c4029]{font-size:24px;padding:20px 0}.nav-menu[data-v-078c4029],.nav-title[data-v-078c4029]{text-align:center}",""]),o.locals={},t.exports=o},406:function(t,e,n){"use strict";n.r(e);var o={name:"choose",data:function(){return{activeIndex:""}},methods:{handleSelect:function(t,e){this.$router.push(t),this.activeIndex=t}}},l=(n(402),n(50)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-nav"},[e("el-header",[e("div",{staticClass:"nav-title"},[e("span",[t._v("Dormitory Selection System")])]),t._v(" "),e("el-menu",{staticClass:"nav-menu",attrs:{mode:"horizontal","default-active":t.activeIndex},on:{select:t.handleSelect}},[e("el-menu-item",{attrs:{index:"/person"}},[e("i",{staticClass:"el-icon-house"}),t._v(" "),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("首页")])]),t._v(" "),e("el-menu-item",{attrs:{index:"/Dorm"}},[e("i",{staticClass:"el-icon-info"}),t._v(" "),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("宿舍选择")])]),t._v(" "),e("el-menu-item",{attrs:{index:"/DormView"}},[e("i",{staticClass:"el-icon-search"}),t._v(" "),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("查看宿舍")])]),t._v(" "),e("el-menu-item",{attrs:{index:"/Group"}},[e("i",{staticClass:"el-icon-phone"}),t._v(" "),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("加入群聊")])]),t._v(" "),e("el-menu-item",{attrs:{index:"/Map"}},[e("i",{staticClass:"el-icon-phone"}),t._v(" "),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("查看地图")])])],1)],1)],1)}),[],!1,null,"078c4029",null);e.default=component.exports},407:function(t,e,n){var content=n(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(133).default)("3081a03a",content,!0,{sourceMap:!1})},414:function(t,e,n){t.exports=n.p+"img/house.ab0d2ca.png"},415:function(t,e,n){"use strict";n(407)},416:function(t,e,n){var o=n(132)((function(i){return i[1]}));o.push([t.i,".map-container-wrapper[data-v-5fb13ba3]{align-items:center;display:flex;justify-content:center}.map-container[data-v-5fb13ba3]{background-color:#fff;border:#b3d1c8}.header-style[data-v-5fb13ba3]{background-color:#fff;text-transform:capitalize}.title-style[data-v-5fb13ba3]{color:#006400}",""]),o.locals={},t.exports=o},420:function(t,e,n){"use strict";n.r(e);n(20),n(40),n(51);var o=n(401),l=n.n(o),r={name:"AMap",props:{dormArea:String,dormBuilding:String,newDorm:["reset-selection"]},data:function(){return{mapWidth:"80%",mapHeight:"600px",margin:"0",position:"justify",newLabelsData:[],isLoaded:!1,showBuilding:!1,currentBuilding:"",currentZone:"",currentDescription:"",currentImage:null}},mounted:function(){var t=this;this.initMap(),window._AMapSecurityConfig={securityJsCode:"6dcf279b3051f93ca87a74cf70cca816"},l.a.get("http://8.138.105.61/api/builds/").then((function(e){t.APIFormData=e.data,t.APIFormData.forEach((function(o){console.log("Received data"),console.log(e.data);o.id;var l=o.name,r=o.photo,c=o.zone,d=o.buildingDetails,f={name:c+" "+l,area:c,building:l,position:[o.xlocation,o.ylocation],zooms:[3,20],opacity:1,zIndex:5,visible:!0,icon:{type:"image",image:n(414),size:[64,64],anchor:"center"},photo:r,buildingDetails:d,text:{content:c+" "+l+" Building",direction:"right",offset:[-100,40],style:{backgroundColor:"white",borderColor:"#fff",fontSize:16,fontWeight:"bold",fillColor:"black",strokeWidth:2}}};t.newLabelsData.push(f)})),t.showForm=!0})).catch((function(e){t.APIFormData="",t.error=e.message||"An error occurred"}))},methods:{loadMap:function(){this.isLoaded=!0},handleRoute:function(){this.$router.push({name:"DormView",params:{zone:this.currentZone,building:this.currentBuilding}})},handleCloseBuilding:function(){this.showBuilding=!1},selectDorm:function(t){this.showBuilding=!0,this.currentZone=t.area,this.currentBuilding=t.building,this.currentImage=t.photo,this.currentDescription=t.buildingDetails,console.log(t.area,t.building)},resetSelection:function(){},initMap:function(){var t=this,script=document.createElement("script");script.src="//webapi.amap.com/maps?v=2.0&key=20db94d3028c1d2472ae4f29ab518e4b&plugin=AMap.ControlBar,AMap.ToolBar",script.async=!0,script.onload=function(){var map=new AMap.Map("map-container",{rotateEnable:!0,pitchEnable:!0,zoom:17,pitch:50,rotation:-15,viewMode:"3D",zooms:[2,20],center:[113.99913918407441,22.60212445711336]});new AMap.ControlBar({position:{right:"10px",top:"10px"}}).addTo(map),new AMap.ToolBar({position:{right:"40px",top:"110px"}}).addTo(map);var e=t.newLabelsData;console.log(e);for(var n,o=[],l=new AMap.LabelsLayer({zooms:[3,20],zIndex:1e3,allowCollision:!1}),r=function(){var l=e[i];l.extData={index:i},console.log(l),(n=new AMap.LabelMarker(l)).on("click",(function(){t.selectDorm(l)})),o.push(n)},i=0;i<e.length;i++)r();l.add(o),map.add(l)},document.head.appendChild(script)}}},c=(n(415),n(50)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"map-container"},[e("h1",{staticClass:"title-style"},[t._v("Search Dormitory on This Map!")]),t._v(" "),e("div",{staticClass:"map-container-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:null==t.dormArea||null==t.dormBuilding,expression:"dormArea == null || dormBuilding == null"}],style:{width:t.mapWidth,height:t.mapHeight},attrs:{id:"map-container"}}),t._v(" "),e("el-dialog",{attrs:{visible:t.showBuilding,"close-on-click-modal":!0,"close-on-press-escape":!0,"before-close":t.handleCloseBuilding},on:{"update:visible":function(e){t.showBuilding=e}}},[e("div",{staticClass:"floor-plan-image"},[e("div",[e("h1",{staticClass:"header-style"},[t._v(t._s(t.currentZone+" "+t.currentBuilding))]),t._v(" "),e("img",{attrs:{src:t.currentImage,alt:"@/static/dorm/noimage.png"}}),t._v(" "),e("p",[t._v(t._s(t.currentDescription))])]),t._v(" "),e("el-button",{on:{click:t.handleRoute}},[t._v("Details")])],1)])],1)])}),[],!1,null,"5fb13ba3",null);e.default=component.exports},446:function(t,e,n){var content=n(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(133).default)("59649097",content,!0,{sourceMap:!1})},518:function(t,e,n){"use strict";n(446)},519:function(t,e,n){var o=n(132)((function(i){return i[1]}));o.push([t.i,"#app{color:#2c3e50;font-family:Avenir,Helvetica,Arial,sans-serif;margin-top:60px;text-align:center}.flex-container{display:flex;flex-direction:column}.flex-item{align-items:center;justify-content:center;margin-bottom:20px}",""]),o.locals={},t.exports=o},554:function(t,e,n){"use strict";n.r(e);var o={},l=(n(518),n(50)),component=Object(l.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"flex-container",attrs:{id:"app"}},[t("div",{staticClass:"flex-item"},[t("choose")],1),this._v(" "),t("div",{staticClass:"flex-item"},[t("AMapTest")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Choose:n(406).default,AMapTest:n(420).default})}}]);