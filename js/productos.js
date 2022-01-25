const listadoDeProductos = document.getElementById('contenidoProductos')

const muestraProductos = (listado) => {
  listadoDeProductos.innerHTML = '';

  listado.forEach((productos) => {
    
    const div = document.createElement('div')
    div.className = "productosLista"
    div.classList.add('productos')
    div.innerHTML = `
                  <img src=${productos.imagen} class="card-img-top">
                  <div class="card-body">
                  <p class="tituloCategoria">CATEGORIA: ${productos.categoria}</p>
                  <h6 class="tituloNombre">${productos.nombre}</h6>
                  <p class="tituloPrecio">Precio: $ ${productos.precio} + IVA</p>
                  </div> `

    listadoDeProductos.appendChild(div)
  })
  
}
muestraProductos(productos);
const buscador = document.getElementById('busqueda')

const buscar = (search) => {
    return productos.filter((prod) => prod.nombre.toLowerCase().includes(search))
}

buscador.addEventListener('input', () => {
    const search = buscador.value.trim().toLowerCase()
    muestraProductos( buscar(search) )  
})