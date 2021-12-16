const timer = (timerSelector, promotionDateSelecor, deadLine) => {
	//Timer=================================
	const setPromoDate = (selector, deadLine) => {
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
	};

	const getTimeRemaining = (endTime) => {
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
	};
	const setClock = (selector, endTime) => {
		const timer = document.querySelector(selector),
			days = timer.querySelector(`#days`),
			hours = timer.querySelector(`#hours`),
			minutes = timer.querySelector(`#minutes`),
			seconds = timer.querySelector(`#seconds`),
			timeInterval = setInterval(updateClock, 1000);
		function updateClock() {
			const t = getTimeRemaining(endTime);
			days.innerHTML = (`0` + t.days).slice(-2);
			hours.innerHTML = (`0` + t.hours).slice(-2);
			minutes.innerHTML = (`0` + t.minutes).slice(-2);
			seconds.innerHTML = (`0` + t.seconds).slice(-2);
			t.total <= 0 && clearInterval(timeInterval);
		}
		updateClock();

	}
	setPromoDate(promotionDateSelecor, deadLine);
	setClock(timerSelector, deadLine);
}
export default timer;