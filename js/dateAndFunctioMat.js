'use strict'
//Date and Function Math
window.addEventListener('load', function(){
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth()+1 ;
  var day = date.getDate();
  var hour = date.getHours();

  var textDate = `
    The month is : ${month}
    The day is : ${day}
    The year is : ${year}
    Time is ${hour}

  `
  console.log(textDate);
  console.log(year + '/'+ month + '/'+ day);

  var randomNumber = Math.floor(Math.random() * 100) + 1;
  var randomNumber1 = Math.ceil(Math.random() * 100) + 1;
  console.log(randomNumber+ ' - '+randomNumber1);
});
