var board = [], turn = 0;
var bdiv = document.getElementById("board");

function create_board() {
	document.getElementById("toss").className = "invisible";
	bdiv.className = "visible";
	var w = bdiv.offsetWidth * 0.6 / ncol;

	for (i = 0; i < nrow; i++) {
		board.push([]);
		s = "<div class = 'row'>"
		for (j = 0; j < ncol; j++) {
			board[i].push(".");
			element_id = "_" + i + "_" + j;
			s += "<div class = 'vacant' id = '" + element_id + "' style = 'width: " + w + "px; height: " + w +  "px;'onclick = 'update_game(this);'></div>";
		}
		s += "</div>";
		bdiv.innerHTML += s;
	}
}

function create_stats() {
	document.getElementById("stats").className = "visible";
	document.getElementById("moves_stat").innerHTML = turn;
	document.getElementById("curr_player_stat").innerHTML = players[first_turn].name;
	document.getElementById("player1_name").innerHTML = players[0].name;
	document.getElementById("player1_sym").innerHTML = players[0].sym;
	document.getElementById("player2_name").innerHTML = players[1].name;
	document.getElementById("player2_sym").innerHTML = players[1].sym;
}
