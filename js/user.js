'use strict'
// Fetch (Ajax) y peticiones a servicios /api rest
window.addEventListener('load', function(){
  var usuario = [];
  var showUser = document.querySelector('#users');
  fetch('https://reqres.in/api/users').
  then(data => data.json()).
  then(users => {
    var usuarios = users.data;
    console.log(usuarios);
    usuarios.map((user,i) => {
      let fullname = document.createElement('h2');
      fullname.innerHTML = i +' - ' + user.first_name + ' ' + user.last_name;
      //showUser.append(fullname);
      showUser.appendChild(fullname);
    })
  })
});
