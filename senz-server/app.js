var createError = require("http-errors")
var express = require("express")
var mongoose = require("mongoose")
var cookieParser = require("cookie-parser")
var logger = require("morgan")

var indexRouter = require("./routes/routes")

var app = express()


app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use("/", indexRouter)

// Connect to MongoDB
var dbHost = process.env.DB_HOST || "localhost"
var dbName = process.env.DB_NAME
var dbUser = process.env.DB_USERNAME
var dbPass = process.env.DB_PASSWORD


mongoose
	.connect("" + dbHost + "://"+ dbUser + ":" + dbPass + "@ds163835.mlab.com:63835/" + dbName, { promiseLibrary: require("bluebird"), useNewUrlParser: true })
	.then(() => console.log("MongoDb connected successfully!"))
	.catch(err => console.error(err))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get("env") === "development" ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render("error")
})

module.exports = app
