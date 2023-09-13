function getJavacoreSummaryOutline(contents) {
	//window.alert(title + " started.");
	var outline = [];
	var lines = contents.split(/\r?\n/);
	var line;
	var i;
		
	//get javacore file name first
	for (i=0; i < lines.length; i++) {
		line = lines[i];
		if (/1TIFILENAME/.exec(line)) { //1TIFILENAME    Javacore filename:    /appvol/WP61/WebSphere_Portal/javacore.20160131.191739.17397.0005.txt
			var FILENAME=String(line);
			//window.alert("file name: "+ line);
			outline.push({
				label: FILENAME.substr(FILENAME.indexOf("javacore.")),
				line: i+1  
			});	
			outline.push({
				label: "================================",
				line: i+1  
			});	
			break;
		}
	}
	return outline;
}

function getJavacoreSummaryText(text){
	var summary = [];
	var lines = text.split(/\r?\n/);
	var line;
	var i;
	//get javacore file name first
	for (i=0; i < lines.length; i++) {
		line = lines[i];
		if (/1TIFILENAME/.exec(line)) { //1TIFILENAME    Javacore filename:    /appvol/WP61/WebSphere_Portal/javacore.20160131.191739.17397.0005.txt
			var FILENAME=String(line);
			summary+=("\n"+	FILENAME.substr(FILENAME.indexOf("javacore.")));	
			summary+=("\n================================");	
			break;
		}
	}
	return summary;
}


function decToMb(dec){
	dec = parseFloat(dec);
	return (dec/1024/1024).toFixed(2)+"MB";
}

function hexToDec(hex){
	return parseInt(hex, 16);
}
