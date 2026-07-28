/* ============================================
   Product Data & Catalog Functions
   Suzhou Vigor New Materials Co., Ltd.
   ============================================ */

const products = [
  {
    id: 'wood-veneer',
    name: 'Wood Veneer Acoustic Panel',
    nameZh: '木饰面吸音板',
    category: 'wood-veneer',
    categoryName: 'Wood Veneer Series',
    description: 'Premium wood veneer acoustic panels combining natural wood aesthetics with superior sound absorption. Ideal for high-end commercial spaces, conference rooms, auditoriums, and luxury interiors.',
    descriptionZh: '将天然木皮美学与卓越吸音性能相结合的高端木饰面吸音板。适用于高端商业空间、会议室、礼堂和豪华室内装饰。',
    icon: '🪵',
    pattern: 'diagonal-pattern',
    material: 'Natural Wood Veneer (Oak, Walnut, Cherry, Maple) + PET Fiber Core',
    color: 'Oak, Walnut, Cherry, Maple, Custom RAL/NCS Colors',
    thickness: '12mm, 15mm, 18mm',
    size: '600x600mm, 600x1200mm, Custom Sizes Available',
    density: '180-220 kg/m³',
    nrc: '0.75-0.95 (NRC)',
    fireRating: 'Class B1 (GB 8624)',
    application: 'Conference Rooms, Auditoriums, Hotels, Offices, Home Theaters, Recording Studios',
    features: [
      'Natural wood grain texture with premium finish',
      'Excellent sound absorption across wide frequency range',
      'Eco-friendly PET fiber core, zero formaldehyde',
      'Easy installation with clip system or adhesive',
      'Moisture resistant and dimensionally stable',
      'Available in multiple wood species and custom stains'
    ],
    details: 'Our Wood Veneer Acoustic Panels are crafted using the finest natural wood veneers bonded to a high-density PET fiber acoustic core. Each panel undergoes a meticulous manufacturing process including precision cutting, edge sealing, and surface finishing to ensure consistent quality and aesthetic appeal. The micro-porous structure of the PET core effectively absorbs sound waves across a broad frequency spectrum, significantly reducing reverberation and improving speech clarity in any space. The natural wood veneer not only provides a luxurious appearance but also offers durability and easy maintenance. Custom sizes, colors, and perforation patterns are available upon request to meet specific project requirements.'
  },
  {
    id: 'ps-salt',
    name: 'PS Salt Acoustic Panel',
    nameZh: 'PS盐晶吸音板',
    category: 'ps-salt',
    categoryName: 'PS Salt Series',
    description: 'Innovative acoustic panels featuring natural salt crystal elements embedded in a premium PS frame. Combining the health benefits of salt therapy with outstanding acoustic performance.',
    descriptionZh: '创新的吸音板，将天然盐晶元素嵌入优质PS框架中。结合盐疗的健康效益与出色的声学性能。',
    icon: '🧂',
    pattern: 'hex-pattern',
    material: 'PS Frame + Natural Himalayan Salt Crystals + Acoustic Fabric',
    color: 'White, Pink Salt, Grey, Beige, Custom Colors',
    thickness: '25mm, 40mm',
    size: '600x600mm, 600x1200mm',
    density: '80-120 kg/m³ (frame)',
    nrc: '0.80-0.90 (NRC)',
    fireRating: 'Class B1 (GB 8624)',
    application: 'Wellness Centers, Spas, Yoga Studios, Meditation Rooms, Healthcare Facilities, Luxury Residences',
    features: [
      'Natural Himalayan salt crystal inlay for air purification',
      'Negative ion release for improved indoor air quality',
      'Superior mid-to-high frequency sound absorption',
      'Unique aesthetic with backlighting capability',
      'Lightweight and easy to install',
      'Moisture regulating properties'
    ],
    details: 'The PS Salt Acoustic Panel represents a breakthrough in functional interior design, merging acoustic engineering with wellness technology. Each panel features carefully selected Himalayan salt crystals embedded within a precision-molded PS frame, backed by high-performance acoustic fabric. When illuminated, the translucent salt crystals create a warm, soothing amber glow that transforms any space into a sanctuary of calm. The salt crystals naturally release negative ions, contributing to improved air quality and a sense of well-being. The panel\'s multi-layer construction effectively manages sound reflections while adding a distinctive decorative element that serves as both art and function.'
  },
  {
    id: 'hexagon-wood',
    name: 'Hexagon Wood Acoustic Panel',
    nameZh: '六边形木质吸音板',
    category: 'hexagon-wood',
    categoryName: 'Hexagon Series',
    description: 'Striking hexagonal wooden acoustic panels that create dynamic geometric wall patterns. Perfect for modern interiors seeking both visual impact and acoustic excellence.',
    descriptionZh: '引人注目的六边形木质吸音板，创造动态几何墙面图案。完美适用于追求视觉冲击力和声学卓越的现代室内空间。',
    icon: '⬡',
    pattern: 'hex-pattern',
    material: 'MDF/Wood Core + Acoustic Felt Backing',
    color: 'Natural Wood, Walnut, Grey, Black, White, Custom Colors',
    thickness: '12mm, 15mm, 18mm',
    size: 'Hexagon 300mm (point-to-point), Custom Sizes',
    density: '200-250 kg/m³',
    nrc: '0.70-0.90 (NRC)',
    fireRating: 'Class B1 (GB 8624)',
    application: 'Modern Offices, Creative Spaces, Retail Stores, Restaurants, Hotel Lobbies, TV Studios',
    features: [
      'Unique hexagonal shape for creative wall designs',
      'Modular system for endless pattern configurations',
      'Premium wood finish with acoustic felt backing',
      'Excellent mid-frequency sound absorption',
      'Can be mixed with different colors for artistic effects',
      'Simple clip-mount installation system'
    ],
    details: 'The Hexagon Wood Acoustic Panel brings geometry and acoustics together in perfect harmony. Each hexagonal module is precision-cut from high-quality MDF with a real wood veneer or painted finish, backed by dense acoustic felt that provides exceptional sound dampening. The modular hexagonal design allows for creative freedom — arrange panels in honeycomb clusters, flowing waves, gradient patterns, or scattered artistic compositions. The three-dimensional relief created by the panel edges adds depth and visual interest to any wall surface. Whether used as a full-wall acoustic treatment or as a decorative feature element, these panels deliver both outstanding acoustic performance and unmistakable design character.'
  },
  {
    id: 'curved-flexible',
    name: 'Curved Flexible Acoustic Panel',
    nameZh: '曲面柔性吸音板',
    category: 'curved-flexible',
    categoryName: 'Curved Series',
    description: 'Flexible acoustic panels that can be curved and shaped to fit any surface contour. Ideal for architectural features, curved walls, columns, and creative ceiling designs.',
    descriptionZh: '可弯曲成型的柔性吸音板，适应任何表面轮廓。适用于建筑特色、曲面墙体、圆柱和创意天花设计。',
    icon: '🌀',
    pattern: 'wave-pattern',
    material: 'Flexible PET Fiber + Fabric Covering',
    color: 'Wide Range of Colors Available, Custom Printing Options',
    thickness: '9mm, 12mm, 15mm',
    size: '1200x2400mm Sheets, Custom Dimensions',
    density: '150-200 kg/m³',
    nrc: '0.80-0.95 (NRC)',
    fireRating: 'Class B1 (GB 8624)',
    application: 'Architectural Features, Curved Walls, Auditoriums, Concert Halls, Theaters, Exhibition Spaces',
    features: [
      'Flexible design conforms to curved surfaces',
      'Can be bent to minimum radius of 300mm',
      'Available in endless color and fabric options',
      'Outstanding broadband sound absorption',
      'Lightweight yet durable construction',
      'Suitable for walls, ceilings, and suspended baffles'
    ],
    details: 'The Curved Flexible Acoustic Panel is engineered for architectural freedom. Made from a specialized PET fiber composite that maintains acoustic performance even when curved, these panels open up new possibilities for acoustic treatment in non-planar spaces. The panels can be cold-bent to a minimum radius of 300mm without cracking or losing structural integrity, making them ideal for wrapping columns, creating flowing ceiling clouds, or forming organic wall features. The fabric covering is available in a vast palette of colors and can even be custom-printed with patterns or imagery. Despite their flexibility, these panels deliver industry-leading NRC values and meet stringent fire safety standards, making them suitable for the most demanding commercial and institutional projects.'
  },
  {
    id: 'special-shape',
    name: 'Special Shape Wood Acoustic Panel',
    nameZh: '异形木质吸音板',
    category: 'special-shape',
    categoryName: 'Special Shape Series',
    description: 'Custom-shaped wooden acoustic panels manufactured to your exact specifications. From abstract art forms to functional acoustic sculptures, we bring your vision to life.',
    descriptionZh: '按您的精确规格定制的异形木质吸音板。从抽象艺术形式到功能性声学雕塑，我们将您的愿景变为现实。',
    icon: '🔷',
    pattern: 'organic-pattern',
    material: 'Custom Wood Species + PET/Acoustic Foam Core',
    color: 'Fully Customizable — Any Wood Species, Stain, or Paint Finish',
    thickness: 'Custom (12mm-50mm)',
    size: 'Fully Custom — CAD/CAM Manufactured',
    density: 'Custom Based on Design Requirements',
    nrc: '0.70-0.95 (NRC, Design Dependent)',
    fireRating: 'Class B1 Available (GB 8624)',
    application: 'Feature Walls, Brand Spaces, Luxury Retail, Museums, Airports, Custom Architectural Projects',
    features: [
      'Fully customizable shapes and patterns',
      'CAD/CAM precision manufacturing',
      'Any wood species, finish, or color available',
      'Can integrate lighting and acoustic elements',
      '3D relief and sculptural possibilities',
      'End-to-end project support from design to installation'
    ],
    details: 'The Special Shape Wood Acoustic Panel service is where craftsmanship meets customization. Our advanced CAD/CAM manufacturing facility can produce acoustic panels in virtually any shape, pattern, or configuration you can imagine. From flowing organic forms to precise geometric patterns, from subtle 3D relief textures to bold sculptural statements — every project is a unique collaboration between your design vision and our manufacturing expertise. We work with architects, interior designers, and artists to develop custom solutions that seamlessly integrate acoustic performance with architectural expression. Each panel is individually crafted, quality-checked, and finished to the highest standards. Our engineering team provides comprehensive support throughout the process, from initial concept development through to installation guidance.'
  }
];

