// Sample products data
const products = [
    // Face Products
    {
        id: 1,
        name: "تينت بينيفت Benefit",    
        price: 110,
        description:"تينت بينيفت الشهير",
        icon: "images/BenefitTint.avif",
        category: "بلاشر",
        shades: ["Gogo", "Bentint"]
    },
    {
        id: 2,
        name: "ايكون بلشر Revoltuion",
        price: 120,
        description: "باليت 3 الوان من ريفوليوشن, بلشر بودرة وبلشر كريمي وهايلايتر",
        icon: "images/RevolutionIconBlush.webp",
        category: "بلاشر",
        shades: ["Hot pink flag", "Aura points rose"]
    },
    {
        id: 3,
        name: "جلوس NYX",
        price: 60,
        description: "جلوس للشفاه ثبات يدوم لساعات",
        icon: "images/NYXGloss.webp",
        category: "شفاه",
        shades: ["Blush rush", "Mocha me wet", "Hydra-Honey"]
    },
    {
        id: 4,
        name: "بلاشر charotte Tilbury",
        price: 210,
        description: "بلاشر كريمي سهل التطبيق",
        icon: "images/CTStickBlush.webp",
        category: "بلاشر",
        shades: ["Rosy Glow", "Pinky Glow"]
    },
    
    {
        id: 5,
        name: "مجموعة فراشي Real Techniques",
        price: 180,
        description: "مجموعة 4 فراشي للمكياج",
        icon: "images/RealTechBrush.jpg",
        category: "فراشي",
        shades: ["مجموعة كاملة"]
    },

    {
        id: 6,
        name: "بودرة هدى بيوتي Huda Beauty",
        price: 180,
        description: "بودرة من هدى بيوتي",
        icon: "images/HudaPowderCherry.avif",
        category: "وجه",
        shades: ["Cherry Blossom"]
    },
    {
        id: 7,
        name: "كونسيلر Tarte Ultra Creamy",
        price: 120,
        description: "كونسيلر كريمي من تارت",
        icon: "images/TarteUltraCreamy.jpeg",
        category: "وجه",
        shades: ["16N", "20B"]
    },
    {
        id: 8,
        name: "سبراي تثبيت Charlotte Tilbury",
        price: 210,
        description: "سبراي تثبيت المكياج من شارلوت تيلبري",
        icon: "images/CTSetting.jpg",
        category: "سبراي تثبيت",
        shades: ["واحد"]
    }
];

// ============================================
// LOCALSTORAGE (Synced across pages)
// ============================================
function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cartData) {
    localStorage.setItem('cart', JSON.stringify(cartData));
}

let selectedDelivery = null;
let deliveryPrice = 0;
let currentView = 'products'; 
let currentProductId = null;
let selectedShade = null;

function getAllProducts() {
    return products;
}

// Updated createProductCard function - now clickable
function createProductCard(product) {
    return `
        <div class="product-card" onclick="goToProductDetail(${product.id})">
            <div class="product-image" style="background-image: url('${product.icon}')"></div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-category">${product.category}</div>
                <div class="product-shades">
                    <span class="shades-label">الألوان المتاحة:</span>
                    <div class="shades-list">
                        ${product.shades.map(shade => `<span class="shade-item">${shade}</span>`).join('')}
                    </div>
                </div>
                <div class="product-price">${product.price} شيقل</div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                    <i class="fas fa-shopping-bag"></i> أضيفي للسلة
                </button>
            </div>
        </div>
    `;
}

function goBack() {
    backToProducts();
}

