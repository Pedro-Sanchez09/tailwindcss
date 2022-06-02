console.log('Llamdo');
var menuResponsive = document.getElementById('mobile-menu');
var sideBar = document.getElementById('sideBar');
var btnOpenMenu = document.getElementById('menuOpen');
var btnOpen = document.getElementById('iconOpen');
var btnClose = document.getElementById('iconClose');
var btnCloseMenu = document.getElementById('menuClose');

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

function Openbar() {
    if (sideBar.classList.contains('hidden')) {
        console.log("Oculto");
        btnOpenMenu.classList.add('hidden');

        sideBar.classList.remove('hidden');
        btnCloseMenu.classList.remove('hidden');
        btnCloseMenu.classList.add('visible');




    } else {
        console.log("visible");
        btnOpenMenu.classList.remove('hidden');

        sideBar.classList.add('hidden');
        btnCloseMenu.classList.remove('visible');
        btnCloseMenu.classList.add('hidden');

    }

}






const btnMenu = document.getElementById('bntResponsive');
btnMenu.addEventListener('click', hideShow);
btnOpenMenu.addEventListener('click', Openbar);
btnCloseMenu.addEventListener('click',Openbar);


