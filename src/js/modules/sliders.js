const sliders = (slides, dir, prev, next) => {
     let slideIndex = 1,
         pause = false;

     const items = document.querySelectorAll(slides);

     function showSlides(n) {
          if (n > items.length) {
               slideIndex = 1;
          }

          if (n < 1) {
               slideIndex = items.length;
          }

          items.forEach(item => {
               item.classList.add('animated');
               item.style.display = "none";
          });

          items[slideIndex - 1].style.display = "block";
     }

     showSlides(slideIndex);

     function changeSlides(n) {
          showSlides(slideIndex += n);
     }

     try {
          const prevBtn = document.querySelector(prev),
                nextBtn = document.querySelector(next);

          prevBtn.addEventListener('click', () => {
               changeSlides(-1);
               items[slideIndex - 1].classList.remove('slideInLeft');
               items[slideIndex - 1].classList.add('slideInRight');
          });

          nextBtn.addEventListener('click', () => {
               changeSlides(1);
               items[slideIndex - 1].classList.remove('slideInRight');
               items[slideIndex - 1].classList.add('slideInLeft');
          });
     } catch(e) {}

     function activateAnimation() {
          if (dir === 'vertical') {
               pause = setInterval(function() {
                    changeSlides(1);
                    items[slideIndex - 1].classList.add('slideInDown');
               }, 3000);
          } else {
               pause = setInterval(function() {
                    changeSlides(1);
                    items[slideIndex - 1].classList.remove('slideInRight');
                    items[slideIndex - 1].classList.add('slideInLeft');
               }, 3000);
          }
     }
     activateAnimation();

     // Остановка прокрутки слайдов при наведении курсора мыши на слайды
     items[0].parentNode.addEventListener('mouseenter', () => {
          clearInterval(pause);
     });
     // Возобновление прокрутки слайдов при отведении курсора мыши от слайдов
     items[0].parentNode.addEventListener('mouseleave', () => {
          activateAnimation();
     });

     
};

export default sliders;