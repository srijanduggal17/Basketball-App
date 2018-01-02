var zones = []; 
var zoneNames = ["1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R"]; 
var scale;

var playerNames = ["Bo","Meyer","Finn","CJ","Riley","JP","Zachary","Casey","Murray","James"];
var playerInitials = ["BM","MW","FB","CR","RD","JB","ZG","WC","MC","JA"];
var playerInit;

var zonecenterx = [0.4042, 0.2463, 0.1516, 0.1274, 0.4295, 0.2926, 0.2326, 0.2063, 0.4358, 0.3368, 0.2821, 0.4358, 0.3474, 0.5958, 0.7537, 0.8484, 0.8726, 0.5705, 0.7074, 0.7674, 0.7937, 0.5642, 0.6632, 0.7179, 0.5642, 0.6526];
var zonecentery = [0.6813, 0.5363, 0.3209, 0.1099, 0.5626, 0.4396, 0.2571, 0.0989, 0.4088, 0.3473, 0.1319, 0.1714, 0.1319, 0.6813, 0.5363, 0.3209, 0.1099, 0.5626, 0.4396, 0.2571, 0.0989, 0.4088, 0.3473, 0.1319, 0.1714, 0.1319];

var hoopx = .497;
var hoopy = .123;

var player;
var zone;
var action;

var eventArray = [];
var initialZone;
var finalZone;

var x1;
var x2;
var y1;
var y2;

var play = [];

var head1;
var head2;

var head1Points;
var head2Points;

//1072,513

var i = 0;

var table1;
var table2;
var shootingAccuracies;
var passingAccuracies;

var zoneSelected = 0;

var probWeakestLink = [];
var weakestEvent;

function preload() {
    base = loadImage("Assets/base3.png");
    for (var i = 0; i < 26; i++) {
        zones[i]=loadImage("Assets/" + zoneNames[i]+".png");
    }

    table1 = loadTable("Data/ShootingAccuracy.csv","csv","header");
    table2 = loadTable("Data/PassingAccuracy.csv","csv","header");
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

    shootingAccuracies = table1.getArray();
    passingAccuracies = table2.getArray();
}

/*
function draw(){
    console.log(mouseX,mouseY);
}
*/


