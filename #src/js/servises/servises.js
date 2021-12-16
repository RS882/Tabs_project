
export const postData = async (url, data) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: { //для formData- не испольщуем headers
			'Content-type': 'application/json'
		},
		body: data,
	});
	return await res.json();
}

export const getResurce = async (url) => {
	const res = await fetch(url);
	if (!res.ok) {// если сервер выдал ошибку - выводм в консоль сообщение
		throw new Error(`Could not fetch ${url}, status ${res.status}`)
	}
	return await res.json();
}