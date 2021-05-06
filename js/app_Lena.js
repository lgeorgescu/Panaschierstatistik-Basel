//source : https://jsfiddle.net/qo1vwL6k/1/
function updateData(){
	//Get Data for FDP
	if(document.getElementById("fdp").selected) {	
		
		if(document.getElementById("abfluss").checked) {
			d3.select("#header_app").text("Stimmen der FDP an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Sankey/2015V1.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("zufluss").checked) {
			d3.select("#header_app").text("Stimmen der Parteien an die FDP");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Sankey/2015V2.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};

	
	var tmp = d3.select("#main");
	tmp.selectAll("*").remove();
	var tmp_2 = d3.select('#Sankey-Chart')
	tmp_2.selectAll("*").remove();
	
	if(document.getElementById("gesamt").checked){
		document.getElementById("parteiliste").style.visibility="hidden";
	}
	if(!document.getElementById("gesamt").checked){
		document.getElementById("parteiliste").style.visibility="visible";
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