var theData;

function preload() {
	var url = 'refugee_camp_data.json';
	theData =  loadJSON(url) ;
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(255);
	noStroke();

	var allLayers = theData.operationalLayers[0];
	var feature = allLayers.featureCollection.layers[0];
	var dataArray = feature.featureSet.features; 


	var arrayDataOut = [];

	for (var i = 0; i < dataArray.length; i++) {
		var nowData = dataArray[i].attributes;
		var Lat = nowData.Lat;
		var Long = nowData.Long;
		var NUM = nowData.Total_of_refugee_population_per_location;

		arrayDataOut.push(Lat);
		arrayDataOut.push(Long);
		arrayDataOut.push(NUM);
		// Camp_Name
};

save(arrayDataOut, 'myData.json'); 
print(arrayDataOut);
}

function draw() {	
}