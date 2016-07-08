Meteor.methods({
	sayhiserver: function(){ //runs only on server
		console.log("hi!");
	},
	
})

Meteor.users.allow({
	insert() { return false; },
	update() { return false; },
  	remove() { return false; }
})
Meteor.users.deny({
	insert() { return true; },
  	update() { return true; },
  	remove() { return true; }
});