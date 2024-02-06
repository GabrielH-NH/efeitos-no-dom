import outsideClick from "./outsideclick.js";


export default function initMenuMobile() {

}

const menuButton = document.querySelectorAll('[data-menu="button"]')
const menuList = document.querySelectorAll('[data-menu="list"]')

function openMenu(event) {
  menuList.classList.add('active');
  menuButton.classList.add('active')
}