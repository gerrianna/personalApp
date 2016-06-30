Meteor.publish("theGroceries", function(){
	//if(this.userId){
		return Groceries.find();
	//}
})

Meteor.publish("thePantry",
	function(){return Pantry.find();
})

Meteor.publish("thePersonalList",function(){
	if(this.userId){
		return PersonalList.find(
		//{_id: this.userId()},
	);
	} else {
		this.ready();
	}
	
})

Meteor.publish("settings", function(){
	if(this.userId){
		return Meteor.users.find();
	} else {
		this.ready();
	}
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