$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "sendmail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Ваша заявка отправлена,скоро администратор вам ответит");
			$("#form").trigger("reset");
		});
		return false;
	});

});
