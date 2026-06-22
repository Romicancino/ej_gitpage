// --- 1. CONFIGURACIÓN DE CHART.JS ---
document.addEventListener("DOMContentLoaded", function() {
    
    // Gráfico 1
    const ctx1 = document.getElementById('miGrafico1').getContext('2d');
    new Chart(ctx1, {
        type: 'bar', // Puede ser 'line', 'pie', etc.
        data: {
            labels: ['Dato A', 'Dato B', 'Dato C', 'Dato D'],
            datasets: [{
                label: 'Métrica 1',
                data: [12, 19, 3, 5],
                backgroundColor: '#005689', // Color estilo Reuters
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' }
            }
        }
    });

    // Gráfico 2
    const ctx2 = document.getElementById('miGrafico2').getContext('2d');
    new Chart(ctx2, {
        type: 'line', 
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
            datasets: [{
                label: 'Métrica 2',
                data: [10, 25, 15, 30, 22],
                borderColor: '#d05b43', 
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
        }
    });

    // --- 2. LÓGICA DEL BUSCADOR Y TABLA DINÁMICA ---
    
    // Simulación de datos para la tabla (puedes reemplazar esto o leer un JSON/CSV)
    const datosTabla = [
        { nombre: "Chile", valor1: "150", valor2: "Alto" },
        { nombre: "Argentina", valor1: "120", valor2: "Medio" },
        { nombre: "Perú", valor1: "90", valor2: "Bajo" },
        { nombre: "Colombia", valor1: "135", valor2: "Alto" },
        { nombre: "Uruguay", valor1: "110", valor2: "Medio" }
    ];

    const cuerpoTabla = document.getElementById('cuerpoTabla');
    const inputBuscador = document.getElementById('inputBuscador');

    // Función para renderizar la tabla
    function renderizarTabla(datos) {
        cuerpoTabla.innerHTML = ''; // Limpiamos la tabla
        datos.forEach(item => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${item.nombre}</td>
                <td>${item.valor1}</td>
                <td>${item.valor2}</td>
            `;
            cuerpoTabla.appendChild(fila);
        });
    }

    // Renderizar inicialmente todos los datos
    renderizarTabla(datosTabla);

    // Evento de escucha (listener) para el buscador en tiempo real
    inputBuscador.addEventListener('keyup', function(e) {
        const terminoBusqueda = e.target.value.toLowerCase();
        
        // Filtrar el array de datos
        const datosFiltrados = datosTabla.filter(item => {
            // Revisa si el término de búsqueda está en alguna de las propiedades
            return item.nombre.toLowerCase().includes(terminoBusqueda) || 
                   item.valor2.toLowerCase().includes(terminoBusqueda);
        });

        // Volver a dibujar la tabla con los datos filtrados
        renderizarTabla(datosFiltrados);
    });
});
