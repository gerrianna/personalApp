Meteor.publish("theBios", function(){ //publishes the bio collection
	return Bios.find();
})

