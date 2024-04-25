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

// Objeto para almacenar la cantidad de viajes por conductor
var viajesPorConductor = {};

// Calcular la cantidad de viajes por conductor
viajes.forEach(function(viaje) {
    if (viaje.conductor in viajesPorConductor) {
        viajesPorConductor[viaje.conductor]++;
    } else {
        viajesPorConductor[viaje.conductor] = 1;
    }
});

// Convertir el objeto a un array de objetos para facilitar la manipulación
var viajesPorConductorArray = [];
for (var conductor in viajesPorConductor) {
    viajesPorConductorArray.push({ conductor: conductor, viajes: viajesPorConductor[conductor] });
}

// Ordenar el array por la cantidad de viajes de forma descendente
viajesPorConductorArray.sort((a, b) => b.viajes - a.viajes);

// Calcular el monto total de los viajes realizados
var montoTotal = viajes.reduce((total, viaje) => total + 1, 0); // Simplemente sumamos la cantidad de viajes

// Mostrar la lista de usuarios que más abordaron el vehículo y el monto total de los viajes realizados
var usuariosLista = document.getElementById('usuariosLista');
var montoTotalElement = document.getElementById('montoTotal');

viajesPorConductorArray.forEach(function(conductor) {
    var listItem = document.createElement('li');
    listItem.textContent = conductor.conductor + ': ' + conductor.viajes + ' viajes';
    usuariosLista.appendChild(listItem);
});

montoTotalElement.textContent = 'Monto total de los viajes realizados: ' + montoTotal;