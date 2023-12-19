<template>
  <div>
    <div ref="smplrContainer2" id="test" class="smplr-container"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { loadSmplrJs } from '@smplrspace/smplr-loader';
import { evolve, map } from 'ramda';
import {Stall, stalls } from 'static/smplrdata/dataset.js';

const INITIAL_MODE = '3d';

export default {
  name: 'Smplr2',
  setup() {
    const smplrContainer2 = ref(null);
    let space;

    onMounted(() => {
      loadSmplrJs('umd')
        .then((smplr) => {
          space = initSpace(smplr);
          space.startViewer({
            preview: true,
            mode: INITIAL_MODE,
            allowModeChange: true,
            onModeChange: (mode) => updateDataLayers(mode),
            onReady: () => updateDataLayers(INITIAL_MODE),
            onError: (error) => console.error('Could not start viewer', error),
          });
        })
        .catch((error) => console.error(error));
    });

    function initSpace(smplr) {
      const spaceInstance = new smplr.Space({
        spaceId:'a9041489-286b-430f-8600-1b4cdbd077b3',
        clientToken:'pub_29d3e5ca0d904b0f880def106ad6467c',
        containerId: 'test',
      });
      return spaceInstance;
    }

    function updateDataLayers(mode) {
      // remove previous layers if any
      space.removeDataLayer('stalls');
      space.removeDataLayer('sensors');
      space.removeDataLayer('beacons');
      space.removeDataLayer('beacons-range');

      // add new layers
      space.addDataLayer({
        id: 'stalls',
        type: 'polygon',
        data: stalls,
        // tooltip: (d) => `${d.name} - ${d.hits} hits`,
        tooltip: (d) => `${d.name} - ${d.available ? 'free' : 'occupied'}`,
        color: (d) => (d.available ? '#50b268' : '#f75e56'),
        alpha: 0.7,
        height: mode === '3d' ? 1.9 : 0.0045,
      });
    }

    const autoElevation = (mode) =>
      map(
        evolve({
          position: { elevation: (value) => (mode === '3d' ? value : 0) },
        })
      );

    return { smplrContainer2 };
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>

