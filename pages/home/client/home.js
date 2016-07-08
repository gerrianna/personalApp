Template.showList.helpers({
	items:function(){
		//const dest = $(" .js-dest").val();
		return Items.find({item:"eggs"});
	}
})

Template.showList.events({
	"click .js-addItem": function(event){
		console.log("added to shopping list");
		const needToBuy = $(" .js-needToBuy").val();
		const item =
		{item:item}
		console.dir(needToBuy);
		
	}
})