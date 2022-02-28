let brdTopLeft = document.getElementById("borderTopLeft");
let brdTopRight = document.getElementById("borderTopRight");
let brdBotLetf = document.getElementById("borderBottomLeft");
let brdBotRight = document.getElementById("borderBottomRight");
let brdPreview = document.getElementById("borderPreview");
let select = document.getElementById("selectoptions");
let option;

select.addEventListener("change", () => {
    option = select.options[select.options.selectedIndex].value;
});

console.log(option);

brdTopLeft.addEventListener("keyup", () => {
console.log(option);

  brdPreview.style.borderTopLeftRadius = `${brdTopLeft.value}${option}`;
});

brdTopRight.addEventListener("keyup", () => {
  brdPreview.style.borderTopRightRadius = `${brdTopRight.value}px`;
});

brdBotRight.addEventListener("keyup", () => {
  brdPreview.style.borderBottomLeftRadius = `${brdBotRight.value}px`;
});

brdBotLetf.addEventListener("keyup", () => {
  brdPreview.style.borderBottomRightRadius = `${brdBotLetf.value}px`;
});
