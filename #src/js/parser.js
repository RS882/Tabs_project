window.addEventListener('DOMContentLoaded', () => {
	// parser-------------------
	const body = document.querySelector('body');
	let textNode = [];
	function recursy(elem) {
		elem.childNodes.forEach(node => {

			// if (node.nodeName === '#text') {// парсим все узлы кроме тестовых
			// 	return;
			// } else {
			// 	console.log(node);
			// 	recursy(node);
			// }

			if (node.nodeName.match(/^H\d/)) {// парсим только заголовки
				textNode.push({
					header: node.nodeName,
					content: node.textContent,
				})
			} else recursy(node);
		});
	}
	recursy(body);
	console.log(textNode);

	fetch('https://jsonplaceholder.typicode.com/posts', { // указываеv сервер куда необходимо отправлять данные
		method: "POST",
		headers: { //для formData- не испольщуем headers
			'Content-type': 'application/json'
		},
		body: JSON.stringify(textNode),
	})
		.then(response => response.json())
		.then(json => console.log(json))
});