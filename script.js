const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button')

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {

    if (target.value == ''){
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

const handleChange = () => {
    const [username, password, confpass] = inputs;

    if (username.value && password.value.length >= 8) {
        button.removeAttribute('disabled')
    }else{
        button.setAttribute('disabled', '')
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));

function entrar(){

    let usuario = document.querySelector('#username')
    let senha = document.querySelector('#password')

    let msgerro = document.querySelector('#msgerro')
    let listaUser = []
    
    let userValid = {
        name:"",
        user:"",
        senha:""
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad) {
            userValid = {
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    if(usuario.value == userValid.user && senha.value == userValid.senha){
        msgerro.setAttribute('style', 'display: none')
        msgerro.innerHTML = ''
        window.location.href = '../page_painel/Painel.html'
    }else{
        msgerro.setAttribute('style', 'display: block')
        msgerro.innerHTML = 'usuario ou senha invalido'
        usuario.focus()
    }


}