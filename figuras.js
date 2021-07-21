// Código del cuadrado
console.group("Cuadrado")

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");

// Perímetro
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + " cms");

// Área
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + " cms^2");
console.groupEnd();


// Código del triángulo
console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5;

console.log("Los lados del triángulo miden: " + 
    ladoTriangulo1 + " cms, " + 
    ladoTriangulo2 + " cms, " + 
    baseTriangulo + "cms.");
console.log("La altura del triángulo mide: " + alturaTriangulo + " cms");

// Perímetro
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo mide: " + perimetroTriangulo + " cms");

// Área
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo mide: " + areaTriangulo + " cms^2");
console.groupEnd();


// Código del círculo
console.group("Círculo");

// Radio
const radioCirculo = 4;
console.log("El radio del círculo es " + radioCirculo + " cms.");

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es " + diametroCirculo + " cms.");

// PI
const PI = Math.PI;
console.log("PI es " + PI + ".");

// Perímetro
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es " + perimetroCirculo + " cms.");

// Área
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El área del círculo es " + areaCirculo + " cms.");
console.groupEnd();