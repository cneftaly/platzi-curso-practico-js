 const lista1 = [
     500,
     100,
     400000000,
     200
 ];

function calcularMediana(lista) {
    lista.sort(function (firstEl, secondEl) {
        return firstEl - secondEl;
    });

    const mitadLista = parseInt(lista.length / 2);

    let mediana;

    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        mediana = (elemento1 + elemento2) / 2;
    } else {
        mediana = lista[mitadLista];
    }

    return mediana;
}

function esPar(numero) {
    if(numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}