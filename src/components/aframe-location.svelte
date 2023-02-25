<script>
  import { onMount } from "svelte";

  export let lat = 41.5378574;
  export let lon = 2.0434977;

  onMount(() => {
    AFRAME.registerComponent('clicker', {
      init: function() {
        this.el.addEventListener('click', e => {
          alert('lateralthink.club!');
        });
      }
    });
  })
</script>

<div>Lat: { lat } Lon: { lon }</div>
<a-scene vr-mode-ui='enabled: false' cursor='rayOrigin: mouse' raycaster='near: 0; far: 50000' arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: true' renderer='antialias: true; alpha: true'>
  <a-camera gps-new-camera='gpsMinDistance: 5'></a-camera>
  <!-- <a-entity material='color: red' geometry='primitive: box' gps-new-entity-place="latitude: { lat }; longitude: { lon }" scale="10 10 10" clicker></a-entity> -->
  <!-- <a-box gps-new-entity-place='latitude: { lat }; longitude: { lon }' color='red' scale='10 10 10' clicker></a-box> -->
  <a-text gps-new-entity-place='latitude: { lat }; longitude: { lon }' look-at="[gps-new-camera]" scale="7 7 7" value="Click me!" align="center" clicker></a-text>
</a-scene>
<div>Lon: { lon } Lat: { lat }</div>