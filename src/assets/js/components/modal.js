'use strict';

class Modal {
    constructor() {
        this.$body = $('body');
        this.$modal = $('.modal');
        this.$wrapper = $('.modal__wrapper', this.$modal);
        this.$close = $('.modal__wrapper__close', this.$modal);
        this.$image = $('.modal__wrapper__image', this.$modal);

        this.player;

        this.bindEvents();
    }

    open(type, data) {
        this.$body.addClass('modal-active');
        this.verifyModalType(type, data);
    }

    verifyModalType(type, data) {
        if (type == 'video') {
            this.$image.hide();
            $('#player').show();
            this.loadVideo(data);
        } else {
            $('#player').hide();
            this.$image.show();
            this.loadImage(data);
        }
    }

    close() {
        this.$body.removeClass('modal-active');

        if (this.player) this.player.stopVideo();
    }

    loadVideo(id) {

        if (this.player) {
            this.player.loadVideoById(id);
        } else {
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/player_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubePlayerAPIReady = () => {
                this.player = new YT.Player('player', {
                    height: '506',
                    width: '900',
                    videoId: id,
                    playerVars: {
                        autoplay: 1,
                        rel: 0,
                        color: 'white'
                    },
                    events: {
                    }
                });
            }
        }
    }

    loadImage(image) {
        this.$image.css('background-image', `url(img/${image})`)
    }

    bindEvents() {
        const that = this;

        $('body').on('click', '.modal__wrapper__close', function () {
            that.close();
        });

        this.$modal.on('click', function (e) {
            if (!e.target.closest('.modal__wrapper')) {
                that.close();
            }
        });
    }
}

export { Modal as default }
