window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-84746048-3');

$(document).ready(function(){
    if($(window).width() < 992){
            $('.show-order').on("click", function(){
                                    $("body").toggleClass("lock");
                                    $('.overlay').show();
                                    $(".overlay").css("overflow","scroll");
                                });
            $('.popup_close').on("click", function(){
                $("body").removeClass("lock");
                $('.overlay').hide();
            });
        }
        else {
            $('.show-order').on("click", function(){
                                    $('.overlay').show();
                                });
            $('.popup_close').on("click", function(){
                $('.overlay').hide();
            });
        };

        if($(window).width() < 992){
            $('.show-politic').on("click", function(){
                                    $("body").toggleClass("lock");
                                    $('.overlay-politic').show();
                                    $(".overlay-politic").css("overflow","scroll");
                                });
            $('.popup_close-politic').on("click", function(){
                $("body").removeClass("lock");
                $('.overlay-politic').hide();
            });
        }
        else {
            $('.show-politic').on("click", function(){
                                    $('.overlay-politic').show();
                                });
            $('.popup_close-politic').on("click", function(){
                $('.overlay-politic').hide();
            });
        };
        
    var link = $('.menu-link');
            var link_active = $('.menu-link_active');
            var nav_link = $('.menu a');
            var menu = $('.nav-menu');
            link.click(function(){
                link.toggleClass('menu-link_active');
                menu.toggleClass('nav-menu_active');
                $("body").toggleClass("lock");
                $(".nav-menu_active").css("overflow-y","auto");
            });
            link_active.click(function(){
                link.removeClass('menu-link_active');
                menu.removeClass('nav-menu_active');
                $(".nav-menu_active").css("overflow-y","hidden");
                $("body").removeClass("lock");
            });
            nav_link.click(function(){
                link.removeClass('menu-link_active');
                menu.removeClass('nav-menu_active');
                $("body").removeClass("lock");

                    });
                    var arrow_1 = $('.manual-arrow_1');
					var arrow_2 = $('.manual-arrow_2');
					var arrow_3 = $('.manual-arrow_3');
					var manual_img = $('.manual-block__img');
					manual_img.hover(function(){
						arrow_1.toggleClass('manual-arrow_1-active');
						arrow_2.toggleClass('manual-arrow_2-active');
						arrow_3.toggleClass('manual-arrow_3-active');
					});

                            $(".input-phone").mask("+7 (999) 999-9999", {autoclear: false});
                            new WOW().init();
});
$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});