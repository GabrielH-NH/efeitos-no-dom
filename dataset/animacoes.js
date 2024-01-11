function initTabNav() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabcontent = document.querySelectorAll('[data-tab="content"] section');

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add('ativo')

    function activeTab(index) {
      tabcontent.forEach((section) => {
        section.classList.remove('ativo')
      });
      const direcao = tabcontent[index].dataset.anime;
      tabcontent[index].classList.add('ativo', direcao)
    }

    tabmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', function () {
        activeTab(index)
      })
    })
  }
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')

  if(accordionList.length) {
  const activeClass = 'ativo';
  accordionList[0].classList.add(activeClass)
  accordionList[0].nextElementSibling.classList.add(activeClass)

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass)
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
  })
}
}

initAccordion();


function initScrollSuave() {
const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

function scrollToSection(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView(({
    behavior: 'smooth',
    block: 'start',
  }))

  /* Outra forma de fazer
  window.scrollTo({
    top: topo,
    behavior: 'smooth',
  });
  */
  
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection)
});
}

initScrollSuave();

function initAnimaScroll() {

const sections = document.querySelectorAll('[data-anime="scroll"]')

if(sections.length) {
const windowMetade = window.innerHeight * 0.6;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top
    const isSectionVisible = (sectionTop - windowMetade) < 0;
    if(isSectionVisible) {
      section.classList.add('ativo')
    } else {
      section.classList.remove('ativo')
    }
  })
}
}

animaScroll();

window.addEventListener('scroll', animaScroll)

}

initAnimaScroll();