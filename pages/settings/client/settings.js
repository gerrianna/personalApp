Template.settings.helpers({
	settings: function(){return Settings.find()},
})

Template.settings.events({
	"click .js-add-setting": function(event){
		const greeting_text = $(".js-greeting").val(); //this gets the item that the user added to their personal list
		const house_text = $(".js-house").val();
		console.dir(greeting_text);
		const settings_obj =
		{
			greeting: greeting_text,
			house: house_text,
			user: Meteor.userId(),
		};
		console.log(settings_obj);
		Meteor.call("settings",settings_obj);
		
	},
})
