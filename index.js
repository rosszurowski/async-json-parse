
var Promise = require('any-promise')

module.exports = function (json) {
	if (typeof Response === 'undefined') {
		return Promise.resolve(JSON.parse(json))
	}
	var res = new Response(json)
	return res.json()
}
