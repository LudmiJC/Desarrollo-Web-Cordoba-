
let totalCarrito = 0;

function agregarAlCarrito(productoId) {
    let seguirComprando = true
    while (seguirComprando) {
        let precio = 0;

        switch (productoId) {
            case 'placaMadre1':
                precio = 50000;
                break;
            case 'placaMadre2':
                precio = 35000;
                break;
            case 'placaMadre3':
                precio = 85000;
                break;
            case 'placaMadre4':
                precio = 85000;
                break;
            case 'procesador1':
                precio = 25000;
                break;
            case 'procesador2':
                precio = 45000;
                break;
            case 'procesador3':
                precio = 75000;
                break;
            case 'procesador4':
                precio = 75000;
                break;
            case 'ram1':
                precio = 26000;
                break;
            case 'ram2':
                precio = 16000;
                break;
            case 'ram3':
                precio = 30000;
                break;
            case 'ram4':
                precio = 30000;
                break;
            case 'placadevideo1':
                precio = 82000;
                break;
            case 'placadevideo2':
                precio = 100000;
                break;
            case 'placadevideo3':
                precio = 168000;
                break;
            case 'placadevideo4':
                precio = 168000;
                break;
            case 'fuentedealimentacion1':
                precio = 58000;
                break;
            case 'fuentedealimentacion2':
                precio = 30000;
                break;
            case 'fuentedealimentacion3':
                precio = 40000;
                break;
            case 'fuentedealimentacion4':
                precio = 40000;
                break;
            case 'gabinete1':
                precio = 25000;
                break;
            case 'gabinete2':
                precio = 41000;
                break;
            case 'gabinete3':
                precio = 46000;
                break;
            case 'gabinete4':
                precio = 46000;
                break;
            case 'mouse1':
                precio = 5000;
                break;
            case 'mouse2':
                precio = 12000;
                break;
            case 'teclado1':
                precio = 14000;
                break;
            case 'teclado2':
                precio = 23000;
                break;
            case 'monitor1':
                precio = 35000;
                break;
            case 'monitor2':
                precio = 60000;
                break;
            case 'monitor3':
                precio = 70000;
                break;
            case 'monitor4':
                precio = 120000;
                break;
            case 'camara1':
                precio = 3400;
                break;
            case 'mousepad1':
                precio = 3000;
                break;
            case 'antena1':
                precio = 2000;
                break;
            case 'pendrive1':
                precio = 2700;
                break;
        }

        totalCarrito += precio;
        alert('Producto agregado al carrito. Total hasta ahora: $' + totalCarrito);

        // pregunto si quiere seguir comprarndo
        seguirComprando = confirm('¿Quiere agregar mas de uno?');
    }
}

