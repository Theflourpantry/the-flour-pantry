console.log("The Flour Pantry Website");

let cart = [];

function addToCart(productName) {
    cart.push(productName);

    alert(productName + " added to cart!");

    updateCart();
}

function updateCart() {
    document.getElementById("cart-count").textContent = cart.length;

    const cartItems = document.getElementById("cart-items");

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartItems.innerHTML = "";

    cart.forEach(function(product) {
        const item = document.createElement("p");
        item.textContent = "• " + product;
        cartItems.appendChild(item);
    });
}

document.getElementById("cart-button").addEventListener("click", function() {
    document.getElementById("cart").classList.add("active");
});

document.getElementById("close-cart").addEventListener("click", function() {
    document.getElementById("cart").classList.remove("active");
});
