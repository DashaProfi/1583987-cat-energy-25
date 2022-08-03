const mainHeader = document.querySelector('.main-header')
const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const prevButton = document.querySelector('.example__range-label-name-prev');
const nextButton = document.querySelector('.example__range-label-name-next');
const imgSkinnyCat = document.querySelector('.example__range-img-skinny');
const imgFatCat = document.querySelector('.example__range-img-fat');
const exampleRangeBar = document.querySelector('#exampleRangeBar');
const exampleRangeBarInner = document.querySelector('.example__range-bar-inner');




mainHeader.classList.remove('main-header--nojs');

if (window.innerWidth < 768) {
  mainNav.classList.remove('main-nav--opened');
  mainNav.classList.add('main-nav--closed');
}

navToggle.addEventListener('click', (e) => {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
  }
})

if (window.innerWidth < 768) {
  nextButton.addEventListener('click', () => {
    imgSkinnyCat.classList.add('example__range-img-skinny--visible');
    imgFatCat.classList.add('example__range-img-fat--hidden');
    exampleRangeBarInner.style.marginLeft = 'auto';

  })
  prevButton.addEventListener('click', () => {
    imgSkinnyCat.classList.remove('example__range-img-skinny--visible');
    imgFatCat.classList.remove('example__range-img-fat--hidden');
    exampleRangeBarInner.style.marginLeft = '6px';
  })
}

if (window.innerWidth >= 768 && exampleRangeBar) {
  while (exampleRangeBar.firstChild) {
    exampleRangeBar.removeChild(exampleRangeBar.firstChild);
  }

  noUiSlider.create(exampleRangeBar, {
    range: {
      min: 0,
      max: 100,
    },
    start: 50,
    step: 1,
    connect: 'lower',
  });

  exampleRangeBar.noUiSlider.on('update', function (values, handle) {
    const percentOfVisiblePartLeft = 16 + parseInt(values[handle], 10) * 5.92;
    const percentOfVisiblePartRight = 16 + 592 - parseInt(values[handle], 10) * 5.92;
    imgSkinnyCat.style.width = `${percentOfVisiblePartRight}px`;
    imgFatCat.style.width = `${percentOfVisiblePartLeft}px`;

  });

  nextButton.addEventListener('click', () => {
    exampleRangeBar.noUiSlider.set(['100']);
  })
  prevButton.addEventListener('click', () => {
    exampleRangeBar.noUiSlider.set(['0']);
  })
}
