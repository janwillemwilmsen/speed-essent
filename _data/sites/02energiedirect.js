module.exports = {
	name: "energiedirect.nl", // optional, falls back to object key
	description: "energiedirect.nl pagina's",
	options: {
		frequency: 1 * 1, 
		// frequency: 60 * 23, 
		// 24 hours
		freshChrome: "site",
	},
	urls: [
		"https://www.energiedirect.nl/isolatie",
		"https://www.energiedirect.nl/",
		"https://www.energiedirect.nl/zonnepanelen",
		"https://www.energiedirect.nl/energie/energie-aanbiedingen",
		"https://www.energiedirect.nl/energie/goedkope-energie",
		"https://www.energiedirect.nl/energie/overstappen-energie",
		"https://www.energiedirect.nl/energie/energie-besparen",
		"https://www.energiedirect.nl/energie/energiecontract",
	]
};