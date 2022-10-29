$(document).ready(function () {
  // filter

  // all
  $(".filter__all").click(function () {
    $(".card-set__item").show();
  });
  // protein
  $(".filter__protein").click(function () {
    $(".card-set__item").hide();
    $(".product__protein").show();
  });
  // Gainer
  $(".filter__gainer").click(function () {
    $(".card-set__item").hide();
    $(".product__gainer").show();
  });
  // Creatine
  $(".filter__creatine").click(function () {
    $(".card-set__item").hide();
    $(".product__creatine").show();
  });
  // Vitamine
  $(".filter__vitamine").click(function () {
    $(".card-set__item").hide();
    $(".product__vitamine").show();
  });
});
