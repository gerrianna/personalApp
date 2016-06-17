Template.houseShoppingList.helpers({
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
		//Groceries.insert(user);
		console.dir(needToBuy);
		
	}
})

Template.groceryListRow.events({
	"click .js-delete-grocery": function (event){
		console.log("clicked on the x");
		console.dir(this);
		Groceries.remove(this.grocery._id);
	},
})
 