let pets = [];

class Pet {
    constructor(id, name, service, species, breed, ownerName, ownerPhone) {
        this.id = id;
        this.name = name;
        this.service = service;
        this.species = species;
        this.breed = breed;
        this.ownerName = ownerName;
        this.ownerPhone = ownerPhone;
    }
}

function registerPet(event) {
    event.preventDefault();

    const id = Date.now();
    const name = document.getElementById('pet-name').value;
    const service = document.getElementById('pet-service').value;
    const species = document.getElementById('pet-species').value;
    const breed = document.getElementById('pet-breed').value;
    const ownerName = document.getElementById('owner-name').value;
    const ownerPhone = document.getElementById('owner-phone').value;

    const newPet = new Pet(id, name, service, species, breed, ownerName, ownerPhone);
    pets.push(newPet);

    displayPets();
    document.getElementById('registration-form').reset();
}

function displayPets() {
    const tableBody = document.getElementById('pets-table-body');
    tableBody.innerHTML = '';

    pets.forEach(pet => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = pet.id;
        row.insertCell(1).textContent = pet.name;
        row.insertCell(2).textContent = pet.service;
        row.insertCell(3).textContent = pet.species;
        row.insertCell(4).textContent = pet.breed;
        row.insertCell(5).textContent = pet.ownerName;
        row.insertCell(6).textContent = pet.ownerPhone;

        const deleteCell = row.insertCell(7);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => deletePet(pet.id);
        deleteCell.appendChild(deleteButton);
    });
}

function deletePet(id) {
    pets = pets.filter(pet => pet.id !== id);
    displayPets();
}

document.getElementById('registration-form').addEventListener('submit', registerPet);
