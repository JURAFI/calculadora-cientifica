const pantalla = document.querySelector('#pantalla')
const btn = document.querySelectorAll('.btn')

for(item of btn) {
 item.addEventListener('click', (e) => {
  btntexto = e.target.innerText
  if (btntext == 'x') {
   btntext = '*'
  }
  pantalla.value+=btntext
 })
}