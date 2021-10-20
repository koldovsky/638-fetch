(function() {
    const product = JSON.parse(localStorage.product);
    const productsContainer = document.querySelector('.product');
    productsContainer.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <div class="buttons">
                        <a href="product-info.html" class="button card-button product-info-button"
                          data-id="${product.id}">Info</a>
                        <button class="button card-button">$${product.price} - Buy</button>
        </div>`;
})();