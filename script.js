const products = [
    {
        id: 1,
        name: "تينت بينيفت Benefit",    
        price: 110,
        description:"تينت بينيفت الشهير",
        icon: "images/BenefitTint.avif",
        category: "بلاشر",
        inStock: true,
        shades: [
            { name: "Gogo", available: true },
            { name: "Bentint", available: false } 
        ]
    },
    {
        id: 2,
        name: "ايكون بلشر Revoltuion",
        price: 120,
        description: "باليت 3 الوان من ريفوليوشن, بلشر بودرة وبلشر كريمي وهايلايتر",
        icon: "images/RevolutionIconBlush.webp",
        category: "بلاشر",
        inStock: true,
        shades: [
            { name: "Hot pink flag", available: true },
            { name: "Aura points rose", available: true }
        ]
    },
    {
        id: 3,
        name: "جلوس NYX",
        price: 60,
        description: "جلوس للشفاه ثبات يدوم لساعات",
        icon: "images/NYXGloss.webp",
        category: "شفاه",
        inStock: true, 
        shades: [
            { name: "Blush rush", available: true },
            { name: "Mocha me wet", available: true },
            { name: "Hydra-Honey", available: false }
        ]
    },
    {
        id: 4,
        name: "بلاشر charotte Tilbury",
        price: 210,
        description: "بلاشر كريمي سهل التطبيق",
        icon: "images/CTStickBlush.webp",
        category: "بلاشر",
        inStock: true,
        shades: [
            { name: "Rosy Glow", available: true },
            { name: "Pinky Glow", available: true }
        ]
    },
    {
        id: 5,
        name: "مجموعة فراشي Real Techniques",
        price: 180,
        description: "مجموعة 4 فراشي للمكياج",
        icon: "images/RealTechBrush.jpg",
        category: "فراشي",
        inStock: true,
        shades: [
            { name: "مجموعة كاملة", available: true } 
        ]
    },
    {
        id: 6,
        name: "بودرة هدى بيوتي Huda Beauty",
        price: 180,
        description: "بودرة من هدى بيوتي",
        icon: "images/HudaPowderCherry.avif",
        category: "وجه",
        inStock: true,
        shades: [
            { name: "Cherry Blossom", available: true }
        ]
    },
    {
        id: 7,
        name: "كونسيلر Tarte Ultra Creamy",
        price: 120,
        description: "كونسيلر كريمي من تارت",
        icon: "images/TarteUltraCreamy.jpeg",
        category: "وجه",
        inStock: true,
        shades: [
            { name: "16N", available: true },
            { name: "20B", available: false } 
        ]
    },
    {
        id: 8,
        name: "سبراي تثبيت Charlotte Tilbury",
        price: 210,
        description: "سبراي تثبيت المكياج من شارلوت تيلبري",
        icon: "images/CTSetting.jpg",
        category: "سبراي تثبيت",
        inStock: true,
        shades: [
            { name: "واحد", available: true }
        ]
    },
     {
        id: 9,
        name: "Pixi Eye patches",
        price: 120,
    description: " لواصق\ باتشات لتحت العيون غنية بفيتامين سي وعرق السوس والجنسنغ للتفتيح ",
        icon: "images/PixiPatches.jpg",
        category: "منتجات العناية",
        inStock: true,
        shades: [
            { name: "Beautifeye", available: true },
            { name: "Detoxifeye", available: false } 
        ]
    },
    {
  id: 10,
        name: "Maracuja juicy Lip & cheek shift",
        price: 100,
        description: "منتج مزدوج للشفاه والخدود من تارت، يمنحكِ لونًا طبيعيًا يدوم طويلاً مع ترطيب عميق بفضل زيت الماراكوجا المغذي. يعمل بتقنية الحموضة الطبيعية لبشرتك",
icon: "images/MaracujaShift.jpg",
        category: "شفاه",
        inStock: true,
        shades: [
            { name: "Ice pop", available: true },
            { name: "Blueberry", available: true } 
        ]
    },
{
        id: 11,
        name: "Maracuja juicy Lip vinyl",
        price: 80,
        description: "جلوس للشفاه, يعطي لمعة ويقوم بتكبير الشفاه وجعلهم ممتلئات ويرطب",
        icon: "images/MaracujaVinyl.webp",
        category: "شفاه",
        inStock: true,
        shades: [
            { name: "Sheer ice", available: true },
            { name: "Rosy beige", available: false } 
        ]
    },
     {
        id: 12,
        name: "Sol de Janeio jet set",
        price: 170,
        description: "بكج سول دي جانيرو تحتوي على: شامبو للجسم (شاور جل) ومرطب للجسم وعطر",
        icon: "images/Soldejaneirotravel.webp",
        category: "بكجات",
        inStock: true,
        shades: [
            { name: "59 ارجواني", available: true },
            { name: "68 وردي", available: true} ,
 	       { name: "40 بطيخي", available: true} 
        ]
    },
    {
 id: 13,
        name: "Sol de Janeio cream",
        price: 100,
        description: "مرطب سول دي جانيرو للجسم بحجم 75 مل",
        icon: "images/SoldejaneiroCream.webp",
        category: "منتجات العناية",
        inStock: true,
        shades: [
            { name: "Delecia drench body butter", available: true },
            { name: "beija flor elasti-cream", available: true} 
        ]
    },
{
 id: 14,
        name: "Elf Camo liquid blush",
        price: 60,
        description: "بلشر ايلف السائل, بيجمنت وثبات عالي",
        icon: "images/elfcamoblush.webp",
        category: "بلاشر",
        inStock: true,
        shades: [
            { name: "Peach perect", available: true },
            { name: "Copper etiqutte", available: true},
 		{ name: "Pinky promise", available: true }

        ]
    },
    {
     id: 15,
        name: "Revolution jelly blush",
        price: 40,
        description: "بلشر ريفيليوشن بقوام الجيلي",
        icon: "images/Revolutionjelly.webp",
        category: "بلاشر",
        inStock: true,
        shades: [
            { name: "Strawberry", available: true },
            { name: "Peach", available: true},
        ] },
 {
     id: 16,
        name: "Revolution blush burst",
        price: 45,
        description: "بلشر ريفيليوشن سائل",
        icon: "images/revolutionburst.webp",
        category: "بلاشر",
        inStock: true,
        shades: [
            { name: "Bubblegum burst pink", available: true },
            { name: "Strawberry milkshake cool pink", available: true},
        ] },
{
     id: 17,
        name: "Saie dew blush",
        price: 130,
        description: "بلشر سائل من saie",
        icon: "images/saieblush.webp",
        category: "بلاشر",
        inStock: true,
        shades: [
            { name: "Spicy", available: true },
            { name: "Chilly", available: false},
 	 { name: "Poppy", available: false}
        ] },
{
     id: 18,
        name: "Too faced matte bronzer",
        price: 170,
        description: "برونزر من تو فيسد بلا لمعة",
        icon: "images/toofacedsol.webp",
        category: "برونزر",
        inStock: true,
        shades: [
            { name: "Chocolate soliel", available: true },
            { name: "Sun bunny", available: true},
        ] },
{
     id: 18,
        name: "Essence lip and cheek tint",
        price: 25,
        description: "تينت من ايسنس بثبات عالي",
        icon: "images/essencetint.webp",
        category: "بلاشر",
        inStock: true,
        shades: [
            { name: "01 Kiss from rose", available: true }
        ] },
{
     id: 19,
        name: "Nyx the face glue gripping primer",
        price: 50,
        description: "برايمر لثبات الميكاب طوال اليوم",
        icon: "images/nyxglue.webp",
        category: "الكل",
        inStock: true,
        shades: [
            { name: "white", available: true }
        ] },

{
     id: 20,
        name: "Mini Modern renaissance kit",
        price: 200,
        description: "بكج مكونة من باليت ايشادو وروج وقلم حواجب من انستازيا",
        icon: "images/minimodernkit.webp",
        category: "بكجات",
        inStock: true,
        shades: [
            { name: "soft brown", available: true }
        ] }
];


