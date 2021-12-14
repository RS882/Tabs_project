const forms = () => {
	//Forms

	const forms = document.querySelectorAll(`form`);

	const message = {
		loading: `img/form/spinner.svg`,
		success: `Спасибо! Скоро мы с вами свяжемся`,
		failure: `Что-то пошло не так.....`,
	};

	forms.forEach(item => {
		bindPostData(item);
	});

	const postData = async (url, data) => {
		const res = await fetch(url, {
			method: 'POST',
			headers: { //для formData- не испольщуем headers
				'Content-type': 'application/json'
			},
			body: data,
		});
		return await res.json();
	}

	function bindPostData(form) {
		form.addEventListener(`submit`, (e) => {
			e.preventDefault(); // убирает дейстиве по умолчению- перезагрузку страницы

			const statusMessage = document.createElement(`img`);
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
						display: block;
						margin: 0 auto;
					`;
			form.insertAdjacentElement('afterend', statusMessage);



			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));


			postData('http://localhost:3333/requests', json)
				.then(data => {
					// console.log(data);
					showThanksModal(message.success);
					statusMessage.remove();
				}).catch(() => {
					showThanksModal(message.failure);
				}).finally(() => {
					form.reset();//обновляем форму, убираем сообщение
				});

		})
	}

	function showThanksModal(massege) {
		const prevModalDialog = document.querySelector(`.modal__dialog`);
		prevModalDialog.classList.add(`hide`);
		openModal();

		const thanksModal = document.createElement(`div`);
		thanksModal.classList.add(`modal__dialog`);
		thanksModal.dataset.thank = true;
		thanksModal.innerHTML = `
				<div class="modal__content">
					<div data-close class="modal__close">&times;</div>
					<div class="modal__title">${massege}</div>
				</div>
				`;
		document.querySelector(`.modal`).append(thanksModal);

		timeID = setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add(`show`);
			prevModalDialog.classList.remove(`hide`);
			closeModal();
		}, 4000);
	}
}

export default forms;