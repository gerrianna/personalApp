Template.houseShoppingList.helpers({
	grocery: function(){return Groceries.find()},
	pantry: function(){return Pantry.find()}
	//const dest = $(" .js-dest").val();
})

Template.houseShoppingList.events({
	"click .js-addGrocery": function(event){
	//	event.preventDefault();
		console.log("added to shopping list");
		const grocery_quantity = $(" .js-quantity").val();
		const needToBuy = $(" .js-needToBuy").val(); //reads what the user adds to the need to buy list
		const grocery_obj = {text:needToBuy, quantity: grocery_quantity, addedBy: Meteor.userId()};
		Groceries.insert(grocery_obj);
		//Groceries.insert(user);
		console.dir(needToBuy);
	},
	"click .js-change-grocery": function(event){
		//Groceries.update({this.grocery._id}, {grocery_quantity:grocery});
	}
})

Template.groceryListRow.events({
	"click .js-move-grocery": function (event){
		console.log("clicked on the x");
		console.dir(this);

		const pantry_quantity = $(" .js-quantity").val();
		const needToBuy = $(" .js-needToBuy").val(); //reads what the user adds to the need to buy list
		const pantry_obj = {text:needToBuy, quantity: pantry_quantity, addedBy: Meteor.userId()};
		console.dir(needToBuy);
		Pantry.insert(pantry_obj);
		console.log("added to pantry");

		Groceries.remove(this.grocery._id);
		console.log("removed from grocery");
		console.dir(needToBuy);
	},
	"click .js-remove-grocery": function(event){
		console.log("clicked the x");
		Groceries.remove(this.grocery._id);
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
		Pantry.remove(this.pantry._id);
		console.dir(needToBuy);
	},
})

 