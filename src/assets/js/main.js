// Import jQuery and Plugins
import $ from 'jquery';
window.$ = window.jQuery = $;

// Components
import Events from './components/events';
import Swiper from 'swiper';
window.Swiper = Swiper;

window.App = {
	init() {
		this.events = new Events();
	}
};

App.init();
