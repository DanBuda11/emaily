// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
	// production - return the production keys
	module.exports = require('./prod');
} else {
	// development - return the develpment keys
	module.exports = require('./dev');
}
