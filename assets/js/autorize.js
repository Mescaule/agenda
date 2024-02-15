// localStorage.setItem('token', '123');
// // Para armazenar um item no Local Storage

// // Para buscar um item no Local Storage
// var item = localStorage.getItem('token');

// // Verificar se o item existe
// if (item !== '1234') {

//     window.location.href = 'index.html';

// } else {

//     window.location.href = 'agenda.html';

// }

const form = document.getElementById('form')
const inputName = document.getElementById('name').value
const inputEmail = document.getElementById('email').value
const botao = document.getElementById('btn')

async function enviaDados(e) {
    e.preventDefault()
    console.log('teste');
    const user = {
        name: inputName, 
        email: inputEmail
    }
    await fetch('https://2a99-131-0-91-21.ngrok-free.app/user', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })
}

form.addEventListener('submit', enviaDados)