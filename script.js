function mostrarCero(){
  document.getElementById('pantalla').value = '0';
  
}

 function mostrar(valor){
  
   const pantalla  = document.getElementById('pantalla');
  
   if (pantalla.value === '0') {pantalla.value = valor;}
  
   else{
        pantalla.value += valor; 
   }
 }

function borrar(){
  document.getElementById('pantalla').value = null
}

function calcular(){
   const valorPantalla = document.getElementById('pantalla').value
   const resultado = eval(valorPantalla)
   document.getElementById('pantalla').value = resultado
}



