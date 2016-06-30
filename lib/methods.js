Meteor.methods({
	insertGrocery: function(item){ //adds item to Groceries collection
		Groceries.insert(item);
	},
	removeGrocery: function(item){ //removes item from Groceries collection
		Groceries.remove(item);
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
	status: function(item, status, quantity){
		//this function adds a status to the item
		Groceries.update({_id:item},{$addToSet:{status:" "}});
		Groceries.update({_id:item},{$set:{quantity:quantity}});
		console.log(quantity);
		console.log(status);
		Groceries.find({});
	},
	insertItem: function(item){
		PersonalList.insert(item);
	},
	removeItem: function(item){
		PersonalList.remove(item);
	},
	greeting: function(item, greeting){
		Settings.update({$addToSet:{greeting: greeting}});
		console.dir(item);
		console.dir(Settings);
	}
})


/* 
addToPantry: function(item){ //adds item to Pantry collection
		Pantry.insert(item);
	},
	
	sayhilib: function(){ //runs both on server and lib
		console.log("hi!");
	},
	
	/*removePantry: function(item){
		Pantry.remove(item); 
	}, 
*/