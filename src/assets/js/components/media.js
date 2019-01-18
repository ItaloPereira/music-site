'use strict';

// import data
import media from '../data/media';

class Media {
	constructor() {
        this.$container = $('.media');
        this.$grid = $('.media-grid', this.$container);
        this.$button = $('button', this.$container);
        this.$video = $('.media-grid__line__item.video', this.$container);

        this.lineCount = 0;
        this.mediaCount = 0;
        this.mediaLoaded = 1;

        this.createMediaLines();
        this.bindEvents();
	}
    
    createMediaLines () {
        this.linesTemplate = ''

        if ($(window).width() > 768) {
            for (var i=0; i<3; i++) {
                this.linesTemplate += ` <div class="media-grid__line ${this.getLineStyle()}">
                                            ${this.getMedia()}
                                        </div>`;
            }
        } else {
            for (var i=0; i<1; i++) {
                this.linesTemplate += ` <div class="media-grid__line ${this.getLineStyle()}">
                                            ${this.getMedia()}
                                        </div>`;
            }
        }


        this.$grid.append(this.linesTemplate);
    }

    getLineStyle () {
        let lineClass = '';

        switch(this.lineCount) {
            case 1:
                lineClass = 'media-grid__line--type2'
                break;

            case 2:
                lineClass = 'media-grid__line--type3'
                break;

            default:
                lineClass = ''
        }

        if (this.lineCount == 2) this.lineCount = 0;
        else this.lineCount++;

        return lineClass;
    }

    getMedia () {
        let data = ''
        media.map((item, index) => {
            if (index < this.mediaLoaded * 4 && index >= this.mediaLoaded * 4 - 4) {
                if (item.type == 'image') {
                    data += `<div class="media-grid__line__item image" data-image="large-${item.name}">
                                <div class="media-grid__line__item__bgr" style="background-image: url(img/${item.name});"></div>
                            </div>`
                } else {
                    data+= `<div class="media-grid__line__item video" data-videoid="${item.id}">
                                <div class="media-grid__line__item__bgr" style="background-image: url(https://img.youtube.com/vi/${item.id}/hqdefault.jpg);"></div>
                                <div class="media-grid__line__item__play icon-play"></div>
                            </div>`
                }
            }
        });
        
        this.mediaLoaded++;

        this.verifyButton();

        return data;
    }

    verifyButton () {
        if (this.mediaLoaded * 4 >= media.length) this.$button.hide();
    }

	bindEvents () {
        const that = this;

        $('body').on('click', '.media-grid__line__item', function () {
            const $this = $(this);
            if ($this.hasClass('video')) {
                App.modal.open('video', $this.data('videoid'));
            } else {
                App.modal.open('image', $this.data('image'));
            }
        });

        this.$button.on('click', function() {
            that.$container.addClass('-loading');
            setTimeout(() => {
                that.createMediaLines();
                that.$container.removeClass('-loading');
            }, 800);
        });
    }
}

export { Media as default }
