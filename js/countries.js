(function () {

    const usaInfo = {
        pageLink: "american__spare-parts.html",
        brandsInfo: [
                        {
                            id: "1",
                            brand: "Jeep",
                            logo: "img/what-we-offer/american-cars/car-logos/jeep-logo.svg",
                            description: "Find the best spare parts for Jeep Cherokee, Wrangler, Renegade, and other models.",
                        },

                        {
                            id: "2",
                            brand: "Chevrolet",
                            logo: "img/what-we-offer/american-cars/car-logos/chevrolet-logo.svg",
                            description: "From classic Chevrolet Aveo to fast and furious Corvette, we've got you covered.",
                        },

                        {
                            id: "3",
                            brand: "Chrysler",
                            logo: "img/what-we-offer/american-cars/car-logos/chrysler-logo.svg",
                            description: "We offer spare parts for all models of Chrysler, from 200 to Concorde and Aspen.",
                        }
                    ],
    }

    const japanInfo = {
        pageLink: "japanese__spare-parts.html",
        brandsInfo: [
                        {
                            id: "4",
                            brand: "Nissan",
                            logo: "img/what-we-offer/japanese-cars/car-logos/nissan-logo.svg",
                            description: "We offer a wide range of spare parts for Nissan Micra, Murano, Leaf, etc.",
                        },
                
                        {
                            id: "5",
                            brand: "Toyota",
                            logo: "img/what-we-offer/japanese-cars/car-logos/toyota-logo.svg",
                            description: "We offer a wide range of spare parts for Nissan Micra, Murano, Leaf, etc.",
                        },
                
                        {
                            id: "6",
                            brand: "Honda",
                            logo: "img/what-we-offer/japanese-cars/car-logos/honda-logo.svg",
                            description: "From Honda CR-V to Honda Beat, we offer the best auto parts for your iron horse.",
                        }
                    ],
    }

    const europeInfo = {
        pageLink: "european__spare-parts.html",
        brandsInfo: [
                        {
                            id: "7",
                            brand: "Volvo",
                            logo: "img/what-we-offer/european-cars/car-logos/volvo-logo.svg",
                            description: "Purchase spare parts for one of the most reliable car brands in the world.",
                        },
                
                        {
                            id: "8",
                            brand: "Volkswagen",
                            logo: "img/what-we-offer/european-cars/car-logos/volkswagen-logo.svg",
                            description: "Order the best spare parts for your VW Polo, Golf, Beetle, and other models.",
                        },
                
                        {
                            id: "9",
                            brand: "Mercedes",
                            logo: "img/what-we-offer/european-cars/car-logos/mercedes-benz-logo.svg",
                            description: "We have spare parts both for budget and premium models of this famous brand.",
                        },
                
                        {
                            id: "10",
                            brand: "Audi",
                            logo: "img/what-we-offer/european-cars/car-logos/audi-logo.svg",
                            description: "We offer the best spare parts for 40+ Audi models at affordable prices.",
                        }
                    ],
    }

    const allCountries = [usaInfo, japanInfo, europeInfo];
    let currentCountryIdx = 0;


    const usaFlag = document.querySelector(".flag-usa");
    const japanFlag = document.querySelector(".flag-japan");
    const europeFlag = document.querySelector(".flag-europe");

    usaFlag.addEventListener("click", function (e) {
        usaFlag.classList.add("flag__active");
        japanFlag.classList.remove("flag__active");
        europeFlag.classList.remove("flag__active");
        currentCountryIdx = 0;
        renderCarousel();
        console.log(currentCountryIdx);
    });    

    japanFlag.addEventListener("click", function (e) {
        japanFlag.classList.add("flag__active");
        usaFlag.classList.remove("flag__active");
        europeFlag.classList.remove("flag__active");
        currentCountryIdx = 1;
        renderCarousel();
        console.log(currentCountryIdx);
    })
    
    europeFlag.addEventListener("click", function (e) {
        europeFlag.classList.add("flag__active");
        japanFlag.classList.remove("flag__active");
        usaFlag.classList.remove("flag__active");
        currentCountryIdx = 2;
        renderCarousel();
        console.log(currentCountryIdx);
    })
    
    function slideCode(currentSlideIdx) {
        return `<div class="what-we-offer__brands-list__element" id="#">
        <div class="what-we-offer__brands-list__element__img">
            <img src="${allCountries[currentCountryIdx]["brandsInfo"][currentSlideIdx].logo}"
                alt="${allCountries[currentCountryIdx]["brandsInfo"][currentSlideIdx].brand}">
        </div>

        <p class="what-we-offer__brands-list__element__title">
            ${allCountries[currentCountryIdx]["brandsInfo"][currentSlideIdx].brand}
        </p>

        <div class="what-we-offer__brands-list__element__line"></div>

        <p class="what-we-offer__brands-list__element__description">
            ${allCountries[currentCountryIdx]["brandsInfo"][currentSlideIdx].description}    
        </p>

        <div class="what-we-offer__brands-list__element__link">
            <a href="${allCountries[currentCountryIdx]["pageLink"]}">FIND PARTS →</a>
        </div>
        </div>`;
    }


    function renderCarousel() {
        const brandsList = document.querySelector(".what-we-offer__brands-list");
        brandsList.innerHTML = '';
        for (let currentSlideIdx = 0; currentSlideIdx < allCountries[currentCountryIdx]["brandsInfo"].length; ++currentSlideIdx) {
            brandsList.innerHTML += slideCode(currentSlideIdx);
        }
    }

    renderCarousel();

})()