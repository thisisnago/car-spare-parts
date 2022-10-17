(function () {

    const carPartsElements = [
        {
            id: "0",
            title: "Custom Wheels",
            img: "../Car Spare Parts/img/car-parts/custom-wheels.png",
            description: "Select the best car wheels of any styles and colors on our website.",
        },

        {
            id: "1",
            title: "Motor Parts",
            img: "../Car Spare Parts/img/car-parts/motor-parts.png",
            description: "Everything you may need to repair the engine of your vehicle.",
        },

        {
            id: "2",
            title: "Headlights",
            img: "../Car Spare Parts/img/car-parts/headlights.png",
            description: "Find headlights for any car model at our website at the lowest prices.",
        },

        {
            id: "3",
            title: "Brakes&Rotor",
            img: "../Car Spare Parts/img/car-parts/brakes-and-rotor.png",
            description: "Remember to check and purchase new high-quality brake discs when needed.",
        }
    ]

    let currentSlideIdx = 0;

    // const carPartsCarousel = document.querySelector(".car-parts__carousel");
    // function renderCarousel() {
    //     carPartsCarousel.innerHTML = `
    
    // <div class="car-parts__carousel-element__container">
    //     <div class="car-parts__carousel-element">
    //         <div class="car-parts__carousel-element__img__container">
    //             <div class="car-parts__carousel-element__img">
    //                 <img src="${carPartsElements[currentSlideIdx].img}" alt="${carPartsElements[currentSlideIdx].title}">
    //             </div>
    //         </div>
    //         <p class="car-parts__carousel-element__title">
    //             ${carPartsElements[currentSlideIdx].title}
    //         </p>
    //         </p>
    //         <p class="section-content car-parts__carousel-element__description">
    //             ${carPartsElements[currentSlideIdx].description}
    //         </p>
    //         <div class="car-parts__carousel-element__link">
    //             <a href="#">
    //                 LEARN MORE →
    //             </a>
    //         </div>
    //     </div>
    // </div>`
    // }

    // renderCarousel();

    function slideCode(currentSlideIdx) {
        return `<div class="car-parts__carousel-element__container">
            <div class="car-parts__carousel-element">
                <div class="car-parts__carousel-element__img__container">
                    <div class="car-parts__carousel-element__img">
                        <img src="${carPartsElements[currentSlideIdx].img}" alt="${carPartsElements[currentSlideIdx].title}">
                    </div>
                </div>
                <p class="car-parts__carousel-element__title">
                    ${carPartsElements[currentSlideIdx].title}
                </p>
                </p>
                <p class="section-content car-parts__carousel-element__description">
                    ${carPartsElements[currentSlideIdx].description}
                </p>
                <div class="car-parts__carousel-element__link">
                    <a href="#">
                        LEARN MORE →
                    </a>
                </div>
            </div>
        </div>`;
    };  


    function renderCarousel() {
        const carouselSlide = document.querySelector(".car-parts__carousel");
        carouselSlide.innerHTML = slideCode(currentSlideIdx);

        if(window.innerWidth > 768){
            const secondSlideIdx = currentSlideIdx + 1 >= carPartsElements.length ? 0 : currentSlideIdx + 1;
            carouselSlide.innerHTML += slideCode(secondSlideIdx);
            if(window.innerWidth > 991){
                const thirdSlideIdx = secondSlideIdx + 1 >= carPartsElements.length ? 0 : secondSlideIdx + 1;
                carouselSlide.innerHTML += slideCode(thirdSlideIdx);
            }
        }
    }

    function next() {
        currentSlideIdx = currentSlideIdx + 1 >= carPartsElements.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }

    function prev() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? carPartsElements.length - 1 : currentSlideIdx - 1;
        renderCarousel();
    }

    const prevButton = document.querySelector(".car-parts__carousel__btn-prev");
    prevButton.addEventListener('click', prev);

    const nextButton = document.querySelector(".car-parts__carousel__btn-next");
    nextButton.addEventListener('click', next);

    setInterval(next, 5000);

    renderCarousel();

    window.addEventListener('resize', renderCarousel);

})()