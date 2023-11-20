function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se for light mode, adicionar a imagem "light"
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos, camisa preta e barba, num fundo amarelo"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuros e jaqueta de couro preta, num fundo azul"
    )
  }
}
