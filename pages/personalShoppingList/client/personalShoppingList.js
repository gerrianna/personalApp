Template.personalShoppingList.helpers({
	personalItem: function(){return PersonalList.find()}
	//grocery: function(){return Groceries.find()}
	//const dest = $(" .js-dest").val();
}) 

Template.personalShoppingList.events({
	"click .js-addGrocery": function(event){
	//	event.preventDefault();
		console.log("added to shopping list");
		const needToBuy = $(" .js-needToBuy").val(); //reads what the user adds to the need to buy list
		const personalItem = {text:needToBuy, addedBy: Meteor.userId()};
		PersonalList.insert(personalItem);
		//PersonalList.insert(user);
		console.dir(needToBuy);
		
	}
})

/*Template.personalListRow.events({
	"click .js-delete-personalItem": function (event){
		console.log("clicked on the x");
		console.dir(this);
		PersonalList.remove(this.personalItem._id);
	}
})*/


/*Template.houseShoppingList.helpers({
	grocery: function(){return Groceries.find()}
	//const dest = $(" .js-dest").val();
})

Template.houseShoppingList.events({
	"click .js-addGrocery": function(event){
	//	event.preventDefault();
		console.log("added to shopping list");
		const needToBuy = $(" .js-needToBuy").val(); //reads what the user adds to the need to buy list
		const grocery = {text:needToBuy, addedBy: Meteor.userId()};
		Groceries.insert(grocery);
		Groceries.insert(user);
		console.dir(needToBuy);
		
	}
})

Template.groceryListRow.events({
	"click .js-delete-grocery": function (event){
		console.log("clicked on the x");
		console.dir(this);
		Groceries.remove(this.grocery._id);
	},
}) */

