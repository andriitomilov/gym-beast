// $(function () {
//   $("#accordion").accordion({
//     event: "mouseover",
//   });
// });

$(document).ready(function () {
  $('.faq__subtitle').click(function (event) {
    if ($('.faq__list').hasClass('accordion')) {
      $(".faq__subtitle").not($(this)).removeClass('active');
      $(".faq__text").not($(this).next()).slideUp(400);
    }
    $(this).toggleClass('active').next().slideToggle(400);
  })
});
