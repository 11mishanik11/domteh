$(document).ready(function() {
    
    // Burger accordeon
    $('#burger').on('click', function() {
        $('#menu').slideToggle(500)
    });

    // work
    $('.main-slider').slick({
        arrows: false,

        centerMode: true,
        variableWidth: true,

        infinite: false,
    });

    // promotion
    $('#promotion-slides').slick({
        arrows: false,
        dots: true,

        centerMode: true,
        variableWidth: true,

        infinite: false,
    });
});