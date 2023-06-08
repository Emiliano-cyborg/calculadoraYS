const displayValAnterior = document.getElementById('val-anterior');
const displayValActual = document.getElementById('val-actual');
const botonesNumero = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValAnterior, displayValActual);


botonesNumero.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
})