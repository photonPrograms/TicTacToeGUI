function update_game(element) {
	if (element.className != "vacant")
		return false;
	sym_placed = turn % 2 == 0 ? sym_even : sym_odd;
	element.className = sym_placed.toLowerCase();
	element.innerHTML = sym_placed;
	elid = element.id;
	elid = elid.split("_");
	board[elid[1]][elid[2]] = sym_placed;
	turn++;
	
	res = check_game_status();
	if (res) {
		document.getElementById("board").className = "invisible";
		document.getElementById("stats").className = "invisible";
		document.getElementById("end").className = "visible"
		if (res == "DRAW")
			document.getElementById("winner").innerHTML = "a draw."
		else
			document.getElementById("winner").innerHTML = "won by " + res + "!";
		return;
	}

	document.getElementById("moves_stat").innerHTML = turn;
	f = first_turn;
	curr_player = turn % 2 == 0 ?  players[f].name : players[Number(!f)].name;
	document.getElementById("curr_player_stat").innerHTML = curr_player;
}
