var controller = new ScrollMagic.Controller();
var scene;
var pacHeadDuration = 350;

var mainAreaHeight = $('.main-title-text').height(); // container height
var mainAreaWidth = $('.main-title').width(); // container width

var lineHeight = $(".ani-area-line").height();
var lineMarginTop = $(".ani-area-line").css("margin-top");

$(function() {
    resetCirclePos();

    //pac head
    scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: pacHeadDuration })
        .setPin("#head1")
        .offset(500)
        .on("progress", function(e) {
            $("#line1").css('height', (1 - e.progress.toFixed(3)) * lineHeight);
            $("#line1").css('margin-top', e.progress.toFixed(3) * lineHeight + parseInt(lineMarginTop, 10));
        })
        .addTo(controller);

    scene = new ScrollMagic.Scene({ triggerElement: "#trigger2", duration: pacHeadDuration })
        .setPin("#head2")
        .on("progress", function(e) {
            $("#line2").css('height', (1 - e.progress.toFixed(3)) * lineHeight);
            $("#line2").css('margin-top', e.progress.toFixed(3) * lineHeight + parseInt(lineMarginTop, 10));
        })
        .addTo(controller);

    scene = new ScrollMagic.Scene({ triggerElement: "#trigger3", duration: pacHeadDuration })
        .setPin("#head3")
        .on("progress", function(e) {
            $("#line3").css('height', (1 - e.progress.toFixed(3)) * lineHeight);
            $("#line3").css('margin-top', e.progress.toFixed(3) * lineHeight + parseInt(lineMarginTop, 10));
        })
        .addTo(controller);

    scene = new ScrollMagic.Scene({ triggerElement: "#trigger4", duration: pacHeadDuration })
        .setPin("#head4")
        .on("progress", function(e) {
            $("#line4").css('height', (1 - e.progress.toFixed(3)) * lineHeight);
            $("#line4").css('margin-top', e.progress.toFixed(3) * lineHeight + parseInt(lineMarginTop, 10));
        })
        .addTo(controller);

    scene = new ScrollMagic.Scene({ triggerElement: "#trigger5", duration: pacHeadDuration })
        .setPin("#head5")
        .offset(-50)
        .on("progress", function(e) {
            $("#line5").css('height', (1 - e.progress.toFixed(3)) * lineHeight);
            $("#line5").css('margin-top', e.progress.toFixed(3) * lineHeight + parseInt(lineMarginTop, 10));
        })
        .addTo(controller);
});

$(window).scroll(function() {
    $(".main-circle").each(function() {
        var aniSpeed = $(this).data("speed");
        $(this).css({
            'margin-top': -$(window).scrollTop() * aniSpeed
        });
    });
})

$(window).resize(resetCirclePos());

function resetCirclePos() {
    $(".main-circle").each(function() {
        randomtop = Math.random() * mainAreaHeight + 150;
        randomleft = Math.random() * mainAreaWidth - 24;
        $(this).css({
            'top': randomtop,
            'left': randomleft
        });
    });
}


objectFitImages();

$('.display-image').jarallax({
    speed: 0.2
});