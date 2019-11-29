$(document).ready(function () {
    $('input.autocomplete').autocomplete({
        data: {            
            "Audio": null,
            "Business Development": null,
            "Data Science": null,           
            "Game Design": null,
            "Hardware Engineering": null,
            "Human Resources": null,
            "Software Engineering": null,
            "Technical Infrastructure": null,
            "Writing": null,
        },
    });
});

$(document).ready(function () {    
    $('.slider').slider({
        full_width: true,
        indicators: true,     
        interval: 999999999,
        autoplay: false
    });
    $('.slider').slider('pause');   
});

$('.indicator-item').on('click', function () {
    $('.sliderone').slider('pause');
});

$(document).ready(function () {
    $('.materialbox').materialbox();

});

