const modal = () => {
	//Modal===================================
	let timeID;
	const modalOpen = document.querySelectorAll(`[data-modal]`),
		modal = document.querySelector(`.modal`),

		openModal = () => {

			modal.classList.add(`show`);
			modal.classList.remove(`hide`);
			document.body.style.overflow = `hidden`;
			clearTimeout(modalTimeoutId);
		},

		closeModal = () => {

			modal.classList.remove(`show`);
			modal.classList.add(`hide`);
			document.body.style.overflow = ``;
		},

		showModalByScroll = () => {// проверям пролностью ли прокручен документ
			if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
				openModal();
				window.removeEventListener(`scroll`, showModalByScroll);
			}
		};


	modalOpen.forEach(el => {
		el.addEventListener(`click`, openModal);
	});

	modal.addEventListener(`click`, (e) => {//закрытие при клике не на окно а на подложку
		if (e.target === modal || e.target.getAttribute('data-close') == ``) {
			timeID && clearTimeout(timeID);
			const thank = document.querySelector(`[data-thank]`);
			thank && thank.remove();
			const prevModalDialog = document.querySelector(`.modal__dialog`)
			prevModalDialog.classList.add(`show`);
			prevModalDialog.classList.remove(`hide`);
			closeModal();
		}
	});
	document.addEventListener(`keydown`, (e) => {// закрытие при нажатии клавиши esc 
		if (e.code === `Escape` && modal.classList.contains(`show`)) {
			closeModal();
		}
	});

	const modalTimeoutId = setTimeout(openModal, 50000); //открываем по таймеру 

	window.addEventListener(`scroll`, showModalByScroll);//открываем при полной прокрутке странцы

}
export default modal;