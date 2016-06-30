Template.personalShoppingList.helpers({
	personalList: function(){return PersonalList.find()},
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

		Meteor.call("removeItem",this);
	},
})

