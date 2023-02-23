$(document).ready(function() {
    
    // Burger accordeon
    $('#burger').on('click', function() {
        $('#menu').slideToggle(500)
    });

    // main slider
    $('.main-slider').slick({
        arrows: false,

        centerMode: true,
        variableWidth: true,

        infinite: false,
    });
});