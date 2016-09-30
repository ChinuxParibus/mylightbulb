var $ = require('minified').$,
		EE = require('minified').EE;

$(function () {

	var bulb = $('body').set('$backgroundColor', '#FFFFFF');
	var miliseconds = 1000, seconds = 60, minutes = 5;
	var timing = miliseconds * seconds * minutes;

	bulb.animate({'$backgroundColor': '#F5F5F5'}, timing)
	.then(function () {
		console.info("The light color bulb has changed to #F5F5F5");
		return bulb.animate({'$backgroundColor': '#FFFAFA'}, timing);
	})
	.then(function () {
		console.info("The light color bulb has changed to #FFFAFA");
		return bulb.animate({'$backgroundColor': '#F0FFF0'}, timing);
	})
	.then(function () {
		console.info("The light color bulb has changed to #F0FFF0");
		return bulb.animate({'$backgroundColor': '#F5FFFA'}, timing);
	})
	.then(function () {
		console.info("The light color bulb has changed to #F5FFFA");
		return bulb.animate({'$backgroundColor': '#F0FFFF'}, timing);
	})
	.then(function () {
		console.info("The light color bulb has changed to #F0FFFF");
		return bulb.animate({'$backgroundColor': '#FFF5EE'}, timing);
	})
	.then(function () {
		console.info("The light color bulb has changed to #FFF5EE");
		return bulb.animate({'$backgroundColor': '#F5F5DC'}, timing);
	})
	.then(function () {
		console.info("The light color bulb has changed to #F5F5DC");
		return bulb.animate({'$backgroundColor': '#FDF5E6'}, timing);
	})
	.then(function () {
		console.info("The light color bulb has changed to #FDF5E6");
		return bulb.animate({'$backgroundColor': '#FFFAF0'}, timing);
	})
	.then(function () {
		console.info("The light color bulb has changed to #FFFAF0");
		return bulb.animate({'$backgroundColor': '#FFFFF0'}, timing);
	})
	.then(function () {
		console.info("The light color bulb has changed to #FFFFF0");
		return bulb.animate({'$backgroundColor': '#FAEBD7'}, timing);
	})
	.then(function () {
		console.info("The light color bulb has changed to #FAEBD7");
		return bulb.animate({'$backgroundColor': '#FAF0E6'}, timing);
	})
	.then(function () {
		console.info("The light color bulb has changed to #FAF0E6");
		return bulb.animate({'$backgroundColor': '#FFF0F5'}, timing);
	})
	.then(function () {
		console.info("The light color bulb has changed to #FFF0F5");
		return bulb.animate({'$backgroundColor': '#FFFFFF'}, timing);
	})
	.then(function () {
		console.info("The light bulb its off... zzzZZZ");
		$('h3').fill('Good night!!!');
		bulb.animate({'$backgroundColor': '#000000'}, timing * 4)
		.then(function () {
			$('.header').hide();
		});
	});
});
