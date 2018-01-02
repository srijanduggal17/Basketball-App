/*
This code allows us to enter data more easily than clicking through the excel workbook.
We have created different hotkeys to stand for different players, game modes, and actions, so data entry is much faster.
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This is where we declared the different variables to use

var zones = []; 
var zoneNames = ["1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R"]; 
var scale;

var gamemode;
var player;
var zone;
var action;

var dataA;
var dataB;
var dataC;
var dataD;
var dataE;
var dataF;
var dataG;
var dataH;
var dataI;
var dataJ;

var table;

var columnTitles = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
var rowTitles = ["","Drill Shot Made","Drill Shot Missed","Scrimmage Shot Made","Scrimmage Shot Missed","Scrimmage Pass Made","Scrimmage Pass Missed","Scrimmage Advantage Pass","Scrimmage Assist","Scrimmage Turnover","Game Shot Made","Game Shot Missed","Game Pass Made","Game Pass Missed","Game Advantage Pass","Game Assist","Game Turnover"];


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This is where we have our main code

function preload() {
    base = loadImage("base.png");
    for (var i = 0; i < 26; i++) {
        zones[i]=loadImage(zoneNames[i]+".png");
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
    
    createDataA();
    createDataB();
    createDataC();
    createDataD();
    createDataE();
    createDataF();
    createDataG();
    createDataH();
    createDataI();
    createDataJ();    
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This is where we created the data structures for each player


function createDataA() {
    var aTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var aDrillShotMade = ["Shot Made"];
    var aDrillShotMissed = ["Shot Missed"];
    var aScrimmageShotMade = ["Shot Made"];
    var aScrimmageShotMissed = ["Shot Missed"];
    var aScrimmagePassMade = ["Pass Made"];
    var aScrimmagePassMissed = ["Pass Missed"];
    var aScrimmageAdvantagePass = ["Advantage Pass"];
    var aScrimmageAssist = ["Assist"];
    var aScrimmageTurnover = ["Turnover"];   
    var aGameShotMade = ["Shot Made"];
    var aGameShotMissed = ["Shot Missed"];
    var aGamePassMade = ["Pass Made"];
    var aGamePassMissed = ["Pass Missed"];
    var aGameAdvantagePass = ["Advantage Pass"];
    var aGameAssist = ["Assist"];
    var aGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        aDrillShotMade[i] = 0;
        aDrillShotMissed[i] = 0;
        aScrimmageShotMade[i] = 0;
        aScrimmageShotMissed[i] = 0;
        aScrimmagePassMade[i] = 0;
        aScrimmagePassMissed[i] = 0;
        aScrimmageAdvantagePass[i] = 0;
        aScrimmageAssist[i] = 0;
        aScrimmageTurnover[i] = 0;
        aGameShotMade[i] = 0;
        aGameShotMissed[i] = 0;
        aGamePassMade[i] = 0;
        aGamePassMissed[i] = 0;
        aGameAdvantagePass[i] = 0;
        aGameAssist[i] = 0;
        aGameTurnover[i] = 0;
    }
    dataA = [aTitle,aDrillShotMade,aDrillShotMissed,aScrimmageShotMade,aScrimmageShotMissed,aScrimmagePassMade,aScrimmagePassMissed,aScrimmageAdvantagePass,aScrimmageAssist,aScrimmageTurnover,aGameShotMade, aGameShotMissed,aGamePassMade,aGamePassMissed,aGameAdvantagePass,aGameAssist,aGameTurnover];
}
function createDataB() {
    var bTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var bDrillShotMade = ["Shot Made"];
    var bDrillShotMissed = ["Shot Missed"];
    var bScrimmageShotMade = ["Shot Made"];
    var bScrimmageShotMissed = ["Shot Missed"];
    var bScrimmagePassMade = ["Pass Made"];
    var bScrimmagePassMissed = ["Pass Missed"];
    var bScrimmageAdvantagePass = ["Advantage Pass"];
    var bScrimmageAssist = ["Assist"];
    var bScrimmageTurnover = ["Turnover"];   
    var bGameShotMade = ["Shot Made"];
    var bGameShotMissed = ["Shot Missed"];
    var bGamePassMade = ["Pass Made"];
    var bGamePassMissed = ["Pass Missed"];
    var bGameAdvantagePass = ["Advantage Pass"];
    var bGameAssist = ["Assist"];
    var bGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        bDrillShotMade[i] = 0;
        bDrillShotMissed[i] = 0;
        bScrimmageShotMade[i] = 0;
        bScrimmageShotMissed[i] = 0;
        bScrimmagePassMade[i] = 0;
        bScrimmagePassMissed[i] = 0;
        bScrimmageAdvantagePass[i] = 0;
        bScrimmageAssist[i] = 0;
        bScrimmageTurnover[i] = 0;
        bGameShotMade[i] = 0;
        bGameShotMissed[i] = 0;
        bGamePassMade[i] = 0;
        bGamePassMissed[i] = 0;
        bGameAdvantagePass[i] = 0;
        bGameAssist[i] = 0;
        bGameTurnover[i] = 0;
    }
    dataB = [bTitle,bDrillShotMade,bDrillShotMissed,bScrimmageShotMade,bScrimmageShotMissed,bScrimmagePassMade,bScrimmagePassMissed,bScrimmageAdvantagePass,bScrimmageAssist,bScrimmageTurnover,bGameShotMade, bGameShotMissed,bGamePassMade,bGamePassMissed,bGameAdvantagePass,bGameAssist,bGameTurnover];
}
function createDataC() {
    var cTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var cDrillShotMade = ["Shot Made"];
    var cDrillShotMissed = ["Shot Missed"];
    var cScrimmageShotMade = ["Shot Made"];
    var cScrimmageShotMissed = ["Shot Missed"];
    var cScrimmagePassMade = ["Pass Made"];
    var cScrimmagePassMissed = ["Pass Missed"];
    var cScrimmageAdvantagePass = ["Advantage Pass"];
    var cScrimmageAssist = ["Assist"];
    var cScrimmageTurnover = ["Turnover"];   
    var cGameShotMade = ["Shot Made"];
    var cGameShotMissed = ["Shot Missed"];
    var cGamePassMade = ["Pass Made"];
    var cGamePassMissed = ["Pass Missed"];
    var cGameAdvantagePass = ["Advantage Pass"];
    var cGameAssist = ["Assist"];
    var cGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        cDrillShotMade[i] = 0;
        cDrillShotMissed[i] = 0;
        cScrimmageShotMade[i] = 0;
        cScrimmageShotMissed[i] = 0;
        cScrimmagePassMade[i] = 0;
        cScrimmagePassMissed[i] = 0;
        cScrimmageAdvantagePass[i] = 0;
        cScrimmageAssist[i] = 0;
        cScrimmageTurnover[i] = 0;
        cGameShotMade[i] = 0;
        cGameShotMissed[i] = 0;
        cGamePassMade[i] = 0;
        cGamePassMissed[i] = 0;
        cGameAdvantagePass[i] = 0;
        cGameAssist[i] = 0;
        cGameTurnover[i] = 0;
    }
    dataC = [cTitle,cDrillShotMade,cDrillShotMissed,cScrimmageShotMade,cScrimmageShotMissed,cScrimmagePassMade,cScrimmagePassMissed,cScrimmageAdvantagePass,cScrimmageAssist,cScrimmageTurnover,cGameShotMade, cGameShotMissed,cGamePassMade,cGamePassMissed,cGameAdvantagePass,cGameAssist,cGameTurnover];
}
function createDataD() {
    var dTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var dDrillShotMade = ["Shot Made"];
    var dDrillShotMissed = ["Shot Missed"];
    var dScrimmageShotMade = ["Shot Made"];
    var dScrimmageShotMissed = ["Shot Missed"];
    var dScrimmagePassMade = ["Pass Made"];
    var dScrimmagePassMissed = ["Pass Missed"];
    var dScrimmageAdvantagePass = ["Advantage Pass"];
    var dScrimmageAssist = ["Assist"];
    var dScrimmageTurnover = ["Turnover"];   
    var dGameShotMade = ["Shot Made"];
    var dGameShotMissed = ["Shot Missed"];
    var dGamePassMade = ["Pass Made"];
    var dGamePassMissed = ["Pass Missed"];
    var dGameAdvantagePass = ["Advantage Pass"];
    var dGameAssist = ["Assist"];
    var dGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        dDrillShotMade[i] = 0;
        dDrillShotMissed[i] = 0;
        dScrimmageShotMade[i] = 0;
        dScrimmageShotMissed[i] = 0;
        dScrimmagePassMade[i] = 0;
        dScrimmagePassMissed[i] = 0;
        dScrimmageAdvantagePass[i] = 0;
        dScrimmageAssist[i] = 0;
        dScrimmageTurnover[i] = 0;
        dGameShotMade[i] = 0;
        dGameShotMissed[i] = 0;
        dGamePassMade[i] = 0;
        dGamePassMissed[i] = 0;
        dGameAdvantagePass[i] = 0;
        dGameAssist[i] = 0;
        dGameTurnover[i] = 0;
    }
    dataD = [dTitle,dDrillShotMade,dDrillShotMissed,dScrimmageShotMade,dScrimmageShotMissed,dScrimmagePassMade,dScrimmagePassMissed,dScrimmageAdvantagePass,dScrimmageAssist,dScrimmageTurnover,dGameShotMade,dGameShotMissed,dGamePassMade,dGamePassMissed,dGameAdvantagePass,dGameAssist,dGameTurnover];
}
function createDataE() {
    var eTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var eDrillShotMade = ["Shot Made"];
    var eDrillShotMissed = ["Shot Missed"];
    var eScrimmageShotMade = ["Shot Made"];
    var eScrimmageShotMissed = ["Shot Missed"];
    var eScrimmagePassMade = ["Pass Made"];
    var eScrimmagePassMissed = ["Pass Missed"];
    var eScrimmageAdvantagePass = ["Advantage Pass"];
    var eScrimmageAssist = ["Assist"];
    var eScrimmageTurnover = ["Turnover"];   
    var eGameShotMade = ["Shot Made"];
    var eGameShotMissed = ["Shot Missed"];
    var eGamePassMade = ["Pass Made"];
    var eGamePassMissed = ["Pass Missed"];
    var eGameAdvantagePass = ["Advantage Pass"];
    var eGameAssist = ["Assist"];
    var eGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        eDrillShotMade[i] = 0;
        eDrillShotMissed[i] = 0;
        eScrimmageShotMade[i] = 0;
        eScrimmageShotMissed[i] = 0;
        eScrimmagePassMade[i] = 0;
        eScrimmagePassMissed[i] = 0;
        eScrimmageAdvantagePass[i] = 0;
        eScrimmageAssist[i] = 0;
        eScrimmageTurnover[i] = 0;
        eGameShotMade[i] = 0;
        eGameShotMissed[i] = 0;
        eGamePassMade[i] = 0;
        eGamePassMissed[i] = 0;
        eGameAdvantagePass[i] = 0;
        eGameAssist[i] = 0;
        eGameTurnover[i] = 0;
    }
    dataE = [eTitle,eDrillShotMade,eDrillShotMissed,eScrimmageShotMade,eScrimmageShotMissed,eScrimmagePassMade,eScrimmagePassMissed,eScrimmageAdvantagePass,eScrimmageAssist,eScrimmageTurnover,eGameShotMade, eGameShotMissed,eGamePassMade,eGamePassMissed,eGameAdvantagePass,eGameAssist,eGameTurnover];
}
function createDataF() {
    var fTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var fDrillShotMade = ["Shot Made"];
    var fDrillShotMissed = ["Shot Missed"];
    var fScrimmageShotMade = ["Shot Made"];
    var fScrimmageShotMissed = ["Shot Missed"];
    var fScrimmagePassMade = ["Pass Made"];
    var fScrimmagePassMissed = ["Pass Missed"];
    var fScrimmageAdvantagePass = ["Advantage Pass"];
    var fScrimmageAssist = ["Assist"];
    var fScrimmageTurnover = ["Turnover"];   
    var fGameShotMade = ["Shot Made"];
    var fGameShotMissed = ["Shot Missed"];
    var fGamePassMade = ["Pass Made"];
    var fGamePassMissed = ["Pass Missed"];
    var fGameAdvantagePass = ["Advantage Pass"];
    var fGameAssist = ["Assist"];
    var fGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        fDrillShotMade[i] = 0;
        fDrillShotMissed[i] = 0;
        fScrimmageShotMade[i] = 0;
        fScrimmageShotMissed[i] = 0;
        fScrimmagePassMade[i] = 0;
        fScrimmagePassMissed[i] = 0;
        fScrimmageAdvantagePass[i] = 0;
        fScrimmageAssist[i] = 0;
        fScrimmageTurnover[i] = 0;
        fGameShotMade[i] = 0;
        fGameShotMissed[i] = 0;
        fGamePassMade[i] = 0;
        fGamePassMissed[i] = 0;
        fGameAdvantagePass[i] = 0;
        fGameAssist[i] = 0;
        fGameTurnover[i] = 0;
    }
    dataF = [fTitle,fDrillShotMade,fDrillShotMissed,fScrimmageShotMade,fScrimmageShotMissed,fScrimmagePassMade,fScrimmagePassMissed,fScrimmageAdvantagePass,fScrimmageAssist,fScrimmageTurnover,fGameShotMade, fGameShotMissed,fGamePassMade,fGamePassMissed,fGameAdvantagePass,fGameAssist,fGameTurnover];
}
function createDataG() {
    var gTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var gDrillShotMade = ["Shot Made"];
    var gDrillShotMissed = ["Shot Missed"];
    var gScrimmageShotMade = ["Shot Made"];
    var gScrimmageShotMissed = ["Shot Missed"];
    var gScrimmagePassMade = ["Pass Made"];
    var gScrimmagePassMissed = ["Pass Missed"];
    var gScrimmageAdvantagePass = ["Advantage Pass"];
    var gScrimmageAssist = ["Assist"];
    var gScrimmageTurnover = ["Turnover"];   
    var gGameShotMade = ["Shot Made"];
    var gGameShotMissed = ["Shot Missed"];
    var gGamePassMade = ["Pass Made"];
    var gGamePassMissed = ["Pass Missed"];
    var gGameAdvantagePass = ["Advantage Pass"];
    var gGameAssist = ["Assist"];
    var gGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        gDrillShotMade[i] = 0;
        gDrillShotMissed[i] = 0;
        gScrimmageShotMade[i] = 0;
        gScrimmageShotMissed[i] = 0;
        gScrimmagePassMade[i] = 0;
        gScrimmagePassMissed[i] = 0;
        gScrimmageAdvantagePass[i] = 0;
        gScrimmageAssist[i] = 0;
        gScrimmageTurnover[i] = 0;
        gGameShotMade[i] = 0;
        gGameShotMissed[i] = 0;
        gGamePassMade[i] = 0;
        gGamePassMissed[i] = 0;
        gGameAdvantagePass[i] = 0;
        gGameAssist[i] = 0;
        gGameTurnover[i] = 0;
    }
    dataG = [gTitle,gDrillShotMade,gDrillShotMissed,gScrimmageShotMade,gScrimmageShotMissed,gScrimmagePassMade,gScrimmagePassMissed,gScrimmageAdvantagePass,gScrimmageAssist,gScrimmageTurnover,gGameShotMade,gGameShotMissed,gGamePassMade,gGamePassMissed,gGameAdvantagePass,gGameAssist,gGameTurnover];
}
function createDataH() {
    var hTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var hDrillShotMade = ["Shot Made"];
    var hDrillShotMissed = ["Shot Missed"];
    var hScrimmageShotMade = ["Shot Made"];
    var hScrimmageShotMissed = ["Shot Missed"];
    var hScrimmagePassMade = ["Pass Made"];
    var hScrimmagePassMissed = ["Pass Missed"];
    var hScrimmageAdvantagePass = ["Advantage Pass"];
    var hScrimmageAssist = ["Assist"];
    var hScrimmageTurnover = ["Turnover"];   
    var hGameShotMade = ["Shot Made"];
    var hGameShotMissed = ["Shot Missed"];
    var hGamePassMade = ["Pass Made"];
    var hGamePassMissed = ["Pass Missed"];
    var hGameAdvantagePass = ["Advantage Pass"];
    var hGameAssist = ["Assist"];
    var hGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        hDrillShotMade[i] = 0;
        hDrillShotMissed[i] = 0;
        hScrimmageShotMade[i] = 0;
        hScrimmageShotMissed[i] = 0;
        hScrimmagePassMade[i] = 0;
        hScrimmagePassMissed[i] = 0;
        hScrimmageAdvantagePass[i] = 0;
        hScrimmageAssist[i] = 0;
        hScrimmageTurnover[i] = 0;
        hGameShotMade[i] = 0;
        hGameShotMissed[i] = 0;
        hGamePassMade[i] = 0;
        hGamePassMissed[i] = 0;
        hGameAdvantagePass[i] = 0;
        hGameAssist[i] = 0;
        hGameTurnover[i] = 0;
    }
    dataH = [hTitle,hDrillShotMade,hDrillShotMissed,hScrimmageShotMade,hScrimmageShotMissed,hScrimmagePassMade,hScrimmagePassMissed,hScrimmageAdvantagePass,hScrimmageAssist,hScrimmageTurnover,hGameShotMade, hGameShotMissed,hGamePassMade,hGamePassMissed,hGameAdvantagePass,hGameAssist,hGameTurnover];
}
function createDataI() {
    var iTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var iDrillShotMade = ["Shot Made"];
    var iDrillShotMissed = ["Shot Missed"];
    var iScrimmageShotMade = ["Shot Made"];
    var iScrimmageShotMissed = ["Shot Missed"];
    var iScrimmagePassMade = ["Pass Made"];
    var iScrimmagePassMissed = ["Pass Missed"];
    var iScrimmageAdvantagePass = ["Advantage Pass"];
    var iScrimmageAssist = ["Assist"];
    var iScrimmageTurnover = ["Turnover"];   
    var iGameShotMade = ["Shot Made"];
    var iGameShotMissed = ["Shot Missed"];
    var iGamePassMade = ["Pass Made"];
    var iGamePassMissed = ["Pass Missed"];
    var iGameAdvantagePass = ["Advantage Pass"];
    var iGameAssist = ["Assist"];
    var iGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        iDrillShotMade[i] = 0;
        iDrillShotMissed[i] = 0;
        iScrimmageShotMade[i] = 0;
        iScrimmageShotMissed[i] = 0;
        iScrimmagePassMade[i] = 0;
        iScrimmagePassMissed[i] = 0;
        iScrimmageAdvantagePass[i] = 0;
        iScrimmageAssist[i] = 0;
        iScrimmageTurnover[i] = 0;
        iGameShotMade[i] = 0;
        iGameShotMissed[i] = 0;
        iGamePassMade[i] = 0;
        iGamePassMissed[i] = 0;
        iGameAdvantagePass[i] = 0;
        iGameAssist[i] = 0;
        iGameTurnover[i] = 0;
    }
    dataI = [iTitle,iDrillShotMade,iDrillShotMissed,iScrimmageShotMade,iScrimmageShotMissed,iScrimmagePassMade,iScrimmagePassMissed,iScrimmageAdvantagePass,iScrimmageAssist,iScrimmageTurnover,iGameShotMade,iGameShotMissed,iGamePassMade,iGamePassMissed,iGameAdvantagePass,iGameAssist,iGameTurnover];
}
function createDataJ() {
    var jTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var jDrillShotMade = ["Shot Made"];
    var jDrillShotMissed = ["Shot Missed"];
    var jScrimmageShotMade = ["Shot Made"];
    var jScrimmageShotMissed = ["Shot Missed"];
    var jScrimmagePassMade = ["Pass Made"];
    var jScrimmagePassMissed = ["Pass Missed"];
    var jScrimmageAdvantagePass = ["Advantage Pass"];
    var jScrimmageAssist = ["Assist"];
    var jScrimmageTurnover = ["Turnover"];   
    var jGameShotMade = ["Shot Made"];
    var jGameShotMissed = ["Shot Missed"];
    var jGamePassMade = ["Pass Made"];
    var jGamePassMissed = ["Pass Missed"];
    var jGameAdvantagePass = ["Advantage Pass"];
    var jGameAssist = ["Assist"];
    var jGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        jDrillShotMade[i] = 0;
        jDrillShotMissed[i] = 0;
        jScrimmageShotMade[i] = 0;
        jScrimmageShotMissed[i] = 0;
        jScrimmagePassMade[i] = 0;
        jScrimmagePassMissed[i] = 0;
        jScrimmageAdvantagePass[i] = 0;
        jScrimmageAssist[i] = 0;
        jScrimmageTurnover[i] = 0;
        jGameShotMade[i] = 0;
        jGameShotMissed[i] = 0;
        jGamePassMade[i] = 0;
        jGamePassMissed[i] = 0;
        jGameAdvantagePass[i] = 0;
        jGameAssist[i] = 0;
        jGameTurnover[i] = 0;
    }
    dataJ = [jTitle,jDrillShotMade,jDrillShotMissed,jScrimmageShotMade,jScrimmageShotMissed,jScrimmagePassMade,jScrimmagePassMissed,jScrimmageAdvantagePass,jScrimmageAssist,jScrimmageTurnover,jGameShotMade, jGameShotMissed,jGamePassMade,jGamePassMissed,jGameAdvantagePass,jGameAssist,jGameTurnover];
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This is where we created the functions to change the game modes and players, as well as the function to add a data entry to a player's file.

function addData() {
    switch(player) {
        case("A"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataA[row][column] = dataA[row][column] + 1;
            break;  
        case("B"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataB[row][column] = dataB[row][column] + 1;
            break;  
        case("C"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataC[row][column] = dataC[row][column] + 1;
            break;
        case("D"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataD[row][column] = dataD[row][column] + 1;
            break;
        case("E"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataE[row][column] = dataE[row][column] + 1;
            break;
        case("F"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataF[row][column] = dataF[row][column] + 1;
            break;
        case("G"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataG[row][column] = dataG[row][column] + 1;
            break;
        case("H"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataH[row][column] = dataH[row][column] + 1;
            break;
        case("I"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataI[row][column] = dataI[row][column] + 1;
            break;
        case("J"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataJ[row][column] = dataJ[row][column] + 1;
            break;
        
    }
    console.log(player + " " + zone + " " + action + " (" + gamemode + ")");
    loadZone();
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


function selectA() {
    player = "A";
    table = dataA;
    console.log(player);
}
function selectB() {
    player = "B";
    table = dataB;
    console.log(player);
}
function selectC() {
    player = "C";
    table = dataC;
    console.log(player);
}
function selectD() {
    player = "D";
    table = dataD;
    console.log(player);
}
function selectE() {
    player = "E";
    table = dataE;
    console.log(player);
}
function selectF() {
    player = "F";
    table = dataF;
    console.log(player);
}
function selectG() {
    player = "G";
    table = dataG;
    console.log(player);
}
function selectH() {
    player = "H";
    table = dataH;
    console.log(player);
}
function selectI() {
    player = "I";
    table = dataI;
    console.log(player);
}
function selectJ() {
    player = "J";
    table = dataJ;
    console.log(player);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This is where we link the keyboard inputs to change the game modes, players, and actions.

$(document).keypress(function(e) {
    if(e.which == 13) {
        addData()
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


    
    else if (e.which == 98) {
        selectA();
    }
    else if (e.which == 99) {
        selectB();
    }
    else if (e.which == 102) {
        selectC();
    }
    else if (e.which == 106) {
        selectD();
    }
    else if (e.which == 112) {
        selectE();
    }
    else if (e.which == 121) {
        selectF();
    }
    else if (e.which == 109) {
        selectG();
    }
    else if (e.which == 114) {
        selectH();
    }
    else if (e.which == 119) {
        selectI();
    }
    else if (e.which == 122) {
        selectJ();
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


    else if (e.which == 113) {
        save(table,player);
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This is where we wrote the functions that determine the color of each zone and whether it is highlighted or not.


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