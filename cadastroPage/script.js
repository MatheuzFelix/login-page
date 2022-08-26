const inputs = document.querySelectorAll('input');
const button = document.querySelector('.login__button')

let name = document.querySelector('#name')
let labelname = document.querySelector('#labelname')
let validname = false

let usuario = document.querySelector('#usuario')
let labelusuario = document.querySelector('#labelusuario')
let validusuario = false

let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#labelsenha')
let validsenha = false

let confsenha = document.querySelector('#confsenha')
let labelconfsenha = document.querySelector('#labelconfsenha')
let validconfsenha = false

let msgerro = document.querySelector('#msgerro')
let msgsucesso = document.querySelector('#msgsucesso')

name.addEventListener('keyup', () => {
    if (name.value.length <= 2){
        labelname.setAttribute('style', 'color: red')
        labelname.innerHTML = 'Nome *nome invalido'
        name.setAttribute('style', 'border-color: red')
        validname = false
    }else{
        labelname.setAttribute('style', 'color: green')
        labelname.innerHTML = 'Nome'
        name.setAttribute('style', 'border-color: green')
        validname = true
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 2){
        labelusuario.setAttribute('style', 'color: red')
        labelusuario.innerHTML = 'usuario *Usuario invalido'
        usuario.setAttribute('style', 'border-color: red')
        validusuario = false
    }else{
        labelusuario.setAttribute('style', 'color: green')
        labelusuario.innerHTML = 'usuario'
        usuario.setAttribute('style', 'border-color: green')
        validusuario = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 2){
        labelsenha.setAttribute('style', 'color: red')
        labelsenha.innerHTML = 'senha *senha invalido'
        senha.setAttribute('style', 'border-color: red')
        validsenha = false
    }else{
        labelsenha.setAttribute('style', 'color: green')
        labelsenha.innerHTML = 'senha'
        senha.setAttribute('style', 'border-color: green')
        validsenha = true
    }
})

confsenha.addEventListener('keyup', () => {
    if (confsenha.value != senha.value){
        labelconfsenha.setAttribute('style', 'color: red')
        labelconfsenha.innerHTML = 'senha não confere'
        confsenha.setAttribute('style', 'border-color: red')
        validconfsenha = false
    }else{
        labelconfsenha.setAttribute('style', 'color: green')
        labelconfsenha.innerHTML = 'Confirmar senha'
        confsenha.setAttribute('style', 'border-color: green')
        validconfsenha = true
    }
})


function cadastrar() {
    if (validname && validsenha && validusuario && validconfsenha ){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
        {
            nomeCad: name.value,
            userCad: usuario.value,
            senhaCad: senha.value
        }            
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))


        msgsucesso.setAttribute('style', 'display: block')
        msgsucesso.innerHTML = 'cadastrando usuario...'
        msgerro.setAttribute('style', 'display: none')
        msgerro.innerHTML = ''

        setTimeout(() => {
            window.location.href = '../Index.html'
        },3000)

    }else{

        msgerro.setAttribute('style', 'display: block')
        msgerro.innerHTML = 'preencha todos os campos'
        msgsucesso.setAttribute('style', 'display: none')
        msgsucesso.innerHTML = ''
    }

}

const handleChange = () => {
    const [username, password] = inputs;

    if (username.value) {
        button.removeAttribute('disabled')
    }else{
        button.setAttribute('disabled', '')
    }
}


inputs.forEach((input) => input.addEventListener('input', handleChange));


