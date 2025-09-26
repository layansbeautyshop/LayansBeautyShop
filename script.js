// Sample products data
const products = [
    // Face Products
    {
        id: 1,
        name: "Makeup revolution super dewy blush",
        price: 180,
        description: "بلشر سائل يعطي لمعة للوجخ من ريفوليوشن",
        icon: "images/RevolutionBlush.jpg", // Replace with your image
        category: "بلاشر",
        shades: ["فاتح جداً", "فاتح", "متوسط", "داكن", "داكن جداً"]
    },
    {
        id: 2,
        name: "بودرة مضغوطة MAC",
        price: 120,
        description: "بودرة مضغوطة لتثبيت المكياج",
        icon: "images/powder1.jpg",
        category: "وجه",
        shades: ["شفاف", "فاتح", "متوسط", "داكن"]
    },
    {
        id: 3,
        name: "أحمر خدود NARS",
        price: 95,
        description: "أحمر خدود يمنح إشراقة طبيعية",
        icon: "images/blush1.jpg",
        category: "بلاشر",
        shades: ["وردي فاتح", "خوخي", "وردي داكن", "مرجاني"]
    },
    {
        id: 4,
        name: "بلاشر كريمي Glossier",
        price: 85,
        description: "بلاشر كريمي سهل التطبيق",
        icon: "images/creamblush1.jpg",
        category: "بلاشر",
        shades: ["وردي طبيعي", "خوخي دافئ", "توتي"]
    },
    {
        id: 5,
        name: "برونزر Too Faced",
        price: 140,
        description: "برونزر لإضافة الدفء للوجه",
        icon: "images/bronzer1.jpg",
        category: "برونزر",
        shades: ["فاتح", "متوسط", "داكن"]
    },
    {
        id: 6,
        name: "هايلايتر Fenty Beauty",
        price: 160,
        description: "هايلايتر مضيء للإشراقة المثالية",
        icon: "images/highlighter1.jpg",
        category: "هايلايتر",
        shades: ["ذهبي فاتح", "ذهبي داكن", "وردي", "شمبانيا"]
    },
    {
        id: 7,
        name: "ماسكارا Benefit",
        price: 130,
        description: "ماسكارا لرموش كثيفة وطويلة",
        icon: "images/mascara1.jpg",
        category: "عيون",
        shades: ["أسود", "بني داكن"]
    },
    {
        id: 8,
        name: "ظلال عيون Urban Decay",
        price: 220,
        description: "باليت ظلال عيون 12 لون",
        icon: "images/eyeshadow1.jpg",
        category: "عيون",
        shades: ["نود", "دخاني", "ملون"]
    },
    {
        id: 9,
        name: "أحمر شفاه MAC",
        price: 100,
        description: "أحمر شفاه كريمي طويل الثبات",
        icon: "images/lipstick1.jpg",
        category: "شفاه",
        shades: ["أحمر كلاسيكي", "وردي فاتح", "بيري", "نود"]
    },
    {
        id: 10,
        name: "قلم تحديد الشفاه",
        price: 65,
        description: "قلم تحديد الشفاه مقاوم للتلطخ",
        icon: "images/lipliner1.jpg",
        category: "محدد شفاه",
        shades: ["نود", "وردي", "أحمر", "بني"]
    },
    {
        id: 11,
        name: "ملمع الشفاه Fenty",
        price: 80,
        description: "ملمع شفاه مرطب ومضيء",
        icon: "images/lipgloss1.jpg",
        category: "شفاه",
        shades: ["شفاف", "وردي فاتح", "خوخي", "ذهبي"]
    },
    {
        id: 12,
        name: "فرشاة كريم الأساس",
        price: 75,
        description: "فرشاة مسطحة لتطبيق كريم الأساس",
        icon: "images/brush1.jpg",
        category: "فراشي",
        shades: ["واحد"]
    },
    {
        id: 13,
        name: "مجموعة فراشي Real Techniques",
        price: 180,
        description: "مجموعة 5 فراشي للمكياج",
        icon: "images/brushset1.jpg",
        category: "فراشي",
        shades: ["مجموعة كاملة"]
    },
    {
        id: 14,
        name: "سبراي تثبيت Urban Decay",
        price: 140,
        description: "سبراي تثبيت المكياج 12 ساعة",
        icon: "images/settingspray1.jpg",
        category: "سبراي تثبيت",
        shades: ["واحد"]
    },
    {
        id: 15,
        name: "سيروم فيتامين سي",
        price: 200,
        description: "سيروم فيتامين سي لإشراق البشرة",
        icon: "images/serum1.jpg",
        category: "العناية بالبشرة",
        shades: ["واحد"]
    },
    {
        id: 16,
        name: "مرطب الوجه Cetaphil",
        price: 120,
        description: "مرطب يومي للبشرة الحساسة",
        icon: "images/moisturizer1.jpg",
        category: "العناية بالبشرة",
        shades: ["واحد"]
    },
    {
        id: 17,
        name: "كريم الجسم Bath & Body Works",
        price: 90,
        description: "كريم الجسم المرطب برائحة الفانيليا",
        icon: "images/bodycream1.jpg",
        category: "كريمات الجسم",
        shades: ["فانيليا", "ياسمين", "ورد", "جوز الهند"]
    },
    {
        id: 18,
        name: "لوشن الجسم Vaseline",
        price: 65,
        description: "لوشن مرطب للجسم بالجلسرين",
        icon: "images/bodylotion1.jpg",
        category: "كريمات الجسم",
        shades: ["عادي", "برائحة الورد"]
    }
];

