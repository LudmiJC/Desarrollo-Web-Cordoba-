const productos = [
    {
      id: 1,
        nombre: "Pc Amd Ryzen 3 3200g 16gb Ddr4 Ssd 240gb 500w",
        precio: 35000,
        img:
          "https://http2.mlstatic.com/D_NQ_NP_666919-MLA52592491181_112022-O.webp",
        cantidad: 1,
    },
    {
      id: 2,
      nombre: "Pc Amd Ryzen 5 5600g 12 Nucleo Ram 16gb ",
      precio: 50000,
      img:
        "https://http2.mlstatic.com/D_NQ_NP_688193-MLA54924055401_042023-O.webp",
      cantidad: 1,
    },
    {
      id: 3,
        nombre: "Pc Amd Ryzen 5 4600g 12 Nucleo Amd Ram 16gb",
        precio: 85000,
        img:
          "https://http2.mlstatic.com/D_NQ_NP_736468-MLA54339629438_032023-O.webp",
        cantidad: 1,
    },
    {
      id: 4,
        nombre: "Pc Amd Ryzen 7 5700g 32gb 960gb Wifi + Combo Gamer!",
        precio: 95000,
        img:
          "https://http2.mlstatic.com/D_NQ_NP_907120-MLA74372742360_022024-O.webp",
        cantidad: 1,
    },
    {
      id: 5,
        nombre: "Pc Amd Ryzen 5 5600g/16gb/480gb/off+win10/wifi",
        precio: 100000,
        img:
          "https://http2.mlstatic.com/D_NQ_NP_978872-MLA53045253070_122022-O.webp",
        cantidad: 1,
    },
    {
      id: 6,
        nombre: "Pc Amd Ryzen 5 4600g 16gb Ssd480g",
        precio: 70000,
        img:
          "https://http2.mlstatic.com/D_NQ_NP_673524-MLA72460103220_102023-O.webp",
        cantidad: 1,
    },
  ];

const cargarProductos = () => {
    fetch('./productos.json')
      .then(response => response.json())
      .then(data => {
        productos = data;
        pintarProductos();
      })
      .catch(error => console.error('Hubo un error cargando los productos:', error));
  };

window.addEventListener('DOMContentLoaded', cargarProductos);
  
  