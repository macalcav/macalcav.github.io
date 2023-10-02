function getLongestLength(csvText){
    var width=[];
    var lines = csvText.split("\n");
    for (var i = 0; i < lines.length; i++) {
        lines[i]=lines[i].replace(/^\s+|\s+$/gm,'');//remove white space from both ends
        lines[i]=lines[i].replace(/\s\s+/g, ' ');//remove multiple spaces
        values = lines[i].split(",");
        for (var x=0; x<values.length;x++){
            if (isNaN(parseInt(width[x]))){//if width is not set yet, set to zero
                width[x]=0;
            }
            if (values[x].length > width[x]){
                width[x]=values[x].length;
            }
        }
    }
    //console.log(String(width));
    return width;
}

function makeColumnsFromCsvText(csvText){
    var width = getLongestLength(csvText);
    var lines = csvText.split("\n");
    var output = [];
    for (var i = 0; i < lines.length; i++) {
        lines[i]=lines[i].replace(/^\s+|\s+$/gm,'');//remove white space from both ends
        lines[i]=lines[i].replace(/\s\s+/g, ' ');//remove multiple spaces
        values = lines[i].split(",");
        for (var x=0; x<values.length;x++){
            var w = parseInt(width[x]);
            var v = parseInt(values[x].length);
            var pad = w-v;
            var spaces = " ";
            for (var z=0; z<=pad;z++){
                spaces+=" ";						
            }
            output+=spaces+values[x];
        }
        output+="\n";
    }
    return output;
}
