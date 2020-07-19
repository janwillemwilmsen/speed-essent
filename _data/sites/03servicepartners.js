module.exports = {
	name: "Servicepartners", // optional, falls back to object key
	description: "Servicepartners websites",
	options: {
		frequency: 60 * 23, // 24 hours 60*23
		freshChrome: "run", // verschillende sites is RUN
	},
	urls: [
		"https://www.klimaatroute.nl/",
		"https://www.kemkens.nl/",
		"https://www.ewacht.nl/",
		"https://www.geas.nl/",
		"https://www.voltalimburg.nl/",
		"https://www.energiewonen.nl/",
		"https://www.zon7.nl/",

		// "https://isoprofs.nl/index.php",
		// "https://www.nederlandisoleert.nl/",
		// "https://www.cvtotaal.nl/index.php",
		// "https://www.voltasolar.nl/index.php",
		// "https://www.energiewacht.nl/?2",

	]
};