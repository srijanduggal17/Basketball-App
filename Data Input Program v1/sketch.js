var zones = []; 
var zoneNames = ["1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R"]; 
var scale;

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

	noTint();
	image(base,0,0,windowWidth,.479*windowWidth);
}

function draw() {
	console.log(mouseX,mouseY);
}

function colorZone() {

	switch(true) {
		case (245*scale<mouseY && mouseY<311*scale && mouseX>278*scale && mouseX<5.70*mouseY-5.70*245*scale+278*scale && mouseX<432*scale && mouseX>7*mouseY-7*289*scale+278*scale):
			tint(100,100,100);
			image(zones[0],0,0,windowWidth,.479*windowWidth);
			break;
		case (245*scale<mouseY && mouseY<311*scale && mouseX<586*scale && mouseX>-5.70*mouseY+5.70*245*scale+586*scale && mouseX>432*scale && mouseX<-7*mouseY+7*289*scale+586*scale):
			tint(100,100,100);
			image(zones[13],0,0,windowWidth,.479*windowWidth);
			break;	


		case (158*scale<mouseY && mouseY<289*scale && mouseX>-1.58*mouseY+1.58*158*scale+190*scale && mouseX<1.13*mouseY-1.13*158*scale+190*scale && mouseX>1.64*mouseY-1.64*196*scale+130*scale && mouseX<278*scale):
			tint(100,100,100);
			image(zones[1],0,0,windowWidth,.479*windowWidth);
			break;
		case (158*scale<mouseY && mouseY<289*scale && mouseX<1.58*mouseY-1.58*158*scale+674*scale && mouseX>-1.13*mouseY+1.13*158*scale+674*scale && mouseX<-1.64*mouseY+1.64*196*scale+734*scale && mouseX>586*scale):
			tint(100,100,100);
			image(zones[14],0,0,windowWidth,.479*windowWidth);
			break;


		case (89*scale<mouseY && mouseY<196*scale && mouseX>.5*mouseY-.5*89*scale+76*scale && mouseX<.52*mouseY-.52*89*scale+154*scale && mouseX<-1.58*mouseY+1.58*158*scale+190*scale):
			tint(100,100,100);
			image(zones[2],0,0,windowWidth,.479*windowWidth);
			break;
		case (89*scale<mouseY && mouseY<196*scale && mouseX<-.5*mouseY+.5*89*scale+788*scale && mouseX>-.52*mouseY+.52*89*scale+710*scale && mouseX>1.58*mouseY-1.58*158*scale+674*scale):
			tint(100,100,100);
			image(zones[15],0,0,windowWidth,.479*windowWidth);
			break;


		case (1*scale<mouseY && mouseY<89*scale && mouseX>76*scale && mouseX<.28*mouseY-.28*47*scale+140*scale && mouseX<141*scale):
			tint(100,100,100)
			image(zones[3],0,0,windowWidth,.479*windowWidth)
			break;
		case (1*scale<mouseY && mouseY<89*scale && mouseX<788*scale && mouseX>-.28*mouseY+.28*47*scale+724*scale && mouseX>723*scale):
			tint(100,100,100);
			image(zones[16],0,0,windowWidth,.479*windowWidth);
			break;


		case (203*scale<mouseY && mouseY<272*scale && mouseX>-1.79*mouseY+1.79*203*scale+330*scale && mouseX>3.71*mouseY-3.71*231*scale+280*scale && mouseX<432*scale):
			tint(100,100,100);
			image(zones[4],0,0,windowWidth,.479*windowWidth);
			break;
		case (203*scale<mouseY && mouseY<272*scale && mouseX<1.79*mouseY-1.79*203*scale+534*scale && mouseX<-3.71*mouseY+3.71*231*scale+584*scale && mouseX>432*scale):
			tint(100,100,100);
			image(zones[17],0,0,windowWidth,.479*windowWidth);
			break;
	

		case (124*scale<mouseY && mouseY<231*scale && mouseX>-1.5*mouseY+1.5*124*scale+240*scale && mouseX<1.14*mouseY-1.14*124*scale+240*scale && mouseX>1.17*mouseY-1.17*156*scale+192*scale && mouseX<-1.79*mouseY+1.79*203*scale+330*scale):
			tint(100,100,100);
			image(zones[5],0,0,windowWidth,.479*windowWidth);
			break;
		case (124*scale<mouseY && mouseY<231*scale && mouseX<1.5*mouseY-1.5*124*scale+624*scale && mouseX>-1.14*mouseY+1.14*124*scale+624*scale && mouseX<-1.17*mouseY+1.17*156*scale+672*scale && mouseX>1.79*mouseY-1.79*203*scale+534*scale):
			tint(100,100,100);
			image(zones[18],0,0,windowWidth,.479*windowWidth);
			break;


		case (64*scale<mouseY && mouseY<156*scale && mouseX>-2.5*mouseY+2.5*64*scale+216*scale && mouseX<.4*mouseY-.4*64*scale+216*scale && mouseX>.53*mouseY-.53*88*scale+156*scale && mouseX<-1.5*mouseY+1.5*124*scale+240*scale):
			tint(100,100,100);
			image(zones[6],0,0,windowWidth,.479*windowWidth);
			break;
		case (64*scale<mouseY && mouseY<156*scale && mouseX<2.5*mouseY-2.5*64*scale+648*scale && mouseX>-.4*mouseY+.4*64*scale+648*scale && mouseX<-.53*mouseY+.53*88*scale+708*scale && mouseX>1.5*mouseY-1.5*124*scale+624*scale):
			tint(100,100,100);
			image(zones[19],0,0,windowWidth,.479*windowWidth);
			break;


		case (1*scale<mouseY && mouseY<88*scale && mouseX>.13*mouseY-.13*1*scale+145*scale && mouseX<-2.5*mouseY+2.5*64*scale+216*scale && mouseX<.11*mouseY-.11*1*scale+209*scale):
			tint(100,100,100);
			image(zones[7],0,0,windowWidth,.479*windowWidth);
			break;
		case (1*scale<mouseY && mouseY<88*scale && mouseX<-.13*mouseY+.13*1*scale+719*scale && mouseX>2.5*mouseY-2.5*64*scale+648*scale && mouseX>.11*mouseY+.11*1*scale+655*scale):
			tint(100,100,100);
			image(zones[20],0,0,windowWidth,.479*windowWidth);
			break;


		case (136*scale<mouseY && mouseY<203*scale && 330*scale<mouseX && mouseX<432*scale):
			tint(100,100,100);
			image(zones[8],0,0,windowWidth,.479*windowWidth);
			break;
		case (136*scale<mouseY && mouseY<203*scale && 432*scale<mouseX && mouseX<534*scale):
			tint(100,100,100);
			image(zones[21],0,0,windowWidth,.479*windowWidth);
			break;


		case (97*scale<mouseY && mouseY<203*scale && mouseX>-1.48*mouseY+1.48*97*scale+284*scale && mouseX>1.09*mouseY-1.09*124*scale+244*scale && mouseX<1.18*mouseY-1.18*97*scale+284*scale && mouseX<330*scale):
			tint(100,100,100);
			image(zones[9],0,0,windowWidth,.479*windowWidth);
			break;
		case (97*scale<mouseY && mouseY<203*scale && mouseX<1.48*mouseY-1.48*97*scale+580*scale && mouseX<-1.09*mouseY+1.09*124*scale+620*scale && mouseX>-1.18*mouseY+1.18*97*scale+580*scale && mouseX>534*scale):
			tint(100,100,100);
			image(zones[22],0,0,windowWidth,.479*windowWidth);
			break;
	

		case (1*scale<mouseY && mouseY<124*scale && mouseX>.26*mouseY-.26*1*scale+212*scale && mouseX<.16*mouseY-.16*1*scale+269*scale && mouseX<-1.48*mouseY+1.48*97*scale+284*scale):
			tint(100,100,100);
			image(zones[10],0,0,windowWidth,.479*windowWidth);
			break;
		case (1*scale<mouseY && mouseY<124*scale && mouseX<-.26*mouseY+.26*1*scale+652*scale && mouseX>-.16*mouseY+.16*1*scale+595*scale && mouseX>1.48*mouseY-1.48*97*scale+580*scale):
			tint(100,100,100);
			image(zones[23],0,0,windowWidth,.479*windowWidth);
			break;


		case (1*scale<mouseY && mouseY<136*scale && 330*scale<mouseX && mouseX<432*scale):
			tint(100,100,100);
			image(zones[11],0,0,windowWidth,.479*windowWidth);
			break;
		case (1*scale<mouseY && mouseY<136*scale && 432*scale<mouseX && mouseX<534*scale):
			tint(100,100,100);
			image(zones[24],0,0,windowWidth,.479*windowWidth);
			break;

		case (1*scale<mouseY && mouseY<136*scale && mouseX>.16*mouseY-.16*1*scale+269*scale && mouseX>1.1*mouseY-1.1*94*scale+284*scale && mouseX<330*scale):
			tint(100,100,100);
			image(zones[12],0,0,windowWidth,.479*windowWidth);
			break;
		case (1*scale<mouseY && mouseY<136*scale && mouseX<-.16*mouseY+.16*1*scale+595*scale && mouseX<-1.1*mouseY+1.1*94*scale+580*scale && mouseX>534*scale):
			tint(100,100,100);
			image(zones[25],0,0,windowWidth,.479*windowWidth);
			break;
	}
}

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