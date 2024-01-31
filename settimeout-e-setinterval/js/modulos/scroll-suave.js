export default function initScrollSuave() {
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
