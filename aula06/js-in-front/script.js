const actionButton = document.getElementById("action")
const lista = document.getElementById("lista")

actionButton.addEventListener("click", () => {
  const novoItem = document.createElement("li")
  novoItem.innerHTML = `Item ${lista.children.length + 1}`
  lista.appendChild(novoItem)
})