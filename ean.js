function calculaDigitoVerificador(codigo) {
    let soma = 0;
    for (let i = 0; i < 12; i++) {
        if (i % 2 === 0) {
            soma += parseInt(codigo[i]) * 1; 
        } else {
            soma += parseInt(codigo[i]) * 3; 
        }
    }
    let digito = (10 - (soma % 10)) % 10; 
    return digito;
}

function validaEAN13(codigo) {
    if (codigo.length !== 13) {
        return 'Código de Barras Inválido';
    }

    let digitoVerificadorCalculado = calculaDigitoVerificador(codigo);

    if (digitoVerificadorCalculado !== parseInt(codigo[12])) {
        return 'Código de Barras Inválido';
    }

    
    let pais = codigo.slice(0, 3);
    let fabricante = codigo.slice(3, 7);
    let produto = codigo.slice(7, 12);

    return `Cód. País: ${pais}, Fabricante: ${fabricante}, Produto: ${produto}`;
}

let codigoBarras = "789654123987";
console.log(validaEAN13(codigoBarras));