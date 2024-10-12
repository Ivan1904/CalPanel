function calcularAltura() {
    const breakerA1 = parseInt(document.getElementById("breakerA1").value) || 0;
    const breakerA2 = parseInt(document.getElementById("breakerA2").value) || 0;
    const breakerA3 = parseInt(document.getElementById("breakerA3").value) || 0;
    const amperaje = parseInt(document.getElementById("amperajeInput").value);
    const incluirMLO = document.getElementById("mloCheck").checked;

    // Verificar si no se seleccionó ningún breaker
    if (breakerA1 === 0 && breakerA2 === 0 && breakerA3 === 0) {
        alert("Debes seleccionar al menos un breaker.");
        return;
    }

    // Calcular la distancia de los breakers seleccionados con la regla de par/impar
    const alturaBreakersA1 = Math.ceil(breakerA1 / 2) * 3;       // Cada 2 breakers A1 = 3 pulgadas
    const alturaBreakersA2 = Math.ceil(breakerA2 / 2) * 4.125;   // Cada 2 breakers A2 = 4.125 pulgadas
    const alturaBreakersA3 = Math.ceil(breakerA3 / 2) * 5.5;     // Cada 2 breakers A3 = 5.5 pulgadas

    const alturaTotalBreakers = alturaBreakersA1 + alturaBreakersA2 + alturaBreakersA3;

    // Calcular la altura adicional según el amperaje
    let alturaAmperaje = 0;
    if (amperaje <= 200) {
        alturaAmperaje = 12;
    } else if (amperaje <= 250) {
        alturaAmperaje = 12;
    } else if (amperaje <= 300) {
        alturaAmperaje = 14;
    } else if (amperaje <= 350) {
        alturaAmperaje = 15;
    } else if (amperaje <= 400) {
        alturaAmperaje = 16;
    } else if (amperaje <= 600) {
        alturaAmperaje = 20;
    } else if (amperaje <= 800) {
        alturaAmperaje = 24;
    } else if (amperaje <= 1000) {
        alturaAmperaje = 28;
    } else if (amperaje <= 1200) {
        alturaAmperaje = 30;
    } else if (amperaje <= 1400) {
        alturaAmperaje = 36;
    } else if (amperaje <= 1600) {
        alturaAmperaje = 40;
    } else if (amperaje <= 1800) {
        alturaAmperaje = 44;
    } else if (amperaje <= 2000) {
        alturaAmperaje = 44;
    }

    // Sumar la altura de MLO si se incluye (nuevo valor de 5.5 pulgadas)
    let alturaMLO = incluirMLO ? 5.5 : 0;

    // Calcular altura total del panel
    const alturaTotal = alturaTotalBreakers + alturaAmperaje + alturaMLO + 3; // 3 es la distancia de SR (espacio de seguridad)

    // Mostrar el resultado
    document.getElementById("resultado").innerText = `Altura total del panel: ${alturaTotal} pulgadas`;
}