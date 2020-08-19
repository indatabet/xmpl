document.addEventListener("DOMContentLoaded", function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        items: 1
    })

    $('#mobile-nav, #mobile-faq-nav').hcOffcanvasNav({
        disableAt: 1000,
        position: 'right',
    });

    $("#mobile-faq-nav, #faq-menu, #data-head").on("click","a", function (event) {
        event.preventDefault();
        const id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".tab_item").not(":first").hide();
    $(".database__wrap .tab").click(function() {
        $(".database__wrap .tab").removeClass("active").eq($(this).index()).addClass("active")
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $('#main-menu').smartmenus({
        mainMenuSubOffsetX: -1,
        subMenusSubOffsetX: 10,
        subMenusSubOffsetY: 0
    });

    tippy('[data-tippy-content]', {
        trigger: 'click',
        interactive: true,
        theme: 'translucent',
        allowHTML: true,
        placement: 'left',
    });

});
