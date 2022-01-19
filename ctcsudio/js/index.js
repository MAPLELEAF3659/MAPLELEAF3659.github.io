var controller = new ScrollMagic.Controller();
var scene;

$(function() {
    scene = new ScrollMagic.Scene({
            triggerElement: "#trigger-subtitle",
            duration: 0,
            triggerHook: 0.8
        })
        .setTween("#slogan-title", 1, { opacity: 1 })
        .addTo(controller);
});

$(window).scroll(function() {
    $(".bg-building-with-road").css({
        'margin-top': -$(window).scrollTop() * 0.25
    });
    $(".bg-building").css({
        'margin-top': -$(window).scrollTop() * 0.4
    });

    $(".head").each(function() {
        var speed = $(this).data("speed");
        $(this).css({
            'margin-top': -$(window).scrollTop() * speed
        });
    });
    $("#chatBox-head").css({
        'margin-top': -$(window).scrollTop() * 0.2
    });
});

var clickIndex = 0;
var clicked = false;
var messages = ["Shhhh!", "Scroll down!", "Hello,there!", "Welcome!"];
$(".heads-ani").click(function() {
    if (clicked) {
        $(".chatBox").each(function() {
            $(this).removeClass("isOn");
        });
        clicked = false;
    } else {
        if (clickIndex == 0) {
            $("#chatBox-logo").toggleClass("isOn");
            $("#chatBox-logo p").html(messages[Math.floor(Math.random() * messages.length)]);
            clickIndex = 1;
        } else if (clickIndex == 1) {
            $("#chatBox-head").toggleClass("isOn");
            $("#chatBox-head p").html(messages[Math.floor(Math.random() * messages.length)]);
            clickIndex = 0;
        }
        clicked = true;
    }
});