function goToCheckout() {
    // Get cart from localStorage (it's already saved there)
    let cart = getCart();
    
    // Check if cart is empty
    if (cart.length === 0) {
        alert('السلة فارغة! أضيفي منتجات أولاً 💕');
        return;
    }
    
    // Go to checkout page
    window.location.href = 'checkout.html';
}

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const mainContent = document.querySelector('main') || document.body;
    const detailHTML = `
        <div class="product-detail-container">
            <button onclick="backToProducts()" class="back-button">
                <i class="fas fa-arrow-right"></i> العودة للمنتجات
            </button>
            <div class="product-detail-content">
                <div class="product-detail-image">
                    <img src="${product.icon}" alt="${product.name}">
                </div>
                <div class="product-detail-info">
                    <h1>${product.name}</h1>
                    <p class="product-detail-description">${product.description}</p>
                    <div class="product-detail-category">الفئة: ${product.category}</div>
                    <div class="product-detail-price">${product.price} شيقل</div>
                    <div class="product-detail-shades">
                        <h3>الألوان المتاحة:</h3>
                        <div class="shades-grid">
                            ${product.shades.map(shade => `
                               <button class="shade-option" onclick="selectShade(${product.id}, '${shade}', this)">
                                    ${shade}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    <button class="add-to-cart-detail" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-bag"></i> أضيفي للسلة
                    </button>
                </div>
            </div>
        </div>
    `;
    
    mainContent.innerHTML = detailHTML;
}

function selectShade(productId, shade, element) {
    selectedShade = shade;
    
    // Remove 'selected' class from all shade buttons
    document.querySelectorAll('.shade-option').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add 'selected' class to clicked button
    if (element) {
        element.classList.add('selected');
    }
}

function backToProducts() {
    currentView = 'products';
    currentProductId = null;
    location.reload(); // Reload to show original content
}

function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    if (!featuredContainer) return;
    
    const featuredProducts = products.slice(0, 4);
    featuredContainer.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

function loadAllProducts() {
    const productsContainer = document.getElementById('allProducts');
    if (!productsContainer) return;
    
    productsContainer.innerHTML = products.map(product => createProductCard(product)).join('');
}

function filterProducts(category) {
    const productsContainer = document.getElementById('allProducts');
    if (!productsContainer) return;
    
    const filteredProducts = category === 'الكل' ? products : products.filter(p => p.category === category);
    productsContainer.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`[onclick="filterProducts('${category}')"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    
    if (navLinks) navLinks.classList.toggle('active');
    if (hamburger) hamburger.classList.toggle('active');
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.toggle('open');
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    let cart = getCart(); // GET FROM LOCALSTORAGE
    
    // If we're on product detail page
    if (currentView === 'product-detail') {
        let shadeToAdd = selectedShade;
        
        // If no shade selected but product has only one shade, use it automatically
        if (!shadeToAdd && product.shades.length === 1) {
            shadeToAdd = product.shades[0];
        }
        
        // If product has multiple shades and none selected, show alert
        if (!shadeToAdd && product.shades.length > 1 && product.shades[0] !== "واحد") {
            alert('الرجاء اختيار لون أولاً');
            return;
        }
        
        const existingItem = cart.find(item => item.id === productId && item.selectedShade === shadeToAdd);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1, selectedShade: shadeToAdd });
        }
        
        selectedShade = null; // Reset after adding
    } else {
        // Regular add to cart (from product cards)
        const existingItem = cart.find(item => item.id === productId && !item.selectedShade);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
    }
    
    saveCart(cart); // SAVE TO LOCALSTORAGE
    updateCart();
    showAddToCartSuccess();
}

function removeFromCart(productId, selectedShade = '') {
    let cart = getCart(); // GET FROM LOCALSTORAGE
    
    if (selectedShade) {
        cart = cart.filter(item => !(item.id === productId && item.selectedShade === selectedShade));
    } else {
        cart = cart.filter(item => item.id !== productId);
    }
    
    saveCart(cart); // SAVE TO LOCALSTORAGE
    updateCart();
}

