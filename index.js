var nodemailer = require('nodemailer')

function wrap(fn, context) {
	return function () {
		var args = [].slice.call(arguments)
		return function (done) {
			args.push(done)
			fn.apply(context, args)
		}
	}
}

function wrapTransport(transport) {
	transport['sendMail'] = wrap(transport['sendMail'], transport)
	return transport
}

module.exports = {
	createTransport: function (type, option) {
		return wrapTransport(nodemailer.createTransport(type, option))
	}
}
