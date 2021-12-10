const squareElement = document.querySelector(".ball")
const inputElement = document.querySelector('input')
let save = ''
const handleSquareClick = (event) => {
console.log(event);
event.target.style.background = save
} 

const handleInputChange =(event) => {
  console.log(event.target.value);
  save = event.target.value
}
squareElement.addEventListener('click', handleSquareClick)
inputElement.addEventListener('change', handleInputChange)




// function App () {
//   this.a = 1
//   this.b = 2
//   this.lol = function () {
//     return this.a + this.b
//   }
// }

// const loh = new App
// // console.log(loh.lol());

// let gena = {
//   name: 'gena',
//   sayName() {
//     console.log(this.name);
//   }
// }


// // [ReferenceType]
// gena.sayName() // (obj, methodName, strict)

// let a = gena.sayName // (obj, methodName, strict)
// a()

// const App = (n) => {
//   return Number(n.toString().split('').sort().reverse().join(''))
// }
// console.log(App(44156));



// function findNextSquare(sq) {
//   if (Math.sqrt(sq)) {
//     console.log(Math.sqrt(sq));
//     const newNumber = Math.sqrt(sq)+1;
//     return Math.pow(newNumber,2)
//   } else {
//    return -1;
//   }    
//  }
//  console.log(findNextSquare(121));
