function updateCart() {
    let cart = getCart(); // GET FROM LOCALSTORAGE
    
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartCount || !cartItems || !cartTotal) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <h3>سلة التسوق فارغة</h3>
                <p>أضيفي منتجات لبدء التسوق</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image" style="background-image: url('${item.icon}')"></div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    ${item.selectedShade ? `<p style="color: #ff69b4; font-size: 0.9rem;">اللون: ${item.selectedShade}</p>` : ''}
                    <p>${item.price} شيقل × ${item.quantity}</p>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id}, '${item.selectedShade || ''}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total;
    
    const deliveryInfo = document.getElementById('deliveryInfo');
    const finalTotal = document.getElementById('finalTotal');
    
    if (deliveryInfo && selectedDelivery) {
        deliveryInfo.style.display = 'block';
        const deliveryPriceElem = document.getElementById('deliveryPrice');
        if (deliveryPriceElem) {
            deliveryPriceElem.textContent = deliveryPrice;
        }
        if (finalTotal) {
            finalTotal.textContent = total + deliveryPrice;
        }
    }
}

function showAddToCartSuccess() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #ff1493, #ff69b4);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        z-index: 1002;
        font-weight: 600;
        box-shadow: 0 8px 25px rgba(255, 20, 147, 0.3);
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    message.innerHTML = '<i class="fas fa-check-circle"></i> تم إضافة المنتج للسلة';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        message.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
}

