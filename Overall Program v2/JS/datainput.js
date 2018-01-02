var zones = []; 
var zoneNames = ["1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R"]; 
var scale;

var gamemode;
var player;
var zone;
var action;

var table = [];

var columnTitles = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
var rowTitles = ["","Drill Shot Made","Drill Shot Missed","Scrimmage Shot Made","Scrimmage Shot Missed","Scrimmage Pass Made","Scrimmage Pass Missed","Scrimmage Advantage Pass","Scrimmage Assist","Scrimmage Turnover","Game Shot Made","Game Shot Missed","Game Pass Made","Game Pass Missed","Game Advantage Pass","Game Assist","Game Turnover"];

var roster;

const fs = window.nodeRequire("fs");


function preload() {
    base = loadImage("assets/base.png");
    for (var i = 0; i < 26; i++) {
        zones[i]=loadImage("assets/" + zoneNames[i]+".png");
    }
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
        var playerfordisplay = roster[i];

        if(playerfordisplay.includes(" ")) {
            var x = playerfordisplay.split(" ");
            var a = x[0].slice(0,1).toUpperCase();
            var b = x[0].slice(1);
            var c = a + b + " ";
            var d = x[1].slice(0,1).toUpperCase();
            var e = x[1].slice(1);
            var f = d + e;
            playerfordisplay =  c.concat(f);
        }
        
        else {
            var a = playerfordisplay.slice(0,1).toUpperCase();
            var b = playerfordisplay.slice(1);
            playerfordisplay = a + b;
        }


        var selectedplayer = document.createElement("a");
        selectedplayer.setAttribute("onclick", "choosePlayer('" + roster[i] + "')");
        selectedplayer.innerHTML = playerfordisplay;
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

function addData() {
    column = columnTitles.indexOf(zone);
    row = rowTitles.indexOf(gamemode + " " + action);
    table[roster.indexOf(player)][row][column] = table[roster.indexOf(player)][row][column] + 1;  
    loadZone();
    console.log(table);
}

function saveData() {
    for (var i = 0; i < roster.length; i++) {
        fs.writeFile("data/" + roster[i] + ".JSON", JSON.stringify(table[i]), function (err) {
        if (err == undefined) {
            alert("Data has been saved");
        }
        else {
            alert(err.message,"Data Save Error")
        }
    });
    }
}

function loadZone() {
    for (var i=0;i<26;i++) {
        noTint();
        image(zones[i],0,0,windowWidth,.479*windowWidth);
    }
}

function colorZone() {
    switch(true) {
        case (245*scale<mouseY && mouseY<311*scale && mouseX>278*scale && mouseX<5.70*mouseY-5.70*245*scale+278*scale && mouseX<432*scale && mouseX>7*mouseY-7*289*scale+278*scale):
        tint(100,100,100);
        image(zones[0],0,0,windowWidth,.479*windowWidth);
        zone = "1L";
        console.log(zone);
        break;
        case (245*scale<mouseY && mouseY<311*scale && mouseX<586*scale && mouseX>-5.70*mouseY+5.70*245*scale+586*scale && mouseX>432*scale && mouseX<-7*mouseY+7*289*scale+586*scale):
        tint(100,100,100);
        image(zones[13],0,0,windowWidth,.479*windowWidth);
        zone = "1R";
        console.log(zone);
        break;   


        case (158*scale<mouseY && mouseY<289*scale && mouseX>-1.58*mouseY+1.58*158*scale+190*scale && mouseX<1.13*mouseY-1.13*158*scale+190*scale && mouseX>1.64*mouseY-1.64*196*scale+130*scale && mouseX<278*scale):
        tint(100,100,100);
        image(zones[1],0,0,windowWidth,.479*windowWidth);
        zone = "2L";
        console.log(zone);
        break;
        case (158*scale<mouseY && mouseY<289*scale && mouseX<1.58*mouseY-1.58*158*scale+674*scale && mouseX>-1.13*mouseY+1.13*158*scale+674*scale && mouseX<-1.64*mouseY+1.64*196*scale+734*scale && mouseX>586*scale):
        tint(100,100,100);
        image(zones[14],0,0,windowWidth,.479*windowWidth);
        zone = "2R";
        console.log(zone);
        break;


        case (89*scale<mouseY && mouseY<196*scale && mouseX>.5*mouseY-.5*89*scale+76*scale && mouseX<.52*mouseY-.52*89*scale+154*scale && mouseX<-1.58*mouseY+1.58*158*scale+190*scale):
        tint(100,100,100);
        image(zones[2],0,0,windowWidth,.479*windowWidth);
        zone = "3L";
        console.log(zone);
        break;
        case (89*scale<mouseY && mouseY<196*scale && mouseX<-.5*mouseY+.5*89*scale+788*scale && mouseX>-.52*mouseY+.52*89*scale+710*scale && mouseX>1.58*mouseY-1.58*158*scale+674*scale):
        tint(100,100,100);
        image(zones[15],0,0,windowWidth,.479*windowWidth);
        zone = "3R";
        console.log(zone);
        break;


        case (1*scale<mouseY && mouseY<89*scale && mouseX>76*scale && mouseX<.28*mouseY-.28*47*scale+140*scale && mouseX<141*scale):
        tint(100,100,100)
        image(zones[3],0,0,windowWidth,.479*windowWidth)
        zone = "4L";
        console.log(zone);
        break;
        case (1*scale<mouseY && mouseY<89*scale && mouseX<788*scale && mouseX>-.28*mouseY+.28*47*scale+724*scale && mouseX>723*scale):
        tint(100,100,100);
        image(zones[16],0,0,windowWidth,.479*windowWidth);
        zone = "4R";
        console.log(zone);
        break;


        case (203*scale<mouseY && mouseY<272*scale && mouseX>-1.79*mouseY+1.79*203*scale+330*scale && mouseX>3.71*mouseY-3.71*231*scale+280*scale && mouseX<432*scale):
        tint(100,100,100);
        image(zones[4],0,0,windowWidth,.479*windowWidth);
        zone = "5L";
        console.log(zone);
        break;
        case (203*scale<mouseY && mouseY<272*scale && mouseX<1.79*mouseY-1.79*203*scale+534*scale && mouseX<-3.71*mouseY+3.71*231*scale+584*scale && mouseX>432*scale):
        tint(100,100,100);
        image(zones[17],0,0,windowWidth,.479*windowWidth);
        zone = "5R";
        console.log(zone);
        break;


        case (124*scale<mouseY && mouseY<231*scale && mouseX>-1.5*mouseY+1.5*124*scale+240*scale && mouseX<1.14*mouseY-1.14*124*scale+240*scale && mouseX>1.17*mouseY-1.17*156*scale+192*scale && mouseX<-1.79*mouseY+1.79*203*scale+330*scale):
        tint(100,100,100);
        image(zones[5],0,0,windowWidth,.479*windowWidth);
        zone = "6L";
        console.log(zone);
        break;
        case (124*scale<mouseY && mouseY<231*scale && mouseX<1.5*mouseY-1.5*124*scale+624*scale && mouseX>-1.14*mouseY+1.14*124*scale+624*scale && mouseX<-1.17*mouseY+1.17*156*scale+672*scale && mouseX>1.79*mouseY-1.79*203*scale+534*scale):
        tint(100,100,100);
        image(zones[18],0,0,windowWidth,.479*windowWidth);
        zone = "6R";
        console.log(zone);
        break;


        case (64*scale<mouseY && mouseY<156*scale && mouseX>-2.5*mouseY+2.5*64*scale+216*scale && mouseX<.4*mouseY-.4*64*scale+216*scale && mouseX>.53*mouseY-.53*88*scale+156*scale && mouseX<-1.5*mouseY+1.5*124*scale+240*scale):
        tint(100,100,100);
        image(zones[6],0,0,windowWidth,.479*windowWidth);
        zone = "7L";
        console.log(zone);
        break;
        case (64*scale<mouseY && mouseY<156*scale && mouseX<2.5*mouseY-2.5*64*scale+648*scale && mouseX>-.4*mouseY+.4*64*scale+648*scale && mouseX<-.53*mouseY+.53*88*scale+708*scale && mouseX>1.5*mouseY-1.5*124*scale+624*scale):
        tint(100,100,100);
        image(zones[19],0,0,windowWidth,.479*windowWidth);
        zone = "7R";
        console.log(zone);
        break;


        case (1*scale<mouseY && mouseY<88*scale && mouseX>.13*mouseY-.13*1*scale+145*scale && mouseX<-2.5*mouseY+2.5*64*scale+216*scale && mouseX<.11*mouseY-.11*1*scale+209*scale):
        tint(100,100,100);
        image(zones[7],0,0,windowWidth,.479*windowWidth);
        zone = "8L";
        console.log(zone);
        break;
        case (1*scale<mouseY && mouseY<88*scale && mouseX<-.13*mouseY+.13*1*scale+719*scale && mouseX>2.5*mouseY-2.5*64*scale+648*scale && mouseX>.11*mouseY+.11*1*scale+655*scale):
        tint(100,100,100);
        image(zones[20],0,0,windowWidth,.479*windowWidth);
        zone = "8R";
        console.log(zone);
        break;


        case (136*scale<mouseY && mouseY<203*scale && 330*scale<mouseX && mouseX<432*scale):
        tint(100,100,100);
        image(zones[8],0,0,windowWidth,.479*windowWidth);
        zone = "9L";
        console.log(zone);
        break;
        case (136*scale<mouseY && mouseY<203*scale && 432*scale<mouseX && mouseX<534*scale):
        tint(100,100,100);
        image(zones[21],0,0,windowWidth,.479*windowWidth);
        zone = "9R";
        console.log(zone);
        break;


        case (97*scale<mouseY && mouseY<203*scale && mouseX>-1.48*mouseY+1.48*97*scale+284*scale && mouseX>1.09*mouseY-1.09*124*scale+244*scale && mouseX<1.18*mouseY-1.18*97*scale+284*scale && mouseX<330*scale):
        tint(100,100,100);
        image(zones[9],0,0,windowWidth,.479*windowWidth);
        zone = "10L";
        console.log(zone);
        break;
        case (97*scale<mouseY && mouseY<203*scale && mouseX<1.48*mouseY-1.48*97*scale+580*scale && mouseX<-1.09*mouseY+1.09*124*scale+620*scale && mouseX>-1.18*mouseY+1.18*97*scale+580*scale && mouseX>534*scale):
        tint(100,100,100);
        image(zones[22],0,0,windowWidth,.479*windowWidth);
        zone = "10R";
        console.log(zone);
        break;


        case (1*scale<mouseY && mouseY<124*scale && mouseX>.26*mouseY-.26*1*scale+212*scale && mouseX<.16*mouseY-.16*1*scale+269*scale && mouseX<-1.48*mouseY+1.48*97*scale+284*scale):
        tint(100,100,100);
        image(zones[10],0,0,windowWidth,.479*windowWidth);
        zone = "11L";
        console.log(zone);
        break;
        case (1*scale<mouseY && mouseY<124*scale && mouseX<-.26*mouseY+.26*1*scale+652*scale && mouseX>-.16*mouseY+.16*1*scale+595*scale && mouseX>1.48*mouseY-1.48*97*scale+580*scale):
        tint(100,100,100);
        image(zones[23],0,0,windowWidth,.479*windowWidth);
        zone = "11R";
        console.log(zone);
        break;


        case (1*scale<mouseY && mouseY<136*scale && 330*scale<mouseX && mouseX<432*scale):
        tint(100,100,100);
        image(zones[11],0,0,windowWidth,.479*windowWidth);
        zone = "12L";
        console.log(zone);
        break;
        case (1*scale<mouseY && mouseY<136*scale && 432*scale<mouseX && mouseX<534*scale):
        tint(100,100,100);
        image(zones[24],0,0,windowWidth,.479*windowWidth);
        zone = "12R";
        console.log(zone);
        break;

        case (1*scale<mouseY && mouseY<136*scale && mouseX>.16*mouseY-.16*1*scale+269*scale && mouseX>1.1*mouseY-1.1*94*scale+284*scale && mouseX<330*scale):
        tint(100,100,100);
        image(zones[12],0,0,windowWidth,.479*windowWidth);
        zone = "13L";
        console.log(zone);
        break;
        case (1*scale<mouseY && mouseY<136*scale && mouseX<-.16*mouseY+.16*1*scale+595*scale && mouseX<-1.1*mouseY+1.1*94*scale+580*scale && mouseX>534*scale):
        tint(100,100,100);
        image(zones[25],0,0,windowWidth,.479*windowWidth);
        zone = "13R";
        console.log(zone);
        break;
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
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




