Template.home.onCreated(function(){
	this.state = new ReactiveDict();
	this.state.setDefault({
		housefav: "jumbalaya",
	});
	this.showGuac = new ReactiveVar( false );
	this.showJumbalaya = new ReactiveVar( false );
	console.log("creating the template");
	console.dir(this.state);
});

Template.home.helpers({
	house: function(){
		const instance = Template.instance();
		return instance.state.get("housefav");
	},
	showGuac: function(){
		return Template.instance().showGuac.get();
	},
	showJumbalaya: function(){
		return Template.instance().showJumbalaya.get();
	}
});

Template.home.events ({
	"change .js-fav": function(event,instance){
		console.log($(".js-fav").val());
		const recipe = instance.$(".js-fav").val();
		instance.state.set("houseFav",recipe);
		if( $(event.target).val() == "Guacamole"){
			instance.showGuac.set( true );
		} else {
			instance.showGuac.set( false );
		}
		
		if( $(event.target).val() == "Jumbalaya"){
			instance.showJumbalaya.set( true );
		} else {
			instance.showJumbalaya.set( false );
		}
		
	},
})
