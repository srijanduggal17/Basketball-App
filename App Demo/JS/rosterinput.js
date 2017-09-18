var rosterData;
var oldRoster;

var basicstatstable;

window.onload = function setup() {
	oldRoster = JSON.parse(fs.readFileSync("data/roster.JSON", 'utf8'));
	rosterData = oldRoster.slice();
	console.log(rosterData);

	for (var i = 0; i < rosterData.length; i++) {
		var player = document.createElement("li");;
		player.setAttribute("id", rosterData[i]);
		player.innerHTML = capitalizeName(rosterData[i]);
		var currentroster = document.getElementById("currentroster");
		currentroster.appendChild(player);
	}

	basicstatstable = JSON.parse(fs.readFileSync("data/basicdata.JSON", 'utf8'));
}

function addPlayer() {
	var newplayer = document.getElementById("player").value.toLowerCase();
	var isplayernew = "Yes";

	for (var i = 0; i<rosterData.length; i++) {
		if(newplayer==rosterData[i].toLowerCase()) {
			isplayernew = "No";
		}
	}

	if (isplayernew == "Yes") {
		rosterData.push(newplayer);

		var player = document.createElement("li");
		player.setAttribute("id", newplayer);
		player.innerHTML = capitalizeName(newplayer);
		var currentroster = document.getElementById("currentroster");
		currentroster.appendChild(player);
	}

	newplayer = document.getElementById("player").value.toLowerCase();
	
	document.getElementById("player").value="";
	console.log(rosterData)
}
function removePlayer() {
	var rplayer = document.getElementById("rplayer").value.toLowerCase();
	console.log(rplayer);


	if (rosterData.indexOf(rplayer) != -1) {
		rosterData.splice(rosterData.indexOf(rplayer), 1);
	}

	$(document.getElementById(rplayer)).remove();

	console.log(rosterData);
	
	document.getElementById("rplayer").value="";
}
function saveChanges() {
	oldRoster = JSON.parse(fs.readFileSync("data/roster.JSON", 'utf8'));

	for (var i = 0; i < rosterData.length; i++) {
		var isnew = "Yes";
		for (var j = 0; j < oldRoster.length; j++) {
			if (rosterData[i] == oldRoster[j]) {
				isnew = "No";
			}
		}

		if (isnew == "Yes") {
			makeFile(rosterData[i]);
			addToBasicStats(rosterData[i]);
		}
	}

	for (var i = 0; i < oldRoster.length; i++) {
		var isgone = "Yes";
		for (var j = 0; j < rosterData.length; j++) {
			if(oldRoster[i] == rosterData[j]) {
				isgone = "No";
			}
		}

		if (isgone == "Yes") {
			deleteFile(oldRoster[i]);
			removeFromBasicStats(oldRoster[i]);
		}
	}

	
	fs.writeFile("data/roster.JSON", JSON.stringify(rosterData), function (err) {
		if (err == undefined) {
			alert("Roster has been changed");
		}
		else {
			alert(err.message,"Roster Change Error")
		}
	});

	fs.writeFile("data/basicdata.JSON", JSON.stringify(basicstatstable), function (err) {
		if (err == undefined) {
			alert("Basic Stats has been changed");
		}
		else {
			alert(err.message,"Basic Stats Change Error")
		}
	});
}

function makeFile(x) {
	var dataStructure = [];

	for (var j = 0; j < 17; j++) {
		dataStructure[j] = [];
		for (var k = 0; k < 28; k++) {
    		dataStructure[j][k] = 0;
    	}
    }
	dataStructure[0] = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    dataStructure[1][0] = "Drill Shot Made";
    dataStructure[2][0] = "Drill Shot Missed";
    dataStructure[3][0] = "Scrimmage Shot Made";
    dataStructure[4][0] = "Scrimmage Shot Missed";
    dataStructure[5][0] = "Scrimmage Pass Made";
    dataStructure[6][0] = "Scrimmage Pass Missed";
    dataStructure[7][0] = "Scrimmage Advantage Pass";
    dataStructure[8][0] = "Scrimmage Assist";
    dataStructure[9][0] = "Scrimmage Turnover";
    dataStructure[10][0] = "Game Shot Made";
    dataStructure[11][0] = "Game Shot Missed";
    dataStructure[12][0] = "Game Pass Made";
    dataStructure[13][0] = "Game Pass Missed";
    dataStructure[14][0] = "Game Advantage Pass";
    dataStructure[15][0] = "Game Assist";
    dataStructure[16][0] = "Game Turnover";

	fs.writeFile("data/" + x + ".JSON",JSON.stringify(dataStructure), function (err) {
		if (err == undefined) {
			alert("New data file created");
		}
		else {
			alert(err.message,"File Creation Error")
		}
	});
}

function deleteFile(x) {
	fs.unlink("data/" + x + ".JSON", function (err) {
		if (err == undefined) {
			alert("File successfully deleted");
		}
		else {
			alert(err.message,"File Deletion Error")
		}
    });
}

function addToBasicStats(player) {
	basicstatstable[rosterData.indexOf(player)+2] = [player,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
}

function removeFromBasicStats(player) {
	basicstatstable.splice((oldRoster.indexOf(player)+2), 1);
}