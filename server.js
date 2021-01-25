const express = require("express");
const routes = require("./routes");
const csv = require('csvtojson');
const db = require("./models");

const expfile = require("express-fileupload");

const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(expfile({ useTempFiles: true }));
const cloudinary = require("cloudinary").v2


// Define middleware here.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
// Start the API server
db.sequelize.sync().then(function(){
	app.listen(PORT, function () {
		console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	});
});

// added code to read db from assets file rather than hard coding the CSV.
db.sequelize.sync({ force: true }).then(() => {
	csv().fromFile(path.join(__dirname, "assets/datenightdb.csv")).then(arr => {
		arr.forEach(el => {
			const rowObject = {
				location: el.Location,
				photo: el["Photo Link"],
				date: el.Date,
				instructions: el.Instructions,
				budget: el.Budget,
				items: el["Suggested Items"],
				links: el["Affiliate Links"]
			};
			db.Date.create(rowObject);
		})
	});
});
