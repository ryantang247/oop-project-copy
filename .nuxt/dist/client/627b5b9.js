(window.webpackJsonp=window.webpackJsonp||[]).push([[3,10,16],{404:function(e,t,o){var content=o(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(133).default)("21595d8c",content,!0,{sourceMap:!1})},409:function(e,t,o){"use strict";o.r(t);o(93);var r={name:"SliderCust",props:{hierarchicalData:{type:Array,required:!0},images:Array},data:function(){return{timer:null,currentIndex:0,selectedOption:null}},mounted:function(){this.startSlide()},methods:{startSlide:function(){this.timer=setInterval(this.nextSlide,1e4)},nextSlide:function(){this.currentIndex=(this.currentIndex+1)%this.images.length},prevSlide:function(){this.currentIndex=(this.currentIndex-1+this.images.length)%this.images.length},selectOption:function(){this.selectedOption=this.images[this.currentIndex].label,this.$emit("option-selected",this.images[this.currentIndex].value),clearInterval(this.timer)},resetSelection:function(){this.$emit("reset-options"),this.selectedOption=null,this.startSlide()}},computed:{currentImg:function(){return this.images[this.currentIndex].url}}},l=(o(410),o(50)),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return e.selectedOption?t("div",[t("el-col",{attrs:{span:6}},[t("p",[e._v(e._s(e.selectedOption))])]),e._v(" "),t("el-col",{staticClass:"custom-right",attrs:{span:18}},[t("button",{on:{click:e.resetSelection}},[e._v("Change Selection")])])],1):t("div",{staticClass:"slider-container"},[t("button",{staticClass:"prev",on:{click:function(t){return t.preventDefault(),e.prevSlide.apply(null,arguments)}}},[e._v("❮")]),e._v(" "),t("transition-group",{attrs:{name:"fade",tag:"div"}},[t("div",{key:e.currentIndex,on:{click:e.selectOption}},[t("img",{staticClass:"slider-image",attrs:{src:e.currentImg}}),e._v(" "),t("p",{staticClass:"tag-small"},[e._v(e._s(e.images[e.currentIndex].label))])])]),e._v(" "),t("button",{staticClass:"next",on:{click:function(t){return t.preventDefault(),e.nextSlide.apply(null,arguments)}}},[e._v("❯")])],1)}),[],!1,null,"adb5b78e",null);t.default=component.exports},410:function(e,t,o){"use strict";o(404)},411:function(e,t,o){var r=o(132)((function(i){return i[1]}));r.push([e.i,".custom-right[data-v-adb5b78e]{display:flex;justify-content:flex-end;margin-top:8px}.slider-container[data-v-adb5b78e]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;min-height:100px;position:relative}.image-container[data-v-adb5b78e]{flex-grow:1;text-align:center}.slider-image[data-v-adb5b78e]{height:auto;max-width:100%}.tag-small[data-v-adb5b78e]{background-color:rgba(0,0,0,.7);bottom:10px;font-size:16px;left:10px;margin:0;padding:10px 14px}.next[data-v-adb5b78e],.prev[data-v-adb5b78e],.tag-small[data-v-adb5b78e]{border-radius:4px;color:#fff;position:absolute;z-index:1}.next[data-v-adb5b78e],.prev[data-v-adb5b78e]{background-color:rgba(0,0,0,.6);border:none;cursor:pointer;font-size:18px;font-weight:700;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none;top:50%;transform:translateY(-50%);transition:.7s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.next[data-v-adb5b78e]{border-radius:0 4px 4px 0;right:0}.prev[data-v-adb5b78e]{left:0}.next[data-v-adb5b78e]:hover,.prev[data-v-adb5b78e]:hover{background-color:rgba(0,0,0,.9)}button[data-v-adb5b78e]{background-color:#007bff;border:none;border-radius:25px;color:#fff;cursor:pointer;font-weight:700;padding:12px 24px;transition:background-color .3s}.fade-enter-active[data-v-adb5b78e]{transition:opacity .5s ease;transition-delay:.5s}.fade-leave-active[data-v-adb5b78e]{transition:opacity .5s ease}.fade-enter[data-v-adb5b78e],.fade-leave-to[data-v-adb5b78e]{opacity:0}",""]),r.locals={},e.exports=r},412:function(e,t,o){e.exports=o.p+"img/dorm1.5f2101c.jpg"},413:function(e,t,o){e.exports=o.p+"img/dorm2.11af49f.jpg"},417:function(e){e.exports=JSON.parse('{"roomTypes":{"single":{"label":"Single Room","image":"./dorm/dorm1.jpg"},"double":{"label":"Double Room","image":"./dorm/dorm2.jpg"},"quad":{"label":"Suite","image":"./dorm/dorm3.jpg"}},"comments":[{"id":1,"author":"trollolol","rating":0,"text":"This is the first comment","showreply":false,"addreply":false,"replies":[{"id":1,"author":"john","text":"Reply to the first comment"},{"id":2,"author":"lmao","text":"Another reply to the first comment"}]},{"id":2,"author":"ryant","rating":5,"text":"This is the second comment","showreply":false,"addreply":false,"replies":[{"id":1,"author":"lam123","text":"Reply to the second comment"}]},{"id":3,"author":"han","rating":4,"text":"This room smells like eggs","showreply":false,"addreply":false,"replies":[{"id":1,"author":"cons178","text":"Reply to the second comment"},{"id":2,"author":"123esther","text":"Yes!"}]},{"id":4,"author":"Martin","rating":2,"text":"Great post!","showreply":false,"addreply":false,"replies":[{"id":1,"author":"haha789","text":"Thanks!"},{"id":2,"author":"pukitai12","text":"I agree!"}]},{"id":5,"author":"johnny00","rating":4,"text":"Interesting room!","showreply":false,"addreply":false,"replies":[{"id":1,"author":"weiyao12","text":"Yes, it is!"},{"id":2,"author":"daniel99","text":"Tell me more!"}]},{"id":6,"author":"ronnie_ng","rating":3,"text":"nan ke da su she taikula","showreply":false,"addreply":false,"replies":[{"id":1,"author":"bananyeehaws","text":"que shi queshi!"},{"id":2,"author":"pops44","text":"I appreciate it."}]},{"id":7,"author":"jt_12","rating":2,"text":"Keep it up!","showreply":false,"addreply":false,"replies":[{"id":1,"author":"lol432","text":"I will!"},{"id":2,"author":"ffdas432","text":"You\'re doing great!"}]},{"id":8,"author":"pinoy88","rating":5,"text":"Nice Room!","showreply":false,"addreply":false,"replies":[{"id":1,"author":"thahnmihn211","text":"I will rent this!"},{"id":2,"author":"poilam43","text":"Yeehawwww!"}]},{"id":9,"author":"pinoybenar123","rating":3,"text":"Nak tukar wang lama, DM sya, old coin need now","showreply":false,"addreply":false,"replies":[{"id":1,"author":"hockf32","text":"DM"},{"id":2,"author":"gfsd876","text":"DM jga"}]}],"optionsTree":[{"label":"first phase","url":"./sustech/lakeside_dorm.jpg","value":"first phase","Building":[{"label":"B1","value":1,"Floors":[{"label":"F1","value":1,"Room":[{"roomNumber":101,"roomType":"single","roomStatus":true,"roomFor":"postdoc","comment":[1]},{"roomNumber":102,"roomType":"double","roomStatus":false,"roomFor":"postdoc","comment":[2,3]},{"roomNumber":130,"roomType":"quad","roomStatus":true,"roomFor":"master"},{"roomNumber":135,"roomType":"quad","roomStatus":true,"roomFor":"doctorate"}]},{"label":"F2","value":2,"Room":[{"roomNumber":201,"roomType":"single","comment":[4],"roomStatus":true,"roomFor":"master"},{"roomNumber":204,"roomType":"quad","roomStatus":false,"roomFor":"postdoc"}]}]},{"label":"B2","value":2,"Floors":[{"label":"F1","value":1,"Room":[{"roomNumber":101,"roomType":"single","roomStatus":true,"roomFor":"postdoc"},{"roomNumber":111,"roomType":"double","comment":[5],"roomStatus":true,"roomFor":"doctorate"},{"roomNumber":112,"roomType":"double","roomStatus":false,"roomFor":"master"}]},{"label":"F2","value":2,"Room":[{"roomNumber":201,"roomType":"single","roomStatus":false,"roomFor":"master"},{"roomNumber":209,"roomType":"single","roomStatus":false,"roomFor":"doctorate"},{"roomNumber":212,"roomType":"quad","comment":[6,7],"roomStatus":true,"roomFor":"master"}]}]},{"label":"B3","value":3,"Floors":[{"label":"F1","value":1,"Room":[{"roomNumber":201,"roomType":"single","roomStatus":true,"roomFor":"master"},{"roomNumber":209,"roomType":"single","comment":[8],"roomStatus":true,"roomFor":"master"},{"roomNumber":212,"roomType":"quad","roomStatus":true,"roomFor":"master"}]}]},{"label":"B4","value":4,"Floors":[{"label":"F1","value":"1","Room":[{"roomNumber":201,"roomType":"single","comment":[9],"roomStatus":true,"roomFor":"master"},{"roomNumber":209,"roomType":"single","roomStatus":false,"roomFor":"postdoc"},{"roomNumber":212,"roomType":"quad","roomStatus":true,"roomFor":"doctorate"}]},{"label":"F2","value":2,"Room":[{"roomNumber":201,"roomType":"single","roomStatus":true,"roomFor":"postdoc"},{"roomNumber":209,"roomType":"single","roomStatus":false,"roomFor":"postdoc"},{"roomNumber":212,"roomType":"quad","roomStatus":false,"roomFor":"doctorate"}]},{"label":"F2","value":3,"Room":[{"roomNumber":212,"roomType":"quad","roomStatus":true,"roomFor":"doctorate"}]}]}]},{"label":"lychee hill","url":"./sustech/lychee.jpg","value":"lychee hill"},{"label":"second phase","url":"./sustech/student_condo.jpg","value":"second phase","Building":[{"label":"B1","value":1,"position":[113.99913918407441,22.60212445711336],"Floors":[{"label":"F1","value":1,"Room":[{"roomNumber":1,"roomType":"single","roomStatus":true,"roomFor":"doctorate"},{"roomNumber":2,"roomType":"single","roomStatus":true,"roomFor":"doctorate"},{"roomNumber":3,"roomType":"single","comment":[6,7],"roomStatus":true,"roomFor":"doctorate"},{"roomNumber":4,"roomType":"single","roomStatus":true,"roomFor":"postdoc"},{"roomNumber":5,"roomType":"single","roomStatus":true,"roomFor":"masters"},{"roomNumber":6,"roomType":"single","comment":[6,7],"roomStatus":false,"roomFor":"doctorate"}]},{"label":"F2","value":2,"Room":[{"roomNumber":1,"roomType":"single","roomStatus":true,"roomFor":"psotdoc"},{"roomNumber":2,"roomType":"single","roomStatus":false,"roomFor":"master"},{"roomNumber":3,"roomType":"single","roomStatus":true,"roomFor":"doctorate"}]}]},{"label":"B2","value":2,"Floors":[{"label":"F1","value":1,"Room":[{"roomNumber":1,"roomType":"single","roomStatus":false,"roomFor":"doctorate"},{"roomNumber":2,"roomType":"single","roomStatus":true,"roomFor":"doctorate"},{"roomNumber":3,"roomType":"single","roomStatus":true,"roomFor":"doctorate"},{"roomNumber":4,"roomType":"single","roomStatus":true,"roomFor":"doctorate"},{"roomNumber":5,"roomType":"single","roomStatus":true,"roomFor":"doctorate"},{"roomNumber":6,"roomType":"single","comment":[6,7],"roomStatus":true,"roomFor":"doctorate"}]}]}]}]}')},418:function(e,t,o){var content=o(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(133).default)("34a67bb2",content,!0,{sourceMap:!1})},421:function(e,t,o){"use strict";o(418)},422:function(e,t,o){var r=o(132)((function(i){return i[1]}));r.push([e.i,"label{color:#333;display:block;font-weight:700;margin-bottom:8px;margin-top:8px}.form-select{border-radius:4px;font-size:16px;width:100%}.list-image{cursor:pointer;height:auto;margin:20px;position:relative;width:100px}.list-description{flex:1}.list-description h3{font-size:18px;margin:0}.list-description p{font-size:14px}.right-room{display:flex;justify-content:end;margin-top:8px}button{background-color:#007bff;border:none;border-radius:25px;color:#fff;cursor:pointer;font-weight:700;padding:12px 24px;transition:background-color .3s}",""]),r.locals={},e.exports=r},438:function(e,t,o){var content=o(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(133).default)("3c2dd45a",content,!0,{sourceMap:!1})},458:function(e,t,o){"use strict";o.r(t);o(52),o(182),o(55),o(72);var r=o(417),l={components:{SliderCust:o(409).default},option1:0,props:{id:String,label:String,options:Array,hierarchicalData:{type:Array,required:!0}},watch:{selectedZone:"emitSelectedOptions",selectedOption2:"emitSelectedOptions",selectedOption3:"emitSelectedOptions",selectedOption4:"emitSelectedOptions"},data:function(){return{optionsTree:r.optionsTree,selectedZone:null,selectedOption2:null,selectedOption3:null,selectedOption4:null}},methods:{getImageSrc:function(e){return"quadruple_room"===e?o(412):"single_room"===e?o(413):void 0},emitSelectedOptions:function(){this.$emit("selected-options",{roomId:this.selectedOption4})},handleWord:function(e){return e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},handleChange:function(option){this.selectedZone=option,console.log("Contents of hierarchicalData:",this.hierarchicalData),console.log("Contents of hierarchicalData[selectedZone]:",this.hierarchicalData[this.selectedZone]),console.log("Selected Location:",this.selectedZone)},selectRoom:function(e){console.log("roomNumber: "+e),this.selectedOption4=e},resetSelection:function(){this.selectedOption4=null},resetOptions:function(){this.selectedZone=null,this.selectedOption2=null,this.selectedOption3=null,this.selectedOption4=null}},computed:{RoomArr:function(){return this.hierarchicalData[this.selectedZone][this.selectedOption2][this.selectedOption3]}}},n=(o(421),o(50)),component=Object(n.a)(l,(function(){var e=this,t=e._self._c;return t("div",{},[t("label",{staticClass:"block text-gray-700 font-bold",attrs:{for:e.id}},[e._v(e._s(e.label))]),e._v(" "),t("label",{staticClass:"block text-gray-700 font-bold"},[e._v("Select a location:")]),e._v(" "),t("SliderCust",{attrs:{"hierarchical-data":e.hierarchicalData,images:e.optionsTree},on:{"option-selected":e.handleChange,"reset-options":e.resetOptions}}),e._v(" "),e.selectedZone&&e.hierarchicalData.length>0?t("div",{staticClass:"space-y-4 form-select"},[t("label",{staticClass:"block text-gray-700 font-bold",attrs:{for:"building"}},[e._v("Select a building:")]),e._v(" "),t("el-select",{attrs:{"value-key":"id",id:"selectOption",placeholder:"Select building"},model:{value:e.selectedOption2,callback:function(t){e.selectedOption2=t},expression:"selectedOption2"}},e._l(Object.keys(e.hierarchicalData[e.selectedZone]),(function(option){return t("el-option",{key:option,attrs:{value:option}})})),1)],1):e._e(),e._v(" "),e.selectedZone&&e.selectedOption2&&e.hierarchicalData?t("div",{staticClass:"space-y-4 form-select"},[t("label",{staticClass:"block text-gray-700 font-bold",attrs:{for:"building"}},[e._v("Select a Floor:")]),e._v(" "),t("el-select",{attrs:{id:"selectOption2","value-key":"id",placeholder:"Select Floor"},model:{value:e.selectedOption3,callback:function(t){e.selectedOption3=t},expression:"selectedOption3"}},e._l(Object.keys(e.hierarchicalData[e.selectedZone][e.selectedOption2]),(function(option){return t("el-option",{key:option,attrs:{value:option}})})),1)],1):e._e(),e._v(" "),e.selectedZone&&e.selectedOption2&&e.selectedOption3?t("div",{staticClass:"space-y-4 form-select"},[t("label",{staticClass:"block text-gray-700 font-bold"},[e._v("Select a Room:")]),e._v(" "),null===e.selectedOption4?t("div",{},[t("el-row",e._l(e.RoomArr,(function(o){return t("el-col",{key:o.roomNumber,attrs:{span:8}},[t("el-card",{staticClass:"box-card",nativeOn:{click:function(t){return e.selectRoom(o.id)}}},[t("img",{staticClass:"list-image",attrs:{src:e.getImageSrc(o.type)}}),e._v(" "),t("div",{staticClass:"list-description"},[t("h3",[e._v(e._s(o.roomNumber))]),e._v(" "),t("p",[e._v(e._s(e.handleWord(o.type)))])])])],1)})),1)],1):t("div",{staticClass:"el-row"},[t("el-col",{attrs:{span:4}},[t("p",[e._v(e._s(e.selectedOption4.roomNumber))])]),e._v(" "),t("el-col",{staticClass:"right-room",attrs:{span:20}},[t("button",{on:{click:e.resetSelection}},[e._v("Change Selection")])])],1)]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SliderCust:o(409).default})},480:function(e,t,o){"use strict";o(438)},481:function(e,t,o){var r=o(132)((function(i){return i[1]}));r.push([e.i,'.max-w-md[data-v-6228307c]{background-color:#fff;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,.1);flex-direction:column;font-family:"Roboto",sans-serif;margin:0 auto;max-width:750px;padding:20px}.bordered-form[data-v-6228307c]{border:1px solid #ccc}label[data-v-6228307c]{color:#333;display:block;font-weight:700;margin-bottom:8px}.form-select[data-v-6228307c]{border:1px solid #ccc;border-radius:4px;font-size:16px;margin-bottom:16px;padding:10px;width:100%}button[type=submit][data-v-6228307c]{background-color:#007bff;border:none;border-radius:25px;color:#fff;cursor:pointer;font-weight:700;padding:12px 24px;transition:background-color .3s}button[type=submit][data-v-6228307c]:hover{background-color:#0056b3}.text-green-600[data-v-6228307c]{color:#00a700;font-weight:700;margin-top:16px;text-align:center}.submit-button[data-v-6228307c]{width:100%}.fade-enter-active[data-v-6228307c]{transition:opacity 1s ease}.fade-enter[data-v-6228307c],.fade-leave-to[data-v-6228307c]{opacity:0}',""]),r.locals={},e.exports=r},544:function(e,t,o){"use strict";o.r(t);o(55),o(54),o(20),o(93),o(40);var r=o(401),l=o.n(r),n={name:"DormForm",build:{extend:function(e,t){t.isClient&&(e.devtool="source-map")}},data:function(){return{APIFormData:"",hierarchicalData:[],academicPosition:"",selectedOption:{},progressNum:0,devServer:{devServer:{proxy:{"/login":{target:"http://8.138.105.61/api/",ws:!0}}}},submitted:!1,showForm:!1,uniqueFormKey:"submit-form"}},watch:{academicPosition:function(e,t){console.log("myValue changed from",t,"to",e),this.progressNum=0}},mounted:function(){var e=this;setTimeout((function(){l.a.get("http://8.138.105.61/api/dorm-room/").then((function(t){e.APIFormData=t.data,e.APIFormData.forEach((function(t){var o=t.id,r=t.zone,l=t.building,n=t.type,c=t.floor,d=t.roomNumber;e.hierarchicalData[r]||(e.hierarchicalData[r]={}),e.hierarchicalData[r][l]||(e.hierarchicalData[r][l]={}),e.hierarchicalData[r][l][c]||(e.hierarchicalData[r][l][c]=[]),e.hierarchicalData[r][l][c].push({id:o,roomNumber:d,type:n}),console.log(e.hierarchicalData)})),console.log(e.hierarchicalData),e.error=null})).catch((function(t){e.APIFormData="",e.error=t.message||"An error occurred"})),e.showForm=!0}),1e3)},methods:{handleSelectedOptions:function(e){this.selectedOption=e,console.log("Received selected options:",e)},submitForm:function(e){e.preventDefault(),console.log("Form Data:",JSON.stringify(this.formData,null,2)),this.showForm=!1,this.submitted=!0}}},c=(o(480),o(50)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"max-w-md bg-gray-100 p-6"},[t("el-steps",{attrs:{active:e.progressNum,"align-center":""}},[t("el-step",{attrs:{title:"Select Student Type"}}),e._v(" "),t("el-step",{attrs:{title:"Select Zone"}}),e._v(" "),t("el-step",{attrs:{title:"Select Building"}}),e._v(" "),t("el-step",{attrs:{title:"Select Room"}})],1),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.showForm?t("form",{key:e.uniqueFormKey,staticClass:"max-w-md mx-auto bg-white p-6 rounded-lg shadow-md bordered-form",on:{submit:e.submitForm}},[t("h2",{staticClass:"text-2xl font-semibold mb-4"},[e._v("Select Dorm")]),e._v(" "),t("div",{staticClass:"mb-4"},[t("label",{staticClass:"block text-gray-700 font-bold",attrs:{for:"academic-position"}},[e._v("\n          Select current academic position:\n        ")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.academicPosition,expression:"academicPosition"}],staticClass:"form-select w-full p-2 rounded-lg border border-gray-300",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.academicPosition=t.target.multiple?o:o[0]}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("Select type")]),e._v(" "),t("option",[e._v("Doctorate")]),e._v(" "),t("option",[e._v("Masters")])])]),e._v(" "),t("p",{staticClass:"block text-gray-700 font-bold"},[e._v("Current Room Gender: Male")]),e._v(" "),t("div",{staticClass:"mb-2"},[t("Dropdown",{attrs:{id:"dropdown1",hierarchicalData:e.hierarchicalData},on:{"selected-options":e.handleSelectedOptions}})],1),e._v(" "),t("div",{staticClass:"submit-button"},[t("button",{staticClass:"mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50",attrs:{type:"submit"}},[e._v("\n          Submit\n        ")])])]):e._e()]),e._v(" "),e.submitted?t("div",{staticClass:"mt-4 text-green-600"},[t("p",[e._v("Form submitted successfully!")])]):e._e()],1)}),[],!1,null,"6228307c",null);t.default=component.exports;installComponents(component,{Dropdown:o(458).default})}}]);