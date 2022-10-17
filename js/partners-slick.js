(function(){
    
    
    const logoContainer = document.querySelector('.logo-container');
    
    function carsl(i){
        $(document).ready(function () {
            $('.logo-container').slick({
                infinite: true,
                slidesToShow: i,
                slidesToScroll: 1
            });
        });
    } 
    
    let i = 2;
    function countWidth(){
        if(window.innerWidth > 768){
            i=3;
            if(window.innerWidth > 991){
                i=4;
            }
        }
        carsl(i);
    }

    
    
    countWidth();
    carsl(i);
    window.addEventListener('resize', countWidth);

})()


