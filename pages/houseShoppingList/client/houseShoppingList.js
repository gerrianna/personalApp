Template.houseShoppingList.helpers({
	grocery: function(){return Groceries.find()},
	pantry: function(){return Pantry.find()}
	//const dest = $(" .js-dest").val();
})

Template.houseShoppingList.events({ //this is the javascript to add an grocery item to the house list
	"click .js-addGrocery": function(event){ //when you click the 'add grocery' button it adds the item
	//	event.preventDefault();
		console.log("added to shopping list");
		var grocery_quantity = $(" .js-quantity").val(); //reads what the user inputs as a quantity value
		var needToBuy = $(" .js-needToBuy").val(); //reads what the user adds to the need to buy list
		var status = "";
		//var a = Meteor.user().emails[0].address;
		var b = Meteor.user().name;
		//console.dir(a);
		console.dir(b);
		var buyerEmail = "";
		var buyerId = "";
		var lastBuyer = "";

		var grocery_obj = {
			text:needToBuy, 
			quantity: grocery_quantity, 
			addedBy: Meteor.userId(),
			status: status,
			buyerEmail: buyerEmail,
			buyerId: buyerId,
			lastBuyer: lastBuyer,
			//userEmail: Meteor.user().emails[0].address,
		};
		// the grocery_obj is the grocery item with all of it's information
		Meteor.call("insertGrocery",grocery_obj); //this calls the methods.js is the lib and inserts it into the groceries collection
		console.dir(needToBuy);
	},
	
	"click .js-remove-all-groceries": function(event){
		//const pw = $(".js-password").val();
		Meteor.call("removeAllGroceries");
	},

})
Template.groceryListRow.events({
	"click .js-make-private": function(event){
		console.log("make private");
		Meteor.call("insertItem",this);
	}
})

Template.houseShoppingLists.helpers({
	usersId: function(){return Meteor.users.find().fetch()},
	//const a = Meteor.user().emails[0].address;
})

Template.houseShoppingLists.events({
	"click .js-apply-status": function(event){
		console.log("hi");
		var newQuantity = $(".js-new-quantity").val();
		var grocery_status = $(".js-status").val();
		const id = this._id;
		console.dir("id");
		console.dir(id);
		const buyer = $(".js-buyer").val();
		const lastBuyer = this.buyerId;
		const item = Groceries.findOne({_id: this._id});
		console.dir("item = " +item);
		console.dir(item);
		Meteor.call("status",item,grocery_status,newQuantity,buyer,lastBuyer);
		console.dir("called Meteor");
	},
	"click .js-remove-grocery": function(event){
		console.log("clicked the x");
		const text = Groceries.findOne(this._id);
		console.dir(this._id);
		console.dir(text);
		Meteor.call("removeGrocery",text);
		console.log(Groceries);
	},

})



 