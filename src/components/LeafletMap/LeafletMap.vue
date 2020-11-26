<template>
  <div ref="mapCont" class="map-container">LEAF</div>
</template>

<script lang="ts">
import Vue from 'vue';

import { MapViewModel } from './viewmodels/map.vm';
import { MarkerViewModel } from './viewmodels/marker.vm';

interface Methods {
  vmMap: MapViewModel;
  vmMarkers: MarkerViewModel[];
}

// TODO 1: render map
// map = new MapViewModel(el as HTMLElement);

// TODO 2: render markers
// marker = map.createMarker({lat: 123, lng: 456});

// TODO 3: handle marker click event
// marker.on('click', (geoObj) => {
//   // geoObj === geoObject used to create marker
// });

export default Vue.extend<{}, {}, Methods, {}>({
  name: 'LeafletMap',
});
</script>

<style scoped>
.map-container {
  height: 460px;
  background-color: aqua;
  border: 1px solid #777;
  margin: 10px;
  z-index: 1;
}
</style>
