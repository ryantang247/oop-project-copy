(window.webpackJsonp=window.webpackJsonp||[]).push([[10,16],{404:function(e,o,t){var content=t(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(133).default)("21595d8c",content,!0,{sourceMap:!1})},409:function(e,o,t){"use strict";t.r(o);t(93);var r={name:"SliderCust",props:{hierarchicalData:{type:Array,required:!0},images:Array},data:function(){return{timer:null,currentIndex:0,selectedOption:null}},mounted:function(){this.startSlide()},methods:{startSlide:function(){this.timer=setInterval(this.nextSlide,1e4)},nextSlide:function(){this.currentIndex=(this.currentIndex+1)%this.images.length},prevSlide:function(){this.currentIndex=(this.currentIndex-1+this.images.length)%this.images.length},selectOption:function(){this.selectedOption=this.images[this.currentIndex].label,this.$emit("option-selected",this.images[this.currentIndex].value),clearInterval(this.timer)},resetSelection:function(){this.$emit("reset-options"),this.selectedOption=null,this.startSlide()}},computed:{currentImg:function(){return this.images[this.currentIndex].url}}},l=(t(410),t(50)),component=Object(l.a)(r,(function(){var e=this,o=e._self._c;return e.selectedOption?o("div",[o("el-col",{attrs:{span:6}},[o("p",[e._v(e._s(e.selectedOption))])]),e._v(" "),o("el-col",{staticClass:"custom-right",attrs:{span:18}},[o("button",{on:{click:e.resetSelection}},[e._v("Change Selection")])])],1):o("div",{staticClass:"slider-container"},[o("button",{staticClass:"prev",on:{click:function(o){return o.preventDefault(),e.prevSlide.apply(null,arguments)}}},[e._v("❮")]),e._v(" "),o("transition-group",{attrs:{name:"fade",tag:"div"}},[o("div",{key:e.currentIndex,on:{click:e.selectOption}},[o("img",{staticClass:"slider-image",attrs:{src:e.currentImg}}),e._v(" "),o("p",{staticClass:"tag-small"},[e._v(e._s(e.images[e.currentIndex].label))])])]),e._v(" "),o("button",{staticClass:"next",on:{click:function(o){return o.preventDefault(),e.nextSlide.apply(null,arguments)}}},[e._v("❯")])],1)}),[],!1,null,"adb5b78e",null);o.default=component.exports},410:function(e,o,t){"use strict";t(404)},411:function(e,o,t){var r=t(132)((function(i){return i[1]}));r.push([e.i,".custom-right[data-v-adb5b78e]{display:flex;justify-content:flex-end;margin-top:8px}.slider-container[data-v-adb5b78e]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;min-height:100px;position:relative}.image-container[data-v-adb5b78e]{flex-grow:1;text-align:center}.slider-image[data-v-adb5b78e]{height:auto;max-width:100%}.tag-small[data-v-adb5b78e]{background-color:rgba(0,0,0,.7);bottom:10px;font-size:16px;left:10px;margin:0;padding:10px 14px}.next[data-v-adb5b78e],.prev[data-v-adb5b78e],.tag-small[data-v-adb5b78e]{border-radius:4px;color:#fff;position:absolute;z-index:1}.next[data-v-adb5b78e],.prev[data-v-adb5b78e]{background-color:rgba(0,0,0,.6);border:none;cursor:pointer;font-size:18px;font-weight:700;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;top:50%;transform:translateY(-50%);transition:.7s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.next[data-v-adb5b78e]{border-radius:0 4px 4px 0;right:0}.prev[data-v-adb5b78e]{left:0}.next[data-v-adb5b78e]:hover,.prev[data-v-adb5b78e]:hover{background-color:rgba(0,0,0,.9)}button[data-v-adb5b78e]{background-color:#007bff;border:none;border-radius:25px;color:#fff;cursor:pointer;font-weight:700;padding:12px 24px;transition:background-color .3s}.fade-enter-active[data-v-adb5b78e]{transition:opacity .5s ease;transition-delay:.5s}.fade-leave-active[data-v-adb5b78e]{transition:opacity .5s ease}.fade-enter[data-v-adb5b78e],.fade-leave-to[data-v-adb5b78e]{opacity:0}",""]),r.locals={},e.exports=r},412:function(e,o,t){e.exports=t.p+"img/dorm1.5f2101c.jpg"},413:function(e,o,t){e.exports=t.p+"img/dorm2.11af49f.jpg"},417:function(e){e.exports=JSON.parse('{"roomTypes":{"single":{"label":"Single Room","image":"./dorm/dorm1.jpg"},"double":{"label":"Double Room","image":"./dorm/dorm2.jpg"},"quad":{"label":"Suite","image":"./dorm/dorm3.jpg"}},"comments":[{"id":1,"author":"trollolol","rating":0,"text":"This is the first comment","showreply":false,"addreply":false,"replies":[{"id":1,"author":"john","text":"Reply to the first comment"},{"id":2,"author":"lmao","text":"Another reply to the first comment"}]},{"id":2,"author":"ryant","rating":5,"text":"This is the second comment","showreply":false,"addreply":false,"replies":[{"id":1,"author":"lam123","text":"Reply to the second comment"}]},{"id":3,"author":"han","rating":4,"text":"This room smells like eggs","showreply":false,"addreply":false,"replies":[{"id":1,"author":"cons178","text":"Reply to the second comment"},{"id":2,"author":"123esther","text":"Yes!"}]},{"id":4,"author":"Martin","rating":2,"text":"Great post!","showreply":false,"addreply":false,"replies":[{"id":1,"author":"haha789","text":"Thanks!"},{"id":2,"author":"pukitai12","text":"I agree!"}]},{"id":5,"author":"johnny00","rating":4,"text":"Interesting room!","showreply":false,"addreply":false,"replies":[{"id":1,"author":"weiyao12","text":"Yes, it is!"},{"id":2,"author":"daniel99","text":"Tell me more!"}]},{"id":6,"author":"ronnie_ng","rating":3,"text":"nan ke da su she taikula","showreply":false,"addreply":false,"replies":[{"id":1,"author":"bananyeehaws","text":"que shi queshi!"},{"id":2,"author":"pops44","text":"I appreciate it."}]},{"id":7,"author":"jt_12","rating":2,"text":"Keep it up!","showreply":false,"addreply":false,"replies":[{"id":1,"author":"lol432","text":"I will!"},{"id":2,"author":"ffdas432","text":"You\'re doing great!"}]},{"id":8,"author":"pinoy88","rating":5,"text":"Nice Room!","showreply":false,"addreply":false,"replies":[{"id":1,"author":"thahnmihn211","text":"I will rent this!"},{"id":2,"author":"poilam43","text":"Yeehawwww!"}]},{"id":9,"author":"pinoybenar123","rating":3,"text":"Nak tukar wang lama, DM sya, old coin need now","showreply":false,"addreply":false,"replies":[{"id":1,"author":"hockf32","text":"DM"},{"id":2,"author":"gfsd876","text":"DM jga"}]}],"optionsTree":[{"label":"first phase","url":"./sustech/lakeside_dorm.jpg","value":"first phase","Building":[{"label":"B1","value":1,"Floors":[{"label":"F1","value":1,"Room":[{"roomNumber":101,"roomType":"single","roomStatus":true,"roomFor":"postdoc","comment":[1]},{"roomNumber":102,"roomType":"double","roomStatus":false,"roomFor":"postdoc","comment":[2,3]},{"roomNumber":130,"roomType":"quad","roomStatus":true,"roomFor":"master"},{"roomNumber":135,"roomType":"quad","roomStatus":true,"roomFor":"doctorate"}]},{"label":"F2","value":2,"Room":[{"roomNumber":201,"roomType":"single","comment":[4],"roomStatus":true,"roomFor":"master"},{"roomNumber":204,"roomType":"quad","roomStatus":false,"roomFor":"postdoc"}]}]},{"label":"B2","value":2,"Floors":[{"label":"F1","value":1,"Room":[{"roomNumber":101,"roomType":"single","roomStatus":true,"roomFor":"postdoc"},{"roomNumber":111,"roomType":"double","comment":[5],"roomStatus":true,"roomFor":"doctorate"},{"roomNumber":112,"roomType":"double","roomStatus":false,"roomFor":"master"}]},{"label":"F2","value":2,"Room":[{"roomNumber":201,"roomType":"single","roomStatus":false,"roomFor":"master"},{"roomNumber":209,"roomType":"single","roomStatus":false,"roomFor":"doctorate"},{"roomNumber":212,"roomType":"quad","comment":[6,7],"roomStatus":true,"roomFor":"master"}]}]},{"label":"B3","value":3,"Floors":[{"label":"F1","value":1,"Room":[{"roomNumber":201,"roomType":"single","roomStatus":true,"roomFor":"master"},{"roomNumber":209,"roomType":"single","comment":[8],"roomStatus":true,"roomFor":"master"},{"roomNumber":212,"roomType":"quad","roomStatus":true,"roomFor":"master"}]}]},{"label":"B4","value":4,"Floors":[{"label":"F1","value":"1","Room":[{"roomNumber":201,"roomType":"single","comment":[9],"roomStatus":true,"roomFor":"master"},{"roomNumber":209,"roomType":"single","roomStatus":false,"roomFor":"postdoc"},{"roomNumber":212,"roomType":"quad","roomStatus":true,"roomFor":"doctorate"}]},{"label":"F2","value":2,"Room":[{"roomNumber":201,"roomType":"single","roomStatus":true,"roomFor":"postdoc"},{"roomNumber":209,"roomType":"single","roomStatus":false,"roomFor":"postdoc"},{"roomNumber":212,"roomType":"quad","roomStatus":false,"roomFor":"doctorate"}]},{"label":"F2","value":3,"Room":[{"roomNumber":212,"roomType":"quad","roomStatus":true,"roomFor":"doctorate"}]}]}]},{"label":"lychee hill","url":"./sustech/lychee.jpg","value":"lychee hill"},{"label":"second phase","url":"./sustech/student_condo.jpg","value":"second phase","Building":[{"label":"B1","value":1,"position":[113.99913918407441,22.60212445711336],"Floors":[{"label":"F1","value":1,"Room":[{"roomNumber":1,"roomType":"single","roomStatus":true,"roomFor":"doctorate"},{"roomNumber":2,"roomType":"single","roomStatus":true,"roomFor":"doctorate"},{"roomNumber":3,"roomType":"single","comment":[6,7],"roomStatus":true,"roomFor":"doctorate"},{"roomNumber":4,"roomType":"single","roomStatus":true,"roomFor":"postdoc"},{"roomNumber":5,"roomType":"single","roomStatus":true,"roomFor":"masters"},{"roomNumber":6,"roomType":"single","comment":[6,7],"roomStatus":false,"roomFor":"doctorate"}]},{"label":"F2","value":2,"Room":[{"roomNumber":1,"roomType":"single","roomStatus":true,"roomFor":"psotdoc"},{"roomNumber":2,"roomType":"single","roomStatus":false,"roomFor":"master"},{"roomNumber":3,"roomType":"single","roomStatus":true,"roomFor":"doctorate"}]}]},{"label":"B2","value":2,"Floors":[{"label":"F1","value":1,"Room":[{"roomNumber":1,"roomType":"single","roomStatus":false,"roomFor":"doctorate"},{"roomNumber":2,"roomType":"single","roomStatus":true,"roomFor":"doctorate"},{"roomNumber":3,"roomType":"single","roomStatus":true,"roomFor":"doctorate"},{"roomNumber":4,"roomType":"single","roomStatus":true,"roomFor":"doctorate"},{"roomNumber":5,"roomType":"single","roomStatus":true,"roomFor":"doctorate"},{"roomNumber":6,"roomType":"single","comment":[6,7],"roomStatus":true,"roomFor":"doctorate"}]}]}]}]}')},418:function(e,o,t){var content=t(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(133).default)("34a67bb2",content,!0,{sourceMap:!1})},421:function(e,o,t){"use strict";t(418)},422:function(e,o,t){var r=t(132)((function(i){return i[1]}));r.push([e.i,"label{color:#333;display:block;font-weight:700;margin-bottom:8px;margin-top:8px}.form-select{border-radius:4px;font-size:16px;width:100%}.list-image{cursor:pointer;height:auto;margin:20px;position:relative;width:100px}.list-description{flex:1}.list-description h3{font-size:18px;margin:0}.list-description p{font-size:14px}.right-room{display:flex;justify-content:end;margin-top:8px}button{background-color:#007bff;border:none;border-radius:25px;color:#fff;cursor:pointer;font-weight:700;padding:12px 24px;transition:background-color .3s}",""]),r.locals={},e.exports=r},458:function(e,o,t){"use strict";t.r(o);t(52),t(182),t(55),t(72);var r=t(417),l={components:{SliderCust:t(409).default},option1:0,props:{id:String,label:String,options:Array,hierarchicalData:{type:Array,required:!0}},watch:{selectedZone:"emitSelectedOptions",selectedOption2:"emitSelectedOptions",selectedOption3:"emitSelectedOptions",selectedOption4:"emitSelectedOptions"},data:function(){return{optionsTree:r.optionsTree,selectedZone:null,selectedOption2:null,selectedOption3:null,selectedOption4:null}},methods:{getImageSrc:function(e){return"quadruple_room"===e?t(412):"single_room"===e?t(413):void 0},emitSelectedOptions:function(){this.$emit("selected-options",{roomId:this.selectedOption4})},handleWord:function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},handleChange:function(option){this.selectedZone=option,console.log("Contents of hierarchicalData:",this.hierarchicalData),console.log("Contents of hierarchicalData[selectedZone]:",this.hierarchicalData[this.selectedZone]),console.log("Selected Location:",this.selectedZone)},selectRoom:function(e){console.log("roomNumber: "+e),this.selectedOption4=e},resetSelection:function(){this.selectedOption4=null},resetOptions:function(){this.selectedZone=null,this.selectedOption2=null,this.selectedOption3=null,this.selectedOption4=null}},computed:{RoomArr:function(){return this.hierarchicalData[this.selectedZone][this.selectedOption2][this.selectedOption3]}}},n=(t(421),t(50)),component=Object(n.a)(l,(function(){var e=this,o=e._self._c;return o("div",{},[o("label",{staticClass:"block text-gray-700 font-bold",attrs:{for:e.id}},[e._v(e._s(e.label))]),e._v(" "),o("label",{staticClass:"block text-gray-700 font-bold"},[e._v("Select a location:")]),e._v(" "),o("SliderCust",{attrs:{"hierarchical-data":e.hierarchicalData,images:e.optionsTree},on:{"option-selected":e.handleChange,"reset-options":e.resetOptions}}),e._v(" "),e.selectedZone&&e.hierarchicalData.length>0?o("div",{staticClass:"space-y-4 form-select"},[o("label",{staticClass:"block text-gray-700 font-bold",attrs:{for:"building"}},[e._v("Select a building:")]),e._v(" "),o("el-select",{attrs:{"value-key":"id",id:"selectOption",placeholder:"Select building"},model:{value:e.selectedOption2,callback:function(o){e.selectedOption2=o},expression:"selectedOption2"}},e._l(Object.keys(e.hierarchicalData[e.selectedZone]),(function(option){return o("el-option",{key:option,attrs:{value:option}})})),1)],1):e._e(),e._v(" "),e.selectedZone&&e.selectedOption2&&e.hierarchicalData?o("div",{staticClass:"space-y-4 form-select"},[o("label",{staticClass:"block text-gray-700 font-bold",attrs:{for:"building"}},[e._v("Select a Floor:")]),e._v(" "),o("el-select",{attrs:{id:"selectOption2","value-key":"id",placeholder:"Select Floor"},model:{value:e.selectedOption3,callback:function(o){e.selectedOption3=o},expression:"selectedOption3"}},e._l(Object.keys(e.hierarchicalData[e.selectedZone][e.selectedOption2]),(function(option){return o("el-option",{key:option,attrs:{value:option}})})),1)],1):e._e(),e._v(" "),e.selectedZone&&e.selectedOption2&&e.selectedOption3?o("div",{staticClass:"space-y-4 form-select"},[o("label",{staticClass:"block text-gray-700 font-bold"},[e._v("Select a Room:")]),e._v(" "),null===e.selectedOption4?o("div",{},[o("el-row",e._l(e.RoomArr,(function(t){return o("el-col",{key:t.roomNumber,attrs:{span:8}},[o("el-card",{staticClass:"box-card",nativeOn:{click:function(o){return e.selectRoom(t.id)}}},[o("img",{staticClass:"list-image",attrs:{src:e.getImageSrc(t.type)}}),e._v(" "),o("div",{staticClass:"list-description"},[o("h3",[e._v(e._s(t.roomNumber))]),e._v(" "),o("p",[e._v(e._s(e.handleWord(t.type)))])])])],1)})),1)],1):o("div",{staticClass:"el-row"},[o("el-col",{attrs:{span:4}},[o("p",[e._v(e._s(e.selectedOption4.roomNumber))])]),e._v(" "),o("el-col",{staticClass:"right-room",attrs:{span:20}},[o("button",{on:{click:e.resetSelection}},[e._v("Change Selection")])])],1)]):e._e()],1)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{SliderCust:t(409).default})}}]);