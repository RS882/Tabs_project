
import { timeID } from './forms';

export const openModal = (modalSelector, modalTimeoutId) => {
	const modal = document.querySelector(modalSelector);
	modal.classList.add(`show`);
	modal.classList.remove(`hide`);
	document.body.style.overflow = `hidden`;
	modalTimeoutId && clearTimeout(modalTimeoutId);
}

export const closeModal = (modalSelector) => {
	const modal = document.querySelector(modalSelector);
	modal.classList.remove(`show`);
	modal.classList.add(`hide`);
	document.body.style.overflow = ``;
}

const modal = (modalSelector, trigerSeletor, modalWrapperSelector, modalTimeoutId) => {
	//Modal===================================

	const modalOpen = document.querySelectorAll(trigerSeletor),
		modal = document.querySelector(modalSelector);

	const showModalByScroll = () => {// проверям пролностью ли прокручен документ
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal(modalSelector, modalTimeoutId);
			window.removeEventListener(`scroll`, showModalByScroll);
		}
	};

	const closeThank = (timeID, modalWrapperSelector) => {
		timeID && clearTimeout(timeID);
		const thank = document.querySelector(`[data-thank]`);
		thank && thank.remove();
		const prevModalDialog = document.querySelector(modalWrapperSelector)
		prevModalDialog.classList.add(`show`);
		prevModalDialog.classList.remove(`hide`);
	};


	modalOpen.forEach(el => {
		el.addEventListener(`click`, () => openModal(modalSelector, modalTimeoutId));
	});

	modal.addEventListener(`click`, (e) => {//закрытие при клике не на окно а на подложку
		if (e.target === modal || e.target.getAttribute('data-close') == ``) {
			closeThank(timeID, modalWrapperSelector)
			closeModal(modalSelector);
		}
	});
	document.addEventListener(`keydown`, (e) => {// закрытие при нажатии клавиши esc 
		if (e.code === `Escape` && modal.classList.contains(`show`)) {
			closeThank(timeID, modalWrapperSelector)
			closeModal(modalSelector);
		}
	});
	window.addEventListener(`scroll`, showModalByScroll);//открываем при полной прокрутке странцы
}
export default modal;