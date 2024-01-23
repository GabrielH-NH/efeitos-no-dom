export default function initTooltip() {

}

const tooltips = document.querySelectorAll('[data-tooltip]')

tooltips.forEach((item) => {
  item.addEventListener('mouseover', onMouseOver)
})