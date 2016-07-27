Meteor.methods({
	insertGrocery: function(item){ //adds item to Groceries collection
		check(item, { //this checks to make sure the item paramater is passed in correctly and each component is a string
			text: String,
			quantity: String,
			addedBy: String,
			status: String,
			buyerEmail: String,
			buyerId: String,
			lastBuyer: String,
			house: String,
		});
		Groceries.insert(item); //this inserts the item to the groceries collection
	},
	removeGrocery: function(item){ //removes item from Groceries collection
		check(item, { //this checks to make sure the item paramater is passed in correctly and each component is a string
			text: String,
			quantity: String,
			addedBy: String,
			status: String,
			buyerEmail: String,
			buyerId: String,
			_id: String,
			lastBuyer: String,
			house: String
		});
		Groceries.remove(item); //this removes the item from the gorceries collection
	},
	removeAllGroceries: function(){ //removes all the groceries from the Groceries collection
		Groceries.remove({}); //this removes every grocery in the collection
	},

	status: function(item, status, quantity, buyer, lastBuyer){
		//this function adds a status to the item
		console.dir("method id");
		console.dir(item._id);
		check(item,{ //this checks to make sure the item paramater is passed in correctly and each component is a string
			text: String,
			quantity: String,
			addedBy: String,
			status: String,
			buyerEmail: String,
			buyerId: String,
			_id: String,
			lastBuyer: String,
			house: String
		});
		check(status,String); //this checks the status parameter
		check(quantity,String); //this checks the quantity parameter
		check(buyer,String); //this checks the buyer parameter
		check(lastBuyer,String);
		Groceries.update({_id:item._id},{ //this updates the grocery collection
			$set:{
				quantity:quantity,
				status: status,
				buyerEmail: buyer,
				lastBuyer: lastBuyer,
			}

		});
		console.dir("new status");
		console.dir(status);
		console.log(quantity);
		Groceries.find({});
	},
	insertItem: function(item){
		check(item,{ //this checks to make sure the item paramater is passed in correctly and each component is a string
			text: String,
			addedBy: String,
		});
		console.log("got to insert item");
		console.dir(item);
		PersonalList.insert(item);
	},
	removeItem: function(food){
		check(food,{ //this checks to make sure the item paramater is passed in correctly and each component is a string
			text: String,
			addedBy: String,
			_id: String
		});
		console.log("got to meteor method");
		PersonalList.remove(food);
	},
	settings: function(item){
		check(item,{
			greeting: String,
			house: String,
			user: String,
		})
		console.dir("id");
		console.dir(Meteor.userId());
		Settings.remove({});
		if(Meteor.userId()){
			console.dir("add item");
			Settings.insert(item);
		}
	},
	addHouse: function(house){
		check(house, {
			household: String
		});
		Houses.insert(house);
	},
	userHouse: function(house){
		Meteor.users.update({_id:Meteor.userId()},{
			$set: {
				household:house
			}
		})
	},
	houseGroceries: function(house){
		//Groceries.update({_id:this._id}, {$set: {household: house}});
	}
})

