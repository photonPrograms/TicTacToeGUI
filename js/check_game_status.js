var winner;

function check_game_status() {
	f = first_turn;
	winner = "";

	for (i = 0; i < nrow; i++) {
		for (j = 0; j <= ncol - nconsec; j++) {
			symbol = board[i][j];
			if (symbol == ".")
				continue;
			l = 0;
			while (l < nconsec) {
				if (board[i][j + l] != symbol)
					break;
				l++;
			}
			if (l == nconsec)
				winner = symbol == players[f].sym ? players[f].name : players[Number(!f)].name;
		}
	}

	for (j = 0; j < ncol; j++) {
		for (i = 0; i <= nrow - nconsec; i++) {
			symbol = board[i][j];
			if (symbol == ".")
				continue;
			l = 0;
			while (l < nconsec) {
				if (board[i + l][j] != symbol)
					break;
				l++;
			}
			if (l == nconsec)
				winner = symbol == players[f].sym ? players[f].name : players[Number(!f)].name;
		}
	}

	for (i = 0; i <= nrow - nconsec; i++) {
		for (j = 0; j <= ncol - nconsec; j++) {
			symbol = board[i][j];
			if (symbol == ".")
				continue;
			l = 0;
			while (l < nconsec) {
				if (board[i + l][j + l] != symbol)
					break;
				l++;
			}
			if (l == nconsec)
				winner = symbol == players[f].sym ? players[f].name : players[Number(!f)].name;
		}

		for (j = ncol - 1; j >= nconsec - 1; j--) {
			symbol = board[i][j];
			if (symbol == ".")
				continue;
			l = 0;
			while (l < nconsec) {
				if (board[i + l][j - l] != symbol)
					break
				l++;
			}
			if (l == nconsec)
				winner = symbol == players[f].sym ? players[f].name : players[Number(!f)].name;
		}
	}

	if (turn >= ncol * nrow)
		winner =  "DRAW";

	return winner;
}
