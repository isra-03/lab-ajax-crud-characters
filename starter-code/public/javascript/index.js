const charactersAPI = new APIHandler('http://localhost:8000');
const contenedor = document.querySelector('.characters-container')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
const personajes = await charactersAPI.getFullList()
contenedor.innerHTML=""
personajes.forEach(element => {
  const personaje=document.createElement('div')
  personaje.className='character-info'
  personaje.innerHTML=`<div class="id">Id:${element.id}</div>
  <div class="name">Character Name:${element.name}</div>
        <div class="occupation">Character Occupation${element.occupation}</div>
        <div class="cartoon">Is a Cartoon?${element.cartoon}</div>
        <div class="weapon">Character Weapon${element.weapon}</div>`
      contenedor.appendChild(personaje)

    });

  });
document.getElementById('fetch-one').addEventListener('click',async function (event) {
  const id=document.querySelector('input[name="character-id"]').value
  const unpersonajes = await charactersAPI.getOneRegister(id)
contenedor.innerHTML= ""
const personaje=document.createElement('div')
personaje.className='character-info'
personaje.innerHTML=`<div class="id">Id:${unpersonajes.id}</div>
<div class="name">Character Name:${unpersonajes.name}</div>
      <div class="occupation">Character Occupation${unpersonajes.occupation}</div>
      <div class="cartoon">Is a Cartoon?${unpersonajes.cartoon}</div>
      <div class="weapon">Character Weapon${unpersonajes.weapon}</div>`
    contenedor.appendChild(personaje)

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    charactersAPI.deleteOneRegister(id)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
