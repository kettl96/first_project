// alert ("i am js script");

// let admin;
// let name = "john";
// admin = name;
// alert (admin);

// let ourPlanetName = "Earth";
// let currentUserName = "John";

// let name = "Ilya"; 

// alert( `hello ${1}` );

// alert( `hello ${"name"}` );

// alert( `hello ${name}`);

// let userName = prompt("Whats youre name?", "");
// alert(userName);

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 12

// let name = prompt("what original name of JS", '');

// if (name == "ECMAScript") {
//   alert("true");
// } else {
//   alert("dont know?");
// }


// let i = prompt("enter number");
// if (i>0) {
//   alert("1");
// } else if (i<0) {
//   alert("-1");
// } else if (i == 0) {
//   alert("0");
// }

// let result = (a+b<4) ? "small": "big";

// alert( alert(1) || 2 || alert(3) );

// let age = prompt("enter age");
// if (age>= 14 && age <= 90) {
//   alert("1true");
// } else {
//   alert("small or old");
// }


// -----------------------enter-form
// let checkPass = function() {
// let pass = prompt("password?", '');

//   if (pass == "boss") {
//     alert("Hello");
//   } else if (pass == '' || pass == null) {
//     alert('cancel');
//   } else {
//     alert("whronge pass");
//     checkPass()
//   }
// }

// let login = prompt("enter login");

// if (login == "boss") {
//   checkPass()

// } else if (login == ''|| login == null) {
//   alert ("cancel");

// }else {
//   alert("fuck off");
// }
// ---------------------------------------------

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert(i);
//   }
// } 


// let i = 0;
// while (i<3) {
//   alert(`number ${i}`);
//   i++;
// }


// for(let number = 0; number < 100; ) {
//   if (number < 100) {
//     alert("good");
//   } else {
//     alert("enter more than 100")
//   }
// }
// -----

// let num;

// do {
//   num = prompt("enter more than 100", 0);

// }while (num <= 100 && num);

// ---

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % 2 == 0) continue nextPrime;
//   }

//   alert(i);
// }

// --------------

// let arg = prompt("Введите число?");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'Один или ноль' );
//     break;

//   case '2':
//     alert( 'Два' );
//     break;

//   case 3:
//     alert( 'Никогда не выполнится!' );
//     break;
//   default:
//     alert( 'Неизвестное значение' );
// }

// ---------------------

// if (browser == "Edge") {
//   alert("You've got the Edge!");
// } else if (browser == "Chrome"
// || browser == "Firefox") {
//   alert("okay we support these browsers too");
// } else {
//   alert("we hope that this page looks ok");
// }

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// ---------------------------

// const number = +prompt("enter number 0-3", '');
// switch (number) {
//   case 0:
//     alert("you enter number 0");
//     break;
//   case 1:
//     alert("you enter number 1");
//     break;
//   case 2:
//     alert("you enter number 2");
//     break;
//   case 3:
//     alert("you enter number 3");
//     break;
// }

// ------------------------------

// function checkAge(age) {
//  return (age > 18) || confirm("parents allowed?")
//   }

// --------------------

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// -----------------------

