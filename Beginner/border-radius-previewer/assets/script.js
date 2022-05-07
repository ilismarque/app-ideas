const brdTopLeft = document.getElementById("borderTopLeft");
const brdTopRight = document.getElementById("borderTopRight");
const brdBotLetf = document.getElementById("borderBottomLeft");
const brdBotRight = document.getElementById("borderBottomRight");
const brdPreview = document.getElementById("borderPreview");
const cssCode = document.getElementById("cssCode");
const btnCopyCode = document.getElementById("btnCopyCode");
const btnClearClipBoard = document.getElementById("btnClearClipBoard");

const borders = {
  'border-top-left-radius': null,
  'border-top-right-radius': null,
  'border-bottom-right-radius': null,
  'border-bottom-left-radius': null
}


brdTopLeft.addEventListener("keyup", () => {
  let value = brdTopLeft.value > 0 ? brdTopLeft.value : 0;
  brdPreview.style.borderTopLeftRadius = `${value}px`;
  borders['border-top-left-radius'] = value;
  displayCssResult();
});

brdTopRight.addEventListener("keyup", () => {
  let value = brdTopRight.value > 0 ? brdTopRight.value : 0;
  brdPreview.style.borderTopRightRadius = `${value}px`;
  borders['border-top-right-radius'] = value;
  displayCssResult();
});

brdBotRight.addEventListener("keyup", () => {
  let value = brdBotRight.value > 0 ? brdBotRight.value : 0;
  brdPreview.style.borderBottomRightRadius = `${value}px`;
  borders['border-bottom-right-radius'] = value;
  displayCssResult();
});

brdBotLetf.addEventListener("keyup", () => {
  let value = brdBotLetf.value > 0 ? brdBotLetf.value : 0;
  brdPreview.style.borderBottomLeftRadius = `${value}px`;
  borders['border-bottom-left-radius'] = value;
  displayCssResult();
});

function displayCssResult() {
  cssCode.innerText = '';
  let count = 0;
  for (const key in borders) {
    if (borders[key]) {
      cssCode.innerText += `${key}: ${borders[key]}px;\n`;
      count++;
    }
  }
  changeButtonsState(count);
}

function changeButtonsState(count) {
  if (count) {
    btnCopyCode.removeAttribute('disabled');
    btnClearClipBoard.removeAttribute('disabled');
  } else {
    btnCopyCode.setAttribute('disabled', 'disabled');
    btnClearClipBoard.setAttribute('disabled', 'disabled');
  }
}

//Adapted from https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

function copyCode() {
  const copyText = document.getElementById("cssCode");
  navigator.clipboard.writeText(copyText.outerText);

  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "<i class='fa fa-check-circle'></i> Copied";
}

function outFunc() {
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

function clearBorders() {
  cssCode.innerText = '';

  const inputs = document.getElementsByClassName('borderInput');

  for (const key in inputs) {
    inputs[key].value = '';
  }

  brdPreview.style.borderRadius = '0px';
  changeButtonsState(null);
}