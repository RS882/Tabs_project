'use strict';
import calc from "./moduls/calc";
import cards from "./moduls/cards";
import forms from "./moduls/forms";
import modal, { openModal } from "./moduls/modal";
import slider from "./moduls/slider";
import tabs from "./moduls/tabs";
import timer from "./moduls/timer";



window.addEventListener(`DOMContentLoaded`, () => {
	const modalTimeoutId = setTimeout(() => openModal(`.modal`, modalTimeoutId), 5000); //открываем по таймеру 

	calc();
	cards();
	forms(`.modal`, `form`, `.modal__dialog`, modalTimeoutId);
	modal(`.modal`, `[data-modal]`, `.modal__dialog`, modalTimeoutId);
	slider({
		slide: '.offer__slide',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		totalCounter: '#total',
		currentCounter: '#current',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner'
	});
	tabs(`.tabheader__item`, `.tabcontent`, `.tabheader__items`, `tabheader__item_active`);
	timer(`.timer`, `.promotion__descr`, `2021-12-31`);
});