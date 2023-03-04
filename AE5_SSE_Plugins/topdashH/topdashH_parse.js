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
      outline.push({
        label: line,
        line: i+1,
      });
      top5count = top5count+1         	
      continue;
    }
    
  }//end for loop
  
  return outline;
  
}//end function




/*
function getTopdashHOutput(contents) {
  
  //window.alert(title + " started.");
  //window.alert("topdashH started.");
  var outline = [];
  var lines = contents.split(/\r?\n/);
  var line;
  var i;
  var top5count;
  
  for (i=0; i < lines.length; i++) {
    line = lines[i];
    if  (/^Collected against PID/.exec(line)){//Collected against PID 3851285.
      outline.push({
        label: line,//line.substr(line.indexOf("javacore.")),
        line: i+1
      });	
      continue;
    }
    if (/^top/.exec(line)) {//top - 11:48:08 up 25 days, 16:14,  1 user,  load average: 9.94, 8.45, 5.98
      //window.alert("top time: "+ line);
      outline.push({
        label: line,
        line: i+1  
      });	
      continue;
    }
    if (/^    PID/.exec(line)) {//    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
      //window.alert("PID: "+ line);
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
    if (/^[1-9]\d/.exec(line))&& (top5count<5) {//3956742 appadmin  20   0   15.9g   4.6g 132228 R  40.9   8.4   2:07.89 WebCont+
      //window.alert("TID: "+ line);
      outline.push({
        label: line,
        line: i+1,
      });
      top5count = top5count+1         	
      continue;
    }
  }
  return outline;
}
*/
