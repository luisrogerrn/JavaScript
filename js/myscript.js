'use strict'
window.addEventListener('load', function(){
  console.log('DOM loaded');

 var form = document.querySelector('#formulario');
 form.addEventListener('submit',function(){
   console.log('Event submit the of form loaded');

   var name = document.querySelector('#nombre');
   var lastname = document.querySelector('#apellido');
   var age = document.querySelector('#edad');

   function showDataForm(){
     var div = document.querySelector('#data');
     console.log(div);
     div.className = "box dashed";
     var h4 = document.createElement('h4');
     var textoH4 = 'Informacion';
     h4.append(textoH4);
     div.append(h4);
     var hr = document.createElement('hr');
     div.append(hr);
     var data = [name.value, lastname.value, age.value];
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

});
