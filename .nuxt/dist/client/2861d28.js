(window.webpackJsonp=window.webpackJsonp||[]).push([[2,12],{412:function(e,t,o){e.exports=o.p+"img/dorm1.5f2101c.jpg"},413:function(e,t,o){e.exports=o.p+"img/dorm2.11af49f.jpg"},419:function(e,t,o){var content=o(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(133).default)("62126af4",content,!0,{sourceMap:!1})},423:function(e,t,o){e.exports=o.p+"img/location.fee0855.png"},424:function(e,t,o){e.exports=o.p+"img/samplefloorplan.f834ea7.png"},425:function(e,t,o){"use strict";o(419)},426:function(e,t,o){var l=o(132)((function(i){return i[1]}));l.push([e.i,'.title-container[data-v-781c2cce]{font-family:"Arial Black",sans-serif}.icon-style[data-v-781c2cce]{height:50px;margin-top:15px;width:50px}.title-styles[data-v-781c2cce]{border-bottom:2px solid #ccc;color:#000;font-size:20px;padding-bottom:5px;text-transform:capitalize}.image[data-v-781c2cce]{height:200px;margin-top:20px;width:200px}.el-card[data-v-781c2cce]:hover{background:#d3d3d3;box-shadow:0 0 10px rgba(0,0,0,.5);cursor:pointer}.card-content-container[data-v-781c2cce]{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center}.location-head-style[data-v-781c2cce]{margin-bottom:0;margin-top:10px}.show-floor-plan[data-v-781c2cce]{text-align:right}.floor-plan-image[data-v-781c2cce]{max-width:100%;position:relative}.floor-plan-image img[data-v-781c2cce]{height:auto;-o-object-fit:cover;object-fit:cover;width:100%}.building-floor-style[data-v-781c2cce]{margin-left:20px;margin-right:20px}.building-header[data-v-781c2cce]{border-bottom:1px solid #000;display:inline-block;font-size:30px;margin-bottom:20px;margin-top:20px}.desc[data-v-781c2cce]{text-align:center}.floor-header[data-v-781c2cce]{display:inline-block;font-size:20px;margin-bottom:20px}.room-container[data-v-781c2cce]{margin-left:60px;margin-right:60px}.collection-header[data-v-781c2cce]{text-align:center}',""]),l.locals={},e.exports=l},440:function(e,t,o){var content=o(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(133).default)("525722ea",content,!0,{sourceMap:!1})},459:function(e,t,o){"use strict";o.r(t);o(52);var l=o(401),r=o.n(l),n=o(183),c={name:"RoomDisplay",props:{filteredData:{type:Array,required:!0}},data:function(){return{data:this.filteredData,roomId:null,showComment:!1,showFloorPlan:!1,showGroups:!1,displayRoom:!0}},watch:{filteredData:function(e,t){console.log("Prop changed for filtered Data: ",e," old data was: ",t),console.log(e),this.data=e,this.handleDataChange(e)}},computed:{handleRoom:function(){}},methods:{handleCloseFloorPlan:function(e){console.log("Closing floor plan dialog."),this.showFloorPlan=!1,e()},handleReceiveComment:function(){this.showComment=!1},collectRoom:function(e){r.a.post("http://8.138.105.61/api/book-dorm/",{id:e}).then((function(e){n.MessageBox.alert("Room successfully collected to user！.","Alert",{confirmButtonText:"Back",type:"warning"})}))},handleComment:function(e){console.log("selected Room",e),this.showComment=!0,this.roomId=e},getImageSrc:function(e){return"quadruple_room"===e?o(412):"single_room"===e?o(413):void 0},handleDataChange:function(e){console.log("Handling data change:",e)}}},d=(o(425),o(50)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",[0!==e.filteredData.length?t("div",e._l(Object.keys(this.filteredData),(function(l){return t("div",[t("div",{staticClass:"title-container"},[t("el-row",{staticClass:"title-styles"},[t("el-col",{attrs:{span:2}},[t("img",{staticClass:"icon-style",attrs:{src:o(423),alt:"@/static/dorm/location.png"}})]),e._v(" "),t("el-col",{attrs:{span:6}},[t("h1",{staticClass:"location-head-style"},[e._v(e._s(l))])])],1)],1),e._v(" "),t("div",{staticClass:"building-floor-style"},e._l(Object.keys(e.filteredData[l]),(function(o){return e.filteredData[l]?t("div",{key:o},[t("div",[t("h2",{staticClass:"building-header"},[e._v("Building "+e._s(o))]),e._v(" "),t("ElCarousel",{attrs:{height:"500px",arrow:"always",trigger:"click"}},e._l(Object.keys(e.filteredData[l][o]),(function(r){return t("ElCarouselItem",{key:r},[t("div",[t("el-row",[t("el-col",{attrs:{span:4}},[t("h2",{staticClass:"floor-header"},[e._v("Floor "+e._s(r))])]),e._v(" "),t("el-col",{staticClass:"show-floor-plan",attrs:{span:18}},[t("el-button",{on:{click:function(t){e.showFloorPlan=!0}}},[e._v("View Floor plan")])],1)],1),e._v(" "),t("el-row",{staticClass:"room-container"},e._l(e.filteredData[l][o][r],(function(o){return t("el-col",{key:o.id,attrs:{span:4}},[t("el-card",{attrs:{"body-style":{padding:"0px"}}},[t("div",{staticClass:"card-content-container"},[t("img",{staticClass:"image",attrs:{src:e.getImageSrc(o.type),alt:""},on:{click:function(t){return e.handleComment(o.id)}}}),e._v(" "),t("h2",[e._v(e._s(o.roomNumber))]),e._v(" "),t("h2",[e._v(e._s(o.type))]),e._v(" "),t("p",{staticClass:"collection-header",on:{click:function(t){return e.collectRoom(o.id)}}},[e._v("收藏")])])])],1)})),1)],1)])})),1)],1)]):e._e()})),0)])})),0):t("div",[t("p",{staticClass:"desc"},[e._v("No results :(")])]),e._v(" "),t("CommentSection",{attrs:{dialogVisible:this.showComment,"room-id":this.roomId},on:{closeComment:e.handleReceiveComment}}),e._v(" "),t("el-dialog",{attrs:{visible:e.showFloorPlan,"close-on-click-modal":!0,"close-on-press-escape":!0,"before-close":e.handleCloseFloorPlan},on:{"update:visible":function(t){e.showFloorPlan=t}}},[t("div",{staticClass:"floor-plan-image"},[t("h1",[e._v("Floor plan")]),e._v(" "),t("img",{attrs:{src:o(424),alt:"@/static/samplefloorplan.png"}})])])],1)}),[],!1,null,"781c2cce",null);t.default=component.exports;installComponents(component,{CommentSection:o(460).default})},484:function(e,t,o){"use strict";o(440)},485:function(e,t,o){var l=o(132)((function(i){return i[1]}));l.push([e.i,".filter-style[data-v-46a5e7e9]{margin-left:20px;margin-right:20px}.demo-date-picker[data-v-46a5e7e9]{display:flex;flex-wrap:wrap;padding:0;width:100%}.demo-date-picker .block[data-v-46a5e7e9]{border-right:1px solid;flex:1;padding:30px 0;text-align:center}.demo-date-picker .block[data-v-46a5e7e9]:last-child{border-right:none}.demo-date-picker .demonstration[data-v-46a5e7e9]{color:grey;display:block;font-size:14px;margin-bottom:20px}.el-radio-group[data-v-46a5e7e9]{margin-top:10px}",""]),l.locals={},e.exports=l},545:function(e,t,o){"use strict";o.r(t);o(52),o(20),o(40),o(72),o(56),o(51),o(75),o(43),o(27),o(41),o(71),o(78),o(44);var l=o(401),r=o.n(l),n=o(0);function c(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var i=0,l=function(){};return{s:l,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n=!0,c=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return n=e.done,e},e:function(e){c=!0,r=e},f:function(){try{n||null==o.return||o.return()}finally{if(c)throw r}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}var h={build:{extend:function(e,t){t.isClient&&(e.devtool="source-map")}},props:{receivedZone:null,receivedBuilding:null},name:"DormFilter",watch:{receivedZone:function(e,t){this.locationFilter=e,console.log("Prop changed for receivedZone: ",e," | was: ",t)},receivedBuilding:function(e,t){this.filterBuilding=e,console.log("Prop changed for receivedBuilding: ",e," | was: ",t),this.locationFilter&&this.filterBuilding?(console.log("Able to filter!"),console.log(this.hierarchicalData),this.filterData()):console.log("Unable to filter")},timeRange:function(e,t){console.log("Time picked: ",e)}},data:function(){return{APIFormData:"",hierarchicalData:[],filteredData:[],filterBuilding:null,locationFilter:null,timeRange:null,floorFilter:null,floorNumber:0,showForm:!1,gender:null,studentType:null,roomType:{single_room:Object(n.ref)(!0),quadruple_room:Object(n.ref)(!0),double_room:Object(n.ref)(!1)}}},methods:{handleLocationChange:function(){console.log(this.locationFilter),this.filterBuilding=null,this.floorFilter=null},filterData:function(){var e={};for(var t in console.log("Filter Data is called"),this.hierarchicalData)if(console.log(t),null==this.locationFilter||t===this.locationFilter){for(var o in e[t]={},this.hierarchicalData[t])if(null==this.filterBuilding||o===this.filterBuilding){for(var l in e[t][o]={},this.hierarchicalData[t][o])if(null==this.floorFilter||l===this.floorFilter){e[t][o][l]=[];var r,n=c(this.hierarchicalData[t][o][l]);try{for(n.s();!(r=n.n()).done;){var d=r.value,h="male"===d.sex?1:2,f=null===this.gender||h===this.gender,m=null===this.timeRange||new Date(this.timeRange[0])>=new Date(d.start)&&new Date(this.timeRange[1])<=new Date(d.end),v=null===this.studentType||this.studentType===d.degree,_=this.roomType.single_room&&"single_room"===d.type,y=this.roomType.double_room&&"double_room"===d.type,x=this.roomType.quadruple_room&&"quadruple_room"===d.type;f&&(_||y||x)&&m&&v?e[t][o][l].push(d):(console.log("Room not put:"),console.log(d))}}catch(e){n.e(e)}finally{n.f()}console.log("Floor length"),console.log(e[t][o][l].length),0===e[t][o][l].length&&delete e[t][o][l]}console.log("Building Length"),console.log(Object.keys(e[t][o]).length),0===Object.keys(e[t][o]).length&&delete e[t][o]}0===e[t].length&&delete e[t],console.log("Newly filtered Data"),console.log(e),this.filteredData=e}}},mounted:function(){var e=this;r.a.get("http://8.138.105.61/api/dorm-room/").then((function(t){e.APIFormData=t.data,e.APIFormData.forEach((function(t){var o=t.id,l=t.zone,r=t.building,n=t.type,c=t.floor,d=t.roomNumber,h=t.sex,f=t.start,m=t.end,v=t.degree;e.hierarchicalData[l]||(e.hierarchicalData[l]={}),e.hierarchicalData[l][r]||(e.hierarchicalData[l][r]={}),e.hierarchicalData[l][r][c]||(e.hierarchicalData[l][r][c]=[]),e.hierarchicalData[l][r][c].push({id:o,roomNumber:d,type:n,sex:h,start:f,end:m,degree:v})})),e.showForm=!0,e.filterData(),console.log("Done mounting")})).catch((function(t){e.APIFormData="",e.error=t.message||"An error occurred"}))}},f=(o(484),o(50)),component=Object(f.a)(h,(function(){var e=this,t=e._self._c;return e.showForm?t("div",[t("el-collapse",{},[t("el-collapse-item",{staticClass:"filter-style",attrs:{title:"点击筛洗",name:"1"}},[t("div",[t("el-row",[t("el-col",{attrs:{span:2}},[t("h3",[e._v("Location:")])]),e._v(" "),t("el-col",{attrs:{span:4}},[this.hierarchicalData?t("el-radio-group",{on:{change:e.handleLocationChange},model:{value:e.locationFilter,callback:function(t){e.locationFilter=t},expression:"locationFilter"}},e._l(Object.keys(this.hierarchicalData),(function(o){return t("el-radio",{key:o,attrs:{label:o}},[e._v(e._s(o))])})),1):e._e()],1),e._v(" "),t("el-col",{attrs:{span:3}},[t("h3",[e._v("Selection Date")])]),e._v(" "),t("el-col",{attrs:{span:8}},[t("div",{staticClass:"demo-date-picker"},[t("el-date-picker",{attrs:{type:"daterange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date",size:e.size},model:{value:e.timeRange,callback:function(t){e.timeRange=t},expression:"timeRange"}})],1)])],1)],1),e._v(" "),t("el-row",[e.locationFilter&&this.hierarchicalData[e.locationFilter]?t("el-col",{attrs:{span:10}},[t("el-row",[t("el-col",{attrs:{span:4}},[t("h3",[e._v("Building:")])]),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-select",{attrs:{value:"building",id:"filterBuilding","value-key":"id",placeholder:"Select Building"},model:{value:e.filterBuilding,callback:function(t){e.filterBuilding=t},expression:"filterBuilding"}},e._l(Object.keys(this.hierarchicalData[e.locationFilter]),(function(option){return t("el-option",{key:option,attrs:{label:option,value:option}})})),1)],1)],1)],1):t("el-col",{attrs:{span:8}},[t("el-row",[t("el-col",{attrs:{span:4}},[t("h3",[e._v("Building:")])]),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-select",{attrs:{value:"",id:"filterBuilding","value-key":"id",placeholder:"Select Floor"}},e._l([],(function(option){return t("el-option")})),1)],1)],1)],1),e._v(" "),t("el-col",{attrs:{span:3}},[t("h3",[e._v("Student Type")])]),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-radio-group",{model:{value:e.studentType,callback:function(t){e.studentType=t},expression:"studentType"}},[t("el-radio",{attrs:{value:"masters",label:1}},[e._v("Masters")]),e._v(" "),t("el-radio",{attrs:{value:"doctoral",label:2}},[e._v("Doctoral")])],1)],1),e._v(" "),this.hierarchicalData[e.locationFilter]&&this.hierarchicalData[e.locationFilter][e.filterBuilding]&&e.locationFilter&&e.filterBuilding?t("el-col",{attrs:{span:12}},[t("el-row",[t("el-col",{attrs:{span:4}},[t("h3",[e._v("Floor:")])]),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-select",{attrs:{value:"floor",id:"filterFloor","value-key":"id",placeholder:"Select Floor"},model:{value:e.floorFilter,callback:function(t){e.floorFilter=t},expression:"floorFilter"}},e._l(Object.keys(this.hierarchicalData[e.locationFilter][e.filterBuilding]),(function(option){return t("el-option",{key:option,attrs:{label:option,value:option}})})),1)],1)],1)],1):t("el-col",{attrs:{span:12}},[t("el-row",[t("el-col",{attrs:{span:4}},[t("h3",[e._v("Floor:")])]),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-select",{attrs:{value:"",id:"filterFloor","value-key":"id",placeholder:"Select Floor"}},e._l([],(function(option){return t("el-option")})),1)],1)],1)],1)],1),e._v(" "),t("div",[t("el-row",[t("el-col",{attrs:{span:2}},[t("h3",[e._v("Room Type:")])]),e._v(" "),t("el-col",{attrs:{span:10}},[t("div",{staticClass:"mt-4"},[t("el-checkbox",{attrs:{label:"Single",border:""},model:{value:e.roomType.single_room,callback:function(t){e.$set(e.roomType,"single_room",t)},expression:"roomType.single_room"}}),e._v(" "),t("el-checkbox",{attrs:{label:"Double",border:""},model:{value:e.roomType.double_room,callback:function(t){e.$set(e.roomType,"double_room",t)},expression:"roomType.double_room"}}),e._v(" "),t("el-checkbox",{attrs:{label:"Quadruple",border:""},model:{value:e.roomType.quadruple_room,callback:function(t){e.$set(e.roomType,"quadruple_room",t)},expression:"roomType.quadruple_room"}})],1)]),e._v(" "),t("el-col",{attrs:{span:2}},[t("h3",[e._v("Gender: ")])]),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-radio-group",{model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[t("el-radio",{attrs:{value:"male",label:1}},[e._v("Male")]),e._v(" "),t("el-radio",{attrs:{value:"female",label:2}},[e._v("Female")])],1)],1),e._v(" "),t("el-col",{attrs:{span:2}},[t("el-button",{on:{click:e.filterData}},[e._v("Filter!")])],1)],1)],1)],1)],1),e._v(" "),t("div",[t("RoomDisplay",{attrs:{"filtered-data":this.filteredData}})],1)],1):e._e()}),[],!1,null,"46a5e7e9",null);t.default=component.exports;installComponents(component,{RoomDisplay:o(459).default})}}]);