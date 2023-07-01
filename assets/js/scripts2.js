const azul = document.querySelector("#div-1");
const rojo = document.querySelector("#div-2");
const verde = document.querySelector("#div-3");
const amarillo = document.querySelector("#div-4");
const color = document.querySelector("#key");

const cambiar = (e) => {
  e.target.style.backgroundColor = "black";
};
function agregar(color) {
  const elemento = document.createElement("div");
  elemento.style.width = "200px";
  elemento.style.height = "200px";
  elemento.style.border = "solid 1px";
  elemento.style.backgroundColor = color;
  document.body.appendChild(elemento);
}
azul.addEventListener("click", cambiar);
rojo.addEventListener("click", cambiar);
verde.addEventListener("click", cambiar);
amarillo.addEventListener("click", cambiar);

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color.style.backgroundColor = "purple";
    console.log(event.key);
  } else if (event.key === "s") {
    color.style.backgroundColor = "gray";
    console.log(event.key);
  } else if (event.key === "q") {
    agregar("#32E8E2");
    console.log(event.key);
  } else if (event.key === "w") {
    agregar("#E89232 ");
    console.log(event.key);
  } else if (event.key === "e") {
    agregar("#8C4E08");
    console.log(event.key);
  }
});
