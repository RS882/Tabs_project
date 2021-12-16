import { openModal, closeModal } from "./modal";
import { postData } from './../servises/servises';

export let timeID;

const forms = (modalSelector, formSelector, modalWrapperSelector, modalTimeoutId) => {
	//Forms

	const forms = document.querySelectorAll(formSelector);

	const message = {
		loading: `img/form/spinner.svg`,
		success: `Спасибо! Скоро мы с вами свяжемся`,
		failure: `Что-то пошло не так.....`,
	};

	const bindPostData = (form) => {
		form.addEventListener(`submit`, (e) => {
			e.preventDefault(); // убирает дейстиве по умолчению- перезагрузку страницы
			const statusMessage = document.createElement(`img`);
			statusMessage.src = message.loading;
			form.querySelector(`button`).setAttribute(`disabled`, ``);
			statusMessage.style.cssText = `
						display: block;
						margin: 0 auto;
					`;
			form.insertAdjacentElement('afterend', statusMessage);
			const formData = new FormData(form);
			const json = JSON.stringify(Object.fromEntries(formData.entries()));
			postData('http://localhost:3333/requests', json)
				.then(data => {
					showThanksModal(message.success);
					statusMessage.remove();
				}).catch(() => {
					showThanksModal(message.failure);
					statusMessage.remove();
				}).finally(() => {
					form.querySelector(`button`).removeAttribute(`disabled`);
					form.reset();//обновляем форму, убираем сообщение
				});

		});
	};

	const showThanksModal = (massege) => {
		const prevModalDialog = document.querySelector(modalWrapperSelector);
		prevModalDialog.classList.add(`hide`);
		openModal(modalSelector, modalTimeoutId);
		const thanksModal = document.createElement(`div`);
		thanksModal.classList.add(modalWrapperSelector.slice(1));
		thanksModal.dataset.thank = ``;
		thanksModal.innerHTML = `
				<div class="modal__content">
					<div data-close class="modal__close">&times;</div>
					<div class="modal__title">${massege}</div>
				</div>
				`;
		document.querySelector(modalSelector).append(thanksModal);

		timeID = setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add(`show`);
			prevModalDialog.classList.remove(`hide`);
			closeModal(modalSelector);
		}, 3000);
	};

	forms.forEach(item => bindPostData(item));
}

export default forms;