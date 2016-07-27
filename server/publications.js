Meteor.publish("theGroceries", function(){
	//if(this.userId){
		return Groceries.find({fields:{
			addedBy:1,
			buyerEmail:1,
			buyerId:1,
			quantity:1,
			status:1,
			text:1
		}});
	//}
})

Meteor.publish("theShoppingList",function(){
	return Groceries.find(
		
	);
})

Meteor.publish("thePersonalList",function(){
	if(this.userId){
		return PersonalList.find(
			//{addedBy: this.userId()},
	);
	} else {
		this.ready();
	}
	
})

Meteor.publish("settings", function(){
	if(this.userId){
		return Settings.find(
			{user: this.userId},
	);
	} else {
		this.ready();
	}
})

Meteor.publish("userData", function(){
	return Meteor.users.find({});
})

Meteor.publish("theHouses", function(){
	return Houses.find();
})


/*/Meteor.publish
Meteor.publish("userData", function(){
	if(this.userId){
		return Meteor.users.find({_.id: this.userId},
			{fields: {profile:1,"services.google.email":1}}
		);
	} else {
		this.ready();
	}

})

if(this.userId){
		return PersonalList.find(
			{_id:this.userId}
		);
	} else {
		this.ready();
	}
*/