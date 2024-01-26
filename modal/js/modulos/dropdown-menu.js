export default function initDropdownMenu() {

}

const dropdownMenus = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach(menu => {
  menu.addEventListener('touchstart', handleClick);
  menu.addEventListener('click', handleClick);
  ['touchstart', 'click'].forEach(userEvent => {

  })
})

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle('active')
}