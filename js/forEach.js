'use strict'
var lenguajes = new Array ('PHP','Java','Go','C#','C++');

document.write('<h1>Listado de lenguajes</h1>');
document.write('<ul>');
lenguajes.forEach(e=>{
  document.write('<li><a href="">' + e + '</a></li>');
});
document.write('</ul>');
