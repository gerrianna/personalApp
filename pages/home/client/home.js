Template.home.helpers({ //helper functions for the home page
	bios:function(){ // function to find bio items
		return Bios.find(); //returns the bio items
	}
})

Template.home.events({ //allows users to click on update and have the name appear on the right
	"click .js-update-bio": function(event){ //button
		const name = $(" .js-name").val(); //gets name value
		const text = $(" .js-bio").val(); //gets bio text value
		const bio_obj = //creates object with name and text
		{name:name,
			text:text
		}
		Meteor.call("addBio",bio_obj); //passes into the meteor method "addBio"
	}
})