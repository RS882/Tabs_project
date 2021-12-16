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
	slider();
	tabs();
	timer();
});