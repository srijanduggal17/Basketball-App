var zones = []; 
var scale;

var gamemode = "";
var player = "";
var zone = "";
var action = "";

var table = [];

var columnTitles = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
var rowTitles = ["","Drill Shot Made","Drill Shot Missed","Scrimmage Shot Made","Scrimmage Shot Missed","Scrimmage Pass Made","Scrimmage Pass Missed","Scrimmage Advantage Pass","Scrimmage Assist","Scrimmage Turnover","Game Shot Made","Game Shot Missed","Game Pass Made","Game Pass Missed","Game Advantage Pass","Game Assist","Game Turnover"];

var roster;
var prev;
var added;

var zoneSelected = 0;


function preload() {
    base = loadImage("assets/base.png");
    for (var i = 0; i < 26; i++) {
        zones[i]=loadImage("assets/" + zoneNames[i]+".png");
    }
    prev = document.getElementById("previewid");
    added = document.getElementById("added");
}

function setup() {
    cnv = createCanvas(windowWidth,.479*windowWidth);
    background(255);
    colorMode(HSB,360,100,80);
    cnv.mouseClicked(colorZone)
    console.log(windowWidth,.479*windowWidth)
    scale = (windowWidth/864)
    noTint();
    image(base,0,0,windowWidth,.479*windowWidth);


    roster = JSON.parse(fs.readFileSync("data/roster.JSON", 'utf8'));

    for (var i = 0; i < roster.length; i++) {
        var selectedplayer = document.createElement("a");
        selectedplayer.setAttribute("onclick", "choosePlayer('" + roster[i] + "')");
        selectedplayer.innerHTML = capitalizeName(roster[i]);
        var dropdown = document.getElementById("myDropdown");
        dropdown.appendChild(selectedplayer);

        table[i] = JSON.parse(fs.readFileSync("data/" + roster[i] + ".JSON", 'utf8'));
    }
}

function choosePlayer(choice) {
    player = choice;
    console.log(player);
    myFunction();
}

function chooseAction(choice) {
    action = choice;
    console.log(action);
    myFunction2();
}

function addData() {
    column = columnTitles.indexOf(zone);
    row = rowTitles.indexOf(gamemode + " " + action);
    table[roster.indexOf(player)][row][column] = table[roster.indexOf(player)][row][column] + 1;  
    loadZone();
    console.log(table);
    added.innerHTML = "Entry added"
    setTimeout(function(){added.innerHTML = ""},500);
}

function saveData() {
    for (var i = 0; i < roster.length; i++) {
        fs.writeFile("data/" + roster[i] + ".JSON", JSON.stringify(table[i]), function (err) {
        if (err != undefined) {
            alert(err.message,"Data Save Error")
        }
    });
    }
    alert("Data has been saved");
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("actionDropdown").classList.toggle("show");
}

function addFT() {
	zone = "FT";
	console.log(zone);
}

function drillMode() {
    gamemode = "Drill";
    console.log(gamemode);
}
function scrimmageMode() {
    gamemode = "Scrimmage"
    console.log(gamemode);
}
function gameMode() {
    gamemode = "Game"
    console.log(gamemode);
}



// 13 is enter, 49 is 1, 50 is 2, 51 is 3, 52 is 4, 53 is 5, 54 is 6, 55 is 7 (7 total possible results of an action)
//meyer = y, bo = b, casey = w, cj = c, finn = f, riley = r, murray = m, james = j, jp = p, zachary = z
//97 = a is preview

$(document).keypress(function(e) {
    if(e.which == 13) {
        addData()
        console.log(player + " " + zone + " " + action + " (" + gamemode + ")");
    }
    else if (e.which == 49) {
        action = "Shot Made";
        console.log(action);
    }
    else if (e.which == 50) {
        action = "Shot Missed";
        console.log(action);
    }
    else if (e.which == 51) {
        action = "Pass Made";
        console.log(action);
    }
    else if (e.which == 52) {
        action = "Pass Missed";
        console.log(action);
    }
    else if (e.which == 53) {
        action = "Advantage Pass";
        console.log(action);
    }
    else if (e.which == 54) {
        action = "Assist";
        console.log(action);
    }
    else if (e.which ==55) {
        action = "Turnover";
        console.log(action);
    }

    else if (e.which == 97) {
        console.log(player + " " + zone + " " + action + " (" + gamemode + ")");
    }


    else if (e.which == 100) {
        drillMode();
    }
    else if (e.which == 115) {
        scrimmageMode();
    }
    else if (e.which == 103) {
        gameMode();
    }
});

function draw() {
	prev.innerHTML = capitalizeName(player) + " " + zone + " " + action + " (" + gamemode + ")";
}