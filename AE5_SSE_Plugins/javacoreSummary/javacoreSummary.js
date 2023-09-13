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
			var FILENAME=line;
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
		};
	};
	//get server name
	for (i=0; i < lines.length; i++) {
		line = lines[i];
		if (/1CICMDLINE /.exec(line)) { //1CICMDLINE     /opt/WebSphere/AppServer/java_1.7_64/bin/java -Declipse.security -Dwas.status.socket=59742 -Dosgi.install.area=/opt/WebSphere/AppServer -Dosgi.configuration.area=/opt/WebSphere/wp_profile/servers/WebSphere_Portal/configuration -Djava.awt.headless=true -Dosgi.framework.extensions=com.ibm.cds,com.ibm.ws.eclipse.adaptors -Xshareclasses:name=webspherev85_1.7_64_%g,nonFatal -Dcom.ibm.xtq.processor.overrideSecureProcessing=true -Xcheck:dump -Xbootclasspath/p:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/ibmorb.jar -classpath /opt/WebSphere/wp_profile/properties:/opt/WebSphere/AppServer/properties:/opt/WebSphere/AppServer/lib/startup.jar:/opt/WebSphere/AppServer/lib/bootstrap.jar:/opt/WebSphere/AppServer/lib/jsf-nls.jar:/opt/WebSphere/AppServer/lib/lmproxy.jar:/opt/WebSphere/AppServer/lib/urlprotocols.jar:/opt/WebSphere/AppServer/deploytool/itp/batchboot.jar:/opt/WebSphere/AppServer/deploytool/itp/batch2.jar:/opt/WebSphere/AppServer/java_1.7_64/lib/tools.jar:/opt/WebSphere/PortalServer/base/wp.script/lib/wp.wire.jar -Dorg.osgi.framework.bootdelegation=* -Dibm.websphere.internalClassAccessMode=allow -verbose:gc -Xms2048m -Xmx5120m -Xcompressedrefs -Xscmaxaot4M -Xscmx90M -Dws.ext.dirs=/opt/WebSphere/AppServer/java_1.7_64/lib:/opt/WebSphere/wp_profile/classes:/opt/WebSphere/AppServer/classes:/opt/WebSphere/AppServer/lib:/opt/WebSphere/AppServer/installedChannels:/opt/WebSphere/AppServer/lib/ext:/opt/WebSphere/AppServer/web/help:/opt/WebSphere/AppServer/deploytool/itp/plugins/com.ibm.etools.ejbdeploy/runtime:/opt/WebSphere/PortalServer/shared/ext -Xdump:stack:events=allocation,filter=#10m -Dcom.ibm.itp.location=/opt/WebSphere/AppServer/bin -Djava.util.logging.configureByServer=true -Duser.install.root=/opt/WebSphere/wp_profile -Djava.ext.dirs=/opt/WebSphere/AppServer/tivoli/tam:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/ext -Djavax.management.builder.initial=com.ibm.ws.management.PlatformMBeanServerBuilder -Dpython.cachedir=/opt/WebSphere/wp_profile/temp/cachedir -Dwas.install.root=/opt/WebSphere/AppServer -Djava.util.logging.manager=com.ibm.ws.bootstrap.WsLogManager -Dserver.root=/opt/WebSphere/wp_profile -Dcom.ibm.security.jgss.debug=off -Dcom.ibm.security.krb5.Krb5Debug=off -Dcom.ibm.websphere.logging.messageId.version=6 -Dportal.temp.dir=/opt/WebSphere/wp_profile/temp/BSLWSPORTAL1Node/WebSphere_Portal -Dportal.properties.dir=/opt/WebSphere/wp_profile/PortalServer/config -Dcom.ibm.websphere.management.application.client.jspReloadEnabled=false -Dcom.ibm.zipfile.closeinputstreams=true -Dos400.class.path.rawt=2 -Dpzn.root.dir=/opt/WebSphere/AppServer/pzn/config/runtime -Dcom.ibm.ws.cache.CacheConfig.useServerClassLoader=true -Dcom.ibm.ws.cache.CacheConfig.filterLRUInvalidation=true -Dcom.ibm.ws.cache.CacheConfig.filterTimeOutInvalidation=true -Dcom.ibm.ws.cache.CacheConfig.cacheEntryWindow=2 -Dcom.ibm.ws.cache.CacheConfig.cacheInvalidateEntryWindow=2 -Dcom.ibm.websphere.alarmthreadmonitor.threshold.millis=300000 -ea -Dderby.system.home=/opt/WebSphere/wp_profile/PortalServer/derby -Dibm.stream.nio=true -Djava.io.tmpdir=/opt/WebSphere/wp_profile/temp -Xgcpolicy:gencon -verbose:gc -Xverbosegclog:/opt/WebSphere/wp_profile/logs/WebSphere_Portal/verbosegc.%Y%m%d.%H%M%S.%pid.txt,20,10000 -javaagent:/opt/WebSphere/AppServerAgent/javaagent.jar -Djava.library.path=/opt/WebSphere/AppServer/lib/native/linux/x86_64/:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/amd64/compressedrefs:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/amd64:/opt/WebSphere/AppServer/bin:/opt/WebSphere/AppServer/nulldllsdir:/usr/lib:/opt/WebSphere/PortalServer/lwo/prereq.odc/shared/app/oiexport: -Djava.endorsed.dirs=/opt/WebSphere/AppServer/endorsed_apis:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/endorsed -Djava.security.auth.login.config=/opt/WebSphere/wp_profile/properties/wsjaas.conf -Djava.security.policy=/opt/WebSphere/wp_profile/properties/server.policy com.ibm.wsspi.bootstrap.WSPreLauncher -nosplash -application com.ibm.ws.bootstrap.WSLauncher com.ibm.ws.runtime.WsServer /opt/WebSphere/wp_profile/config BSLWSDMGRCell01 BSLWSPORTAL1Node WebSphere_Portal
			var CMDLINE=line;
			var serverName = CMDLINE.split("config ").pop();
			outline.push({
				label: "server name: "+ serverName,
				line: i+1  
			});	  
			break;
		};
	};
	//get signal reason
	for (i=0; i < lines.length; i++) {
		line = lines[i];	
		if (/1TISIGINFO/.exec(line)) { //1TISIGINFO     Dump Event "user" (00004000) received
			var dumpReason = line;
			dumpReason=String(dumpReason.split('(').slice(0,1));//1TISIGINFO     Dump Event "user" 
			outline.push({
				label: dumpReason.substr(dumpReason.indexOf("Dump")),
				line: i+1  
			});
			break;
		};
	};
	//get java version
	for (i=0; i < lines.length; i++) {
		line = lines[i];
		if (/1CIJAVAVERSION/.exec(line)) {//1CIJAVAVERSION JRE 1.6.0 Linux amd64-64 build jvmxa6460sr12-20121024_126067 (pxa6460sr12-20121025_01(SR12))
			var JAVAVERSION=line;
			JAVAVERSION= String(JAVAVERSION).replace(/\s\s+/g, ' ');//consolidate spaces
			outline.push({
				label: JAVAVERSION.substr(JAVAVERSION.indexOf(" ")),
				line: i+1  
			});
			break;
		};
	};
	//get OS version
	for (i=0; i < lines.length; i++) {
		line = lines[i];	
		if (/2XHOSLEVEL/.exec(line)) {//2XHOSLEVEL     OS Level         : Linux 3.0.38-0.5-default
			var OSLEVEL=line;
			outline.push({
				label: OSLEVEL.substr(OSLEVEL.indexOf(": ")+2),
				line: i+1  
			});
			break;
		};
	};
	//get #CPU
	for (i=0; i < lines.length; i++) {
		line = lines[i];	
		if (/3XHNUMCPUS/.exec(line)) {//3XHNUMCPUS       How Many       : 8
			var NUMCPUS=line;
			outline.push({
				label: "CPUs: "+NUMCPUS.substr(NUMCPUS.indexOf(": ")+2),
				line: i+1  
			});
			break;
		};
	};
	//get min heap
	for (i=0; i < lines.length; i++) {
		line = lines[i];
		if (/(2CIUSERARG).+?(\-Xms)/.exec(line)) {//2CIUSERARG               -Xms2048m
			var XMS=line;
			outline.push({
				label: XMS.substr(XMS.indexOf("-X")),
				line: i+1  
			});
			break;
		};
	};
	//get max heap
	for (i=0; i < lines.length; i++) {
		line = lines[i];
		if (/(2CIUSERARG).+?(\-Xmx)/.exec(line)) {//2CIUSERARG               -Xmx2048m
			var XMX=line;
			outline.push({
				label: XMX.substr(XMX.indexOf("-X")),
				line: i+1  
			});
			break;
		};
	};
	//get noclassgc
	for (i=0; i < lines.length; i++) {
		line = lines[i];
		if (/(2CIUSERARG).+?(\-Xnoclassgc)/.exec(line)) {//2CIUSERARG               -Xnoclassgc
			var NOCLASSGC=line;
			outline.push({
				label: NOCLASSGC.substr(NOCLASSGC.indexOf("-X")),
				line: i+1  
			});
			break;
		};
	};
	//get disableExplicitGc
	for (i=0; i < lines.length; i++) {
		line = lines[i];
		if (/(2CIUSERARG).+?(\-Xdisableexplicitgc)/.exec(line)) {//2CIUSERARG               -Xdisableexplicitgc
			var EXPLICITGC=String(line);
			outline.push({
				label: EXPLICITGC.substr(EXPLICITGC.indexOf("-X")),
				line: i+1  
			});
			break;
		};
	};
	//get -Xdump
	for (i=0; i < lines.length; i++) {
		line = lines[i];
		if (/(2CIUSERARG).+?(\-Xdump)/.exec(line)) {//2CIUSERARG               -Xdump...
			var XDUMP=line;
			outline.push({
				label: XDUMP.substr(XDUMP.indexOf("-X")),
				line: i+1  
			});
			break;
		};
	};
	//EXIT
	for (i=0; i < lines.length; i++) {
		line = lines[i];
		if (/System.exit/.exec(line)) {//4XESTACKTRACE                at java/lang/System.exit(System.java:380)	
			var exitThread=line
			exitThread = String(exitThread).replace(/\s\s+/g, ' ');//remove extra spaces
			outline.push({
				label: " ",
				line: i+1  
			});
			outline.push({
				label: "EXIT",
				line: i+1  
			});
			outline.push({
				label: "------------------------",
				line: i+1  
			});
			outline.push({
				label: exitThread.substr(exitThread.indexOf(" ")),
				line: i+1
			});
			break;
		};
	};
	//CURRENT THREAD
	 for (i=0; i < lines.length; i++) {
		 line = lines[i];
	         if (/1XMCURTHDINFO/.exec(line)) {//1XMCURTHDINFO  Current thread
			 var currentThread=lines[i+1];
			 currentThread= String(currentThread).replace(/\s\s+/g, ' ');//remove extra spaces
			 outline.push({
				 label: " ",
				 line: i+1  
			 });
			 outline.push({
				 label: "Current Thread",
				 line: i+1  
			 });
			 outline.push({
				 label: "------------------------",
				 line: i+1
			 });
			 outline.push({
				 label: currentThread.substr(currentThread.indexOf(" ")),
				 line: i+1
			 });
			 break;
		 };
	 };

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
			var FILENAME=line;
			summary+=("\n"+	FILENAME.substr(FILENAME.indexOf("javacore.")));	
			summary+=("\n================================");	
			break;
		};
	};
	return summary;
}


function decToMb(dec){
	dec = parseFloat(dec);
	return (dec/1024/1024).toFixed(2)+"MB";
}

function hexToDec(hex){
	return parseInt(hex, 16);
}
