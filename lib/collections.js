//Users = new Meteor.Users("users");
//Comments = new Meteor.Collection("comments");
Groceries = new Meteor.Collection("groceries");
Groceries.allow({
	insert() { return false; },
  	update() { return false; },
  	remove() { return false; }
});
Groceries.deny({
	insert() { return true; },
 	update() { return true; },
  	remove() { return true; }
});
PersonalList = new Meteor.Collection("personalList");
PersonalList.allow({
	insert() { return false; },
  	update() { return false; },
  	remove() { return false; }
});
PersonalList.deny({
	insert() { return true; },
 	update() { return true; },
  	remove() { return true; }
});
Pantry = new Meteor.Collection("pantry"); //this is a list of everything the house already owns
Settings = new Meteor.Collection("settings"); //holds information about the user's settings
Settings.allow({
	insert() { return false; },
  	update() { return false; },
  	remove() { return false; }
});
Settings.deny({
	insert() { return true; },
 	update() { return true; },
  	remove() { return true; }
});
Houses = new Meteor.Collection("houses");

//Userdata = new Meteor.Collection("userdata"); //this is a list of all the users who use the app

