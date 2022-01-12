var phoneIconAnimation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById('icon-phone'), // required
    path: 'image/contactUs/phone.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: true, // optional
});
var addressIconAnimation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById('icon-address'), // required
    path: 'image/contactUs/address.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: true, // optional
});
var emailIconAnimation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById('icon-email'), // required
    path: 'image/contactUs/mail.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: true, // optional
});

$("#info-title-phone").mouseover(function() {
    phoneIconAnimation.goToAndPlay(0);
});
$("#info-title-email").mouseover(function() {
    emailIconAnimation.goToAndPlay(0);
});
$("#info-title-address").mouseover(function() {
    addressIconAnimation.goToAndPlay(0);
});

$(window).scroll(function() {
    $("#title-image1").css({
        'margin-top': -$(window).scrollTop() * 0.25
    });
    $("#title-image2").css({
        'margin-top': -$(window).scrollTop() * 0.4
    });
    $("#title-image3").css({
        'margin-top': -$(window).scrollTop() * 0.55
    });
});