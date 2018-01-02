var player = 'Meyer';
var mode = 'Drill';

var base;

var zones = [];
var zoneNames = ["1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R"];

var table;

var drAttempt = [];
var scAttempt = [];
var gAttempt = [];

var drSMade = [];
var drSMiss = [];
var scSMade = [];
var scSMiss = [];
var gSMade = [];
var gSMiss = [];

var drFTAccuracy;
var scFTAccuracy;
var gFTAccuracy;

var drshotAccuracy = [];
var scshotAccuracy = [];
var gshotAccuracy = [];

var dr3Accuracy;
var sc3Accuracy;
var g3Accuracy;

var dr2Accuracy;
var sc2Accuracy;
var g2Accuracy;

var drFreqAdjusted = [];
var scFreqAdjusted = [];
var gFreqAdjusted = [];


function preload() {
  
  base = loadImage("base2.png");
  
  for (var i = 0; i < 26; i++) {
  	zones[i]=loadImage(zoneNames[i]+".png");
  }
  

  table = loadTable("Meyer.csv","csv", "header");

}

function setup() {
  createCanvas(windowWidth,.479*windowWidth);
  background(255);
  colorMode(HSB,360,100,80);

  table.removeColumn("Zone");

  var a = table.getRow(0);
  var b = table.getRow(1);
  var c = table.getRow(2);
  var d = table.getRow(3);
  var e = table.getRow(4);
  var f = table.getRow(5);

  for (var r = 0; r < 26; r++) {
    drSMade[r] = parseInt(a.getString(r));
    drSMiss[r] = parseInt(b.getString(r));
    scSMade[r] = parseInt(c.getString(r));
    scSMiss[r] = parseInt(d.getString(r));
    gSMade[r] = parseInt(e.getString(r));
    gSMiss[r] = parseInt(f.getString(r));
  }  

  getFreeThrowAccuracy ();

  getShootingAccuracy();

  getShootingFrequency();


  var zonecenterx = [0.4042, 0.2463, 0.1516, 0.1274, 0.4295, 0.2926, 0.2326, 0.2063, 0.4358, 0.3368, 0.2821, 0.4358, 0.3474, 0.5958, 0.7537, 0.8484, 0.8726, 0.5705, 0.7074, 0.7674, 0.7937, 0.5642, 0.6632, 0.7179, 0.5642];
  //width: 950, height: 736
  //var centerx = [384,234,144,121,408,278,221,196,414,320,268,414,330,566,716,806,829,542,672,729,754,536,630,682,536,620];
  //var centery = [310,244,146,50,256,200,117,45,186,158,60,78,60,310,244,146,50,256,200,117,45,186,158,60,78,60];
  var zonecentery = [0.6813, 0.5363, 0.3209, 0.1099, 0.5626, 0.4396, 0.2571, 0.0989, 0.4088, 0.3473, 0.1319, 0.1714, 0.1319, 0.6813, 0.5363, 0.3209, 0.1099, 0.5626, 0.4396, 0.2571, 0.0989, 0.4088, 0.3473, 0.1319, 0.1714];

  var playerScale = [.180,.831];
  var accuracy3Scale = [.728,.721];
  var accuracy2Scale = [.728,.797];
  var accuracyFTScale = [.728,.873];

  textSize(.03*windowWidth);
  stroke(0);
  fill(0);
  text(player+' - '+mode, playerScale[0]*windowWidth, playerScale[1]*.479*windowWidth);

  
  textSize(.02*windowWidth);
  switch(mode) {
  	case 'Drill': 
  		text('3pt: '+dr3Accuracy+' %', accuracy3Scale[0]*windowWidth, accuracy3Scale[1]*.479*windowWidth);
  		text('2pt: '+dr2Accuracy+' %', accuracy2Scale[0]*windowWidth, accuracy2Scale[1]*.479*windowWidth);
  		text('FT: '+drFTAccuracy+' %', accuracyFTScale[0]*windowWidth, accuracyFTScale[1]*.479*windowWidth);
  		for (var i=0;i<25;i++) {
    		tint(drshotAccuracy[i],100,80);
    		push();
    		translate((windowWidth*zonecenterx[i]) - (windowWidth*zonecenterx[i]*drFreqAdjusted[i]),(.479*windowWidth*zonecentery[i]) - (.479*windowWidth*zonecentery[i]*drFreqAdjusted[i]));
    		scale(drFreqAdjusted[i]);
    		image(zones[i],0,0,windowWidth,.479*windowWidth);
    		pop();
  		}
  		break;

  	case 'Scrimmage':
  		text('3pt: '+sc3Accuracy+' %', accuracy3Scale[0]*windowWidth, accuracy3Scale[1]*.479*windowWidth);
  		text('2pt: '+sc2Accuracy+' %', accuracy2Scale[0]*windowWidth, accuracy2Scale[1]*.479*windowWidth);
  		text('FT: '+scFTAccuracy+' %', accuracyFTScale[0]*windowWidth, accuracyFTScale[1]*.479*windowWidth);
  		for (var i=0;i<25;i++) {
    		tint(scshotAccuracy[i],100,80);
    		push();
    		translate((windowWidth*zonecenterx[i]) - (windowWidth*zonecenterx[i]*scFreqAdjusted[i]),(.479*windowWidth*zonecentery[i]) - (.479*windowWidth*zonecentery[i]*scFreqAdjusted[i]));
    		scale(scFreqAdjusted[i]);
    		image(zones[i],0,0,windowWidth,.479*windowWidth);
    		pop();
  		}
  		break;

  	case 'Game':
  		text('3pt: '+g3Accuracy+' %', accuracy3Scale[0]*windowWidth, accuracy3Scale[1]*.479*windowWidth);
  		text('2pt: '+g2Accuracy+' %', accuracy2Scale[0]*windowWidth, accuracy2Scale[1]*.479*windowWidth);
  		text('FT: '+gFTAccuracy+' %', accuracyFTScale[0]*windowWidth, accuracyFTScale[1]*.479*windowWidth);
  		for (var i=0;i<25;i++) {
    		tint(gshotAccuracy[i],100,80);
    		push();
    		translate((windowWidth*zonecenterx[i]) - (windowWidth*zonecenterx[i]*gFreqAdjusted[i]),(.479*windowWidth*zonecentery[i]) - (.479*windowWidth*zonecentery[i]*gFreqAdjusted[i]));
    		scale(gFreqAdjusted[i]);
    		image(zones[i],0,0,windowWidth,.479*windowWidth);
    		pop();
  		}
  		break;	
  }
  

  noTint();
  image(base,0,0,windowWidth,.479*windowWidth);
  //createImage();

  saveCanvas(player+"_"+mode);
  
}

