document.getElementById('piloteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var diametro = parseFloat(document.getElementById('diametro').value);
    var longitud = parseFloat(document.getElementById('longitud').value);
    var producto = ((Math.pow((diametro/100),2)*Math.PI/4)*longitud*2400)/3;
    var mensaje;

    // Determinar qué tipo de pilote usar basado en el producto
    if (producto < 1200) {
        mensaje = 'Se usará D12';
    } else if (producto >= 1200 && producto < 2200) {
        mensaje = 'Se usará martillo Delmag D22';
    } else if (producto >= 2200 && producto < 3200) {
        mensaje = 'Se usará martillo Delmag D32';
    } else if (producto >= 3200 && producto < 4200) {
        mensaje = 'Se usará martillo Delmag D42';
    } else if (producto >= 4200 && producto < 5200) {
        mensaje = 'Se usará martillo Delmag D52';
    } else if (producto >= 5200 && producto < 6200) {
        mensaje = 'Se usará martillo Delmag D62';
    } else {
        mensaje = 'Consulte al proveedor Delmag por nuevos martillos para este cálculo';
    }

    // Mostrar el resultado y el tipo de pilote a usar
    document.getElementById('resultado').innerHTML = 'El resultado es: ' + producto.toFixed(3) + '. ' + mensaje;
});




