document.getElementById('betaForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue por defecto

    // Captura de datos del formulario
    const datos = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        mensaje: document.getElementById('mensaje').value
    };

    // Imprime en la consola según lo exigido por la guía
    console.log("=== Datos del Formulario Capturados ===");
    console.log(datos);

    // Alerta simulada para el usuario
    alert(`¡Gracias ${datos.nombre}! Tu registro simulado fue exitoso.\nLos datos fueron guardados temporalmente en la consola.`);
    
    // Limpia las casillas del formulario
    document.getElementById('betaForm').reset();
});