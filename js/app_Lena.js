
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
	/*
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
	}*/
	//Einzelne Parteien fertig

	if(document.getElementById("wahlkreise").checked) {	
		
		d3.select("#header_app").text("Wahlkreise");

		if(document.getElementById("bettingen").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel im Wahlkreis Bettingen");
		};

		if(document.getElementById("grossbasel-ost").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel im Wahlkreis Grossbasel Ost");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/grossbasel-ost.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("grossbasel-west").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel im Wahlkreis Grossbasel West");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/grossbasel-west.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("kleinbasel").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel im Wahlkreis Kleinbasel");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/kleinbasel.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("riehen").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel im Wahlkreis Riehen");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/riehen.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
						   
	};
	//Wahlkreise fertig
	
	if(document.getElementById("gewählte").checked) {	
	      

		if(document.getElementById("albietz").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Daniel Albietz (CVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/albietz.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("alioth").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Catherine Alioth (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/alioth.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	


		if(document.getElementById("amacher").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Nicole Amacher (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/amacher.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	

		if(document.getElementById("amiet").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Lorenz Amiet (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/amiet.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	

		if(document.getElementById("auderset").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an André Auderset (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/auderset.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	

		if(document.getElementById("battaglia").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Olivier Battaglia (AB)");
		};	

            
		if(document.getElementById("baumgartner").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Beda Baumgartner (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/baumgartner.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("bernasconi").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Patrizia Bernasconi (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/bernasconi.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("bocherens").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an François Bocherens (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/bocherens.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		 
              
              
		if(document.getElementById("bolliger").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Oliver Bolliger (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/bolliger.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("bothe-wenk").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Sandra Bothe-Wenk (GLP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/bothe-wenk.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("brandenburger").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Jessica Brandenburger (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/brandenburger.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("braun-gallacchi").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Beat Braun-Gallacchi (FDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/braun-gallacchi.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("brigger").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an René Brigger (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/brigger.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("bucher").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Erich Bucher (FDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/bucher.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		
		
		if(document.getElementById("christ").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Tobias Christ (GLP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/christ.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
              
		if(document.getElementById("cuenod").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Tim Cuénod (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/cuenod.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("dill").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Alexandra Dill (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/dill.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("ebi").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Alex Ebi (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/ebi.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("eichner-guth").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Mark Eichner-Guth (FDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/eichner-guth.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("erdogan").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Seyit Erdogan (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/erdogan.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("eymann").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Stephanie Eymann (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/eymann.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("faesch").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Lukas Faesch (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/faesch.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};

		if(document.getElementById("friedl").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Harald Friedl (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/friedl.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("fuhrer").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Raphael Fuhrer GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/fuhrer.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		//neue
		 
		if(document.getElementById("furlano").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Raoul I. Furlano (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/furlano.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("gallacchi").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel Pasqualine Gallacchi (CVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/gallacchi.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("gander").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Thomas Gander (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/gander.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("gölgeli").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Edibe Gölgeli (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/gölgeli.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("gysin").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Brigitte Gysin (EVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/gysin.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("hablützel-bürki").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Gianna Hablützel-Bürki (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/hablützel-bürki.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("hanauer").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Raffaela Hanauer (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/hanauer.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("hazenkamp-vonArx").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Marianne Hazenkamp-von Arx (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/hazenkamp-vonArx.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("heer").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Barbara Heer (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/heer.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("herter").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Balz Herter (CVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/herter.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("hettich").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Daniel Hettich (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/hettich.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};	
		if(document.getElementById("hochuli").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Christoph Hochuli (EVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/hochuli.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("hofer").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Salome Hofer (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/hofer.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("hoppler").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Laurin Hoppler (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/hoppler.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("hug").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Michael Hug (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/hug.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("isler").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Beatrice Isler (CVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/isler.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("isler-christ").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Lydia Isler-Christ (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/isler-christ.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("jenny").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an David Jenny (FDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/jenny.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("kabakci").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Mahir Kabakci (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/kabakci.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("kaufmann").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Danielle Kaufmann (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/kaufmann.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("keller").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Esther Keller (GLP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/keller.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("knellwolf").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Andrea Knellwolf (CVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/knellwolf.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("kölliker").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Sebastian Kölliker (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/kölliker.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("krummenacher").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Toya Krummenacher (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/krummenacher.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("kühne").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Brigitte Kühne (GLP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/kühne.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("lachenmeier").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Michelle Lachenmeier (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/lachenmeier.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("leonhardt").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Franz-Xaver Leonhardt (CVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/leonhardt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("leuthardt").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Beat Leuthardt (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/leuthardt.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("mathys").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Lisa Mathysa (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/mathys.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("mazzotti").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Sasha Mazzotti (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/mazzotti.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("messerli_b").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Beatrice Messerli (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/messerli_b.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("messerli_p").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Pascal Messerli (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/messerli_p.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("miozzari").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Claudio Miozzari (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/miozzari.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("mück").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Heidi Mück (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/mück.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("müry").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Thomas Müry (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/müry.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("nussbaumer").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Melanie Nussbaumer (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/nussbaumer.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("pekerman").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Bülent Pekerman (GLP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/pekerman.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("perret").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Jean-Luc Perret (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/perret.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("pfister").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Pascal Pfister (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/pfister.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("rechsteiner").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Niggi Daniel Rechsteiner (GLP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/rechsteiner.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("roth").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Franziska Roth(SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/roth.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("sartorius-brüschweiler").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Karin Sartorius-Brüschweiler (FDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/sartorius-brüschweiler.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("schaller").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Beat K. Schaller (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/schaller.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("schweizer-hoffmann").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Jenny Schweizer-Hoffmann (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/schweizer-hoffmann.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("seggiani").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Michela Seggiani (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/seggiani.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("sieber").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Johannes Sieber (GLP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/sieber.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("sigirci").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Mehmet Sigirci (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/sigirci.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("stalder").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Roger Stalder (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/stalder.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("stephenson").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Jeremy Stephenson (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/stephenson.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("stöcklin").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Jürg Stöcklin (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/stöcklin.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("strahm").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Andrea Elisabeth Strahm (CVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/strahm.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("strahm-lavanchy").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Nicole Strahm-Lavanchy (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/strahm-lavanchy.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("stumpf").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Daniela Stumpf (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/stumpf.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("suter_s").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Stefan Suter (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/suter_s.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("sutter_k").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Kaspar Sutter (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/sutter_k.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("thiriet").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Jérôme Thiriet (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/thiriet.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("thommen").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Oliver Thommen (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/thommen.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("thüring").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Joël Thüring (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/thüring.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("trachsel").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an David Trachsel (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/trachsel.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("urgese").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Luca Urgese (FDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/urgese.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("vergeat").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Jo Vergeat (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/vergeat.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("von_falkenstein").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an  Annina von Falkenstein (LDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/von_falkenstein.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("von_wartburg").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Christian von Wartburg (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/von_wartburg.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("weber").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Eric Weber (VA)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/weber.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("wehrli").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Felix Wehrli (SVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/wehrli.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("weibel").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Fleur Weibel (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/weibel.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("wenk").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Kerstin Wenk (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/wenk.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("widmer-huber").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Thomas Widmer-Huber (EVP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/widmer-huber.json", false); 
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		
		if(document.getElementById("wirz").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Lea Wirz (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/wirz.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("wittlin").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Stefan Wittlin (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/wittlin.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("wüest-rudin").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an David Wüest-Rudin (GLP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/wüest-rudin.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("wyss").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Sarah Wyss (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/wyss.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("yilmaz").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Semseddin Yilmaz (SP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/yilmaz.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("zappala").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Andreas Zappalà (FDP)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/zappala.json", false);
			request.send(null);
			var params = JSON.parse(request.responseText);
		};
		if(document.getElementById("zürcher").selected) {
			d3.select("#header_app").text("Stimmen veränderter Wahlzettel an Tonja Zürcher (GB)");
			var request = new XMLHttpRequest();
			request.open("GET","/data/Gewählte/zürcher.json", false);
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
		document.getElementById("parteiIntern").style.display="revert";
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
