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
		console.dir("status");
		console.dir(status);

		Groceries.remove({status});
		console.dir("new status");
		console.dir(status);
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
	greeting: function(item){
		console.dir("id");
		console.dir(Meteor.userId());
		Settings.remove({});
		if(Meteor.userId()){
			console.dir("add item");
			Settings.insert(item);
		}
	},
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
	console.log(item.text);
		console.log("item");
		console.log(item);
		//const d = item._id;
		console.dir("item id");
		console.dir(d);
		console.log("item id ="+ d);
		//Settings.update({_id:item},{$addToSet:{text: greeting}});
		console.dir(item);
		console.dir(Settings);
*/