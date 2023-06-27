import { dataProducts } from "./data.js";


// tabs
const tabsWrapper = document.querySelector('.external-catalog__tabs');
const tabs = document.querySelectorAll('.tabs__item');

if (tabsWrapper) {
  tabsWrapper.addEventListener('click', (e) => {

    if (e.target.classList.contains('tabs__item')) {
      const tabsPath = e.target.dataset.tabsPath;

      tabs.forEach(el => el.classList.remove('tabs-active'));
      document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs-active');
    }

  })
}

// tabs

// burger



document.addEventListener('DOMContentLoaded', () => {
  function burger() {
    const
      headerBurger = document.querySelector('.header__burger'),
      burgerMenu = document.querySelector('.header__site-nav'),
      headerLogo = document.querySelector('.header__logo'),
      navItems = document.querySelectorAll('.site-nav__item a'),
      searchIcon = document.querySelector('.search'),
      cartIcon = document.querySelector('.cart');

    headerBurger.addEventListener('click', () => {
      headerBurger.classList.toggle('open');
      burgerMenu.classList.toggle('open');
      headerLogo.classList.toggle('open');
      searchIcon.classList.toggle('open');
      cartIcon.classList.toggle('open');
      navItems.forEach(item => {
        item.classList.toggle('open')
      })
    });

  }
  // burger

  // sliderCarousel

  const sliderCarousel = () => {
    const carouselWrapper = document.querySelector('.carousel-wrapper');

    if (!carouselWrapper) {
      return;
    } else {
      dataProducts.forEach(el => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('swiper-slide');
        carouselItem.innerHTML =
          `<div class="carousel__item-line"></div>
          <div class="carousel__item">
          <h3 class="carousel__item-name">${el.name}</h3>
          <div class="carousel__item-content">
            <p class="carousel__item-new-price">${el.newPrice}</p>
            <p class="carousel__item-old-price">${el.oldPrice}</p>
          </div>
          <div class="carousel__item-image">
            <img src="${el.imgSrc}" alt=${el.alt}>
          </div>
        </div>
        <button class="carousel__item-btn">Купить</button>
      `
        const itemLine = document.querySelectorAll('.carousel__item-line');

        carouselItem.addEventListener('mouseenter', (e) => {
          e.currentTarget.children[0].classList.toggle('open');
          e.currentTarget.children[2].classList.toggle('open');
        })
        carouselItem.addEventListener('mouseleave', (e) => {
          e.currentTarget.children[0].classList.remove('open');
          e.currentTarget.children[2].classList.remove('open');
        })
        carouselWrapper.appendChild(carouselItem);

      });

    }

  }

  sliderCarousel();

  new Swiper('.swiper', {

    scrollbar: {
      el: ".carousel-scrollbar",
    },
    pagination: {
      el: ".carousel-pagination",
      clickable: true,
      type: "fraction",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      426: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1100: {
        spaceBetween: 30,
        slidesPerView: 4,
      },
      1440: {
        spaceBetween: 45,
        slidesPerView: 5,
      }
    }

  });

  // sliderCarousel




  // mainSlider
  function mainSlider() {
    let mySwiper = '';
    let breakpoint = window.matchMedia('(max-width: 767px)');
    let breakpointChecker = function () {
      if (breakpoint.matches) {
        if (mySwiper) {
          mySwiper.destroy(true, true);
        }

        mySwiper = new Swiper('.main-screen__slider', {
          spaceBetween: 10,
          pagination: {
            el: '.main-screen__slider-pagination',
            type: 'fraction',
          },
          scrollbar: {
            el: '.main-screen__slider-scrollbar',
          },
        });
        return;
      } else {
        if (mySwiper) {
          mySwiper.destroy(true, true);
        }

        mySwiper = new Swiper('.main-screen__slider', {
          pagination: {
            el: '.main-screen__slider-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
            },
          },
        });
      }
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  };

  mainSlider();
  // mainSlider
  burger();

  // sliderReviews
  function sliderReviews() {

    new Swiper('.slider-reviews', {

      navigation: {
        nextEl: ".swiper-button-next, .slider-button-next",
        prevEl: ".swiper-button-prev, .slider-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true,
      },
    });
  }
  sliderReviews()

  // sliderReviews
})
