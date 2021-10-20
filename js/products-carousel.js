(function () {
    const slides = [
        '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
        '<div><img src="img/banana.svg" alt="Banana"></div>',
        '<div><img src="img/viking.svg" alt="Viking"></div>',
        '<div><img src="img/girl.svg" alt="Girl"></div>',
    ];

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.products-carousel .slide');
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 600) {
            const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showCurrentSlide();
    }

    setInterval(nextSlide, 3000);

    document.querySelector('.products-carousel .next').addEventListener('click', nextSlide);
    document.querySelector('.products-carousel .prev').addEventListener('click', prevSlide);

    window.addEventListener('resize', showCurrentSlide);

    showCurrentSlide();
})();