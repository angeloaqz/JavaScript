function contar() {
    let inicio = document.getElementById("txti").value;
    let fim = document.getElementById("txtf").value;
    let passo = document.getElementById("txtp").value;
    let res = document.getElementById("res");

    if (inicio == "" || fim == "" || passo == "") {
        //alert("Faltam dados!");
        res.innerHTML = "Impossível contar!";
        
        return;
    }

    inicio = parseFloat(inicio);
    fim = parseFloat(fim);
    passo = parseFloat(passo);

    if (passo <= 0) {
        alert("Passo inválido! Considerando passo 1");
        passo = 1;
    }

    res.innerHTML = "Contando: <br>";

    if (inicio < fim) {
        for (let c = inicio; c <= fim; c += passo) {
            res.innerHTML += `${c} \u{1F449}`;
        }
    } else {
        for (let c = inicio; c >= fim; c -= passo) {
            res.innerHTML += `${c} \u{1F449}`;
        }
    }
    res.innerHTML += `\u{1F3C1}`;
}
