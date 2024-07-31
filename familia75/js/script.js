let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

function valida_nome() {
    let txt = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome Invalido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Valido'
        txt.style.color = 'green'
        nomeOk = true
    }

}

function valida_email() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.')) {
         txtEmail.innerHTML = 'Email Invalido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email Valido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function valida_assunto() {
    let txtAssunto = document.querySelector('txtAssunto')

    if (assunto.value.length >= 255) {
        txtAssunto.innerHTML = 'O texto é muito grande, ele deve conter no máximo 255 caracteres'
        txtAssunto.style.color = 'red'
    } else {
        txtAssunto.innerHTML = 'Texto valido'
        txtAssunto.style.color = 'green'
        assuntoOk = true
    }
}

function enviar() {

    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else ('Preencha o formulário corretamente antes de enviar!')
}