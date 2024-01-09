
const productos = {
    placaMadre1: 50000,
    placaMadre2: 35000,
    placaMadre3: 85000,
    placaMadre4: 85000,
    procesador1: 25000,
    procesador2: 45000,
    procesador3: 75000,
    procesador4: 75000,
    ram1: 26000,
    ram2: 16000,
    ram3: 30000,
    ram4: 30000,
    placadevideo1: 82000,
    placadevideo2: 100000,
    placadevideo3: 168000,
    placadevideo4: 168000,
    fuentedealimentacion1: 58000,
    fuentedealimentacion2: 30000,
    fuentedealimentacion3: 40000,
    fuentedealimentacion4: 40000,
    gabinete1: 25000,
    gabinete2: 41000,
    gabinete3: 46000,
    gabinete4: 46000,
    mouse1: 5000,
    mouse2: 12000,
    teclado1: 14000,
    teclado2: 23000,
    monitor1: 35000,
    monitor2: 60000,
    monitor3: 70000,
    monitor4: 120000,
    camara1: 3400,
    mousepad1: 3000,
    antena1: 2000,
    pendrive1: 2700,
};

let totalCarrito = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const productoId = e.target.dataset.productoId;
            if (productos[productoId] !== undefined) {
                let precio = productos[productoId];
                totalCarrito += precio;
                alert('Producto agregado al carrito. Total hasta ahora: $' + totalCarrito);
                seguirComprando = confirm('¿Quiere agregar mas de uno?');
                alert('Agregado correctamente, Total hasta ahora: $' + totalCarrito);

                
            } else {
                alert('El producto no existe. Intente nuevamente.');
            }
        });
    });
});

