class Product {
    constructor(name, quantity, price, distributor) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.distributor = distributor;
    }
}

function createProductDiv(product, index) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product-div';
    productDiv.innerHTML = `
        <h2>Producto: ${product.name}</h2>
        <p>Cantidad: ${product.quantity}</p>
        <p>Precio: ${product.price}</p>
        <p>Distribuidor: ${product.distributor}</p>
        <button onclick="deleteProduct(${index})" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs">Eliminar</button>
        <button onclick="editProduct(${index})" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded text-xs">Editar</button>
    `;
    return productDiv;
}

window.onload = function() {
    const productCard = document.getElementById('product-card');
    let products = JSON.parse(localStorage.getItem('products')) || [];

    productCard.innerHTML = products.length ? '' : '<p>No hay productos en el inventario.</p>';

    products.forEach((product, index) => {
        productCard.appendChild(createProductDiv(product, index));
    });
};

function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem('products'));
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    location.reload();
}

function editProduct(index) {
    let products = JSON.parse(localStorage.getItem('products'));
    const product = products[index];
    document.getElementById('edit-name').value = product.name;
    document.getElementById('edit-quantity').value = product.quantity;
    document.getElementById('edit-price').value = product.price;
    document.getElementById('edit-distributor').value = product.distributor;
    document.getElementById('edit-form').style.display = 'block';
    editIndex = index;
}

function saveEdit() {
    let products = JSON.parse(localStorage.getItem('products'));
    const name = document.getElementById('edit-name').value;
    const quantity = document.getElementById('edit-quantity').value;
    const price = document.getElementById('edit-price').value;
    const distributor = document.getElementById('edit-distributor').value;
    products[editIndex] = new Product(name, quantity, price, distributor);
    localStorage.setItem('products', JSON.stringify(products));
    document.getElementById('edit-form').style.display = 'none';
    location.reload();
}

function cancelEdit() {
    document.getElementById('edit-form').style.display = 'none';
}

function filterProducts() {
    const search = document.getElementById('search').value.toLowerCase();
    let products = JSON.parse(localStorage.getItem('products'));

    if (!products) {
        return;
    }

    let filteredProducts = products.filter(product => product.name.toLowerCase().includes(search));
    renderProducts(filteredProducts);
}

function renderProducts(products) {
    const productCard = document.getElementById('product-card');

    if (!products || products.length === 0) {
        productCard.innerHTML = '<p>No hay productos en el inventario.</p>';
        return;
    }

    productCard.innerHTML = ''; 
    products.forEach((product, index) => {
        productCard.appendChild(createProductDiv(product, index));
    });
    
window.onload = function() {
    let products = JSON.parse(localStorage.getItem('products'));
    renderProducts(products);
};

}
