function calcularDigitoVerificador(codigo) {
    let soma = 0;

    for (let i = 0; i < 12; i++) {
        let digito = Number(codigo[i]);
        if (i % 2 === 0) {
            soma += digito * 1;
        } else { 
            soma += digito * 3;
        }
    }

    let resto = soma % 10;
    let digitoVerificador = resto === 0 ? 0 : 10 - resto;

    return digitoVerificador;
}

function extrairInformacoes(codigo) {
    if (codigo.length !== 13) {
        console.log("Deve ter 13 dígitos.");
 return;
    }

    let codigoBase = codigo.slice(0, 12);
    let digitoVerificador = Number(codigo[12]);

    let digitoCalculado = calcularDigitoVerificador(codigoBase);

    if (digitoCalculado !== digitoVerificador) {
        console.log("inválido.");
        return;
    }

    let pais = codigo.slice(0, 3);
    let fabricante = codigo.slice(3, 7);
    let produto = codigo.slice(7, 12);

    console.log("Código: " + codigoBase);
    console.log("Dígito verificador: " + digitoVerificador);
    console.log("Dígito verificador calculado: " + digitoCalculado);
    console.log("País: " + pais);
    console.log("fabricante: " + fabricante);
    console.log("Código do produto: " + produto);
}

let codigoDeBarras = "4006381333931"; 
extrairInformacoes(codigoDeBarras);