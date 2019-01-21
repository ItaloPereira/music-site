// Import jQuery and Plugins
import $ from 'jquery';
window.$ = window.jQuery = $;

// Components
import Menu from './components/menu';
import Modal from './components/modal';
import Events from './components/events';
import Media from './components/media';
import Swiper from 'swiper';
window.Swiper = Swiper;

window.App = {
	init() {
		this.modal = new Menu();
		this.modal = new Modal();
		this.events = new Events();
		this.media = new Media();
	}
};

App.init();
