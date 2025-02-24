function calcularDigitosCNPJ(cnpjParcial) {
    
    const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma1 = 0;
    for (let i = 0; i < 12; i++) {
        soma1 += parseInt(cnpjParcial[i]) * pesos1[i];
    }
    let resto1 = soma1 % 11;
    let digito1 = resto1 < 2 ? 0 : 11 - resto1;

    
    const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma2 = 0;
    for (let i = 0; i < 12; i++) {
        soma2 += parseInt(cnpjParcial[i]) * pesos2[i];
    }
    soma2 += digito1 * 2;
    let resto2 = soma2 % 11;
    let digito2 = resto2 < 2 ? 0 : 11 - resto2;

    return `${digito1}${digito2}`;
}

function gerarCNPJ() {
    let cnpjParcial = '';
    for (let i = 0; i < 12; i++) {
        cnpjParcial += Math.floor(Math.random() * 10);
    }
    let digitosVerificadores = calcularDigitosCNPJ(cnpjParcial);
    return cnpjParcial + digitosVerificadores;
}
const cnpj = gerarCNPJ();
console.log(`O CNPJ gerado é: ${cnpj}`);

