/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav_link, we remove the show-menu class
  setTimeout(() => {
    navMenu.classList.remove('show-menu')
  }, 500);
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillContent = document.getElementsByClassName('skills_content'),
      skillHeader = document.querySelectorAll('.skills_header')

function toggleSkill(){
  let itemClass = this.parentNode.className
  for(i = 0; i < skillContent.length; i++){
    skillContent[i].className = 'skills_content skill_close'
  }
  if (itemClass === 'skills_content skill_close') {
    this.parentNode.className = 'skills_content skill_open'
  }
}
skillHeader.forEach((el) => {
  el.addEventListener('click', toggleSkill)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)
    tabContent.forEach(tabContent => {
      tabContent.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')

    tabs.forEach(tab => {
      tab.classList.remove('qualification_active')
    })
    tab.classList.add('qualification_active')
  })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')
let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})

/*==================== PORTFOLIO SWIPER  ====================*/
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});

/*==================== INPUT DATETIME AND CONTACT FORM ====================*/
var dt = new Date();
var datetime = `${
    (dt.getMonth()+1).toString().padStart(2, '0')}/${
    dt.getDate().toString().padStart(2, '0')}/${
    dt.getFullYear().toString().padStart(4, '0')} ${
    dt.getHours().toString().padStart(2, '0')}:${
    dt.getMinutes().toString().padStart(2, '0')}:${
    dt.getSeconds().toString().padStart(2, '0')}`;

document.getElementById('time').value = datetime;

const scriptURL = 'https://script.google.com/macros/s/AKfycbzFEU5CsBVeXDx0kxJ9iP_Cr_BswfSVubuJPaKnlGjnFVyBGHIp1DDfj6h5i_meVNdi/exec'
const form = document.forms['submit-to-google-sheet']
const cn_success = document.querySelector('.contact_notice.success'),
    cn_error = document.querySelector('.contact_notice.error')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response)
      cn_success.style.display = 'inline-block';
      form.name.value = ''
      form.email.value = ''
      form.message.value = ''
      setTimeout(() => {
        cn_success.style.display = 'none';
      }, 5000);
    })
    .catch(error => {
      console.error('Error!', error.message)
      cn_error.style.display = 'inline-block';
      setTimeout(() => {
        cn_error.style.display = 'none';
      }, 5000);
    })
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 250;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 120) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollTop(){
  const scrollTop = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 1000) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})