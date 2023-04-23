const header_nav = document.querySelector(".header_nav");
const menuIcon = document.querySelector(".nav_item_img3");
const mobile_nav_items = document.querySelector(".mobile_nav_items");
const mobile_nav_items_active = document.querySelector(".mobile_nav_items.active");

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 120) {
    header_nav.classList.add("header_nav_scrolled");
  }
  else{
    header_nav.classList.remove("header_nav_scrolled");
  }
}); 

 menuIcon.addEventListener("click", () => {
    mobile_nav_items.classList.toggle("active");
    header_nav.classList.toggle("header_nav_scrolled");
 });
