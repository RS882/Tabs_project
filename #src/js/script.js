'use strict';
import calc from "./moduls/calc";
import cards from "./moduls/cards";
import forms from "./moduls/forms";
import modal from "./moduls/modal";
import slider from "./moduls/slider";
import tabs from "./moduls/tabs";
import timer from "./moduls/timer";


window.addEventListener(`DOMContentLoaded`, () => {
	calc();
	cards();
	forms();
	modal();
	slider();
	tabs();
	timer();
});