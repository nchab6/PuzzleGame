function swapTiles(cell1, cell2) {
	var temp = document.getElementById(cell1).className;
	document.getElementById(cell1).className = document.getElementById(cell2).className;
	document.getElementById(cell2).className = temp;
}

function shuffle() {
	//Use nested loops to access each cell of the 3x3 grid
	for(var row=1; row <=3; row++) //foreach row of the 3x3 grid
	{
		//foreach column in this row
		for (var column=1; column <=3; column++) {
			//pick a random row from 1 to 3
			
			var row2=Math.floor(Math.random()*3+1);
			
			//pick a random column from 1 to 3
			var column2=Math.floor(Math.random()*3+1);
			
			swapTiles("cell"+row+column, "cell"+row2+column2); //swap the look & feel of both cells
		}
	}
}

function clickTile(row, column) {
	var cell = document.getElementById("cell"+row+column);
	var tile = cell.className;
	
	if(tile!="tile9") {
		//check if the white tile is on the right
		if(column<3) {
			if(document.getElementById("cell"+row+(column+1)).className=="tile9") {
				swapTiles("cell"+row+column, "cell"+row+(column+1));
				return;
			}
		}
		//check if the white tile is on the left
		if(column>1) {
			if(document.getElementById("cell"+row+(column-1)).className=="tile9") {
				swapTiles("cell"+row+column,"cell"+row+(column-1));
				return;
			}
		}
		//check if the white tile is above
		if(row > 1) {
			if(document.getElementById("cell"+(row-1)+column).className=="tile9") {
				swapTiles("cell"+row+column, "cell"+(row-1)+column);
				return;
			}
		}
		
		//check if the white tile is below
		if(row < 3) {
			if(document.getElementById("cell"+(row+1)+column).className=="tile9") {
				swapTiles("cell"+row+column, "cell"+(row+1)+column);
				return;
			}
		}
	}
}