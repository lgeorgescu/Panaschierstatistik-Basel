//source : https://jsfiddle.net/qo1vwL6k/1/
function updateData(){
	if(document.getElementById("jahr_2015").checked) {
		var path_data = "data/json_data_2015.json"
		d3.select("#header_app")
			.text("Subventionen Jahr 2015")
		//hier müssen die Daten von 2015 rein
		var params = {
			"dom": "Sankey-Chart",
			"width":    960, //changes size of the chart
			"height":    500, ////changes size of the chart
			"data": {
				"source":["Talgebiet","Talgebiet","Talgebiet","Talgebiet","Talgebiet","Talgebiet","Berggebiet","Berggebiet","Berggebiet","Berggebiet","Berggebiet","Berggebiet","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","Ackerbau","Gemüse- /Gartenbau","Obstbau","Weinbau","Verkehrsmilch","Mutterkühe","Pferde/Schafe/Ziegen","Schweine","Geflügel","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Mutterkühe","Andere/Nicht zugeteilt","Ackerbau","Gemüse- /Gartenbau","Obstbau","Weinbau","Verkehrsmilch","Mutterkühe","Pferde/Schafe/Ziegen","Schweine","Geflügel","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Mutterkühe","Andere/Nicht zugeteilt"],
				"target":["KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","Ackerbau","Ackerbau","Ackerbau","Ackerbau","Ackerbau","Ackerbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Obstbau","Obstbau","Obstbau","Obstbau","Obstbau","Obstbau","Weinbau","Weinbau","Weinbau","Weinbau","Weinbau","Weinbau","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Mutterkühe","Mutterkühe","Mutterkühe","Mutterkühe","Mutterkühe","Mutterkühe","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Schweine","Schweine","Schweine","Schweine","Schweine","Schweine","Geflügel","Geflügel","Geflügel","Geflügel","Geflügel","Geflügel","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio"],
				"value":[70845,641070,210843,263631,59429,15190,309574,447442,147040,183462,55239,1922,1255,90343,22400,12401,7858,2914,195,16868,3843,3979,949,239,528,8430,2619,1455,586,246,11246,18736,5405,1989,1651,460,212175,384545,117560,155110,42588,2514,45688,78003,38169,42857,10199,432,27708,39850,21197,16701,5027,67,3241,10077,3031,10731,1010,316,1294,4124,1736,7215,427,62,6756,97469,24594,29598,9492,1970,4751,36199,13772,17962,3782,946,65581,303868,103555,147094,31100,6946,2453,7502,2308,3317,148934,96473,39284,264,2955,6400,14420,90460,134718,18571,11556,36171,765558,118875,71266,28142,11903,163479,62993,567683]
			},
			"nodeWidth":     15,
			"nodePadding":     10,
			"layout":     32,
			"id": "main", 
			"units" : "k CHF"
			};
			   
	};
	if(document.getElementById("jahr_2016").checked) {
		var path_data = "data/json_data_2016.json"
		d3.select("#header_app")
		.text("Subventionen Jahr 2016")
		//hier müssen die Daten von 2016 rein
		var params = {
			"dom": "Sankey-Chart",
			"width":    960, //changes size of the chart
			"height":    500, ////changes size of the chart
			"data": {
				"source":["Talgebiet","Talgebiet","Talgebiet","Talgebiet","Talgebiet","Talgebiet","Berggebiet","Berggebiet","Berggebiet","Berggebiet","Berggebiet","Berggebiet","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","Ackerbau","Gemüse- /Gartenbau","Obstbau","Weinbau","Verkehrsmilch","Mutterkühe","Pferde/Schafe/Ziegen","Schweine","Geflügel","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Mutterkühe","Andere/Nicht zugeteilt","Ackerbau","Gemüse- /Gartenbau","Obstbau","Weinbau","Verkehrsmilch","Mutterkühe","Pferde/Schafe/Ziegen","Schweine","Geflügel","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Mutterkühe","Andere/Nicht zugeteilt"],
				"target":["KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","Ackerbau","Ackerbau","Ackerbau","Ackerbau","Ackerbau","Ackerbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Obstbau","Obstbau","Obstbau","Obstbau","Obstbau","Obstbau","Weinbau","Weinbau","Weinbau","Weinbau","Weinbau","Weinbau","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Mutterkühe","Mutterkühe","Mutterkühe","Mutterkühe","Mutterkühe","Mutterkühe","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Schweine","Schweine","Schweine","Schweine","Schweine","Schweine","Geflügel","Geflügel","Geflügel","Geflügel","Geflügel","Geflügel","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio"],
				"value":[70845,641070,210843,263631,59429,15190,309574,447442,147040,183462,55239,1922,1255,90343,22400,12401,7858,2914,195,16868,3843,3979,949,239,528,8430,2619,1455,586,246,11246,18736,5405,1989,1651,460,212175,384545,117560,155110,42588,2514,45688,78003,38169,42857,10199,432,27708,39850,21197,16701,5027,67,3241,10077,3031,10731,1010,316,1294,4124,1736,7215,427,62,6756,97469,24594,29598,9492,1970,4751,36199,13772,17962,3782,946,65581,303868,103555,147094,31100,6946,2453,7502,2308,3317,148934,96473,39284,264,2955,6400,14420,90460,134718,18571,11556,36171,765558,118875,71266,28142,11903,163479,62993,567683]
			},
			"nodeWidth":     15,
			"nodePadding":     10,
			"layout":     32,
			"id": "main", 
			"units" : "k CHF"
			};
	};
	if(document.getElementById("jahr_2017").checked) {
		var path_data = "data/json_data_2017.json"
		d3.select("#header_app")
		.text("Subventionen Jahr 2017")
		//hier müssen die Daten von 2017 rein
		var params = {
			"dom": "Sankey-Chart",
			"width":    960, //changes size of the chart
			"height":    500, ////changes size of the chart
			"data": {
				"source":["Talgebiet","Talgebiet","Talgebiet","Talgebiet","Talgebiet","Talgebiet","Berggebiet","Berggebiet","Berggebiet","Berggebiet","Berggebiet","Berggebiet","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","Ackerbau","Gemüse- /Gartenbau","Obstbau","Weinbau","Verkehrsmilch","Mutterkühe","Pferde/Schafe/Ziegen","Schweine","Geflügel","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Mutterkühe","Andere/Nicht zugeteilt","Ackerbau","Gemüse- /Gartenbau","Obstbau","Weinbau","Verkehrsmilch","Mutterkühe","Pferde/Schafe/Ziegen","Schweine","Geflügel","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Mutterkühe","Andere/Nicht zugeteilt"],
				"target":["KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","Ackerbau","Ackerbau","Ackerbau","Ackerbau","Ackerbau","Ackerbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Obstbau","Obstbau","Obstbau","Obstbau","Obstbau","Obstbau","Weinbau","Weinbau","Weinbau","Weinbau","Weinbau","Weinbau","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Mutterkühe","Mutterkühe","Mutterkühe","Mutterkühe","Mutterkühe","Mutterkühe","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Schweine","Schweine","Schweine","Schweine","Schweine","Schweine","Geflügel","Geflügel","Geflügel","Geflügel","Geflügel","Geflügel","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio"],
				"value":[70845,641070,210843,263631,59429,15190,309574,447442,147040,183462,55239,1922,1255,90343,22400,12401,7858,2914,195,16868,3843,3979,949,239,528,8430,2619,1455,586,246,11246,18736,5405,1989,1651,460,212175,384545,117560,155110,42588,2514,45688,78003,38169,42857,10199,432,27708,39850,21197,16701,5027,67,3241,10077,3031,10731,1010,316,1294,4124,1736,7215,427,62,6756,97469,24594,29598,9492,1970,4751,36199,13772,17962,3782,946,65581,303868,103555,147094,31100,6946,2453,7502,2308,3317,148934,96473,39284,264,2955,6400,14420,90460,134718,18571,11556,36171,765558,118875,71266,28142,11903,163479,62993,567683]
			},
			"nodeWidth":     15,
			"nodePadding":     10,
			"layout":     32,
			"id": "main", 
			"units" : "k CHF"
			};
	};
	if(document.getElementById("jahr_2018").checked) {
		var path_data = "data/json_data_2018.json"
		d3.select("#header_app")
		.text("Subventionen Jahr 2018")
		//hier müssen die Daten von 2018 rein
		var params = {
			"dom": "Sankey-Chart",
			"width":    960, //changes size of the chart
			"height":    500, ////changes size of the chart
			"data": {
				"source":["Talgebiet","Talgebiet","Talgebiet","Talgebiet","Talgebiet","Talgebiet","Berggebiet","Berggebiet","Berggebiet","Berggebiet","Berggebiet","Berggebiet","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","Ackerbau","Gemüse- /Gartenbau","Obstbau","Weinbau","Verkehrsmilch","Mutterkühe","Pferde/Schafe/Ziegen","Schweine","Geflügel","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Mutterkühe","Andere/Nicht zugeteilt","Ackerbau","Gemüse- /Gartenbau","Obstbau","Weinbau","Verkehrsmilch","Mutterkühe","Pferde/Schafe/Ziegen","Schweine","Geflügel","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Mutterkühe","Andere/Nicht zugeteilt"],
				"target":["KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","Ackerbau","Ackerbau","Ackerbau","Ackerbau","Ackerbau","Ackerbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Obstbau","Obstbau","Obstbau","Obstbau","Obstbau","Obstbau","Weinbau","Weinbau","Weinbau","Weinbau","Weinbau","Weinbau","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Mutterkühe","Mutterkühe","Mutterkühe","Mutterkühe","Mutterkühe","Mutterkühe","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Schweine","Schweine","Schweine","Schweine","Schweine","Schweine","Geflügel","Geflügel","Geflügel","Geflügel","Geflügel","Geflügel","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio"],
				"value":[70845,641070,210843,263631,59429,15190,309574,447442,147040,183462,55239,1922,1255,90343,22400,12401,7858,2914,195,16868,3843,3979,949,239,528,8430,2619,1455,586,246,11246,18736,5405,1989,1651,460,212175,384545,117560,155110,42588,2514,45688,78003,38169,42857,10199,432,27708,39850,21197,16701,5027,67,3241,10077,3031,10731,1010,316,1294,4124,1736,7215,427,62,6756,97469,24594,29598,9492,1970,4751,36199,13772,17962,3782,946,65581,303868,103555,147094,31100,6946,2453,7502,2308,3317,148934,96473,39284,264,2955,6400,14420,90460,134718,18571,11556,36171,765558,118875,71266,28142,11903,163479,62993,567683]
			},
			"nodeWidth":     15,
			"nodePadding":     10,
			"layout":     32,
			"id": "main", 
			"units" : "k CHF"
			};
	};
	if(document.getElementById("jahr_2019").checked) {
		var path_data = "data/json_data_2019.json"
		d3.select("#header_app")
		.text("Subventionen Jahr 2019")
		//hier müssen die Daten von 2019 rein
		var params = {
			"dom": "Sankey-Chart",
			"width":    960, //changes size of the chart
			"height":    500, ////changes size of the chart
			"data": {
				"source":["Talgebiet","Talgebiet","Talgebiet","Talgebiet","Talgebiet","Talgebiet","Berggebiet","Berggebiet","Berggebiet","Berggebiet","Berggebiet","Berggebiet","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","Ackerbau","Gemüse- /Gartenbau","Obstbau","Weinbau","Verkehrsmilch","Mutterkühe","Pferde/Schafe/Ziegen","Schweine","Geflügel","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Mutterkühe","Andere/Nicht zugeteilt","Ackerbau","Gemüse- /Gartenbau","Obstbau","Weinbau","Verkehrsmilch","Mutterkühe","Pferde/Schafe/Ziegen","Schweine","Geflügel","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Mutterkühe","Andere/Nicht zugeteilt"],
				"target":["KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","KULTURLAND","VERSORGUNGSSICHERHEIT","BIODIVERSITAET","PRODUKTIONSSYSTEME","LANDSCHAFTSQUALITAET","RESSOURCENEFFIZIENZ","Ackerbau","Ackerbau","Ackerbau","Ackerbau","Ackerbau","Ackerbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Gemüse- /Gartenbau","Obstbau","Obstbau","Obstbau","Obstbau","Obstbau","Obstbau","Weinbau","Weinbau","Weinbau","Weinbau","Weinbau","Weinbau","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Verkehrsmilch","Mutterkühe","Mutterkühe","Mutterkühe","Mutterkühe","Mutterkühe","Mutterkühe","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Pferde/Schafe/Ziegen","Schweine","Schweine","Schweine","Schweine","Schweine","Schweine","Geflügel","Geflügel","Geflügel","Geflügel","Geflügel","Geflügel","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Verkehrsmilch/Ackerbau","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Kombiniert Mutterkühe","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Andere/Nicht zugeteilt","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio","Nicht Bio"],
				"value":[70845,641070,210843,263631,59429,15190,309574,447442,147040,183462,55239,1922,1255,90343,22400,12401,7858,2914,195,16868,3843,3979,949,239,528,8430,2619,1455,586,246,11246,18736,5405,1989,1651,460,212175,384545,117560,155110,42588,2514,45688,78003,38169,42857,10199,432,27708,39850,21197,16701,5027,67,3241,10077,3031,10731,1010,316,1294,4124,1736,7215,427,62,6756,97469,24594,29598,9492,1970,4751,36199,13772,17962,3782,946,65581,303868,103555,147094,31100,6946,2453,7502,2308,3317,148934,96473,39284,264,2955,6400,14420,90460,134718,18571,11556,36171,765558,118875,71266,28142,11903,163479,62993,567683]
			},
			"nodeWidth":     15,
			"nodePadding":     10,
			"layout":     32,
			"id": "main", 
			"units" : "k CHF"
			};
	};
	var tmp = d3.select("#main");
	tmp.selectAll("*").remove();
	var tmp_2 = d3.select('#Sankey-Chart')
	tmp_2.selectAll("*").remove();
	if(document.getElementById("sunburst").checked) {
		draw_sunburst(path_data);
	}
	if(document.getElementById("sankey").checked) {
		draw_sankey(params);
	}
}

	

