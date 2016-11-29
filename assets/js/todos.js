// Check off todos by clicking!!
// $("li").on("click", function() {
// 	if($(this).css("color") === "rgb(128, 128, 128)") {
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none "
// 		})
// 	}
// 	else {
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 		});
// 	}
// 	});


// $("li").click(function () {
// 	$(this).toggleClass("completed");
// });

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete todo ...
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	// $(this).parent().remove();
	event.stopPropagation;
})

// Add new todos by adding text to 'input' and hitting Enter!
$("input[type='text']").keypress(function(event) {
	// console.log(event.which);
	if(event.which === 13){
		// console.log($(this).val());
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X </span>" + todoText + "</li>")	
	}
});