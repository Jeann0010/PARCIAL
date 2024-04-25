var viajes = [
    { duracion: '2 horas', 
    fecha: '2024-04-20', 
    origen: 'Peru', 
    destino: 'Canada', 
    conductor: 'Juan' },
    { duracion: '3 horas', 
    fecha: '2024-04-18', 
    origen: 'Suecia', 
    destino: 'Brasil', 
    conductor: 'Juan' },
    { duracion: '1 hora', 
    fecha: '2024-04-16', 
    origen: 'Peru', 
    destino: 'Argentina', 
    conductor: 'Pedro' },
    { duracion: '4 horas', 
    fecha: '2024-04-14', 
    origen: 'Peru', 
    destino: 'España', 
    conductor: 'Juan' },
    { duracion: '2.5 horas', 
    fecha: '2024-04-12', 
    origen: 'Lima', 
    destino: 'Trujillo', 
    conductor: 'Luis' },
    { duracion: '2 horas', 
    fecha: '2024-04-10', 
    origen: 'Lima', 
    destino: 'Cajamarca', 
    conductor: 'Juan' },
    { duracion: '3.5 horas', 
    fecha: '2024-04-08', 
    origen: 'Lima', 
    destino: 'Chiclayo', 
    conductor: 'Carlos' },
    { duracion: '2 horas', 
    fecha: '2024-04-06', 
    origen: 'Lima', 
    destino: 'Piura', 
    conductor: 'Juan' },
    { duracion: '2.5 horas', 
    fecha: '2024-04-04', 
    origen: 'Canada', 
    destino: 'Francia', 
    conductor: 'Sergio' },
    { duracion: '1.5 horas',
     fecha: '2024-04-02',
      origen: 'Rio de janeiro', 
      destino: 'Quito',
       conductor: 'Juan' }
];

document.getElementById('ultimos4Btn').addEventListener('click', mostrarUltimos4Viajes);
document.getElementById('verMasBtn').addEventListener('click', mostrarTodosLosViajes);

function mostrarUltimos4Viajes() {
    limpiarResultado();
    var ultimos4 = viajes.slice(0, 4);
    mostrarViajes(ultimos4);
}

function mostrarTodosLosViajes() {
    limpiarResultado();
    mostrarViajes(viajes);
}

function mostrarViajes(listaViajes) {
    var resultadoHTML = '<h2>Listado de Viajes</h2>';
    resultadoHTML += '<ul>';
    listaViajes.forEach(function(viaje) {
        resultadoHTML += '<li>';
        resultadoHTML += '<strong>Fecha:</strong> ' + viaje.fecha + ', ';
        resultadoHTML += '<strong>Duración:</strong> ' + viaje.duracion + ', ';
        resultadoHTML += '<strong>Origen:</strong> ' + viaje.origen + ', ';
        resultadoHTML += '<strong>Destino:</strong> ' + viaje.destino + ', ';
        resultadoHTML += '<strong>Conductor:</strong> ' + viaje.conductor;
        resultadoHTML += '</li>';
    });
    resultadoHTML += '</ul>';
    document.getElementById('resultado').innerHTML = resultadoHTML;
}

function limpiarResultado() {
    document.getElementById('resultado').innerHTML = '';
}