function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cartData) {
    localStorage.setItem('cart', JSON.stringify(cartData));
}

let selectedDelivery = null;
let deliveryPrice = 0;
let selectedShade = null;

function getAllProducts() {
    return products;
}

function createProductCard(product) {
    const isAvailable = product.inStock;
    
    const requiresShadeSelection = product.shades && product.shades.filter(s => s.available).length > 1;

    const hasAvailableShades = product.shades.some(s => s.available);
    const finalAvailability = isAvailable && (product.shades.length === 0 || hasAvailableShades);

    const buttonAction = requiresShadeSelection ? `event.stopPropagation(); goToProductDetail(${product.id});` : `event.stopPropagation(); addToCart(${product.id});`;
    const buttonText = requiresShadeSelection ? 'اختاري اللون أولاً' : (finalAvailability ? 'أضيفي للسلة' : 'نفذت الكمية');
    const buttonClass = requiresShadeSelection ? 'add-to-cart select-shade' : 'add-to-cart';

    return `
        <div class="product-card ${finalAvailability ? '' : 'out-of-stock-card'}" onclick="goToProductDetail(${product.id})">
            ${finalAvailability ? '' : '<div class="out-of-stock-overlay">نفذت الكمية بالكامل</div>'}
            <div class="product-image" style="background-image: url('${product.icon}')"></div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-category">${product.category}</div>
                <div class="product-shades">
                    <span class="shades-label">الألوان المتاحة:</span>
                    <div class="shades-list">
                        ${product.shades.map(shade => 
                            `<span class="shade-item ${shade.available ? '' : 'unavailable-shade'}">${shade.name}</span>`
                        ).join('')}
                    </div>
                </div>
                <div class="product-price">${product.price} شيقل</div>
                <button class="${buttonClass}" ${finalAvailability ? '' : 'disabled'} onclick="${buttonAction}">
                    <i class="fas fa-shopping-bag"></i> ${buttonText}
                </button>
            </div>
        </div>
    `;
}

