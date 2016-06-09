Router.configure({
	layoutTemplate:'layout',
});
Router.route('/',{name:"home"}); 
Router.route('/about',{name:"about"}); //creates route to the about page
Router.route('/comments',{name:"comments"}); //creates route to the comments page