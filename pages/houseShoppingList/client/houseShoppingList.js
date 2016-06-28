Template.houseShoppingList.helpers({
	grocery: function(){return Groceries.find()},
	pantry: function(){return Pantry.find()}
	//const dest = $(" .js-dest").val();
})

Template.houseShoppingList.events({ //this is the javascript to add an grocery item to the house list
	"click .js-addGrocery": function(event){ //when you click the 'add grocery' button it adds the item
	//	event.preventDefault();
		console.log("added to shopping list");
		const grocery_quantity = $(" .js-quantity").val(); //reads what the user inputs as a quantity value
		const needToBuy = $(" .js-needToBuy").val(); //reads what the user adds to the need to buy list
		const grocery_obj = {text:needToBuy, quantity: grocery_quantity, addedBy: Meteor.userId()};
		// the grocery_obj is the grocery item with all of it's information
		Meteor.call("insertGrocery",grocery_obj); //this calls the methods.js is the lib and inserts it into the groceries collection
		//Groceries.insert(grocery_obj);
		console.dir(needToBuy);
	},
	
	"click .js-remove-all-groceries": function(event){
		const pw = $(".js-password").val();
		Meteor.call("removeAllGroceries",pw);
	},
})

Template.groceryListRow.events({
	"click .js-move-grocery": function (event){ //this moves the grocery item from the grocery list to the pantry
		console.log("clicked on the check box"); //prints out in console that the user clicked the check box
		console.dir(this); //prints in console the actual item

		const pantry_quantity = $(" .js-quantity").val(); //reads what the user inputs as a quantity value
		const needToBuy = $(" .js-needToBuy").val(); //reads what the user adds to the need to buy list
		const pantry_obj = {text:needToBuy, quantity: pantry_quantity, addedBy: Meteor.userId()};
		console.dir(needToBuy);

		Meteor.call("addToPantry",pantry_obj);
		console.log("added to pantry"); //prints out in console that the item was added to the pantry

		Meteor.call("removeGrocery",this);
		//Groceries.remove(this.grocery._id);
		console.log("removed from grocery");
		console.dir(needToBuy);
	},
	"click .js-remove-grocery": function(event){
		console.log("clicked the x");
		Meteor.call("removeGrocery",this.grocery._id);
		console.log(Groceries);
		//Groceries.remove(this.grocery._id);
	},
	"click .js-change-grocery": function(event){
		console.log("edited grocery");
		const grocery_quantity = $(" .js-new-quantity").val(); //reads the changed input
		//console.log(grocery_quantity);
		//console.log(this);
		//console.log(this.grocery._id, this, grocery_quantity);
		Meteor.call("editGrocery",this.grocery._id, grocery_quantity, this);
	},
	
})

Template.pantryListRow.events({
	"click .js-move-pantry": function(event){
		console.log("clicked on the x");
		console.dir(this);
		console.log("removed from pantry");
		const grocery_quantity = $(" .js-quantity").val();
		const needToBuy = $(" .js-needToBuy").val(); //reads what the user adds to the need to buy list
		const grocery_obj = {text:needToBuy, quantity: grocery_quantity, addedBy: Meteor.userId()};
		Groceries.insert(grocery_obj);
		Meteor.call("removePantry",this.pantry._id);
		//Pantry.remove(this.pantry._id);
		console.dir(needToBuy);
	},
})

 