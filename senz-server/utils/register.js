const Validator = require("validator")
const isEmpty   = require("is-empty")

module.exports = function validateRegisterInput(data) {
	let errors = {}

	// Convert empty fields to an empty string so we can use validator functions
	data.name      = !isEmpty(data.name) ? data.name : ""
	data.email     = !isEmpty(data.email) ? data.email : ""
	data.password  = !isEmpty(data.password) ? data.password : ""
	data.password2 = !isEmpty(data.password2) ? data.password2 : ""

	// Name checks
	if (Validator.isEmpty(data.name)) {
		errors.msg = "Name field is required"
		errors.err_field = "name"
	}

	// Email checks
	if (Validator.isEmpty(data.email)) {
		errors.msg = "Email field is required"
		errors.err_field = "email"
	} else if (!Validator.isEmail(data.email)) {
		errors.msg = "Email is invalid"
		errors.err_field = "email"
	}

	// Password checks
	if (Validator.isEmpty(data.password)) {
		errors.msg = "Password field is required"
		errors.err_field = "password"
	}
	if (Validator.isEmpty(data.password2)) {
		errors.msg = "Confirm password field is required"
		errors.err_field = "password2"
	}
	if (!Validator.isLength(data.password, {min: 6, max: 30})) {
		errors.msg = "Password must be at least 6 characters"
		errors.err_field = "password"
	}
	if (!Validator.equals(data.password, data.password2)) {
		errors.msg = "Passwords must match"
		errors.err_field = "password2"
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