//$.getJSON( "https://gist.githubusercontent.com/mbostock/4348373/raw/85f18ac90409caa5529b32156aa6e71cf985263f/flare.json", function( data ) {
function draw_sunburst(path_data) {
	$.getJSON( path_data, function( data ) {
		
				console.log(data);
				


				partition = data => {
					const root = d3.hierarchy(data)
					.sum(d => d.value)
					.sort((a, b) => b.value - a.value);
					return d3.partition()
					.size([2 * Math.PI, root.height + 1])
					(root);
				}


				// var color = d3.scaleOrdinal().range(d3.quantize(d3.interpolateRainbow, data.children.length + 1)); //original
				// sunlight style guide network colors
				// https://github.com/amycesal/dataviz-style-guide/blob/master/Sunlight-StyleGuide-DataViz.pdf
				const dark = [
					'#B08B12',
					'#BA5F06',
					'#8C3B00',
					'#6D191B',
					'#842854',
					'#5F7186',
					'#193556',
					'#137B80',
					'#144847',
					'#254E00'
				];
				
				const mid = [
					'#E3BA22',
					'#E58429',
					'#BD2D28',
					'#D15A86',
					'#8E6C8A',
					'#6B99A1',
					'#42A5B3',
					'#0F8C79',
					'#6BBBA1',
					'#5C8100'
				];
				
				const light = [
					'#F2DA57',
					'#F6B656',
					'#E25A42',
					'#DCBDCF',
					'#B396AD',
					'#B0CBDB',
					'#33B6D0',
					'#7ABFCC',
					'#C8D7A1',
					'#A0B700'
				];
				
				const palettes = [light, mid, dark];
				const lightGreenFirstPalette = palettes
					.map(d => d.reverse())
					.reduce((a, b) => a.concat(b));
				
				const color = d3.scaleOrdinal(lightGreenFirstPalette);
				var format = d3.format(",d");

				var width = 1000;
				var radius = width / 6;

				var arc = d3.arc()
				.startAngle(d => d.x0)
				.endAngle(d => d.x1)
				.padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
				.padRadius(radius * 1.5)
				.innerRadius(d => d.y0 * radius)
				.outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))

				
				const root = partition(data);

				root.each(d => d.current = d);

				// const svg = d3.select(DOM.svg(width, width))
				const svg = d3.select("#main")
				.style("width", width)
				.style("height", width)
				.style("font", "10px sans-serif");

				const g = svg.append("g")
				.attr("transform", `translate(${width / 2},${width / 2})`);

				const path = g.append("g")
				.selectAll("path")
				.data(root.descendants().slice(1))
				.enter().append("path")
				// .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data.name); }) //original
				//.style('fill', d => color((d.children ? d : d.parent).data.name))
				.style('fill', d => color(d.data.name))

				.attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0)
				.attr("d", d => arc(d.current));

				path.filter(d => d.children)
				.style("cursor", "pointer")
				.on("click", clicked);

				path.append("title")
				.text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

				const label = g.append("g")
				.attr("pointer-events", "none")
				.attr("text-anchor", "middle")
				.style("user-select", "none")
				.selectAll("text")
				.data(root.descendants().slice(1))
				.enter().append("text")
				.attr("dy", "0.35em")
				.attr("fill-opacity", d => +labelVisible(d.current))
				.attr("transform", d => labelTransform(d.current))
				label.append('tspan')
					.text(d => d.data.name.split("\n")[0])
					.attr('x', 0)
					.attr('dx', 0)
					.attr('dy', 0);
				//.text(d => d.data.name.split("\n")[0])
				label.append('tspan')
					.text(d => d.data.name.split("\n")[1])
					.attr('x', 0)
					.attr('dx', 0)
					.attr('dy', 10);
				

				const parent = g.append("circle")
				.datum(root)
				.attr("r", radius)
				.attr("fill", "none")
				.attr("pointer-events", "all")
				.on("click", clicked);

				function clicked(p) {
					parent.datum(p.parent || root);

					root.each(d => d.target = {
						x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
						x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
						y0: Math.max(0, d.y0 - p.depth),
						y1: Math.max(0, d.y1 - p.depth)
					});

					const t = g.transition().duration(750);


					path.transition(t)
					.tween("data", d => {
						const i = d3.interpolate(d.current, d.target);
						return t => d.current = i(t);
					})
					.filter(function(d) {
						return +this.getAttribute("fill-opacity") || arcVisible(d.target);
					})
					.attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
					.attrTween("d", d => () => arc(d.current));

					label.filter(function(d) {
						return +this.getAttribute("fill-opacity") || labelVisible(d.target);
					}).transition(t)
					.attr("fill-opacity", d => +labelVisible(d.target))
					.attrTween("transform", d => () => labelTransform(d.current));
				}

				function arcVisible(d) {
					return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
				}

				function labelVisible(d) {
					//return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;// original
					return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.07; //angepasst auf doppelte Zeilen

				}

				function labelTransform(d) {
					const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
					const y = (d.y0 + d.y1) / 2 * radius;
					return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
				}

				const height = 500; 
				d3.select("#main")
				.attr("width", width)
				.attr("height", height)
				.append("g")
				.attr("transform", "translate(" + width / 2 + "," + (height / 2) + ")");

			});
}

