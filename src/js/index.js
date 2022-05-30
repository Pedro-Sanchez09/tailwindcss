
var menuResponsive = document.getElementById('mobile-menu');
var menuSidebar=document.getElementById('');
var btnOpen = document.getElementById('iconOpen');
var btnClose = document.getElementById('iconClose');

function hideShow() {
    if (menuResponsive.classList.contains('hidden')) {
        menuResponsive.classList.remove('hidden');
        btnOpen.classList.add('hidden');
        btnClose.classList.remove('hidden');
    } else {
        menuResponsive.classList.add('hidden');
        btnClose.classList.add('hidden');
        btnOpen.classList.remove('hidden');
    }
    
}




const btnMenu = document.getElementById('bntResponsive');
btnMenu.addEventListener('click', hideShow);