var first_turn, sym_even, sym_odd;

function toss_coin() {
	first_turn = Math.random() < 0.5 ? 0 : 1;
	players[0].sym = Math.random() < 0.5 ? "O" : "X";
	players[1].sym = players[0].sym == "O" ? "X" : "O";

	document.getElementById("toss_coin").style.display = "none";
	document.getElementById("first_turn").innerHTML = "Player " + players[first_turn].name + " will play first.";
	document.getElementById("symbol").innerHTML = players[0].name + ": " + players[0].sym + " and " + players[1].name + ": " + players[1].sym;
	document.getElementById("after_toss").style.display = "inline-block";

	sym_even = players[first_turn].sym;
	sym_odd = players[Number(!first_turn)].sym;
}
