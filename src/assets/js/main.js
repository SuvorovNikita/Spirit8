/**
 * Section: jQuery
 */

//@@include('global/_global.js')
//@@include('components/_components.js')


$(function() {

    var navToggle = $("#navToggle");
    var nav = $("#nav");

    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });

});


$(function() {

    $(".slider").slick({
        arrows: false,
        dots: true
    });

});


$(function() {

    var filter = $("[data-filter]");

    filter.on("click", function(event) {

        event.preventDefault();

        var cat = $(this).data('filter');

        if (cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {
                var workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }

    });

});