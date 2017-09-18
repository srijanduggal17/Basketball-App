var player = "";

var table = [];

var roster;
var prev;
var playerarray = ["","Opponent"]

function preload() {
    prev = document.getElementById("previewid");
}

function setup() {
    table = JSON.parse(fs.readFileSync("data/basicdata.JSON", 'utf8'));

    roster = JSON.parse(fs.readFileSync("data/roster.JSON", 'utf8'));

    for (var i = 0; i < roster.length; i++) {
        var selectedplayer = document.createElement("a");
        selectedplayer.setAttribute("onclick", "choosePlayer('" + roster[i] + "')");
        selectedplayer.innerHTML = capitalizeName(roster[i]);
        var dropdown = document.getElementById("myDropdown");
        dropdown.appendChild(selectedplayer);

        playerarray.push(roster[i]);
    }
}

function choosePlayer(choice) {
    player = choice;
    myFunction();
}

function addToData(choice) {
    table[playerarray.indexOf(player)][basicDataTitles.indexOf(choice)] += 1;
}

function subtractFromData(choice) {
    table[playerarray.indexOf(player)][basicDataTitles.indexOf(choice)] -= 1;
}

function saveData() {
    fs.writeFile("data/basicdata.JSON", JSON.stringify(table), function (err) {
        if (err != undefined) {
            alert(err.message,"Data Save Error")
        }
        else {
            alert("Data has been saved");
        }
    });
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// 13 is enter, 49 is 1, 50 is 2, 51 is 3, 52 is 4, 53 is 5, 54 is 6, 55 is 7 (7 total possible results of an action)
//meyer = y, bo = b, casey = w, cj = c, finn = f, riley = r, murray = m, james = j, jp = p, zachary = z
//97 = a is preview

function draw() {
	prev.innerHTML = capitalizeName(player);
    document.getElementById('personalfoul').innerHTML = table[playerarray.indexOf(player)][1];
    document.getElementById('technicalfoul').innerHTML = table[playerarray.indexOf(player)][2];
    document.getElementById('flagrantfoul').innerHTML = table[playerarray.indexOf(player)][3];
    document.getElementById('defensiverebound').innerHTML = table[playerarray.indexOf(player)][4];
    document.getElementById('offensiverebound').innerHTML = table[playerarray.indexOf(player)][5];
    document.getElementById('blocks').innerHTML = table[playerarray.indexOf(player)][6];
    document.getElementById('blocksagainst').innerHTML = table[playerarray.indexOf(player)][7];
    document.getElementById('steals').innerHTML = table[playerarray.indexOf(player)][8];
    document.getElementById('2ptmade').innerHTML = table[playerarray.indexOf(player)][9];
    document.getElementById('2ptmissed').innerHTML = table[playerarray.indexOf(player)][10];
    document.getElementById('3ptmade').innerHTML = table[playerarray.indexOf(player)][11];
    document.getElementById('3ptmissed').innerHTML = table[playerarray.indexOf(player)][12];
    document.getElementById('ftmade').innerHTML = table[playerarray.indexOf(player)][13];
    document.getElementById('ftmissed').innerHTML = table[playerarray.indexOf(player)][14];
}