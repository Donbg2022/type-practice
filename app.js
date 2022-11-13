const timeAndMistakes = document.querySelector('#timeAndMistakes')
const p = document.querySelector('#p1')
const input = document.querySelector('#input')

//api request to generate text
axios.get('https://baconipsum.com/api/?type=meat-and-filler')
.then(({ data }) => {
  //promise to assign the random text to a p element
  p.innerText = data[0]
  total = p.innerText.length
})


//logic to add the amount of incorrect versus correct points
let correctHtml = document.querySelector('#correct')
let incorrectHtml = document.querySelector('#incorrect')
let percent = document.querySelector('#percent')
let rateOfSuccess = 0


//variable to be updated if a letter is correct on incorrect
let correct = 0 ;
let wrong = 0
let total = 0



//event listener assigned to input of text
input.addEventListener('input', () => {
  //variable to keep the users typing and the text in sync
  let inputNumber = input.value.length - 1
  
  //updating total variable to use in calculation of success rate
  total = p.innerText.length
  

  //variables to make getting the last character of string instead of the entire user input easier
  let realInputValue = input.value.charAt(input.value.length - 1)


  //keeps track of the letter of the text user is trying to type
  let pLetter = p.innerText[inputNumber]
  

//if statement which determines if the user is correct or incorrect and assigns points
  if(realInputValue === pLetter){
    p.style.color = 'green'
    correct++
correctHtml.innerText = `Correct: ${correct}`
  }else{
    p.style.color = 'red'
    wrong++
    incorrectHtml.innerText = `Mistakes: ${wrong}`
  }


  //Adding a success rate of the entire paragraph
 rateOfSuccess = Math.round((correct / total) * 100) 
 percent.innerText = `Success rate: ${rateOfSuccess}%`


})

//adding a success rate button





