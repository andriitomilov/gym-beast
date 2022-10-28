$(document).ready(function () {

//   // up-btn
  const btn = $(".btn-scroll");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "400");
  });

  // Smooth scrolling

  $('a[href^="#"]').click(function (event) {
    event.preventDefault();
    //Сохраняем значение атрибута href в переменной:
    const target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 80 }, 800);
    return false;
  });
   
//   accordion
  $(".faq__subtitle").click(function (event) {
    if ($(".faq__list").hasClass("accordion")) {
      $(".faq__subtitle").not($(this)).removeClass("active");
      $(".faq__text").not($(this).next()).slideUp(400);
    }
    $(this).toggleClass("active").next().slideToggle(400);
  });
});
