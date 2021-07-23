const cupones = [
    {
        nombre: "SAVE10",
        descuento: 10
    },
    {
        nombre: "SAVE20",
        descuento: 20
    },
    {
        nombre: "SAVE30",
        descuento: 30
    }
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

function onClicButtonPriceDiscount() {
    const precio = document.getElementById("InputPrice").value;
    const cupon = document.getElementById("DiscountCoupon").value;

    const esCuponValido = function(descuento) {
        return descuento.nombre === cupon;
    }

    const cuponValido = cupones.find(esCuponValido);

    if(!cuponValido) {
        alert("El cupón " + cupon + " no es válido")
    } else {
        const descuento = cuponValido.descuento;
        const precioConDescuento = calcularPrecioConDescuento(precio, descuento);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento es $" + precioConDescuento;
    }
}
