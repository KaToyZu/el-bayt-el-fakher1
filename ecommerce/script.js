let cartItems = [];

// Fonction pour ajouter un article au panier
function addItemToCart(itemName, itemPrice) {
    let item = {
        name: itemName,
        price: itemPrice
    };
    cartItems.push(item);
    renderCart();
}

// Fonction pour afficher le contenu du panier
function renderCart() {
    let cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cartItems.forEach(function(item) {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `<span>${item.name}</span><span>${item.price} $</span>`;
        cartDiv.appendChild(itemDiv);
    });
}

// Fonction pour vider le panier
function clearCart() {
    cartItems = [];
    renderCart();
}