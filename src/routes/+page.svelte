<script>
  import { currentLocation } from '../stores/geolocation';

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>
  <h2>Location</h2>
  <div>Latitude: { $currentLocation.lat }</div>
  <div>Longitude: { $currentLocation.lon }</div>
  <div>Accuracy: { $currentLocation.acc }</div>
</div>