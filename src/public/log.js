const containerRegister = document.querySelector('.container-form-register')
const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnLogin = document.querySelector('.btnLogin-popup')
const btnClose = document.querySelector('.icon-close')
const btnClose2 = document.querySelector('.icon-close-2')

registerLink.addEventListener('click', ()=> {
    containerRegister.classList.add('active')
})
loginLink.addEventListener('click', ()=> {
    containerRegister.classList.remove('active')
})
btnLogin.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
})
btnClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
})
btnClose2.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
    containerRegister.classList.remove('active')
})