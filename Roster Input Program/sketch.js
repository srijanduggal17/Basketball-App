var roster = [];
var dataStructure = [];
var mainDataStructure = [];


function adjustDataStructures() {
	mainDataStructure = dataStructure.slice();
	console.log(mainDataStructure);	
}

function getPlayer() {
	var newplayer = document.getElementById("player").value.toLowerCase();
	var isplayernew = "Yes";

	for (var i = 0; i<roster.length; i++) {
		if(newplayer==roster[i].toLowerCase()) {
			isplayernew = "No";
		}
	}

	if (isplayernew == "Yes") {
		roster.push(newplayer);
		var player = document.createElement("li");
		player.setAttribute("id", newplayer);

		var x = newplayer.split(" ");
		var a = x[0].slice(0,1).toUpperCase();
		var b = x[0].slice(1);
		var c = a + b + " ";
		var d = x[1].slice(0,1).toUpperCase();
		var e = x[1].slice(1);
		var f = d + e;
		newplayer =  c.concat(f);


		var displayroster = document.createTextNode(newplayer);
		player.appendChild(displayroster);

		var currentroster = document.getElementById("currentroster");
		currentroster.appendChild(player);
	}

	newplayer = document.getElementById("player").value.toLowerCase();
	
	document.getElementById("player").value="";
	console.log(roster)

	dataStructure = mainDataStructure;

	dataStructure[roster.indexOf(newplayer)] = [];
	for (var j = 0; j < 17; j++) {
		dataStructure[roster.indexOf(newplayer)][j] = [];
		for (var k = 0; k < 28; k++) {
    		dataStructure[roster.indexOf(newplayer)][j][k] = 0;
    	}
    }
	dataStructure[roster.indexOf(newplayer)][0] = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    dataStructure[roster.indexOf(newplayer)][1][0] = "Shot Made";
    dataStructure[roster.indexOf(newplayer)][2][0] = "Shot Missed";
    dataStructure[roster.indexOf(newplayer)][3][0] = "Shot Made";
    dataStructure[roster.indexOf(newplayer)][4][0] = "Shot Missed";
    dataStructure[roster.indexOf(newplayer)][5][0] = "Pass Made";
    dataStructure[roster.indexOf(newplayer)][6][0] = "Pass Missed";
    dataStructure[roster.indexOf(newplayer)][7][0] = "Advantage Pass";
    dataStructure[roster.indexOf(newplayer)][8][0] = "Assist";
    dataStructure[roster.indexOf(newplayer)][9][0] = "Turnover";
    dataStructure[roster.indexOf(newplayer)][10][0] = "Shot Made";
    dataStructure[roster.indexOf(newplayer)][11][0] = "Shot Missed";
    dataStructure[roster.indexOf(newplayer)][12][0] = "Pass Made";
    dataStructure[roster.indexOf(newplayer)][13][0] = "Pass Missed";
    dataStructure[roster.indexOf(newplayer)][14][0] = "Advantage Pass";
    dataStructure[roster.indexOf(newplayer)][15][0] = "Assist";
    dataStructure[roster.indexOf(newplayer)][16][0] = "Turnover";
}
function removePlayer() {
	var rplayer = document.getElementById("rplayer").value.toLowerCase();
	console.log(rplayer);

	dataStructure = mainDataStructure.slice();

	if (roster.indexOf(rplayer) != -1) {
		roster.splice(roster.indexOf(rplayer), 1);
		dataStructure.splice(roster.indexOf(rplayer), 1);
	}

	$(document.getElementById(rplayer)).remove();

	console.log(roster);
	console.log(mainDataStructure);

	document.getElementById("rplayer").value="";
}