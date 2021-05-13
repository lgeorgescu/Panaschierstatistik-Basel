
function updateData(){

	//Get data for overview
	if(document.getElementById("gesamt").checked) {

			d3.select("#header_app").text("Stimmen veränderter Wahlzettel");

			if(document.getElementById("eigenePartei").checked){
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
			}

			if(!document.getElementById("eigenePartei").checked){
				var request = new XMLHttpRequest();
				request.open("GET","/data/Gesamt/gesamt_ohne_eigene.json", false);
				request.send(null);
				var params = JSON.parse(request.responseText);
				}			
	};

	if (document.getElementById("einzelne_parteien").checked){
	//Get data for FDP
	if(document.getElementById("fdp").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Stimmen der FDP an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Stimmen der Parteien an die FDP");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};

	//Get data for SVP
	if(document.getElementById("svp").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Stimmen der SVP an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Stimmen der Parteien an die SVP");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};


	//Get data for GLP
	if(document.getElementById("glp").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Stimmen der GLP an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Stimmen der Parteien an die GLP");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};

	//Get data for EVP
	if(document.getElementById("evp").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Stimmen der EVP an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Stimmen der Parteien an die EVP");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};

	//Get data for LDP
	if(document.getElementById("ldp").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Stimmen der LDP an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Stimmen der Parteien an die LDP");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};

	//Get data for LDP
	if(document.getElementById("cvp").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Stimmen der CVP an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Stimmen der Parteien an die CVP");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};

	//Get data for GD
	if(document.getElementById("gd").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Stimmen der GD an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Stimmen der Parteien an die GD");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};

	//Get data for SP
	if(document.getElementById("sp").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Stimmen der SP an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Stimmen der Parteien an die SP");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gesamt/gesamt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};
	}
	//Einzelne Parteien fertig

	if(document.getElementById("wahlkreise").checked) {	
		
		d3.select("#header_app").text("Wahlkreise");
						   
	};
	//Wahlkreise fertig

	if(document.getElementById("gewählte").checked) {	


		if(document.getElementById("albietz").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Daniel Albietz");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/albietz.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("alioth").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Catherine Alioth");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/alioth.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	


		if(document.getElementById("amacher").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Nicole Amacher");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/amacher.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	

		if(document.getElementById("amiet").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Lorenz Amiet");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/amiet.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	

		if(document.getElementById("auderset").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an André Auderset");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/auderset.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	

		if(document.getElementById("battaglia").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Olivier Battaglia");
		};	

		if(document.getElementById("baumgartner").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Beda Baumgartner");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/baumgartner.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("bernasconi").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Patrizia Bernasconi");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/bernasconi.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("bocherens").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an François Bocherens");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/bocherens.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("bolliger").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Oliver Bolliger");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/bolliger.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("bothe-wenk").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Sandra Bothe-Wenk");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/bothe-wenk.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("brandenburger").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Jessica Brandenburger");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/brandenburger.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("braun-gallacchi").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Beat Braun-Gallacchi");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/braun-gallacchi.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("brigger").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an René Brigger");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/brigger.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("bucher").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Erich Bucher");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/bucher.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		
		
		if(document.getElementById("christ").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Tobias Christ");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/christ.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("cuenod").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Tim Cuénod");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/cuenod.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("dill").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Alexandra Dill");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/dill.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("ebi").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Alex Ebi");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/ebi.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("eichner-guth").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Mark Eichner-Guth");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/eichner-guth.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("erdogan").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Seyit Erdogan");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/erdogan.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("eymann").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Stephanie Eymann");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/eymann.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("faesch").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Lukas Faesch");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/faesch.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("friedl").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Harald Friedl");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/friedl.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("fuhrer").selected) {
			d3.select("#header_app").text("Veränderte Stimmen an Raphael Fuhrer");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/fuhrer.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};		
				   
	}
	//Gewählte fertig

	var tmp = d3.select("#main");
	tmp.selectAll("*").remove();
	var tmp_2 = d3.select('#Sankey-Chart')
	tmp_2.selectAll("*").remove();
	
	document.getElementById("battagliatext").style.visibility="hidden";
	if (document.getElementById("battaglia").selected) {document.getElementById("battagliatext").style.visibility="visible";}

	if(document.getElementById("gesamt").checked){
		document.getElementById("parteiliste").style.visibility="hidden";
		document.getElementById("achsen").style.visibility="hidden";
		document.getElementById("wahlkreisliste").style.visibility="hidden";
		document.getElementById("gewähltenliste").style.visibility="hidden";
		document.getElementById("parteiIntern").style.visibility="visible";
	}
	
	if(document.getElementById("einzelne_parteien").checked){
		document.getElementById("parteiliste").style.visibility="visible";
		document.getElementById("achsen").style.visibility="visible";
		document.getElementById("wahlkreisliste").style.visibility="hidden";
		document.getElementById("gewähltenliste").style.visibility="hidden";
		document.getElementById("parteiIntern").style.visibility="visible";
	}

	if(document.getElementById("wahlkreise").checked){
		document.getElementById("parteiliste").style.visibility="hidden";
		document.getElementById("achsen").style.visibility="hidden";
		document.getElementById("wahlkreisliste").style.visibility="visible";
		document.getElementById("gewähltenliste").style.visibility="hidden";
		document.getElementById("parteiIntern").style.visibility="visible";
	}
	if(document.getElementById("gewählte").checked){
		document.getElementById("parteiliste").style.visibility="hidden";
		document.getElementById("achsen").style.visibility="hidden";
		document.getElementById("wahlkreisliste").style.visibility="hidden";
		document.getElementById("gewähltenliste").style.visibility="visible";
		document.getElementById("parteiIntern").style.visibility="hidden";
	}



	draw_sankey(params);
}

//###############################################

function draw_sankey(params){
	
	// Problem: nutzt alte Version von d3: 
	// Lösung: d3v3 manipuliert, anderer Funktionsaufruf
	   
	   console.log(params)
	   params.units ? units = " " + params.units : units = "";
	   
	   
	   
	   var margin = {top: 10, right: 10, bottom: 10, left: 10},
									   width = params.width
								  	   
							   var height = params.height
	   
	   
	   //hard code these now but eventually make available
	   var formatNumber = d3v3.format("0,.0f"),    // zero decimal places
		   format = function(d) { return formatNumber(d) + units; },   
		   color = d3v3.scale.category10();
	   
	   if(params.labelFormat){
		 formatNumber = d3v3.format(".2%");
	   }
	   
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
	   //thanks Mike Bostock 
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
		 

		 //links
	   var link = svg.append("g").selectAll(".link")
		 .data(links)
	   .enter().append("path")
		 .attr("class", "link")
		 .attr("d", path)
		 .style("stroke-width", function (d) { return Math.max(1, d.dy); })
		 .sort(function (a, b) { return b.dy - a.dy; });
	   
		 //titel
	   link.append("title")
		 .text(function (d) { return d.source.name + " → " + d.target.name + "\n" + format(d.value); });
		   
		 //nodes
	   var node = svg.append("g").selectAll(".node")
		 .data(nodes)
	   .enter().append("g")
		 .attr("class", "node")
		 .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; })
	   .call(d3v3.behavior.drag()
		 .origin(function (d) { return d; })
		 .on("dragstart", function () { this.parentNode.appendChild(this); })
		 .on("drag", dragmove));
	   
	   	//rectangles on nodes
	   node.append("rect")
		 .attr("height", function (d) { return d.dy; })
		 .attr("width", sankey.nodeWidth())
		 .style("fill", function (d) { return d.color = color(d.name.replace(/ .*/, "")); })
		 		 .style("stroke", function (d) { return d3v3.rgb(d.color).darker(2); })
	   .append("title")
		 .text(function (d) { return d.name + "\n" + format(d.value); });
	   
	   	//title for nodes
	   node.append("text")
		 .attr("class", "font-weight-bold")
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

	   //Change color of the links
	   d3v3.selectAll('#main path.link')
		 .style('stroke', function(d){
		   return d.source.color;
		   })
	};

updateData();
