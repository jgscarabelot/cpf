function verificarCartaoCredito(cartao) {
    cartao = cartao.replace(/\s+/g, '');
    if (!/^\d+$/.test(cartao)) {
        return false;
    }

    let soma = 0;
    let ehPar = false;
    for (let i = cartao.length - 1; i >= 0; i--) {
        let digito = parseInt(cartao[i]);
        if (ehPar) {
            digito *= 2;
            if (digito > 9) digito -= 9;
        }
        soma += digito;
        ehPar = !ehPar;
    }

    return soma % 10 === 0;
}


const cartao = "1234 5678 9012 3456";
if (verificarCartaoCredito(cartao)) {
    console.log(`O cartão ${cartao} é válido.`);
} else {
    console.log(`O cartão ${cartao} é inválido.`);
}
