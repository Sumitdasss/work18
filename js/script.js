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


let counterUp=document.querySelectorAll(".counter")

let arr=Array.from(counterUp)

arr.map((item)=>{
let counter=0;

  function count(){
    counter++;
    item.innerHTML=counter
    if(counter==item.dataset.number){
clearInterval(stop)
    }

  }

  let stop=setInterval(function(){
    count();
  },1000/item.dataset.number)

})

