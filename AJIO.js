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

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');

    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    slides.forEach((slide, i) => {
        slide.style.display = "none";
        dots[i].classList.remove('active-dot');
    });

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add('active-dot');
}

// Auto play slides (optional)
setInterval(() => {
    plusSlides(1); // Automatically switch slides every 5 seconds
}, 5000);
