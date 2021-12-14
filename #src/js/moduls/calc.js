const calc = () => {
	const result = document.querySelector(`.calculating__result span`);
	const userParams = localStorage.getItem(`userParams`) ?
		JSON.parse(localStorage.getItem(`userParams`))
		: {
			sex: `female`,
			ratio: `1.375`,
			height: null,
			weight: null,
			age: null,
		};

	const initialCalc = (selector, activeClass) => {
		document.querySelectorAll(`${selector} div`).forEach(e => {
			e.classList.remove(activeClass);
			if (e.getAttribute(`data-sex`) === userParams.sex
				|| +e.getAttribute(`data-ratio`) === +userParams.ratio) e.classList.add(activeClass);
		});
	};

	initialCalc('#gender', `calculating__choose-item_active`);
	initialCalc('.calculating__choose_big', `calculating__choose-item_active`);

	const setResult = (params) => {
		for (const key in params) {
			if (!params[key]) {
				result.textContent = '____';
				return;
			}
		}
		const formula = (c) => Math.round((c[0] + (c[1] * params.weight)
			+ (c[2] * params.height) - (c[3] * params.age)) * params.ratio);
		if (params.sex === `female`) result.textContent = formula([88.36, 13.4, 4.8, 5.7]);
		if (params.sex === `male`) result.textContent = formula([447.6, 9.2, 3.1, 4.3]);
	};

	setResult(userParams);

	const getStaticParams = (parentSelector, activeClass) => {
		document.querySelector(parentSelector).addEventListener(`click`, (e) => {
			if (e.target.matches([`[data-sex]`, `[data-ratio]`])) {
				const setData = (varValue, attr) => (e.target.hasAttribute(attr))
					? e.target.getAttribute(attr)
					: varValue;
				userParams.sex = setData(userParams.sex, `data-sex`);
				userParams.ratio = +setData(userParams.ratio, `data-ratio`)
				document.querySelectorAll(`${parentSelector} div`).forEach(e => e.classList.remove(activeClass));
				e.target.classList.add(activeClass);
				localStorage.setItem(`userParams`, JSON.stringify(userParams));
				setResult(userParams);
			}
		});
	};
	const getDinamicParams = (selector) => {
		const input = document.querySelector(selector);
		const getCoords = (elem) => {
			const box = elem.getBoundingClientRect();
			return {
				top: box.top,
				left: box.left,
			};
		};
		const addAlert = (parentElem) => {
			if (!parentElem.nextElementSibling || !parentElem.nextElementSibling.classList.contains(`input_alert`)) {
				const alert = document.createElement(`div`);
				alert.className = `input_alert`;
				alert.textContent = `!Ошибка! Можно вводить только цифры!`;
				const coord = getCoords(input);
				const coordParent = getCoords(document.querySelector(`.calculating__choose_medium`))
				alert.style.left = coord.left - coordParent.left + "px";
				alert.style.top = coordParent.top - coord.top - 40 + "px";
				parentElem.style.border = `2px solid rgb(187, 64, 64)`;
				parentElem.after(alert);
			}
		};

		input.addEventListener(`input`, () => {
			if (input.value.match(/\D/g)) {
				input.value = (input.value.match(/\d/g) || []).join('');
				addAlert(input)
			} else {
				if (input.nextElementSibling && input.nextElementSibling.classList.contains(`input_alert`)) {
					input.nextElementSibling.remove();
					input.style.border = ``;
				};
				switch (input.getAttribute('id')) {
					case 'height':
						userParams.height = +input.value;
						break;
					case 'weight':
						userParams.weight = +input.value;
						break;
					case 'age':
						userParams.age = +input.value;
						break;
				}
			};
			setResult(userParams);
		});
	};
	getStaticParams('#gender', `calculating__choose-item_active`);
	getStaticParams('.calculating__choose_big', `calculating__choose-item_active`);
	getDinamicParams('#height');
	getDinamicParams('#weight');
	getDinamicParams('#age');
}

export default calc;