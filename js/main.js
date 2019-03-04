var menuElementId = document.getElementById('menuId');
var imgBars = menuElementId.querySelector('header-menu');

imgBars.onclick = function(){
    menuElementId.classList.toggle('open');
};
