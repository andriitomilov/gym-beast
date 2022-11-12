$(document).ready(function () {
  // filter

  // all
  $(".filter__all").click(function () {
    $(".card-set__item").show();
    $(".btn__filter").removeClass("is-active");
    $(".filter__all").addClass("is-active");
  });
  // protein
  $(".filter__protein").click(function () {
    $(".card-set__item").hide();
    $(".product__protein").show();
    $(".btn__filter").removeClass("is-active");
    $(".filter__protein").addClass("is-active");
  });
  // Gainer
  $(".filter__gainer").click(function () {
    $(".card-set__item").hide();
    $(".product__gainer").show();
    $(".btn__filter").removeClass("is-active");
    $(".filter__gainer").addClass("is-active");
  });
  // Creatine
  $(".filter__creatine").click(function () {
    $(".card-set__item").hide();
    $(".product__creatine").show();
    $(".btn__filter").removeClass("is-active");
    $(".filter__creatine").addClass("is-active");
  });
  // Vitamine
  $(".filter__vitamine").click(function () {
    $(".card-set__item").hide();
    $(".product__vitamine").show();
    $(".btn__filter").removeClass("is-active");
    $(".filter__vitamine").addClass("is-active");
  });
});
