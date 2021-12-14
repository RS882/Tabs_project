'use strict';
window.addEventListener(`DOMContentLoaded`, () => {

	// //tabs=======================================
	// const tabs = document.querySelectorAll(`.tabheader__item`),
	// 	tabsContent = document.querySelectorAll(`.tabcontent`),
	// 	tabsParent = document.querySelector(`.tabheader__items`);

	// function hideTabContent() {
	// 	tabsContent.forEach(item => {
	// 		item.classList.add(`hide`);
	// 		item.classList.remove(`show`, `fade`);
	// 	});
	// 	tabs.forEach(item => {
	// 		item.classList.remove(`tabheader__item_active`);
	// 	});
	// }

	// function showTabContent(i = 0) {
	// 	tabsContent[i].classList.add(`show`, `fade`);
	// 	tabsContent[i].classList.remove(`hide`);

	// 	tabs[i].classList.add(`tabheader__item_active`);
	// }
	// hideTabContent();
	// showTabContent();


	// tabsParent.addEventListener(`click`, (event) => {
	// 	const target = event.target;
	// 	if (target && target.classList.contains(`tabheader__item`)) {
	// 		tabs.forEach((item, i) => {
	// 			if (target == item) {
	// 				hideTabContent();
	// 				showTabContent(i);
	// 			}
	// 		});
	// 	}
	// });

	// //Timer=================================
	// const deadLine = `2021-12-31`;

	// function setPromoDate(selector, deadLine) {
	// 	const datePromo = new Date(deadLine),
	// 		selec = document.querySelector(selector),
	// 		day = (`0` + datePromo.getDate()).slice(-2),
	// 		months = {
	// 			0: 'января',
	// 			1: 'февраля',
	// 			2: 'марта',
	// 			3: 'апреля',
	// 			4: 'мая',
	// 			5: 'июня',
	// 			6: 'июля',
	// 			7: 'августа',
	// 			8: 'сентября',
	// 			9: 'октября',
	// 			10: 'ноября',
	// 			11: 'декабря',
	// 		},
	// 		month = months[datePromo.getMonth()],
	// 		elem = document.createTextNode(((datePromo - new Date() > 0) ? `Акция закончится ` : `Акция закончилась `)
	// 			+ `${day} ${month} в 00: 00`);
	// 	selec.lastChild.remove();
	// 	selec.append(elem);
	// }

	// function getTimeRemaining(endTime) {
	// 	const t = Date.parse(endTime) - Date.parse(new Date());
	// 	if (t > 0) {
	// 		return {
	// 			'total': t,
	// 			days: Math.floor(t / (1000 * 60 * 60 * 24)),
	// 			hours: Math.floor((t / (1000 * 60 * 60) % 24)),
	// 			minutes: Math.floor((t / 1000 / 60) % 60),
	// 			seconds: Math.floor((t / 1000) % 60),
	// 		};
	// 	}
	// 	return {
	// 		'total': t,
	// 		days: 0,
	// 		hours: 0,
	// 		minutes: 0,
	// 		seconds: 0,
	// 	};

	// }

	// function setClock(selector, endTime) {
	// 	const timer = document.querySelector(selector),
	// 		days = timer.querySelector(`#days`),
	// 		hours = timer.querySelector(`#hours`),
	// 		minutes = timer.querySelector(`#minutes`),
	// 		seconds = timer.querySelector(`#seconds`),
	// 		timeInterval = setInterval(updateClock, 1000);
	// 	updateClock();

	// 	function updateClock() {
	// 		const t = getTimeRemaining(endTime);

	// 		days.innerHTML = (`0` + t.days).slice(-2);
	// 		hours.innerHTML = (`0` + t.hours).slice(-2);
	// 		minutes.innerHTML = (`0` + t.minutes).slice(-2);
	// 		seconds.innerHTML = (`0` + t.seconds).slice(-2);

	// 		if (t.total <= 0) {
	// 			clearInterval(timeInterval);
	// 		}
	// 	}
	// }
	// setPromoDate(`.promotion__descr`, deadLine);
	// setClock(`.timer`, deadLine);

	// //Modal===================================
	// let timeID;
	// const modalOpen = document.querySelectorAll(`[data-modal]`),
	// 	modal = document.querySelector(`.modal`),

	// 	openModal = () => {

	// 		modal.classList.add(`show`);
	// 		modal.classList.remove(`hide`);
	// 		document.body.style.overflow = `hidden`;
	// 		clearTimeout(modalTimeoutId);
	// 	},

	// 	closeModal = () => {

	// 		modal.classList.remove(`show`);
	// 		modal.classList.add(`hide`);
	// 		document.body.style.overflow = ``;
	// 	},

	// 	showModalByScroll = () => {// проверям пролностью ли прокручен документ
	// 		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
	// 			openModal();
	// 			window.removeEventListener(`scroll`, showModalByScroll);
	// 		}
	// 	};


	// modalOpen.forEach(el => {
	// 	el.addEventListener(`click`, openModal);
	// });

	// modal.addEventListener(`click`, (e) => {//закрытие при клике не на окно а на подложку
	// 	if (e.target === modal || e.target.getAttribute('data-close') == ``) {
	// 		timeID && clearTimeout(timeID);
	// 		const thank = document.querySelector(`[data-thank]`);
	// 		thank && thank.remove();
	// 		const prevModalDialog = document.querySelector(`.modal__dialog`)
	// 		prevModalDialog.classList.add(`show`);
	// 		prevModalDialog.classList.remove(`hide`);
	// 		closeModal();
	// 	}
	// });
	// document.addEventListener(`keydown`, (e) => {// закрытие при нажатии клавиши esc 
	// 	if (e.code === `Escape` && modal.classList.contains(`show`)) {
	// 		closeModal();
	// 	}
	// });

	// const modalTimeoutId = setTimeout(openModal, 50000); //открываем по таймеру 

	// window.addEventListener(`scroll`, showModalByScroll);//открываем при полной прокрутке странцы



	// // карточка товара Class

	// class MenuCart {
	// 	constructor(src, alt, subtitle, descr, price, parentSelector, ...classes) {
	// 		this.src = src;
	// 		this.alt = alt;
	// 		this.subtitle = subtitle;
	// 		this.descr = descr;
	// 		this.price = price;
	// 		this.classes = classes;
	// 		this.parent = document.querySelector(parentSelector);
	// 		this.transfer = 27;
	// 		this.changeToUAH();
	// 	}
	// 	changeToUAH() {
	// 		this.price *= this.transfer;
	// 	}

	// 	render() {
	// 		const elem = document.createElement(`div`);
	// 		if (!this.classes.length) {
	// 			this.element = `menu__item`;
	// 			elem.classList.add(this.element)
	// 		} else {
	// 			this.classes.forEach(classN => elem.classList.add(classN));
	// 		};

	// 		elem.innerHTML = `
	// 					<img src=${this.src} alt=${this.alt}>
	// 					<h3 class="menu__item-subtitle">${this.subtitle}</h3>
	// 					<div class="menu__item-descr">${this.descr}</div>
	// 					<div class="menu__item-divider"></div>
	// 					<div class="menu__item-price">
	// 						<div class="menu__item-cost">Цена:</div>
	// 						<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
	// 					</div>
	// 						 `;
	// 		this.parent.append(elem);
	// 	}
	// }

	// const getResurce = async (url) => {
	// 	const res = await fetch(url);

	// 	if (!res.ok) {// если сервер выдал ошибку - выводм в консоль сообщение
	// 		throw new Error(`Could not fetch ${url}, status ${res.status}`)
	// 	}
	// 	return await res.json();
	// };


	// getResurce('http://localhost:3333/menu') // запускаем сервер  json-server --watch -p 3333 db.json
	// 	.then((data) => {
	// 		data.forEach(({ img, altimg, title, descr, price, }) => {
	// 			new MenuCart(img, altimg, title, descr, price, `.menu .container`).render();
	// 		});
	// 	});


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

	// //Forms

	// const forms = document.querySelectorAll(`form`);

	// const message = {
	// 	loading: `img/form/spinner.svg`,
	// 	success: `Спасибо! Скоро мы с вами свяжемся`,
	// 	failure: `Что-то пошло не так.....`,
	// };

	// forms.forEach(item => {
	// 	bindPostData(item);
	// });

	// const postData = async (url, data) => {
	// 	const res = await fetch(url, {
	// 		method: 'POST',
	// 		headers: { //для formData- не испольщуем headers
	// 			'Content-type': 'application/json'
	// 		},
	// 		body: data,
	// 	});
	// 	return await res.json();
	// }

	// function bindPostData(form) {
	// 	form.addEventListener(`submit`, (e) => {
	// 		e.preventDefault(); // убирает дейстиве по умолчению- перезагрузку страницы

	// 		const statusMessage = document.createElement(`img`);
	// 		statusMessage.src = message.loading;
	// 		statusMessage.style.cssText = `
	// 					display: block;
	// 					margin: 0 auto;
	// 				`;
	// 		form.insertAdjacentElement('afterend', statusMessage);



	// 		const formData = new FormData(form);

	// 		const json = JSON.stringify(Object.fromEntries(formData.entries()));


	// 		postData('http://localhost:3333/requests', json)
	// 			.then(data => {
	// 				// console.log(data);
	// 				showThanksModal(message.success);
	// 				statusMessage.remove();
	// 			}).catch(() => {
	// 				showThanksModal(message.failure);
	// 			}).finally(() => {
	// 				form.reset();//обновляем форму, убираем сообщение
	// 			});

	// 	})
	// }

	// function showThanksModal(massege) {
	// 	const prevModalDialog = document.querySelector(`.modal__dialog`);
	// 	prevModalDialog.classList.add(`hide`);
	// 	openModal();

	// 	const thanksModal = document.createElement(`div`);
	// 	thanksModal.classList.add(`modal__dialog`);
	// 	thanksModal.dataset.thank = true;
	// 	thanksModal.innerHTML = `
	// 			<div class="modal__content">
	// 				<div data-close class="modal__close">&times;</div>
	// 				<div class="modal__title">${massege}</div>
	// 			</div>
	// 			`;
	// 	document.querySelector(`.modal`).append(thanksModal);

	// 	timeID = setTimeout(() => {
	// 		thanksModal.remove();
	// 		prevModalDialog.classList.add(`show`);
	// 		prevModalDialog.classList.remove(`hide`);
	// 		closeModal();
	// 	}, 4000);
	// }
	// slider 1 (не бесконечный) Мой вариант-------------------------
	// const slides = document.querySelectorAll(`.offer__slide`),
	// 	switchs = document.querySelector(`.offer__slider-counter`),
	// 	prev = switchs.querySelector(`.offer__slider-prev`),
	// 	next = switchs.querySelector(`.offer__slider-next`),
	// 	total = slides.length,
	// 	slideHide = (slide) => {
	// 		slide.classList.add(`hide`);
	// 		slide.classList.remove(`show`, `fade`)
	// 	},
	// 	slideShow = (slide) => {
	// 		slide.classList.remove(`hide`);
	// 		slide.classList.add(`show`, `fade`)
	// 	},
	// 	setCurrentNum = (id, num) => {
	// 		document.querySelector(id).textContent = (`0` + num).slice(-2);
	// 	};

	// let current = 0;
	// prev.style = `visibility: hidden`;
	// setCurrentNum(`#total`, total);
	// setCurrentNum(`#current`, current + 1)

	// slides.forEach(el => slideHide(el);
	// slideShow(slides[0]);

	// switchs.addEventListener(`click`, e => {

	// 	const target = e.target,
	// 		addVisible = (elem, is) => {
	// 			next.style = `visibility: visible;`;
	// 			prev.style = `visibility: visible;`;
	// 			if (current === is) {
	// 				elem.style = `visibility: hidden;`
	// 				return;
	// 			}
	// 		};


	// 	if (target && target.closest(`.offer__slider-prev`)) {
	// 		slideHide(slides[current]);
	// 		--current;
	// 		slideShow(slides[current]);
	// 		setCurrentNum(`#current`, current + 1)
	// 		addVisible(prev, 0);
	// 	}
	// 	if (target && target.closest(`.offer__slider-next`)) {
	// 		slideHide(slides[current]);
	// 		++current;
	// 		slideShow(slides[current]);
	// 		setCurrentNum(`#current`, current + 1)
	// 		addVisible(next, total - 1);
	// 	}
	// })

	//slider 1 бесконечный--------------
	// const slides = document.querySelectorAll(`.offer__slide`),
	// 	prev = document.querySelector(`.offer__slider-prev`),
	// 	next = document.querySelector(`.offer__slider-next`),
	// 	total = document.querySelector(`#total`),
	// 	current = document.querySelector(`#current`),


	// 	setNumber = (elem, number) => {

	// 		if (number < 10) {
	// 			elem.textContent = `0${number}`;
	// 		} else {
	// 			elem.textContent = `${number}`;
	// 		}
	// 	};

	// let index = 1;
	// setNumber(total, slides.length);

	// const showSlide = (n) => {
	// 	const slideHide = slide => {
	// 		slide.classList.add(`hide`);
	// 		slide.classList.remove(`show`, `fade`)
	// 	},
	// 		slideShow = slide => {
	// 			slide.classList.remove(`hide`);
	// 			slide.classList.add(`show`, `fade`)
	// 		};

	// 	if (n < 1) {
	// 		index = slides.length;
	// 	}
	// 	if (n > slides.length) {
	// 		index = 1;
	// 	}
	// 	slides.forEach(el => slideHide(el));
	// 	slideShow(slides[index - 1]);
	// 	setNumber(current, index);
	// },
	// 	plusSlide = (n) => {
	// 		showSlide(index += n)
	// 	};

	// showSlide(index);
	// prev.addEventListener(`click`, () => plusSlide(-1));
	// next.addEventListener(`click`, () => plusSlide(1));

	//slider 2 --------------
	// const slidesWrapper = document.querySelector(`.offer__slider-wrapper`),
	// 	slidesFields = slidesWrapper.querySelector(`.offer__slider-inner`),
	// 	width = window.getComputedStyle(slidesWrapper).width,//ширина окна слайдера
	// 	slides = slidesWrapper.querySelectorAll(`.offer__slide`),
	// 	prev = document.querySelector(`.offer__slider-prev`),
	// 	next = document.querySelector(`.offer__slider-next`),
	// 	total = document.querySelector(`#total`),
	// 	current = document.querySelector(`#current`),
	// 	dots = [],
	// 	addCurrentNumber = () => {
	// 		if (slides.length < 10) {
	// 			current.textContent = `0${slideIndex}`;
	// 		} else {
	// 			current.textContent = slideIndex;
	// 		}
	// 	},
	// 	addActiveDot = () => {
	// 		dots.forEach(dot => {
	// 			dot.classList.remove('_active');
	// 		});
	// 		dots[slideIndex - 1].classList.add('_active');
	// 	};


	// let slideIndex = 1,
	// 	offset = 0;

	// if (slides.length < 10) {
	// 	total.textContent = `0${slides.length}`;
	// 	current.textContent = `0${slideIndex}`;
	// } else {
	// 	total.textContent = slides.length;
	// 	current.textContent = slideIndex;
	// }


	// slidesFields.style.width = 100 * slides.length + '%'; //устанавливаем ширину всего слайдера
	// slidesFields.style.display = 'flex';
	// slidesFields.style.transition = '0.5s all';

	// slidesWrapper.style.overflow = 'hidden';

	// slides.forEach(slide => slide.style.width = width);// устанвливаем ширину каждого слайда как ширину окна слайдера

	// //slider навигация------------------------
	// const dotWrapper = document.createElement(`ol`);
	// dotWrapper.classList.add('carousel-indicators');
	// document.querySelector(`.offer__slider`).append(dotWrapper);

	// for (let i = 0; i < slides.length; i++) {
	// 	const dot = document.createElement(`li`);
	// 	dot.classList.add('dot');
	// 	dot.setAttribute('data-slides', i);

	// 	if (i == 0) dot.classList.add('_active');

	// 	dotWrapper.append(dot);

	// 	dots.push(dot);
	// }
	// //----------------
	// function deleteNotDigits(str) {
	// 	return +str.replace(/\D/g, '');
	// }

	// next.addEventListener('click', () => {
	// 	if (offset == deleteNotDigits(width) * (slides.length - 1)) {
	// 		offset = 0; // если последний слайд
	// 	} else {
	// 		offset += deleteNotDigits(width);
	// 	}

	// 	slidesFields.style.transform = `translateX(-${offset}px`;

	// 	if (slideIndex == slides.length) {
	// 		slideIndex = 1;
	// 	} else {
	// 		slideIndex++;
	// 	}

	// 	addCurrentNumber();
	// 	addActiveDot();



	// });
	// prev.addEventListener('click', () => {
	// 	if (offset == 0) {
	// 		offset = deleteNotDigits(width) * (slides.length - 1)// если первый слайд
	// 	} else {
	// 		offset -= deleteNotDigits(width);
	// 	}

	// 	slidesFields.style.transform = `translateX(-${offset}px`;

	// 	if (slideIndex == 1) {
	// 		slideIndex = slides.length;
	// 	} else {
	// 		slideIndex--;
	// 	}

	// 	addCurrentNumber();
	// 	addActiveDot();
	// });


	// //slider навигация
	// dotWrapper.addEventListener('click', (e) => {

	// 	if (e.target && e.target.hasAttribute('data-slides')) {

	// 		const dotNumber = +e.target.getAttribute('data-slides');
	// 		slideIndex = dotNumber + 1;

	// 		offset = dotNumber * deleteNotDigits(width);

	// 		slidesFields.style.transform = `translateX(-${offset}px`;

	// 		addCurrentNumber();
	// 		addActiveDot();
	// 	}
	// });
	//----------------------------------------
	//Calc---------------------------------

	// const result = document.querySelector(`.calculating__result span`);
	// const userParams = localStorage.getItem(`userParams`) ?
	// 	JSON.parse(localStorage.getItem(`userParams`))
	// 	: {
	// 		sex: `female`,
	// 		ratio: `1.375`,
	// 		height: null,
	// 		weight: null,
	// 		age: null,
	// 	};

	// const initialCalc = (selector, activeClass) => {
	// 	document.querySelectorAll(`${selector} div`).forEach(e => {
	// 		e.classList.remove(activeClass);
	// 		if (e.getAttribute(`data-sex`) === userParams.sex
	// 			|| +e.getAttribute(`data-ratio`) === +userParams.ratio) e.classList.add(activeClass);
	// 	});
	// };

	// initialCalc('#gender', `calculating__choose-item_active`);
	// initialCalc('.calculating__choose_big', `calculating__choose-item_active`);

	// const setResult = (params) => {
	// 	for (const key in params) {
	// 		if (!params[key]) {
	// 			result.textContent = '____';
	// 			return;
	// 		}
	// 	}
	// 	const formula = (c) => Math.round((c[0] + (c[1] * params.weight)
	// 		+ (c[2] * params.height) - (c[3] * params.age)) * params.ratio);
	// 	if (params.sex === `female`) result.textContent = formula([88.36, 13.4, 4.8, 5.7]);
	// 	if (params.sex === `male`) result.textContent = formula([447.6, 9.2, 3.1, 4.3]);
	// };

	// setResult(userParams);

	// const getStaticParams = (parentSelector, activeClass) => {
	// 	document.querySelector(parentSelector).addEventListener(`click`, (e) => {
	// 		if (e.target.matches([`[data-sex]`, `[data-ratio]`])) {
	// 			const setData = (varValue, attr) => (e.target.hasAttribute(attr))
	// 				? e.target.getAttribute(attr)
	// 				: varValue;
	// 			userParams.sex = setData(userParams.sex, `data-sex`);
	// 			userParams.ratio = +setData(userParams.ratio, `data-ratio`)
	// 			document.querySelectorAll(`${parentSelector} div`).forEach(e => e.classList.remove(activeClass));
	// 			e.target.classList.add(activeClass);
	// 			localStorage.setItem(`userParams`, JSON.stringify(userParams));
	// 			setResult(userParams);
	// 		}
	// 	});
	// };
	// const getDinamicParams = (selector) => {
	// 	const input = document.querySelector(selector);
	// 	const getCoords = (elem) => {
	// 		const box = elem.getBoundingClientRect();
	// 		return {
	// 			top: box.top,
	// 			left: box.left,
	// 		};
	// 	};
	// 	const addAlert = (parentElem) => {
	// 		if (!parentElem.nextElementSibling || !parentElem.nextElementSibling.classList.contains(`input_alert`)) {
	// 			const alert = document.createElement(`div`);
	// 			alert.className = `input_alert`;
	// 			alert.textContent = `!Ошибка! Можно вводить только цифры!`;
	// 			const coord = getCoords(input);
	// 			const coordParent = getCoords(document.querySelector(`.calculating__choose_medium`))
	// 			alert.style.left = coord.left - coordParent.left + "px";
	// 			alert.style.top = coordParent.top - coord.top - 40 + "px";
	// 			parentElem.style.border = `2px solid rgb(187, 64, 64)`;
	// 			parentElem.after(alert);
	// 		}
	// 	};

	// 	input.addEventListener(`input`, () => {
	// 		if (input.value.match(/\D/g)) {
	// 			input.value = (input.value.match(/\d/g) || []).join('');
	// 			addAlert(input)
	// 		} else {
	// 			if (input.nextElementSibling && input.nextElementSibling.classList.contains(`input_alert`)) {
	// 				input.nextElementSibling.remove();
	// 				input.style.border = ``;
	// 			};
	// 			switch (input.getAttribute('id')) {
	// 				case 'height':
	// 					userParams.height = +input.value;
	// 					break;
	// 				case 'weight':
	// 					userParams.weight = +input.value;
	// 					break;
	// 				case 'age':
	// 					userParams.age = +input.value;
	// 					break;
	// 			}
	// 		};
	// 		setResult(userParams);
	// 	});
	// };
	// getStaticParams('#gender', `calculating__choose-item_active`);
	// getStaticParams('.calculating__choose_big', `calculating__choose-item_active`);
	// getDinamicParams('#height');
	// getDinamicParams('#weight');
	// getDinamicParams('#age');
})




