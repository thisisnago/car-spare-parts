(function(){
    
    const burgerButton = document.querySelector(".header__top-burger");
    const navWrapper = document.querySelector(".nav-wrapper");
    burgerButton.addEventListener("click", function(e){
        burgerButton.classList.toggle("burger__active");
        navWrapper.classList.toggle("wrapper__active")
        document.body.classList.toggle("lock");
    });
    
    const navLinks = document.querySelectorAll(".navigation__link");
    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", function(e){
            if(burgerButton.classList.contains("burger__active")) {
                burgerButton.classList.remove("burger__active");
                navWrapper.classList.remove("wrapper__active");
                document.body.classList.remove("lock");
            }
        }
        );
    })

})()