(function () {
    
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown__content");
    dropdown.addEventListener('click', function (e) {
        if (window.innerWidth < 990) {
            dropdown.classList.toggle('dropdown__active'); 
        }
    })

})()