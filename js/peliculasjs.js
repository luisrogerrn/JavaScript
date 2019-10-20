'use strict'
window.addEventListener('load', function(){

  var form = document.querySelector('#formulario');
  form.addEventListener('submit', function(){

    var title = document.querySelector('#title').value;
    var year = parseInt(document.querySelector('#year').value);
    var m = document.querySelector('#errortitle');
    if ((title.trim().length <= 0) || (title.trim() == null)) {
      let m = document.querySelector('#errortitle');
      let texto = 'Must fills the field title';
      m.append(texto);
    } else {
      var pelicula = {
        title : title,
        year: year
      };
    //  console.log(pelicula.title);
      m.innerHTML = '';
      localStorage.setItem(pelicula.title, JSON.stringify(pelicula));
      showMovies();
    }
 function showMovies() {
   var div = document.querySelector('#data');
   var ul = document.createElement('ul');
   for (var i in localStorage) {

    console.log(typeof localStorage[i] );
      if (typeof localStorage[i] =='string') {
        let cadenaObj = localStorage[i];
        if (cadenaObj.startsWith('{') && cadenaObj.endsWith('}')) {
          let peli = JSON.parse(localStorage[i]);
          console.log(peli);
          let li = document.createElement('li');
          if (typeof peli.title != 'undefined') {
            li.append(peli.title + ' - ' + peli.year);
            ul.append(li);
          }
        }
      }
   }
    div.append(ul);
 }
function functionName() {
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    console.log(key);
    console.log(value);
  }
}

  });
});
