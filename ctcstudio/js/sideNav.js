$(".sideNav").sidebar({ speed: 400 });

$(".header-nav").click(function() {
    $(".sideNav").trigger("sidebar:open");
});

$(".sideNav-btn-close").click(function() {
    $(".sideNav").trigger("sidebar:close");
});