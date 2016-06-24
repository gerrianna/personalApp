Meteor.methods({
	insertItem: function(item){
		PersonalList.insert(item);
	},
	sayhilib: function(){ //runs both on server and lib
		console.log("hi!");
	},
	removeItem: function(item){
		PersonalList.remove(item);
	},
	insertGrocery: function(item){ //adds item to Groceries collection
		Groceries.insert(item);
	},
	removeGrocery: function(item){ //removes item from Groceries collection
		Groceries.remove(item);
	},
	addToPantry: function(item){ //adds item to Pantry collection
		Pantry.insert(item);
	},
	removeAllGroceries: function(item){ //removes all the groceries from the Groceries collection
		Groceries.remove({});
	}
})