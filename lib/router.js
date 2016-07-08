Router.configure({
	layoutTemplate:'layout',
});
Router.route('/',{name:"home"}); //this creates a route to the home page
Router.route('/user/:_id', //this creates link specific pages for each person in the bio list
	{name: "user",
	data: function(){
		const c = Bios.findOne({_id:this.params._id}); //finds the user with this id
		console.dir(c);
		return c;
	}
	}
)