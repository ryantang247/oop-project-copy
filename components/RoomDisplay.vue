<template>
  <div>
    <!-- Iterate over locations -->
    <div v-for="location in Object.keys(this.filteredData)">
      <div class="title-container">
        <el-row class="title-styles">
          <el-col :span="2">
            <img class="icon-style" src="@/static/dorm/location.png" alt="@/static/dorm/location.png">
          </el-col>
          <el-col  :span="6">
        <h1 class="location-head-style">{{ location }}</h1>
          </el-col>
        </el-row>
      </div>
            <!-- Iterate over buildings in the current location -->
      <div class="building-floor-style">
            <div v-for="building in Object.keys(filteredData[location])" :key="building">
              <h2 class="building-header">Building {{ building }}</h2>
              <ElCarousel height='500px' arrow="always" trigger="click">
                <ElCarouselItem v-for="floor in Object.keys(filteredData[location][building])" :key="floor">
                  <el-row>
                    <el-col :span="4">
                      <h2 class="floor-header">Floor {{ floor }}</h2>
                    </el-col>
                    <el-col class="show-floor-plan" :span="18">
                    <el-button @click="showFloorPlan = true">View Floor plan</el-button>
                    </el-col>
                  </el-row>
                  <!-- Iterate over rooms in the current floor -->
                  <el-row class="room-container">
                    <el-col
                      v-for="room in filteredData[location][building][floor]"
                      :key="room.id"
                      :span="4"
                    >
                      <el-card  :body-style="{ padding: '0px' }" >
                        <div @click="handleComment(room.id)" class="card-content-container">
                          <img
                            :src="getImageSrc(room.type)"
                            class="image"
                            alt=""/>
                            <h2>{{ room.roomNumber }}</h2>
                            <h2>{{ room.type }}</h2>
                          <p @click="handleCollect" class="collection-header">收藏</p>

                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                </ElCarouselItem>
              </ElCarousel>
            </div>
      </div>
    </div>
    <CommentSection  @closeComment="handleReceiveComment" :dialogVisible="this.showComment" :room-id="this.roomId"/>
    <el-dialog  :visible.sync="showFloorPlan"   :close-on-click-modal="true"
                :close-on-press-escape="true"
                :before-close="handleCloseFloorPlan">
      <div class="floor-plan-image">
        <h1>Floor plan</h1>
        <img  src="@/static/samplefloorplan.png" alt="@/static/samplefloorplan.png">
      </div>

    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'RoomDisplay',
  props: {
    filteredData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      data: this.filteredData,
      roomId: null,
      showComment: false,
      showFloorPlan:false
    };
  },
  watch: {
    filteredData: function (newVal, oldVal) {
      // Log the changes to the console
      console.log('Prop changed for filtered Data: ', newVal, ' | was: ', oldVal);
      console.log(newVal)

      // Use the new value in the component
      this.data = newVal;

      // You can perform additional actions with the new value if needed
      // For example, update some internal state or trigger a method
      this.handleDataChange(newVal);
    },
  },
  methods: {
    handleCloseFloorPlan(done) {
      // Additional logic before closing the dialog (if needed)
      console.log('Closing floor plan dialog.');

      // Set showFloorPlan to false to close the dialog
      this.showFloorPlan = false;

      // Call the done function to close the dialog
      done();
    },
    handleReceiveComment(){
      this.showComment = false
    },
    handleComment(roomId){
      console.log("selected Room",roomId)
      this.showComment = true,
      this.roomId = roomId
    },
    getImageSrc(type) {
      // Add your logic here to determine the image source based on the type
      if (type === 'quadruple_room') {
        return require('@/dist/dorm/dorm1.jpg');
      } else if (type === 'single_room') {
        return require('@/dist/dorm/dorm2.jpg');
      }
    },
    handleDataChange(newData) {
      // Do something with the new data
      console.log('Handling data change:', newData);

    },
  },
};
</script>

<style scoped>
.title-container {
  font-family: "Arial Black",sans-serif;
}

.icon-style{
  margin-top: 15px;
  width: 50px;
  height: 50px;
}

.title-styles{
  text-transform: capitalize;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
  font-size: 20px;
  color: black;
}

.image{
  margin-top: 20px;
  height: 200px;
  width: 200px;
}

.el-card:hover {
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background: lightgray;
}

.card-content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.location-head-style{
  margin-top: 10px;
  margin-bottom: 0;

}

.show-floor-plan{
  text-align: right;
}

.floor-plan-image {
  max-width: 100%; /* Ensure the div doesn't exceed its parent's width */
  position: relative; /* Ensure child elements are positioned relative to this div */
}

.floor-plan-image img {
  width: 100%; /* Make the image fill the width of the container */
  height: auto; /* Maintain the aspect ratio */
  object-fit: cover; /* Cover the entire container while maintaining aspect ratio */
}

.building-floor-style{
  margin-left: 20px;
  margin-right: 20px;
}

.building-header{
  font-size: 30px;
  border-bottom: 1px solid #000; /* You can adjust the color and thickness of the underline */
  display: inline-block; /* Ensure the underline only spans the width of the text */
  margin-top: 20px;
  margin-bottom: 20px; /* Add some space between the text and the underline */
}

.floor-header{
  font-size: 20px;
  display: inline-block; /* Ensure the underline only spans the width of the text */
  margin-bottom: 20px; /* Add some space between the text and the underline */
}

.room-container{
  margin-left: 60px;
  margin-right: 60px;
}

.collection-header{

  text-align: center;
}

</style>
