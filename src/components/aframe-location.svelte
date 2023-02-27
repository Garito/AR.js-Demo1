<script>
  import { onMount } from "svelte";

  export let lat = 41.5378574;
  export let lon = 2.0434977;
  export let entity = 'text';
  export let value;

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

<a-scene vr-mode-ui='enabled: false' cursor='rayOrigin: mouse' raycaster='near: 0; far: 50000' arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: true' renderer='antialias: true; alpha: true'>
  <a-camera gps-new-camera='gpsMinDistance: 5'></a-camera>
  {#if entity === 'text'}
    <a-text gps-new-entity-place='latitude: { lat }; longitude: { lon }' look-at="[gps-new-camera]" scale="10 10 10" value={ value } align="center" clicker></a-text>
  {:else if entity === 'cube'}
    <a-box gps-new-entity-place='latitude: { lat }; longitude: { lon }' color={ value } scale='10 10 10' clicker></a-box>
  {:else if entity === 'model'}
    <a-entity gps-new-entity-place='latitude: { lat }; longitude: { lon }' scale="20 20 20" gltf-model="url({ value })" look-at="[gps-new-camera]" clicker></a-entity>
  {/if}
</a-scene>