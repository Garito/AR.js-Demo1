import { writable } from "svelte/store";

const createLocationStore = () => {
  const { subscribe, set } = writable({ lat: 0, lon: 0, acc: 0 });

  const success = pos => {
    set({ lat: pos.coords.latitude, lon: pos.coords.longitude, acc: pos.coords.accuracy });
  }

  const error = err => { set(err) }

  const init = userOpts => {
    const defautOpts = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    navigator.geolocation.getCurrentPosition(success, error, Object.assign({}, defautOpts, userOpts));
  }

  return { subscribe, init }
}
export const currentLocation = createLocationStore();