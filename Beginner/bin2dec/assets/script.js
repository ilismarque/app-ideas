let bin_number = document.getElementById("binNumber");
let dec_number = document.getElementById("decNumber");
let btn_convert = document.getElementById("btnConvert");
let btn_clear = document.getElementById("btnClear");
let div = document.getElementById("bin2dec");

let error_message = document.createElement("span");
error_message.textContent = 'Apenas 0 e 1 podem ser digitados';
error_message.classList.add('errorMessage');

bin_number.addEventListener('keypress', (event) => {
    if (!event.key.match("[01]")) {
        event.preventDefault();
        showErrorMessage();
        btn_convert.setAttribute('disabled', 'disabled');
    } else {
        hideErrorMessage();
        btn_convert.removeAttribute('disabled');
    }
});

function showErrorMessage() {
    div.insertBefore(error_message, btn_convert);
}

function hideErrorMessage() {
    div.removeChild(error_message);
}

btn_convert.addEventListener("click", () => {
    convertBinToDec(bin_number.value);
});

btn_clear.addEventListener("click", () => {
    bin_number.value = null;
    dec_number.value = null;
    btn_convert.setAttribute('disabled', 'disabled');

});

function convertBinToDec(binary) {

    //How to convert
    //http://marco.uminho.pt/~joao/Computacao2/node6.html

    let sum = 0;
    let i = binary.length - 1;

    for (let index = 0; index <= binary.length - 1; index++) {
        sum += binary[index] * (2 ** i);
        i--;
    }
    dec_number.value = sum;
}
