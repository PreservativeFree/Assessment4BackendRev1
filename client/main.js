//const res = require("express/lib/response")

const myComplimentButton = document.querySelector("#complimentButton")
const myFortuneButton = document.querySelector("#fortuneButton")
const optionSelectedButton = document.querySelector('#improve')
const submitButton = document.querySelector('#submitButton')
const pikaButton = document.querySelector('#makePoke')
const delComplimentsButton = document.querySelector('#deleteCompliments')

const complimentUser = function(e) {
axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
}

const giveUserFortune = function(e) {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
}

const makeImprovements = function(e) {
    e.preventDefault()
    let inputField = document.querySelector('option')
    var choice = document.createElement('li')
    choice.textContent = inputField.value
    var Title = document.createElement("span")
    choice.appendChild(Title)
    const list = document.getElementById('pickMe')
    list.appendChild(choice)
}

const showPoke = function(e) {
    axios.get("https://pokeapi.co/api/v2/ability/pressure")
        .then(function (response) {
          console.log(response.data.name)
          let myData = response.data.name
          var elem = document.querySelector('h4')
          elem.textContent = myData
        });
}
const deleteCompliments = function(e) {
  axios.delete("http://localhost:4000/api/compliment/")
      .then(function (response) {
        const elem = document.getElementById('complimentButton')
        elem.remove()
        response.status(400).send('Compliments Deleted')
      });
}

myComplimentButton.addEventListener("click", complimentUser)
myFortuneButton.addEventListener("click", giveUserFortune)
submitButton.addEventListener("click", makeImprovements)
pikaButton.addEventListener("click", showPoke)
delComplimentsButton.addEventListener("click",deleteCompliments)

