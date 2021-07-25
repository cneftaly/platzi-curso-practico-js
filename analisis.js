function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    
    if (esPar(lista.length)) {
        const personaMitdad1 = lista[mitad - 1];
        const personaMitdad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitdad1, personaMitdad2]);
        return mediana;
    } else {
        const personaMitdad = lista[mitad];
        return personaMitdad;
    }
}

const salariosMexico = mexico.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosMexicoSorted = salariosMexico.sort(
    function(salarioA, salarioB) {
        return salarioA - salarioB;
    }
);


const medianaGeneralMexico = medianaSalarios(salariosMexicoSorted);

const spliceStart = (salariosMexicoSorted.length * 90) / 100;
const spliceCount = salariosMexicoSorted.length - spliceStart;

const salariosMexicoTop10 = salariosMexicoSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Mexico = medianaSalarios(salariosMexicoTop10);

console.log(
    medianaGeneralMexico,
    medianaTop10Mexico
);