function addInitialData() {
    eventArray[0] = player;
    eventArray[1] = zone;
    eventArray[2] = action;
    loadZone();

    ellipse(CENTER);
    stroke(0);
    fill(100);
    ellipse(zonecenterx[zoneNames.indexOf(zone)]*windowWidth,zonecentery[zoneNames.indexOf(zone)]*windowWidth*.479,.037*windowWidth);
    textSize(.014*windowWidth);
    textAlign(CENTER,CENTER);
    noStroke();
    fill(0);
    text(playerInitials[playerNames.indexOf(player)],zonecenterx[zoneNames.indexOf(zone)]*windowWidth,zonecentery[zoneNames.indexOf(zone)]*windowWidth*.479);

    console.log(eventArray);
    if(action == "Shot") {
        x1 = zonecenterx[zoneNames.indexOf(eventArray[1])]*windowWidth;
        y1 = zonecentery[zoneNames.indexOf(eventArray[1])]*windowWidth*.479;

        x2 = hoopx*windowWidth;
        y2 = hoopy*windowWidth*.479; 

        var u = createVector(x2-x1,y2-y1);
        u.normalize();
        u.setMag(.5*.037*windowWidth);
        var a = u.array();

        strokeWeight(2);
        stroke(0,100,100);
        line(x1+a[0],y1+a[1],x2-a[0],y2-a[1]);
        
        head1 = createVector(x1-x2,y1-y2);
        head1.normalize();
        head1.setMag(.02*windowWidth);

        head2 = createVector(x1-x2,y1-y2);
        head2.normalize();
        head2.setMag(.02*windowWidth);

        head1.rotate(Math.PI/6);
        head2.rotate(11*Math.PI/6)

        head1Points = head1.array();
        head2Points = head2.array();
        
        line(x2-a[0],y2-a[1],x2-a[0]+head1Points[0],y2-a[1]+head1Points[1]);
        line(x2-a[0],y2-a[1],x2-a[0]+head2Points[0],y2-a[1]+head2Points[1]);

        zoneSelected = 1;

        append(play, eventArray);
        eventArray = [];
    }

    for (var i = 0; i <play.length; i++) {
        initialZone = zoneNames.indexOf(play[i][1]);
        finalZone = zoneNames.indexOf(play[i][3]);

        x1 = zonecenterx[initialZone]*windowWidth;
        y1 = zonecentery[initialZone]*windowWidth*.479;

        playerInit = playerInitials[playerNames.indexOf(play[i][0])];
        
        ellipse(CENTER);
        stroke(0);
        fill(100);
        ellipse(x1,y1,.037*windowWidth);
        textSize(.014*windowWidth);
        textAlign(CENTER,CENTER);
        noStroke();
        fill(0);
        text(playerInit,x1,y1);
        
        x2 = zonecenterx[finalZone]*windowWidth;
        y2 = zonecentery[finalZone]*windowWidth*.479; 

        var u = createVector(x2-x1,y2-y1);
        u.normalize();
        u.setMag(.5*.037*windowWidth);
        var a = u.array();
        
        switch(play[i][2]) {
            case("Pass"):
                strokeWeight(2);
                stroke(120,100,100);
            break;

            case("Dribble"):
                strokeWeight(2);
                stroke(240,100,100);
            break;

            /*
            case("Shot"):
                x2 = hoopx*windowWidth;
                y2 = hoopy*windowWidth*.479; 

                strokeWeight(2);
                stroke(0,100,100);
                line(x1,y1,x2,y2);
            break;
            */
        }        

        line(x1+a[0],y1+a[1],x2-a[0],y2-a[1]);

        head1 = createVector(x1-x2,y1-y2);
        head1.normalize();
        head1.setMag(.02*windowWidth);

        head2 = createVector(x1-x2,y1-y2);
        head2.normalize();
        head2.setMag(.02*windowWidth);

        head1.rotate(Math.PI/6);
        head2.rotate(11*Math.PI/6)

        head1Points = head1.array();
        head2Points = head2.array();
        
        line(x2-a[0],y2-a[1],x2-a[0]+head1Points[0],y2-a[1]+head1Points[1]);
        line(x2-a[0],y2-a[1],x2-a[0]+head2Points[0],y2-a[1]+head2Points[1]);
        
    }
    
    if(action == "Pass") {
        player = "";
    }
}