// Product search and filter
function renderProductCards(filterCategory, searchQuery) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  let filtered = products;

  if (filterCategory && filterCategory !== 'all') {
    filtered = filtered.filter(p => p.category === filterCategory);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.nameZh.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results animate-fade-in">
        <div class="no-results-icon">🔍</div>
        <h3>No Products Found</h3>
        <p>Try adjusting your search or filter criteria.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((p, i) => `
    <a href="product-detail.html?id=${p.id}" class="product-card animate-fade-in-up delay-${(i % 4) + 1}">
      <div class="product-card-img">
        <div class="pattern ${p.pattern}"></div>
        <span class="icon-placeholder">${p.icon}</span>
      </div>
      <div class="product-card-body">
        <div class="product-card-category">${p.categoryName}</div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <span class="product-card-link">View Details →</span>
      </div>
    </a>
  `).join('');
}

// Product detail
function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = products.find(p => p.id === productId);

  if (!product) {
    document.getElementById('product-detail-container').innerHTML = `
      <div class="no-results" style="padding:120px 0">
        <div class="no-results-icon">📦</div>
        <h3>Product Not Found</h3>
        <p>The product you are looking for does not exist.</p>
        <a href="products.html" class="btn btn-primary" style="margin-top:20px">Back to Products</a>
      </div>
    `;
    return;
  }

  document.title = `${product.name} - Suzhou Vigor`;
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-category').textContent = product.categoryName;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-icon').textContent = product.icon;

  // Set pattern on main image
  const mainImg = document.getElementById('product-main-img');
  mainImg.className = 'product-main-img ' + product.pattern;

  // Update WhatsApp link
  const waLink = document.getElementById('whatsapp-product-link');
  if (waLink) {
    waLink.href = `https://wa.me/8613812831131?text=Hello, I am interested in ${encodeURIComponent(product.name)}. Please send me more information.`;
  }

  // Specs table
  const specsHTML = `
    <tr><td>Material</td><td>${product.material}</td></tr>
    <tr><td>Color Options</td><td>${product.color}</td></tr>
    <tr><td>Thickness</td><td>${product.thickness}</td></tr>
    <tr><td>Standard Size</td><td>${product.size}</td></tr>
    <tr><td>Density</td><td>${product.density}</td></tr>
    <tr><td>Sound Absorption</td><td>${product.nrc}</td></tr>
    <tr><td>Fire Rating</td><td>${product.fireRating}</td></tr>
    <tr><td>Application</td><td>${product.application}</td></tr>
  `;
  document.getElementById('specs-table').innerHTML = specsHTML;
  const fullSpecs = document.getElementById('full-specs-table');
  if (fullSpecs) fullSpecs.innerHTML = specsHTML;

  // Features
  document.getElementById('detail-features').innerHTML = product.features.map(f => `
    <div class="detail-feature">
      <span class="detail-feature-icon">✦</span>
      <span>${f}</span>
    </div>
  `).join('');

  // Detail description
  document.getElementById('detail-description').textContent = product.details;

  // Thumbnails
  document.getElementById('product-thumbnails').innerHTML = ['🎨', '📐', '🔧', '📋'].map((icon, i) => `
    <div class="product-thumb ${i === 0 ? 'active' : ''}" onclick="switchThumbnail(this, '${icon}')">${icon}</div>
  `).join('');
}

function switchThumbnail(el, icon) {
  document.querySelectorAll('.product-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('product-icon').textContent = icon;
}

// Tab switching
function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
  document.getElementById(`tab-${tabName}`).classList.add('active');
}

// Filter tabs on products page
document.addEventListener('DOMContentLoaded', () => {
  // Product search
  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const activeFilter = document.querySelector('.filter-tab.active')?.dataset.category || 'all';
      renderProductCards(activeFilter, searchInput.value);
    });
  }

  // Filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.dataset.category;
      const query = document.getElementById('product-search')?.value || '';
      renderProductCards(category, query);
    });
  });
});
