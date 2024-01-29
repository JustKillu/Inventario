class Product {
    constructor(name, quantity, price, distributor) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.distributor = distributor;
    }
}
document.querySelector('#product-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#product-name').value.trim();
    const quantity = document.querySelector('#product-quantity').value.trim();
    const price = document.querySelector('#product-price').value.trim();
    const distributor = document.querySelector('#product-distributor').value.trim();

    if (!name || !quantity || !price || !distributor) {
        document.getElementById('Ealert1').style.display = 'flex';
        return;
    }

    const product = new Product(name, quantity, price, distributor);
    let products = JSON.parse(localStorage.getItem('products'));

    if (!products) {
        products = [];
    }

    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    document.querySelector('#product-form').reset();

    document.getElementById('alert').style.display = 'flex';
});
