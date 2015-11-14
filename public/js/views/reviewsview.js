// catch simple errors
"use strict";

// declare splat-app namespace if it doesn't already exist
var splat = splat || {};

// note View-name (Home) matches name of template file Home.html
splat.ReviewThumb = Backbone.View.extend({

    // render the View
    render: function () {
	// set the view element ($el) HTML content using its template

	// var template = _.template("<h2>TESTING <%= name %></h2>");
	// console.log(this.collection);
	// this.collection.each(function(model){
	// 	console.log(model.toJSON());
	// })
	
	//loads template(needed for non name matching templates)
	var reviewThumbLoad = $.get('tpl/ReviewThumb.html');
	//will need to get access to splat from inside anon. function
	var self = this;

	reviewThumbLoad.done(function(markup) {
	  // Now "markup" contains the response to the $.get() request.
	  // Turn this markup into a function using Underscore's
	  // template() // function.
	  // Finally apply the reviewsTemplate shown below to your
	  // reviews collection and the template function you just created.

	  //change into easy to work with form
	  self.template = _.template(markup);

	  // console.log(markup, reviewThumbLoad );
	  // console.log(self.model.toJSON(),self.template);
	  //to store the result to display
	  self.display = ''
	  // console.log( self.template(self.model.toJSON()) );
	  splat.reviews.each(function(model){
	  		//add the review model html to display
	  		self.display = self.display + self.template( model.toJSON());
	  });

	   //actually display it
	   self.$el.html( self.display);
	});



	// this.$el.html( template() );
	return this;    // support method chaining
    }

});