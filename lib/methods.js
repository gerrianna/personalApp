Meteor.methods({
	addUser: function(item){ //adds item to Profiles collection
		console.dir("hi");
		console.dir(item);
		console.dir("item =" + item);
		Profiles.insert(item);
	},
})
