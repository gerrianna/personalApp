Router.configure({
	layoutTemplate:'layout',
});
Router.route('/',{name:"home"}); 
Router.route('/houseShoppingList'); //creates route to the house shopping list page
Router.route('/personalShoppingList'); //creates route to the personal shopping list page
Router.route('/mealCalendar'); //creates route to the house meal calendar