function goToCheckout() {
    let cart = getCart();
    
    if (cart.length === 0) {
        alert('السلة فارغة! أضيفي منتجات أولاً 💕');
        return;
    }
    
    window.location.href = 'checkout.html';
}

function goToProductDetail(productId) {
    window.location.href = `products-details.html?id=${productId}`;
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
    if (!product || !product.inStock) return; 
    
    let cart = getCart();
    
    const existingItem = cart.find(item => item.id === productId && !item.selectedShade);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart(cart);
    updateCart();
    showAddToCartSuccess();
}

function removeFromCart(productId, selectedShade = '') {
    let cart = getCart();
    
    if (selectedShade) {
        cart = cart.filter(item => !(item.id === productId && item.selectedShade === selectedShade));
    } else {
        cart = cart.filter(item => item.id !== productId);
    }
    
    saveCart(cart);
    updateCart();
}


function updateCart() {
    let cart = getCart();
    
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
                <div class="cart-item-image" style="background-image: url('${item.icon}'); width: 60px; height: 60px; background-size: cover; background-position: center; flex-shrink: 0;"></div>
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
    let cart = getCart();
    
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
            position: relative;
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
                <button onclick="window.location.href = 'products.html';" style="
                    background: transparent;
                    color: #ff1493;
                    padding: 12px 25px;
                    border: 2px solid #ff1493;
                    border-radius: 25px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                " onmouseover="this.style.backgroundColor='#ffeef8'" onmouseout="this.style.backgroundColor='transparent'">
                    العودة للتسوق
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(message);
    // This allows clicking outside the modal to close it (like the 'X' function)
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
        // Find the correct way to close the modal (by removing the element added in showContactMessage)
        if (message.contains(document.querySelector('.fab.fa-instagram')) && message.parentNode === document.body) {
            message.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                if (message.parentNode) {
                    document.body.removeChild(message);
                }
            }, 300);
        }
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