/*
function draw() {
  console.log(mouseX,mouseY);
}
*/

function getFreeThrowAccuracy() {
  var g = table.getColumn("FT");
  var freeThrow = [];

  for(var i = 0; i < 6; i++) {
  	freeThrow[i] = parseInt(g[i]);
  } 



  if (freeThrow[0] == 0) {
  	drFTAccuracy = 0;
  }
  else {
  	drFTAccuracy = Math.round(100*freeThrow[0]/(freeThrow[0]+freeThrow[1]));
  }

  if(freeThrow[2] == 0) {
  	scFTAccuracy = 0;
  }
  else {
  	scFTAccuracy = Math.round(100*freeThrow[2]/(freeThrow[2]+freeThrow[3]));
  }

  if(freeThrow[4] == 0) {
  	gFTAccuracy = 0;
  }
  else {
  	gFTAccuracy = Math.round(100*freeThrow[4]/(freeThrow[4]+freeThrow[5]));
  }

  table.removeColumn("FT");
}

function getShootingAccuracy() {

  for (var r = 0; r < 26; r++) {
    drAttempt[r] = drSMade[r]+drSMiss[r];
    scAttempt[r] = scSMade[r]+scSMiss[r];
    gAttempt[r] = gSMade[r]+gSMiss[r];
    

    if(drSMade[r]==0){
      append(drshotAccuracy,0)
    }
    else{
    append(drshotAccuracy,Math.round(100*drSMade[r]/drAttempt[r]));
    }
    
    if(scSMade[r]==0){
      append(scshotAccuracy,0)
    }
    else{
    append(scshotAccuracy,Math.round(100*scSMade[r]/scAttempt[r]));
    }
    
    if(gSMade[r]==0){
      append(gshotAccuracy,0)
    }
    else{
    append(gshotAccuracy,Math.round(100*gSMade[r]/gAttempt[r]));
    }
  }
  

  var dr3Made = 0;
  var dr3Attempt = 0;
  var sc3Made = 0;
  var sc3Attempt = 0;
  var g3Made = 0;
  var g3Attempt = 0;

  for (var i = 0, j = 13; i < 4; i++,j++) {
  	dr3Made = dr3Made + drSMade[i] + drSMade[j];
  	dr3Attempt = dr3Attempt + drAttempt[i] + drAttempt[j]; 
  	sc3Made = sc3Made + scSMade[i] + scSMade[j];
  	sc3Attempt = sc3Attempt + scAttempt[i] + scAttempt[j]; 
  	g3Made = g3Made + gSMade[i] + gSMade[j];
  	g3Attempt = g3Attempt + gAttempt[i] + gAttempt[j]; 
  }

  dr3Accuracy = Math.round(100*dr3Made/dr3Attempt);
  sc3Accuracy = Math.round(100*sc3Made/sc3Attempt);
  g3Accuracy = Math.round(100*g3Made/g3Attempt);


  var dr2Made = 0;
  var dr2Attempt = 0;
  var sc2Made = 0;
  var sc2Attempt = 0;
  var g2Made = 0;
  var g2Attempt = 0;

  for (var i = 4, j = 17; i < 13; i++,j++) {
  	dr2Made = dr2Made + drSMade[i] + drSMade[j];
  	dr2Attempt = dr2Attempt + drAttempt[i] + drAttempt[j]; 
  	sc2Made = sc2Made + scSMade[i] + scSMade[j];
  	sc2Attempt = sc2Attempt + scAttempt[i] + scAttempt[j]; 
  	g2Made = g2Made + gSMade[i] + gSMade[j];
  	g2Attempt = g2Attempt + gAttempt[i] + gAttempt[j]; 
  }

  dr2Accuracy = Math.round(100*dr2Made/dr2Attempt);
  sc2Accuracy = Math.round(100*sc2Made/sc2Attempt);
  g2Accuracy = Math.round(100*g2Made/g2Attempt);
}

