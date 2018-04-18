<template>
  <div>
    <baidu-map :center="center"
               :zoom="zoom"
               :scroll-wheel-zoom="true"
               @ready="handler" class="map">
      <bml-marker-clusterer :averageCenter = "true">
        <bm-marker v-for="marker of markers" :position="{lng: marker.lng, lat: marker.lat}"></bm-marker>
      </bml-marker-clusterer>
    </baidu-map>
    <button @click="addMarkers">添加markers</button>
  </div>
</template>
<script>
  import {BmlMarkerClusterer} from 'vue-baidu-map'
  export default {
    data () {
      return {
        center: {lng: 0, lat: 0},
        zoom: 3,
        markers :[]
      }
    },
    methods: {
      handler ({BMap, map}) {
        console.log(BMap, map)
        this.center.lng = 116.404
        this.center.lat = 39.915
        this.zoom = 3
      },
      addMarkers () {
        let tempMarkers = []
        for(let i = 0; i < 10; i++ ){
          let position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
          tempMarkers.push(position)
        }
        this.markers.push(...tempMarkers)
      }
    },
    components: {
      BmlMarkerClusterer
    }
  }
</script>
<style>
  .map {
    width: 100%;
    height: 600px;
  }
</style>
