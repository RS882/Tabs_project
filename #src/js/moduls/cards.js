const cards = () => {

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
	};


	getResurce('http://localhost:3333/menu') // запускаем сервер  json-server --watch -p 3333 db.json
		.then((data) => {
			data.forEach(({ img, altimg, title, descr, price, }) => {
				new MenuCart(img, altimg, title, descr, price, `.menu .container`).render();
			});
		});


}

export default cards;