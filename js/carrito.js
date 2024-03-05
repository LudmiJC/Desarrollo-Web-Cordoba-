const pintarCarrito = () => {
    console.log("Ejecutando pintarCarrito");
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1>
      `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
          <img src="${product.img}">
          <h3>${product.nombre}</h3>
          <p>${product.precio} $</p>
          <span class="restar"> - </span>
          <p>${product.cantidad}</p>
          <span class="sumar"> + </span>
          <p>Total: ${product.cantidad * product.precio} $</p>
          <span class="delete-product"> ❌ </span>
        `;

        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar");

        restar.addEventListener("click", () => {
            if (product.cantidad !== 1) {
                product.cantidad--;
            }
            saveLocal();
            pintarCarrito();
        });

        let sumar = carritoContent.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            product.cantidad++;
            saveLocal();
            pintarCarrito();
        });

        let eliminar = carritoContent.querySelector(".delete-product");

        eliminar.addEventListener("click", () => {
            eliminarProducto(product.id);
        });
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalBuying);

    const finalizarCompraBtn = document.createElement("button");
    finalizarCompraBtn.textContent = "Finalizar Compra";
    finalizarCompraBtn.id = "finalizarCompra";
    finalizarCompraBtn.addEventListener("click", finalizarComprabtn);
    modalContainer.appendChild(finalizarCompraBtn);
};
function finalizarComprabtn() {

    Swal.fire({
        title: "Por favor llena el formulario para finalizar la compra",
        html: `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <form id="formularioCompra" class="form-control">
                        <input type="text" name="nombre" value="Ludmila Cordoba" placeholder="Nombre" id="formNombre" class="form-control mb-2">
                        <input type="text" name="direccion" value="Rawson 271" placeholder="Domicilio" class="form-control mb-2" id="formDomicilio">
                        <input type="email" name="email" value="ludmilajacquelinecordoba@gmail.com" placeholder="Email" class="form-control mb-2" id="formEmail">
                    </form>
                </div>
            </div>
        </div>
        `,
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#",
        cancelButtonColor: "#d33",
        confirmButtonText: "Finalizar Compra"
    }).then((result) => {
        if (result.isConfirmed) {
            const nombre = document.querySelector("#formNombre").value;
            const domicilio = document.querySelector("#formDomicilio").value;
            const email = document.querySelector("#formEmail").value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor ingresa un correo electrónico válido.',
                });
            } else if (nombre.trim() === '' || domicilio.trim() === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor completa todos los campos del formulario.',
                });
            } else {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Procesando",
                    html: `
                    <div>
                        <h5>Hola ${nombre} Estamos procesando su compra!!!</h5>
                        <h5>Le enviaremos un email a ${email} !!!</h5>
                        <div><progress id="progress" value="0" min="0" max="10"></progress></div>

                    </div>`,

                    showConfirmButton: false

                });
                barra()
                setTimeout(() => {
                    window.location.href = "compra.html";
                }, 11000); // Redirigir después de 11 segundos
            }
        }
    });
}
function mensaje(mensaje, estilo) {
    Toastify({
        text: mensaje,
        duration: 3000,
        style: {
            background: estilo,
        },
    }).showToast();
}

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    console.log(foundId);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    carritoCounter();
    saveLocal();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();
