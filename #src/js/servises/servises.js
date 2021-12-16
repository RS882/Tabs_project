
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