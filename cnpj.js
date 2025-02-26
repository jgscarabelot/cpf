let cnpj = ''

function gerarcnpjoto(){
    cnpj = ''
    for(let i = 0; i < 8; i++){
        cnpj += Math.floor(Math.random()* 9)+ 1;
    }
    cnpj += '0001';
}
function verificarprimeironumero() {
    let multiplicadores1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma = 0;

    for (let i = 0; i < 12; i++) {
        soma += parseInt(cnpj[i]) * multiplicadores1[i];
    }
    let resto = soma % 11
    let primeironumero = (resto < 2) ? 0 : 11 - resto;
    return primeironumero;
}


function verificarsegundonumero() {
    let multiplicadores2 = [6,5,4,3,2,9,8,7,6,5,4,3,2];
    let soma = 0;
    for (let i = 0; i < 13; i++) {
        soma += parseInt(cnpj[i]) * multiplicadores2[i];
    }
    let resto = soma % 11
    let segundonumero = (resto < 2) ? 0 : 11 - resto;
    return segundonumero;
}
gerarcnpjoto();
let primeironumero = verificarprimeironumero()
cnpj += primeironumero;
let segundonumero = verificarsegundonumero()
cnpj += segundonumero;
console.log(cnpj)