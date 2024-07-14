function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
/*
  if(html.classList.contains("light")){
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
*/
 const img = document.querySelector("#profile img")
 if(html.classList.contains("light")) {
  img.setAttribute("src", "./assets/avatar-light.png")
 } else {
  img.setAttribute("src", "./assets/avatar.png")
 }
 if(html.classList.contains("light")) {
  img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos escuro e jaqueta preta e um fundo azul e roxo")
 } else {
  img.setAttribute(
    "alt", "Foto de Mayk Brtito sorrindo, usando óculos e camisa preta, barba e um fundo amarelo"
  )
 }
}
