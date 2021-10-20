(function() {

    const products = [
        {
            id: "1",
            title: 'Baby Yoda',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. Fugiat libero molestiae suscipit eaque quae nihil sequi esse numquam dolor nisi!',
            price: 9.99,
            image: 'img/baby-yoda.svg'
        },
        {
            id: "2",
            title: 'Banana',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. Fugiat libero molestiae suscipit eaque quae nihil sequi esse numquam dolor nisi!',
            price: 8.99,
            image: 'img/banana.svg'
        },
        {
            id: "3",
            title: 'Girl',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. Fugiat libero molestiae suscipit eaque quae nihil sequi esse numquam dolor nisi!',
            price: 7.99,
            image: 'img/girl.svg'
        },
        {
            id: "4",
            title: 'Viking',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita obcaecati adipisci explicabo impedit facere est qui voluptate. Fugiat libero molestiae suscipit eaque quae nihil sequi esse numquam dolor nisi!',
            price: 6.99,
            image: 'img/viking.svg'
        }
    ];

    function renderProducts(products) {
        const productsContainer = document.querySelector('.products');
        for (const product of products) {
            productsContainer.innerHTML += `
                <article>
                    <img src="${product.image}" alt="${product.title}" />
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <div class="buttons">
                        <a href="product-info.html" class="button card-button product-info-button"
                          data-id="${product.id}">Info</a>
                        <button class="button card-button">$${product.price} - Buy</button>
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

    renderProducts(products);

})();