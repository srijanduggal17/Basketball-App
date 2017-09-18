var table;
var tableArray;

var shotsMade;
var shotsMissed;
var passMade;
var passMissed;
var advantagePass;
var assist;
var turnover;

var totalShotsMade = 0;
var totalShotsMissed = 0;
var totalPassMade = 0;
var totalPassMissed = 0;
var totalAdvantagePass = 0;
var totalAssist = 0;
var totalTurnover = 0;

var totalShots = 0;
var totalPasses = 0;

function preload() {
	table = loadTable("Data/Bo.csv","csv","header");
}

function setup() {
	tableArray = table.getArray();
	prepData();

	window.onload = pieChart1();
	//window.onload = pieChart2();

}

function prepData() {
	shotsMade = tableArray[9];
	shotsMissed = tableArray[10];
	passMade = tableArray[11];
	passMissed = tableArray[12];
	advantagePass = tableArray[13];
	assist = tableArray[14];
	turnover = tableArray[15];

	shotsMade.shift();
	shotsMissed.shift();
	passMade.shift();
	passMissed.shift();
	advantagePass.shift();
	assist.shift();
	turnover.shift();

	shotsMade.pop();
	shotsMissed.pop();
	passMade.pop();
	passMissed.pop();
	advantagePass.pop();
	assist.pop();
	turnover.pop();

	for (var i = 0; i < 26; i++) {
		totalShotsMade = totalShotsMade + parseInt(shotsMade[i]);
		totalShotsMissed = totalShotsMissed + parseInt(shotsMissed[i]);
		totalPassMade = totalPassMade + parseInt(passMade[i]);
		totalPassMissed = totalPassMissed + parseInt(passMissed[i]);
		totalAdvantagePass = totalAdvantagePass + parseInt(advantagePass[i]);
		totalAssist = totalAssist + parseInt(assist[i]);
		totalTurnover = totalTurnover + parseInt(turnover[i]);
	}


	totalShots = totalShotsMade + totalShotsMissed;
	totalPasses = totalPassMade + totalPassMissed + totalAdvantagePass + totalAssist;
}

function pieChart1() {
	var w = 500;
	var h = 500;

	var dataset = [{value: totalShots, label: "Shots"}, {value: totalTurnover, label: "Turnovers"}, {value: totalPasses, label: "Passes"}];

	var outerRadius = w / 3;
	var innerRadius = 0;
	var arc = d3.arc()
		.innerRadius(innerRadius)
		.outerRadius(outerRadius);

	var pie = d3.pie()
		.value(function(d) {
			return d.value;
		});


	/*
	var pie2 = d3.pie()
		.value(function(d) {
			return d.label;
		});

	var pie3 = d3.pie()
		.value(function(d) {
		return d.translate;
		});*/


	var color = d3.scaleOrdinal(d3.schemeCategory20);

	//Create SVG element
	var svg = d3.select("body")
				.append("svg")
				.attr("width", w)
				.attr("height", h);
				
	//Set up groups
	var arcs = svg.selectAll("g.arc")
				.data(pie(dataset))
				.enter()
				.append("g")
				.attr("class", "arc")
				.attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");


	/*
	var labels = svg.selectAll("g.labels")
				.data(pie2(dataset))
				.enter()
				.append("g")
				.attr("class", "labels");

	var translations = svg.selectAll("g.translate")
				.data(pie3(dataset))
				.enter()
				.append("g")
				.attr("class" , "translate");

	var key = function(d){ return d.data.label; };
	*/
	//Draw arc paths
	
	arcs.append("path")
	    .attr("fill", function(d, i) {
	    	return color(i);
	    })
	    .attr("d", arc);
				
	//Labels
	arcs.append("text")
	    .attr("transform", function(d) {
	    	return "translate(" + arc.centroid(d) + ")";
	    })
	    .attr("text-anchor", "middle")
	    .text(function(d) {
	    	return d.value;
	    });

	/*
	var text = svg.select(".labels").selectAll("text")
		.data(pie(dataset), key)


	var translator = function(d) { return d.data.translate; };

	text.enter()
		.append("text")
		.attr("dy",".35em")
		.attr("transform" , "translate(50," + translator + ")")
		//.attr("text-anchor", "middle")
		.text(key);
	*/

	var ordinal = d3.scaleOrdinal()
  		.domain(["Shots", "Passes", "Turnovers"])
  		.range([ "rgb(31, 119, 180)", "rgb(255, 127, 14)", "rgb(174, 199, 232)"]);

  	var svg = d3.select("svg");

	svg.append("g")
	  .attr("class", "legendOrdinal")
	  .attr("transform", "translate(400,20)");

	var legendOrdinal = d3.legendColor()
	  .shape("path", d3.symbol().type(d3.symbolCircle).size(150)())
	  .shapePadding(10)
	  .scale(ordinal);

	svg.select(".legendOrdinal")
	  .call(legendOrdinal);
}

function pieChart2() {
	var w = 500;
	var h = 500;

	var dataset = [totalShotsMade, totalShotsMissed, totalPassMade, totalPassMissed, totalAdvantagePass, totalAssist, totalTurnover];

	var outerRadius = w / 2;
	var innerRadius = 0;
	var arc = d3.arc()
		.innerRadius(innerRadius)
		.outerRadius(outerRadius);

	var pie = d3.pie();

	var color = d3.scaleOrdinal(d3.schemeCategory10);

	//Create SVG element
	var svg = d3.select("body")
				.append("svg")
				.attr("width", w)
				.attr("height", h);
				
	//Set up groups
	var arcs = svg.selectAll("g.arc")
				.data(pie(dataset))
				.enter()
				.append("g")
				.attr("class", "arc")
				.attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");
				
	//Draw arc paths
	arcs.append("path")
	    .attr("fill", function(d, i) {
	    	return color(i);
	    })
	    .attr("d", arc);
				
	//Labels
	arcs.append("text")
	    .attr("transform", function(d) {
	    	return "translate(" + arc.centroid(d) + ")";
	    })
	    .attr("text-anchor", "middle")
	    .text(function(d) {
	    	return d.value;
	    });
}
