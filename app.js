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

// Admin state
let logoClicks = 0;
let logoClickTimeout = null;
let isAdminAuthenticated = false;
let uploadedImageDataUrl = '';

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
  
  // Admin Elements
  adminModal: document.getElementById('admin-modal'),
  btnCloseAdmin: document.getElementById('btn-close-admin'),
  btnAdminReset: document.getElementById('btn-admin-reset'),
  btnAdminAddToggle: document.getElementById('btn-admin-add-toggle'),
  adminSearchInput: document.getElementById('admin-search-input'),
  adminFormPanel: document.getElementById('admin-form-panel'),
  adminProductForm: document.getElementById('admin-product-form'),
  adminTableBody: document.getElementById('admin-table-body'),
  btnAdminFormCancel: document.getElementById('btn-admin-form-cancel'),
  formActionTitle: document.getElementById('form-action-title'),
  
  // Admin Auth Gate Elements
  adminAuthView: document.getElementById('admin-auth-view'),
  adminDashboardView: document.getElementById('admin-dashboard-view'),
  adminPasswordInput: document.getElementById('admin-password-input'),
  adminAuthError: document.getElementById('admin-auth-error'),
  btnAdminAuthSubmit: document.getElementById('btn-admin-auth-submit'),
  
  // Admin Form Extra Elements
  formImageFile: document.getElementById('form-image-file'),
  formPriceOriginal: document.getElementById('form-price-original'),
  formStockCount: document.getElementById('form-stock-count'),
};

// ----------------------------------------------------------------
// Helper: LocalStorage Products Wrapper
// ----------------------------------------------------------------
function getStoredProducts() {
  const stored = localStorage.getItem('fgoparfum_products');
  if (!stored) {
    localStorage.setItem('fgoparfum_products', JSON.stringify(PRODUCTS));
    return PRODUCTS;
  }
  try {
    const localList = JSON.parse(stored);
    
    // Create maps for efficient lookup
    const codeMap = {};
    PRODUCTS.forEach(p => { codeMap[p.id] = p; });
    
    const localMap = {};
    localList.forEach(p => { localMap[p.id] = p; });
    
    const mergedProducts = [];
    
    // 1. Process latest master list from PRODUCTS (sync additions & updates)
    PRODUCTS.forEach(codeProd => {
      if (localMap[codeProd.id]) {
        const localProd = localMap[codeProd.id];
        // Keep user edits but update provider-controlled fields
        localProd.name = codeProd.name;
        localProd.image = codeProd.image;
        localProd.size = codeProd.size;
        localProd.categoryLabel = codeProd.categoryLabel;
        localProd.familyLabel = codeProd.familyLabel;
        localProd.notes = codeProd.notes || localProd.notes;
        
        localProd.statusPending = false;
        
        mergedProducts.push(localProd);
      } else {
        // Brand new product from provider: add directly
        mergedProducts.push(codeProd);
      }
    });
    
    // 2. Add custom products and discard deleted provider ones
    localList.forEach(localProd => {
      if (localProd.id.startsWith('custom-')) {
        mergedProducts.push(localProd);
      }
    });
    
    localStorage.setItem('fgoparfum_products', JSON.stringify(mergedProducts));
    return mergedProducts;
  } catch (e) {
    console.error("Error syncing catalog database:", e);
    return PRODUCTS;
  }
}

function saveStoredProducts(productsList) {
  localStorage.setItem('fgoparfum_products', JSON.stringify(productsList));
}

