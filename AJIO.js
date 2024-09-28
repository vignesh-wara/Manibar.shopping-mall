// Initialize cart as an empty array
let cart = [];

// Function to update the cart count display
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.innerText = cart.length;
}

// Function to add item to cart
function addToCart(name, price) {
    const product = { name, price: parseFloat(price) };
    cart.push(product);
    alert(`${name} has been added to the cart!`);
    updateCartCount(); // Update cart count display
}

// Attach event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = button.getAttribute('data-price');
        addToCart(productName, productPrice);
    });
});

// Optional: View cart in console
function viewCart() {
    console.log('Cart:', cart);
}
   
// ==========================



let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Show the current slide
function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        dots[index].classList.remove('active-dot');
        if (index === n) {
            slide.classList.add('active');
            dots[index].classList.add('active-dot');
        }
    });
}

// Next/previous controls
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto slide change every 5 seconds
setInterval(nextSlide,5000);

// Attach events to buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);