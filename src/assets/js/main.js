/**
 * Section: jQuery
 */

//@@include('global/_global.js')
//@@include('components/_components.js')

$(function () {

    
    var navToggle = $("#navToggle");
    var nav = $("#nav");

    navToggle.on("click", function (event) {
        event.preventDefault();
        nav.toggleClass("show");
    });



    $(".slider").slick({
        arrows: false,
        dots: true
    });




    var filter = $("[data-filter]");

    filter.on("click", function (event) {

        event.preventDefault();

        var cat = $(this).data('filter');

        if (cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function () {
                var workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }

    });


    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });

});