function loadHeroBackground() {
  const heroElement = document.querySelector('.hero');
  if (!heroElement) return;
  const storedBg = localStorage.getItem('fgoparfum_hero_bg') || './logotipo.jpeg';
  heroElement.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url('${storedBg}')`;
}

// ----------------------------------------------------------------
// 1. Initial Setup & Event Listeners
// ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Load Cart from LocalStorage
  loadCart();
  
  // Render Products
  renderProducts(getStoredProducts());
  
  // Setup Event Listeners
  initEventListeners();
  
  // Register Service Worker for PWA
  registerServiceWorker();
  
  // Check standalone mode / iOS installation helper
  checkStandaloneStatus();
  
  // Load hero background
  loadHeroBackground();
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

  // Logo click counter: 7 clicks in 3 seconds triggers Admin Modal
  const logoLink = document.getElementById('logo-link');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      logoClicks++;
      
      if (logoClickTimeout) clearTimeout(logoClickTimeout);
      
      if (logoClicks >= 7) {
        logoClicks = 0;
        openAdminPanel();
      } else {
        logoClickTimeout = setTimeout(() => {
          logoClicks = 0;
        }, 3000);
      }
    });
  }

  // Mobile Menu Toggle
  if (doc.menuToggle) {
    doc.menuToggle.addEventListener('click', () => {
      doc.navMenu.classList.toggle('open');
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
      
      doc.navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      const filterBtns = doc.categoryFilters.querySelectorAll('.filter-btn');
      filterBtns.forEach(btn => {
        if (btn.dataset.category === targetCategory) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      
      filterCatalog();
      
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
      closeAdminPanel();
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
    btn.addEventListener('click', () => {
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
    doc.btnPwaClose.addEventListener('click', (e) => {
      e.stopPropagation();
      doc.pwaBanner.classList.remove('show');
      sessionStorage.setItem('pwa-dismissed', 'true');
    });
  }
  if (doc.btnPwaInstall) {
    doc.btnPwaInstall.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerPWAInstall();
    });
  }
  if (doc.btnPwaHeroInstall) {
    doc.btnPwaHeroInstall.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerPWAInstall();
    });
  }
  if (doc.pwaHeroBanner) {
    doc.pwaHeroBanner.addEventListener('click', () => {
      triggerPWAInstall();
    });
  }
  
  // Admin Panel Event Listeners
  if (doc.btnCloseAdmin) {
    doc.btnCloseAdmin.addEventListener('click', closeAdminPanel);
  }
  if (doc.btnAdminReset) {
    doc.btnAdminReset.addEventListener('click', resetToDefaultProducts);
  }
  if (doc.btnAdminAddToggle) {
    doc.btnAdminAddToggle.addEventListener('click', () => {
      doc.adminFormPanel.classList.toggle('active');
      doc.formActionTitle.textContent = "Añadir Nuevo Producto";
      doc.adminProductForm.reset();
      document.getElementById('form-product-id').value = '';
      uploadedImageDataUrl = '';
    });
  }
  if (doc.btnAdminFormCancel) {
    doc.btnAdminFormCancel.addEventListener('click', () => {
      doc.adminFormPanel.classList.remove('active');
      doc.adminProductForm.reset();
      uploadedImageDataUrl = '';
    });
  }
  if (doc.adminSearchInput) {
    doc.adminSearchInput.addEventListener('input', () => {
      renderAdminTable(doc.adminSearchInput.value);
    });
  }
  if (doc.adminProductForm) {
    doc.adminProductForm.addEventListener('submit', saveProductForm);
  }

  // Admin Auth password gate
  if (doc.btnAdminAuthSubmit) {
    doc.btnAdminAuthSubmit.addEventListener('click', checkAdminPassword);
  }
  if (doc.adminPasswordInput) {
    doc.adminPasswordInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        checkAdminPassword();
      }
    });
  }

  // File Upload listener for image importing
  if (doc.formImageFile) {
    doc.formImageFile.addEventListener('change', handleLocalImageImport);
  }

  // Hero Background Config
  const btnSaveHeroBg = document.getElementById('btn-save-hero-bg');
  const heroBgInput = document.getElementById('admin-hero-bg-input');
  const heroBgFile = document.getElementById('admin-hero-bg-file');
  
  if (heroBgInput) {
    heroBgInput.value = localStorage.getItem('fgoparfum_hero_bg') || './logotipo.jpeg';
  }
  
  if (btnSaveHeroBg && heroBgInput) {
    btnSaveHeroBg.addEventListener('click', () => {
      const url = heroBgInput.value.trim();
      localStorage.setItem('fgoparfum_hero_bg', url || './logotipo.jpeg');
      loadHeroBackground();
      showToast("Fondo del Hero actualizado con éxito");
    });
  }
  
  if (heroBgFile && heroBgInput) {
    // Hidden file input click trigger
    const btnUploadHeroBg = document.getElementById('btn-upload-hero-bg');
    if (btnUploadHeroBg) {
      btnUploadHeroBg.addEventListener('click', () => {
        heroBgFile.click();
      });
    }
    
    heroBgFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        heroBgInput.value = base64;
        localStorage.setItem('fgoparfum_hero_bg', base64);
        loadHeroBackground();
        showToast("Imagen de fondo cargada e instalada");
      };
      reader.readAsDataURL(file);
    });
  }

  // Database Autocomplete Search for Product Form
  const dbSearchInput = document.getElementById('form-db-search');
  const dbSearchResults = document.getElementById('form-db-search-results');
  
  if (dbSearchInput && dbSearchResults) {
    dbSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        dbSearchResults.style.display = 'none';
        dbSearchResults.innerHTML = '';
        return;
      }
      
      const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(query)).slice(0, 10);
      if (matches.length === 0) {
        dbSearchResults.style.display = 'block';
        dbSearchResults.innerHTML = `
          <div style="padding:0.75rem 1rem; color:var(--text-muted); font-size:0.75rem; text-align:center;">
            No se encontraron fragancias en la base de datos
          </div>
        `;
        return;
      }
      
      dbSearchResults.style.display = 'block';
      dbSearchResults.innerHTML = matches.map(prod => `
        <div class="db-search-item" data-id="${prod.id}">
          <div>
            <span class="db-search-item-name">${prod.name}</span>
            <div style="font-size:0.65rem; color:var(--text-secondary); margin-top:0.1rem;">
              ${prod.categoryLabel}${prod.size ? ` / ${prod.size}` : ''}
            </div>
          </div>
          <span class="db-search-item-meta">${prod.familyLabel}</span>
        </div>
      `).join('');
      
      // Bind click handlers to items
      dbSearchResults.querySelectorAll('.db-search-item').forEach(item => {
        item.addEventListener('click', () => {
          const matchId = item.dataset.id;
          const matchedProd = PRODUCTS.find(p => p.id === matchId);
          if (matchedProd) {
            // Auto fill form
            document.getElementById('form-name').value = matchedProd.name;
            document.getElementById('form-price').value = matchedProd.price;
            document.getElementById('form-price-original').value = matchedProd.priceOriginal || '';
            document.getElementById('form-category').value = matchedProd.category;
            document.getElementById('form-family').value = matchedProd.family;
            document.getElementById('form-size').value = matchedProd.size;
            document.getElementById('form-image').value = matchedProd.image;
            document.getElementById('form-description').value = matchedProd.description;
            
            document.getElementById('form-note-salida').value = matchedProd.notes ? matchedProd.notes.salida : '';
            document.getElementById('form-note-corazon').value = matchedProd.notes ? matchedProd.notes.corazon : '';
            document.getElementById('form-note-fondo').value = matchedProd.notes ? matchedProd.notes.fondo : '';
            
            // Check status offer if original price exists
            if (matchedProd.priceOriginal && matchedProd.priceOriginal > matchedProd.price) {
              document.getElementById('form-status-offer').checked = true;
            }
            
            showToast(`Formulario completado con ${matchedProd.name}`);
          }
          dbSearchResults.style.display = 'none';
          dbSearchResults.innerHTML = '';
          dbSearchInput.value = ''; // Clear search bar
        });
      });
    });
    
    // Close results dropdown on clicking outside
    document.addEventListener('click', (e) => {
      if (!dbSearchInput.contains(e.target) && !dbSearchResults.contains(e.target)) {
        dbSearchResults.style.display = 'none';
      }
    });
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
    // Check product status badges
    let badgesHtml = '';
    let isCardDisabledClass = '';
    let isBtnDisabledClass = '';
    let btnText = 'Añadir';
    
    // Automatically flag as out of stock if stockCount is 0
    const outOfStock = prod.statusNoStock || (prod.stockCount !== undefined && prod.stockCount <= 0);
    
    if (prod.statusSold) {
      badgesHtml += `<span class="main-badge badge-sold">Vendido</span>`;
      isCardDisabledClass = 'card-disabled';
      isBtnDisabledClass = 'add-cart-btn-disabled';
      btnText = 'Vendido';
    } else if (outOfStock) {
      badgesHtml += `<span class="main-badge badge-nostock">Sin Stock</span>`;
      isCardDisabledClass = 'card-disabled';
      isBtnDisabledClass = 'add-cart-btn-disabled';
      btnText = 'Sin Stock';
    }
    
    if (prod.statusOffer) {
      badgesHtml += `<span class="main-badge badge-offer">Oferta</span>`;
    }
    
    let priceHtml = '';

    // Render stock warnings for low stock
    let stockWarningHtml = '';
    if (!prod.statusSold && !outOfStock && prod.stockCount !== undefined && prod.stockCount <= 3) {
      stockWarningHtml = `
        <div style="font-size:0.6rem; color:#ff9f43; font-weight:600; margin-top:0.4rem; letter-spacing:0.05em;">
          <i class="fas fa-exclamation-triangle"></i> ¡Solo quedan ${prod.stockCount} u.!
        </div>
      `;
    }
    
    return `
      <div class="product-card ${isCardDisabledClass}" data-id="${prod.id}">
        <div class="product-card-badges">${badgesHtml}</div>
        <div class="product-card-img-wrapper">
          <img src="${prod.image}" alt="${prod.name}" class="product-card-img" loading="lazy">
          <button class="product-zoom-btn" onclick="zoomProductImage('${prod.image}')" title="Ampliar imagen">
            <i class="fas fa-plus"></i>
          </button>
          <div class="product-overlay-actions">
            <button class="quick-view-btn" onclick="openProductDetail('${prod.id}')">Descubrir Scent</button>
            <button class="add-cart-btn-icon ${isBtnDisabledClass}" ${isBtnDisabledClass ? 'disabled' : ''} onclick="addToCart('${prod.id}', 1)" title="${btnText}">
              <i class="fas fa-shopping-bag"></i>
            </button>
            <button class="add-cart-btn-icon whatsapp-btn-icon" onclick="contactProductWhatsApp('${prod.name.replace(/'/g, "\\'")}', '${prod.id}')" title="Consultar por WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </button>
          </div>
        </div>
        <div class="product-card-info">
          <span class="product-card-category">${prod.categoryLabel}</span>
          <h3 class="product-card-title">${prod.name}</h3>
          <span class="product-card-scent">${prod.familyLabel}</span>
          ${stockWarningHtml}
          <div class="product-card-bottom" style="margin-top:auto;">
            ${priceHtml}
            ${prod.size ? `<span class="product-card-size">${prod.size}</span>` : ''}
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
  
  const allProducts = getStoredProducts();
  const filtered = allProducts.filter(prod => {
    // Category match
    const categoryMatch = (selectedCategory === 'all' || prod.category === selectedCategory);
    
    // Family match
    const familyMatch = (selectedFamily === 'all' || prod.family === selectedFamily);
    
    // Search query match
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
  const allProducts = getStoredProducts();
  const product = allProducts.find(p => p.id === productId);
  if (!product || !doc.modal || !doc.modalBody) return;
  
  let isBtnDisabled = '';
  let btnMarkup = '';
  const outOfStock = product.statusNoStock || (product.stockCount !== undefined && product.stockCount <= 0);

  if (product.statusSold) {
    isBtnDisabled = 'disabled style="background-color:#6c757d; cursor:not-allowed;"';
    btnMarkup = `<button class="modal-add-btn" ${isBtnDisabled}><i class="fas fa-ban"></i> Producto Vendido</button>`;
  } else if (outOfStock) {
    isBtnDisabled = 'disabled style="background-color:#6c757d; cursor:not-allowed;"';
    btnMarkup = `<button class="modal-add-btn" ${isBtnDisabled}><i class="fas fa-ban"></i> Sin Stock</button>`;
  } else {
    // Show remaining stock limit in modal details
    const maxQty = product.stockCount !== undefined ? product.stockCount : 10;
    btnMarkup = `
      <div class="modal-actions-container" style="display:flex; flex-direction:column; gap:0.5rem; width:100%;">
        <div style="display:flex; gap:1rem; align-items:center; width:100%;">
          <div class="modal-qty">
            <button class="modal-qty-btn" onclick="adjustModalQty(-1)">-</button>
            <span class="modal-qty-val" id="modal-qty-value" data-max="${maxQty}">1</span>
            <button class="modal-qty-btn" onclick="adjustModalQty(1)">+</button>
          </div>
          <button class="modal-add-btn" onclick="addFromModal('${product.id}')">
            <i class="fas fa-shopping-bag"></i> Agregar al Carrito
          </button>
        </div>
        ${product.stockCount !== undefined ? `<span style="font-size:0.68rem; color:var(--accent-gold); font-style:italic;">Disponibles en stock: ${product.stockCount} unidades.</span>` : ''}
      </div>
    `;
  }
  
  let priceMarkup = '';

  doc.modalBody.innerHTML = `
    <div class="modal-img-wrapper" style="position:relative;">
      <img src="${product.image}" alt="${product.name}" class="modal-img">
      <button class="product-zoom-btn" onclick="zoomProductImage('${product.image}')" title="Ampliar imagen" style="top:15px; right:15px;">
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <div class="modal-info">
      <span class="modal-category">${product.categoryLabel}</span>
      <h2 class="modal-title">${product.name}</h2>
      <span class="modal-scent">${product.familyLabel}</span>
      
      <div class="modal-price-row">
        ${priceMarkup}
        ${product.size ? `<span class="modal-size">Contenido: ${product.size}</span>` : ''}
      </div>
      
      <p class="modal-description">${product.description}</p>
      
      <div class="scent-pyramid">
        <h4 class="pyramid-title">Pirámide Olfativa</h4>
        <div class="pyramid-note">
          <strong>Notas de Salida:</strong>
          <span>${product.notes?.salida || 'No disponible'}</span>
        </div>
        <div class="pyramid-note">
          <strong>Corazón:</strong>
          <span>${product.notes?.corazon || 'No disponible'}</span>
        </div>
        <div class="pyramid-note">
          <strong>Notas de Fondo:</strong>
          <span>${product.notes?.fondo || 'No disponible'}</span>
        </div>
      </div>
      
      <div class="modal-actions" style="display:flex; flex-direction:column; gap:0.5rem; width:100%;">
        ${btnMarkup}
        <button class="modal-add-btn whatsapp-contact-btn" onclick="contactProductWhatsApp('${product.name.replace(/'/g, "\\'")}', '${product.id}')" style="border:none; display:flex; align-items:center; justify-content:center; gap:0.5rem; text-transform:uppercase; font-size:0.75rem; font-weight:700; letter-spacing:0.2em; height:50px; width:100%; transition:var(--transition-smooth); cursor:pointer;">
          <i class="fab fa-whatsapp" style="font-size:1.2rem;"></i> Consultar por WhatsApp
        </button>
      </div>
    </div>
  `;
  
  doc.backdrop.classList.add('open');
  doc.modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (doc.modal) doc.modal.classList.remove('open');
  if (doc.backdrop && (!doc.adminModal || !doc.adminModal.classList.contains('open')) && (!doc.cartDrawer || !doc.cartDrawer.classList.contains('open'))) {
    doc.backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function adjustModalQty(amount) {
  const qtyEl = document.getElementById('modal-qty-value');
  if (!qtyEl) return;
  const maxVal = parseInt(qtyEl.dataset.max) || 10;
  let currentVal = parseInt(qtyEl.textContent);
  currentVal = currentVal + amount;
  currentVal = Math.max(1, Math.min(maxVal, currentVal));
  qtyEl.textContent = currentVal;
}

function addFromModal(productId) {
  const qtyEl = document.getElementById('modal-qty-value');
  const qty = qtyEl ? parseInt(qtyEl.textContent) : 1;
  addToCart(productId, qty);
  closeModal();
}

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
  const allProducts = getStoredProducts();
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;
  
  const outOfStock = product.statusNoStock || (product.stockCount !== undefined && product.stockCount <= 0);

  if (product.statusSold || outOfStock) {
    showToast('Este producto no está disponible por el momento.');
    return;
  }

  // Check existing quantities in cart against available stock limits
  const existingItem = cart.find(item => item.product.id === productId);
  const currentQty = existingItem ? existingItem.quantity : 0;
  const maxAvailable = product.stockCount !== undefined ? product.stockCount : 999;
  
  if (currentQty + qty > maxAvailable) {
    showToast(`No puedes agregar más unidades. Límite de stock: ${maxAvailable} u.`);
    return;
  }
  
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
  const allProducts = getStoredProducts();
  const product = allProducts.find(p => p.id === productId);
  const maxAvailable = (product && product.stockCount !== undefined) ? product.stockCount : 999;

  const item = cart.find(item => item.product.id === productId);
  if (item) {
    if (newQty > maxAvailable) {
      showToast(`Cantidad limitada a ${maxAvailable} u. por stock.`);
      item.quantity = maxAvailable;
    } else {
      item.quantity = Math.max(1, newQty);
    }
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
  if (doc.backdrop && (!doc.modal || !doc.modal.classList.contains('open')) && (!doc.adminModal || !doc.adminModal.classList.contains('open'))) {
    doc.backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function updateCartUI() {
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
            <span class="cart-item-meta">${item.product.categoryLabel}${item.product.size ? ` / ${item.product.size}` : ''}</span>
          </div>
          <div class="cart-item-qty-price">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateQty('${item.product.id}', ${item.quantity - 1})">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateQty('${item.product.id}', ${item.quantity + 1})">+</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  if (doc.cartTotal) {
    doc.cartTotal.textContent = `${CONFIG.currency}${subtotal.toLocaleString('es-AR')}`;
  }
}

function sendOrderToWhatsApp() {
  if (cart.length === 0) return;
  
  let message = `*Hola FGOParfum!* 🛍️\nQuisiera realizar el siguiente pedido a través de la web:\n\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  
  cart.forEach((item, index) => {
    message += `*${index + 1}. ${item.product.name}*\n`;
    message += `   • Cantidad: ${item.quantity}\n`;
    if (item.product.size) {
      message += `   • Medida: ${item.product.size}\n\n`;
    } else {
      message += `\n`;
    }
  });
  
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Datos del Cliente a Coordinar:*\n`;
  message += `• Envío o retiro:\n`;
  message += `• Nombre y Apellido:\n`;
  message += `• Dirección (en caso de envío):\n\n`;
  message += `_Pedido generado desde FGOParfum Web PWA._`;
  
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedText}`;
  
  window.open(whatsappUrl, '_blank');
}

function contactProductWhatsApp(name, id) {
  const message = `Hola! Quisiera consultar sobre el producto: *${name}* (ID: ${id}).`;
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedText}`;
  window.open(whatsappUrl, '_blank');
}

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQty = updateQty;
window.contactProductWhatsApp = contactProductWhatsApp;

function zoomProductImage(imageUrl) {
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightbox && lightboxImg) {
    lightboxImg.src = imageUrl;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('image-lightbox');
  if (lightbox) {
    lightbox.classList.remove('open');
    if ((!doc.modal || !doc.modal.classList.contains('open')) && (!doc.adminModal || !doc.adminModal.classList.contains('open')) && (!doc.cartDrawer || !doc.cartDrawer.classList.contains('open'))) {
      document.body.style.overflow = '';
    }
  }
}

window.zoomProductImage = zoomProductImage;
window.closeLightbox = closeLightbox;

// ----------------------------------------------------------------
// 5. Fragrance Finder Quiz Lógica
// ----------------------------------------------------------------
function goToQuizStep(stepNum) {
  currentQuizStep = stepNum;
  
  const progressPercent = ((stepNum - 1) / 3) * 100;
  if (doc.quizProgress) doc.quizProgress.style.width = `${progressPercent}%`;
  
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
  
  const allProducts = getStoredProducts();
  const activeProducts = allProducts;
  let filteredRecs = activeProducts;
  
  if (quizAnswers.recipient === 'masculino') {
    filteredRecs = activeProducts.filter(p => p.category === 'perfumes' && (p.id.includes('1million') || p.id.includes('blue') || p.id.includes('invictos')));
  } else if (quizAnswers.recipient === 'femenino') {
    filteredRecs = activeProducts.filter(p => p.category === 'perfumes' && (p.id.includes('lavida') || p.id.includes('aura')));
  } else if (quizAnswers.recipient === 'home') {
    filteredRecs = activeProducts.filter(p => p.category === 'textiles' || p.category === 'difusores' || p.category === 'aerosoles');
  }
  
  if (filteredRecs.length === 0) filteredRecs = activeProducts;
  
  let bestMatch = filteredRecs[0];
  let maxScore = -1;
  
  filteredRecs.forEach(prod => {
    let score = 0;
    
    if (prod.family === quizAnswers.notes) {
      score += 10;
    }
    
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
  
  if (doc.recommendedContainer && bestMatch) {
    let badgesHtml = '';
    let isBtnDisabledClass = '';
    let btnText = 'Añadir';
    const outOfStock = bestMatch.statusNoStock || (bestMatch.stockCount !== undefined && bestMatch.stockCount <= 0);

    if (bestMatch.statusSold) {
      badgesHtml += `<span class="main-badge badge-sold">Vendido</span>`;
      isBtnDisabledClass = 'add-cart-btn-disabled';
      btnText = 'Vendido';
    } else if (outOfStock) {
      badgesHtml += `<span class="main-badge badge-nostock">Sin Stock</span>`;
      isBtnDisabledClass = 'add-cart-btn-disabled';
      btnText = 'Sin Stock';
    }
    
    if (bestMatch.statusOffer) {
      badgesHtml += `<span class="main-badge badge-offer">Oferta</span>`;
    }

    let recommendedPriceHtml = '';

    doc.recommendedContainer.innerHTML = `
      <div class="product-card" style="margin: 0 auto; text-align: left; max-width: 300px;">
        <div class="product-card-badges">${badgesHtml}</div>
        <div class="product-card-img-wrapper">
          <img src="${bestMatch.image}" alt="${bestMatch.name}" class="product-card-img">
          <button class="product-zoom-btn" onclick="zoomProductImage('${bestMatch.image}')" title="Ampliar imagen">
            <i class="fas fa-plus"></i>
          </button>
          <div class="product-overlay-actions">
            <button class="quick-view-btn" onclick="openProductDetail('${bestMatch.id}')">Ver Detalles</button>
            <button class="add-cart-btn-icon ${isBtnDisabledClass}" ${isBtnDisabledClass ? 'disabled' : ''} onclick="addToCart('${bestMatch.id}', 1)" title="${btnText}">
              <i class="fas fa-shopping-bag"></i>
            </button>
            <button class="add-cart-btn-icon whatsapp-btn-icon" onclick="contactProductWhatsApp('${bestMatch.name.replace(/'/g, "\\'")}', '${bestMatch.id}')" title="Consultar por WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </button>
          </div>
        </div>
        <div class="product-card-info">
          <span class="product-card-category">${bestMatch.categoryLabel}</span>
          <h3 class="product-card-title">${bestMatch.name}</h3>
          <span class="product-card-scent">${bestMatch.familyLabel}</span>
          <div class="product-card-bottom">
            ${recommendedPriceHtml}
            ${bestMatch.size ? `<span class="product-card-size">${bestMatch.size}</span>` : ''}
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
// 6. Admin Panel Lógica
// ----------------------------------------------------------------
function openAdminPanel() {
  if (doc.adminModal) {
    doc.adminModal.classList.add('open');
    
    // Always show password gate initially on opening
    doc.adminAuthView.style.display = 'block';
    doc.adminDashboardView.style.display = 'none';
    doc.adminPasswordInput.value = '';
    doc.adminAuthError.style.display = 'none';
    isAdminAuthenticated = false;
  }
  if (doc.backdrop) doc.backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAdminPanel() {
  if (doc.adminModal) doc.adminModal.classList.remove('open');
  if (doc.adminFormPanel) doc.adminFormPanel.classList.remove('active');
  if (doc.backdrop && (!doc.modal || !doc.modal.classList.contains('open')) && (!doc.cartDrawer || !doc.cartDrawer.classList.contains('open'))) {
    doc.backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Check if password entered is correct
function checkAdminPassword() {
  const pin = doc.adminPasswordInput.value.trim();
  if (pin === '0803') {
    doc.adminAuthError.style.display = 'none';
    doc.adminAuthView.style.display = 'none';
    doc.adminDashboardView.style.display = 'block';
    isAdminAuthenticated = true;
    
    // Pre-fill the hero bg input field
    const heroBgInput = document.getElementById('admin-hero-bg-input');
    if (heroBgInput) {
      heroBgInput.value = localStorage.getItem('fgoparfum_hero_bg') || './logotipo.jpeg';
    }
    
    renderAdminTable();
    showToast("Acceso Autorizado");
  } else {
    doc.adminAuthError.style.display = 'block';
    doc.adminPasswordInput.value = '';
    doc.adminPasswordInput.focus();
  }
}

// File uploader handler for local image files
function handleLocalImageImport(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (event) => {
    uploadedImageDataUrl = event.target.result;
    // Prefill the image URL text field with a placeholder so user knows it's imported
    document.getElementById('form-image').value = '[Imagen Importada del Dispositivo]';
    showToast('Imagen importada correctamente');
  };
  reader.readAsDataURL(file);
}

function renderAdminTable(filterQuery = '') {
  if (!doc.adminTableBody || !isAdminAuthenticated) return;
  
  const allProducts = getStoredProducts();
  const query = filterQuery.toLowerCase().trim();
  
  const filtered = allProducts.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.categoryLabel.toLowerCase().includes(query)
  );
  
  if (filtered.length === 0) {
    doc.adminTableBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-muted);">
          No se encontraron productos en la lista.
        </td>
      </tr>
    `;
    return;
  }
  
  doc.adminTableBody.innerHTML = filtered.map(prod => {
    // Badges statuses
    let badges = [];
    const outOfStock = prod.statusNoStock || (prod.stockCount !== undefined && prod.stockCount <= 0);

    if (prod.statusSold) badges.push('<span class="badge-admin sold">Vendido</span>');
    if (outOfStock) badges.push('<span class="badge-admin nostock">Sin Stock</span>');
    if (prod.statusOffer) badges.push('<span class="badge-admin offer">Oferta</span>');
    
    // Quick "Republicar" button shows if item is sold or out of stock
    let republicarBtn = '';
    if (prod.statusSold || outOfStock) {
      republicarBtn = `
        <button class="btn-admin primary" onclick="republishProduct('${prod.id}')" title="Republicar (Restablecer Stock)" style="background-color:#2e8328; border-color:#2e8328; color:#fff;">
          <i class="fas fa-redo"></i> Republicar
        </button>
      `;
    }

    const stock = prod.stockCount !== undefined ? `${prod.stockCount} u.` : '10 u.';

    return `
      <tr>
        <td>
          <div class="admin-prod-cell">
            <img src="${prod.image}" alt="" class="admin-prod-img">
            <div>
              <div class="admin-prod-name">${prod.name}</div>
              <div style="font-size: 0.65rem; color: var(--text-muted);">ID: ${prod.id}</div>
            </div>
          </div>
        </td>
        <td>${prod.categoryLabel}</td>
        <td>${prod.size || '-'}</td>
        <td>${stock}</td>
        <td>
          <div class="admin-badges-cell">
            ${badges.length > 0 ? badges.join('') : '<span style="color:var(--text-muted);font-style:italic;font-size:0.7rem;">Activo</span>'}
          </div>
        </td>
        <td style="text-align: right;">
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end; align-items:center;">
            ${republicarBtn}
            <button class="btn-admin primary" onclick="editProduct('${prod.id}')" title="Editar"><i class="fas fa-edit"></i></button>
            <button class="btn-admin danger" onclick="deleteProduct('${prod.id}')" title="Eliminar"><i class="fas fa-trash"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function republishProduct(productId) {
  const allProducts = getStoredProducts();
  const product = allProducts.find(p => p.id === productId);
  if (product) {
    product.statusSold = false;
    product.statusNoStock = false;
    product.stockCount = 10; // set standard default stock on republish
    saveStoredProducts(allProducts);
    renderAdminTable(doc.adminSearchInput.value);
    filterCatalog(); // Update main view
    showToast(`${product.name} republicado con éxito`);
  }
}

function editProduct(productId) {
  const allProducts = getStoredProducts();
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;
  
  doc.adminFormPanel.classList.add('active');
  doc.formActionTitle.textContent = "Editar Producto: " + product.name;
  
  document.getElementById('form-product-id').value = product.id;
  document.getElementById('form-name').value = product.name;
  document.getElementById('form-price').value = product.price;
  document.getElementById('form-price-original').value = product.priceOriginal || '';
  document.getElementById('form-stock-count').value = product.stockCount !== undefined ? product.stockCount : 10;
  document.getElementById('form-category').value = product.category;
  document.getElementById('form-family').value = product.family;
  document.getElementById('form-size').value = product.size;
  document.getElementById('form-image').value = product.image.startsWith('data:') ? '[Imagen Importada del Dispositivo]' : product.image;
  
  // Save base64 string in state if it is a base64 image
  uploadedImageDataUrl = product.image.startsWith('data:') ? product.image : '';
  
  document.getElementById('form-status-offer').checked = !!product.statusOffer;
  document.getElementById('form-status-nostock').checked = !!product.statusNoStock;
  document.getElementById('form-status-sold').checked = !!product.statusSold;
  
  document.getElementById('form-description').value = product.description || '';
  document.getElementById('form-note-salida').value = product.notes ? product.notes.salida : '';
  document.getElementById('form-note-corazon').value = product.notes ? product.notes.corazon : '';
  document.getElementById('form-note-fondo').value = product.notes ? product.notes.fondo : '';
  
  doc.adminFormPanel.scrollIntoView({ behavior: 'smooth' });
}

function deleteProduct(productId) {
  if (!confirm("¿Estás seguro de que deseas eliminar permanentemente este producto del catálogo?")) return;
  
  let allProducts = getStoredProducts();
  allProducts = allProducts.filter(p => p.id !== productId);
  
  saveStoredProducts(allProducts);
  renderAdminTable(doc.adminSearchInput.value);
  filterCatalog(); // Update main view
  showToast("Producto eliminado");
}

function saveProductForm(e) {
  e.preventDefault();
  
  const id = document.getElementById('form-product-id').value;
  const name = document.getElementById('form-name').value.trim();
  const price = parseInt(document.getElementById('form-price').value);
  const priceOriginalVal = document.getElementById('form-price-original').value;
  const priceOriginal = priceOriginalVal ? parseInt(priceOriginalVal) : null;
  const stockCount = parseInt(document.getElementById('form-stock-count').value);
  const category = document.getElementById('form-category').value;
  const family = document.getElementById('form-family').value;
  const size = document.getElementById('form-size').value;
  let imageText = document.getElementById('form-image').value;
  
  const statusOffer = document.getElementById('form-status-offer').checked;
  const statusNoStock = document.getElementById('form-status-nostock').checked;
  const statusSold = document.getElementById('form-status-sold').checked;
  
  const description = document.getElementById('form-description').value || `Fragancia premium de la línea ${category}.`;
  const noteSalida = document.getElementById('form-note-salida').value || 'Notas frescas';
  const noteCorazon = document.getElementById('form-note-corazon').value || 'Notas aromáticas';
  const noteFondo = document.getElementById('form-note-fondo').value || 'Acordes duraderos';
  
  const categoriesDict = FILTER_DATA.categories;
  const categoryLabel = categoriesDict[category] || 'Otros';
  
  const familiesDict = FILTER_DATA.families;
  const familyLabel = familiesDict[family] || 'Fresco';
  
  // Check if image is URL or loaded local image file
  let image = '';
  if (uploadedImageDataUrl) {
    image = uploadedImageDataUrl; // Use base64 string
  } else {
    image = imageText;
  }
  
  if (!image || image === '[Imagen Importada del Dispositivo]') {
    if (category === 'perfumes') image = './assets/perfume_milano.png';
    else if (category === 'textiles') image = './assets/aromatizante_textil.png';
    else if (category === 'difusores') image = './assets/difusor_aromatico.png';
    else image = './assets/perfume_milano.png';
  }
  
  const allProducts = getStoredProducts();
  
  if (id) {
    // Edit existing product
    const product = allProducts.find(p => p.id === id);
    if (product) {
      product.name = name;
      product.price = price;
      product.priceOriginal = priceOriginal;
      product.stockCount = stockCount;
      product.category = category;
      product.categoryLabel = categoryLabel;
      product.family = family;
      product.familyLabel = familyLabel;
      product.size = size;
      product.image = image;
      product.description = description;
      product.statusOffer = statusOffer;
      product.statusNoStock = statusNoStock;
      product.statusSold = statusSold;
      product.notes = {
        salida: noteSalida,
        corazon: noteCorazon,
        fondo: noteFondo
      };
      showToast("Producto actualizado con éxito");
    }
  } else {
    // Add new product
    const newId = 'custom-' + Date.now();
    const newProduct = {
      id: newId,
      name,
      price,
      priceOriginal,
      stockCount,
      category,
      categoryLabel,
      family,
      familyLabel,
      size,
      image,
      description,
      featured: false,
      statusOffer,
      statusNoStock,
      statusSold,
      notes: {
        salida: noteSalida,
        corazon: noteCorazon,
        fondo: noteFondo
      }
    };
    allProducts.unshift(newProduct);
    showToast("Producto agregado con éxito");
  }
  
  saveStoredProducts(allProducts);
  doc.adminProductForm.reset();
  doc.adminFormPanel.classList.remove('active');
  uploadedImageDataUrl = '';
  
  renderAdminTable(doc.adminSearchInput.value);
  filterCatalog(); // Update main view
}

function resetToDefaultProducts() {
  if (!confirm("¿Estás seguro de que deseas restablecer el catálogo de productos al original? Esto eliminará todos los cambios de precios, productos añadidos y estados.")) return;
  
  localStorage.removeItem('fgoparfum_products');
  const defaults = getStoredProducts();
  renderProducts(defaults);
  
  if (isAdminAuthenticated) {
    renderAdminTable();
  }
  showToast("Catálogo restablecido por defecto");
}

window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.republishProduct = republishProduct;
window.resetToDefaultProducts = resetToDefaultProducts;

// ----------------------------------------------------------------
// 7. PWA Installation Lógica
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

// Standalone status checker
const isStandalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;

function showPWABanners() {
  if (doc.pwaHeroBanner) {
    doc.pwaHeroBanner.classList.add('show');
    doc.pwaHeroBanner.style.display = 'inline-flex';
  }
  
  setTimeout(() => {
    if (!sessionStorage.getItem('pwa-dismissed') && doc.pwaBanner) {
      doc.pwaBanner.classList.add('show');
      doc.pwaBanner.style.display = 'flex';
    }
  }, 4000);
}

function hidePWABanners() {
  if (doc.pwaBanner) {
    doc.pwaBanner.classList.remove('show');
    doc.pwaBanner.style.display = 'none';
  }
  if (doc.pwaHeroBanner) {
    doc.pwaHeroBanner.classList.remove('show');
    doc.pwaHeroBanner.style.display = 'none';
  }
}

function checkStandaloneStatus() {
  if (isStandalone) {
    // Show PWA banners even when running inside the standalone app
    showPWABanners();
    return;
  }
  
  // If not standalone: check if already installed in localStorage
  const isInstalled = localStorage.getItem('pwa-installed') === 'true';
  if (isInstalled) {
    hidePWABanners();
  } else {
    // If not installed, show them
    showPWABanners();
    
    // Customization for iOS instructions
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      setTimeout(() => {
        if (!sessionStorage.getItem('pwa-dismissed') && doc.pwaBanner) {
          const descEl = doc.pwaBanner.querySelector('.pwa-banner-text-desc');
          if (descEl) {
            descEl.textContent = "Toca el botón compartir de Safari y selecciona 'Agregar a inicio'.";
          }
          const installBtn = document.getElementById('btn-pwa-install');
          if (installBtn) {
            installBtn.textContent = "Instrucciones";
          }
        }
      }, 4100);
    }
  }

  // Asynchronous API to check if already installed (Chrome/Edge/Android)
  if (navigator.getInstalledRelatedApps) {
    navigator.getInstalledRelatedApps().then(apps => {
      if (apps.length > 0) {
        localStorage.setItem('pwa-installed', 'true');
        hidePWABanners();
      } else {
        localStorage.removeItem('pwa-installed');
        // Only show if not standalone
        showPWABanners();
      }
    }).catch(err => {
      console.log('Error checking installed apps:', err);
    });
  }
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  
  if (isStandalone) {
    showPWABanners();
    return;
  }
  
  const isInstalled = localStorage.getItem('pwa-installed') === 'true';
  if (!isInstalled) {
    showPWABanners();
  } else {
    hidePWABanners();
  }
});

function triggerPWAInstall() {
  if (isStandalone) {
    showToast("¡FGOParfum ya está abierta como aplicación! 🚀");
    return;
  }

  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('El usuario aceptó la instalación de la PWA.');
        localStorage.setItem('pwa-installed', 'true');
        hidePWABanners();
      } else {
        console.log('El usuario canceló la instalación de la PWA.');
      }
      deferredPrompt = null;
    });
  } else {
    // iOS or non-chromium browsers install guide
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      showToast("Toca el botón compartir de Safari y selecciona 'Agregar a inicio' 📲");
    } else {
      showToast("Abre el menú de tu navegador y selecciona 'Instalar aplicación' o 'Agregar a pantalla principal' 📲");
    }
  }
}

window.addEventListener('appinstalled', (evt) => {
  console.log('La aplicación fue instalada con éxito en el sistema.');
  localStorage.setItem('pwa-installed', 'true');
  if (!isStandalone) {
    hidePWABanners();
  }
  showToast('¡FGOParfum instalada con éxito en tu dispositivo!');
});

function showToast(message) {
  if (!doc.toast || !doc.toastMessage) return;
  
  doc.toastMessage.textContent = message;
  doc.toast.classList.add('show');
  
  setTimeout(() => {
    doc.toast.classList.remove('show');
  }, 3500);
}
