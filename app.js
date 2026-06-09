// ----------------------------------------------------------------
// FGOParfum - Lógica de la Aplicación y Caracteristicas PWA
// ----------------------------------------------------------------

// Application State
let cart = [];
let deferredPrompt = null;
let currentQuizStep = 1;
let quizAnswers = {
  recipient: '',
  vibe: '',
  notes: ''
};

// DOM Elements
const doc = {
  header: document.getElementById('main-header'),
  menuToggle: document.getElementById('menu-toggle'),
  navMenu: document.getElementById('nav-menu'),
  navLinks: document.querySelectorAll('.nav-link'),
  
  productsGrid: document.getElementById('products-grid'),
  categoryFilters: document.getElementById('category-filters'),
  scentSelect: document.getElementById('scent-family-select'),
  searchInput: document.getElementById('search-input'),
  
  cartDrawer: document.getElementById('cart-drawer'),
  cartItems: document.getElementById('cart-items-container'),
  cartCount: document.getElementById('cart-count'),
  cartTotal: document.getElementById('cart-total-price'),
  btnOpenCart: document.getElementById('btn-open-cart'),
  btnCloseCart: document.getElementById('btn-close-cart'),
  btnCheckout: document.getElementById('btn-checkout'),
  backdrop: document.getElementById('backdrop'),
  
  modal: document.getElementById('product-modal'),
  modalBody: document.getElementById('modal-content-body'),
  btnCloseModal: document.getElementById('btn-close-modal'),
  
  quizStep1: document.getElementById('quiz-step-1'),
  quizStep2: document.getElementById('quiz-step-2'),
  quizStep3: document.getElementById('quiz-step-3'),
  quizResults: document.getElementById('quiz-results'),
  quizProgress: document.getElementById('quiz-progress-bar'),
  btnQuizPrev: document.getElementById('btn-quiz-prev'),
  btnQuizReset: document.getElementById('btn-quiz-reset'),
  recommendedContainer: document.getElementById('recommended-container'),
  
  pwaBanner: document.getElementById('pwa-install-banner'),
  btnPwaInstall: document.getElementById('btn-pwa-install'),
  btnPwaClose: document.getElementById('btn-pwa-close'),
  pwaHeroBanner: document.getElementById('pwa-hero-banner'),
  btnPwaHeroInstall: document.getElementById('btn-pwa-hero-install'),
  
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toast-message'),
};

// ----------------------------------------------------------------
// 1. Initial Setup & Event Listeners
// ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Load Cart from LocalStorage
  loadCart();
  
  // Render Featured Products or All Products initially
  renderProducts(PRODUCTS);
  
  // Setup Event Listeners
  initEventListeners();
  
  // Register Service Worker for PWA
  registerServiceWorker();
});

