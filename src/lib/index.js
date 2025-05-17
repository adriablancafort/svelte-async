export function delayed(value, ms = 500) {
	return new Promise((f) => {
		setTimeout(() => f(value), ms);
	});
}