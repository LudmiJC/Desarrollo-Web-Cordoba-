//.........arma tu pc.................//

document.addEventListener('DOMContentLoaded', function() {
    const valorTotalElemento = document.getElementById('valor');
    const selects = document.querySelectorAll('.armatupc__aside__selectComponentes .armatupc__aside__select');

    function extraerNumeroDeTexto(texto) {
        const match = texto.match(/\$([0-9]+)\.([0-9]+)/);
        return match ? parseInt(match[1] + match[2]) : 0;
    }

    function actualizarTotal() {
        let total = 0;
        let seleccion = {};

        selects.forEach(select => {
            const valor = extraerNumeroDeTexto(select.options[select.selectedIndex].text);
            total += valor;
            seleccion[select.id] = select.selectedIndex;
        });

        valorTotalElemento.textContent = total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });

        //Guardo la seleccion del usuario en el formato JSON en localStorage
        localStorage.setItem('seleccionUsuario', JSON.stringify(seleccion));
    }

    function cargarSeleccionGuardada() {
        const seleccion = JSON.parse(localStorage.getItem('seleccionUsuario'));

        if (seleccion) {
            selects.forEach(select => {
                const indiceSeleccionado = seleccion[select.id];
                if (indiceSeleccionado !== undefined) {
                    select.selectedIndex = indiceSeleccionado;
                }
            });
            actualizarTotal();
        }
    }

    selects.forEach(select => {
        select.addEventListener('change', actualizarTotal);
    });

    // Cargamos la selección guardada al iniciar
    cargarSeleccionGuardada();
});
