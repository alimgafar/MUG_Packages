Router.configure({
	'layoutTemplate' : 'layout'
});


Router.map(function(){
	this.route('home', {
		'path' : '/',
		'template' : 'home',
		/**
		'data' : function(){
			templateData = {
				products : Products.find({"is_featured" : 1})
			};
			return templateData;
		} **/
	});
	this.route('sponsors', {
		'path': '/sponsors',
		'template' : 'sponsors',
		/**
		'data' : function(){
			templateData = {
				products : Products.find({})
			};
			return templateData;
		} **/
	});
	this.route('events', {
		'path': '/events',
		'template' : 'events',
		/** 
		'data' : function(){
			templateData = {
				categories : Categories.find({})
			};
			return templateData;
		} **/
	});
});