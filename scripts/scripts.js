//Hamburger Click
$(".hamburger").on("click", function(){
    $(this).toggleClass("is-active");
    $(".main-logo").toggleClass("nav-active");
    $("nav").slideToggle();
});

