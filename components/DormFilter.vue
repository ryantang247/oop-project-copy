<template>
  <div v-if="showForm">
    <el-collapse class="">
      <el-collapse-item title="点击筛洗" name="1" class="filter-style">
      <div>
      <el-row>
        <el-col :span="2">
          <h3>Location:</h3>
        </el-col>
        <el-col :span="4">
          <el-radio-group v-if="this.hierarchicalData" v-model="locationFilter" @change="handleLocationChange">
            <el-radio v-for="location in Object.keys(this.hierarchicalData)" :key="location" :label="location">{{location}}</el-radio>
          </el-radio-group>
        </el-col>
        <el-col :span="3">
        <h3>Selection Date</h3>
        </el-col>
        <el-col :span="8">
          <div class="demo-date-picker">

              <el-date-picker
                v-model="timeRange"
                type="daterange"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date"
                :size="size"
              />

          </div>
        </el-col>
      </el-row>
      </div>

    <el-row >

      <el-col v-if="locationFilter && this.hierarchicalData[locationFilter]" :span="10">
        <el-row>
          <el-col :span="4">
            <h3>Building:</h3>
          </el-col>
          <el-col :span="6">
            <el-select value="building" v-model="filterBuilding" id="filterBuilding" value-key="id" placeholder="Select Building">
              <el-option
                v-for="option in Object.keys(this.hierarchicalData[locationFilter])"
                :key="option"
                :label="option"
                :value="option"
              />
            </el-select>
          </el-col>
        </el-row>
      </el-col>

      <el-col v-else :span="8">
        <el-row>
          <el-col :span="4">
            <h3>Building:</h3>
          </el-col>
          <el-col :span="6">
            <el-select value="" id="filterBuilding" value-key="id" placeholder="Select Floor">
              <el-option
                v-for="option in []"
              />
            </el-select>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="3">
        <h3>Student Type</h3>
      </el-col>
      <el-col :span="6">
        <el-radio-group v-model="studentType">
          <el-radio value="masters" :label="1">Masters</el-radio>
          <el-radio value="doctoral" :label="2">Doctoral</el-radio>
        </el-radio-group>
      </el-col>

      <el-col v-if="this.hierarchicalData[locationFilter] && this.hierarchicalData[locationFilter][filterBuilding] && locationFilter && filterBuilding" :span="12">
        <el-row>
          <el-col :span="4">
            <h3>Floor:</h3>
          </el-col>
          <el-col :span="8">
            <el-select value="floor" v-model="floorFilter" id="filterFloor" value-key="id" placeholder="Select Floor">
              <el-option
                v-for="option in Object.keys(this.hierarchicalData[locationFilter][filterBuilding])"
                :key="option"
                :label="option"
                :value="option"
              />
            </el-select>
          </el-col>
        </el-row>
      </el-col>

      <el-col v-else :span="12">
        <el-row>
          <el-col :span="4">
            <h3>Floor:</h3>
          </el-col>
          <el-col :span="8">
            <el-select value="" id="filterFloor" value-key="id" placeholder="Select Floor">
              <el-option
                v-for="option in []"
              />
            </el-select>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <div>
      <el-row>
        <el-col :span=2>
          <h3>Room Type:</h3>
        </el-col>
        <el-col :span=10>
          <div class="mt-4">
            <el-checkbox v-model="roomType.single_room" label="Single" border />
            <el-checkbox v-model="roomType.double_room" label="Double" border />
            <el-checkbox v-model="roomType.quadruple_room" label="Quadruple" border />
          </div>
        </el-col>

        <el-col :span="2">
          <h3>Gender: </h3>
        </el-col>
        <el-col :span="8">
          <el-radio-group v-model="gender">
            <el-radio value="male" :label="1">Male</el-radio>
            <el-radio value="female" :label="2">Female</el-radio>
          </el-radio-group>
        </el-col>
        <el-col :span="2">
        <el-button @click="filterData">Filter!</el-button>
        </el-col>
      </el-row>
    </div>
      </el-collapse-item>
    </el-collapse>
    <div>
      <RoomDisplay :filtered-data='this.filteredData'></RoomDisplay>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";

