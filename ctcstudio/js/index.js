var controller = new ScrollMagic.Controller();
var scene;

$(function() {
    scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 25 })
        .setPin("#head1")
        .offset(350)
        .addTo(controller);

    scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 150 })
        .setPin("#head2")
        .offset(350)
        .addTo(controller);

    scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 300 })
        .setPin("#head3")
        .offset(350)
        .addTo(controller);

    scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 525 })
        .setPin("#logo")
        .offset(350)
        .addTo(controller);

    scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 600 })
        .setPin("#hand")
        .offset(350)
        .addTo(controller);

    scene = new ScrollMagic.Scene({
            triggerElement: "#trigger2",
            duration: 0,
            triggerHook: 0.8
        })
        .setTween("#slogan-title", 1, { opacity: 1 })
        .addTo(controller);
});