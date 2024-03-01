
function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')
    // for .. of предназначен для итерации по элементам коллекций, но в отличие от цикла for .. in при итерациях используется значение, а не ключ. 
   
   slides[activeSlide].classList.add('active')
   
   for (const slide of slides) {
       slide.addEventListener('click', () => {
           clearActiveClasses();
           slide.classList.add('active')
       })
   }
   
   function clearActiveClasses() {
       slides.forEach((slide) => {
           slide.classList.remove('active');
       })
   }
}

slidesPlugin(1)