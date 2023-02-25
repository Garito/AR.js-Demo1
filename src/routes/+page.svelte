<script>
  import { onMount, onDestroy } from 'svelte';

  import { currentLocation } from '../stores/geolocation';

  // import ArLocation from '../components/ar-location.svelte';
  import AframeLocation from '../components/aframe-location.svelte';

  let lat;
  let lon;

  const setLocation = () => {
    lat = $currentLocation.lat;
    lon = $currentLocation.lon;
  }

  onMount(() => { currentLocation.init() });
  // onDestroy(() => { currentLocation.close() });
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>
  <div class="current">
    <h2>Location</h2>
    <div>Latitude: { $currentLocation.lat }</div>
    <div>Longitude: { $currentLocation.lon }</div>
    <div>Accuracy: { $currentLocation.acc }</div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={ setLocation }>
      Set this location
    </button>
  </div>
  <div class="setted">
    <h2>Setted</h2>
    <div>Latitude: { lat }</div>
    <div>Longitude: { lon }</div>
  </div>

  <!-- <ArLocation /> -->
  {#if lat && lon}
    <AframeLocation { lat } { lon } />
  {/if}
</div>