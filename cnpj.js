function calculoCNPJ(contador, cnpjSodigitos) {
    let soma = 0;
    let multiplicadores = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    
    for (let i = 0; i < contador; i++) {
        soma += cnpjSodigitos[i] * multiplicadores[i + (contador - 1)];
    }
    
    let resultado = soma % 11;
    if (resultado < 2) {
        return 0;
    } else {
        return 11 - resultado;
    }
}

function geraCNPJ() {
    let cnpjSodigitos = [];
    for (let i = 0; i < 8; i++) {
        cnpjSodigitos.push(Math.floor(Math.random() * 10));
    }

    let primeiroDigito = calculoCNPJ(9, cnpjSodigitos);  
    let segundoDigito = calculoCNPJ(10, [...cnpjSodigitos, primeiroDigito]); 
    cnpjSodigitos.push(primeiroDigito, segundoDigito);  
    
    let cnpjFormatado = cnpjSodigitos.slice(0, 8).join(''); 
    let cnpjComposto = `${cnpjFormatado.slice(0, 2)}.${cnpjFormatado.slice(2, 5)}.${cnpjFormatado.slice(5, 8)}/0001-`;
    cnpjComposto += `${cnpjSodigitos[8]}${cnpjSodigitos[9]}`; 
    return cnpjComposto;
}

console.log(geraCNPJ());
