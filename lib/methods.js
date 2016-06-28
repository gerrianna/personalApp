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
	},
	editGrocery: function(item, groceryQuantity, groceryObject){
		console.log(groceryObject.text);
		console.log("grocery id = " + item);
		console.log("grocery quantity = " + groceryQuantity);
		console.log("grocery object = " + groceryObject);
		//Groceries.update();
		console.log("updated");

	},
	removePantry: function(item){
		Pantry.remove(item);
	},
	status: function(item, status){
		//this function adds a status to the item
		Groceries.update({_id:item},{$addToSet:{status:" "}});
		console.log(status);
	}
})