function addFinalData() {
    switch(action) {
        case("Pass"):
            eventArray[3] = zone;
            eventArray[4] = player;

            append(play, eventArray);
            

            loadZone();

            ellipse(CENTER);
            stroke(0);
            fill(100);
            ellipse(zonecenterx[zoneNames.indexOf(eventArray[1])]*windowWidth,zonecentery[zoneNames.indexOf(eventArray[1])]*windowWidth*.479,.037*windowWidth);
            ellipse(zonecenterx[zoneNames.indexOf(eventArray[3])]*windowWidth,zonecentery[zoneNames.indexOf(eventArray[3])]*windowWidth*.479,.037*windowWidth);
            textSize(.014*windowWidth);
            textAlign(CENTER,CENTER);
            noStroke();
            fill(0);
            text(playerInitials[playerNames.indexOf(eventArray[0])],zonecenterx[zoneNames.indexOf(eventArray[1])]*windowWidth,zonecentery[zoneNames.indexOf(eventArray[1])]*windowWidth*.479);
            text(playerInitials[playerNames.indexOf(eventArray[4])],zonecenterx[zoneNames.indexOf(eventArray[3])]*windowWidth,zonecentery[zoneNames.indexOf(eventArray[3])]*windowWidth*.479);

            eventArray = [];

            for (var i = 0; i <play.length; i++) {
                initialZone = zoneNames.indexOf(play[i][1]);
                finalZone = zoneNames.indexOf(play[i][3]);      
                
                x1 = zonecenterx[initialZone]*windowWidth;
                y1 = zonecentery[initialZone]*windowWidth*.479;

                playerInit = playerInitials[playerNames.indexOf(play[i][0])];

                ellipse(CENTER);
                stroke(0);
                fill(100);
                ellipse(x1,y1,.037*windowWidth);
                textSize(.014*windowWidth);
                textAlign(CENTER,CENTER);
                noStroke();
                fill(0);
                text(playerInit,x1,y1);

                x2 = zonecenterx[finalZone]*windowWidth;
                y2 = zonecentery[finalZone]*windowWidth*.479; 

                var u = createVector(x2-x1,y2-y1);
                u.normalize();
                u.setMag(.5*.037*windowWidth);
                var a = u.array();
                
                switch(play[i][2]) {
                    case("Pass"):
                        strokeWeight(2);
                        stroke(120,100,100);
                    break;

                    case("Dribble"):
                        strokeWeight(2);
                        stroke(240,100,100);
                    break;

                    /*
                    case("Shot"):
                        x2 = hoopx*windowWidth;
                        y2 = hoopy*windowWidth*.479;

                        strokeWeight(2);
                        stroke(0,100,100);
                        line(x1,y1,x2,y2);
                    break;
                    */
                }
                
                line(x1+a[0],y1+a[1],x2-a[0],y2-a[1]);

                head1 = createVector(x1-x2,y1-y2);
                head1.normalize();
                head1.setMag(.02*windowWidth);

                head2 = createVector(x1-x2,y1-y2);
                head2.normalize();
                head2.setMag(.02*windowWidth);

                head1.rotate(Math.PI/6);
                head2.rotate(11*Math.PI/6)

                head1Points = head1.array();
                head2Points = head2.array();

                line(x2-a[0],y2-a[1],x2-a[0]+head1Points[0],y2-a[1]+head1Points[1]);
                line(x2-a[0],y2-a[1],x2-a[0]+head2Points[0],y2-a[1]+head2Points[1]);
            }
        break;

        case("Dribble"):
            eventArray[3] = zone;

            append(play, eventArray);

            loadZone();

            ellipse(CENTER);
            stroke(0);
            fill(100);
            ellipse(zonecenterx[zoneNames.indexOf(eventArray[1])]*windowWidth,zonecentery[zoneNames.indexOf(eventArray[1])]*windowWidth*.479,.037*windowWidth);
            ellipse(zonecenterx[zoneNames.indexOf(eventArray[3])]*windowWidth,zonecentery[zoneNames.indexOf(eventArray[3])]*windowWidth*.479,.037*windowWidth);
            textSize(.014*windowWidth);
            textAlign(CENTER,CENTER);
            noStroke();
            fill(0);
            text(playerInitials[playerNames.indexOf(eventArray[0])],zonecenterx[zoneNames.indexOf(eventArray[1])]*windowWidth,zonecentery[zoneNames.indexOf(eventArray[1])]*windowWidth*.479);
            text(playerInitials[playerNames.indexOf(eventArray[0])],zonecenterx[zoneNames.indexOf(eventArray[3])]*windowWidth,zonecentery[zoneNames.indexOf(eventArray[3])]*windowWidth*.479);

            eventArray = [];

            for (var i = 0; i <play.length; i++) {
                initialZone = zoneNames.indexOf(play[i][1]);
                finalZone = zoneNames.indexOf(play[i][3]);     

                x1 = zonecenterx[initialZone]*windowWidth;
                y1 = zonecentery[initialZone]*windowWidth*.479;

                playerInit = playerInitials[playerNames.indexOf(play[i][0])];

                ellipse(CENTER);
                stroke(0);
                fill(100);
                ellipse(x1,y1,.037*windowWidth);
                textSize(.014*windowWidth);
                textAlign(CENTER,CENTER);
                noStroke();
                fill(0);
                text(playerInit,x1,y1);
                
                x2 = zonecenterx[finalZone]*windowWidth;
                y2 = zonecentery[finalZone]*windowWidth*.479;

                var u = createVector(x2-x1,y2-y1);
                u.normalize();
                u.setMag(.5*.037*windowWidth);
                var a = u.array();

                switch(play[i][2]) {
                    case("Pass"):
                        strokeWeight(2);
                        stroke(120,100,100);
                    break;

                    case("Dribble"):
                        strokeWeight(2);
                        stroke(240,100,100);
                    break;

                    /*
                    case("Shot"):
                        x2 = hoopx*windowWidth;
                        y2 = hoopy*windowWidth*.479;

                        strokeWeight(2);
                        stroke(0,100,100);
                        line(x1,y1,x2,y2);
                    break;
                    */
                }

                line(x1+a[0],y1+a[1],x2-a[0],y2-a[1]);

                head1 = createVector(x1-x2,y1-y2);
                head1.normalize();
                head1.setMag(.02*windowWidth);

                head2 = createVector(x1-x2,y1-y2);
                head2.normalize();
                head2.setMag(.02*windowWidth);

                head1.rotate(Math.PI/6);
                head2.rotate(11*Math.PI/6)

                head1Points = head1.array();
                head2Points = head2.array();

                line(x2-a[0],y2-a[1],x2-a[0]+head1Points[0],y2-a[1]+head1Points[1]);
                line(x2-a[0],y2-a[1],x2-a[0]+head2Points[0],y2-a[1]+head2Points[1]);
            }
        break;

        /*
        case("Shot"):
            append(play, eventArray);

            loadZone();

            ellipse(CENTER);
            stroke(0);
            fill(100);
            ellipse(zonecenterx[zoneNames.indexOf(eventArray[1])]*windowWidth,zonecentery[zoneNames.indexOf(eventArray[1])]*windowWidth*.479,.037*windowWidth);
            textSize(.014*windowWidth);
            textAlign(CENTER,CENTER);
            noStroke();
            fill(0);
            text(playerInitials[playerNames.indexOf(eventArray[0])],zonecenterx[zoneNames.indexOf(eventArray[1])]*windowWidth,zonecentery[zoneNames.indexOf(eventArray[1])]*windowWidth*.479);

            eventArray = [];

            for (var i = 0; i <play.length; i++) {
                initialZone = zoneNames.indexOf(play[i][1]);
                finalZone = zoneNames.indexOf(play[i][3]);   

                x1 = zonecenterx[initialZone]*windowWidth;
                y1 = zonecentery[initialZone]*windowWidth*.479;

                playerInit = playerInitials[playerNames.indexOf(play[i][0])];

                ellipse(CENTER);
                stroke(0);
                fill(100);
                ellipse(x1,y1,.037*windowWidth);
                textSize(.014*windowWidth);
                textAlign(CENTER,CENTER);
                noStroke();
                fill(0);
                text(playerInit,x1,y1);

                switch(play[i][2]) {
                    case("Pass"):
                        x2 = zonecenterx[finalZone]*windowWidth;
                        y2 = zonecentery[finalZone]*windowWidth*.479; 

                        var u = createVector(x2-x1,y2-y1);
                        u.normalize();
                        u.setMag(.5*.037*windowWidth);
                        var a = u.array();

                        strokeWeight(2);
                        stroke(120,100,100);
                    break;

                    case("Dribble"):
                        x2 = zonecenterx[finalZone]*windowWidth;
                        y2 = zonecentery[finalZone]*windowWidth*.479;

                        var u = createVector(x2-x1,y2-y1);
                        u.normalize();
                        u.setMag(.5*.037*windowWidth);
                        var a = u.array();

                        strokeWeight(2);
                        stroke(240,100,100);
                    break;

                    case("Shot"):
                        x2 = hoopx*windowWidth;
                        y2 = hoopy*windowWidth*.479;

                        var u = createVector(x2-x1,y2-y1);
                        u.normalize();
                        u.setMag(.5*.037*windowWidth);
                        var a = u.array();

                        strokeWeight(2);
                        stroke(0,100,100);
                        zoneSelected = 1;
                    break;
                }

                line(x1+a[0],y1+a[1],x2-a[0],y2-a[1]);
                
                head1 = createVector(x1-x2,y1-y2);
                head1.normalize();
                head1.setMag(.02*windowWidth);

                head2 = createVector(x1-x2,y1-y2);
                head2.normalize();
                head2.setMag(.02*windowWidth);

                head1.rotate(Math.PI/6);
                head2.rotate(11*Math.PI/6)

                head1Points = head1.array();
                head2Points = head2.array();

                line(x2-a[0],y2-a[1],x2-a[0]+head1Points[0],y2-a[1]+head1Points[1]);
                line(x2-a[0],y2-a[1],x2-a[0]+head2Points[0],y2-a[1]+head2Points[1]);
            }
        break;
        */
    }
}

