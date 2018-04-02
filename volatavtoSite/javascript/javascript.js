$(window).load(function() {
    if ($('#light-pagination')[0]) {
        $('#light-pagination').pagination({
            items: 50,
            itemsOnPage: 10,
            cssStyle: 'light-theme',
            prevText: "предыдущее",
            nextText: "далее",
            displayedPages: 4
        });
    }

    /*БЕГУЩАЯ СТРОКА ПАРТНЕРОВ*/
    if ($('.str')[0]) {
        $('.str').liMarquee();
    }

    /*КНОПКА МЕНЮ*/
    $(".header__menu__button").click(function() {
        $('.header__menu li').toggleClass('click');
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".header__menu__button").length) {
            $('.header__menu li').removeClass('click');
        }
        e.stopPropagation();
    });
    $(window).resize(function() {
        $('.header__menu li').removeClass('click');
    })
});

/*СЛАЙДЕР*/
$(document).ready(function() {
    if ($('.str')[0]) {
        $('.slider__box').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            respondTo: 'slider',
            responsive: 'unslick',
            arrows: false,
            fade: true
        });
    }
});

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 250) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
});

/*Scroll to top when arrow up clicked END*/
$(document).ready(function() { // executes when HTML-Document is loaded and DOM is ready
    $(".categories__block").on("click", function() {
        var _this = $(this),
            needOffset = _this.position().top + _this.outerHeight();
        if (_this.hasClass("clicked")) {
            _this.removeClass("clicked").children(".categories__descr").hide(200);
            $('.content').css('margin-bottom', 0)
        } else {
            $(".categories__block").removeClass("clicked");
            $(".categories__descr").hide(200);
            var _other = $(this).find(".categories__de");
            var _other__2 = _other.outerHeight();
            _this.addClass("clicked");
            _this.children(".categories__descr").css("top", needOffset).show(400);
            $('.content').css('margin-bottom', _other__2)
        }
    });
});

$(window).resize(function() {
    $('.categories__block').removeClass('clicked').children(".categories__descr").hide(200);
    $('.content').css('margin-bottom', 0)
});