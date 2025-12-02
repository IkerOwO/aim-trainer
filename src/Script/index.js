var puntos = 0;
const target = document.getElementById("target");
const targetmini = document.getElementById("targetmini");
const puntosH3 = document.getElementById("puntosH3");
const body = document.body;
const title = document.getElementById("title");
const darkModeBtn = document.getElementById("darkModeBtn");

// TOP BUTTONS
document.getElementById('close').addEventListener('click', () => {
    window.electronAPI.cerrarApp();
});

document.getElementById('minimize').addEventListener('click', () => {
    window.electronAPI.minimizarApp();
});

function init(){
    puntosH3.innerHTML = `Puntos: ${puntos}`;
}

// MOVIMIENTO DE LOS TARGETS
function mover(){
    // NUMEROS RANDOM PARA LAS DIRECCIONES
    const izq = Math.floor(Math.random()*900);
    const sup = Math.floor(Math.random()*400) + 70; // Adjusted to prevent overlap with header
    const izqMini = Math.floor(Math.random()*900);
    const supMini = Math.floor(Math.random()*400) + 70; // Adjusted to prevent overlap with header
    // DECLARACIÓN DE LOS ESTILOS 
    target.style.left = izq + "px";
    target.style.top = sup + "px";
    targetmini.style.left = (izqMini + 150) + "px";
    targetmini.style.top = (supMini + 150) + "px";
    // PARA QUE SE REPITA EL OBJETO
    target.style.display = 'block';
    targetmini.style.display = 'block';
    // TEMPORIZADOR PARA EL MOVIMIENTO
    setTimeout(mover, 800);
}

function hitTarget(){
    // AL HACER CLICK EN EL TARGET
    target.style.display = 'none';
    // HACER SONIDO AL HACER CLICK
    var audio = new Audio('../public/sounds/hit.m4a');
    audio.play();
    // SUMAR PUNTOS
    puntos++;
    puntosH3.innerHTML = `Puntos: ${puntos}`;
}

function hitTargetMini(){
    // AL HACER CLICK EN EL TARGET
    targetmini.style.display = 'none';
    // HACER SONIDO AL HACER CLICK
    var audio = new Audio('../public/sounds/hit.m4a');
    audio.play();
    // SUMAR PUNTOS
    puntos++;
    puntosH3.innerHTML = `Puntos: ${puntos}`;
}

// DARK / LIGHT MODE
function toggleDarkMode() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        // DARK MODE STYLES
        darkModeBtn.addEventListener('mouseover', () => {
            darkModeBtn.style.transition = "200ms all ease-in";
            darkModeBtn.style.backgroundColor = "rgb(128, 245, 144)";
        });
        darkModeBtn.addEventListener('mouseout', () => {
            darkModeBtn.style.backgroundColor = "#fff";
            darkModeBtn.style.color = "#fff";
        });
        body.style.backgroundColor = "#555";
        title.style.color = "white";
        puntosH3.style.color = "aqua";
    } else {
        // LIGHT MODE STYLES
        darkModeBtn.addEventListener('mouseover', () => {
            darkModeBtn.style.transition = "200ms all ease-in";
            darkModeBtn.style.backgroundColor = "rgb(128, 245, 144)";
        });
        darkModeBtn.addEventListener('mouseout', () => {
            darkModeBtn.style.backgroundColor = "#fff";
            darkModeBtn.style.color = "#000";
        });
        body.style.backgroundColor = "#fff";
        title.style.color = "black";
        puntosH3.style.color = "green";
    }
}
