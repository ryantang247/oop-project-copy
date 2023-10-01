<template>
  <div>
    <!-- The container element for the map -->
    <div id="map-container" :style="{ width: mapWidth, height: mapHeight }"></div>
  </div>
</template>

<script>
export default {
  name: "AMap",
  data() {
    return {
      mapWidth: "80%", // Set the initial width of the map container
      mapHeight: "500px", // Set the initial height of the map container
      margin: "0", // Center the map horizontally
      position:"justify"
    };
  },
  mounted() {
    // Initialize the map when the component is mounted
    this.initMap();
    window._AMapSecurityConfig = {
      securityJsCode:'6dcf279b3051f93ca87a74cf70cca816',
    }
  },
  methods: {
    initMap() {
      // Load the AMap API script
      const script = document.createElement('script');

      script.src = '//webapi.amap.com/maps?v=2.0&key=20db94d3028c1d2472ae4f29ab518e4b&plugin=AMap.ControlBar,AMap.ToolBar';
      script.async = true;
      script.onload = () => {
        // Create the map instance
        let map = new AMap.Map('map-container', {
          rotateEnable:true,
          pitchEnable:true,
          zoom: 17,
          pitch: 50,
          rotation: -15,
          viewMode:'3D', //开启3D视图,默认为关闭
          zooms:[2,20],
          center:[113.99913918407441, 22.60212445711336]
        });

        var controlBar = new AMap.ControlBar({
          position:{
            right:'10px',
            top:'10px'
          }
        });
        controlBar.addTo(map);

        var toolBar = new AMap.ToolBar({
          position:{
            right:'40px',
            top:'110px'
          }
        });
        toolBar.addTo(map);

        //Variables for label marker
        var textStyeLabel = {
          fontSize: 12,
          fontWeight: 'normal',
          fillColor: '#22886f',
          strokeColor: '#fff',
          strokeWidth: 2,
          fold: true,
          padding: '2, 5',
        };

        var houseIcon = {
          // 图标类型，现阶段只支持 image 类型
          type: 'image',
          // 图片 url
          image: 'https://a.amap.com/jsapi_demos/static/demo-center/marker/express2.png',
          // 图片尺寸
          size: [64, 30],
          // 图片相对 position 的锚点，默认为 bottom-center
          anchor: 'center',
        };

        var LabelsData = [
          {
            name: '湖畔11栋',
            position: [113.99913918407441, 22.60212445711336],
            zooms: [10, 20],
            opacity: 1,
            zIndex: 10,
            fold: true,
            houseIcon,
            text: {
              // 要展示的文字内容
              content: '湖畔11栋',
              // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
              direction: 'right',
              // 在 direction 基础上的偏移量
              offset: [-20, -5],
              // 文字样式
              style: {
                // 字体大小
                fontSize: 12,
                // 字体颜色
                fillColor: '#22886f',
                //
                strokeColor: '#fff',
                strokeWidth: 2,
                fold: true,
                padding: '2, 5',
              },
            },
          },
          {
            name: '湖畔12栋',
            position: [113.99970781238557, 22.60249588729417],
            zooms: [10, 20],
            opacity: 1,
            zIndex: 16,
            houseIcon,
            text: {
              content: '湖畔12栋',
              direction: 'right',
              offset: [-20, -5],
              style: textStyeLabel,
            },
          },
          {
            name: '湖畔13栋',
            position: [113.99953078659058, 22.601594548320616],
            zooms: [10, 20],
            opacity: 1,
            zIndex: 8,
            houseIcon,
            text: {
              content: '湖畔13栋',
              direction: 'right',
              offset: [-20, -5],
              style: textStyeLabel,
            },
          },
          {
            name: '湖畔15栋',
            position: [114.0004159155655, 22.602169028788456],
            zooms: [10, 20],
            opacity: 1,
            zIndex: 23,
            houseIcon,
            text: {
              content: '湖畔15栋',
              direction: 'right',
              offset: [-20, -5],
              style: textStyeLabel,
            },
          },
          {
            name: '荔园1栋',
            position: [114.00006186397553, 22.604060835446735],
            zooms: [10, 20],
            opacity: 1,
            zIndex: 6,
            houseIcon,
            text: {
              content: '荔园1栋',
              direction: 'right',
              offset: [-20, -5],
              style: textStyeLabel,
            },
          },
          {
            name: '荔园2栋',
            position: [114.00012623699189, 22.604387689460186],
            zooms: [10, 20],
            opacity: 1,
            zIndex: 5,
            houseIcon,
            text: {
              content: '荔园2栋',
              direction: 'right',
              offset: [-20, -5],
              style: textStyeLabel,
            },
          }
        ];

        var markers = [];
        var allowCollision = false;
        var layer = new AMap.LabelsLayer({
          zooms: [3, 20],
          zIndex: 1000,
          // collision: false,
          // 设置 allowCollision：true，可以让标注避让用户的标注
          allowCollision,
        });
        layer.add(markers);
        // 图层添加到地图
        map.add(layer);

        // 初始化 labelMarker
        for (var i = 0; i < LabelsData.length; i++) {
          var curData = LabelsData[i];
          curData.extData = {
            index: i,
          };

          var labelMarker = new AMap.LabelMarker(curData);

          markers.push(labelMarker);
        }

        labelMarker.on('click', (event) => {
          // Access the clicked marker's data
          var clickedData = LabelsData[event.target.getExtData().index];

          // Now you can do something with the clicked data
          console.log('Clicked Data:', clickedData);

          // You can store it in a component's data property or perform any other action here
        });
        // 将 marker 添加到图层
        layer.add(markers);
      };

      document.head.appendChild(script);
    },
  },
};
</script>
