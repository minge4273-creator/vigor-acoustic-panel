/* ============================================
   Three.js 3D Background - Acoustic Panel Theme
   Geometric hexagons & wave patterns
   ============================================ */

(function() {
  const canvas = document.getElementById('three-canvas');
  if (!canvas) return;

  // Check if Three.js is available
  if (typeof THREE === 'undefined') {
    console.warn('Three.js not loaded');
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 12;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x3a3a5c, 0.5);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0xc8944a, 0.8, 30);
  pointLight1.position.set(5, 3, 8);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xc8944a, 0.5, 30);
  pointLight2.position.set(-5, -2, 6);
  scene.add(pointLight2);

  // Create hexagon geometry
  function createHexagonGeometry(radius) {
    const shape = new THREE.Shape();
    const sides = 6;
    for (let i = 0; i < sides; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return new THREE.ShapeGeometry(shape);
  }

  // Create a grid of hexagon panels
  const hexagons = [];
  const hexRadius = 0.45;
  const cols = 8;
  const rows = 6;
  const spacingX = hexRadius * 2.2;
  const spacingY = hexRadius * Math.sqrt(3) * 1.1;

  const materialGold = new THREE.MeshStandardMaterial({
    color: 0xc8944a,
    metalness: 0.3,
    roughness: 0.4,
    transparent: true,
    opacity: 0.7
  });

  const materialDark = new THREE.MeshStandardMaterial({
    color: 0x2d2d4a,
    metalness: 0.2,
    roughness: 0.6,
    transparent: true,
    opacity: 0.5
  });

  const materialLight = new THREE.MeshStandardMaterial({
    color: 0x4a4a6a,
    metalness: 0.15,
    roughness: 0.5,
    transparent: true,
    opacity: 0.4
  });

  const startX = -(cols - 1) * spacingX / 2;
  const startY = -(rows - 1) * spacingY / 2;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = startX + col * spacingX + (row % 2 === 0 ? 0 : spacingX / 2);
      const y = startY + row * spacingY;
      const z = (Math.random() - 0.5) * 3;

      // Pick material based on position pattern
      let mat;
      if ((row + col) % 3 === 0) mat = materialGold;
      else if ((row + col) % 3 === 1) mat = materialDark;
      else mat = materialLight;

      const hex = new THREE.Mesh(createHexagonGeometry(hexRadius), mat);
      hex.position.set(x, y, z);
      hex.rotation.z = Math.random() * Math.PI * 2 * 0.05;

      // Store animation data
      hex.userData = {
        baseY: y,
        baseZ: z,
        speed: 0.3 + Math.random() * 0.7,
        amplitude: 0.15 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2
      };

      scene.add(hex);
      hexagons.push(hex);
    }
  }

  // Floating particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 150;
  const positions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    color: 0xc8944a,
    size: 0.04,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending
  });

  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  // Mouse tracking
  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;

  document.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
    targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // Animation loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsed = clock.getElapsedTime();

    // Smooth mouse follow
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;

    // Animate hexagons
    hexagons.forEach((hex) => {
      const ud = hex.userData;
      const wave = Math.sin(elapsed * ud.speed + ud.phase);
      hex.position.y = ud.baseY + wave * ud.amplitude;
      hex.position.z = ud.baseZ + wave * ud.amplitude * 0.5;
      hex.rotation.z += 0.002;
    });

    // Move particles
    particles.rotation.y += 0.0003;
    particles.rotation.x += 0.0002;

    // Camera subtle movement based on mouse
    camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.02;
    camera.position.y += (mouseY * 0.8 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  // Handle resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  animate();
})();