function loadZone() {
    for (var i=0;i<26;i++) {
        noTint();
        image(zones[i],0,0,windowWidth,.479*windowWidth);
    }
    zoneSelected = 0;
    image(base,0,0,windowWidth,.479*windowWidth);
}

function colorZone() {
    if (zoneSelected == 0) {
        switch(true) {
        case (245*scale<mouseY && mouseY<311*scale && mouseX>278*scale && mouseX<5.70*mouseY-5.70*245*scale+278*scale && mouseX<432*scale && mouseX>7*mouseY-7*289*scale+278*scale):
        tint(100,100,100);
        image(zones[0],0,0,windowWidth,.479*windowWidth);
        zone = "1L";
        zoneSelected = 1;
        console.log(zone);
        break;
        case (245*scale<mouseY && mouseY<311*scale && mouseX<586*scale && mouseX>-5.70*mouseY+5.70*245*scale+586*scale && mouseX>432*scale && mouseX<-7*mouseY+7*289*scale+586*scale):
        tint(100,100,100);
        image(zones[13],0,0,windowWidth,.479*windowWidth);
        zone = "1R";
        zoneSelected = 1;
        console.log(zone);
        break;


        case (158*scale<mouseY && mouseY<289*scale && mouseX>-1.58*mouseY+1.58*158*scale+190*scale && mouseX<1.13*mouseY-1.13*158*scale+190*scale && mouseX>1.64*mouseY-1.64*196*scale+130*scale && mouseX<278*scale):
        tint(100,100,100);
        image(zones[1],0,0,windowWidth,.479*windowWidth);
        zone = "2L";
        zoneSelected = 1;
        console.log(zone);
        break;
        case (158*scale<mouseY && mouseY<289*scale && mouseX<1.58*mouseY-1.58*158*scale+674*scale && mouseX>-1.13*mouseY+1.13*158*scale+674*scale && mouseX<-1.64*mouseY+1.64*196*scale+734*scale && mouseX>586*scale):
        tint(100,100,100);
        image(zones[14],0,0,windowWidth,.479*windowWidth);
        zone = "2R";
        zoneSelected = 1;
        console.log(zone);
        break;


        case (89*scale<mouseY && mouseY<196*scale && mouseX>.5*mouseY-.5*89*scale+76*scale && mouseX<.52*mouseY-.52*89*scale+154*scale && mouseX<-1.58*mouseY+1.58*158*scale+190*scale):
        tint(100,100,100);
        image(zones[2],0,0,windowWidth,.479*windowWidth);
        zone = "3L";
        zoneSelected = 1;
        console.log(zone);
        break;
        case (89*scale<mouseY && mouseY<196*scale && mouseX<-.5*mouseY+.5*89*scale+788*scale && mouseX>-.52*mouseY+.52*89*scale+710*scale && mouseX>1.58*mouseY-1.58*158*scale+674*scale):
        tint(100,100,100);
        image(zones[15],0,0,windowWidth,.479*windowWidth);
        zone = "3R";
        zoneSelected = 1;
        console.log(zone);
        break;


        case (1*scale<mouseY && mouseY<89*scale && mouseX>76*scale && mouseX<.28*mouseY-.28*47*scale+140*scale && mouseX<141*scale):
        tint(100,100,100)
        image(zones[3],0,0,windowWidth,.479*windowWidth)
        zone = "4L";
        zoneSelected = 1;
        console.log(zone);
        break;
        case (1*scale<mouseY && mouseY<89*scale && mouseX<788*scale && mouseX>-.28*mouseY+.28*47*scale+724*scale && mouseX>723*scale):
        tint(100,100,100);
        image(zones[16],0,0,windowWidth,.479*windowWidth);
        zone = "4R";
        zoneSelected = 1;
        console.log(zone);
        break;


        case (203*scale<mouseY && mouseY<272*scale && mouseX>-1.79*mouseY+1.79*203*scale+330*scale && mouseX>3.71*mouseY-3.71*231*scale+280*scale && mouseX<432*scale):
        tint(100,100,100);
        image(zones[4],0,0,windowWidth,.479*windowWidth);
        zone = "5L";
        zoneSelected = 1;
        console.log(zone);
        break;
        case (203*scale<mouseY && mouseY<272*scale && mouseX<1.79*mouseY-1.79*203*scale+534*scale && mouseX<-3.71*mouseY+3.71*231*scale+584*scale && mouseX>432*scale):
        tint(100,100,100);
        image(zones[17],0,0,windowWidth,.479*windowWidth);
        zone = "5R";
        zoneSelected = 1;
        console.log(zone);
        break;


        case (124*scale<mouseY && mouseY<231*scale && mouseX>-1.5*mouseY+1.5*124*scale+240*scale && mouseX<1.14*mouseY-1.14*124*scale+240*scale && mouseX>1.17*mouseY-1.17*156*scale+192*scale && mouseX<-1.79*mouseY+1.79*203*scale+330*scale):
        tint(100,100,100);
        image(zones[5],0,0,windowWidth,.479*windowWidth);
        zone = "6L";
        zoneSelected = 1;
        console.log(zone);
        break;
        case (124*scale<mouseY && mouseY<231*scale && mouseX<1.5*mouseY-1.5*124*scale+624*scale && mouseX>-1.14*mouseY+1.14*124*scale+624*scale && mouseX<-1.17*mouseY+1.17*156*scale+672*scale && mouseX>1.79*mouseY-1.79*203*scale+534*scale):
        tint(100,100,100);
        image(zones[18],0,0,windowWidth,.479*windowWidth);
        zone = "6R";
        zoneSelected = 1;
        console.log(zone);
        break;


        case (64*scale<mouseY && mouseY<156*scale && mouseX>-2.5*mouseY+2.5*64*scale+216*scale && mouseX<.4*mouseY-.4*64*scale+216*scale && mouseX>.53*mouseY-.53*88*scale+156*scale && mouseX<-1.5*mouseY+1.5*124*scale+240*scale):
        tint(100,100,100);
        image(zones[6],0,0,windowWidth,.479*windowWidth);
        zone = "7L";
        zoneSelected = 1;
        console.log(zone);
        break;
        case (64*scale<mouseY && mouseY<156*scale && mouseX<2.5*mouseY-2.5*64*scale+648*scale && mouseX>-.4*mouseY+.4*64*scale+648*scale && mouseX<-.53*mouseY+.53*88*scale+708*scale && mouseX>1.5*mouseY-1.5*124*scale+624*scale):
        tint(100,100,100);
        image(zones[19],0,0,windowWidth,.479*windowWidth);
        zone = "7R";
        zoneSelected = 1;
        console.log(zone);
        break;


        case (1*scale<mouseY && mouseY<88*scale && mouseX>.13*mouseY-.13*1*scale+145*scale && mouseX<-2.5*mouseY+2.5*64*scale+216*scale && mouseX<.11*mouseY-.11*1*scale+209*scale):
        tint(100,100,100);
        image(zones[7],0,0,windowWidth,.479*windowWidth);
        zone = "8L";
        zoneSelected = 1;
        console.log(zone);
        break;
        case (1*scale<mouseY && mouseY<88*scale && mouseX<-.13*mouseY+.13*1*scale+719*scale && mouseX>2.5*mouseY-2.5*64*scale+648*scale && mouseX>.11*mouseY+.11*1*scale+655*scale):
        tint(100,100,100);
        image(zones[20],0,0,windowWidth,.479*windowWidth);
        zone = "8R";
        zoneSelected = 1;
        console.log(zone);
        break;


        case (136*scale<mouseY && mouseY<203*scale && 330*scale<mouseX && mouseX<432*scale):
        tint(100,100,100);
        image(zones[8],0,0,windowWidth,.479*windowWidth);
        zone = "9L";
        zoneSelected = 1;
        console.log(zone);
        break;
        case (136*scale<mouseY && mouseY<203*scale && 432*scale<mouseX && mouseX<534*scale):
        tint(100,100,100);
        image(zones[21],0,0,windowWidth,.479*windowWidth);
        zone = "9R";
        zoneSelected = 1;
        console.log(zone);
        break;


        case (97*scale<mouseY && mouseY<203*scale && mouseX>-1.48*mouseY+1.48*97*scale+284*scale && mouseX>1.09*mouseY-1.09*124*scale+244*scale && mouseX<1.18*mouseY-1.18*97*scale+284*scale && mouseX<330*scale):
        tint(100,100,100);
        image(zones[9],0,0,windowWidth,.479*windowWidth);
        zone = "10L";
        zoneSelected = 1;
        console.log(zone);
        break;
        case (97*scale<mouseY && mouseY<203*scale && mouseX<1.48*mouseY-1.48*97*scale+580*scale && mouseX<-1.09*mouseY+1.09*124*scale+620*scale && mouseX>-1.18*mouseY+1.18*97*scale+580*scale && mouseX>534*scale):
        tint(100,100,100);
        image(zones[22],0,0,windowWidth,.479*windowWidth);
        zone = "10R";
        zoneSelected = 1;
        console.log(zone);
        break;


        case (1*scale<mouseY && mouseY<124*scale && mouseX>.26*mouseY-.26*1*scale+212*scale && mouseX<.16*mouseY-.16*1*scale+269*scale && mouseX<-1.48*mouseY+1.48*97*scale+284*scale):
        tint(100,100,100);
        image(zones[10],0,0,windowWidth,.479*windowWidth);
        zone = "11L";
        zoneSelected = 1;
        console.log(zone);
        break;
        case (1*scale<mouseY && mouseY<124*scale && mouseX<-.26*mouseY+.26*1*scale+652*scale && mouseX>-.16*mouseY+.16*1*scale+595*scale && mouseX>1.48*mouseY-1.48*97*scale+580*scale):
        tint(100,100,100);
        image(zones[23],0,0,windowWidth,.479*windowWidth);
        zone = "11R";
        zoneSelected = 1;
        console.log(zone);
        break;


        case (1*scale<mouseY && mouseY<136*scale && 330*scale<mouseX && mouseX<432*scale):
        tint(100,100,100);
        image(zones[11],0,0,windowWidth,.479*windowWidth);
        image(base,0,0,windowWidth,.479*windowWidth);
        zone = "12L";
        zoneSelected = 1;
        console.log(zone);
        break;
        case (1*scale<mouseY && mouseY<136*scale && 432*scale<mouseX && mouseX<534*scale):
        tint(100,100,100);
        image(zones[24],0,0,windowWidth,.479*windowWidth);
        image(base,0,0,windowWidth,.479*windowWidth);
        zone = "12R";
        zoneSelected = 1;
        console.log(zone);
        break;

        case (1*scale<mouseY && mouseY<136*scale && mouseX>.16*mouseY-.16*1*scale+269*scale && mouseX>1.1*mouseY-1.1*94*scale+284*scale && mouseX<330*scale):
        tint(100,100,100);
        image(zones[12],0,0,windowWidth,.479*windowWidth);
        zone = "13L";
        zoneSelected = 1;
        console.log(zone);
        break;
        case (1*scale<mouseY && mouseY<136*scale && mouseX<-.16*mouseY+.16*1*scale+595*scale && mouseX<-1.1*mouseY+1.1*94*scale+580*scale && mouseX>534*scale):
        tint(100,100,100);
        image(zones[25],0,0,windowWidth,.479*windowWidth);
        zone = "13R";
        zoneSelected = 1;
        console.log(zone);
        break;
        }
    }
}


