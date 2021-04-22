//source : https://jsfiddle.net/qo1vwL6k/1/
function updateData(){

	//Get Data from 2015
	if(document.getElementById("jahr_2015").checked) {
		var path_data = "data/json_data_2015.json"
		d3.select("#header_app")
			.text("Direktzahlungen Jahr 2015");
			
		//Get Data for Sankey Version 1
		if(document.getElementById("V1").checked) {
			
			var request = new XMLHttpRequest();
			request.open("GET","/data/Sankey/2015V1.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		//Get Data for Sankey Version 2
		if(document.getElementById("V2").checked) {
			
			var request = new XMLHttpRequest();
			request.open("GET","/data/Sankey/2015V2.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};

	//Get Data from 2016
	if(document.getElementById("jahr_2016").checked) {
		var path_data = "data/json_data_2016.json"
		d3.select("#header_app")
		.text("Direktzahlungen Jahr 2016");

		//Get Data for Sankey Version 1
		if(document.getElementById("V1").checked) {
			
			var request = new XMLHttpRequest();
			request.open("GET","/data/Sankey/2016V1.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		//Get Data for Sankey Version 2
		if(document.getElementById("V2").checked) {
		
			var request = new XMLHttpRequest();
			request.open("GET","/data/Sankey/2016V2.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};		
	};

	//Get Data from 2017
	if(document.getElementById("jahr_2017").checked) {
		var path_data = "data/json_data_2017.json"
		d3.select("#header_app")
		.text("Direktzahlungen Jahr 2017");
		
		//Get Data for Sankey Version 1
		if(document.getElementById("V1").checked) {
			
			var request = new XMLHttpRequest();
			request.open("GET","/data/Sankey/2017V1.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		//Get Data for Sankey Version 2
		if(document.getElementById("V2").checked) {
		
			var request = new XMLHttpRequest();
			request.open("GET","/data/Sankey/2017V2.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
	};

	//Get Data from 2018
	if(document.getElementById("jahr_2018").checked) {
		var path_data = "data/json_data_2018.json"
		d3.select("#header_app")
		.text("Direktzahlungen Jahr 2018");
		
		//Get Data for Sankey Version 1
		if(document.getElementById("V1").checked) {
			
			var request = new XMLHttpRequest();
			request.open("GET","/data/Sankey/2018V1.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		//Get Data for Sankey Version 2
		if(document.getElementById("V2").checked) {
		
			var request = new XMLHttpRequest();
			request.open("GET","/data/Sankey/2018V2.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
	};

	//Get Data from 2019
	if(document.getElementById("jahr_2019").checked) {
		var path_data = "data/json_data_2019.json"
		d3.select("#header_app")
		.text("Direktzahlungen Jahr 2019");

		//Get Data for Sankey Version 1
		if(document.getElementById("V1").checked) {
			
			var request = new XMLHttpRequest();
			request.open("GET","/data/Sankey/2019V1.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		//Get Data for Sankey Version 2
		if(document.getElementById("V2").checked) {
		
			var request = new XMLHttpRequest();
			request.open("GET","/data/Sankey/2019V2.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};		
	};

	var tmp = d3.select("#main");
	tmp.selectAll("*").remove();
	var tmp_2 = d3.select('#Sankey-Chart')
	tmp_2.selectAll("*").remove();
	if(document.getElementById("sunburst").checked) {
		draw_sunburst(path_data)
		document.getElementById("sanky_input").style.visibility="hidden"; // Hide extra Button for Sankey
	}
	if(document.getElementById("sankey").checked) {
		draw_sankey(params);
		document.getElementById("sanky_input").style.visibility="visible"; // Show extra Button for Sankey
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
				var color_1 = d3.scaleOrdinal(d3.quantize(d3.interpolateSpectral, data.children.length + 1))
				var color_2 = d3.scaleOrdinal(d3.quantize(d3.interpolateBlues, data.children.length + 1))
				
				var colors; 
				var color = function (d) {
					//console.log(d.depth)
					if (d.depth ==1){
						if (d.data.name.includes('bio')){
							return "#006d2c"
						}else {
							return "#08519c"
						}
					}
					if (d.depth == 2){
						if (d.parent.children[0].parent.data.name.includes('bio')){
							return "#2ca25f"
						}else{
							return "#3182bd"
						}
						
					}
					if (d.depth ==3){
						if (d.data.name.includes('ZH')){
							return "#1F8CCD"
						}else if (d.data.name.includes('BE')){
							return "#E7423F"
						} else if (d.data.name.includes('LU')){
							return "#248BCC"
						} else if (d.data.name.includes('UR')){
							return "#FFD72E"
						} else if (d.data.name.includes('SZ')){
							return "#f03b20"
						} else if (d.data.name.includes('OW')){
							return "#fee5d9"
						} else if (d.data.name.includes('NW')){
							return "#de2d26"
						} else if (d.data.name.includes('GL')){
							return "#fb6a4a"
						} else if (d.data.name.includes('ZG')){
							return "#268BCC"
						} else if (d.data.name.includes('FR')){
							return "#000000"
						} else if (d.data.name.includes('SO')){
							return "#d53e4f"
						} else if (d.data.name.includes('BS')){
							return "#eff3ff"
						} else if (d.data.name.includes('BL')){
							return "#B5312E"
						} else if (d.data.name.includes('SH')){
							return "#FFD72E"
						} else if (d.data.name.includes('AR')){
							return "#f6eff7"
						} else if (d.data.name.includes('AI')){
							return "#d0d1e6"
						} else if (d.data.name.includes('SG')){
							return "#009A30"
						} else if (d.data.name.includes('GR')){
							return "#fec44f"
						} else if (d.data.name.includes('AG')){
							return "#248BCC"
						} else if (d.data.name.includes('TG')){
							return "#fe9929"
						} else if (d.data.name.includes('TI')){
							return "#218CCD"
						} else if (d.data.name.includes('VD')){
							return "#78c679"
						} else if (d.data.name.includes('VS')){
							return "#BF3C3A"
						} else if (d.data.name.includes('NE')){
							return "#16A74E"
						} else if (d.data.name.includes('GE')){
							return "#BF9D27"
						} else if (d.data.name.includes('JU')){
							return "#E8423F"
						}
					}
					if (d.depth == 4){
						if (d.data.name.includes('Tal')){
							return "#C1E8B0"
						} else{
							return "#D3E2E8"
						}
					}
					if (d.depth == 5){
						if (d.data.name.includes('Verso')){
							return "#d53e4f"
						} else if (d.data.name.includes('Kult')){
							return "#fc8d59"
						} else if (d.data.name.includes('Bio')){
							return "#e6f598"
						} else if (d.data.name.includes('Prod')){
							return "#fee08b"
						} else if (d.data.name.includes('Land')){
							return "#99d594"
						} else if (d.data.name.includes('Res')){
							return "#3288bd"
						} 
					}
					
				};
				
				
				//const color = d3.scaleOrdinal(lightGreenFirstPalette);
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
				//.style("fill", d =>  (d.data.name.includes('bio')) ? color_1(d.data.name)  : color_2(d.data.name)) //original
				//.style('fill', d => color((d.children ? d : d.parent).data.name))
				//.style('fill', d => color(d)) //aktuell
				
				.style('fill', function (d) { 
					return color(d)
				})
				


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
