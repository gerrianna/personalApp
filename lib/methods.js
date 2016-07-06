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

	status: function(item, status, quantity){
		//this function adds a status to the item
		console.dir("method id");
		console.dir(item._id);
		Groceries.update({_id:item._id},{
			$set:{
				quantity:quantity,
				status: status
			}

		});
		console.dir("new status");
		console.dir(status);
		console.log(quantity);
		Groceries.find({});
	},
	insertItem: function(item){
		console.log("got to insert item");
		console.dir(item);
		PersonalList.insert(item);
	},
	removeItem: function(food){
		console.log("got to meteor method");
		PersonalList.remove(food);
	},
	settings: function(item){
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