function selectBo() {
    player = "Bo";
    console.log(player);
}
function selectMeyer() {
    player = "Meyer";
    console.log(player);
}
function selectFinn() {
    player = "Finn";
    console.log(player);
}
function selectCJ() {
    player = "CJ";
    console.log(player);
}
function selectRiley() {
    player = "Riley";
    console.log(player);
}
function selectJP() {
    player = "JP";
    console.log(player);
}
function selectZachary() {
    player = "Zachary";
    console.log(player);
}
function selectCasey() {
    player = "Casey";
    console.log(player);
}
function selectMurray() {
    player = "Murray";
    console.log(player);
}
function selectJames() {
    player = "James";
    console.log(player);
}

function calcProbSuccess() {
    var probSuccess = 1;
    for (var i = 0; i<play.length; i++) {
        if (play[i][2] == "Shot") {
            probSuccess = probSuccess*shootingAccuracies[playerNames.indexOf(play[i][0])][zoneNames.indexOf(play[i][1])+1];
        }
        else if (play[i][2] == "Pass") {
            probSuccess = probSuccess*passingAccuracies[playerNames.indexOf(play[i][0])][zoneNames.indexOf(play[i][1])+1];
        }
    }
    console.log(probSuccess);
}

function weakestLink() {
    for (var i = 0; i<play.length; i++) {
        var prob;
        if (play[i][2] == "Shot") {
            prob = float(shootingAccuracies[playerNames.indexOf(play[i][0])][zoneNames.indexOf(play[i][1])+1]);
        }
        else if (play[i][2] == "Pass") {
            prob = float(passingAccuracies[playerNames.indexOf(play[i][0])][zoneNames.indexOf(play[i][1])+1]);
        }
        else {
            prob = 1;
        }
        probWeakestLink[i] = prob;
    }

    var indexProb = min(probWeakestLink);

    weakestEvent = play[probWeakestLink.indexOf(indexProb)];

    console.log(join(weakestEvent," "));
}

