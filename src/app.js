import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

function generarCartaAleatoria() {

  let simbolos = ['♦', '♥', '♠', '♣'];
  let valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let simbolo = simbolos[Math.floor(Math.random() * simbolos.length)];
  let valor = valores[Math.floor(Math.random() * valores.length)];

const carta = document.querySelector('#card');
      carta.innerHTML = `
        <div class="arriba">${simbolo}</div>
        <div class="centro">${valor}</div>
        <div class="abajo">${simbolo}</div>
      `;
      carta.style.color = (simbolo === '♥' || simbolo === '♦') ? 'red' : 'black';
    };

generarCartaAleatoria();


}