function showContactMessage() {
    let cart = getCart(); // GET FROM LOCALSTORAGE
    
    if (cart.length === 0) {
        alert('سلة التسوق فارغة!');
        return;
    }
    
    let orderSummary = 'طلبي:\n';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        orderSummary += `- ${item.name}`;
        if (item.selectedShade) {
            orderSummary += ` (${item.selectedShade})`;
        }
        orderSummary += ` × ${item.quantity} = ${itemTotal} شيقل\n`;
    });
    
    if (selectedDelivery && deliveryPrice > 0) {
        const deliveryText = selectedDelivery === 'westbank' ? 'التوصيل للضفة الغربية' : 
                           selectedDelivery === 'jerusalem' ? 'التوصيل للقدس' : 'استلام من الجامعة';
        orderSummary += `\n${deliveryText}: ${deliveryPrice} شيقل`;
        total += deliveryPrice;
    } else if (selectedDelivery === 'pickup') {
        orderSummary += '\nاستلام من الجامعة: مجاني';
    }
    
    orderSummary += `\nالمجموع النهائي: ${total} شيقل`;
    
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 1003;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    const orderSummaryEscaped = orderSummary.replace(/'/g, "\\'").replace(/\n/g, '\\n');
    
    message.innerHTML = `
        <div style="
            background: white;
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            max-width: 500px;
            margin: 20px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        ">
            <i class="fab fa-instagram" style="font-size: 4rem; color: #ff1493; margin-bottom: 20px;"></i>
            <h2 style="color: #ff1493; margin-bottom: 20px; font-size: 1.8rem;">إتمام الطلب</h2>
            <p style="color: #666; margin-bottom: 25px; line-height: 1.6; font-size: 1.1rem;">
                لإتمام طلبكِ، يرجى التواصل معنا عبر الانستغرام مع تفاصيل طلبكِ
            </p>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <a href="https://www.instagram.com/layansbeautyshop/" target="_blank" style="
                    background: linear-gradient(135deg, #ff1493, #ff69b4);
                    color: white;
                    padding: 12px 25px;
                    text-decoration: none;
                    border-radius: 25px;
                    font-weight: 600;
                    transition: transform 0.3s ease;
                " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                    <i class="fab fa-instagram"></i> تواصلي معنا
                </a>
                <button onclick="copyOrderSummary('${orderSummaryEscaped}'); closeContactMessage();" style="
                    background: #28a745;
                    color: white;
                    padding: 12px 25px;
                    border: none;
                    border-radius: 25px;
                    font-weight: 600;
                    cursor: pointer;
                ">
                    نسخ تفاصيل الطلب
                </button>
                <button onclick="closeContactMessage()" style="
                    background: transparent;
                    color: #666;
                    padding: 12px 25px;
                    border: 2px solid #ddd;
                    border-radius: 25px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                " onmouseover="this.style.borderColor='#ff1493'; this.style.color='#ff1493'" onmouseout="this.style.borderColor='#ddd'; this.style.color='#666'">
                    إغلاق
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(message);
    message.addEventListener('click', (e) => {
        if (e.target === message) {
            closeContactMessage();
        }
    });
}

function copyOrderSummary(orderSummary) {
    const cleanedSummary = orderSummary.replace(/\\n/g, '\n').replace(/\\'/g, "'");
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(cleanedSummary).then(() => {
            alert('تم نسخ تفاصيل الطلب! الآن يمكنك لصقها في رسالة الانستغرام');
        }).catch(() => {
            fallbackCopy(cleanedSummary);
        });
    } else {
        fallbackCopy(cleanedSummary);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        alert('تم نسخ تفاصيل الطلب! الآن يمكنك لصقها في رسالة الانستغرام');
    } catch (err) {
        alert('فشل النسخ، يرجى نسخ التفاصيل يدوياً');
    }
    document.body.removeChild(textArea);
}

function closeContactMessage() {
    const messages = document.querySelectorAll('[style*="rgba(0, 0, 0, 0.8)"]');
    messages.forEach(message => {
        message.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (message.parentNode) {
                document.body.removeChild(message);
            }
        }, 300);
    });
}

function submitContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        z-index: 1002;
        font-weight: 600;
        box-shadow: 0 8px 25px rgba(40, 167, 69, 0.3);
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    message.innerHTML = '<i class="fas fa-check-circle"></i> تم إرسال رسالتكِ بنجاح';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        message.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
    
    form.reset();
}

// Add styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0.9); }
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
    
    .product-card {
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .product-card:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 25px 50px rgba(255, 20, 147, 0.3);
    }
    
    .product-card .add-to-cart {
        position: relative;
        z-index: 10;
    }
    
    .product-card::after {
        content: "انقري للتفاصيل";
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(255, 20, 147, 0.8);
        color: white;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }
    
    .product-card:hover::after {
        opacity: 1;
    }
    
    .product-detail-container {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .back-button {
        background: linear-gradient(135deg, #ff1493, #ff69b4);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 25px;
        cursor: pointer;
        margin-bottom: 20px;
        font-weight: 600;
    }
    
    .product-detail-content {
        display: flex;
        gap: 40px;
        flex-wrap: wrap;
    }
    
    .product-detail-image {
        flex: 1;
        min-width: 300px;
    }
    
    .product-detail-image img {
        width: 100%;
        border-radius: 20px;
    }
    
    .product-detail-info {
        flex: 1;
        min-width: 300px;
    }
    
    .product-detail-shades {
        margin: 20px 0;
    }
    
    .shades-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 10px;
        margin-top: 10px;
    }
    
    .shade-option {
        background: white;
        border: 2px solid #ff69b4;
        padding: 10px;
        border-radius: 15px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .shade-option:hover,
    .shade-option.selected {
        background: #ff69b4;
        color: white;
    }
    
    .add-to-cart-detail {
        background: linear-gradient(135deg, #ff1493, #ff69b4);
        color: white;
        border: none;
        padding: 15px 30px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 1.1rem;
        font-weight: 600;
        width: 100%;
        margin-top: 20px;
    }
`;
document.head.appendChild(style);

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCart();
    loadFeaturedProducts();
    loadAllProducts();
    
    document.addEventListener('click', function(event) {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartIcon = document.querySelector('.cart-icon');
        
        if (cartSidebar && cartSidebar.classList.contains('open')) {
            if (!cartSidebar.contains(event.target) && cartIcon && !cartIcon.contains(event.target)) {
                cartSidebar.classList.remove('open');
            }
        }
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});