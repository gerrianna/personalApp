Router.configure({
	layoutTemplate:'layout',
});
Router.route('/',{name:"home"}); //this creates a route to the home page
Router.route('/profiles'); //creates route to the profiles page
Router.route('/myProfile'); //creates route to My Profile page

