/*
---PROBLEMA---
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/

let team = [
    {
      'name': 'Wayne Barnett',
      'role': 'Founder & CEO',
      'image': './assets/img/wayne-barnett-founder-ceo.jpg',
    },
    {
      'name': 'Angela Caroll',
      'role': 'Chief Editor',
      'image': './assets/img/angela-caroll-chief-editor.jpg',
    },
    {
      'name': 'Walter Gordon',
      'role': 'Office Manager',
      'image': './assets/img/walter-gordon-office-manager.jpg',
    },
    {
      'name': 'Angela Lopez',
      'role': 'Social Media Manager',
      'image': './assets/img/angela-lopez-social-media-manager.jpg',
    },
    {
      'name': 'Scott Estrada',
      'role': 'Developer',
      'image': './assets/img/scott-estrada-developer.jpg',
    },
    {
      'name': 'Barbara Ramos',
      'role': 'Graphic Designer',
      'image': './assets/img/barbara-ramos-graphic-designer.jpg',
    },
];

console.log(team[0])
console.log(team[1])
console.log(team[2])
console.log(team[3])
console.log(team[4])
console.log(team[5])

for(let i=0; i<team.length; i++){
    console.log(team[i].name)
    console.log(team[i].role)
    console.log(team[i].image)

    let element = team[i]

    document.querySelector('.row').innerHTML +=
    `
    <div class="col">
        <div class="card my-3 text-center" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.role}</p>
            </div>
        </div>
    </div>
    `
} 
