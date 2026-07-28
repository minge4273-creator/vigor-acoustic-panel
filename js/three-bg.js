/* ============================================
   Three.js 3D Background - Interactive Panorama
   360-degree immersive room view with scroll zoom
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
  
  // 初始化基础视角 (FOV)，数值越大视野越广
  const baseFov = 75;
  const camera = new THREE.PerspectiveCamera(baseFov, window.innerWidth / window.innerHeight, 0.1, 1000);

  // 初始化渲染器，保留透明度和抗锯齿
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // ==========================================
  // 核心：创建全景球体 (Panorama Sphere)
  // ==========================================
  
  // 创建一个巨大的球体，半径为 500
  const geometry = new THREE.SphereGeometry(500, 60, 40);
  
  // 翻转 X 轴，使得贴图渲染在球体内部而不是外部
  geometry.scale(-1, 1, 1);

  // 加载全景图片 
  // 注意：根据你的描述，图片放在了 image 文件夹下。如果是 images 文件夹，请修改路径为 'images/room.jpg'
  const texture = new THREE.TextureLoader().load('image/room.jpg');
  
  // 使用基础材质（MeshBasicMaterial），不需要灯光即可显示
  const material = new THREE.MeshBasicMaterial({ map: texture });
  
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // ==========================================
  // 交互：鼠标移动与页面滚动监听
  // ==========================================
  
  let targetRotationX = 0;
  let targetRotationY = 0;
  let mouseX = 0;
  let mouseY = 0;
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;

  // 1. 鼠标移动监听 (控制轻微转动)
  document.addEventListener('mousemove', (event) => {
    // 将鼠标坐标转换为相对于屏幕中心的偏移量
    mouseX = (event.clientX - windowHalfX) * 0.0005;
    mouseY = (event.clientY - windowHalfY) * 0.0005;
  });

  // 2. 页面滚动监听 (控制拉近/拉远)
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // 根据滚动距离减小 FOV（视野），实现放大的拉近效果
    // 乘数 0.03 控制拉近的速度
    let newFov = baseFov - (scrollY * 0.03); 
    
    // 限制缩放范围，防止拉得太近 (最小 FOV 40) 或太远 (最大恢复 baseFov)
    camera.fov = Math.max(40, Math.min(newFov, baseFov)); 
    camera.updateProjectionMatrix();
  });

  // 3. 窗口尺寸自适应
  window.addEventListener('resize', () => {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ==========================================
  // 动画渲染循环
  // ==========================================
  
  function animate() {
    requestAnimationFrame(animate);

    // 使用缓动 (Lerp) 让视角转动更加平滑丝滑
    targetRotationX += (mouseX - targetRotationX) * 0.05;
    targetRotationY += (mouseY - targetRotationY) * 0.05;

    // 限制上下视角的转动幅度 (-0.15 到 0.15 弧度)，避免用户看到全景图顶部和底部的极点扭曲变形
    camera.rotation.x = Math.max(-0.15, Math.min(0.15, targetRotationY)); 
    
    // 左右跟随鼠标转动
    camera.rotation.y = targetRotationX;

    renderer.render(scene, camera);
  }

  // 启动动画
  animate();
})();
