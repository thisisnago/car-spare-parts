(function () {

    // const dropdown = document.querySelector(".dropdown");
    // const dropdownContent = document.querySelector(".dropdown__content");
    // dropdown.addEventListener('click', function (e) {
    //     if (window.innerWidth < 990) {
    //         dropdown.classList.toggle('dropdown__active');
    //         if (dropdown.classList.contains('dropdown__active')) {
    //             dropdownContent.innerHTML = `<a class="dropdown__content__link" href="#">American brands</a>
    //                 <a class="dropdown__content__link" href="#">Japanese brands</a>
    //                 <a class="dropdown__content__link" href="#">European brands</a>`
    //         } else {
    //             dropdownContent.innerHTML = ``;
    //         }
    //     }
    // })

    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown__content");
    dropdown.addEventListener('click', function (e) {
        if (window.innerWidth < 990) {
            dropdown.classList.toggle('dropdown__active'); 
        }
    })

})()