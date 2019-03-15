const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt  = require("passport-jwt").ExtractJwt
const mongoose    = require("mongoose")
const User        = mongoose.model("users")
const keys        = process.env.JWT_SECRET

const opts          = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey    = keys.secretOrKey

module.exports = passport => {
	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
		User.findById(jwt_payload.id)
			.then(user => user ? done(null, user) : done(null, false))
			.catch(err => console.log(err))
	})
	)
}
