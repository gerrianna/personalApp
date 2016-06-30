Meteor.publish("theProfiles",
	function(){return Profiles.find();
})