function getShootingFrequency() {
  var drAttemptTotal = 0;
  var scAttemptTotal = 0;
  var gAttemptTotal = 0;
  
  
  for (var i = 0; i < 26; i++) {
    var sum = drAttempt[i];
    var sum1 = scAttempt[i];
    var sum2 = gAttempt[i];

    drAttemptTotal = drAttemptTotal + sum;
    scAttemptTotal = scAttemptTotal + sum1;
    gAttemptTotal = gAttemptTotal + sum2;

  }

  var drFrequency = [];
  var scFrequency = [];
  var gFrequency = [];

  for (var i=0;i<26;i++) {
    drFrequency[i] = Math.round(1000*drAttempt[i]/drAttemptTotal)/1000;
    scFrequency[i] = Math.round(1000*scAttempt[i]/scAttemptTotal)/1000;
    gFrequency[i] = Math.round(1000*gAttempt[i]/gAttemptTotal)/1000; 
  } 
  
  for (var i=0;i<25;i++) {
    if(drFrequency[i]==0) {
      drFreqAdjusted[i]=0;
    }
    else {
    drFreqAdjusted[i] = Math.round(100*map(drFrequency[i],min(drFrequency),max(drFrequency),.30,.99))/100;
    }
    
    if(scFrequency[i]==0) {
      scFreqAdjusted[i]=0;
    }
    else {
    scFreqAdjusted[i] = Math.round(100*map(scFrequency[i],min(scFrequency),max(scFrequency),.30,.99))/100;
    }

    if(gFrequency[i]==0) {
      gFreqAdjusted[i]=0;
    }

    else {
    gFreqAdjusted[i] = Math.round(100*map(gFrequency[i],min(gFrequency),max(gFrequency),.30,.99))/100;
    }
  } 	
}