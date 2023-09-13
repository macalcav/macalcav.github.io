function getJavacoreSummaryOutline(contents) {
    		
		//window.alert(title + " started.");
		
		var outline = [];
		var lines = contents.split(/\r?\n/);
		var line;
		var i;
		
		//get javacore file name first
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/1TIFILENAME/.exec(line)) {//1TIFILENAME    Javacore filename:    /appvol/WP61/WebSphere_Portal/javacore.20160131.191739.17397.0005.txt
                //window.alert("file name: "+ line);
				outline.push({
					label: line.substr(line.indexOf("javacore.")),
					line: i+1  
				});	
				outline.push({
					label: "================================",
					line: i+1  
				});	
				break;					
			}
		}
		
		//get server name
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/1CICMDLINE /.exec(line)) {
				//   /config   /config
				//1CICMDLINE     /opt/WebSphere/AppServer/java_1.7_64/bin/java -Declipse.security -Dwas.status.socket=59742 -Dosgi.install.area=/opt/WebSphere/AppServer -Dosgi.configuration.area=/opt/WebSphere/wp_profile/servers/WebSphere_Portal/configuration -Djava.awt.headless=true -Dosgi.framework.extensions=com.ibm.cds,com.ibm.ws.eclipse.adaptors -Xshareclasses:name=webspherev85_1.7_64_%g,nonFatal -Dcom.ibm.xtq.processor.overrideSecureProcessing=true -Xcheck:dump -Xbootclasspath/p:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/ibmorb.jar -classpath /opt/WebSphere/wp_profile/properties:/opt/WebSphere/AppServer/properties:/opt/WebSphere/AppServer/lib/startup.jar:/opt/WebSphere/AppServer/lib/bootstrap.jar:/opt/WebSphere/AppServer/lib/jsf-nls.jar:/opt/WebSphere/AppServer/lib/lmproxy.jar:/opt/WebSphere/AppServer/lib/urlprotocols.jar:/opt/WebSphere/AppServer/deploytool/itp/batchboot.jar:/opt/WebSphere/AppServer/deploytool/itp/batch2.jar:/opt/WebSphere/AppServer/java_1.7_64/lib/tools.jar:/opt/WebSphere/PortalServer/base/wp.script/lib/wp.wire.jar -Dorg.osgi.framework.bootdelegation=* -Dibm.websphere.internalClassAccessMode=allow -verbose:gc -Xms2048m -Xmx5120m -Xcompressedrefs -Xscmaxaot4M -Xscmx90M -Dws.ext.dirs=/opt/WebSphere/AppServer/java_1.7_64/lib:/opt/WebSphere/wp_profile/classes:/opt/WebSphere/AppServer/classes:/opt/WebSphere/AppServer/lib:/opt/WebSphere/AppServer/installedChannels:/opt/WebSphere/AppServer/lib/ext:/opt/WebSphere/AppServer/web/help:/opt/WebSphere/AppServer/deploytool/itp/plugins/com.ibm.etools.ejbdeploy/runtime:/opt/WebSphere/PortalServer/shared/ext -Xdump:stack:events=allocation,filter=#10m -Dcom.ibm.itp.location=/opt/WebSphere/AppServer/bin -Djava.util.logging.configureByServer=true -Duser.install.root=/opt/WebSphere/wp_profile -Djava.ext.dirs=/opt/WebSphere/AppServer/tivoli/tam:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/ext -Djavax.management.builder.initial=com.ibm.ws.management.PlatformMBeanServerBuilder -Dpython.cachedir=/opt/WebSphere/wp_profile/temp/cachedir -Dwas.install.root=/opt/WebSphere/AppServer -Djava.util.logging.manager=com.ibm.ws.bootstrap.WsLogManager -Dserver.root=/opt/WebSphere/wp_profile -Dcom.ibm.security.jgss.debug=off -Dcom.ibm.security.krb5.Krb5Debug=off -Dcom.ibm.websphere.logging.messageId.version=6 -Dportal.temp.dir=/opt/WebSphere/wp_profile/temp/BSLWSPORTAL1Node/WebSphere_Portal -Dportal.properties.dir=/opt/WebSphere/wp_profile/PortalServer/config -Dcom.ibm.websphere.management.application.client.jspReloadEnabled=false -Dcom.ibm.zipfile.closeinputstreams=true -Dos400.class.path.rawt=2 -Dpzn.root.dir=/opt/WebSphere/AppServer/pzn/config/runtime -Dcom.ibm.ws.cache.CacheConfig.useServerClassLoader=true -Dcom.ibm.ws.cache.CacheConfig.filterLRUInvalidation=true -Dcom.ibm.ws.cache.CacheConfig.filterTimeOutInvalidation=true -Dcom.ibm.ws.cache.CacheConfig.cacheEntryWindow=2 -Dcom.ibm.ws.cache.CacheConfig.cacheInvalidateEntryWindow=2 -Dcom.ibm.websphere.alarmthreadmonitor.threshold.millis=300000 -ea -Dderby.system.home=/opt/WebSphere/wp_profile/PortalServer/derby -Dibm.stream.nio=true -Djava.io.tmpdir=/opt/WebSphere/wp_profile/temp -Xgcpolicy:gencon -verbose:gc -Xverbosegclog:/opt/WebSphere/wp_profile/logs/WebSphere_Portal/verbosegc.%Y%m%d.%H%M%S.%pid.txt,20,10000 -javaagent:/opt/WebSphere/AppServerAgent/javaagent.jar -Djava.library.path=/opt/WebSphere/AppServer/lib/native/linux/x86_64/:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/amd64/compressedrefs:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/amd64:/opt/WebSphere/AppServer/bin:/opt/WebSphere/AppServer/nulldllsdir:/usr/lib:/opt/WebSphere/PortalServer/lwo/prereq.odc/shared/app/oiexport: -Djava.endorsed.dirs=/opt/WebSphere/AppServer/endorsed_apis:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/endorsed -Djava.security.auth.login.config=/opt/WebSphere/wp_profile/properties/wsjaas.conf -Djava.security.policy=/opt/WebSphere/wp_profile/properties/server.policy com.ibm.wsspi.bootstrap.WSPreLauncher -nosplash -application com.ibm.ws.bootstrap.WSLauncher com.ibm.ws.runtime.WsServer /opt/WebSphere/wp_profile/config BSLWSDMGRCell01 BSLWSPORTAL1Node WebSphere_Portal
				//MDLINE     /usr/WebSphere/AppServer/java/bin/java -Declipse.security -Dwas.status.socket=55804 -Dosgi.install.area=/usr/WebSphere/AppServer -Dosgi.configuration.area=/usr/WebSphere/AppServer/profiles/default/configuration -Dosgi.framework.extensions=com.ibm.cds -Xshareclasses:name=webspherev61_%g,groupAccess,nonFatal -Xscmx50M -Dcom.ibm.xtq.processor.overrideSecureProcessing=true -Xbootclasspath/p:/usr/WebSphere/AppServer/java/jre/lib/ext/ibmorb.jar:/usr/WebSphere/AppServer/java/jre/lib/ext/ibmext.jar -classpath /usr/WebSphere/AppServer/profiles/default/properties:/usr/WebSphere/AppServer/properties:/usr/WebSphere/AppServer/lib/startup.jar:/usr/WebSphere/AppServer/lib/bootstrap.jar:/usr/WebSphere/AppServer/lib/j2ee.jar:/usr/WebSphere/AppServer/lib/lmproxy.jar:/usr/WebSphere/AppServer/lib/urlprotocols.jar:/usr/WebSphere/AppServer/deploytool/itp/batchboot.jar:/usr/WebSphere/AppServer/deploytool/itp/batch2.jar:/usr/WebSphere/AppServer/java/lib/tools.jar:/was/etc -Dibm.websphere.internalClassAccessMode=allow -verbose:gc -Xms256m -Xmx512m -Dws.ext.dirs=/usr/WebSphere/AppServer/java/lib:/usr/WebSphere/AppServer/profiles/default/classes:/usr/WebSphere/AppServer/classes:/usr/WebSphere/AppServer/lib:/usr/WebSphere/AppServer/installedChannels:/usr/WebSphere/AppServer/lib/ext:/usr/WebSphere/AppServer/web/help:/usr/WebSphere/AppServer/deploytool/itp/plugins/com.ibm.etools.ejbdeploy/runtime -Dderby.system.home=/usr/WebSphere/AppServer/derby -Dcom.ibm.itp.location=/usr/WebSphere/AppServer/bin -Djava.util.logging.configureByServer=true -Duser.install.root=/usr/WebSphere/AppServer/profiles/default -Djavax.management.builder.initial=com.ibm.ws.management.PlatformMBeanServerBuilder -Dwas.install.root=/usr/WebSphere/AppServer -Dpython.cachedir=/usr/WebSphere/AppServer/profiles/default/temp/cachedir -Djava.util.logging.manager=com.ibm.ws.bootstrap.WsLogManager -Dserver.root=/usr/WebSphere/AppServer/profiles/default -Djava.awt.headless=false -Dframework.ComponentFactory.impl=jp.co.nikkobeans.framework.servlet.WebComponentFactory -Dlog4j.configuration=/was/etc/log4j.properties -Dfile.encoding=Cp943C -Dclient.encoding.override=Shift_JIS -Xss819200 -Xmso819200 -Djava.security.auth.login.config=/usr/WebSphere/AppServer/profiles/default/properties/wsjaas.conf -Djava.security.policy=/usr/WebSphere/AppServer/profiles/default/properties/server.policy com.ibm.wsspi.bootstrap.WSPreLauncher -nosplash -application com.ibm.ws.bootstrap.WSLauncher com.ibm.ws.runtime.WsServer /usr/WebSphere/AppServer/profiles/default/config mxtwas07 mxtwas07 server1
				var serverName = line.split("config ").pop();
				outline.push({
					label: "server name: "+ serverName,
					line: i+1  
				});	  
				break;
			}
		}	
		//get signal reason
		for (i=0; i < lines.length; i++) {
			line = lines[i];	
			if (/1TISIGINFO/.exec(line)) {//1TISIGINFO     Dump Event "user" (00004000) received
				var dumpReason = String(lines[i].split('(').slice(0,1));//1TISIGINFO     Dump Event "user" 
				outline.push({
					label: dumpReason.substr(dumpReason.indexOf("Dump")),
					line: i+1  
				});
				break;
			}
		}	
		//get java version
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/1CIJAVAVERSION/.exec(line)) {//1CIJAVAVERSION JRE 1.6.0 Linux amd64-64 build jvmxa6460sr12-20121024_126067 (pxa6460sr12-20121025_01(SR12))
			    lines[i]= String(lines[i]).replace(/\s\s+/g, ' ');//consolidate spaces
				outline.push({
					label: lines[i].substr(lines[i].indexOf(" ")),
					line: i+1  
				});
				break;
			}
		}
		
		//get OS version
		for (i=0; i < lines.length; i++) {
			line = lines[i];	
			if (/2XHOSLEVEL/.exec(line)) {//2XHOSLEVEL     OS Level         : Linux 3.0.38-0.5-default
				outline.push({
					//label: match[1],
					label: lines[i].substr(lines[i].indexOf(": ")+2),
					line: i+1  
				});
				break;	    				
			}
		}	
		//get #CPU
		for (i=0; i < lines.length; i++) {
			line = lines[i];	
			if (/3XHNUMCPUS/.exec(line)) {//3XHNUMCPUS       How Many       : 8
				outline.push({
					//label: match[1],
					label: "CPUs: "+lines[i].substr(lines[i].indexOf(": ")+2),
					line: i+1  
				});
				break;
			}
		}
		//get min heap
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xms)/.exec(line)) {//2CIUSERARG               -Xms2048m
				outline.push({
					//label: match[1],
					label: lines[i].substr(lines[i].indexOf("-X")),
					line: i+1  
				});
				break;
			}
		}
		
		//get max heap
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xmx)/.exec(line)) {//2CIUSERARG               -Xmx2048m
				outline.push({
					//label: match[1],
					label: lines[i].substr(lines[i].indexOf("-X")),
					line: i+1  
				});
				break;
			}
		}
		
		//get noclassgc
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xnoclassgc)/.exec(line)) {//2CIUSERARG               -Xnoclassgc
				outline.push({
					//label: match[1],
					label: lines[i].substr(lines[i].indexOf("-X")),
					line: i+1  
				});
				break;
			}
		}
		
		//get disableExplicitGc
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xdisableexplicitgc)/.exec(line)) {//2CIUSERARG               -Xdisableexplicitgc
				outline.push({
					//label: match[1],
					label: lines[i].substr(lines[i].indexOf("-X")),
					line: i+1  
				});
				break;
			}
		}
		//get -Xdump
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xdump)/.exec(line)) {//2CIUSERARG               -Xdump...
				outline.push({
					label: lines[i].substr(lines[i].indexOf("-X")),
					line: i+1  
				});
				break;
			}
		}
	        //EXIT
	        for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/System.exit/.exec(line)) {//4XESTACKTRACE                at java/lang/System.exit(System.java:380)
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
				for (j=i; j < lines.length; j++) {
					line = lines[j];
					var exitThread= String(line).replace(/\s\s+/g, ' ');//remove extra spaces
					if (/STACKTRACE /.exec(line)){
						outline.push({
							label: exitThread.substr(exitThread.indexOf(" ")),
							line: j+1  
						});
					}
					if (/^NULL/.exec(line)){
						break;
					}
				}
			}
		}
		
		for (i=0; i < lines.length; i++) {
			
			line = lines[i];
	
			if (/1CICPUINFO/.exec(line)) {//1CICPUINFO     Entitled CPU Information
				outline.push({
					label: "~",
					line: i+1  
				});
				outline.push({
					label: lines[i].substr(lines[i].indexOf("Entitled")),
					line: i+1  
				});
				continue;
			}				
			if (/2CIPHYSCPU/.exec(line)||/2CIONLNCPU/.exec(line)||/2CIBOUNDCPU/.exec(line)||/2CIENTITLECPU/.exec(line)||/2CITARGETCPU/.exec(line)) {//2CIPHYSCPU     Physical CPUs: 6
				outline.push({
					label: lines[i].substr(lines[i].indexOf("CPU  ")),
					line: i+1  
				});
				continue;
			}
			if (/1CIUSERLIMITS/.exec(line)) {//1CIUSERLIMITS  User Limits (in bytes except for NOFILE and NPROC)
 				outline.push({
					label: " ",
					line: i+1  
				});
				outline.push({
					label: lines[i].substr(lines[i].indexOf("User Limits")),
					line: i+1  
				});
				continue;
			}
			if (/soft limit/.exec(line)) {//NULL           type                            soft limit           hard limit
				outline.push({
					label: "--------------------------------------------------",
					line: i+1  
				});
				outline.push({
					label: lines[i].substr(lines[i].indexOf("type")),
					line: i+1  
				});
				continue;
			}
			if (/2CIUSERLIMIT/.exec(line)) {//2CIUSERLIMIT   RLIMIT_AS                      18077286400            unlimited
			    var rlimit = String(line.substr(line.indexOf(" RLIMIT")+1));
			    outline.push({
					label: rlimit,
					line: i+1  
				});
				continue;
			}
			if (/NATIVEMEMINFO/.exec(line)) {//0SECTION       NATIVEMEMINFO subcomponent dump routine
				outline.push({
					label: " ",
					line: i+1  
				});
				outline.push({
					label: lines[i].substr(lines[i].indexOf(" NATIVEMEMINFO")+1),
					line: i+1  
					//TO DO: call NATIVEMEMINFO script
				});
				outline.push({
					label: "-------------------------------------- ",
					line: i+1  
				});
				continue;
			}	
			if (/(MEMUSER\s{7}).+?(allocation)/.exec(line)){//5MEMUSER       |  |  |  +--Direct Byte Buffers: 29,753,776 bytes / 2462 allocations
			    lines[i]=lines[i].replace(/\s\s+/g, ' ');//consolidate spaces 
			    var indexOfFirstSpace = lines[i].indexOf(" ");
			    var indexOfColon = lines[i].indexOf(":");
			    var indexOfBytes = lines[i].indexOf(" bytes");
			    var byteValue=lines[i].substring(indexOfColon+2,indexOfBytes);//grab the byte value consider space after colon
			    byteValue=byteValue.replace(/\,/g,'');//remove commas
			    outline.push({
					label: lines[i].substring(indexOfFirstSpace, indexOfBytes)+"="+(byteValue/1024/1024).toFixed(2) + "mb",
					line: i+1  
				});
			    continue;
			}
			if (/1STHEAPTYPE/.exec(line)||/1STSEGTYPE/.exec(line)) {//1STHEAPTYPE    Object Memory ... 1STHEAPTYPE Object Memory
				var memoryType = String(line).replace(/\s\s+/g, ' ');//remove multiple spaces
				memoryType = memoryType.substr(memoryType.indexOf(" ")+1);//1STHEAPTYPE Object Memory ... Object Memory
				outline.push({
					label: " ",
					line: i+1  
				});
				outline.push({
					label: memoryType,
					line: i+1  
				});
				outline.push({
					label: "-------------",
					line: i+1  
				});
				continue;
			}
			if (/1STHEAPALLOC/.exec(line)||/1STHEAPTOTAL/.exec(line)||/1STSEGTOTAL/.exec(line)||/1STSEGINUSE/.exec(line)||/1STSEGFREE/.exec(line)||/1STHEAPINUSE/.exec(line)||/1STHEAPFREE/.exec(line)) {				
				var memory = String(lines[i]).replace(/\s\s+/g, ' ');//consolidate spaces
				if (/\(/.exec(memory)){//1STSEGTOTAL    Total memory:                    46759936 (0x0000000002C98000)
					var reAllNumbersFoundInTheString = /\b\d+\b/g;//regular expression to get all the numbers from a string
					memory = / (.*?)( \()/.exec(memory);//everything between the first space and the first parenthesis
					memory = memory[1]  + " = " + decToMb(reAllNumbersFoundInTheString.exec(lines[i]));//since the memory value is the first number in this string
				}else{//1STHEAPFREE    Bytes of Heap Space Free: 8cfa600
					var decValue = hexToDec(memory.substr(memory.indexOf(":")+1).trim());
					memory = memory.substr(memory.indexOf(" "), memory.indexOf(":")+ 1) + "=" + decToMb(decValue) ;	
					outline.push({
						label: " ",
						line: i+1  
					});
				}
				outline.push({
					label: memory,
					line: i+1  
				});
				continue;
			}
			if (/2LKPOOLTOTAL/.exec(line)) {//2LKPOOLTOTAL     Current total number of monitors: 2390
				outline.push({
					label: " ",
					line: i+1  
				});
				outline.push({
					label: lines[i].substr(lines[i].indexOf("Current")),
					line: i+1  
				});
				continue;
			}
			if (/1XMCURTHDINFO/.exec(line)) {//1XMCURTHDINFO  Current thread
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
				for (j=i; j < lines.length; j++) {
					line = lines[j];
					var currentThread= String(lines[j]).replace(/\s\s+/g, ' ');//remove extra spaces
					if (/STACKTRACE /.exec(line)){
						outline.push({
							label: currentThread.substr(currentThread.indexOf(" ")),
							line: j+1  
						});
					}
					if (/^NULL/.exec(line)){
						break;
					}
				}
			}

		}//end of contents loop
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
			if (/1TIFILENAME/.exec(line)) {//1TIFILENAME    Javacore filename:    /appvol/WP61/WebSphere_Portal/javacore.20160131.191739.17397.0005.txt
                summary+=("\n"+	line.substr(line.indexOf("javacore.")));	
				summary+=("\n================================");	
				break;					
			}
		}
		//get server name
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/1CICMDLINE /.exec(line)) {//1CICMDLINE     /opt/WebSphere/AppServer/java_1.7_64/bin/java -Declipse.security -Dwas.status.socket=59742 -Dosgi.install.area=/opt/WebSphere/AppServer -Dosgi.configuration.area=/opt/WebSphere/wp_profile/servers/WebSphere_Portal/configuration -Djava.awt.headless=true -Dosgi.framework.extensions=com.ibm.cds,com.ibm.ws.eclipse.adaptors -Xshareclasses:name=webspherev85_1.7_64_%g,nonFatal -Dcom.ibm.xtq.processor.overrideSecureProcessing=true -Xcheck:dump -Xbootclasspath/p:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/ibmorb.jar -classpath /opt/WebSphere/wp_profile/properties:/opt/WebSphere/AppServer/properties:/opt/WebSphere/AppServer/lib/startup.jar:/opt/WebSphere/AppServer/lib/bootstrap.jar:/opt/WebSphere/AppServer/lib/jsf-nls.jar:/opt/WebSphere/AppServer/lib/lmproxy.jar:/opt/WebSphere/AppServer/lib/urlprotocols.jar:/opt/WebSphere/AppServer/deploytool/itp/batchboot.jar:/opt/WebSphere/AppServer/deploytool/itp/batch2.jar:/opt/WebSphere/AppServer/java_1.7_64/lib/tools.jar:/opt/WebSphere/PortalServer/base/wp.script/lib/wp.wire.jar -Dorg.osgi.framework.bootdelegation=* -Dibm.websphere.internalClassAccessMode=allow -verbose:gc -Xms2048m -Xmx5120m -Xcompressedrefs -Xscmaxaot4M -Xscmx90M -Dws.ext.dirs=/opt/WebSphere/AppServer/java_1.7_64/lib:/opt/WebSphere/wp_profile/classes:/opt/WebSphere/AppServer/classes:/opt/WebSphere/AppServer/lib:/opt/WebSphere/AppServer/installedChannels:/opt/WebSphere/AppServer/lib/ext:/opt/WebSphere/AppServer/web/help:/opt/WebSphere/AppServer/deploytool/itp/plugins/com.ibm.etools.ejbdeploy/runtime:/opt/WebSphere/PortalServer/shared/ext -Xdump:stack:events=allocation,filter=#10m -Dcom.ibm.itp.location=/opt/WebSphere/AppServer/bin -Djava.util.logging.configureByServer=true -Duser.install.root=/opt/WebSphere/wp_profile -Djava.ext.dirs=/opt/WebSphere/AppServer/tivoli/tam:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/ext -Djavax.management.builder.initial=com.ibm.ws.management.PlatformMBeanServerBuilder -Dpython.cachedir=/opt/WebSphere/wp_profile/temp/cachedir -Dwas.install.root=/opt/WebSphere/AppServer -Djava.util.logging.manager=com.ibm.ws.bootstrap.WsLogManager -Dserver.root=/opt/WebSphere/wp_profile -Dcom.ibm.security.jgss.debug=off -Dcom.ibm.security.krb5.Krb5Debug=off -Dcom.ibm.websphere.logging.messageId.version=6 -Dportal.temp.dir=/opt/WebSphere/wp_profile/temp/BSLWSPORTAL1Node/WebSphere_Portal -Dportal.properties.dir=/opt/WebSphere/wp_profile/PortalServer/config -Dcom.ibm.websphere.management.application.client.jspReloadEnabled=false -Dcom.ibm.zipfile.closeinputstreams=true -Dos400.class.path.rawt=2 -Dpzn.root.dir=/opt/WebSphere/AppServer/pzn/config/runtime -Dcom.ibm.ws.cache.CacheConfig.useServerClassLoader=true -Dcom.ibm.ws.cache.CacheConfig.filterLRUInvalidation=true -Dcom.ibm.ws.cache.CacheConfig.filterTimeOutInvalidation=true -Dcom.ibm.ws.cache.CacheConfig.cacheEntryWindow=2 -Dcom.ibm.ws.cache.CacheConfig.cacheInvalidateEntryWindow=2 -Dcom.ibm.websphere.alarmthreadmonitor.threshold.millis=300000 -ea -Dderby.system.home=/opt/WebSphere/wp_profile/PortalServer/derby -Dibm.stream.nio=true -Djava.io.tmpdir=/opt/WebSphere/wp_profile/temp -Xgcpolicy:gencon -verbose:gc -Xverbosegclog:/opt/WebSphere/wp_profile/logs/WebSphere_Portal/verbosegc.%Y%m%d.%H%M%S.%pid.txt,20,10000 -javaagent:/opt/WebSphere/AppServerAgent/javaagent.jar -Djava.library.path=/opt/WebSphere/AppServer/lib/native/linux/x86_64/:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/amd64/compressedrefs:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/amd64:/opt/WebSphere/AppServer/bin:/opt/WebSphere/AppServer/nulldllsdir:/usr/lib:/opt/WebSphere/PortalServer/lwo/prereq.odc/shared/app/oiexport: -Djava.endorsed.dirs=/opt/WebSphere/AppServer/endorsed_apis:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/endorsed -Djava.security.auth.login.config=/opt/WebSphere/wp_profile/properties/wsjaas.conf -Djava.security.policy=/opt/WebSphere/wp_profile/properties/server.policy com.ibm.wsspi.bootstrap.WSPreLauncher -nosplash -application com.ibm.ws.bootstrap.WSLauncher com.ibm.ws.runtime.WsServer /opt/WebSphere/wp_profile/config BSLWSDMGRCell01 BSLWSPORTAL1Node WebSphere_Portal
				var serverName = line.split("config ").pop();
				summary+=("\n"+"server name: "+ serverName);	  
				break;
			}
		}
	        //get process id 
	        for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/1CIPROCESSID /.exec(line)) {//1CIPROCESSID   Process ID: 30914 (0x78C2)
				var pid = line.substring(line.indexOf("Process ID"));
				summary+=("\n"+ pid);	  
				break;
			}
		}
	        //get hostname
	        for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/2CIENVVAR      HOSTNAME/.exec(line)) {//2CIENVVAR      HOSTNAME=MYHOST
				var hostName = line.substring(line.indexOf("HOSTNAME"));
				summary+=("\n"+ hostName);	  
				break;
			}
		}	
		//get signal reason
		for (i=0; i < lines.length; i++) {
			line = lines[i];	
			if (/1TISIGINFO/.exec(line)) {//1TISIGINFO     Dump Event "user" (00004000) received
				var dumpReason = String(lines[i].split('(').slice(0,1));//1TISIGINFO     Dump Event "user" 
				summary+=("\n"+	dumpReason.substr(dumpReason.indexOf("Dump")));
				break;
			}
		}	
		//get java version
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/1CIJAVAVERSION/.exec(line)) {//1CIJAVAVERSION JRE 1.6.0 Linux amd64-64 build jvmxa6460sr12-20121024_126067 (pxa6460sr12-20121025_01(SR12))
				lines[i] = String(lines[i]).replace(/\s\s+/g, ' ');//remove extra spaces
				summary+=("\n"+	lines[i].substring(lines[i].indexOf(" ")+1));
				break;
			}
		}
		//get OS version
		for (i=0; i < lines.length; i++) {
			line = lines[i];	
			if (/2XHOSLEVEL/.exec(line)) {//2XHOSLEVEL     OS Level         : Linux 3.0.38-0.5-default
				summary+=("\n"+	lines[i].substr(lines[i].indexOf(": ")+2));
				break;	    				
			}
		}	
		//get #CPU
		for (i=0; i < lines.length; i++) {
			line = lines[i];	
			if (/3XHNUMCPUS/.exec(line)) {//3XHNUMCPUS       How Many       : 8
				summary+=("\nCPUs: "+lines[i].substr(lines[i].indexOf(": ")+2));
				break;
			}
		}
		//get min heap
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xms)/.exec(line)) {//2CIUSERARG               -Xms2048m
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("-X")));
				break;
			}
		}
		//get max heap
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xmx)/.exec(line)) {//2CIUSERARG               -Xmx2048m
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("-X")));
				break;
			}
		}
		//get noclassgc
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xnoclassgc)/.exec(line)) {//2CIUSERARG               -Xnoclassgc
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("-X")));
				break;
			}
		}
		//get disableExplicitGc
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xdisableexplicitgc)/.exec(line)) {//2CIUSERARG               -Xdisableexplicitgc
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("-X")));
				break;
			}
		}
		//get -Xdump
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xdump)/.exec(line)) {//2CIUSERARG               -Xdump...
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("-X"))	);
				break;
			}
		}
	        //get EXIT
	        for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/System.exit/.exec(line)) {//4XESTACKTRACE                at java/lang/System.exit(System.java:380)
				summary+=("\n\nEXIT\n--------------------");
				var exitThread= String(lines[i]).replace(/\s\s+/g, ' ');//remove extra spaces
				summary+="\n"+exitThread.substr(exitThread.indexOf(" ")) ;	
				for (j=i; j < lines.length; j++) {
					line = lines[j];
					var exitStackThread= String(lines[j]).replace(/\s\s+/g, ' ');//remove extra spaces
					if (/STACKTRACE /.exec(line)){
						summary+="\n"+exitStackThread.substr(exitStackThread.indexOf(" ")) ;						
					}
					if (/^NULL/.exec(line){
						break;
					}
				}
			}
		}
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/1CICPUINFO/.exec(line)) {//1CICPUINFO     Entitled CPU Information
				summary+=("\n~");
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("Entitled")));
				continue;
			}				
			if (/2CIPHYSCPU/.exec(line)||/2CIONLNCPU/.exec(line)||/2CIBOUNDCPU/.exec(line)||/2CIENTITLECPU/.exec(line)||/2CITARGETCPU/.exec(line)) {
				//2CIPHYSCPU     Physical CPUs: 6
				var cpu = lines[i].substr(lines[i].indexOf("CPU  ")+3).trim();
				summary+=("\n"+ cpu);
				continue;
			}
			if (/1CIUSERLIMITS/.exec(line)) {//1CIUSERLIMITS  User Limits (in bytes except for NOFILE and NPROC)
 				summary+=("\n");
				summary+=("\n"+lines[i].substr(lines[i].indexOf("User Limits")));
				continue;
			}
			if (/soft limit/.exec(line)) {//NULL           type                            soft limit           hard limit
				summary+=("\n--------------------------------------------------");
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("type")));
				continue;
			}
			if (/2CIUSERLIMIT/.exec(line)) {//2CIUSERLIMIT   RLIMIT_AS                      18077286400            unlimited
			    var rlimit = String(line.substr(line.indexOf(" RLIMIT")+1));
			    summary+=("\n"+	rlimit);
				continue;
			}
			if (/NATIVEMEMINFO/.exec(line)) {//0SECTION       NATIVEMEMINFO subcomponent dump routine
				summary+=("\n");
				summary+=("\n"+	lines[i].substr(lines[i].indexOf(" NATIVEMEMINFO")+1));
				summary+=("\n--------------------------------------\n");
				continue;
			}	
			if (/(MEMUSER\s{7}).+?(allocation)/.exec(line)){//5MEMUSER       |  |  |  +--Direct Byte Buffers: 29,753,776 bytes / 2462 allocations
			    lines[i]=lines[i].replace(/\s\s+/g, ' ');//consolidate spaces 
			    var indexOfFirstSpace = lines[i].indexOf(" ");
			    var indexOfColon = lines[i].indexOf(":");
			    var indexOfBytes = lines[i].indexOf(" bytes");
			    var byteValue=lines[i].substring(indexOfColon+2,indexOfBytes);//grab the byte value consider space after colon
			    byteValue=byteValue.replace(/\,/g,'');//remove commas
			    summary+=(lines[i].substring(indexOfFirstSpace, indexOfBytes)+"="+(byteValue/1024/1024).toFixed(2) + "mb\n");
			    continue;
			}
			if (/1STHEAPTYPE/.exec(line)||/1STSEGTYPE/.exec(line)) {//1STHEAPTYPE    Object Memory ... 1STHEAPTYPE Object Memory
				var memoryType = String(line).replace(/\s\s+/g, ' ');//remove multiple spaces
				memoryType = memoryType.substr(memoryType.indexOf(" ")+1);//1STHEAPTYPE Object Memory ... Object Memory
				summary+=("\n");
				summary+=("\n"+	memoryType);
				summary+=("\n-------------");
				continue;
			}
			if (/1STHEAPALLOC/.exec(line)||/1STHEAPTOTAL/.exec(line)||/1STSEGTOTAL/.exec(line)||/1STSEGINUSE/.exec(line)||/1STSEGFREE/.exec(line)||/1STHEAPINUSE/.exec(line)||/1STHEAPFREE/.exec(line)) {
				var memory = String(lines[i]).replace(/\s\s+/g, ' ');//remove extra spaces
				if (/\(/.exec(memory)){//1STSEGTOTAL    Total memory:                    46759936 (0x0000000002C98000)
					memory = / (.*?)( \()/.exec(memory);//everything between the first space and the first parenthesis
					var reAllNumbersFoundInTheString = /\b\d+\b/g;//regular expression to get all the numbers from a string
					memory = memory[1]  + " = " + decToMb(reAllNumbersFoundInTheString.exec(lines[i]));//since the memory value is the first number in this string	
				}else{//1STHEAPFREE    Bytes of Heap Space Free: 8cfa600
					var decValue = hexToDec(memory.substr(memory.indexOf(":")+1).trim());
					memory = memory.substr( memory.indexOf(" ")+ 1, memory.indexOf(":")+ 1) + "=" + decToMb(decValue) ;	
					}
				
				summary+=("\n"+	memory);
				continue;
			}
			if (/2LKPOOLTOTAL/.exec(line)) {//2LKPOOLTOTAL     Current total number of monitors: 2390
				summary+=("\n");
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("Current")));
				continue;
			}
			if (/1XMCURTHDINFO/.exec(line)) {//1XMCURTHDINFO  Current thread
				summary+=("\n\nCurrent Thread\n--------------------");
				for (j=i; j < lines.length; j++) {
					line = lines[j];
					var currentThread= String(lines[j]).replace(/\s\s+/g, ' ');//remove extra spaces
					if (/STACKTRACE /.exec(line)){
						summary+="\n"+currentThread.substr(currentThread.indexOf(" ")) ;	
					}
					if (/^NULL/.exec(line){
						break;
					}
				}
			}

		}//end of contents loop
		return summary;
}	

		
function decToMb(dec){
	dec = parseFloat(dec);
	return (dec/1024/1024).toFixed(2)+"MB";
}

function hexToDec(hex){
	return parseInt(hex, 16);
}
