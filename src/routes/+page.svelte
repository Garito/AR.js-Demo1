<script>
  import { onMount, onDestroy } from 'svelte';

  import { currentLocation } from '../stores/geolocation';

  // import ArLocation from '../components/ar-location.svelte';
  import AframeLocation from '../components/aframe-location.svelte';

  let lat;
  let lon;
  let entity;
  let value;

  let go = false;

  const setLocation = () => {
    lat = $currentLocation.lat;
    lon = $currentLocation.lon;
  }

  onMount(() => { currentLocation.init() });
  // onDestroy(() => { currentLocation.close() });
</script>

<div class="p-5">
  <div class="current">
    <h2 class="text-xl">Location</h2>
    <div>Latitude: { $currentLocation.lat } Longitude: { $currentLocation.lon } Accuracy: { $currentLocation.acc }</div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4" on:click={ setLocation }>
      Set this location
    </button>
    <div class="flex gap-4">
      <input type="radio" id="text" name="entity" bind:group={ entity} value="text" />
      <label for="text">Text</label>
      <input type="radio" id="cube" name="entity" bind:group={ entity} value="cube" />
      <label for="cube">Cube</label>
      <input type="radio" id="model" name="entity" bind:group={ entity} value="model" />
      <label for="model">Model</label>
    </div>
  </div>
  <div>
    {#if ['text', 'model'].includes(entity) }
      <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" bind:value={ value } />
    {:else if entity === 'cube'}
      <input type="color" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" bind:value={ value }>
    {/if}
  </div>
  <div class="mt-4">
    <h2 class="text-xl">Setted</h2>
    <div>Latitude: { lat } Longitude: { lon } Type: { entity } Value: { value }</div>
  </div>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4" on:click={ () => { go = true } }>
    Go!
  </button>

  <!-- <ArLocation /> -->
  {#if go}
    <AframeLocation { lat } { lon } { entity } { value } />
  {/if}
</div>