function getTopdashHOutput(contents) {
  
  var outline = [];
  var lines = contents.split(/\r?\n/);
  var line;
  var i;
  var top5count=0;
  
  for (i=0; i < lines.length; i++) {
    
    line = lines[i];
    
    if  (/^Collected against PID/.exec(line)){
      outline.push({
        label: line,
        line: i+1
      });
      continue;
    }
    
    if (/^\s.+?PID/.exec(line)) {//    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
      outline.push({
        label: " ",
        line: i+1
      });
      outline.push({
        label: line,
        line: i+1
      });
      outline.push({
        label: "=========================================================================",
        line: i+1
      });
      top5count=0;
      continue;
    }
    
    if ((/^[1-9]\d/.exec(line))&& (top5count<5)) {//3956742 appadmin  20   0   15.9g   4.6g 132228 R  40.9   8.4   2:07.89 WebCont+
      var tidHexValue = (/^[1-9]\d/.+?)\s/.exec(line);
      outline.push({
        label: line+" "+tidHexValue[0],
        line: i+1,
      });
      top5count = top5count+1         	
      continue;
    }
    
  }//end for loop
  
  return outline;
  
}//end function

function hexToDec(hex){
	return parseInt(hex, 16);
}
