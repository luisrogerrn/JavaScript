'use strict'
// Fetch (Ajax) y peticiones a servicios /api rest
window.addEventListener('load', function(){
  var showUsers = document.querySelector('#users');
  var showUser = document.querySelector('#oneUser');
//Aqui se encadenan las promesas
  getAllUsers()
  .then(data => data.json()) //promesa 1
  .then(users => {           //promesa 2
    listUsers(users.data);
    return getUserById('2');
  })
  .then(user => user.json())  //promesa 3
  .then(user => {             //promesa 4
      userById(user.data);
  });

  function getAllUsers() {
    return fetch('https://reqres.in/api/users');
  }

function getUserById(id) {
   return fetch('https://reqres.in/api/users/'+id);
}

  function listUsers(users) {
    users.map((user,i) => {
      let fullname = document.createElement('h2');
      fullname.innerHTML = i +' - ' + user.first_name + ' ' + user.last_name;

      //showUser.append(fullname);
      showUsers.appendChild(fullname);
    });
  }

  function userById(user) {
    let fullname = document.createElement('h2');
    let avatar = document.createElement('img');
    avatar.src = user.avatar;
    showUser.append(avatar);
    fullname.innerHTML = user.id +' - ' + user.first_name + ' ' + user.last_name;
    showUser.append(fullname);
  }
});
