// You may wish to find an effective randomizer function on MDN.

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
    };
    const arr10 = range(10);
    const arr = arr10.map(() => {
      const number = getRandomInt(142)
      return fromServer[number];
    });
    const reservelist = arr.sort((a,b) => sortFunction(b,a,'name'));
    
    const ol = document.createElement('ol');
    ol.className = 'flex-inner';
    $('form').append(ol);

    reservelist.forEach(element, i) => {
      const li = document.createElement('li');
       $(ol).append(li);
      $(li).append('<input type = "checkbox" value =${element.code} id = ${element.code} />')
      $(li).append('<label for = ${element.code}>${element.code}</label>')
     
    };
      console.log(arr);
      console.log('Test');
      console.log('fromServer', fromServer);
    })
    .catch((err) => console.log(err));
});