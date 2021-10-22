(async function() {

    // fetch('products.json')
    //     .then( response => response.json() )
    //     .then( products => renderProducts(products));

    const response = await fetch('products.json');
    const products = await response.json();

    function renderProducts(products, rate, currency) {
        const productsContainer = document.querySelector('.products');
        productsContainer.innerHTML = '';
        for (const product of products) {
            productsContainer.innerHTML += `
                <article>
                    <img src="${product.image}" alt="${product.title}" />
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <div class="buttons">
                        <a href="product-info.html" class="button card-button product-info-button"
                          data-id="${product.id}">Info</a>
                        <button class="button card-button">${currency} ${(product.price * rate).toFixed(2)} - Buy</button>
                    </div>
                </article>
            `;
        }
        document.querySelectorAll('.product-info-button')
          .forEach( infoButton => infoButton.addEventListener('click', productInfoClick));
    }

    function productInfoClick( ev ) {
        const productInfoButton = ev.target;
        const productId = productInfoButton.dataset.id;
        const product = products.filter( product => product.id === productId)[0];
        localStorage.product = JSON.stringify(product);
    }

    renderProducts(products, 1, '$');

    async function convertCurrency() {
        const convertTo = document.querySelector('.currency').value;
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const rates = await response.json();
        const rate = rates.rates[convertTo];
        renderProducts(products, rate, convertTo);
    }

    document.querySelector('.convert').addEventListener('click', convertCurrency);

})();