function backToProducts() {
    window.location.href = 'products.html';
}

function selectShade(shadeName, index, isAvailable) {
    if (!isAvailable) {
        alert('هذا اللون/الدرجة غير متوفر حالياً. يرجى اختيار لون آخر.');
        return;
    }
    
    selectedShade = shadeName;
    document.querySelectorAll('.shade-btn').forEach(btn => btn.classList.remove('active'));
    const shadeBtn = document.getElementById(`shade-${index}`);
    if (shadeBtn) {
        shadeBtn.classList.add('active');
    }
    const shadeNote = document.querySelector('.shade-note');
    if (shadeNote) {
        shadeNote.style.display = 'none';
    }
}

function changeQuantity(change) {
    const quantityEl = document.getElementById('quantity');
    if (!quantityEl) return;
    let quantity = parseInt(quantityEl.textContent);
    quantity = Math.max(1, quantity + change);
    quantityEl.textContent = quantity;
}

function addToCartWithShade(productId) {
    const product = products.find(p => p.id === productId);

    if (!product || !product.inStock) {
        alert('عذراً، هذا المنتج غير متوفر حالياً.');
        return;
    }
    
    const availableShades = product.shades.filter(s => s.available);
    const requiresSelection = availableShades.length > 1;

    let finalShade = null;

    if (requiresSelection) {
        finalShade = selectedShade;
        if (!finalShade) {
            alert('يرجى اختيار اللون أولاً');
            const shadeNote = document.querySelector('.shade-note');
            if (shadeNote) {
                shadeNote.style.display = 'block';
                shadeNote.style.color = '#ff1493';
                shadeNote.style.fontWeight = 'bold';
            }
            return;
        }
    } else if (availableShades.length === 1) {
        finalShade = availableShades[0].name;
    } else if (availableShades.length === 0 && product.shades.length > 0) {
        alert('عذراً، جميع ألوان هذا المنتج غير متوفرة حالياً.');
        return;
    }
    
    
    const quantity = parseInt(document.getElementById('quantity').textContent);

    if (product) {
        let cart = getCart();

        const existingItem = cart.find(item => item.id === productId && item.selectedShade === finalShade);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                ...product,
                selectedShade: finalShade,
                quantity: quantity
            });
        }

        saveCart(cart);
        updateCart();
        showAddToCartSuccess();
    }
}

