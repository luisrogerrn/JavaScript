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

});
