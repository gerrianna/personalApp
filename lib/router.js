Router.configure({
	layoutTemplate:'layout',
});
Router.route('/',{name:"home"}); 
Router.route('/houseShoppingList'); //creates route to the house shopping list page
Router.route('/personalShoppingList',
	{name: "personalShoppingList",
	data: function(){
		const c = PersonalList.findOne({_id:this.params._id});
		console.dir(c);
		return c;
	}
	}
); //creates route to the personal shopping list page

Router.route('/houseShoppingLists/:_id',
	{name: "houseShoppingLists",
 	data: function(){
 		const c = Groceries.findOne({_id:this.params._id});
 		console.dir(c);
 		return c;
 	}
	}
);

Router.route('/settings');
Router.route('/quiz');