// Part Lukas - Sankey Diagramm 
//###########################################################################################################################################

function draw_sankey(params){
	// Problem: nutzt alte Version von d3: 
	// Lösung: d3v3 manipuliert, anderer Funktionsaufruf
	   
	   console.log(params)
	   params.units ? units = " " + params.units : units = "";
	   
	   //Added Content
	   
	   var margin = {top: 10, right: 10, bottom: 10, left: 10},
									   width = params.width
								   /* width = document.getElementById("inhalt").offsetWidth */
	   
							   var height = params.height
	   
	   
	   //hard code these now but eventually make available
	   var formatNumber = d3v3.format("0,.0f"),    // zero decimal places
		   format = function(d) { return formatNumber(d) + units; },
		   color = d3v3.scale.category20();
	   
	   if(params.labelFormat){
		 formatNumber = d3v3.format(".2%");
	   }
	   
	   /* var svg = d3v3.select('#' + params.id).append("svg")
		   .attr("width", params.width)
		   .attr("height", params.height); */
	   
	   // append the svg canvas to the page
	   var svg = d3v3.select('#' + params.id)
							   .attr("width", width + margin.left + margin.right)
							   .attr("height", height + margin.top + margin.bottom)
							   .append("g")
							   .attr("transform", 
									 "translate(" + margin.left + "," + margin.top + ")");
	   
	   
	   
	   
		   
	   var sankey = d3.sankey()
		   .nodeWidth(params.nodeWidth)
		   .nodePadding(params.nodePadding)
		   .layout(params.layout)
		   .size([params.width,params.height]);
		   
	   var path = sankey.link();
		   
	   var data = params.data,
		   links = [],
		   nodes = [];
		   
	   //get all source and target into nodes
	   //will reduce to unique in the next step
	   //also get links in object form
	   data.source.forEach(function (d, i) {
		   nodes.push({ "name": data.source[i] });
		   nodes.push({ "name": data.target[i] });
		   links.push({ "source": data.source[i], "target": data.target[i], "value": +data.value[i] });
	   }); 
	   
	   //now get nodes based on links data
	   //thanks Mike Bostock https://groups.google.com/d/msg/d3v3-js/pl297cFtIQk/Eso4q_eBu1IJ
	   //this handy little function returns only the distinct / unique nodes
	   nodes = d3v3.keys(d3v3.nest()
					   .key(function (d) { return d.name; })
					   .map(nodes));
	   
	   //it appears d3v3 with force layout wants a numeric source and target
	   //so loop through each link replacing the text with its index from node
	   links.forEach(function (d, i) {
		   links[i].source = nodes.indexOf(links[i].source);
		   links[i].target = nodes.indexOf(links[i].target);
	   });
	   
	   //now loop through each nodes to make nodes an array of objects rather than an array of strings
	   nodes.forEach(function (d, i) {
		   nodes[i] = { "name": d };
	   });
	   
	   sankey
		 .nodes(nodes)
		 .links(links)
		 .layout(params.layout);
		 
	   var link = svg.append("g").selectAll(".link")
		 .data(links)
	   .enter().append("path")
		 .attr("class", "link")
		 .attr("d", path)
		 .style("stroke-width", function (d) { return Math.max(1, d.dy); })
		 .sort(function (a, b) { return b.dy - a.dy; });
	   
	   link.append("title")
		 .text(function (d) { return d.source.name + " → " + d.target.name + "\n" + format(d.value); });
	   
	   var node = svg.append("g").selectAll(".node")
		 .data(nodes)
	   .enter().append("g")
		 .attr("class", "node")
		 .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; })
	   .call(d3v3.behavior.drag()
		 .origin(function (d) { return d; })
		 .on("dragstart", function () { this.parentNode.appendChild(this); })
		 .on("drag", dragmove));
	   
	   node.append("rect")
		 .attr("height", function (d) { return d.dy; })
		 .attr("width", sankey.nodeWidth())
		 .style("fill", function (d) { return d.color = color(d.name.replace(/ .*/, "")); })
		 .style("stroke", function (d) { return d3v3.rgb(d.color).darker(2); })
	   .append("title")
		 .text(function (d) { return d.name + "\n" + format(d.value); });
	   
	   node.append("text")
		 .attr("x", -6)
		 .attr("y", function (d) { return d.dy / 2; })
		 .attr("dy", ".35em")
		 .attr("text-anchor", "end")
		 .attr("transform", null)
		 .text(function (d) { return d.name; })
	   .filter(function (d) { return d.x < params.width / 2; })
		 .attr("x", 6 + sankey.nodeWidth())
		 .attr("text-anchor", "start");
	   
	   
	   
		 // the function for moving the nodes
	   function dragmove(d) {
		   d3v3.select(this).attr("transform", 
			   "translate(" + (
						  d.x = Math.max(0, Math.min(params.width - d.dx, d3v3.event.x))
					   ) + "," + (
						  d.y = Math.max(0, Math.min(params.height - d.dy, d3v3.event.y))
					   ) + ")");
			   sankey.relayout();
			   link.attr("d", path);
		 }
	   // to be specific in case you have more than one chart
	   d3v3.selectAll('#main path.link')
		 .style('stroke', function(d){
		   //here we will use the source color
		   //if you want target then sub target for source
		   //or if you want something other than gray
		   //supply a constant
		   //or use a categorical scale or gradient
		   return d.source.color;
		 })
		//note no changes were made to opacity
		//to do uncomment below but will affect mouseover
		//so will need to define mouseover and mouseout
		//happy to show how to do this also
		// .style('stroke-opacity', .7)

	 
	};



updateData();
