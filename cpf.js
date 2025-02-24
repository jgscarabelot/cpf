function calcularDigitosVerificadores(cpfParcial) {
   
    let soma1 = 0;
    for (let i = 0; i < 9; i++) {
        soma1 += parseInt(cpfParcial[i]) * (10 - i);
    }
    let resto1 = soma1 % 11;
    let digito1 = resto1 < 2 ? 0 : 11 - resto1;

    
    let soma2 = 0;
    for (let i = 0; i < 9; i++) {
        soma2 += parseInt(cpfParcial[i]) * (11 - i);
    }
    soma2 += digito1 * 2;
    let resto2 = soma2 % 11;
    let digito2 = resto2 < 2 ? 0 : 11 - resto2;

    return `${digito1}${digito2}`;
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); 
    if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
        return false;
    }

    let cpfParcial = cpf.slice(0, 9);
    let digitosCalculados = calcularDigitosVerificadores(cpfParcial);

    return cpf.slice(-2) === digitosCalculados;
}
const cpf = "123.456.789-09";
if (validarCPF(cpf)) {
    console.log(`O CPF ${cpf} é válido.`);
} else {
    console.log(`O CPF ${cpf} é inválido.`);
}

