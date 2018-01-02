var zones = []; 
var zoneNames = ["1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R"]; 
var scale;

var gamemode;
var player;
var zone;
var action;

var dataBo;
var dataMeyer;
var dataFinn;
var dataCJ;
var dataRiley;
var dataJP;
var dataZachary;
var dataCasey;
var dataMurray;
var dataJames;

var table;

var columnTitles = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
var rowTitles = ["","Drill Shot Made","Drill Shot Missed","Scrimmage Shot Made","Scrimmage Shot Missed","Scrimmage Pass Made","Scrimmage Pass Missed","Scrimmage Advantage Pass","Scrimmage Assist","Scrimmage Turnover","Game Shot Made","Game Shot Missed","Game Pass Made","Game Pass Missed","Game Advantage Pass","Game Assist","Game Turnover"];

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

    /*
    zone1();
    zone2();
    zone3();
    zone4();
    zone5();
    zone6();
    zone7();
    zone8();
    zone9();
    zone10();
    zone11();
    zone12();
    zone13();
    */

    noTint();
    image(base,0,0,windowWidth,.479*windowWidth);
    
    createDataBo();
    createDataMeyer();
    createDataFinn();
    createDataCJ();
    createDataRiley();
    createDataJP();
    createDataZachary();
    createDataCasey();
    createDataMurray();
    createDataJames();
}