function alternativePlayer() {
    var column;
    if (weakestEvent[2] == "Shot") {
        column = table1.getColumn(weakestEvent[1]);
    }
    else if (weakestEvent[2] == "Pass") {
        column = table1.getColumn(weakestEvent[1]);
    }
    
    var index = column.indexOf(str(max(column)));
    var alternativePlayer = playerNames[index];
    console.log(alternativePlayer);
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


// 13 is enter, 49 is 1, 50 is 2, 51 is 3, 52 is 4, 53 is 5, 54 is 6, 55 is 7 (7 total possible results of an action)
//meyer = y, bo = b, casey = w, cj = c, finn = f, riley = r, murray = m, james = j, jp = p, zachary = z
//97 = a is preview

$(document).keypress(function(e) {

    if (e.which == 13) {
        switch(i) {
            case(0):
            addInitialData();
            i=1;
            break;

            case(1):
            addFinalData();
            i=0;
            break;
        }
    }

    else if (e.which == 120) {
        noTint();
        image(zones[zoneNames.indexOf(zone)],0,0,windowWidth,.479*windowWidth);
        zoneSelected = 0;
    }


    else if (e.which == 49) {
        action = "Shot";
        console.log(action);
    }
    else if (e.which == 50) {
        action = "Pass";
        console.log(action);
    }
    else if (e.which == 51) {
        action = "Dribble";
        console.log(action);
    }
    


    else if (e.which == 121) {
        selectMeyer();
    }
    else if (e.which == 98) {
        selectBo();
    }
    else if (e.which == 119) {
        selectCasey();
    }
    else if (e.which == 99) {
        selectCJ();
    }
    else if (e.which == 102) {
        selectFinn();
    }
    else if (e.which == 114) {
        selectRiley();
    }
    else if (e.which == 109) {
        selectMurray();
    }
    else if (e.which == 106) {
        selectJames();
    }
    else if (e.which == 112) {
        selectJP();
    }
    else if (e.which == 122) {
        selectZachary();
    }
    else if (e.which == 97) {
        console.log(player + " " + zone + " " + action + rplayer + rzone);
    }

});