// Esercizio 1
const save = function() {
    let name = document.getElementById('name').value
    localStorage.setItem('utente', name)
    check()
}

const deleteData = function() {
    localStorage.removeItem('utente')
    check()
}

const check = function() {
if (localStorage.getItem('utente')) {
    txt = 'Ciao ' + localStorage.getItem('utente')
} else {
    txt = 'Empty'
}
    document.getElementById('title').innerText = txt
}

window.onload = check()


// Esercizio 2

let i= sessionStorage.getItem('count') ? parseInt(sessionStorage.getItem('count')) : 0
const conta = function() {
    i = i+1 
    document.getElementById('timer').innerText = i;
    sessionStorage.setItem('count', i)
}

setInterval(conta, 1000)