// Get all products function
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

// Function to navigate to product detail page
function goToProductDetail(productId) {
    window.location.href = `products-details.html?id=${productId}`;
}

// Load featured products on home page
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    if (!featuredContainer) return;
    
    const featuredProducts = products.slice(0, 4);
    featuredContainer.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

// Load all products on products page
function loadAllProducts() {
    const productsContainer = document.getElementById('allProducts');
    if (!productsContainer) return;
    
    productsContainer.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Filter products by category
function filterProducts(category) {
    const productsContainer = document.getElementById('allProducts');
    if (!productsContainer) return;
    
    const filteredProducts = category === 'الكل' ? products : products.filter(p => p.category === category);
    productsContainer.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`[onclick="filterProducts('${category}')"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

// Cart functionality with enhanced features for shades and delivery
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let selectedDelivery = localStorage.getItem('selectedDelivery') || null;
let deliveryPrice = parseInt(localStorage.getItem('deliveryPrice') || '0');

// Mobile menu toggle
// Replace the toggleMenu function in your script.js with this:

function toggleMenu() {
    const navLinks = document.getElementById('navLinks'); // or document.querySelector('.nav-links')
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Cart toggle
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('open');
}

// Enhanced add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId && !item.selectedShade);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        updateCart();
        saveCart();
        showAddToCartSuccess();
    }
}

// Enhanced remove from cart function
function removeFromCart(productId, selectedShade = '') {
    if (selectedShade) {
        cart = cart.filter(item => !(item.id === productId && item.selectedShade === selectedShade));
    } else {
        cart = cart.filter(item => item.id !== productId);
    }
    updateCart();
    saveCart();
}

// Enhanced update cart display with delivery info
function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartCount || !cartItems || !cartTotal) return;
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
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
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total;
    
    // Update delivery info if available
    const deliveryInfo = document.getElementById('deliveryInfo');
    const finalTotal = document.getElementById('finalTotal');
    
    if (deliveryInfo && selectedDelivery) {
        deliveryInfo.style.display = 'block';
        document.getElementById('deliveryPrice').textContent = deliveryPrice;
        if (finalTotal) {
            finalTotal.textContent = total + deliveryPrice;
        }
    }
}

// Save cart and delivery info to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('selectedDelivery', selectedDelivery);
    localStorage.setItem('deliveryPrice', deliveryPrice.toString());
}

// Show add to cart success message
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

// Enhanced contact message with order details including delivery
function showContactMessage() {
    if (cart.length === 0) {
        alert('سلة التسوق فارغة!');
        return;
    }
    
    // Create order summary
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
    
    // Add delivery if selected
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
                <button onclick="copyOrderSummary('${orderSummary.replace(/'/g, "\\'")}'); closeContactMessage();" style="
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

// Copy order summary to clipboard
function copyOrderSummary(orderSummary) {
    navigator.clipboard.writeText(orderSummary.replace(/\\n/g, '\n')).then(() => {
        alert('تم نسخ تفاصيل الطلب! الآن يمكنك لصقها في رسالة الانستغرام');
    }).catch(() => {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = orderSummary.replace(/\\n/g, '\n');
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('تم نسخ تفاصيل الطلب! الآن يمكنك لصقها في رسالة الانستغرام');
    });
}

// Close contact message
function closeContactMessage() {
    const message = document.querySelector('[style*="rgba(0, 0, 0, 0.8)"]');
    if (message) {
        message.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }
}

// Contact form submission
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

// Add CSS animations and clickable card styles
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
    
    /* Make product cards clickable */
    .product-card {
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .product-card:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 25px 50px rgba(255, 20, 147, 0.3);
    }
    
    /* Prevent button from triggering card click */
    .product-card .add-to-cart {
        position: relative;
        z-index: 10;
    }
    
    /* Add a subtle indicator that cards are clickable */
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
`;
document.head.appendChild(style);

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCart();
    loadFeaturedProducts();
    loadAllProducts();
    
    // Add click outside to close cart
    document.addEventListener('click', function(event) {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartIcon = document.querySelector('.cart-icon');
        
        if (cartSidebar && cartSidebar.classList.contains('open')) {
            if (!cartSidebar.contains(event.target) && !cartIcon.contains(event.target)) {
                cartSidebar.classList.remove('open');
            }
        }
    });
    
    // Smooth scrolling for anchor links
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