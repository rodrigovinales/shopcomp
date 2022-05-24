const listadoDeProductos = document.getElementById('contenidoProductos')

const muestraProductos = (listado) => {
  listadoDeProductos.innerHTML = '';

  listado.forEach((productos) => {
    if (productos.descripcion === undefined) {
      productos.descripcion = "NO ESPECIFICA"
    }
    const div = document.createElement('div')
    div.className = "productosLista"
    div.classList.add('productos')
    div.innerHTML = `
                      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="${productos.imagen1}" class="card-img-top" alt="${productos.imagen1}">
                          </div>
                          <div class="carousel-item">
                            <img src="${productos.imagen2}" class="card-img-top" alt="${productos.imagen2}">
                          </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <p class="coloredboot">CATEGORIA: ${productos.categoria}</p>
                        <h6 class="tituloNombre">${productos.nombre}</h6>
                      </div>
                      <ul class="list-group list-group-flush">
                       <button class="btn btn-lg btn-success" disabled> Precio: $ ${productos.precio} + IVA </button>
                      </ul>
                      <div class="card-body">
                        <div class="dropdown">
                          <a class="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Mas info </a>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                             <a class="dropdown-item colorboot" href="mailto:compras@shopcomputers.com.ar">Enviar E-Mail</a>
                             <a class="dropdown-item colorboot" href="${productos.link}" target="_blank">Mas sobre el producto</a>
                          </div>
                        </div>
                      </div>
                       `

    listadoDeProductos.appendChild(div)
  })
}

muestraProductos(productos)

const buscador = document.getElementById('busqueda')
const buscar = (search) => {
  return productos.filter((prod) => prod.categoria.toLowerCase().includes(search))
}

buscador.addEventListener('input', () => {
  const search = buscador.value.trim().toLowerCase()

  if (search === "lista de productos") {
    muestraProductos(productos)
  }
  else if (buscar(search).length === 0) {
    Swal.fire({
      imageUrl: `./imagenes/LOGOshopcomputers.png`,
      imageWidth: "350px",
      imageHeight: "200px",
      html: '<span>Perdon, no existen productos en la busqueda seleccionada</span>',
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Seguir buscando!',
      text: "Por favor seleccione otros productos.",
      imageHeight: 200,
    })
  }
  else {
    muestraProductos(buscar(search))

    Swal.fire({
      html: `Mostrando listado de <b>${search.toUpperCase()}</b>`,
      timer: 2000,
      background: '#E6F2F7',
      imageUrl: `./imagenes/LOGOshopcomputers.png`,
      imageWidth: "250px",
      imageHeight: "100px",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      }
    })
  }
})

