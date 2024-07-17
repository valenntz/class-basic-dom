//querySelector, nos ayuda a seleccionar este elemento en específico
//querySelectroAll, nos ayuda a seleccionar todos los elementos de ese elemento en específico. Por ejemplo: p, se le pone a todos los p

// const h1 = document.querySelector('h1');
// const pid = document.getElementById('pid');
// const prueba = document.getElementsByClassName('.prueba');
// const input = document.querySelector('input');

// console.log({
// h1,
// pid,
// prueba,
// input,
// });

// //El innerText es cúnicamente para poner texto

// //El innerHTML nos permite editar html desde Java Script
// h1.innerHTML = 'Patito';
// //El getAttribute lee 
// console.log(h1.getAttribute('class'));
// // El setAttribute puede cambiar el html
// h1.setAttribute('class', 'challenger');

// // .add nos agrega
// h1.classList.add('rojo');
// // .remove nos elimina
// h1.classList.remove('verde');
// //podemos cambiar valores al value
// input.value="234"

// const img = document.createElement('img');
// img.setAttribute('src', 'https://laud.udistrital.edu.co/sites/default/files/imagen-noticia/2022-03/LAUD%20Studio%20Ghilbi.jpeg')
// console.log(img)

// pid.appendChild(img);

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

function buttonCalcular()  {
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}