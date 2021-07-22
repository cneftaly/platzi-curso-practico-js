// CUADRADO

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}


// TRIANGULO

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura ) / 2;
}


// CIRCULO

function diametroCirculo(radio) {
    return radio * 2;
} 

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
} 

function areaCirculo(radio) {
    return Math.PI * (radio ** 2);
}


// FUNCIONES PARA EL HTML
// CUADRADO
function CalcularPerimetroCuadrado() {
    const valor = document.getElementById("InputCuadrado").value;

    const perimetro = perimetroCuadrado(valor);

    alert(perimetro);
}

function CalcularAreaCuadrado() {
    const valor = document.getElementById("InputCuadrado").value;

    const area = areaCuadrado(valor);

    alert(area);
}

// TRIANGULO
function CalcularPerimetroTriangulo() {
    const lado1 = document.getElementById("Lado1Triangulo").value;
    const lado2 = document.getElementById("Lado2Triangulo").value;
    const base = document.getElementById("BaseTriangulo").value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);

    alert(perimetro);
}

function CalcularAreaTriangulo() {
    const base = document.getElementById("BaseTriangulo").value;
    const altura = document.getElementById("AlturaTriangulo").value;

    const area = areaTriangulo(base, altura);

    alert(area);
}

// CIRCULO
function CalcularPerimetroCirculo() {
    const radio = document.getElementById("RadioCirculo").value;

    const perimetro = perimetroCirculo(radio);

    alert(perimetro);
}

function CalcularAreaCirculo() {
    const radio = document.getElementById("RadioCirculo").value;

    const area = areaCirculo(radio);

    alert(area);
}

function calcularAlturaIsoceles(lado1, lado2, base) {
    if (lado1 != lado2) {
        alert("Los lados no son iguales");
        return;
    }

    const previo = (lado1 ** 2) - ((base / 2) ** 2);

    return Math.sqrt(previo);
}