$(() => {
  setTimeout(() => {
    $('#modalWelcome').modal('show')
  }, 2000)
}
);


$('#modalBienvenida').prepend(` <div class="modal fade" id="modalWelcome" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content modal-body bodyImagen">
    <div class="modal-header">
      <br>
      <br>
      <br>
      <br>
    </div>
    <div class="modal-body">
      <h5>BIENVENIDO!!</h5> Podras ver nuestros productos.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
    </div>
  </div>
</div>
</div>

`);

$('#muestraCarousel').append(`<div id="demo" class="carousel slide carouselEstilado" data-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active" data-interval="4000">
    <img src="./imagenes/productos/WEBCAM1000x.jpg" alt="WEBCAM1000x.jpg">
  </div>
  <div class="carousel-item" data-interval="4000">
    <img src="./imagenes/productos/tvparlantes.jpg" alt="tvPARLANTES.jpg">
  </div>
  <div class="carousel-item" data-interval="4000">
    <img src="./imagenes/productos/gmrc.jpg" alt="GMRC.jpg">
  </div>
  <div class="carousel-item" data-interval="4000">
    <img src="./imagenes/productos/FTATX850.jpg" alt="FTATX850.jpg">
  </div>
  <div class="carousel-item" data-interval="4000">
    <img src="./imagenes/productos/gtnc.jpg" alt="GTNC.jpg">
  </div>
</div>
<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>

</div>

`)
