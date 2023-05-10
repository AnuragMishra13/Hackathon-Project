const wrapper = document.querySelector('.wrapper')
const loginlink = document.querySelector('.login-link')
const signuplink = document.querySelector('.signup-link')
const loginpop = document.querySelector('.btnLogin')
const signuppop = document.querySelector('.btnSignup')
const closebtn = document.querySelector('.icon-close')

let text = document.getElementById('text')
let sky = document.getElementById('sky')
let righttree = document.getElementById('righttree')
let lefttree = document.getElementById('lefttree')
let backtree = document.getElementById('backtree')
let mountain = document.getElementById('mountain')

signuplink.addEventListener('click', () => {
    window.history.pushState(null, null, "/signup")
    wrapper.classList.add('active');
})

loginlink.addEventListener('click', () => {
    window.history.pushState(null, null, "/login")
    wrapper.classList.remove('active');
})

signuppop.addEventListener('click', () => {
    window.history.pushState(null, null, "/signup")
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active');
})

loginpop.addEventListener('click', () => {
    window.history.pushState(null, null, "/login")
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('active');
})

closebtn.addEventListener('click', () => {
    window.history.pushState(null, null, "/home")
    wrapper.classList.remove('active-popup');
})

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    text.style.marginTop = value * 1.5 + 'px';
    wrapper.style.marginTop = value * 0.5 + 'px';

    righttree.style.marginRight = value * -1.5 + 'px';
    righttree.style.marginBottom = value * -1.5 + 'px';

    lefttree.style.marginLeft = value * -1.5 + 'px';
    lefttree.style.marginBottom = value * -1.5 + 'px';

    backtree.style.marginTop = value * 1.5 + 'px';
    mountain.style.marginTop = value * 0.5 + 'px';
})