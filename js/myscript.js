'use strict'
window.addEventListener('load', function(){
  console.log('DOM loaded');

 var form = document.querySelector('#formulario');
 form.addEventListener('submit',function(){
   console.log('Event submit the of form loaded');

   var name = document.querySelector('#nombre').value;
   var lastname = document.querySelector('#apellido').value;
   var age = parseInt(document.querySelector('#edad').value);

   if ((name.trim().length == 0 ) || (name.trim() == null)) {
     let m = document.querySelector('#errorname');
     let texto = 'The name is not valid';
     m.append(texto);
     return false;
   }

   if ((lastname.trim().length == 0) || (lastname.trim() == null)) {
     let m = document.querySelector('#errorlastname');
     let texto = 'The last name is not valid';
     m.append(texto);
     return false;
   }

   if ((isNaN(age)) || (age<=0) || (age > 130)) {
     let m = document.querySelector('#errorage');
     let texto = 'The age is not valid';
     m.append(texto);
     return false;
   }

   function showDataForm(){
     var div = document.querySelector('#data');
     div.className = "box dashed";
     var h4 = document.createElement('h4');
     var textoH4 = 'Informacion';
     h4.append(textoH4);
     div.append(h4);
     var hr = document.createElement('hr');
     div.append(hr);
     var data = [name, lastname, age];
     var index;
     var ul = document.createElement('ul');
     for(index in data){
        var li = document.createElement('li');
        var d = data[index];
        li.append(d);
        ul.append(li);
     }
     div.append(ul);
     div.height = div.height + '250px';
   }

   showDataForm();
  });
var inputname = document.querySelector('#nombre');
 inputname.addEventListener('focus',function(){
   let span =  document.querySelector('#errorname');
    span.innerHTML = '';
 });

 var inputlastname = document.querySelector('#apellido');
  inputlastname.addEventListener('focus',function(){
    let span =  document.querySelector('#errorlastname');
     span.innerHTML = '';
  });

  var inputage = document.querySelector('#edad');
   inputage.addEventListener('focus',function(){
     let span =  document.querySelector('#errorage');
      span.innerHTML = '';
   });

});