function createDataBo() {
    var boTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var boDrillShotMade = ["Shot Made"];
    var boDrillShotMissed = ["Shot Missed"];
    var boScrimmageShotMade = ["Shot Made"];
    var boScrimmageShotMissed = ["Shot Missed"];
    var boScrimmagePassMade = ["Pass Made"];
    var boScrimmagePassMissed = ["Pass Missed"];
    var boScrimmageAdvantagePass = ["Advantage Pass"];
    var boScrimmageAssist = ["Assist"];
    var boScrimmageTurnover = ["Turnover"];   
    var boGameShotMade = ["Shot Made"];
    var boGameShotMissed = ["Shot Missed"];
    var boGamePassMade = ["Pass Made"];
    var boGamePassMissed = ["Pass Missed"];
    var boGameAdvantagePass = ["Advantage Pass"];
    var boGameAssist = ["Assist"];
    var boGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        boDrillShotMade[i] = 0;
        boDrillShotMissed[i] = 0;
        boScrimmageShotMade[i] = 0;
        boScrimmageShotMissed[i] = 0;
        boScrimmagePassMade[i] = 0;
        boScrimmagePassMissed[i] = 0;
        boScrimmageAdvantagePass[i] = 0;
        boScrimmageAssist[i] = 0;
        boScrimmageTurnover[i] = 0;
        boGameShotMade[i] = 0;
        boGameShotMissed[i] = 0;
        boGamePassMade[i] = 0;
        boGamePassMissed[i] = 0;
        boGameAdvantagePass[i] = 0;
        boGameAssist[i] = 0;
        boGameTurnover[i] = 0;
    }
    dataBo = [boTitle,boDrillShotMade,boDrillShotMissed,boScrimmageShotMade,boScrimmageShotMissed,boScrimmagePassMade,boScrimmagePassMissed,boScrimmageAdvantagePass,boScrimmageAssist,boScrimmageTurnover,boGameShotMade, boGameShotMissed,boGamePassMade,boGamePassMissed,boGameAdvantagePass,boGameAssist,boGameTurnover];
}
function createDataMeyer() {
    var meyerTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var meyerDrillShotMade = ["Shot Made"];
    var meyerDrillShotMissed = ["Shot Missed"];
    var meyerScrimmageShotMade = ["Shot Made"];
    var meyerScrimmageShotMissed = ["Shot Missed"];
    var meyerScrimmagePassMade = ["Pass Made"];
    var meyerScrimmagePassMissed = ["Pass Missed"];
    var meyerScrimmageAdvantagePass = ["Advantage Pass"];
    var meyerScrimmageAssist = ["Assist"];
    var meyerScrimmageTurnover = ["Turnover"];   
    var meyerGameShotMade = ["Shot Made"];
    var meyerGameShotMissed = ["Shot Missed"];
    var meyerGamePassMade = ["Pass Made"];
    var meyerGamePassMissed = ["Pass Missed"];
    var meyerGameAdvantagePass = ["Advantage Pass"];
    var meyerGameAssist = ["Assist"];
    var meyerGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        meyerDrillShotMade[i] = 0;
        meyerDrillShotMissed[i] = 0;
        meyerScrimmageShotMade[i] = 0;
        meyerScrimmageShotMissed[i] = 0;
        meyerScrimmagePassMade[i] = 0;
        meyerScrimmagePassMissed[i] = 0;
        meyerScrimmageAdvantagePass[i] = 0;
        meyerScrimmageAssist[i] = 0;
        meyerScrimmageTurnover[i] = 0;
        meyerGameShotMade[i] = 0;
        meyerGameShotMissed[i] = 0;
        meyerGamePassMade[i] = 0;
        meyerGamePassMissed[i] = 0;
        meyerGameAdvantagePass[i] = 0;
        meyerGameAssist[i] = 0;
        meyerGameTurnover[i] = 0;
    }
    dataMeyer = [meyerTitle,meyerDrillShotMade,meyerDrillShotMissed,meyerScrimmageShotMade,meyerScrimmageShotMissed,meyerScrimmagePassMade,meyerScrimmagePassMissed,meyerScrimmageAdvantagePass,meyerScrimmageAssist,meyerScrimmageTurnover,meyerGameShotMade, meyerGameShotMissed,meyerGamePassMade,meyerGamePassMissed,meyerGameAdvantagePass,meyerGameAssist,meyerGameTurnover];
}
function createDataFinn() {
    var finnTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var finnDrillShotMade = ["Shot Made"];
    var finnDrillShotMissed = ["Shot Missed"];
    var finnScrimmageShotMade = ["Shot Made"];
    var finnScrimmageShotMissed = ["Shot Missed"];
    var finnScrimmagePassMade = ["Pass Made"];
    var finnScrimmagePassMissed = ["Pass Missed"];
    var finnScrimmageAdvantagePass = ["Advantage Pass"];
    var finnScrimmageAssist = ["Assist"];
    var finnScrimmageTurnover = ["Turnover"];   
    var finnGameShotMade = ["Shot Made"];
    var finnGameShotMissed = ["Shot Missed"];
    var finnGamePassMade = ["Pass Made"];
    var finnGamePassMissed = ["Pass Missed"];
    var finnGameAdvantagePass = ["Advantage Pass"];
    var finnGameAssist = ["Assist"];
    var finnGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        finnDrillShotMade[i] = 0;
        finnDrillShotMissed[i] = 0;
        finnScrimmageShotMade[i] = 0;
        finnScrimmageShotMissed[i] = 0;
        finnScrimmagePassMade[i] = 0;
        finnScrimmagePassMissed[i] = 0;
        finnScrimmageAdvantagePass[i] = 0;
        finnScrimmageAssist[i] = 0;
        finnScrimmageTurnover[i] = 0;
        finnGameShotMade[i] = 0;
        finnGameShotMissed[i] = 0;
        finnGamePassMade[i] = 0;
        finnGamePassMissed[i] = 0;
        finnGameAdvantagePass[i] = 0;
        finnGameAssist[i] = 0;
        finnGameTurnover[i] = 0;
    }
    dataFinn = [finnTitle,finnDrillShotMade,finnDrillShotMissed,finnScrimmageShotMade,finnScrimmageShotMissed,finnScrimmagePassMade,finnScrimmagePassMissed,finnScrimmageAdvantagePass,finnScrimmageAssist,finnScrimmageTurnover,finnGameShotMade, finnGameShotMissed,finnGamePassMade,finnGamePassMissed,finnGameAdvantagePass,finnGameAssist,finnGameTurnover];
}
function createDataCJ() {
    var cjTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var cjDrillShotMade = ["Shot Made"];
    var cjDrillShotMissed = ["Shot Missed"];
    var cjScrimmageShotMade = ["Shot Made"];
    var cjScrimmageShotMissed = ["Shot Missed"];
    var cjScrimmagePassMade = ["Pass Made"];
    var cjScrimmagePassMissed = ["Pass Missed"];
    var cjScrimmageAdvantagePass = ["Advantage Pass"];
    var cjScrimmageAssist = ["Assist"];
    var cjScrimmageTurnover = ["Turnover"];   
    var cjGameShotMade = ["Shot Made"];
    var cjGameShotMissed = ["Shot Missed"];
    var cjGamePassMade = ["Pass Made"];
    var cjGamePassMissed = ["Pass Missed"];
    var cjGameAdvantagePass = ["Advantage Pass"];
    var cjGameAssist = ["Assist"];
    var cjGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        cjDrillShotMade[i] = 0;
        cjDrillShotMissed[i] = 0;
        cjScrimmageShotMade[i] = 0;
        cjScrimmageShotMissed[i] = 0;
        cjScrimmagePassMade[i] = 0;
        cjScrimmagePassMissed[i] = 0;
        cjScrimmageAdvantagePass[i] = 0;
        cjScrimmageAssist[i] = 0;
        cjScrimmageTurnover[i] = 0;
        cjGameShotMade[i] = 0;
        cjGameShotMissed[i] = 0;
        cjGamePassMade[i] = 0;
        cjGamePassMissed[i] = 0;
        cjGameAdvantagePass[i] = 0;
        cjGameAssist[i] = 0;
        cjGameTurnover[i] = 0;
    }
    dataCJ = [cjTitle,cjDrillShotMade,cjDrillShotMissed,cjScrimmageShotMade,cjScrimmageShotMissed,cjScrimmagePassMade,cjScrimmagePassMissed,cjScrimmageAdvantagePass,cjScrimmageAssist,cjScrimmageTurnover,cjGameShotMade, cjGameShotMissed,cjGamePassMade,cjGamePassMissed,cjGameAdvantagePass,cjGameAssist,cjGameTurnover];
}
function createDataRiley() {
    var rileyTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var rileyDrillShotMade = ["Shot Made"];
    var rileyDrillShotMissed = ["Shot Missed"];
    var rileyScrimmageShotMade = ["Shot Made"];
    var rileyScrimmageShotMissed = ["Shot Missed"];
    var rileyScrimmagePassMade = ["Pass Made"];
    var rileyScrimmagePassMissed = ["Pass Missed"];
    var rileyScrimmageAdvantagePass = ["Advantage Pass"];
    var rileyScrimmageAssist = ["Assist"];
    var rileyScrimmageTurnover = ["Turnover"];   
    var rileyGameShotMade = ["Shot Made"];
    var rileyGameShotMissed = ["Shot Missed"];
    var rileyGamePassMade = ["Pass Made"];
    var rileyGamePassMissed = ["Pass Missed"];
    var rileyGameAdvantagePass = ["Advantage Pass"];
    var rileyGameAssist = ["Assist"];
    var rileyGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        rileyDrillShotMade[i] = 0;
        rileyDrillShotMissed[i] = 0;
        rileyScrimmageShotMade[i] = 0;
        rileyScrimmageShotMissed[i] = 0;
        rileyScrimmagePassMade[i] = 0;
        rileyScrimmagePassMissed[i] = 0;
        rileyScrimmageAdvantagePass[i] = 0;
        rileyScrimmageAssist[i] = 0;
        rileyScrimmageTurnover[i] = 0;
        rileyGameShotMade[i] = 0;
        rileyGameShotMissed[i] = 0;
        rileyGamePassMade[i] = 0;
        rileyGamePassMissed[i] = 0;
        rileyGameAdvantagePass[i] = 0;
        rileyGameAssist[i] = 0;
        rileyGameTurnover[i] = 0;
    }
    dataRiley = [rileyTitle,rileyDrillShotMade,rileyDrillShotMissed,rileyScrimmageShotMade,rileyScrimmageShotMissed,rileyScrimmagePassMade,rileyScrimmagePassMissed,rileyScrimmageAdvantagePass,rileyScrimmageAssist,rileyScrimmageTurnover,rileyGameShotMade, rileyGameShotMissed,rileyGamePassMade,rileyGamePassMissed,rileyGameAdvantagePass,rileyGameAssist,rileyGameTurnover];
}
function createDataJP() {
    var jpTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var jpDrillShotMade = ["Shot Made"];
    var jpDrillShotMissed = ["Shot Missed"];
    var jpScrimmageShotMade = ["Shot Made"];
    var jpScrimmageShotMissed = ["Shot Missed"];
    var jpScrimmagePassMade = ["Pass Made"];
    var jpScrimmagePassMissed = ["Pass Missed"];
    var jpScrimmageAdvantagePass = ["Advantage Pass"];
    var jpScrimmageAssist = ["Assist"];
    var jpScrimmageTurnover = ["Turnover"];   
    var jpGameShotMade = ["Shot Made"];
    var jpGameShotMissed = ["Shot Missed"];
    var jpGamePassMade = ["Pass Made"];
    var jpGamePassMissed = ["Pass Missed"];
    var jpGameAdvantagePass = ["Advantage Pass"];
    var jpGameAssist = ["Assist"];
    var jpGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        jpDrillShotMade[i] = 0;
        jpDrillShotMissed[i] = 0;
        jpScrimmageShotMade[i] = 0;
        jpScrimmageShotMissed[i] = 0;
        jpScrimmagePassMade[i] = 0;
        jpScrimmagePassMissed[i] = 0;
        jpScrimmageAdvantagePass[i] = 0;
        jpScrimmageAssist[i] = 0;
        jpScrimmageTurnover[i] = 0;
        jpGameShotMade[i] = 0;
        jpGameShotMissed[i] = 0;
        jpGamePassMade[i] = 0;
        jpGamePassMissed[i] = 0;
        jpGameAdvantagePass[i] = 0;
        jpGameAssist[i] = 0;
        jpGameTurnover[i] = 0;
    }
    dataJP = [jpTitle,jpDrillShotMade,jpDrillShotMissed,jpScrimmageShotMade,jpScrimmageShotMissed,jpScrimmagePassMade,jpScrimmagePassMissed,jpScrimmageAdvantagePass,jpScrimmageAssist,jpScrimmageTurnover,jpGameShotMade, jpGameShotMissed,jpGamePassMade,jpGamePassMissed,jpGameAdvantagePass,jpGameAssist,jpGameTurnover];
}
function createDataZachary() {
    var zacharyTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var zacharyDrillShotMade = ["Shot Made"];
    var zacharyDrillShotMissed = ["Shot Missed"];
    var zacharyScrimmageShotMade = ["Shot Made"];
    var zacharyScrimmageShotMissed = ["Shot Missed"];
    var zacharyScrimmagePassMade = ["Pass Made"];
    var zacharyScrimmagePassMissed = ["Pass Missed"];
    var zacharyScrimmageAdvantagePass = ["Advantage Pass"];
    var zacharyScrimmageAssist = ["Assist"];
    var zacharyScrimmageTurnover = ["Turnover"];   
    var zacharyGameShotMade = ["Shot Made"];
    var zacharyGameShotMissed = ["Shot Missed"];
    var zacharyGamePassMade = ["Pass Made"];
    var zacharyGamePassMissed = ["Pass Missed"];
    var zacharyGameAdvantagePass = ["Advantage Pass"];
    var zacharyGameAssist = ["Assist"];
    var zacharyGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        zacharyDrillShotMade[i] = 0;
        zacharyDrillShotMissed[i] = 0;
        zacharyScrimmageShotMade[i] = 0;
        zacharyScrimmageShotMissed[i] = 0;
        zacharyScrimmagePassMade[i] = 0;
        zacharyScrimmagePassMissed[i] = 0;
        zacharyScrimmageAdvantagePass[i] = 0;
        zacharyScrimmageAssist[i] = 0;
        zacharyScrimmageTurnover[i] = 0;
        zacharyGameShotMade[i] = 0;
        zacharyGameShotMissed[i] = 0;
        zacharyGamePassMade[i] = 0;
        zacharyGamePassMissed[i] = 0;
        zacharyGameAdvantagePass[i] = 0;
        zacharyGameAssist[i] = 0;
        zacharyGameTurnover[i] = 0;
    }
    dataZachary = [zacharyTitle,zacharyDrillShotMade,zacharyDrillShotMissed,zacharyScrimmageShotMade,zacharyScrimmageShotMissed,zacharyScrimmagePassMade,zacharyScrimmagePassMissed,zacharyScrimmageAdvantagePass,zacharyScrimmageAssist,zacharyScrimmageTurnover,zacharyGameShotMade, zacharyGameShotMissed,zacharyGamePassMade,zacharyGamePassMissed,zacharyGameAdvantagePass,zacharyGameAssist,zacharyGameTurnover];
}
function createDataCasey() {
    var caseyTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var caseyDrillShotMade = ["Shot Made"];
    var caseyDrillShotMissed = ["Shot Missed"];
    var caseyScrimmageShotMade = ["Shot Made"];
    var caseyScrimmageShotMissed = ["Shot Missed"];
    var caseyScrimmagePassMade = ["Pass Made"];
    var caseyScrimmagePassMissed = ["Pass Missed"];
    var caseyScrimmageAdvantagePass = ["Advantage Pass"];
    var caseyScrimmageAssist = ["Assist"];
    var caseyScrimmageTurnover = ["Turnover"];   
    var caseyGameShotMade = ["Shot Made"];
    var caseyGameShotMissed = ["Shot Missed"];
    var caseyGamePassMade = ["Pass Made"];
    var caseyGamePassMissed = ["Pass Missed"];
    var caseyGameAdvantagePass = ["Advantage Pass"];
    var caseyGameAssist = ["Assist"];
    var caseyGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        caseyDrillShotMade[i] = 0;
        caseyDrillShotMissed[i] = 0;
        caseyScrimmageShotMade[i] = 0;
        caseyScrimmageShotMissed[i] = 0;
        caseyScrimmagePassMade[i] = 0;
        caseyScrimmagePassMissed[i] = 0;
        caseyScrimmageAdvantagePass[i] = 0;
        caseyScrimmageAssist[i] = 0;
        caseyScrimmageTurnover[i] = 0;
        caseyGameShotMade[i] = 0;
        caseyGameShotMissed[i] = 0;
        caseyGamePassMade[i] = 0;
        caseyGamePassMissed[i] = 0;
        caseyGameAdvantagePass[i] = 0;
        caseyGameAssist[i] = 0;
        caseyGameTurnover[i] = 0;
    }
    dataCasey = [caseyTitle,caseyDrillShotMade,caseyDrillShotMissed,caseyScrimmageShotMade,caseyScrimmageShotMissed,caseyScrimmagePassMade,caseyScrimmagePassMissed,caseyScrimmageAdvantagePass,caseyScrimmageAssist,caseyScrimmageTurnover,caseyGameShotMade,caseyGameShotMissed,caseyGamePassMade,caseyGamePassMissed,caseyGameAdvantagePass,caseyGameAssist,caseyGameTurnover];
}
function createDataMurray() {
    var murrayTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var murrayDrillShotMade = ["Shot Made"];
    var murrayDrillShotMissed = ["Shot Missed"];
    var murrayScrimmageShotMade = ["Shot Made"];
    var murrayScrimmageShotMissed = ["Shot Missed"];
    var murrayScrimmagePassMade = ["Pass Made"];
    var murrayScrimmagePassMissed = ["Pass Missed"];
    var murrayScrimmageAdvantagePass = ["Advantage Pass"];
    var murrayScrimmageAssist = ["Assist"];
    var murrayScrimmageTurnover = ["Turnover"];   
    var murrayGameShotMade = ["Shot Made"];
    var murrayGameShotMissed = ["Shot Missed"];
    var murrayGamePassMade = ["Pass Made"];
    var murrayGamePassMissed = ["Pass Missed"];
    var murrayGameAdvantagePass = ["Advantage Pass"];
    var murrayGameAssist = ["Assist"];
    var murrayGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        murrayDrillShotMade[i] = 0;
        murrayDrillShotMissed[i] = 0;
        murrayScrimmageShotMade[i] = 0;
        murrayScrimmageShotMissed[i] = 0;
        murrayScrimmagePassMade[i] = 0;
        murrayScrimmagePassMissed[i] = 0;
        murrayScrimmageAdvantagePass[i] = 0;
        murrayScrimmageAssist[i] = 0;
        murrayScrimmageTurnover[i] = 0;
        murrayGameShotMade[i] = 0;
        murrayGameShotMissed[i] = 0;
        murrayGamePassMade[i] = 0;
        murrayGamePassMissed[i] = 0;
        murrayGameAdvantagePass[i] = 0;
        murrayGameAssist[i] = 0;
        murrayGameTurnover[i] = 0;
    }
    dataMurray = [murrayTitle,murrayDrillShotMade,murrayDrillShotMissed,murrayScrimmageShotMade,murrayScrimmageShotMissed,murrayScrimmagePassMade,murrayScrimmagePassMissed,murrayScrimmageAdvantagePass,murrayScrimmageAssist,murrayScrimmageTurnover,murrayGameShotMade,murrayGameShotMissed,murrayGamePassMade,murrayGamePassMissed,murrayGameAdvantagePass,murrayGameAssist,murrayGameTurnover];
}
function createDataJames() {
    var jamesTitle = ["","1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R","FT"];
    var jamesDrillShotMade = ["Shot Made"];
    var jamesDrillShotMissed = ["Shot Missed"];
    var jamesScrimmageShotMade = ["Shot Made"];
    var jamesScrimmageShotMissed = ["Shot Missed"];
    var jamesScrimmagePassMade = ["Pass Made"];
    var jamesScrimmagePassMissed = ["Pass Missed"];
    var jamesScrimmageAdvantagePass = ["Advantage Pass"];
    var jamesScrimmageAssist = ["Assist"];
    var jamesScrimmageTurnover = ["Turnover"];   
    var jamesGameShotMade = ["Shot Made"];
    var jamesGameShotMissed = ["Shot Missed"];
    var jamesGamePassMade = ["Pass Made"];
    var jamesGamePassMissed = ["Pass Missed"];
    var jamesGameAdvantagePass = ["Advantage Pass"];
    var jamesGameAssist = ["Assist"];
    var jamesGameTurnover = ["Turnover"];

    for (var i = 1; i < 28; i++) {
        jamesDrillShotMade[i] = 0;
        jamesDrillShotMissed[i] = 0;
        jamesScrimmageShotMade[i] = 0;
        jamesScrimmageShotMissed[i] = 0;
        jamesScrimmagePassMade[i] = 0;
        jamesScrimmagePassMissed[i] = 0;
        jamesScrimmageAdvantagePass[i] = 0;
        jamesScrimmageAssist[i] = 0;
        jamesScrimmageTurnover[i] = 0;
        jamesGameShotMade[i] = 0;
        jamesGameShotMissed[i] = 0;
        jamesGamePassMade[i] = 0;
        jamesGamePassMissed[i] = 0;
        jamesGameAdvantagePass[i] = 0;
        jamesGameAssist[i] = 0;
        jamesGameTurnover[i] = 0;
    }
    dataJames = [jamesTitle,jamesDrillShotMade,jamesDrillShotMissed,jamesScrimmageShotMade,jamesScrimmageShotMissed,jamesScrimmagePassMade,jamesScrimmagePassMissed,jamesScrimmageAdvantagePass,jamesScrimmageAssist,jamesScrimmageTurnover,jamesGameShotMade,jamesGameShotMissed,jamesGamePassMade,jamesGamePassMissed,jamesGameAdvantagePass,jamesGameAssist,jamesGameTurnover];
}

