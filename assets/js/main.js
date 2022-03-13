const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navCloseBtn = document.querySelector('#nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navCloseBtn) {
  navCloseBtn.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

const navLinks = document.querySelectorAll('.nav-link') 
function linkAction() {
  const navMenu = document.querySelector('#nav-menu')
  navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

function chuyenDoiTitle(pageTitle, newTitle) {
    document.title == pageTitle 
    ? (document.title = newTitle)
    : (document.title = pageTitle);
}

setInterval("chuyenDoiTitle('HWAN DEV - VIETNAM', 'HWAN PORTFOLIO')", 3000);

const serviceModals = document.querySelectorAll('.service-modal');
const learnmoreBtns = document.querySelectorAll('.service-details');
const modalCloseBtns = document.querySelectorAll('.modal-close-btn');


var modal = function(modalClick) {
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtns) => {
   modalCloseBtns.addEventListener("click", () => {
      serviceModals.forEach((modalView) => {
        modalView.classList.remove("active");
      });
   });
});

const btns = document.querySelectorAll(".btn-ripple");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x_coord = e.clientX;
    let y_coord = e.clientY;

    let btn_top_pos = e.target.offsetTop;
    let btn_left_pos = e.target.offsetLeft;

    let x = x_coord - btn_left_pos;
    let y = y_coord - btn_top_pos;

    const span = document.createElement("span");
    span.classList.add("ripple");
    span.style.top = `${y}px`;
    span.style.left = `${x}px`;

    this.appendChild(span);

    setTimeout(() => this.removeChild(span), 500);
  });
});

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }
    else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  });
}

navHighlighter();

const filterContainer = document.querySelector('.portfolio-filter-inner'),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll('.portfolio-item'),
      totalPortfolioItem = portfolioItems.length;

      for (let i = 0; i < totalFilterBtn; i++) {
        filterBtns[i].addEventListener('click', function() {
          filterContainer.querySelector('.active').classList.remove('active');
          this.classList.add('active');

          const filterValue = this.getAttribute('data-filter');
          for (let j = 0; j < totalPortfolioItem; j++) {
            if (filterValue === portfolioItems[j].getAttribute('data-category')) {
              portfolioItems[j].classList.remove('hide');
              portfolioItems[j].classList.add('show');
            } else {
              portfolioItems[j].classList.add('hide');
              portfolioItems[j].classList.remove('show');
            }
            if (filterValue === 'tatca') {
              portfolioItems[j].classList.remove('hide');
              portfolioItems[j].classList.add('show');
            }
          };
        });
      }


const themeBg = document.querySelector('#theme-button');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


const openThemeModal = () => {
  themeModal.style.display = 'grid';
}

const closeModalTheme = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
}

themeBg.addEventListener('click', openThemeModal);
themeModal.addEventListener('click', closeModalTheme);

const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active');
  });
}

fontSizes.forEach(size => {
  size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSizes;
    size.classList.toggle('active');
    if (size.classList.contains('font-size-1')) {
      fontSizes = '12px';
    }
    else if (size.classList.contains('font-size-2')) {
      fontSizes = '14px';
    }
    else if (size.classList.contains('font-size-3')) {
      fontSizes = '16px';
    }
    else if (size.classList.contains('font-size-4')) {
      fontSizes = '18px';
    }
    document.querySelector('html').style.fontSize = fontSizes; 
  });
});

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


const changeBg = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
Bg1.addEventListener('click', () => {
  Bg1.classList.add('active');
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');
  window.location.reload();
})

Bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  Bg2.classList.add('active');
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBg();

});

Bg3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '0%';

  Bg3.classList.add('active');
  Bg2.classList.remove('active');
  Bg1.classList.remove('active');
  changeBg();

});

let Scrollbar = window.Scrollbar;

Scrollbar.init(document.querySelector('body'));


