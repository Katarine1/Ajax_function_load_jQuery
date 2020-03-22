$(document).ready(function(){
			
	$("#home").click(function(){
		//console.log("HOME");
		$("#page").load("home.html");
	});

	$("#about").click(function(){
		//console.log("ABOUT");
		$("#page").load("about.html");
	});

	$("#content").click(function(){
		//console.log("CONTENT");
		$("#page").load("content.html");
	});

});