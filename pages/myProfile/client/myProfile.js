Template.myProfile.helpers({
	profile: function(){
		return Profiles.find({});
	}
})

Template.myProfile.events({
	"click .js-submit-info": function(event){
		const firstname = $(".js-user-firstname").val();
		const lastname = $(".js-user-lastname").val();
		const nickname = $(".js-user-nickname").val();
		const email = $(".js-user-email").val();
		const birthyear = $(".js-user-birthyear").val();
		const userProfile = {
			firstname: firstname,
			lastname: lastname,
			nickname: nickname,
			email: email,
			birthyear: birthyear,
			user: Meteor.userId(),
		}
		console.dir(userProfile);
		Meteor.call("addUser",userProfile);
	}
})