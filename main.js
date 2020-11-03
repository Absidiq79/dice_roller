let inputElement = document.querySelector("#input-Element");
  // console.log(inputElement);
let rollsButton = document.querySelector("#rolls-Button");
let Total = document.querySelector("#Total");
let showAllRolls = document.querySelector("Show-all-rolls-button");
let resetButton = document.querySelector("resetButton");

const dieRolls = []
const diceList = document.querySelector('ol');
showAllrolls.addEventListener('click', function () {
   
    let index = 0
    while (index < diceRolls.length) {
        let rollValue = dieRolls[index]
        let newDiceString = '<li class="dice">' + rollValue + "</li>"
        diceList.innerHTML += newDiceString
        index += 1
    }
    })

let diceRolls = []

 rollsButton.addEventListener("click", function() {
   
   let numberOfDice = inputElement.value
   for(let COUNT = 0; count < numberOfDice; count++)

   let index = 0
   let total = 0
    while (index < diceRolls.lenght) {
      let rollValue = Math.floor(Math.random() * 6) + 1
      
       diceRolls.push(rollValue);
       total += rollValue
       index += 1
      }

       totalNum.innerHTML = Total

       resetButton.addEventListener("click", function() {
          // console.log("click to reset");
          inputElement.value = ""
          diceList.innerHTML = ""
          totalNum.innerHTML = ""

       })
     
    
})









    