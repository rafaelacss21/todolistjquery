// Click on check to delete To-do
$("ul").on("click", ".btn-check", function(){
	$(this).parent().toggleClass("completed");
});

//Click on trash to delete To-do
$("ul").on("click", ".btn-trash", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li with text from the input
		$("ul").append("<li><button class='btn btn-trash'><i class='fa fa-trash'></i></button><button class='btn btn-check'><i class='fas fa-check-circle'></i></button> " + todoText + "</li>")
	}
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
