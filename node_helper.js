var NodeHelper = require("node_helper");
const bodyParser = require("body-parser");


//Here we are configuring express to use body-parser as middle-ware.

// add require of other javascripot components here
// var xxx = require('yyy') here

module.exports = NodeHelper.create({

	init(){
		console.log("init module helper SampleModule");
	},

	start() {
		console.log('Starting module helper:' +this.name);
		  // add express routes to allow invoking the form.
		this.expressApp.use(bodyParser.urlencoded({ extended: false }));
		this.expressApp.use(bodyParser.json());
		this.extraRoutes()

	},
	extraRoutes: function () {
	this.expressApp.post("/modules/"+this.name, (req, res) => {
	  // redirect to config form
	  console.log("received post =",req.body, typeof req.body)
	  this.sendSocketNotification("message_from_helper",req.body)
	  res.end("ok");
	});
	},
	stop(){
		console.log('Stopping module helper: ' +this.name);
	},

	// handle messages from our module// each notification indicates a different messages
	// payload is a data structure that is different per message.. up to you to design this
	socketNotificationReceived(notification, payload) {
		console.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
		// if config message from module
		if (notification === "CONFIG") {
			// save payload config info
			this.config=payload
		}
		else if(notification === "????2") {
		}

	},

});
