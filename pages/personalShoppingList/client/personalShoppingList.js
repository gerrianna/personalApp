Template.personalShoppingList.helpers({
	personalData: function(){return PersonalList.find()}
})

Template.personalShoppingList.events({
	"click .js-submit-item": function(event){
		const item_text = $(".js-item").val(); //this gets the item that the user added to their personal list
		const item_obj =
		{
			text: item_text,
			addedBy: Meteor.userId(),
		};
		//PersonalList.insert(item_obj);
		console.dir(item_text);
		Meteor.call("insertItem",item_obj);
	},
})

Template.itemRow.events({
	"click .js-delete-item": function(event){
		console.log("clicked on the x");
		console.dir(this);
		Meteor.call("removeItem",this.grocery._id);
		//PersonalList.remove(this.grocery._id);
	},
})

