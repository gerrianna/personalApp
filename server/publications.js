/*if(Meteor.isServer){
	Meteor.publish(
		'personalShoppingList',
		function(){
			var currentUser = this.userId;
			return PersonalList.find({ createdBy: currentUser});
		}
	);
}*/