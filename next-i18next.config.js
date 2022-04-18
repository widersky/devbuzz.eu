const path = require('path');

module.exports = {
	// debug: true,
	i18n: {
		defaultLocale: "en",
		locales: ["en", "pl"],
		localePath: path.resolve('./public/locales'),
		localeDetection: false
	},
};