function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    const product = products.find(p => p.id === productId);
    const detailContainer = document.getElementById('productDetailContent');

    if (!product) {
        if (detailContainer) {
            detailContainer.innerHTML = '<div style="text-align: center; padding: 50px;"><h2>لم يتم العثور على المنتج 😞</h2><p>الرجاء التأكد من صحة رابط المنتج. قد يكون الـ ID غير صحيح.</p><p><a href="products.html" style="color: #ff1493; font-weight: bold;">العودة لصفحة المنتجات</a></p></div>';
        }
        document.title = "خطأ - منتج غير موجود";
        return;
    }
    
    if (!product.inStock) {
         if (detailContainer) {
             detailContainer.innerHTML = `
                <div style="text-align: center; padding: 50px;">
                    <h2 style="color: #ff1493; margin-bottom: 20px;">عذراً، هذا المنتج غير متوفر حالياً 😔</h2>
                    <p style="font-size: 1.2rem;">${product.name} نفذت كميته بالكامل.</p>
                    <p><a href="products.html" style="color: #ff1493; font-weight: bold;">العودة لصفحة المنتجات</a></p>
                </div>
            `;
         }
         document.title = `${product.name} - غير متوفر`;
         return;
    }
    
    document.title = `${product.name} - تفاصيل المنتج`;
    
    const availableShades = product.shades.filter(s => s.available);
    const requiresSelection = availableShades.length > 1;
    const singleAvailableShade = availableShades.length === 1 ? availableShades[0] : null;

    if (detailContainer) {
        selectedShade = null; 

        detailContainer.innerHTML = `
            <div class="product-detail-grid">
                <div class="product-image-large">
                    <img id="product-image" src="${product.icon}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="image-placeholder" style="display: none;">
                        <i class="fas fa-image"></i>
                        <p>صورة المنتج</p>
                    </div>
                </div>
                
                <div class="product-info-large">
                    <h1 id="product-name">${product.name}</h1>
                    <div class="product-category-large" id="product-category">${product.category}</div>
                    <p class="product-description-large" id="product-description">${product.description}</p>
                    
                    <div class="product-price-large" id="product-price">${product.price} شيقل</div>
                    
                    ${requiresSelection ? `
                    <div class="shade-selection" id="shade-selection-container">
                        <h3>اختاري اللون:</h3>
                        <div class="shades-grid">
                            ${product.shades.map((shade, index) => `
                                <button class="shade-btn ${shade.available ? '' : 'out-of-stock-shade'}" 
                                        ${shade.available ? `onclick="selectShade('${shade.name}', ${index}, true)"` : 'disabled'} 
                                        id="shade-${index}">
                                    ${shade.name}
                                    ${shade.available ? '' : ' (نفذ)'}
                                </button>
                            `).join('')}
                        </div>
                        <p class="shade-note">* يرجى اختيار اللون قبل الإضافة للسلة</p>
                    </div>
                    ` : singleAvailableShade ? `
                    <div class="shade-selection">
                        <h3>اللون المتوفر:</h3>
                        <p class="available-shade">${singleAvailableShade.name}</p>
                    </div>
                    ` : product.shades.length > 0 && availableShades.length === 0 ? `
                    <div class="shade-selection">
                        <h3 style="color: #ff1493;">نفذت الكمية من جميع الألوان!</h3>
                        <p class="available-shade" style="background-color: #ffeef8;">سيتم توفيره قريباً.</p>
                    </div>
                    ` : ''}

                    
                    <div class="quantity-selector">
                        <h3>الكمية:</h3>
                        <div class="quantity-controls">
                            <button onclick="changeQuantity(-1)" ${availableShades.length === 0 && product.shades.length > 0 ? 'disabled' : ''}>-</button>
                            <span id="quantity">1</span>
                            <button onclick="changeQuantity(1)" ${availableShades.length === 0 && product.shades.length > 0 ? 'disabled' : ''}>+</button>
                        </div>
                    </div>
                    
                    <button class="add-to-cart-large" onclick="addToCartWithShade(${product.id})" 
                            ${availableShades.length === 0 && product.shades.length > 0 ? 'disabled' : ''}>
                        <i class="fas fa-shopping-bag"></i> ${availableShades.length === 0 && product.shades.length > 0 ? 'نفذت الكمية' : 'أضيفي للسلة'}
                    </button>
                </div>
            </div>
        `;
    }
}


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
    
    .product-card.out-of-stock-card {
        pointer-events: none;
        position: relative;
    }
    
    .out-of-stock-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.7); 
        border: 4px solid #ff1493; 
        color: #ff1493; 
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 5;
        border-radius: 15px;
    }
    
    .unavailable-shade {
        text-decoration: line-through; 
        opacity: 0.7; 
        color: #ff69b4; 
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
    
    .available-shade {
        background: #f0f0f0;
        padding: 8px 15px;
        border-radius: 15px;
        display: inline-block;
        font-weight: 500;
        color: #333;
    }
`;
document.head.appendChild(style);

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