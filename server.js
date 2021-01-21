const express = require("express");
const routes = require("./routes");
const csv = require('csvtojson');
const db = require("./models");

var session = require("express-session");
var passport = require("./config/passport");

const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// app.use(require("./routes/user-api"));


// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/datenightdb");

// Start the API server
db.sequelize.sync().then(function(){

  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});






const dbcsv = `Index,Location,Date,Instructions,Budget,Suggested Items,Links
1,Home,"Make Dessert, with a twist!",Blindfold your significant other and be their eyes. Build trust in this quirky cooking experiment. Choose yours and your partners favorite dessert and enjoy laughs as you help your partner make a delicious treat while igniting some romantic flames. Pair with wine and enjoy. Take photos and post to your memory!,Low,,
2,Outdoors,Picnic in the park,Every one loves a romantic picnic meant for watching the sunset. Pick your favorite spot and bring some light music and a bottle of win to set the mood.,Low,Picnic Backpack,https://www.amazon.com/s?k=picnic&ref=nb_sb_noss_2
3,Anywhere,Do some stargazing,"Get a book on constellations, aim your telescope at the stars see how many you can pick out.",Low,"Stargazing book, Telescope",https://www.amazon.com/s?k=stargazing&ref=nb_sb_noss_2
4,Home,Play True American!,Take a page from the New Girl script and play True American like shown on the popular TV show.,Low,,
5,Home,Have a photoshoot,Have a shameless evening of movie montage fashion show. Go through your significant other's wardrobe and pick outfits for him/her to strut their stuff around the living room. Use your phone camera and your imagination. If you want to be extra arttistic buy a polaroid and begin and cute polaroid wall of you and your significant other.,Medium,Polaroid Camera,https://www.amazon.com/s?k=polaroid+camera&ref=nb_sb_noss_1
6,Outdoors,Go Rock Climbing,Feeling adventurous? Find a rock climbing gym or quarry,Medium,,
7,Home,Cooking with Sous Vide,Want to be a top chef? Get out the Sous Vide and try a something outside your comfort zone. Pick out each others out fit and have a dinner date in style with a black tie and gown theme.,Expensive,Sous Vide,https://www.amazon.com/s?k=sous+vide&ref=nb_sb_noss_2
8,Outdoors,Go Ice Skating,Find a local public rink and enjoy to time on the ice. Bundle up in your favorite hoodies and outerware.,Medium,Ice Skates,https://www.amazon.com/s?k=ice+skates&ref=nb_sb_noss_1
9,Outdoors,Have a Water Balloon Fight,Remember being a kid? Why not make an afternoon out of water balloon or water gun fights. Keep in mind this date idea can go by quick so definitely make a plan to follow up with sun bathing and relaxation.,Low,"Sunscreen, Waterballoons, Water guns",
10,Outdoors,Plan a playdate on the Tennis Courts,Looking for some friendly competition with your significant other. Maybe you feel like settling a score. Tennis is the game for you! Challenge,Medium,,
11,Outdoors,Go Camping,"Are you and your significant other outdoorsy? Grab a tent, smores, a flashlight, and you imagination for scary stories. Make finger puppets in the night after the sun goes down and enjoy a night away from technology and the business of everyday life.",Medium,"Tent, Flashlight",https://www.amazon.com/s?k=camping&ref=nb_sb_noss_2
12,Home,Be Artists,Painting or drawing can be a creative outlet for your partner and you to share some laughs. Find your favorite photo or photos of your pets and make a masterpiece. Collaborate or compete to be the best artist.,Medium,"Paint, Paintbrush, Canvas, Colored Pencils",
13,Home,Puzzle night,Like to solve problems? A puzzle could be just the thing for a night in after the kids have to sleep or a casual Saturday night.,Low,Puzzles,https://www.amazon.com/s?k=puzzles&ref=nb_sb_noss_2
14,Home,Play Board Games!,"Whether it's Monopoly, Life, Boggle, Yahtzee, Throw Throw Burrito, Hungry Hungry Hippo, or any number of other games available plan for some popcorn and a night of mental warfare. Spice up your night with a friendly bet on who might win.",Medium,Board Games,https://www.amazon.com/s?k=board+games&ref=nb_sb_noss_1
15,Home,Try Face Painting!,It doesn't have to be Halloween to goof around with your partner and try some face painting. Get the make up kit and go to town on one another.,Low,Face Paint,
16,Home,Karaoke Night!,Why play carpool karaoke alone when you can do it for date night from the comfort of your couch! Sing each other some love ballads over a homecooked meal and some drinks!,Medium,Karaoke Machine,https://www.amazon.com/s?k=karaoke+machine&crid=2FIXK3UAQM8A9&sprefix=karaoke+%2Caps%2C176&ref=nb_sb_ss_ts-a-p_1_8
17,Outdoors,Take up Golfing for a Day,"Whether you're an athletic and coordinated couple or nerdy with no muscle strength golf is a game everyone can enjoy. Go in with no expectations, rent or buy a few clubs, bring some extra golf balls, and a good attidute and you can enjoy or short front or back nine. Even if you can't hit the ball far taking the golf cart for a spin with a cool beverage in hand is always gauranteed a good time.",Medium,"Golf Balls, Golf Clubs",https://www.amazon.com/s?k=golf&ref=nb_sb_noss_2
18,Outdoors,Go Tubing,Is there a river or lake in your area? Buy or rent a tube and get on the water. Bring some waterproof speakers and look for tube with a cup holder for maximum relaxation.,Medium,"WonderBoom, Tube",https://www.amazon.com/s?k=wonderboom&ref=nb_sb_noss_1
19,Home,Go for a Bike Ride,Get your bikes out of storage and get some mileage in! Find a local trail to ride. Bonus points to bring a GoPro and gather some footage. Put together a cool video of your ride with a nice soundtrack when you get home.,High,GoPro,https://www.amazon.com/s?k=gopro&ref=nb_sb_noss_2
20,Outdoors,Try Axe Throwing,Up for some friendly competition while dodging sharp objects? Suit up in your best flannel and give axe throwing a go!,Low,Throwing Axe,https://www.amazon.com/s?k=throwing+axe&ref=nb_sb_noss_2
21,Outdoors,Hit the slopes!,Winter doesn't mean you can't enjoy the great outdoors. Grab your gear and go skiing or snowboarding. It's a great activity for beginners and experts.,High,"Skis, Snowboard, Wireless Headphones",https://www.amazon.com/s?k=snowboard&ref=nb_sb_noss_1
22,Outdoors,Kayaking,"Think of it, boats, paddles and a nice flat lake. Breathe in that fresh air and listen to those birds chirping, channel your inner zen",Low,Kayak,https://www.amazon.com/s?k=kayak&ref=nb_sb_noss_2
23,Home,Yoga,Get uncomfortable then get in your safe space because nothing says I'll do anything for you like transforming yourself into a human pretzel. Namaste.,Low,Yoga Mat,https://www.amazon.com/s?k=yoga&ref=nb_sb_noss_2
24,Outdoors,Bowling,You might not have done it since you were in middle school but those gutter balls and granny throws lead to a lot of laughs!,Low,Bowling Ball,https://www.amazon.com/s?k=bowling&ref=nb_sb_noss_1
25,Outdoors,Sporting Events,"Baseball, Basketball, Curling? Watch those athletes do their thing but don't forget to dress the part by repping your team's gear from head to toe",Medium,,https://www.amazon.com/s?k=football+jersey&ref=nb_sb_noss_2
26,Home,Paint Night,Show your partner your skills by leading an at-home art class or learn from the pros and see whose masterpiece,Low,,
27,Home,Ice Cream Social,"Whether you call them sprinkles or jimmies, load those babies up on your favorite ice cream and dig in. Yum!",Low,,
28,Home,Movie Night,"Watch eachother's number one quoted movie so you can each finally be in on the random references the other makes, just don't forget the popcorn!",Low,,
29,Home,Book Study,"Reach eachother's favorite book and compare notes, share what inspires you, get into some deep discussions and be amazed by the insights you'll gain!",Low,,
30,Home,Go Glam,Nothing causes more laughter than attempting to do eachother's makeup! Grab a palette and some blush and have at it!,Medium,,https://www.amazon.com/s?k=makeup&ref=nb_sb_noss_1
31,Outdoors,Play some yard games,"Lawn games aren't just for college kids. Grab a cooler and hang out in the yard playing your favorite games. Some of the classics are Bocci, KanJam, Polish Horseshoes, Ladderball, Cornhole.",Medium,,https://www.amazon.com/s?k=yard+games&ref=nb_sb_noss_1
`;

db.sequelize.sync({ force: true }).then(() => {
	csv().fromString(dbcsv).then(arr => {
		arr.forEach(el => {
			const rowObject = {
				location: el.Location,
				date: el.Date,
				instructions: el.Instructions,
				budget: el.Budget,
				items: el["Suggested Items"],
				links: el.Links
			};
			db.Date.create(rowObject);
		})
	});
});
