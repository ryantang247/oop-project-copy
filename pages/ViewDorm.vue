<template>

  <div>
    <Header />
    <div class="container">
      <AMapTest ref="amapTest" @dorm-selected="handleDormChange" :dorm-selected="handleDormChange"/>
      <!-- <SamplrTest
        :spaceId="'a9041489-286b-430f-8600-1b4cdbd077b3'"
        :clientToken="'pub_29d3e5ca0d904b0f880def106ad6467c'"
      /> -->
      <div v-show="this.selectedData.DormArea !== undefined && this.selectedData.DormBuilding !== undefined && (this.selectedData.DormBuilding !== null && this.selectedData.DormArea !== null)" class="el-row">
        <el-col :span="4">
          <p>{{ this.selectedData.DormArea + " " +this.selectedData.DormBuilding }}</p>
        </el-col>
        <el-col :span="20" class="right-room">
          <button @click="resetDormSelection">Change Selection</button>
        </el-col>
      </div>
      <SmplrTest2 :receivedData="selectedData" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selectedData: {
        DormArea: '',
        DormBuilding: ''
      }
  }
  },
  methods :{

    handleDormChange(dormArea, dormBuilding) {
      this.selectedData.DormArea = dormArea;
      this.selectedData.DormBuilding = dormBuilding;
      console.log('Selected Location:', this.selectedData);
    },
    resetDormSelection() {
      // Handle the reset event
      this.selectedData.dormArea = '';
      this.selectedData.dormBuilding = '';
    },
  },
  created() {
    // Call the getDorms method when the component is created
    this.getDorms();
  },
};
</script>

<style scoped>
.container {
  max-width: 800px; /* Adjust the maximum width as needed */
  margin: 40px auto; /* Center the container and add space above it */
  padding: 20px; /* Add padding for inner content */
  border: 1px solid #ccc; /* Grey border */
  border-radius: 8px; /* Rounded corners */
  background-color: #fff; /* Background color for the container */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Box shadow for a subtle elevation effect */
}
</style>
