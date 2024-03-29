// Primo esercizio

class User {
    constructor(firstName, lastName, age, location) {
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
this.location = location;
    }

   confronta(user1, user2) {
        if (user1.age < user2.age) {
            console.log(user2.firstName + ' è più grande di '+ user1.firstName)
        } else if (user1.age > user2.age) {
            console.log(user1.firstName + ' è più grande di '+ user2.firstName)
        } else { console.log(user1.firstName + ' e ' + user2.firstName + ' hanno la stessa età')}
        
    }
}

const matteo = new User ('Matteo','Mottola',31,'Roma');
const federico = new User ('Federico','Mottola',31,'Roma');
matteo.confronta(matteo, federico);

// Secondo esercizio



const campoPetName = document.getElementById("nomePet");
const campoNomeProprietario = document.getElementById("proprietario");
const campoSpecie = document.getElementById("specie");
const campoRazza = document.getElementById("razza");

let list = document.getElementById("lista");
const button = document.getElementById("add");



class Pet {
    constructor(nomePet, nomeProprietario, specie, razza) {
        this.nomePet = nomePet;
        this.nomeProprietario = nomeProprietario;
        this.specie = specie;
        this.razza = razza;
    }
    
    static controllaProprietari(pet, pet1) {
        if (pet.nomeProprietario === pet1.nomeProprietario) {
            console.log('I due animali hanno lo stesso proprietario');
        } else {
            console.log('I due animali hanno proprietari diversi');
        }
    }
}

const pets = [
    new Pet("Fuffi", "Mario", "Cane", "Pastore Tedesco"),
    new Pet("Micio", "Luigi", "Gatto", "Siberiano"),
];

button.onclick = function () {
    let nuovoAnimale = new Pet(
        campoPetName.value,
        campoNomeProprietario.value,
        campoSpecie.value,
        campoRazza.value
    )

    pets.push(nuovoAnimale);
    renderizzaLista();
    campoPetName.value = "";
    campoNomeProprietario.value = "";
    campoSpecie.value = "";
    campoRazza.value = "";
}

function renderizzaLista() {
    list.innerHTML = '';
    pets.forEach(pet => {
        const newLi = document.createElement("li");
        newLi.innerText = "Nome: " + pet.nomePet + " - Proprietario: " + pet.nomeProprietario + " - Specie: " + pet.specie + " - Razza: " + pet.razza;
        list.appendChild(newLi);
    })
}

Pet.controllaProprietari(pets[0], pets[1]);
