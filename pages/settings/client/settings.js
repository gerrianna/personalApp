Template.settings.helpers({
	settings: function(){return Settings.find()},
})

Template.settings.events({
	"click .js-add-setting": function(event){
		const greeting_text = $(".js-greeting").val(); //this gets the item that the user added to their personal list
		const house_text = $(".js-house").val();
		console.dir(greeting_text);
		const settings_obj =
		{
			greeting: greeting_text,
			house: house_text,
			user: Meteor.userId(),
		};
		console.log(settings_obj);
		Meteor.call("settings",settings_obj);
		
	},
})



/*/create a "class" for complex numbers

function ComplexNumber(re,im){
	this.re = re;
	this.im = im;
}

//doubles the real and imaginary parts of the element
ComplexNumber.prototype.double = function double(){
	this.re = 2*this.re;
	this.im = 2*this.im;
}

ComplexNumber.prototype.square = function square(){
	const a = this.re * this.re;
	const b = this.im * this.im;
	const c = a -b;
	this.re = c;
	this.im = b;
}

const num = new ComplexNumber(1,2);
num.double();
num.square();
console.dir(num);
console.dir(ComplexNumber);

myobj = (function() {
	//define a bunch of stuff, with new functions
	// temp variables
	//all hidden from rest of program
	function a(x) {return x*2}
	const b = [1,2,3]
	return {
		a:a, //reveal this value
		b:b, //and this
	}
}())

Template.testing.helpers({
	num: function(){return num;}
});*/