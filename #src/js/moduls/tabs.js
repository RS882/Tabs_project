const tabs = (tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) => {
	//tabs=======================================

	// класс для scss
	//	.fade {
	// 		animation-name: fade;
	// 		animation-duration: 1.5s;
	// 		@keyframes fade {
	// 			 from {
	// 				  opacity: 0.1;
	// 			 }
	// 			 to {
	// 				  opacity: 1;
	// 			 }
	// 		}
	//   }
	const tabs = document.querySelectorAll(tabsSelector),
		tabsContent = document.querySelectorAll(tabsContentSelector),
		tabsParent = document.querySelector(tabsParentSelector);

	const hideTabContent = () => {
		tabsContent.forEach(item => {
			item.hidden = true;
			item.classList.remove(`fade`);

		});
		tabs.forEach(item => item.classList.remove(activeClass));
	};
	const showTabContent = (i = 0) => {
		tabsContent[i].hidden = false;
		tabsContent[i].classList.add(`fade`);
		tabs[i].classList.add(activeClass);
	};
	hideTabContent();
	showTabContent();
	tabsParent.addEventListener(`click`, (e) => {
		const target = e.target;
		if (target && target.classList.contains(tabsSelector.slice(1))) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}

export default tabs;