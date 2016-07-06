Template.personalShoppingList.helpers({
	personalList: function(){return PersonalList.find()},
	grocery: function(){return Groceries.find()},
	idMatch: function(){
		var a = Groceries.findOne({_id:grocery._id})._id;
		var b = Groceries.findOne({_id:grocery._id}).buyerId;
		return a == b;
	},
})

Template.personalShoppingList.events({
	"click .js-submit-item": function(event){
		console.dir("hi");
		const personalList_text = $(".js-item").val(); //this gets the item that the user added to their personal list
		console.dir(personalList_text);
		const personalList_obj =
		{
			text: personalList_text,
			addedBy: Meteor.userId(),
		};
		Meteor.call("insertItem",personalList_obj);
	},
})

Template.itemRow.events({
	"click .js-delete-item": function(event){
		console.log("clicked on the x");
		console.dir(this);
		console.log(this.personalList._id);
		const item = PersonalList.findOne({_id:this.personalList._id});
		console.dir(item);
		Meteor.call("removeItem",item);
	},
})

