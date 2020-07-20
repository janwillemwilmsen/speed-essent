module.exports = {
	name: "Essent", // optional, falls back to object key
	description: "Kemkens.nl pagina's",
	options: {
		frequency: 60 * 23, // 24 hours
		freshChrome: "site",
	},
	urls: [
		"https://www.kemkens.nl/zonne-energie/",
		"https://www.kemkens.nl/ventilatie/",
	]
};