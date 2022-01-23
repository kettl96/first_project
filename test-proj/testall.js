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
