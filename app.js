$(".nav-toogle").click(() => {
  $(".nav").toggleClass("nav_change");
});
$(".nav ul li a").click(() => {
  $(".nav").addClass("close-ham");
});