// Event Listeners Registration
function initEventListeners() {
  // Sticky Header on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      doc.header.classList.add('scrolled');
    } else {
      doc.header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  if (doc.menuToggle) {
    doc.menuToggle.addEventListener('click', () => {
      doc.navMenu.classList.toggle('open');
      // Toggle Hamburger Icon lines animation
      const spans = doc.menuToggle.querySelectorAll('span');
      spans[0].style.transform = doc.navMenu.classList.contains('open') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
      spans[1].style.opacity = doc.navMenu.classList.contains('open') ? '0' : '1';
      spans[2].style.transform = doc.navMenu.classList.contains('open') ? 'rotate(-45deg) translate(6px, -6px)' : 'none';
    });
  }

  // Navigation menu clicks & filtering
  doc.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      doc.navMenu.classList.remove('open');
      const targetCategory = link.dataset.category;
      
      // Update active nav link
      doc.navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      // Sync filter buttons in product section
      const filterBtns = doc.categoryFilters.querySelectorAll('.filter-btn');
      filterBtns.forEach(btn => {
        if (btn.dataset.category === targetCategory) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      
      // Filter catalog
      filterCatalog();
      
      // Smooth scroll to catalog section if it exists
      const targetSection = document.getElementById('coleccion');
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Product Grid Category Filters
  if (doc.categoryFilters) {
    doc.categoryFilters.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        const filterBtns = doc.categoryFilters.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Sync Nav Links
        doc.navLinks.forEach(link => {
          if (link.dataset.category === e.target.dataset.category) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
        
        filterCatalog();
      }
    });
  }

  // Scent Family Filter Select
  if (doc.scentSelect) {
    doc.scentSelect.addEventListener('change', filterCatalog);
  }

  // Search Input live typing
  if (doc.searchInput) {
    doc.searchInput.addEventListener('input', filterCatalog);
  }

  // Cart Drawer open/close
  if (doc.btnOpenCart) {
    doc.btnOpenCart.addEventListener('click', openCartDrawer);
  }
  if (doc.btnCloseCart) {
    doc.btnCloseCart.addEventListener('click', closeCartDrawer);
  }
  if (doc.backdrop) {
    doc.backdrop.addEventListener('click', () => {
      closeCartDrawer();
      closeModal();
    });
  }

  // Modal Close
  if (doc.btnCloseModal) {
    doc.btnCloseModal.addEventListener('click', closeModal);
  }

  // WhatsApp Checkout Action
  if (doc.btnCheckout) {
    doc.btnCheckout.addEventListener('click', sendOrderToWhatsApp);
  }

  // Quiz Options Click
  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const step = parseInt(btn.parentElement.dataset.step);
      const answerValue = btn.dataset.value;
      
      if (step === 1) {
        quizAnswers.recipient = answerValue;
        goToQuizStep(2);
      } else if (step === 2) {
        quizAnswers.vibe = answerValue;
        goToQuizStep(3);
      } else if (step === 3) {
        quizAnswers.notes = answerValue;
        showQuizResults();
      }
    });
  });

  // Quiz Prev navigation
  if (doc.btnQuizPrev) {
    doc.btnQuizPrev.addEventListener('click', () => {
      if (currentQuizStep > 1) {
        goToQuizStep(currentQuizStep - 1);
      }
    });
  }

  // Quiz Reset
  if (doc.btnQuizReset) {
    doc.btnQuizReset.addEventListener('click', resetQuiz);
  }

  // PWA banner buttons
  if (doc.btnPwaClose) {
    doc.btnPwaClose.addEventListener('click', () => {
      doc.pwaBanner.classList.remove('show');
    });
  }
  if (doc.btnPwaInstall) {
    doc.btnPwaInstall.addEventListener('click', triggerPWAInstall);
  }
  if (doc.btnPwaHeroInstall) {
    doc.btnPwaHeroInstall.addEventListener('click', triggerPWAInstall);
  }
}

