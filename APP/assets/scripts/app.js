var $ = require('jquery');
// JavaScript Document

// filter
$(document).ready(function() {
	//Display the filters
	$('#filter').on('click', function() {
		$(this).toggleClass('active');
		$('.filter').fadeToggle('#filter');
		
	});
	
	
	// Filter the content
	$('#breakfast').on('click', function() {
		$(this).closest('#wrapper').find('.breakfast').toggleClass('hide');
	});
	$('#lunch').on('click', function() {
		$(this).closest('#wrapper').find('.lunch').toggleClass('hide');
	});
	$('#dinner').on('click', function() {
		$(this).closest('#wrapper').find('.dinner').toggleClass('hide');
	});
	$('#snacks').on('click', function() {
		alert('No Snacks right now!!!');
		});
	//Button Recipe
	
	$('article').on('click', function() {
		$(this).find('.content').toggleClass('hide');
		
	});
	
	
	
	
});