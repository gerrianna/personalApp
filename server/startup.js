Meteor.startup(function(){
	if(Items.find().count()==0){
		Items.insert({person:"Gerri",items:["milk","eggs","cheese"]});
		Items.insert({person:"Maria",items:["avocados","chips"]});
		Items.insert({person:"Kim",items:["chicken","brownie mix"]});
		Items.insert({person:"Margaret",items:["salsa","chicken broth","onion"]})
	}
})