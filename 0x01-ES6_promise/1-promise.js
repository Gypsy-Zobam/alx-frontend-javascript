import function getFullResponseFromAPI() {
	const success = true;
	return new promise((resolve, reject) => {
		if (success) {
			resolve(status: 200, body: 'Success')
		} else {
			reject(The fake API is not working currently)
	});
}
