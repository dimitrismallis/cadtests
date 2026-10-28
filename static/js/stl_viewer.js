// Interactive 3D view of the generated model in the "CADTests in action" section.
// Drag to rotate. Zoom is off so the mouse wheel keeps scrolling the page,
// which drives the test animation.

// Loaded as a classic script with dynamic imports, so it also runs from file://.

(async function() {
  const container = document.getElementById('cadtests-model');
  const example = window.CADTESTS_EXAMPLE;
  if (!container || !example || !example.modelData) return;

  const THREE = await import('three');
  const { STLLoader } = await import('three/addons/loaders/STLLoader.js');
  const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8f99, 2.2));
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
  keyLight.position.set(1, 2, 1.5);
  scene.add(keyLight);

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 5000);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.5;
  // Stop spinning once the viewer has been touched.
  controls.addEventListener('start', () => { controls.autoRotate = false; });

  const bytes = Uint8Array.from(atob(example.modelData), c => c.charCodeAt(0));
  const geometry = new STLLoader().parse(bytes.buffer);
  // CAD exports are Z-up; three.js is Y-up.
  geometry.rotateX(-Math.PI / 2);
  geometry.computeBoundingBox();
  const center = geometry.boundingBox.getCenter(new THREE.Vector3());
  geometry.translate(-center.x, -center.y, -center.z);
  geometry.computeVertexNormals();

  // Grey faces with dark feature edges, matching the B-Rep renders on the page.
  const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
    color: 0x9aa0a6, roughness: 0.75, metalness: 0.0,
    polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1,
  }));
  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry, 20),
    new THREE.LineBasicMaterial({ color: 0x3a3f4a })
  );
  scene.add(mesh, edges);

  // Frame the model from an isometric-style viewpoint.
  const radius = geometry.boundingBox.getSize(new THREE.Vector3()).length() / 2;
  const distance = radius / Math.sin(THREE.MathUtils.degToRad(camera.fov / 2)) * 0.95;
  camera.position.set(1, 0.8, 1).normalize().multiplyScalar(distance);
  controls.target.set(0, 0, 0);
  controls.update();

  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(container);
  resize();

  renderer.setAnimationLoop(function() {
    controls.update();
    renderer.render(scene, camera);
  });
})();
