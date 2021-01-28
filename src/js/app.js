
const navContainer = document.querySelector('.nav-container');
const header = document.querySelector('header');

const navContainerItem = document.createElement('div');
navContainer.addEventListener('click', function () {

    if (navContainerItem) {
        if (navContainerItem.className == 'item') {
            // navContainerItem.classList.remove('item');
            // navContainer.classList.remove('nav-containerToggle');
            navContainerItem.className="";
            navContainer.className="";
            navContainerItem.classList.add('itemnotDisplayed');
            
            navContainer.style.background= '../assets/images/times-solid.svg';
        } else {
            // navContainerItem.classList.remove('itemnotDisplayed');
            navContainerItem.className="";
            navContainerItem.classList.add('item');
            navContainer.classList.add('nav-containerToggle');
            header.appendChild(navContainerItem);
            const tabs = document.querySelectorAll('nav ul li');
            for (const key of tabs) {
                navContainerItem.appendChild(key);
            }
            console.log();
        }

    };
}, true);

const nav = document.querySelector('nav')
window.addEventListener('resize',e=>{
    const long = window.getComputedStyle(nav,null).getPropertyValue('width');
    const tabs = document.querySelectorAll('nav ul li');
    if (long == "800px") {
        navContainer.style.display = "none";
            for (const key of tabs) {
                key.style.display="none";
            }
        } else {
            navContainer.style.display = "initial";
            for (const key of tabs) {
                key.className ="";
                key.classList.add('navbar');
                key.style.display='intial'
            }

    }
    
}, false)

