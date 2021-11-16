var controller = new ScrollMagic.Controller();
var scene;

$(".draw-ani-line").css("height", $(".members-area").height());
var lineHeight = $(".draw-ani-line").height();
$(".draw-ani-line").css("height", "0px");

$(function() {
    scene = new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            duration: lineHeight
        })
        .setPin("#hand")
        .on("progress", function(e) {
            if (e.progress == 1) {
                $("#hand").addClass('fade-out');
            } else {
                $("#hand").removeClass('fade-out');
            }
            $(".draw-ani-line").css({
                'height': e.progress.toFixed(3) * lineHeight
            });
        })
        .addTo(controller);

    scene = new ScrollMagic.Scene({
            triggerElement: "#trigger2",
            duration: 0,
            triggerHook: 0.8
        })
        .offset(200)
        .setTween("#item2", 1, { opacity: 1 })
        .addTo(controller);

    scene = new ScrollMagic.Scene({
            triggerElement: "#trigger3",
            duration: 0,
            triggerHook: 0.8
        })
        .offset(200)
        .setTween("#item3", 1, { opacity: 1 })
        .addTo(controller);

    scene = new ScrollMagic.Scene({
            triggerElement: "#trigger4",
            duration: 0,
            triggerHook: 0.8
        })
        .offset(200)
        .setTween("#item4", 1, { opacity: 1 })
        .addTo(controller);

    scene = new ScrollMagic.Scene({
            triggerElement: "#trigger5",
            duration: 0,
            triggerHook: 0.8
        })
        .on("enter leave", function(e) {
            if (e.type == "enter" ? true : false) {
                $(".fourDims-area-image-box.hor").addClass("isAni");
                $(".fourDims-area-image-box.ver").addClass("isAni");
                $(".fourDims-area-image-box.head").addClass("isAni");
                $(".fourDims-area-image-box.bg").addClass("isAni");
                $(".fourDims-area p").addClass("isAni");
            } else {
                $(".fourDims-area-image-box.hor").removeClass("isAni");
                $(".fourDims-area-image-box.ver").removeClass("isAni");
                $(".fourDims-area-image-box.head").removeClass("isAni");
                $(".fourDims-area-image-box.bg").removeClass("isAni");
                $(".fourDims-area p").removeClass("isAni");
            }
        })
        .offset(250)
        .addTo(controller);
});