// ----------------------------------------------------------------
// 2. Catalog Rendering & Filtering
// ----------------------------------------------------------------
function renderProducts(productsList) {
  if (!doc.productsGrid) return;
  
  if (productsList.length === 0) {
    doc.productsGrid.innerHTML = `
      <div class="empty-cart-message" style="grid-column: 1 / -1; padding: 4rem 0;">
        <i class="fas fa-search" style="font-size: 2rem; color: var(--text-muted); margin-bottom: 1rem; display: block;"></i>
        No se encontraron fragancias con los filtros seleccionados.
      </div>
    `;
    return;
  }
  
  doc.productsGrid.innerHTML = productsList.map(prod => {
    const isFeaturedBadge = prod.featured ? `<div class="product-badge">Destacado</div>` : '';
    
    return `
      <div class="product-card" data-id="${prod.id}">
        ${isFeaturedBadge}
        <div class="product-card-img-wrapper">
          <img src="${prod.image}" alt="${prod.name}" class="product-card-img" loading="lazy">
          <div class="product-overlay-actions">
            <button class="quick-view-btn" onclick="openProductDetail('${prod.id}')">Descubrir Scent</button>
            <button class="add-cart-btn-icon" onclick="addToCart('${prod.id}', 1)" title="Añadir al Carrito">
              <i class="fas fa-shopping-bag"></i>
            </button>
          </div>
        </div>
        <div class="product-card-info">
          <span class="product-card-category">${prod.categoryLabel}</span>
          <h3 class="product-card-title">${prod.name}</h3>
          <span class="product-card-scent">${prod.familyLabel}</span>
          <div class="product-card-bottom">
            <span class="product-card-price">${CONFIG.currency}${prod.price.toLocaleString('es-AR')}</span>
            <span class="product-card-size">${prod.size}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterCatalog() {
  const activeCategoryBtn = doc.categoryFilters.querySelector('.filter-btn.active');
  const selectedCategory = activeCategoryBtn ? activeCategoryBtn.dataset.category : 'all';
  const selectedFamily = doc.scentSelect ? doc.scentSelect.value : 'all';
  const searchQuery = doc.searchInput ? doc.searchInput.value.toLowerCase().trim() : '';
  
  const filtered = PRODUCTS.filter(prod => {
    // Category match
    const categoryMatch = (selectedCategory === 'all' || prod.category === selectedCategory);
    
    // Family match
    const familyMatch = (selectedFamily === 'all' || prod.family === selectedFamily);
    
    // Search query match (Matches title, category, description, family)
    const textSearch = prod.name.toLowerCase().includes(searchQuery) ||
                       prod.description.toLowerCase().includes(searchQuery) ||
                       prod.categoryLabel.toLowerCase().includes(searchQuery) ||
                       prod.familyLabel.toLowerCase().includes(searchQuery);
                       
    return categoryMatch && familyMatch && textSearch;
  });
  
  renderProducts(filtered);
}

// ----------------------------------------------------------------
// 3. Product Quick View Detail (Modal)
// ----------------------------------------------------------------
function openProductDetail(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !doc.modal || !doc.modalBody) return;
  
  doc.modalBody.innerHTML = `
    <div class="modal-img-wrapper">
      <img src="${product.image}" alt="${product.name}" class="modal-img">
    </div>
    <div class="modal-info">
      <span class="modal-category">${product.categoryLabel}</span>
      <h2 class="modal-title">${product.name}</h2>
      <span class="modal-scent">${product.familyLabel}</span>
      
      <div class="modal-price-row">
        <span class="modal-price">${CONFIG.currency}${product.price.toLocaleString('es-AR')}</span>
        <span class="modal-size">Contenido: ${product.size}</span>
      </div>
      
      <p class="modal-description">${product.description}</p>
      
      <div class="scent-pyramid">
        <h4 class="pyramid-title">Pirámide Olfativa</h4>
        <div class="pyramid-note">
          <strong>Notas de Salida:</strong>
          <span>${product.notes.salida}</span>
        </div>
        <div class="pyramid-note">
          <strong>Corazón:</strong>
          <span>${product.notes.corazon}</span>
        </div>
        <div class="pyramid-note">
          <strong>Notas de Fondo:</strong>
          <span>${product.notes.fondo}</span>
        </div>
      </div>
      
      <div class="modal-actions">
        <div class="modal-qty">
          <button class="modal-qty-btn" onclick="adjustModalQty(-1)">-</button>
          <span class="modal-qty-val" id="modal-qty-value">1</span>
          <button class="modal-qty-btn" onclick="adjustModalQty(1)">+</button>
        </div>
        <button class="modal-add-btn" onclick="addFromModal('${product.id}')">
          <i class="fas fa-shopping-bag"></i> Agregar al Carrito
        </button>
      </div>
    </div>
  `;
  
  doc.backdrop.classList.add('open');
  doc.modal.classList.add('open');
  document.body.style.overflow = 'hidden'; // Disable page scrolling
}

function closeModal() {
  if (doc.modal) doc.modal.classList.remove('open');
  if (doc.backdrop) doc.backdrop.classList.remove('open');
  document.body.style.overflow = ''; // Re-enable page scrolling
}

function adjustModalQty(amount) {
  const qtyEl = document.getElementById('modal-qty-value');
  if (!qtyEl) return;
  let currentVal = parseInt(qtyEl.textContent);
  currentVal = Math.max(1, currentVal + amount); // Minimum is 1
  qtyEl.textContent = currentVal;
}

function addFromModal(productId) {
  const qtyEl = document.getElementById('modal-qty-value');
  const qty = qtyEl ? parseInt(qtyEl.textContent) : 1;
  addToCart(productId, qty);
  closeModal();
}

// Global functions exposed to window for onclick attributes
window.openProductDetail = openProductDetail;
window.adjustModalQty = adjustModalQty;
window.addFromModal = addFromModal;

// ----------------------------------------------------------------
// 4. Shopping Cart Lógica
// ----------------------------------------------------------------
function loadCart() {
  const savedCart = localStorage.getItem('fgoparfum_cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      cart = [];
    }
  }
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('fgoparfum_cart', JSON.stringify(cart));
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.product.id === productId);
  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.push({
      product,
      quantity: qty
    });
  }
  
  saveCart();
  updateCartUI();
  showToast(`${product.name} agregado al carrito`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  saveCart();
  updateCartUI();
}

function updateQty(productId, newQty) {
  const item = cart.find(item => item.product.id === productId);
  if (item) {
    item.quantity = Math.max(1, newQty);
    saveCart();
    updateCartUI();
  }
}

function openCartDrawer() {
  if (doc.cartDrawer) doc.cartDrawer.classList.add('open');
  if (doc.backdrop) doc.backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  if (doc.cartDrawer) doc.cartDrawer.classList.remove('open');
  // Only close backdrop if modal is also not open
  if (doc.backdrop && (!doc.modal || !doc.modal.classList.contains('open'))) {
    doc.backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function updateCartUI() {
  // Update badge counts
  const totalItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  if (doc.cartCount) {
    doc.cartCount.textContent = totalItemsCount;
    doc.cartCount.style.display = totalItemsCount > 0 ? 'flex' : 'none';
  }
  
  if (!doc.cartItems) return;
  
  if (cart.length === 0) {
    doc.cartItems.innerHTML = `
      <div class="empty-cart-message">
        <i class="fas fa-shopping-bag" style="font-size: 2rem; color: var(--text-muted); margin-bottom: 1rem; display: block;"></i>
        Tu bolsa de compras está vacía.
      </div>
    `;
    if (doc.cartTotal) doc.cartTotal.textContent = `${CONFIG.currency}0`;
    if (doc.btnCheckout) doc.btnCheckout.disabled = true;
    return;
  }
  
  if (doc.btnCheckout) doc.btnCheckout.disabled = false;
  
  let subtotal = 0;
  
  doc.cartItems.innerHTML = cart.map(item => {
    const itemTotal = item.product.price * item.quantity;
    subtotal += itemTotal;
    
    return `
      <div class="cart-item">
        <div class="cart-item-img-wrapper">
          <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">
        </div>
        <div class="cart-item-info">
          <div>
            <div style="display: flex; justify-content: space-between;">
              <h4 class="cart-item-title">${item.product.name}</h4>
              <button class="remove-cart-item" onclick="removeFromCart('${item.product.id}')" title="Eliminar artículo">
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
            <span class="cart-item-meta">${item.product.categoryLabel} / ${item.product.size}</span>
          </div>
          <div class="cart-item-qty-price">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateQty('${item.product.id}', ${item.quantity - 1})">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateQty('${item.product.id}', ${item.quantity + 1})">+</button>
            </div>
            <span class="cart-item-price">${CONFIG.currency}${itemTotal.toLocaleString('es-AR')}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  if (doc.cartTotal) {
    doc.cartTotal.textContent = `${CONFIG.currency}${subtotal.toLocaleString('es-AR')}`;
  }
}

// WhatsApp Checkout Sender
function sendOrderToWhatsApp() {
  if (cart.length === 0) return;
  
  let message = `*Hola FGOParfum!* 🛍️\nQuisiera realizar el siguiente pedido a través de la web:\n\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  
  let total = 0;
  cart.forEach((item, index) => {
    const itemSubtotal = item.product.price * item.quantity;
    total += itemSubtotal;
    message += `*${index + 1}. ${item.product.name}*\n`;
    message += `   • Cantidad: ${item.quantity}\n`;
    message += `   • Medida: ${item.product.size}\n`;
    message += `   • Subtotal: ${CONFIG.currency}${itemSubtotal.toLocaleString('es-AR')}\n\n`;
  });
  
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*TOTAL DEL PEDIDO: ${CONFIG.currency}${total.toLocaleString('es-AR')}*\n\n`;
  message += `*Datos del Cliente a Coordinar:*\n`;
  message += `• Envío o retiro:\n`;
  message += `• Nombre y Apellido:\n`;
  message += `• Dirección (en caso de envío):\n\n`;
  message += `_Pedido generado desde FGOParfum Web PWA._`;
  
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedText}`;
  
  window.open(whatsappUrl, '_blank');
}

// Global functions exposed to window for cart UI elements
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQty = updateQty;

// ----------------------------------------------------------------
// 5. Fragrance Finder Quiz Lógica
// ----------------------------------------------------------------
function goToQuizStep(stepNum) {
  currentQuizStep = stepNum;
  
  // Update progress bar
  const progressPercent = ((stepNum - 1) / 3) * 100;
  if (doc.quizProgress) doc.quizProgress.style.width = `${progressPercent}%`;
  
  // Show active step, hide others
  const steps = [doc.quizStep1, doc.quizStep2, doc.quizStep3, doc.quizResults];
  steps.forEach((step, idx) => {
    if (step) {
      if (idx + 1 === stepNum) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    }
  });
  
  // Manage navigation button visibility
  if (doc.btnQuizPrev) {
    if (stepNum > 1 && stepNum <= 3) {
      doc.btnQuizPrev.disabled = false;
      doc.btnQuizPrev.style.visibility = 'visible';
    } else {
      doc.btnQuizPrev.disabled = true;
      doc.btnQuizPrev.style.visibility = 'hidden';
    }
  }
}

function showQuizResults() {
  goToQuizStep(4);
  if (doc.quizProgress) doc.quizProgress.style.width = `100%`;
  
  // Logic to match answers with products
  // Recipient: masculine, feminine, home
  // Vibe: elegance (perfumes), energy (fresh/citrus), relax (sweet/floral)
  // Notes: dulce, floral, frutal, amaderado
  
  let filteredRecs = PRODUCTS;
  
  // Filter by recipient type
  if (quizAnswers.recipient === 'masculino') {
    filteredRecs = PRODUCTS.filter(p => p.category === 'perfumes' && (p.id.includes('1million') || p.id.includes('blue') || p.id.includes('invictos')));
  } else if (quizAnswers.recipient === 'femenino') {
    filteredRecs = PRODUCTS.filter(p => p.category === 'perfumes' && (p.id.includes('lavida') || p.id.includes('aura')));
  } else if (quizAnswers.recipient === 'home') {
    filteredRecs = PRODUCTS.filter(p => p.category === 'textiles' || p.category === 'difusores');
  }
  
  // Further filter or score based on vibe/notes preference
  let bestMatch = filteredRecs[0]; // fallback
  let maxScore = -1;
  
  filteredRecs.forEach(prod => {
    let score = 0;
    
    // Scent family matching notes answer
    if (prod.family === quizAnswers.notes) {
      score += 10;
    }
    
    // Scent vibe matching
    if (quizAnswers.vibe === 'elegancia') {
      if (prod.category === 'perfumes') score += 5;
      if (prod.family === 'amaderado' || prod.family === 'floral') score += 3;
    } else if (quizAnswers.vibe === 'energia') {
      if (prod.family === 'citrico' || prod.family === 'frutal' || prod.family === 'fresco') score += 5;
    } else if (quizAnswers.vibe === 'relax') {
      if (prod.family === 'dulce' || prod.family === 'floral' || prod.id.includes('lavanda') || prod.id.includes('bebe')) score += 5;
    }
    
    if (score > maxScore) {
      maxScore = score;
      bestMatch = prod;
    }
  });
  
  // Render Recommended Product Card
  if (doc.recommendedContainer && bestMatch) {
    doc.recommendedContainer.innerHTML = `
      <div class="product-card" style="margin: 0 auto; text-align: left; max-width: 300px;">
        <div class="product-card-img-wrapper">
          <img src="${bestMatch.image}" alt="${bestMatch.name}" class="product-card-img">
          <div class="product-overlay-actions">
            <button class="quick-view-btn" onclick="openProductDetail('${bestMatch.id}')">Ver Detalles</button>
            <button class="add-cart-btn-icon" onclick="addToCart('${bestMatch.id}', 1)">
              <i class="fas fa-shopping-bag"></i>
            </button>
          </div>
        </div>
        <div class="product-card-info">
          <span class="product-card-category">${bestMatch.categoryLabel}</span>
          <h3 class="product-card-title">${bestMatch.name}</h3>
          <span class="product-card-scent">${bestMatch.familyLabel}</span>
          <div class="product-card-bottom">
            <span class="product-card-price">${CONFIG.currency}${bestMatch.price.toLocaleString('es-AR')}</span>
            <span class="product-card-size">${bestMatch.size}</span>
          </div>
        </div>
      </div>
    `;
  }
}

function resetQuiz() {
  quizAnswers = { recipient: '', vibe: '', notes: '' };
  goToQuizStep(1);
}

// ----------------------------------------------------------------
// 6. PWA Installation Lógica
// ----------------------------------------------------------------
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => {
          console.log('Service Worker registrado correctamente.', reg.scope);
        })
        .catch((err) => {
          console.error('Error al registrar el Service Worker:', err);
        });
    });
  }
}

// Listen for the PWA install prompt event
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  
  // Stash the event so it can be triggered later
  deferredPrompt = e;
  
  // Show the inline PWA banner on the Hero section
  if (doc.pwaHeroBanner) {
    doc.pwaHeroBanner.style.opacity = '1';
    doc.pwaHeroBanner.style.pointerEvents = 'auto';
  }
  
  // Show the bottom sticky install banner after a 5 second delay
  setTimeout(() => {
    // Check if the user has dismissed this banner in this session
    if (!sessionStorage.getItem('pwa-dismissed') && doc.pwaBanner) {
      doc.pwaBanner.classList.add('show');
    }
  }, 4000);
});

function triggerPWAInstall() {
  if (!deferredPrompt) return;
  
  // Show the install prompt
  deferredPrompt.prompt();
  
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('El usuario aceptó la instalación de la PWA.');
      hidePWABanners();
    } else {
      console.log('El usuario canceló la instalación de la PWA.');
    }
    // Clear the stashed prompt
    deferredPrompt = null;
  });
}

function hidePWABanners() {
  if (doc.pwaBanner) doc.pwaBanner.classList.remove('show');
  if (doc.pwaHeroBanner) {
    doc.pwaHeroBanner.style.opacity = '0';
    doc.pwaHeroBanner.style.pointerEvents = 'none';
  }
}

// Listen for successfully installed event
window.addEventListener('appinstalled', (evt) => {
  console.log('La aplicación fue instalada con éxito en el sistema.');
  hidePWABanners();
  showToast('¡FGOParfum instalada con éxito en tu dispositivo!');
});

// Toast notification helper
function showToast(message) {
  if (!doc.toast || !doc.toastMessage) return;
  
  doc.toastMessage.textContent = message;
  doc.toast.classList.add('show');
  
  setTimeout(() => {
    doc.toast.classList.remove('show');
  }, 3500);
}
