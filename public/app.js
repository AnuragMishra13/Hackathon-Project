const wrapper = document.querySelector('.wrapper')
const loginlink = document.querySelector('.login-link')
const signuplink = document.querySelector('.signup-link')
const loginpop = document.querySelector('.btnLogin')
const closebtn = document.querySelector('.icon-close')
const signuppop = document.querySelector('.btnSignUp')

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
