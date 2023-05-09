const wrapper = document.querySelector('.wrapper')
const loginlink = document.querySelector('.login-link')
const signuplink = document.querySelector('.signup-link')
const loginpop = document.querySelector('.btnLogin')
const closebtn = document.querySelector('.icon-close')
const signuppop = document.querySelector('.btnSignUp')


let text = document.getElementById('text')
let sky=document.getElementById('sky')
let righttree=document.getElementById('righttree')
let lefttree=document.getElementById('lefttree')
let backtree=document.getElementById('backtree')
let mountain=document.getElementById('mountain')

signuplink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

loginpop.addEventListener('click', () => {
    window.history.pushState(null,null,"users/login")
    wrapper.classList.add('active-popup');
})

closebtn.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
})

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    
    text.style.marginTop = value * 2.5 + 'px';
    sky.style.marginTop=value*-1.5+'px';

    righttree.style.marginRight=value*-1.5+'px';
    righttree.style.marginBottom=value*-1.5+'px';

    lefttree.style.marginLeft=value*-1.5+'px';
    lefttree.style.marginBottom=value*-1.5+'px';

    backtree.style.marginTop = value * 0.5 + 'px';
})