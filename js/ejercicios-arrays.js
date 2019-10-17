'use strict'
var number = 0;
var numbers = new Array();

var i = 0;
do {
   number = parseInt(prompt('Enter number : ' + (i+1)));
   numbers.push(number);
   i+=1;

} while (i < 6);

function showList(elementos, custownText = ''){
  document.write('<h1>Lista ' + custownText + '</h1>');
  document.write('<ul>');
  elementos.forEach(e => {
    document.write('<li>' + e + '</li>');
  });
  document.write('</ul>');
  console.log(elementos);
}

function order(elementos){
  elementos.sort(function(a,b){
    return a-b;
  });
  showList(elementos, 'Ordenada');
}

//-------------------
function reverseAndShow(elementos){
  elementos.reverse();
  showList(elementos, 'Invertida');
}

//-------------------
function countElement(){
  document.write('<h3>La lista tiene ' + numbers.length + ' elementos</h3>');
  console.log('La lista tiene ' + numbers.length + ' elementos');

}
//-------------------
var foundNumber = parseInt(prompt('Finding element:'));
function findElement(){
//  let foundNumber = parseInt(prompt('Finding element:'));
  document.write('<h1>Busqueda del elemento '+ foundNumber +  '</h1>');
  var foundIndex = numbers.findIndex(e => e == foundNumber);
  console.log(foundIndex);
  if (foundIndex > -1) {
    let found = numbers.find(e => e == foundNumber);
    document.write('<h3>El numero: ' + found + ' existe y se encuentra en la posicion ' + (foundIndex+1) + '</h3>');
    console.log('El numero: ' + found + ' existe y se encuentra en la posicion ' + (foundIndex+1));
  } else{
    document.write('<h3>El numero ' + foundNumber + ' no existe</h3>');
    console.log('El numero ' + foundNumber + ' no existe');
  }
}


//invocacion de funciones
showList(numbers);
findElement();
order(numbers);
findElement();
reverseAndShow(numbers);
countElement();
findElement();
