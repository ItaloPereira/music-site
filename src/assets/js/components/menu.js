'use strict';

class Menu {
	constructor() {
        this.$menu = $('#menu');
        this.$open =  $('.nav__btn-menu');
        this.$close =  $('.menu__nav__btn-menu', this.$menu);
        this.$item = $('a', this.menu);

        this.isAnimating = false;

        this.bindEvents();
    }
    
	bindEvents() {
        const that = this;

        this.$open.on('click', function() {
            $('body').addClass('menu-active');
        });

        this.$close.on('click', function() {
            $('body').removeClass('menu-active');
        });

        this.$item.on('click', function(event) {
            if (that.isAnimating) {
                return false;
            } else {
                event.preventDefault();
                var hash = this.hash;
                var time = 800;
                that.isAnimating = true;

                $('html, body').animate({
                  scrollTop: $(hash).offset().top
                }, time, function(){
                    window.location.hash = hash;
                    that.isAnimating = false;
                });
            }
        });
    }
}

export { Menu as default }
