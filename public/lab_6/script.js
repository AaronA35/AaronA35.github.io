// You may wish to find an effective randomizer function on MDN.

const { urlencoded } = require("express");

function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}

function sortFunction(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  } if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

function getRandom(max) {
  return Math.floor(Math.random()* Math.floor)(max);
}
function map (s1, s2){
  return ('${s1} ${s2}');
}

document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((fromServer) => {
    if (document,querySelector('.flex-inner')){
      document.querySelector('.flex-inner').remove();
    }
    const narr = range(10);
    const narr2 = narr.map(() => {
      const number = getRandomInt(0,243)
      return fromServer[number];
    });
    const reservelist = narr2.sort((a,b) => sortFunction(b,a,'name'));
    const ul = document.createElement('ol');
    ul.className = 'flex-inner';
    $('form').prepend(ul);

      reservelist.forEach((ol, i) =>{
      $(li).append('<input type = "checkbox" value =${element.code} id = ${element.code} />');
      $(li).append('<label for = ${element.code}>${element.code}</label>');
      $(ul).append(li);
    });
      console.log(arr);
      console.log('Test');
      console.log('fromServer', fromServer);
    })
    .catch((err) => console.log(err));
});