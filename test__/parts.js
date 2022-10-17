(function(){

    const americanPartsInfo = [
        {
            id: "jeep",
            brand: "Jeep",
            description: `Jeep is a legendary brand that dates back to 1940. The legendary Bantam and Willys
            were designed by Jeep founder Karl Probst. Today, under the Jeep brand, cars of the
            joint concern Fiat and Chrysler are produced. The most popular models are Jeep
            Commander, Jeep Cherokee (KL), Jeep Compass, Jeep Grand Cherokee.`,
            img: "../img_american/jeep.jpg",
            available_parts: ["Transfer case", "Transmission", "Crank-shaft"]
        },

        {
            id: "jeep",
            brand: "Chevy",
            description: `Jeep is a legendary brand that dates back to 1940. The legendary Bantam and Willys
            were designed by Jeep founder Karl Probst. Today, under the Jeep brand, cars of the
            joint concern Fiat and Chrysler are produced. The most popular models are Jeep
            Commander, Jeep Cherokee (KL), Jeep Compass, Jeep Grand Cherokee.`,
            img: "../img_american/jeep.jpg",
            available_parts: ["Transfer case", "Transmission", "Crank-shaft"]
        },

        {
            id: "jeep",
            brand: "Dodge",
            description: `Jeep is a legendary brand that dates back to 1940. The legendary Bantam and Willys
            were designed by Jeep founder Karl Probst. Today, under the Jeep brand, cars of the
            joint concern Fiat and Chrysler are produced. The most popular models are Jeep
            Commander, Jeep Cherokee (KL), Jeep Compass, Jeep Grand Cherokee.`,
            img: "../img_american/jeep.jpg",
            available_parts: ["Transfer case", "Transmission", "Crank-shaft"]
        },
    ]

    const europeanPartsInfo = [
        {
            id: "jeep",
            brand: "Aston Martin",
            description: `Jeep is a legendary brand that dates back to 1940. The legendary Bantam and Willys
            were designed by Jeep founder Karl Probst. Today, under the Jeep brand, cars of the
            joint concern Fiat and Chrysler are produced. The most popular models are Jeep
            Commander, Jeep Cherokee (KL), Jeep Compass, Jeep Grand Cherokee.`,
            img: "../img_american/jeep.jpg",
            available_parts: ["Transfer case", "Transmission", "Crank-shaft"]
        }
    ]

    const allCountriesParts = [americanPartsInfo, europeanPartsInfo];




    function elementCode(brandInfo){
        return `<div class="section__american__element" id="jeep">
        <div class="section__american__element__img__container">
            <div class="section__american__element__img">
                <img src="../img_american/jeep.jpg" alt="Jeep">
            </div>
        </div>

        <div class="section__american__element__text">
            <p class="element__title">
                ${brandInfo.brand}
            </p>

            <div class="element__line"></div>

            <div class="element__description">
                Jeep is a legendary brand that dates back to 1940. The legendary Bantam and Willys
                were designed by Jeep founder Karl Probst. Today, under the Jeep brand, cars of the
                joint concern Fiat and Chrysler are produced. The most popular models are Jeep
                Commander, Jeep Cherokee (KL), Jeep Compass, Jeep Grand Cherokee.
            </div>

            <div class="available-parts">
                <div class="available-parts__title">
                    For Jeep, we have this parts:
                </div>

                <div class="available-parts__list__element__container">

                <div class="available-parts__list__icon">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                        viewBox="0 0 100 100" enable-background="new 0 0 100 100"
                        xml:space="preserve" style="max-width:100%" height="100%">
                        <path
                            d="M50.132,76.132c-14.258,0-25.833-11.551-25.833-25.833c0-14.258,11.575-25.852,25.833-25.852  c14.282,0,25.856,11.594,25.856,25.852C75.988,64.581,64.414,76.132,50.132,76.132L50.132,76.132z M80.855,32.132l6.299-7.238  L75.594,12.981l-7.371,6.312c-2.441-2.096-9.211-3.871-9.211-3.871V5.277h-8.88h-8.879v10.145c0,0-6.772,1.774-9.211,3.871  l-7.372-6.312L13.122,24.894l6.285,7.238c0,0-3.399,3.973-3.961,9.472H5.391v17.151h9.696c0,0,1.534,6.562,3.756,9.248l-6.438,6.542  l11.69,12.975l7.461-6.213c0,0,2.683,2.465,9.594,4.221l0.115,9.8h8.867h8.841l0.139-9.8c6.912-1.756,9.597-4.221,9.597-4.221  l7.462,6.213l11.688-12.974l-6.412-6.542c2.195-2.686,3.729-9.248,3.729-9.248h9.697V41.604H84.805  C84.242,36.105,80.855,32.132,80.855,32.132L80.855,32.132z"
                            style="" fill="currentColor"></path>
                    </svg>
                </div>

                <div class="available-parts__list__text">
                    Transfer case.
                </div>
            </div>

            <div class="available-parts__list__element__container">

                <div class="available-parts__list__icon">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                        viewBox="0 0 100 100" enable-background="new 0 0 100 100"
                        xml:space="preserve" style="max-width:100%" height="100%">
                        <path
                            d="M50.132,76.132c-14.258,0-25.833-11.551-25.833-25.833c0-14.258,11.575-25.852,25.833-25.852  c14.282,0,25.856,11.594,25.856,25.852C75.988,64.581,64.414,76.132,50.132,76.132L50.132,76.132z M80.855,32.132l6.299-7.238  L75.594,12.981l-7.371,6.312c-2.441-2.096-9.211-3.871-9.211-3.871V5.277h-8.88h-8.879v10.145c0,0-6.772,1.774-9.211,3.871  l-7.372-6.312L13.122,24.894l6.285,7.238c0,0-3.399,3.973-3.961,9.472H5.391v17.151h9.696c0,0,1.534,6.562,3.756,9.248l-6.438,6.542  l11.69,12.975l7.461-6.213c0,0,2.683,2.465,9.594,4.221l0.115,9.8h8.867h8.841l0.139-9.8c6.912-1.756,9.597-4.221,9.597-4.221  l7.462,6.213l11.688-12.974l-6.412-6.542c2.195-2.686,3.729-9.248,3.729-9.248h9.697V41.604H84.805  C84.242,36.105,80.855,32.132,80.855,32.132L80.855,32.132z"
                            style="" fill="currentColor"></path>
                    </svg>
                </div>

                <div class="available-parts__list__text">
                    Transmission.
                </div>
            </div>

            <div class="available-parts__list__element__container">

                <div class="available-parts__list__icon">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                        viewBox="0 0 100 100" enable-background="new 0 0 100 100"
                        xml:space="preserve" style="max-width:100%" height="100%">
                        <path
                            d="M50.132,76.132c-14.258,0-25.833-11.551-25.833-25.833c0-14.258,11.575-25.852,25.833-25.852  c14.282,0,25.856,11.594,25.856,25.852C75.988,64.581,64.414,76.132,50.132,76.132L50.132,76.132z M80.855,32.132l6.299-7.238  L75.594,12.981l-7.371,6.312c-2.441-2.096-9.211-3.871-9.211-3.871V5.277h-8.88h-8.879v10.145c0,0-6.772,1.774-9.211,3.871  l-7.372-6.312L13.122,24.894l6.285,7.238c0,0-3.399,3.973-3.961,9.472H5.391v17.151h9.696c0,0,1.534,6.562,3.756,9.248l-6.438,6.542  l11.69,12.975l7.461-6.213c0,0,2.683,2.465,9.594,4.221l0.115,9.8h8.867h8.841l0.139-9.8c6.912-1.756,9.597-4.221,9.597-4.221  l7.462,6.213l11.688-12.974l-6.412-6.542c2.195-2.686,3.729-9.248,3.729-9.248h9.697V41.604H84.805  C84.242,36.105,80.855,32.132,80.855,32.132L80.855,32.132z"
                            style="" fill="currentColor"></path>
                    </svg>
                </div>

                <div class="available-parts__list__text">
                    Crank-shaft.
                </div>
            </div>
            </div>
        </div>
    </div>`};

    const elementContainer = document.querySelector(".section__american__elements__container");
    let countryIdx = 0;
    function renderPage(){
        elementContainer.innerHTML = ``;
        for(let i=0; i<allCountriesParts[countryIdx].length; ++i){
            elementContainer.innerHTML += elementCode(allCountriesParts[countryIdx][i]);
        }
    }

    renderPage();

})()