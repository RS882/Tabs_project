'use strict';
window.addEventListener(`DOMContentLoaded`, () => {

	//tabs=======================================
	const tabs = document.querySelectorAll(`.tabheader__item`),
		tabsContent = document.querySelectorAll(`.tabcontent`),
		tabsParent = document.querySelector(`.tabheader__items`);

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add(`hide`);
			item.classList.remove(`show`, `fade`);
		});
		tabs.forEach(item => {
			item.classList.remove(`tabheader__item_active`);
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add(`show`, `fade`);
		tabsContent[i].classList.remove(`hide`);

		tabs[i].classList.add(`tabheader__item_active`);
	}
	hideTabContent();
	showTabContent();


	tabsParent.addEventListener(`click`, (event) => {
		const target = event.target;
		if (target && target.classList.contains(`tabheader__item`)) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

	//Timer=================================
	const deadLine = `2021-08-06`;

	function setPromoDate(selector, deadLine) {
		const datePromo = new Date(deadLine),
			selec = document.querySelector(selector),
			day = (`0` + datePromo.getDate()).slice(-2),
			months = {
				0: 'января',
				1: 'февраля',
				2: 'марта',
				3: 'апреля',
				4: 'мая',
				5: 'июня',
				6: 'июля',
				7: 'августа',
				8: 'сентября',
				9: 'октября',
				10: 'ноября',
				11: 'декабря',
			},
			month = months[datePromo.getMonth()],
			elem = document.createTextNode(((datePromo - new Date() > 0) ? `Акция закончится ` : `Акция закончилась `)
				+ `${day} ${month} в 00: 00`);
		selec.lastChild.remove();
		selec.append(elem);
	}

	function getTimeRemaining(endTime) {
		const t = Date.parse(endTime) - Date.parse(new Date());
		if (t > 0) {
			return {
				'total': t,
				days: Math.floor(t / (1000 * 60 * 60 * 24)),
				hours: Math.floor((t / (1000 * 60 * 60) % 24)),
				minutes: Math.floor((t / 1000 / 60) % 60),
				seconds: Math.floor((t / 1000) % 60),
			};
		}
		return {
			'total': t,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};

	}

	function setClock(selector, endTime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector(`#days`),
			hours = timer.querySelector(`#hours`),
			minutes = timer.querySelector(`#minutes`),
			seconds = timer.querySelector(`#seconds`),
			timeInterval = setInterval(updateClock, 1000);
		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endTime);

			days.innerHTML = (`0` + t.days).slice(-2);
			hours.innerHTML = (`0` + t.hours).slice(-2);
			minutes.innerHTML = (`0` + t.minutes).slice(-2);
			seconds.innerHTML = (`0` + t.seconds).slice(-2);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}
	setPromoDate(`.promotion__descr`, deadLine);
	setClock(`.timer`, deadLine);

	//Modal===================================

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



	// карточка товара Class

	class MenuCart {
		constructor(src, alt, subtitle, descr, price, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.subtitle = subtitle;
			this.descr = descr;
			this.price = price;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 27;
			this.changeToUAH();
		}
		changeToUAH() {
			this.price *= this.transfer;
		}

		render() {
			const elem = document.createElement(`div`);
			if (!this.classes.length) {
				this.element = `menu__item`;
				elem.classList.add(this.element)
			} else {
				this.classes.forEach(classN => elem.classList.add(classN));
			};

			elem.innerHTML = `
						<img src=${this.src} alt=${this.alt}>
						<h3 class="menu__item-subtitle">${this.subtitle}</h3>
						<div class="menu__item-descr">${this.descr}</div>
						<div class="menu__item-divider"></div>
						<div class="menu__item-price">
							<div class="menu__item-cost">Цена:</div>
							<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
						</div>
							 `;
			this.parent.append(elem);
		}
	}

	const getResurce = async (url) => {
		const res = await fetch(url);

		if (!res.ok) {// если сервер выдал ошибку - выводм в консоль сообщение
			throw new Error(`Could not fetch ${url}, status ${res.status}`)
		}
		return await res.json();
	}

	getResurce('http://localhost:3000/menu')
		.then((data) => {
			data.forEach(({ img, altimg, title, descr, price, }) => {
				new MenuCart(img, altimg, title, descr, price, `.menu .container`).render()
			})
		})


	// еще один  спосооб если не требуется шаблонов.
	// getResurce('http://localhost:3000/menu')
	// 	.then((data) => createCart(data))

	// function createCart(data) {
	// 	data.forEach(({ img, altimg, title, descr, price, }) => {
	// 		const elem = document.createElement('div');
	// 		elem.classList.add('menu__item');
	// 		elem.innerHTML = `
	// 		<img src=${img} alt=${altimg}>
	// 		<h3 class="menu__item-subtitle">${title}</h3>
	// 		<div class="menu__item-descr">${descr}</div>
	// 		<div class="menu__item-divider"></div>
	// 		<div class="menu__item-price">
	// 			<div class="menu__item-cost">Цена:</div>
	// 			<div class="menu__item-total"><span>${price}</span> грн/день</div>
	// 		</div>
	// 		`;
	// 		document.querySelector(`.menu .container`).append(elem)
	// 	})
	// }

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
			method: "POST",
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

			form.insertAdjacentElement('afterend', statusMessage);

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));


			postData('http://localhost:3000/requests', json)
				.then(data => {
					console.log(data);
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
		thanksModal.innerHTML = `
				<div class="modal__content">
					<div data-close class="modal__close">&times;</div>
					<div class="modal__title">${massege}</div>
				</div>
				`;
		document.querySelector(`.modal`).append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add(`show`);
			prevModalDialog.classList.remove(`hide`);
			closeModal();
		}, 40000);
	}


});
