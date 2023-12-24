// Define a type for unknown data
const UnknownData = {};

// Define the Stall interface extending from UnknownData
function Stall(name, available,coordinates) {
  this.name = name;
  this.available=  available;
  this.coordinates = coordinates;
}

// Example data

const stalls = [

  // 1. (15.3915, -35.0258) ------------ 2.(15.3728, -40.5269)
  //              |                                |
  //              |                                |
  // 4. (10.7574, -35.0316) ------------ 3. (10.7574, -40.5269)

  new Stall('Stall 8', true,[
    { levelIndex: 0, x: 3, z: 0, elevation: 0.0000000000000036 },
    { levelIndex: 0, x: 3, z: -3, elevation: 0.0000000000000036 },
    { levelIndex: 0, x: 0, z: -3, elevation: 1 },
    { levelIndex: 0, x: 0, z: 0, elevation: 1 },
  ]),
  new Stall('Stall 9', false,[
    { levelIndex: 0, x: 6.1, z: 0, elevation: 0.0000000000000036 },
    { levelIndex: 0, x: 6.1, z: -3, elevation: 0.0000000000000036 },
    { levelIndex: 0, x: 3.1, z: -3, elevation: 1 },
    { levelIndex: 0, x: 3.1, z: 0, elevation: 1 },
  ])
  // ... (similar entries for other stalls)
];

// Export the type and data
module.exports = { Stall, stalls };
