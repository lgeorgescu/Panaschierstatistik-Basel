
function updateData(){

	//Get data for overview
	if(document.getElementById("gesamt").checked) {

			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel");

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
		
	//Get data for CVP
	if(document.getElementById("cvp").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der CVP an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/cvp_links.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
	
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der Parteien an die CVP");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/cvp_rechts.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};
	
	//Get data for EVP
	if(document.getElementById("evp").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der EVP an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/evp_links.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der Parteien an die EVP");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/evp_rechts.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};
	//Get data for FDP
	
	if(document.getElementById("fdp").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der FDP an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/fdp_links.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der Parteien an die FDP");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/fdp_rechts.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};

	//Get data for FUK
	if(document.getElementById("fuk").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der FUK an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/fuk_links.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der Parteien an die FUK");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/fuk_rechts.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};


	//Get data for GB
	if(document.getElementById("gb").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der GB an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/gb_links.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der Parteien an die GB");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/gb_rechts.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};
	//Get data for GLP
	if(document.getElementById("glp").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der GLP an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/glp_links.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der Parteien an die GLP");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/glp_rechts.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};
	//Get data for KL
	if(document.getElementById("kl").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der KL an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/kl_links.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der Parteien an die KL");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/kl_rechts.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};
	//Get data for LDP
	if(document.getElementById("ldp").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der LDP an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/ldp_links.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der Parteien an die LDP");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/ldp_rechts.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};
	//Get data for PB
	if(document.getElementById("pb").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der PB an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/pb_links.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der Parteien an die PB");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/pb_rechts.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};
	//Get data for PP
	if(document.getElementById("pp").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der PP an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/pp_links.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der Parteien an die PP");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/pp_rechts.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};

	//Get data for SP
	if(document.getElementById("sp").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der SP an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/sp_links.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der Parteien an die SP");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/sp_rechts.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};
	
	//Get data for SVP
	if(document.getElementById("svp").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der SVP an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/svp_links.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der Parteien an die SVP");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/svp_rechts.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};
	
	//Get data for VA
	if(document.getElementById("va").selected) {	
		
		if(document.getElementById("links").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der VA an die Parteien");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/va_links.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		
		if(document.getElementById("rechts").selected) {
			d3.select("#header_app").text("Kandidatenstimmen der Parteien an die VA");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Parteien/va_rechts.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};					   
	};
	}
	//Einzelne Parteien fertig

	if(document.getElementById("wahlkreise").checked) {	
		
		d3.select("#header_app").text("Wahlkreise");

		if(document.getElementById("bettingen").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel im Wahlkreis Bettingen");
		};
		
		if(document.getElementById("grossbasel-ost").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel im Wahlkreis Grossbasel Ost");

			if(document.getElementById("eigenePartei").checked){
				var request = new XMLHttpRequest();
				request.open("GET","/data/Wahlkreise/grossbasel-ost.json", false);
				request.send(null);
				var params = JSON.parse(request.responseText);
				}
	
				 if(!document.getElementById("eigenePartei").checked){
					var request = new XMLHttpRequest();
					request.open("GET","/data/Wahlkreise/grossbasel-ost_ohne_eigene.json", false);
					request.send(null);
					var params = JSON.parse(request.responseText);
					}	
		};

		if(document.getElementById("grossbasel-west").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel im Wahlkreis Grossbasel West");
		
			if(document.getElementById("eigenePartei").checked){
				var request = new XMLHttpRequest();
				request.open("GET","/data/Wahlkreise/grossbasel-west.json", false);
				request.send(null);
				var params = JSON.parse(request.responseText);
				}
	
				 if(!document.getElementById("eigenePartei").checked){
					var request = new XMLHttpRequest();
					request.open("GET","/data/Wahlkreise/grossbasel-west_ohne_eigene.json", false);
					request.send(null);
					var params = JSON.parse(request.responseText);
					}			
		};

		if(document.getElementById("kleinbasel").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel im Wahlkreis Kleinbasel");

			if(document.getElementById("eigenePartei").checked){
				var request = new XMLHttpRequest();
				request.open("GET","/data/Wahlkreise/kleinbasel.json", false);
				request.send(null);
				var params = JSON.parse(request.responseText);
				}
	
				 if(!document.getElementById("eigenePartei").checked){
					var request = new XMLHttpRequest();
					request.open("GET","/data/Wahlkreise/kleinbasel_ohne_eigene.json", false);
					request.send(null);
					var params = JSON.parse(request.responseText);
					}			
		};

		if(document.getElementById("riehen").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel im Wahlkreis Riehen");

			if(document.getElementById("eigenePartei").checked){
				var request = new XMLHttpRequest();
				request.open("GET","/data/Wahlkreise/riehen.json", false);
				request.send(null);
				var params = JSON.parse(request.responseText);
				}
	
				if(!document.getElementById("eigenePartei").checked){
					var request = new XMLHttpRequest();
					request.open("GET","/data/Wahlkreise/riehen_ohne_eigene.json", false);
					request.send(null);
					var params = JSON.parse(request.responseText);
					}			
		};
						   
	};
	//Wahlkreise fertig
	
	if(document.getElementById("gewählte").checked) {	
	      

		if(document.getElementById("albietz").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Daniel Albietz (CVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/albietz.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("alioth").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Catherine Alioth (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/alioth.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	


		if(document.getElementById("amacher").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Nicole Amacher (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/amacher.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	

		if(document.getElementById("amiet").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Lorenz Amiet (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/amiet.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	

		if(document.getElementById("auderset").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an André Auderset (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/auderset.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	

		if(document.getElementById("battaglia").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Olivier Battaglia (AB)");
		};	

            
		if(document.getElementById("baumgartner").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Beda Baumgartner (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/baumgartner.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("bernasconi").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Patrizia Bernasconi (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/bernasconi.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("bocherens").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an François Bocherens (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/bocherens.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		 
              
              
		if(document.getElementById("bolliger").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Oliver Bolliger (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/bolliger.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("bothe-wenk").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Sandra Bothe-Wenk (GLP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/bothe-wenk.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("brandenburger").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Jessica Brandenburger (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/brandenburger.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("braun-gallacchi").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Beat Braun-Gallacchi (FDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/braun-gallacchi.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("brigger").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an René Brigger (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/brigger.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("bucher").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Erich Bucher (FDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/bucher.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		
		
		if(document.getElementById("christ").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Tobias Christ (GLP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/christ.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
              
		if(document.getElementById("cuenod").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Tim Cuénod (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/cuenod.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("dill").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Alexandra Dill (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/dill.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("ebi").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Alex Ebi (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/ebi.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("eichner-guth").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Mark Eichner-Guth (FDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/eichner-guth.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("erdogan").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Seyit Erdogan (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/erdogan.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("eymann").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Stephanie Eymann (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/eymann.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("faesch").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Lukas Faesch (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/faesch.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("friedl").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Harald Friedl (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/friedl.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("fuhrer").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Raphael Fuhrer GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/fuhrer.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		//neue
		 
		if(document.getElementById("furlano").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Raoul I. Furlano (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/furlano.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("gallacchi").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel Pasqualine Gallacchi (CVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/gallacchi.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("gander").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Thomas Gander (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/gander.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("gölgeli").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Edibe Gölgeli (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/goelgeli.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("gysin").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Brigitte Gysin (EVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/gysin.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("hablützel-bürki").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Gianna Hablützel-Bürki (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/habluetzel-buerki.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("hanauer").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Raffaela Hanauer (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/hanauer.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("hazenkamp-vonArx").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Marianne Hazenkamp-von Arx (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/hazenkamp-vonArx.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("heer").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Barbara Heer (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/heer.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("herter").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Balz Herter (CVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/herter.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("hettich").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Daniel Hettich (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/hettich.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("hochuli").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Christoph Hochuli (EVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/hochuli.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("hofer").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Salome Hofer (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/hofer.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("hoppler").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Laurin Hoppler (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/hoppler.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("hug").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Michael Hug (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/hug.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("isler").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Beatrice Isler (CVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/isler.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("isler-christ").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Lydia Isler-Christ (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/isler-christ.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("jenny").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an David Jenny (FDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/jenny.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("kabakci").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Mahir Kabakci (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/kabakci.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("kaufmann").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Danielle Kaufmann (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/kaufmann.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("keller").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Esther Keller (GLP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/keller.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("knellwolf").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Andrea Knellwolf (CVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/knellwolf.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("kölliker").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Sebastian Kölliker (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/koelliker.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("krummenacher").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Toya Krummenacher (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/krummenacher.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("kühne").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Brigitte Kühne (GLP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/kuehne.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("lachenmeier").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Michelle Lachenmeier (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/lachenmeier.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("leonhardt").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Franz-Xaver Leonhardt (CVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/leonhardt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("leuthardt").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Beat Leuthardt (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/leuthardt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("mathys").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Lisa Mathysa (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/mathys.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("mazzotti").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Sasha Mazzotti (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/mazzotti.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("messerli_b").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Beatrice Messerli (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/messerli_b.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("messerli_p").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Pascal Messerli (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/messerli_p.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("miozzari").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Claudio Miozzari (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/miozzari.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("mück").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Heidi Mück (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/mueck.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("müry").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Thomas Müry (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/muery.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("nussbaumer").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Melanie Nussbaumer (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/nussbaumer.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("pekerman").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Bülent Pekerman (GLP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/pekerman.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("perret").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Jean-Luc Perret (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/perret.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("pfister").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Pascal Pfister (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/pfister.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("rechsteiner").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Niggi Daniel Rechsteiner (GLP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/rechsteiner.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("roth").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Franziska Roth(SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/roth.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("sartorius-brüschweiler").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Karin Sartorius-Brüschweiler (FDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/sartorius-brueschweiler.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("schaller").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Beat K. Schaller (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/schaller.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("schweizer-hoffmann").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Jenny Schweizer-Hoffmann (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/schweizer-hoffmann.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("seggiani").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Michela Seggiani (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/seggiani.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("sieber").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Johannes Sieber (GLP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/sieber.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("sigirci").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Mehmet Sigirci (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/sigirci.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("stalder").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Roger Stalder (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/stalder.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("stephenson").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Jeremy Stephenson (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/stephenson.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("stöcklin").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Jürg Stöcklin (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/stoecklin.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("strahm").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Andrea Elisabeth Strahm (CVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/strahm.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("strahm-lavanchy").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Nicole Strahm-Lavanchy (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/strahm-lavanchy.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("stumpf").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Daniela Stumpf (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/stumpf.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("suter_s").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Stefan Suter (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/suter_s.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("sutter_k").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Kaspar Sutter (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/sutter_k.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("thiriet").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Jérôme Thiriet (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/thiriet.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("thommen").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Oliver Thommen (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/thommen.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("thüring").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Joël Thüring (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/thuering.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("trachsel").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an David Trachsel (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/trachsel.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("urgese").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Luca Urgese (FDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/urgese.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("vergeat").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Jo Vergeat (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/vergeat.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("von_falkenstein").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an  Annina von Falkenstein (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/von_falkenstein.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("von_wartburg").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Christian von Wartburg (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/von_wartburg.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("weber").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Eric Weber (VA)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/weber.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("wehrli").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Felix Wehrli (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/wehrli.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("weibel").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Fleur Weibel (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/weibel.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("wenk").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Kerstin Wenk (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/wenk.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("widmer-huber").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Thomas Widmer-Huber (EVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/widmer-huber.json", false); 
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("wirz").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Lea Wirz (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/wirz.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("wittlin").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Stefan Wittlin (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/wittlin.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("wüest-rudin").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an David Wüest-Rudin (GLP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/wueest-rudin.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("wyss").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Sarah Wyss (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/wyss.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("yilmaz").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Semseddin Yilmaz (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/yilmaz.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("zappala").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Andreas Zappalà (FDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/zappala.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("zürcher").selected) {
			d3.select("#header_app").text("Kandidatenstimmen veränderter Wahlzettel an Tonja Zürcher (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewahlte/zuercher.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

				   
	}
	//Gewählte fertig

	var tmp = d3.select("#main");
	tmp.selectAll("*").remove();
	var tmp_2 = d3.select('#Sankey-Chart')
	tmp_2.selectAll("*").remove();
	
	

	if(document.getElementById("gesamt").checked){
		document.getElementById("parteiliste").style.display="none";
		document.getElementById("achsen").style.display="none";
		document.getElementById("wahlkreisliste").style.display="none";
		document.getElementById("gewähltenliste").style.display="none";
		document.getElementById("parteiIntern").style.display="revert";
	}
	
	if(document.getElementById("einzelne_parteien").checked){
		document.getElementById("parteiliste").style.display="revert";
		document.getElementById("achsen").style.display="revert";
		document.getElementById("wahlkreisliste").style.display="none";
		document.getElementById("gewähltenliste").style.display="none";
		document.getElementById("parteiIntern").style.display="none";
	}

	if(document.getElementById("wahlkreise").checked){
		document.getElementById("parteiliste").style.display="none";
		document.getElementById("achsen").style.display="none";
		document.getElementById("wahlkreisliste").style.display="revert";
		document.getElementById("gewähltenliste").style.display="none";
		document.getElementById("parteiIntern").style.display="revert";
	}
	if(document.getElementById("gewählte").checked){
		document.getElementById("parteiliste").style.display="none";
		document.getElementById("achsen").style.display="none";
		document.getElementById("wahlkreisliste").style.display="none";
		document.getElementById("gewähltenliste").style.display="revert";
		document.getElementById("parteiIntern").style.display="none";
	}

	document.getElementById("keineStimmenErhalten").style.display="none";
	if ((document.getElementById("battaglia").selected && document.getElementById("gewählte").checked) || 
		(document.getElementById("bettingen").selected && document.getElementById("wahlkreise").checked)) {
		document.getElementById("keineStimmenErhalten").style.display="revert";
		document.getElementById("parteiIntern").style.display="none";				
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
		 .style("fill", function(d) {
		//SVP
		 if ((d.name==" SVP")||(d.name=="SVP")||(d.name=="Amiet, Lorenz")||(d.name=="Hablützel-Bürki, Gianna")
		 ||(d.name=="Messerli, Pascal")||(d.name=="Schaller, Beat K.")||(d.name=="Schweizer-Hoffmann, Jenny")
		 ||(d.name=="Stalder, Roger")||(d.name=="Stumpf, Daniela")||(d.name=="Suter, Stefan")||(d.name=="Thüring, Joël")
		 ||(d.name=="Trachsel, David")||(d.name=="Wehrli, Felix")
		 ) return d.color="#088404"; 
		 //SP
		 else if ((d.name==" SP")||(d.name=="SP")||(d.name=="Baumgartner, Beda")||(d.name=="Amacher, Nicole")
		 ||(d.name=="Brandenburger, Jessica")||(d.name=="Brigger, René")||(d.name=="Cuénod, Tim")
		 ||(d.name=="Dill, Alexandra")||(d.name=="Erdogan, Seyit")||(d.name=="Gander, Thomas")||(d.name=="Gölgeli, Edibe")
		 ||(d.name=="Heer, Barbara")||(d.name=="Hofer, Salome")||(d.name=="Kabakci, Mahir")||(d.name=="Kaufmann, Danielle")
		 ||(d.name=="Kölliker, Sebastian")||(d.name=="Krummenacher, Toya")||(d.name=="Mathys, Lisa")||(d.name=="Mazzotti, Sasha")
		 ||(d.name=="Miozzari, Claudio")||(d.name=="Nussbaumer, Melanie")||(d.name=="Perret, Jean-Luc")||(d.name=="Pfister, Pascal")
		 ||(d.name=="Roth, Franziska")||(d.name=="Seggiani, Michela")||(d.name=="Sigirci, Mehmet")||(d.name=="Sutter, Kaspar")
		 ||(d.name=="von Wartburg, Christian")||(d.name=="Wenk, Kerstin")||(d.name=="Wittlin, Stefan")||(d.name=="Wyss, Sarah")
		 ||(d.name=="Yilmaz, Semseddin")
		 ) return d.color="#ff0404"; 
		 //FDP
		 else if ((d.name==" FDP")||(d.name=="FDP")||(d.name=="Braun-Gallacchi,	Beat")||(d.name=="Bucher, Erich")
		 ||(d.name=="Eichner-Guth, Mark")||(d.name=="Jenny, David")||(d.name=="Sartorios-Brüschweiler, Karin")
		 ||(d.name=="Urgese, Luca")||(d.name=="Zappalà,	Andreas")
		 ) return d.color="#3864fc"; 
		 //LDP
		 else if ((d.name==" LDP")||(d.name=="LDP")||(d.name=="Alioth, Catherine")||(d.name=="Auderset, André")
		 ||(d.name=="Bocherens, François")||(d.name=="Ebi, Alex")||(d.name=="Eymann, Stephanie")||(d.name=="Faesch, Lukas")
		 ||(d.name=="Furlano, Raoul I.")||(d.name=="Hettich, Daniel")||(d.name=="Hug, Michael")||(d.name=="Müry, Thomas")
		 ||(d.name=="Isler-Christ, Lydia")||(d.name=="Stephenson, Jeremy")||(d.name=="Strahm-Lavanchy, Nicole")
		 ||(d.name=="von Falkenstein, Annina")
		 ) return d.color="#38349c"; 
		 //GLP
		 else if ((d.name==" GLP")||(d.name=="GLP")||(d.name=="Bothe-Wenk, Sandra")||(d.name=="Christ, Tobias")
		 ||(d.name=="Keller, Esther")||(d.name=="Kühne, Brigitte")||(d.name=="Pekerman, Bülent")||(d.name=="Rechsteiner, Niggi Daniel")
		 ||(d.name=="Sieber, Johannes")||(d.name=="Wüest-Rudin, David")
		 ) return d.color="#d8fc5c"; 
		 //GB
		 else if ((d.name==" GB")||(d.name=="GB")||(d.name=="Bernasconi, Patrizia")||(d.name=="Bolliger, Oliver")
		 ||(d.name=="Friedl, Harald")||(d.name=="Fuhrer, Raphael")||(d.name=="Hanauer, Raffaela")
		 ||(d.name=="Hazenkamp-von Arx, Marianne")||(d.name=="Hoppler, Laurin")||(d.name=="Lachenmeier, Michelle")
		 ||(d.name=="Leuthardt, Beat")||(d.name=="Messerli, Beatrice")||(d.name=="Mück, Heidi")||(d.name=="Stöcklin, Jürg")
		 ||(d.name=="Thiriet, Jérôme")||(d.name=="Thommen, Oliver")||(d.name=="Vergeat, Jo")||(d.name=="Weibel, Fleur")
		 ||(d.name=="Wirz, Lea")||(d.name=="Zürcher, Tonja")
		 ) return d.color="#08b454";
		 //KL
		 else if ((d.name==" KL")||(d.name=="KL")) return d.color="#ce2029";
		 //PP
		 else if ((d.name==" PP")||(d.name=="PP")) return d.color="#48145c";
		 //PB
		 else if ((d.name==" PB")||(d.name=="PB")) return d.color="#00c0ff";
		 //VA
		 else if ((d.name==" VA")||(d.name=="VA")||(d.name=="Weber, Eric")) return d.color="#c894cc";
		 //EVP
		 else if ((d.name==" EVP")||(d.name=="EVP")||(d.name=="Gysin, Brigitte")
		 ||(d.name=="Hochuli, Christoph")||(d.name=="Widmer-Huber, Thomas")
		 ) return d.color="#fffc04";
		 //CVP
		 else if ((d.name==" CVP")||(d.name=="CVP")||(d.name=="Albietz, Daniel")||(d.name=="Gallacchi, Pasqualine")
		 ||(d.name=="Herter, Balz")||(d.name=="Isler, Beatrice")||(d.name=="Knellwolf, Andrea")||(d.name=="Leonhardt, Franz-Xaver")
		 ||(d.name=="Strahm, Andrea Elisabeth")
		 ) return d.color="#f89444";
		 //FUK
		 else if ((d.name==" FUK")||(d.name=="FUK")) return d.color="#e0115f";
		 else if ((d.name=="Ohne")) return d.color="grey";
		 else return d.color=color(d.name.replace(/ .*/, "")) 
		})//function (d) { return d.color = color(d.name.replace(/ .*/, "")); }
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

	   //Change color of the links: Maybe we can make this into a transgression
	   d3v3.selectAll('#main path.link')
		 .style('stroke', function(d){
		   return d.source.color;
		   })
	};

updateData();