export default {
  build: {
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = 'source-map'
      }
    }
  },
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://8.138.105.61',  // Replace with your Django server URL
  //       changeOrigin: true,
  //     },
  //   },
  // },

  props:{
    receivedZone: null,
    receivedBuilding: null,
  },
  name: 'DormFilter',
  watch: {
    receivedZone: function (newVal, oldVal) {
      this.locationFilter = newVal
      console.log('Prop changed for receivedZone: ', newVal, ' | was: ', oldVal);
    },
    receivedBuilding: function (newVal, oldVal) {
      this.filterBuilding = newVal
      console.log('Prop changed for receivedBuilding: ', newVal, ' | was: ', oldVal);

      if( this.locationFilter && this.filterBuilding){
        console.log("Able to filter!")

        console.log(this.hierarchicalData)

        this.filterData()
      }else {
        console.log("Unable to filter")
      }
    },
    timeRange: function (newVal, oldVal) {
      console.log("Time picked: ",newVal)
    }

  },
  data() {
    return {
      APIFormData: '',
      hierarchicalData: [],
      filteredData: [],
      filterBuilding: null,
      locationFilter: null,
      timeRange: null,
      floorFilter: null,
      floorNumber: 0,
      showForm: false,
      gender: null,
      studentType: null,
      roomType: {
        single_room: ref(true),
        quadruple_room: ref(true),
        double_room: ref(false),
      },
    };
  },

  methods:{
    handleLocationChange(){
      console.log(this.locationFilter)
      this.filterBuilding = null,
      this.floorFilter = null
    },
    filterData() {
      const filteredData = {};

      // Iterate over the hierarchicalData to filter based on selected options
      console.log("Filter Data is called")
      // console.log(this.hierarchicalData)
      for (const location in this.hierarchicalData) {
        console.log(location)
        if (this.locationFilter != null && location !== this.locationFilter) {
          continue; // Skip if location filter is set and doesn't match and the filter is actually not null
        }

        filteredData[location] = {};

        for (const building in this.hierarchicalData[location]) {
          if (this.filterBuilding != null && building !== this.filterBuilding) {
            continue; // Skip if building filter is set and doesn't match
          }

          filteredData[location][building] = {};

          for (const floor in this.hierarchicalData[location][building]) {
            if (this.floorFilter != null && floor !== this.floorFilter) {
              continue; // Skip if floor filter is set and doesn't match
            }

            filteredData[location][building][floor] = [];

            for (const room of this.hierarchicalData[location][building][floor]) {
              // Check if filters are set and room matches the criteria
              const currentRoomGender = room.sex === 'male' ? 1 : 2;

              const isGenderMatch = this.gender=== null || currentRoomGender === this.gender;

              const isDateMatch = this.timeRange===null || (new Date(this.timeRange[0]) >= new Date(room.start) && new Date(this.timeRange[1]) <=new Date(room.end))
              const isDegreeMatch = this.studentType===null || this.studentType === room.degree

              const isSingleMatch = this.roomType.single_room && room.type === 'single_room';
              const isDoubleMatch = this.roomType.double_room && room.type === 'double_room';
              const isQuadrupleMatch = this.roomType.quadruple_room && room.type === 'quadruple_room';

              // Combine the room type conditions using logical OR
              const isRoomTypeMatch = isSingleMatch || isDoubleMatch || isQuadrupleMatch;

              // console.log(new Date(this.timeRange[0]))
              // console.log(new Date(this.timeRange[1]))
              // console.log(new Date(room.start))
              // console.log(new Date(room.end))
              // console.log(new Date(this.timeRange[0]) >= new Date(room.start))

              if (isGenderMatch && isRoomTypeMatch && isDateMatch && isDegreeMatch) {
                // If all filters match, add `the room to filteredData
                filteredData[location][building][floor].push(room);
              }else {
                console.log("Room not put:")
                console.log(room)
              }
            }
            console.log("Floor length")
            console.log(filteredData[location][building][floor].length)
            if (filteredData[location][building][floor].length ===0){
              delete filteredData[location][building][floor]
            }

          }
          console.log("Building Length")
          console.log(Object.keys(filteredData[location][building]).length)

          if (Object.keys(filteredData[location][building]).length === 0){
            delete filteredData[location][building]
          }

        }

        if (filteredData[location].length === 0){
          delete filteredData[location]
        }

        console.log("Newly filtered Data")
        console.log(filteredData)
        this.filteredData = filteredData

      }


    },

  },

  mounted() {
      axios.get('https://backend.susdorm.online/api/dorm-room/')
        .then(response => {
          this.APIFormData = response.data;
          this.APIFormData.forEach(item => {
            const { id,zone, building, type, floor, roomNumber,sex, start, end, degree } = item;

            if (!this.hierarchicalData[zone]) {
              this.hierarchicalData[zone] = {};
            }
            if (!this.hierarchicalData[zone][building]) {
              this.hierarchicalData[zone][building] = {};
            }

            if (!this.hierarchicalData[zone][building][floor]) {
              this.hierarchicalData[zone][building][floor] = [];
            }

            this.hierarchicalData[zone][building][floor].push({
              id, roomNumber,type,sex, start,end,degree
            });
          });

          this.showForm = true;
          this.filterData()
          console.log("Done mounting")

        })
        .catch(error => {
          this.APIFormData = '';
          this.error = error.message || 'An error occurred';
        });




    }


};
</script>

<style scoped>
/* Add your custom styles here */
.filter-style{
  margin-left: 20px;
  margin-right: 20px;

}

.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px;
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: grey;
  font-size: 14px;
  margin-bottom: 20px;
}

.el-radio-group{
  margin-top: 10px;
}
</style>
