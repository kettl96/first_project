console.log('Hello world!');
let user = "vasy"
let userName = "vasy";
// userName = user;
console.log(userName);

var drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
};
drawCats(10);


var secondsInAMinute = 60;
var minutesInAnHour = 60;
var secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour);
var hoursInADay = 24;
var secondsInADay = secondsInAnHour * hoursInADay;
console.log(secondsInADay);
var daysInAYear = 365;
var secondsInAYear = secondsInADay * daysInAYear;
console.log(secondsInAYear);
var age = 26;
console.log(age * secondsInAYear);

highFives = 0;
console.log(highFives++);
console.log(highFives++);



// var age = 12;
// var accompanied = true;
// var age >= 12 = true;
// var guest = age + accompanied;
// console.log(guest);


var randomBodyParts = ["глаз", "нос", "cherep"];
var randomAdjectives = ["vonuchka", "ynulaya", "dyratckaya"];
var randomWords = ["myxa", "vydra", "dybina", "martishka", "crisa"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// var randomInsult = "Y tebya " + randomBodyPart + " slovno " + randomAdjective 
// + " " + randomWord + "!!!";
var randomInsult = ["Y tebya", randomBodyPart, "slovno", randomAdjective, randomWord, "!!!"].join(" ");

console.log(randomInsult);


var line = [3, 2, 1].join(" bigger, that ")
// var line = 
console.log(line)

var scores = {}
scores["sasha"] = 0;
scores["gena"] = 0;
scores["sasha"] += 1;
scores["gena"] += 1;
console.log(scores);


var myCrazyObject = {
  "name": "Нелепый объект",
  "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
  "random animal": "Банановая акула"
};

console.log(myCrazyObject["some array"][2].number);


var name = "alex";
console.log("hello, " + name);
if (name.length > 6) {
  console.log("you have such a long name");
} else {
  console.log("short name")
}

// var name = {}
// name = "alexander";
// name = "sergey";
// name = "inna";
// console.log(name);
// if ()

var namee = "alexander";


if (namee === "alexander") {
  console.log("hello " + namee);
} else if (namee === "inna") {
  console.log("hello " + namee);
} else {
  console.log("hello stranger")
}

var sheepCounted = 0;
while (sheepCounted < 10) {
  console.log("count sheep: " + sheepCounted + "!");
  sheepCounted++;
}
console.log("xpppppppppp")


var x = 10
for (var times = 0; times < x; times++) {
  console.log("hello")
}

for (var x = 3; x < 10000; x = x * 3) {
  console.log(x);
}

var x = 3
while (x<10000) {

  console.log(x);
  x=x*3
}

var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (var i = 0; i<animals.length; i++) {
  animals[i] = animals[i] + " - wonderfull animal";
}
console.log(animals)

var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// var alphabetSymbol = alphabet[Math.floor(Math.random() * randomBodyParts.length)];
var randomString = "";
while (randomString.length<6) {
  var alphabetSymbol = alphabet[Math.floor(Math.random() * alphabet.length)];
  randomString+=[alphabetSymbol];
  
}
console.log(randomString);

var input = "javascript is awesome";
var output = "";
for (var i = 0; i<input.length; i++) {
  if (input[i]==="a"){
    output += "4";
  } else  if (input[i]==="e"){
    output+= "3";
  } else if (input[i]==="i"){
    output+= "1";
  } else if (input[i]==="o"){
    output+= "0";
  } else {
    output+=input[i]
  }
}
console.log(output);

// alert("javaScript its cool")


var printMultipleTimes = function (howManyTimes, whatToDraw) {
  for (var i = 0; i < howManyTimes; i++) {
  console.log(i + " " + whatToDraw);
  }
  };
  console.log(printMultipleTimes(3, "^_^"))

  var double = function (number) {
    return number *2;
  };
  console.log(double(double(5)));


  var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
  };
  var randomWordss = ["planet", "worm","duck"];

  console.log(pickRandomWord(randomWordss));



  // joker
  var randomString = "you have " + pickRandomWord(randomBodyParts) + 
  " slovno " + pickRandomWord(randomAdjectives) + 
  " " + pickRandomWord(randomWords) + "!!!";
  console.log(randomString);


  // func

  var add = function (a, b) {
    return a+b;
  }
  var multiply = function (a,b) {
    return a*b;
  }

  console.log(add(multiply(36325,9824), 777));


  // 
  var areArraysSame = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (var i = 0; i<arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
console.log(areArraysSame([1, 2, 3], [4, 5, 6]))
console.log(areArraysSame([1, 2, 3], [1, 2, 3]))

// --

