const slider = ({ slide, nextArrow, prevArrow,
	totalCounter, currentCounter, wrapper, field }) => {
	const slidesWrapper = document.querySelector(wrapper),
		slidesFields = slidesWrapper.querySelector(field),
		width = window.getComputedStyle(slidesWrapper).width,//ширина окна слайдера
		slides = slidesWrapper.querySelectorAll(slide),
		prev = document.querySelector(prevArrow),
		next = document.querySelector(nextArrow),
		total = document.querySelector(totalCounter),
		current = document.querySelector(currentCounter),
		dots = [];
	const addCurrentNumber = () => slides.length < 10 ? current.textContent = `0${slideIndex}`
		: current.textContent = slideIndex;
	const addActiveDot = () => {
		dots.forEach(dot => dot.classList.remove('_active'));
		dots[slideIndex - 1].classList.add('_active');
	};
	let slideIndex = 1,
		offset = 0;
	if (slides.length < 10) {
		total.textContent = `0${slides.length}`;
		current.textContent = `0${slideIndex}`;
	} else {
		total.textContent = slides.length;
		current.textContent = slideIndex;
	}
	slidesFields.style.width = 100 * slides.length + '%'; //устанавливаем ширину всего слайдера
	slidesFields.style.display = 'flex';
	slidesFields.style.transition = '0.5s all';
	slidesWrapper.style.overflow = 'hidden';
	slides.forEach(slide => slide.style.width = width);// устанвливаем ширину каждого слайда как ширину окна слайдера
	//slider навигация------------------------
	const dotWrapper = document.createElement(`ol`);
	dotWrapper.classList.add('carousel-indicators');
	document.querySelector(`.offer__slider`).append(dotWrapper);
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement(`li`);
		dot.classList.add('dot');
		dot.setAttribute('data-slides', i);
		(i == 0) && dot.classList.add('_active');
		dotWrapper.append(dot);
		dots.push(dot);
	}
	//----------------
	const deleteNotDigits = str => +str.replace(/\D/g, '');

	next.addEventListener('click', () => {
		if (offset == deleteNotDigits(width) * (slides.length - 1)) {
			offset = 0; // если последний слайд
		} else {
			offset += deleteNotDigits(width);
		}
		slidesFields.style.transform = `translateX(-${offset}px`;
		(slideIndex == slides.length) ? slideIndex = 1 : slideIndex++;
		addCurrentNumber();
		addActiveDot();
	});
	prev.addEventListener('click', () => {
		(offset == 0) ? offset = deleteNotDigits(width) * (slides.length - 1)// если первый слайд
			: offset -= deleteNotDigits(width);
		slidesFields.style.transform = `translateX(-${offset}px`;
		(slideIndex == 1) ? slideIndex = slides.length : slideIndex--;
		addCurrentNumber();
		addActiveDot();
	});

	//slider навигация
	dotWrapper.addEventListener('click', (e) => {
		if (e.target && e.target.hasAttribute('data-slides')) {
			const dotNumber = +e.target.getAttribute('data-slides');
			slideIndex = dotNumber + 1;
			offset = dotNumber * deleteNotDigits(width);
			slidesFields.style.transform = `translateX(-${offset}px`;
			addCurrentNumber();
			addActiveDot();
		}
	});
}
export default slider;