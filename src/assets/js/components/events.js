'use strict';

// import data
import events from '../data/events';

class Events {
	constructor() {
        if (events.length < 3) return false;

        this.$container = $('.events');

        this.createContainer();
        this.createSlider();
        this.$container.show();

        this.slider.update();
	}
    
    createContainer () {
        this.template = `<div class="page-wrapper">
                            <h2>PRÓXIMOS EVENTOS</h2>
                            <div class="swiper-events-container">
                                <div class="swiper-wrapper">
                                    ${this.getSlides()}
                                </div>
                            </div>
                         </div>`;

        this.$container.html(this.template);

        this.$swiper = $('.swiper-events-container', this.$container);
    }

    getSlides () {
        let slides = '';

        events.map(event => {
            slides += `<a href="${event.link}" style="background-image: url(img/${event.image});" class="swiper-slide">
                            <div class="event-desc">
                                <h3 class="event-desc__name">${event.name}</h3>
                                <span class="event-desc__date">${event.date}</span>
                                <span class="event-desc__city">${event.city}</span>
                            </div>
                       </a>`;
        });

        return slides;
    }
    
    createSlider () {
        this.slider = new Swiper (this.$swiper, {
            slidesPerView: 3,
            spaceBetween: 55
        })

    }

	bindEvents () {
    }
}

export { Events as default }
