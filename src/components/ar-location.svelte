<script>
  import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
  import { LocationBased, WebcamRenderer } from './node_modules/@ar-js-org/ar.js/three.js/build/ar-threex-location-only.js';

  let canvas;

  let renderer;
  let camera;
  let cam;

  $: canvas, init();

  const init = () => {
    if (canvas) {
      const scene = new Scene();
      camera = new PerspectiveCamera(60, 1.33, 0.1, 10000);
      renderer = new WebGLRenderer({canvas: canvas});

      const arjs = new LocationBased(scene, camera);
      cam = new WebcamRenderer(renderer);

      const geom = new BoxGeometry(20, 20, 20);
      const mtl = new MeshBasicMaterial({color: 0xff0000});
      const box = new Mesh(geom, mtl);
      arjs.add(box, -0.72, 51.051);


      arjs.fakeGps(-0.72, 51.05);

      requestAnimationFrame(render);
    }
  }

  const render = () => {
    if(canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
      const aspect = canvas.clientWidth/canvas.clientHeight;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
    }
    cam.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
</script>

<canvas bind:this={ canvas }></canvas>