console.log('Script Working');

const burger = document.querySelector('.burger')
const mobileNav = document.querySelector('.header__mobile');
console.log(mobileNav)
let menuOpen = false;
burger.addEventListener('click',()=>{
    if(!menuOpen){
        burger.classList.add('open');
        mobileNav.classList.add('visible')
        menuOpen = true;
    }else{
        burger.classList.remove('open');
        mobileNav.classList.remove('visible')
        menuOpen = false;
    }
})

