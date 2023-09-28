// Función para calcular el descuento
function calcularDescuento() {
    // Obtener el valor ingresado por el usuario
    var monto = parseFloat(document.getElementById("montoInput").value);

    // Verificar si el monto es mayor o igual a 100
    if (monto >= 100) {
        // Calcular el descuento del 10%
        var descuento = monto * 0.10;
    } else {
        // Calcular el descuento del 2%
        var descuento = monto * 0.02;
    }

    // Mostrar el descuento en la página
    document.getElementById("descuento").textContent = descuento.toFixed(2) + " (USD)";
}