// function pow (x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *=x;
//   }

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n<1) {
//   alert('change');
// } else {
//   alert( pow(x, n));
// }
// ------------------------------

// let userName = prompt("Введите имя", "Алиса");
// let isTeaWanted = confirm("Вы хотите чаю?");

// alert( "Посетитель: " + userName ); // Алиса
// alert( "Чай: " + isTeaWanted ); // true

// ----------------------------

// function pow(x,n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   } 

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n <= 0) {
//   alert('text');
// } else {
//   alert( pow(x,n) );
// }

// ----------------------------

// let user = {
//   name: "John",
// surname: "Smith",
// };
// user.name = "pete";
// delete user.name;
// ----------------------------

// let salaries = {
//   xpen1: 100,
//   xren2: 160,
//   xren3: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// alert(sum);

// -----------------------------

// let menu = {
//   width: 200,
//   height: 300,
//   tittle: "my menu"
// };

// console.log();
// Object.values(menu).forEach((item) => {
//   if  ( typeof item === 'number') {
//     console.log(item * 2);
//   }
// })

// function multiplyNumeric(menu) {
//   for (let key in menu) {
//     if (typeof menu[key] == "number") {
//       menu[key] *= 2;
//     }
//   }
// };

// multiplyNumeric(menu);

// ---------------------------------

// let calculator = {
//   sum() {
//     return this.a  + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );
// ---------------------------------

// function Calculator() {

//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "sum=" + calculator.sum() );
// alert( "mul=" + calculator.mul() );

// ----------------------------------
// const Animal = function () {
//   this.name = 'lol'
// }
// const animal = {
//   name: 'lol'
// }

// const Cat = new Animal

// console.log(Cat);

// function fun(echo) {
//   console.log(echo);
// };
// fun("hello");
// function boo(aFunction) {
//   aFunction("boo");
// }
// boo(fun);
// console.log(fun);
// fun(boo);
// var moreFun = fun;
// moreFun("hello again");

// -----------------------------------

// function compareNumbers(num1, num2) {
//   if (num1 > num2) {
//     return 1;
//   } else if (num1 === num2) {
//     return 0;
//   } else {
//     return -1;
//   }
// }

// var numbersArray = [60, 50, 62, 58, 54, 54];
// numbersArray.sort(compareNumbers);
// console.log(numbersArray);

// function compareNumbers(num1, num2) {
//   if (num2 > num1) {
//     return 1;
//   } else if (num1 === num2) {
//     return 0;
//   } else {
//     return -1;
//   }
// }
// -------------------------------------

// var products = [{ name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
// { name: "Orange", calories: 160, color: "orange", sold: 12101 },
// { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
// { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
// { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
// { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
// { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
// { name: "Water", calories: 0, color: "clear", sold: 62123 }
// ];

// function compareSold(colaA, colaB) {
//   if (colaA.sold > colaB.sold) {
//     return 1;
//   } else if (colaA.sold === colaB.sold) {
//     return 0;
//   } else {
//     return -1;
//   }
// }

// function printProducts(products) {
//   for (var i = 0; i < products.length; i++) {
//     console.log("Name: " + products[i].name + 
//     ", Calories: " + products[i].calories + 
//     ", color: "+ products[i].color + 
//     ", Sold: " + products[i].sold);
//   }
// }
// products.sort(compareSold);
// printProducts(products);

// function compareName(colaA, colaB) {
//   if (colaA.name > colaB.name) {
//     return 1;
//   } else if (colaA.name === colaB.name) {
//     return 0;
//   } else {
//     return -1;
//   }
// }

// products.sort(compareName);
// console.log("Products sorted by name:");
// printProducts(products);
// -----------------------------------------------

// administer(patient, function(dosage) { if (dosage > 0) {inject(dosage);}}, time);



// function makeCounter() {
//   var count = 0;

//   function counter() {
//     count = count + 1;
//     return count;
//   }
//   return counter;
// }
// var doCount = makeCounter();
// console.log(doCount());
// console.log(doCount());
// console.log(doCount());
// console.log(doCount());
// console.log(doCount());
// ------------------------------------------------

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   this.bark = function() {
//     if (this.weight > 25) {
//       alert(this.name + " says Woof!");
//     } else {
//       alert(this.name + " says Yip!");
//     }
//   };
// }

// var fido = new Dog("Fido", "Mixed", 38);
// var fluffy = new Dog("Fluffy", "poodle", 30);
// var spot = new Dog("Spot", "Chihuahua", 10);
// var dogs = [fido, fluffy, spot];


// for (var i = 0; i < dogs.length; i++) {
//   dogs[i].bark()
// }

// for (var i = 0; i < dogs.length; i++) {
//   var size = "small";
//   if (dogs[i].weight > 10) {
//     size = "large";
//   }
//   console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
// }

// ---------------------------------------

function Coffee(roast, ounces) {
  this.roast = roast;
  this.ounces = ounces;
  this.getSize = function() {
    if (this.ounces === 8) {
      return "small";
    } else if (this.ounces === 12) {
      return "medium";
    } else if (this.ounces === 15) {
      return "large";
    }
  };
  this.toString = function() {
    return "You`ve ordered a " + this.getSize() + " " + this.roast + " coffee.";
  };
}

var houseBlend = new Coffee("house Blend", 12);
console.log(houseBlend.toString());

var darkRoast = new Coffee("Dark roast", 15);
console.log(darkRoast.toString());