// Código del cuadrado

// Perímetro
function perimetroCuadrado(lado) {
    return lado * 4;
}

// Área
function areaCuadrado(lado) {
    return lado * lado;
}


// Código del triángulo

// Perímetro
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// Área
function areaTriangulo(base, altura) {
    return (base * altura ) / 2;
}


// Código del círculo

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
} 

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
} 

// Área
function areaCirculo(radio) {
    return PI * (radio ** 2);
}