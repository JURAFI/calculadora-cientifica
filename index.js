const pantalla = document.querySelector("#pantalla");
const btn = document.querySelectorAll(".btn");

for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;
    if (btntext == "x") {
      btntext = "*";
    }
    if (btntext == "÷") {
      btntext = "/";
    }
    pantalla.value += btntext;
  });

  function sin() {
    pantalla.value = Math.sin(pantalla.value);
  }

  function cos() {
    pantalla.value = Math.cos(pantalla.value);
  }
  function tan() {
    pantalla.value = Math.tan(pantalla.value);
  }
  function pow() {
    pantalla.value = Math.pow(pantalla.value, 2);
  }
  function raizCuadrada() {
    pantalla.value = Math.sqrt(pantalla.value, 2);
  }
  function log() {
    pantalla.value = Math.log(pantalla.value);
  }
  function pi() {
    pantalla.value = 3.1415926535897932;
  }
  function e() {
    pantalla.value = 2.71828182845904;
  }
  function fact() {
    let i, num, f;
    f = 1;
    num = pantalla.value;
    for (i = 1; i <= num; i++) {
      f = f * i;
    }
    i = i - 1;
    pantalla.value = f;
  }

  function clearError() {
    pantalla.value = pantalla.value.substr(0, pantalla.value.length - 1);
  }

  function calculoPorcentaje() {
  
    pantalla.value = pantalla.value / 100;

  }
}
