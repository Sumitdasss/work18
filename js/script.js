jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });

 $(document).ready(function(){
  $('.sliders').slick({
    
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    arrow:false
    //...
  });
});