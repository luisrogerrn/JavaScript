'use strict'
window.addEventListener('load', function(){
  var pelicula = {
    title: 'Harry Potter',
    year: 2002,
    part: '1ra',
    saga: true,
  };

var peliculas = [pelicula,
  {
    title: 'The GodFather',
    year: 1972,
    part: '1ra',
    saga: true,
  }];

var div = document.querySelector('#peliculas');
var index;
for (index in peliculas) {
  let p = document.createElement('p');
  p.append(peliculas[index].title + ' - ' + peliculas[index].year);
  div.append(p);
}


var i;
for (i in peliculas) {
  let p = document.createElement('p');
  let ul = document.createElement('ul');
  let pos;
  let peli = peliculas[index];
  for (pos in peli) {
    let li = document.createElement('li');
    li.append(peli[pos]);
    ul.append(li);
  }
  p.append(ul);
  div.append(p);
}

//Local Storage

if (typeof (Storage) != 'undefined') {
  console.log('The Local Storage is available');
}else {
  console.log('The Local Storage is unavailable');
}

// save datas in local storage
localStorage.setItem('Key','Value');

//get datas for the local Storage
var ls = localStorage.getItem('Key');
console.log(ls);

// save objects in localStorage
var user = {
  username: 'lrecio',
  email: 'lrecio@datys.cu'
};

localStorage.setItem('user',JSON.stringify(user));

//get object the of localStorage
var userjson = JSON.parse(localStorage.getItem('user'));
console.log(userjson);




});
