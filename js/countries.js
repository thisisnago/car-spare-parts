(function() {

    const americanBrandsInfo = [
        {
            id: "1",
            brand: "Jeep",
            logo: "../Car Spare Parts/img/what-we-offer/americans-cars/car-logos/jeep-logo.svg",
            description: "Find the best spare parts for Jeep Cherokee, Wrangler, Renegade, and other models.",
        },
        
        {
            id: "2",
            brand: "Chevrolet",
            logo: "../Car Spare Parts/img/what-we-offer/americans-cars/car-logos/chevrolet-logo.svg",
            description: "From classic Chevrolet Aveo to fast and furious Corvette, we've got you covered.",
        },
        
        {
            id: "3",
            brand: "Chrysler",
            logo: "../Car Spare Parts/img/what-we-offer/americans-cars/car-logos/chrysler-logo.svg",
            description: "We offer spare parts for all models of Chrysler, from 200 to Concorde and Aspen.",
        }
    ];

    const japaneseBrandsInfo = [
        {
            id: "4",
            brand: "Nissan",
            logo: "../Car Spare Parts/img/what-we-offer/japanese-cars/car-logos/nissan-logo.svg",
            description: "We offer a wide range of spare parts for Nissan Micra, Murano, Leaf, etc.",  
        },

        {
            id: "5",
            brand: "Toyota",
            logo: "../Car Spare Parts/img/what-we-offer/japanese-cars/car-logos/toyota-logo.svg",
            description: "We offer a wide range of spare parts for Nissan Micra, Murano, Leaf, etc.",  
        },

        {
            id: "6",
            brand: "Honda",
            logo: "../Car Spare Parts/img/what-we-offer/japanese-cars/car-logos/honda-logo.svg",
            description: "From Honda CR-V to Honda Beat, we offer the best auto parts for your iron horse.",  
        },
    ]

    const europeanBrandsInfo = [
        {
            id: "7",
            brand: "Volvo",
            logo: "../Car Spare Parts/img/what-we-offer/european-cars/car-logos/volvo-logo.svg",
            description: "Purchase spare parts for one of the most reliable car brands in the world.",  
        },

        {
            id: "8",
            brand: "Volkswagen",
            logo: "../Car Spare Parts/img/what-we-offer/european-cars/car-logos/volkswagen-logo.svg",
            description: "Order the best spare parts for your VW Polo, Golf, Beetle, and other models.",  
        },

        {
            id: "9",
            brand: "Mercedes",
            logo: "../Car Spare Parts/img/what-we-offer/european-cars/car-logos/mercedes-benz-logo.svg",
            description: "We have spare parts both for budget and premium models of this famous brand.",  
        },

        {
            id: "10",
            brand: "Audi",
            logo: "../Car Spare Parts/img/what-we-offer/european-cars/car-logos/audi-logo.svg",
            description: "We offer the best spare parts for 40+ Audi models at affordable prices.",  
        }
    ]

    const allBrands = [americanBrandsInfo, japaneseBrandsInfo, europeanBrandsInfo];
    let currentCountryIdx = 0;


    const usaFlag = document.querySelector(".flag-usa");
    const japanFlag = document.querySelector(".flag-japan");
    const europeFlag = document.querySelector(".flag-europe");

    usaFlag.addEventListener("click", function(e) {
        usaFlag.classList.add("flag__active");
        japanFlag.classList.remove("flag__active");
        europeFlag.classList.remove("flag__active");
        currentCountryIdx = 0;
        renderCarousel();
        console.log(currentCountryIdx);
    });
    
    japanFlag.addEventListener("click", function(e) {
        japanFlag.classList.add("flag__active");
        usaFlag.classList.remove("flag__active");
        europeFlag.classList.remove("flag__active");
        currentCountryIdx = 1;
        renderCarousel();
        console.log(currentCountryIdx);
    })
    
    europeFlag.addEventListener("click", function(e) {
        europeFlag.classList.add("flag__active");
        japanFlag.classList.remove("flag__active");
        usaFlag.classList.remove("flag__active");
        currentCountryIdx = 2;
        renderCarousel();
        console.log(currentCountryIdx);
    })

    function slideCode(currentSlideIdx){
        return `<div class="what-we-offer__brands-list__element" id="#">
        <div class="what-we-offer__brands-list__element__img">
            <img src="${allBrands[currentCountryIdx][currentSlideIdx].logo}"
                alt="${allBrands[currentCountryIdx][currentSlideIdx].brand}">
        </div>

        <p class="what-we-offer__brands-list__element__title">
            ${allBrands[currentCountryIdx][currentSlideIdx].brand}
        </p>

        <div class="what-we-offer__brands-list__element__line"></div>

        <p class="what-we-offer__brands-list__element__description">
            ${allBrands[currentCountryIdx][currentSlideIdx].description}    
        </p>

        <div class="what-we-offer__brands-list__element__link">
            <a href="#">FIND PARTS →</a>
        </div>
    </div>`;
    }

    
    function renderCarousel(){
        const brandsList = document.querySelector(".what-we-offer__brands-list");
        brandsList.innerHTML = '';
        for(let currentSlideIdx = 0; currentSlideIdx<allBrands[currentCountryIdx].length; ++currentSlideIdx){
            brandsList.innerHTML += slideCode(currentSlideIdx);
        }
    }

    // function next(){
    //     currentCountryIdx = currentCountryIdx + 1 > 2 ? 0 : currentCountryIdx + 1;
    //     renderCarousel(); 
    // }

    renderCarousel();
    // setInterval(next, 1500);

    

})()