 // slider
 $('.slider__box').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 3,
     arrows: true,
     nextArrow: document.querySelector('.arrow-next'),
     prevArrow: document.querySelector('.arrow-prev'),
     responsive: [{
             breakpoint: 1340,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
             }
         },
         {
             breakpoint: 768,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
             }
         }
     ]
 });

 $('.slider__box-2').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 3,
     arrows: true,
     nextArrow: document.querySelector('.arrow-next-2'),
     prevArrow: document.querySelector('.arrow-prev-2'),
     responsive: [{
             breakpoint: 1340,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
             }
         },
         {
             breakpoint: 768,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
             }
         }
     ]
 });