function addData() {
    switch(player) {
        case("Bo"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataBo[row][column] = dataBo[row][column] + 1;
            break;  
        case("Meyer"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataMeyer[row][column] = dataMeyer[row][column] + 1;
            break;
        case("Finn"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataFinn[row][column] = dataFinn[row][column] + 1;
            break;
        case("CJ"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataCJ[row][column] = dataCJ[row][column] + 1;
            break;
        case("Riley"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataRiley[row][column] = dataRiley[row][column] + 1;
            break;
        case("JP"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataJP[row][column] = dataJP[row][column] + 1;
            break;
        case("Zachary"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataZachary[row][column] = dataZachary[row][column] + 1;
            break;
        case("Casey"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataCasey[row][column] = dataCasey[row][column] + 1;
            break;
        case("Murray"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataMurray[row][column] = dataMurray[row][column] + 1;
            break;
        case("James"):
            column = columnTitles.indexOf(zone);
            row = rowTitles.indexOf(gamemode + " " + action);
            dataJames[row][column] = dataJames[row][column] + 1;
            break;
    }
       
    loadZone();
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

/*
function zone1() {
    noFill();
    beginShape();
    vertex(278*scale, 245*scale);
    vertex(278*scale, 289*scale);
    vertex(432*scale, 311*scale);
    vertex(432*scale, 272*scale);
    endShape(CLOSE);

    noFill();
    beginShape();
    vertex(586*scale, 245*scale);
    vertex(586*scale, 289*scale);
    vertex(432*scale, 311*scale);
    vertex(432*scale, 272*scale);
    endShape(CLOSE);
}

function zone2() {
    noFill();
    beginShape();
    vertex(130*scale, 196*scale);
    vertex(190*scale, 158*scale);
    vertex(278*scale, 236*scale);
    vertex(278*scale, 289*scale);
    endShape(CLOSE);

    noFill();
    beginShape();
    vertex(734*scale, 196*scale);
    vertex(674*scale, 158*scale);
    vertex(586*scale, 236*scale);
    vertex(586*scale, 289*scale);
    endShape(CLOSE);
}

function zone3() {
    noFill();
    beginShape();
    vertex(76*scale, 89*scale);
    vertex(154*scale, 89*scale);
    vertex(190*scale, 158*scale);
    vertex(130*scale, 196*scale);
    endShape(CLOSE);

    noFill();
    beginShape();
    vertex(788*scale, 89*scale);
    vertex(710*scale, 89*scale);
    vertex(674*scale, 158*scale);
    vertex(734*scale, 196*scale);
    endShape(CLOSE);
}

function zone4() {
    noFill();
    beginShape();
    vertex(76*scale, 1*scale);
    vertex(76*scale, 89*scale);
    vertex(152*scale, 89*scale);
    vertex(141*scale, 47*scale);
    vertex(141*scale, 1*scale);
    endShape(CLOSE);

    noFill();
    beginShape();
    vertex(788*scale, 1*scale);
    vertex(788*scale, 89*scale);
    vertex(712*scale, 89*scale);
    vertex(723*scale, 47*scale);
    vertex(723*scale, 1*scale);
    endShape(CLOSE);
}

function zone5() {
    noFill();
    beginShape();
    vertex(432*scale, 203*scale);
    vertex(330*scale, 203*scale);
    vertex(280*scale, 231*scale);
    vertex(432*scale, 272*scale);
    endShape(CLOSE);

    noFill();
    beginShape();
    vertex(432*scale, 203*scale);
    vertex(534*scale, 203*scale);
    vertex(584*scale, 231*scale);
    vertex(432*scale, 272*scale);
    endShape(CLOSE);
}

function zone6() {
    noFill();
    beginShape();
    vertex(330*scale, 203*scale);
    vertex(240*scale, 124*scale);
    vertex(192*scale, 156*scale);
    vertex(280*scale, 231*scale);
    endShape(CLOSE);

    noFill();
    beginShape();
    vertex(534*scale, 203*scale);
    vertex(624*scale, 124*scale);
    vertex(672*scale, 156*scale);
    vertex(584*scale, 231*scale);
    endShape(CLOSE);
}

function zone7() {
    noFill();
    beginShape();
    vertex(240*scale, 124*scale);
    vertex(192*scale, 156*scale);
    vertex(156*scale, 88*scale);
    vertex(216*scale, 64*scale);
    endShape(CLOSE);

    noFill();
    beginShape();
    vertex(624*scale, 124*scale);
    vertex(672*scale, 156*scale);
    vertex(708*scale, 88*scale);
    vertex(648*scale, 64*scale);
    endShape(CLOSE);
}

function zone8() {
    noFill();
    beginShape();
    vertex(156*scale, 88*scale);
    vertex(216*scale, 64*scale);
    vertex(209*scale, 1*scale);
    vertex(145*scale, 1*scale);
    endShape(CLOSE);

    noFill();
    beginShape();
    vertex(708*scale, 88*scale);
    vertex(648*scale, 64*scale);
    vertex(655*scale, 1*scale);
    vertex(719*scale, 1*scale);
    endShape(CLOSE);
}

function zone9() {
    noFill();
    beginShape();
    vertex(432*scale, 203*scale);
    vertex(330*scale, 203*scale);
    vertex(330*scale, 136*scale);
    vertex(432*scale, 136*scale);
    endShape(CLOSE);

    noFill();
    beginShape();
    vertex(432*scale, 203*scale);
    vertex(534*scale, 203*scale);
    vertex(534*scale, 136*scale);
    vertex(432*scale, 136*scale);
    endShape(CLOSE);
}

function zone10() {
    noFill();
    beginShape();
    vertex(330*scale, 203*scale);
    vertex(330*scale, 136*scale);
    vertex(284*scale, 97*scale);
    vertex(244*scale, 124*scale);
    endShape(CLOSE);          

    noFill();
    beginShape();
    vertex(534*scale, 203*scale);
    vertex(534*scale, 136*scale);
    vertex(580*scale, 97*scale);
    vertex(620*scale, 124*scale);
    endShape(CLOSE);          
}

function zone11() {
    noFill();
    beginShape();
    vertex(284*scale, 97*scale);
    vertex(244*scale, 124*scale);
    vertex(212*scale, 1*scale);
    vertex(269*scale, 1*scale);
    endShape(CLOSE);

    noFill();
    beginShape();
    vertex(580*scale, 97*scale);
    vertex(620*scale, 124*scale);
    vertex(652*scale, 1*scale);
    vertex(595*scale, 1*scale);
    endShape(CLOSE);
}

function zone12() {
    noFill();
    beginShape();
    vertex(330*scale, 136*scale);
    vertex(330*scale, 1*scale);
    vertex(432*scale, 1*scale);
    vertex(432*scale, 136*scale);
    endShape(CLOSE);

    noFill();
    beginShape();
    vertex(534*scale, 136*scale);
    vertex(534*scale, 1*scale);
    vertex(432*scale, 1*scale);
    vertex(432*scale, 136*scale);
    endShape(CLOSE);
}

function zone13() {
    noFill();
    beginShape();
    vertex(330*scale, 136*scale);
    vertex(330*scale, 1*scale);
    vertex(269*scale, 1*scale);
    vertex(284*scale, 94*scale);
    endShape(CLOSE);

    noFill();
    beginShape();
    vertex(534*scale, 136*scale);
    vertex(534*scale, 1*scale);
    vertex(595*scale, 1*scale);
    vertex(580*scale, 94*scale);
    endShape(CLOSE);
}
*/

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


function selectBo() {
    player = "Bo";
    table = dataBo;
    console.log(player);
}
function selectMeyer() {
    player = "Meyer";
    table = dataMeyer;
    console.log(player);
}
function selectFinn() {
    player = "Finn";
    table = dataFinn;
    console.log(player);
}
function selectCJ() {
    player = "CJ";
    table = dataCJ;
    console.log(player);
}
function selectRiley() {
    player = "Riley";
    table = dataRiley;
    console.log(player);
}
function selectJP() {
    player = "JP";
    table = dataJP;
    console.log(player);
}
function selectZachary() {
    player = "Zachary";
    table = dataZachary;
    console.log(player);
}
function selectCasey() {
    player = "Casey";
    table = dataCasey;
    console.log(player);
}
function selectMurray() {
    player = "Murray";
    table = dataMurray;
    console.log(player);
}
function selectJames() {
    player = "James";
    table = dataJames;
    console.log(player);
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




