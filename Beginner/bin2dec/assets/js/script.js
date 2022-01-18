let bin_number = document.getElementById("binNumber");
let dec_number = document.getElementById("decNumber");
let btn_convert = document.getElementById("btnConvert");
let btn_clear = document.getElementById('btnClear');


btn_convert.addEventListener("click", () => {
    convertBinToDec(bin_number.value);
});

btn_clear.addEventListener("click", () => {
    bin_number.value = null;
    dec_number.value = null;
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
