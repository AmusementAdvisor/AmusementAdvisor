function validiraj(){
	$(document).ready(function () {
		if ($("#user").val() == "dina" || $("#user").val() == "berina"){

			$(".glyphicon-user").css("color", "green");
			$("#user").css("border", "2px solid green");
			if ($("#pass").val() == "0000"){
				$(".glyphicon-lock").css("color", "green");
				$("#pass").css("border", "2px solid green");
				$("#login").modal('toggle');

				$("#prijavaNaslov, .btn").hide();
				$("#privatna-statistika").fadeIn(1500);

			}
			else {
				$(".glyphicon-lock").css("color", "red");
				$("#pass").css("border", "2px solid red");
			}
		}
		else {
			console.log("Pogresno korisnicko ime");
			$(".glyphicon-user").css("color", "red");
			$("#user").css("border", "2px solid red");
		}
	});

}