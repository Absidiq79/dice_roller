let dieRolls = [];
let RollButton = document.querySelector("#rollButon");
let userInput = document.querySelector('#numOfRolls');
let TotalSpan = document.querySelector('#total');
let ShowAllRollButton = document.querySelector("#ShowAllRolls");
let allRollsElement = document.querySelector("#allRollsDisplay");
let resetButton = document.querySelector("#reset");
     

  RollButton.addEventListener('click', function () {
    let diceCount = userInput.value
  
    let total = 0;

    
    for (let i = 1; i <= diceCount; i++) {
      let roll = Math.floor(Math.random() * 6) + 1
      dieRolls.push(roll)
      total = total + roll; 
    }
    TotalSpan.innerHTML = total   
  })

   ShowAllRollButton.addEventListener('click', function() {
    for (let i = 0; i < dieRolls.length ; i++ ) {

      const newDiceString = '<li class="dice">' + dieRolls[i] + "</li>";
      allRollsElement.innerHTML += newDiceString;
      console.log();
    }
  })

   
 resetButton.addEventListener('click', function() {
  userInput.value = '';
  TotalSpan.innerHTML = '';
  allRollsElement.innerHTML = '';
  
 })




  // console.log(resetButton);








  
  // dieRoll.push(Math.floor(Math.random() * 6) + 1)

  // Math.floor(Math.random() * (6 - 1 + 1) ) +1
  // ()













// let inputElement = document.querySelector("#input-Element");
//   // console.log(inputElement);
// let rollsButton = document.querySelector("#rolls-Button");
// let Total = document.querySelector("#Total");
// let showAllRolls = document.querySelector("Show-all-rolls-button");
// let resetButton = document.querySelector("resetButton");

// const dieRolls = []
// const diceList = document.querySelector('ol');
// showAllrolls.addEventListener('click', function () {
   
//     let index = 0
//     while (index < diceRolls.length) {
//         let rollValue = dieRolls[index]
//         let newDiceString = '<li class="dice">' + rollValue + "</li>"
//         diceList.innerHTML += newDiceString
//         index += 1
//     }
//     })

// let diceRolls = []

//  rollsButton.addEventListener("click", function() {
   
//    let numberOfDice = inputElement.value
//    for(let count = 0; count < numberOfDice; count++)

//    let index = 0
//    let total = 0 
//     while (index < diceRolls.lenght) {
//       let rollValue = Math.floor(Math.random() * 6) + 1
      
//        diceRolls.push(rollValue);
//        total += rollValue
//        index += 1
//       }

//        totalNum.innerHTML = Total

//        resetButton.addEventListener("click", function() {
//           // console.log("click to reset");
//           inputElement.value = ""
//           diceList.innerHTML = ""
//           totalNum.innerHTML = ""

//        })
     
    
// })



