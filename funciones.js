//FUNCION PARA MENU RESPONSIVE
$("#menu").click(function () {
  $("#contenedormenu").toggleClass("abrirmenu");
});

//FUNCION DE SLIDE
$(function(){
  $(".rslides").responsiveSlides({
    nav:true,
    auto: true,
    prevText:"<i class='fas fa-chevron-left fa-2x'></i>",
    nextText:"<i class='fas fa-chevron-right fa-2x'></i>",
  });
});

//FUNCION MODAL
var modal= document.getElementById("modal");
var btnmodal = document.getElementById("btnmodal");
var cerrarmodal = document.getElementById("cerrarmodal");

btnmodal.onclick=function(){
  modal.style.display="block";
};
cerrarmodal.onclick=function(){
  modal.style.display="none";
};

//FUNCION ACORDEON
$(".acordeon_imagen").click(function(){
  var elemento = $(this);
  var otroelemento = elemento.next();
  otroelemento.slideToggle();
});

//FUNCION CARRUSEL
$(document).ready(function()
{
    $('#carrusel').tinycarousel();
}); 

//FUNCION FANCYBOX
$(document).ready(function () {
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none",
  });
}); 

//FUNCION DESPLAZAR A VINCULOS
$(".btn_ancla").click(function () {
  var ancla = $(this).attr("href");
  $("html,body").animate(
    {
      scrollTop: $(ancla).offset().top,
    },
    1000
  ); 
  $("#contenedormenu").toggleClass("abrirmenu");
});

//FUNCION FLECHA SUBIR

$(document).ready(function () {
  $("#flecha").click(function () {
    $("html,body").animate(
      {
    scrollTop: "0px",
  },
  1000
  );
});
});