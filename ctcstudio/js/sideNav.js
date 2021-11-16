$(".sideNav").sidebar({ speed: 400 });
$(".sideNav").css("opacity", 0);

$(".header-nav").click(function() {
    $(".sideNav").css("opacity", 1);
    $(".sideNav").css("z-index", 99);
    $(".sideNav").trigger("sidebar:open");
    $(".sideNav__bg").addClass("fadeIn");
});

$(".sideNav-btn-close").click(function() {
    $(".sideNav").trigger("sidebar:close");
    $(".sideNav__bg").removeClass("fadeIn");
});

$(".sideNav").on("sidebar:opened", function() {
    $(".sideNav").css("z-index", 99);
});

$(".sideNav").on("sidebar:closed", function() {
    $(".sideNav").css("z-index", -99);
});