// Initialize cart as an empty array
let cart = [];

// Function to update the cart count display
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.innerText = cart.length;
    }
}

// Function to add an item to the cart
function addToCart(name, price) {
    const product = { name, price: parseFloat(price) };
    cart.push(product);
    alert(`${name} has been added to the cart!`);
    updateCartCount(); // Update cart count display
}

// Attach event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = button.getAttribute('data-price');
        addToCart(productName, productPrice);
    });
});

// Optional: View cart in the console
function viewCart() {
    console.log('Cart:', cart);
}

// ==========================
// SLIDESHOW FUNCTIONALITY
// ==========================

let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to show slides
function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (slides.length === 0) return; // Prevent errors if no slides exist

    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        if (dots[i]) dots[i].classList.remove('active-dot');
    });

    slides[slideIndex].style.display = 'block';
    if (dots[slideIndex]) dots[slideIndex].classList.add('active-dot');
}

// Auto-play slides every 5 seconds
setInterval(() => plusSlides(1), 5000);

// ==========================
// CATEGORY FILTER FUNCTIONALITY
// ==========================

// Function to filter products by category
function showCategory(category) {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        product.style.display = productCategory === category ? 'block' : 'none';
    });
}

// Attach event listeners to category links
document.querySelectorAll('a[data-category]').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent page reload
        const category = event.target.getAttribute('data-category');
        showCategory(category);
    });
});

// Optionally, show a default category on page load
showCategory('menswear');
