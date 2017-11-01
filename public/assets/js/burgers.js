// Wait to attach handler until the DOM is fully loaded.
$(function(){
	$(".devour-burger").on("click", function(event){
		// Set id based on button data-id attribute
		var id = $(this).data("id");
		// Send the PUT request
		$.ajax("/api/burgers/"+id, {
			type: "PUT",
			data: id
		}).then(function(){
			// Reload the webpage
			location.reload();
		})
	});

});