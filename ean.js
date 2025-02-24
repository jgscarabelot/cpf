function calcularDigitoVerificadorEAN13(codigo) {
    let soma = 0;
    for (let i = 0; i < 12; i++) {
        soma += parseInt(codigo[i]) * (i % 2 === 0 ? 1 : 3);
    }
    let resto = soma % 10;
    return resto === 0 ? 0 : 10 - resto;
}

function validarEAN13(codigo) {
    codigo = codigo.replace(/-/g, ''); 
    if (codigo.length !== 13 || !/^\d+$/.test(codigo)) {
        return false;
    }
    let digitoCalculado = calcularDigitoVerificadorEAN13(codigo.slice(0, 12));
    return parseInt(codigo[12]) === digitoCalculado;
}


const codigoBarras = "123456789012";
if (validarEAN13(codigoBarras + calcularDigitoVerificadorEAN13(codigoBarras))) {
    console.log(`O código de barras ${codigoBarras} é válido.`);
} else {
    console.log(`O código de barras ${codigoBarras} é inválido.`);
}