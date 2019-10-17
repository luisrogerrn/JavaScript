'use strict'
var name = prompt('Enter your name');
var lastname = prompt('Enter your last name');

var nameComplete = `
                   <h1>How what are you?</h1>
                   <h3>My name is: ${name} </h3>
                   <h3>My last name is: ${lastname} </h3>
`
document.write(nameComplete);
