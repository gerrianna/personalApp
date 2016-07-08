Meteor.methods({ //this method adds the user item to the bio collection
	addBio:function(item){
		console.dir(item);
		Bios.insert(item);
	}
})
