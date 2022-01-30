// const button = document.querySelector('.ripple')

// button.addEventListener('click', function (e) {
//   const x = e.clientX
//   const y = e.clientY

//   const buttonTop = e.target.offsetTop
//   const buttonLeft = e.target.offsetLeft

//   const xInside = x - buttonLeft
//   const yInside = y - buttonTop

//   const circle = document.createElement('span')
//   circle.classList.add('circle')
//   circle.style.top = yInside + 'px'
//   circle.style.left = xInside + 'px'

//   this.appendChild(circle)

//   setTimeout(() => circle.remove(), 500)
// })
// const button = document.querySelector('.ripple')
// console.log(button);

// button.addEventListener('click', function (e) {
//   const x = e.pageX
//   const y = e.pageY
//   // alert('kek')
// console.log(x,y);
//   const buttonTop = e.target.offsetTop
//   const buttonLeft = e.target.offsetLeft
// console.log(buttonTop, buttonLeft);
//   const xInside = x - buttonLeft
//   const yInside = y - buttonTop
// console.log(xInside, yInside);
// console.log(yInside);
//   const circle = document.createElement('span')
//   console.log(circle);
//   circle.classList.add('circle')
//   circle.style.top = yInside + 'px'
//   circle.style.left = xInside + 'px'

//   this.appendChild(circle)

//   setTimeout(() => circle.remove(), 50000)
// })


// ---------------------

const artists = {
  beunce: {
    song: 'song1',
    name: "song1",
    date: 'date1'
  }
}
console.log('kek');
console.log(Object.entries(artists)[0][1]);
Object.entries(artists)
console.log(Object.entries(artists)[0][1].song);







function playAlone() {
  scoreResult()

let targets = [];

function findTarget() {
  let arr;
  console.log(targets);
  clickedElements.forEach(el =>
    arr = el.className.split('').reverse());
  targets.push(arr[2])
}

function bot() {
  let randomNum;
  // console.log(targets);
  for(key in targets) {
    randomNum= getRandomIntInclusive(1, 9);
    // console.log(targets[key], String( randomNum));
    // console.log(targets.includes(String(randomNum)));
    if(targets.includes(String(randomNum))) {
      console.log('kek');
    randomNum= getRandomIntInclusive(1, 9);
    console.log('222');
    }
  }
  console.log(box[randomNum]);
  // box[randomNum]
  stepCircle(box[randomNum])
// console.log(targets.join(' '))
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

mute.addEventListener('click', () => {
  mute.classList.remove('on')
  turnOn = !turnOn;
  if (turnOn) mute.classList.add('on')
});

function stepCross(target) {
console.log(target);
  target.innerHTML = cross;
  target.classList.add('X');
  if (!turnOn) crossAudio.play();
  countCross++;
  count++;
  // findTarget();
}

function stepCircle(target) {
  target.innerHTML = circle;
  target.classList.add('O');
  if (!turnOn) circleAudio.play()
  countCircle++;
  count++;
  // findTarget();
}

function start(i) {
  if (clickedElements.includes(i.target)) return;
  clickedElements.push(i.target)
  if (!step) stepCross(i.target);
  else stepCircle(i.target)
  step = !step;
  win();
  findTarget()
bot()
}

function newGame() {
  step = false;
  count = 0;
  countCircle = 0;
  countCross = 0;
  result.innerText = '';
  box.forEach(item => {
    item.innerHTML = '';
    item.classList.remove('X', 'O', 'active');
  })
  game.addEventListener('click', start)
  clickedElements.length = 0;
  scoreResult()
}

function win() {
  let combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < combination.length; i++) {

    if (box[combination[i][0]].classList.contains('X') &&
      box[combination[i][1]].classList.contains('X') &&
      box[combination[i][2]].classList.contains('X')) {
      setTimeout(() => {
        box[combination[i][0]].classList.add('active');
        box[combination[i][1]].classList.add('active');
        box[combination[i][2]].classList.add('active');
        result.innerText = `X Wins ${countCross} step`
        if (localStorage.getItem('winner') == null) {
          localStorage.setItem(`winner`, JSON.stringify([]))
        }
        let inStorageArrayStr = localStorage.getItem('winner')
        let winnersArray = JSON.parse(inStorageArrayStr);
        winnersArray.push({ X: `${countCross}` });
        let winnersArrayInString = JSON.stringify(winnersArray)
        localStorage.setItem('winner', winnersArrayInString)
      }, 1500);
      game.removeEventListener('click', start);
    }

    else if (box[combination[i][0]].classList.contains('O') &&
      box[combination[i][1]].classList.contains('O') &&
      box[combination[i][2]].classList.contains('O')) {
      setTimeout(() => {
        box[combination[i][0]].classList.add('active');
        box[combination[i][1]].classList.add('active');
        box[combination[i][2]].classList.add('active');
        result.innerText = `O Wins use ${countCircle} step`
        if (localStorage.getItem('winner') == null) {
          localStorage.setItem(`winner`, JSON.stringify([]))
        }
        let inStorageArrayStr = localStorage.getItem('winner')
        let winnersArray = JSON.parse(inStorageArrayStr);
        winnersArray.push({ O: `${countCross}` });
        let winnersArrayInString = JSON.stringify(winnersArray)
        localStorage.setItem('winner', winnersArrayInString)
      }, 1500);
      game.removeEventListener('click', start);
    }

    else if (count == 9) {
      result.innerText = 'Draw';
      game.removeEventListener('click', start);
    }
  }
}

game.addEventListener('click', start)
newGameButton.addEventListener('click', newGame)

function scoreResult() {
  if (localStorage.getItem('winner') == null) {
    localStorage.setItem(`winner`, JSON.stringify([]))
  }
  let scoreStore = JSON.parse(localStorage.getItem('winner'));
  if (scoreStore.length == 10) {
    localStorage.clear();
    location.reload();
  }
  let count = 0;
  for (let key in scoreStore) {
    let newArr = scoreStore[key];
    for (key in newArr) {
      winScore[count].innerHTML = `${key}`
      moveScore[count].innerHTML = `${newArr[key]}`
      count++
    }
  }
}
}