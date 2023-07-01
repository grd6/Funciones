/* function pintar(){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
    }
    ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar); */

pintar = function (color = "green") {
  ele = document.querySelector("P");
  ele.style.backgroundColor = color;
};

ele = document.querySelector("P");
ele.style.backgroundColor = "green";

ele.addEventListener("click", function () {
  pintar("yellow");
});
