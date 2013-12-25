## nodemailer wrapper for co

### install

```bash
npm install co-mail
```

### example

```js
var co   = require('co')
var mail = require('./index')

co(function* () {
	var smtpTransport = mail.createTransport('SMTP', {
		service: 'Gmail',
		auth: {
			user: 'your email@gmail.com',
			pass: 'your password'
		}
	})

	var res = yield smtpTransport.sendMail({
		from: 'your email@gmail.com',
		to: 'hello@gmail.com',
		subject: 'hello',
		text: 'hello'
	})

	console.log(res)
})()
```
