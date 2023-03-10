const nettoBrutto = document.getElementById("nettoBrutto");
// const bruttoNetto = document.getElementById("bruttoNetto");
const nineteen = document.getElementById("nineteen");
const seven = document.getElementById("seven");
const inputNumber = document.getElementById("inputNumber");
const result = document.getElementById('result');
const resultMwst = document.getElementById('resultMwst');
const endBetrag = document.getElementById('endBetrag');
const textMwst = document.getElementById('textMwst');

let berechnen = () => {

    if (nettoBrutto.checked == true && nineteen.checked == true) {
        // console.log(inputNumber.value * 1.19 + "€").toFixed(2);
        result.innerHTML = (inputNumber.value * 1.19).toFixed(2).concat("€");
        resultMwst.innerHTML = (inputNumber.value * 0.19).toFixed(2).concat("€");
        endBetrag.innerHTML = ("Bruttobetrag (Endpreis)");
    }
    else if (nettoBrutto.checked == false && nineteen.checked == true) {
        result.innerHTML = (inputNumber.value / 1.19).toFixed(2).concat("€");
        resultMwst.innerHTML = (inputNumber.value / 1.19 * 0.19).toFixed(2).concat("€");
        endBetrag.innerHTML = ("Nettobetrag");
    }
    else if (nettoBrutto.checked == true && seven.checked == true) {
        result.innerHTML = (inputNumber.value * 1.07).toFixed(2).concat("€");
        resultMwst.innerHTML = (inputNumber.value * 0.07).toFixed(2).concat("€");
        endBetrag.innerHTML = ("Bruttobetrag (Endpreis)");
    }
    else if (nettoBrutto.checked == false && seven.checked == true) {
        result.innerHTML = (inputNumber.value / 1.07).toFixed(2).concat("€");
        resultMwst.innerHTML = (inputNumber.value / 1.07 * 0.07).toFixed(2).concat("€");
        endBetrag.innerHTML = ("Nettobetrag");
    }
}

let text = () => {
    if (nettoBrutto.checked == true) {
        textMwst.innerHTML = ("Nettobetrag (Preis ohne Mehrwertsteuer) in Euro");
    } else {
        textMwst.innerHTML = ("Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro");
    }
}
