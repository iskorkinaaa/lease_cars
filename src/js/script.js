//табы

const tabs = document.querySelectorAll('.choose__btn');
const content = document.querySelectorAll('.choose__items');

tabs.forEach(function(element) {
  element.addEventListener('click', open);
})

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabs.forEach(function(item){
    item.classList.remove("choose__btn--active");
  })
  
  tabTarget.classList.add("choose__btn--active");

  content.forEach(function(item){
    item.classList.remove('choose__items--active')
  });

  document.querySelector(`#${button}`).classList.add('choose__items--active');
}

//меню

const menuBtn = document.querySelector('.menu_btn');
const menu = document.querySelector('.hearder__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hearder__list--active');
});



//слайдер
const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  effect: "fade",
});