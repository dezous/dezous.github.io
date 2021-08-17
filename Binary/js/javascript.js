/* плавынй скрол */ 
const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors ){
	anchor.addEventListener("click",function(event){
        event.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior:"smooth",
			block:"start"
		});
	});
}
/* Добавление/Удаление класса у якорей по клику */ 
const link = document.getElementsByClassName('navigation__item');

    for(let i = 0; i < link.length; i++){
        link[i].addEventListener("click", function(e){
            for(let j = 0; j < link.length; j++){
                link[j].classList.remove('active')
            }
            e.target.classList.add('active')
        })  
    }
/* Слайдер Портфолио по клику */
    const link_portfolio = document.getElementsByClassName('portfolio__item');
    const content_portfolio = document.getElementsByClassName('portfolio__images');
    
    for(let i = 0; i < link_portfolio.length; i++){
        link_portfolio[0].classList.add('active')
        
        link_portfolio[i].addEventListener("click", function(e){
            for(let j = 0; j < link_portfolio.length; j++){
                link_portfolio[j].classList.remove('active')
                content_portfolio[j].classList.add('display-none')
                if( e.target == link_portfolio[0]){
                    content_portfolio[j].classList.remove('display-none')
                }
            }
            e.target.classList.add('active')
            content_portfolio[i].classList.remove('display-none')
        })  
    }

   