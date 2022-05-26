const listadoDeProductos = document.getElementById('contenidoProductos')

const muestraProductos = (listado) => {
  listadoDeProductos.innerHTML = '';

  listado.forEach((productos) => {
    // if (productos.stock === DISPONIBLE) {
    //   productos.stock = "HAY STOCK"
    // }
    const div = document.createElement('div')
    div.className = "productosLista"
    div.classList.add('productos')
    div.innerHTML = `
                      <img src="${productos.imagen}" class="card-img-top" alt="${productos.imagen}">
                      <div class="card-body">
                        <p class="coloredboot">CATEGORIA: ${productos.categoria}</p>
                        <h6 class="tituloNombre">${productos.descripcion}</h6>
                        <button class="btn btn-lg btn-info" disabled> Precio: $ ${productos.precio} + IVA </button>
                      </div>
                      <div class="card-body">
                        <button onclick="paraMostrar(${productos.id})" class="btn btn-sm btn-secondary colorboot"> Info del producto</button>
                        <hr>
                      </div>
                       `

    listadoDeProductos.appendChild(div)
  })
}

const paraMostrar = (itemId) => {

  const productoEncontrado = productos.find((prod) => prod.id === itemId)

  Swal.fire({
    title: `Detalle del producto`,
    html: `${productoEncontrado.detalle}`,
    imageUrl: `${productoEncontrado.imagen}`,
    imageWidth: "150px",
    imageHeight: "150px",
    footer: ` STOCK ${productoEncontrado.stock}`
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
      didOpen: () => {
        Swal.showLoading()
      }
    })
  }


})

