
var menuResponsive = document.getElementById('mobile-menu');
var menuSidebar=document.getElementById('');
var btnOpen = document.getElementById('iconOpen');
var btnClose = document.getElementById('iconClose');
var menuSide=document.getElementById('sideBarList');
var btnOpen1 = document.getElementById('iconOpen1');
var btnClose1 = document.getElementById('iconClose1');
var spanMenu=document.getElementById('spMenu');
var curso=document.getElementById('curso');
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

function sidebarShow() {
    if (menuSide.classList.contains('hidden')) {
        menuSide.classList.remove('hidden');
        btnOpen1.classList.add('hidden');
        btnClose1.classList.remove('hidden');
       spanMenu.classList.remove('hidden');
    
    } else {
        console.log('Visible');
        menuSide.classList.add('hidden');
        btnClose1.classList.add('hidden');
        btnOpen1.classList.remove('hidden');
        spanMenu.classList.add('hidden');
        
    }
    


    
 
   
}




const btnMenu = document.getElementById('bntResponsive');
btnMenu.addEventListener('click', hideShow);


const btnsidebar = document.getElementById('bntSidebar');
btnsidebar.addEventListener('click',sidebarShow  );

