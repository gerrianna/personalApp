Router.configure({
	layoutTemplate:'layout',
});
Router.route('/',{name:"home"}); 
Router.route('/houseShoppingList'); //creates route to the house shopping list page
Router.route('/personalShoppingList'); //creates route to the personal shopping list page
Router.route('/mealCalendar'); //creates route to the house meal calendar

/*Router.route('/showrides/:_id'.
	{name: "showRide",
 	data: function(){
 		const c = Rides.findOne({_id:this.params._id});
 		console.dir(c);
 		return c;
 	}
	}
); */