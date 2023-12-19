<template>
  <div id ='smplr' :ref="smplrContainer"></div>
</template>


<script>
import { ref, onMounted } from 'vue';
import {  loadSmplrJs } from '@smplrspace/smplr-loader';

export default {
  name: 'SmplrSpace',
  props: {
    spaceId: String,
    clientToken: String,
    containerId: String
  },
  setup(props) {
    const smplrContainer = ref(null);

    onMounted(() => {
      loadSmplrJs('umd')
        .then((smplr) => initSpace(smplr, props, 'smplr'))
        .catch((error) => console.error(error));
    });

    function initSpace(smplr, props, containerId) {
      const space = new smplr.Space({
        spaceId: props.spaceId,
        clientToken: props.clientToken,
        containerId: containerId,
      });
      console.log("space "+ space.spaceId)
      space.startViewer({
        preview: true,
        onReady: () => console.log('Viewer is ready'),
        onError: (error) => console.error('Could not start viewer', error),
      });
    }


    return { smplrContainer };
  },
};
</script>

<style scoped>
/* Your component-specific styles can go here */
</style>
