var ncol, nrow, nconsec;
var players = [{ name: "", sym: "" }, { name: "", sym: ""}];

function validate_names() {
	var visibles = document.getElementsByClassName("error_msg_vis");
	for (visible of visibles)
		visible.className = "error_msg";
	
	players[0].name = document.getElementById("player1").value;
	players[1].name = document.getElementById("player2").value;

	if (!players[0].name.length || !players[1].name.length) {
		document.getElementById("empty_name").className = "error_msg_vis";
		return false;
	}
	return true;
}

function validate_form() {
	var rinput = Number(document.getElementById("rows").value);
	var cinput = Number(document.getElementById("columns").value);
	var coninput = Number(document.getElementById("consec").value);

	if (!isNaN(rinput) && !isNaN(cinput) && !isNaN(coninput))
		if (rinput >= 1 && cinput >= 1 && coninput >= 1)
			if (coninput <= Math.sqrt(rinput ** 2 + cinput ** 2)) {
				nrow = Math.floor(rinput);
				ncol = Math.floor(cinput);
				nconsec = Math.floor(coninput);
				document.getElementById("form").className = "invisible";
				document.getElementById("toss").className = "visible";
			}
			else
				document.getElementById("large_consec").className = "error_msg_vis";
		else
			document.getElementById("rng_error").className = "error_msg_vis";
	else
		document.getElementById("non_number").className = "error_msg_vis";
}
