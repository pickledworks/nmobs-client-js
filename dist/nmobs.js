var DisplayUtilityModule=function(){var t={Info:function(t){console.log(t)},Error:function(t,e){console.log(t),console.log(e)}},e=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+""+t()+t()+t()+t()+t()+t()},i=function(t,e){return t.getAttribute(e)||null},n=function(t){if("sticky"===i(t,"data-adtype"))return{width:320,height:50};if("fullpage"===i(t,"data-adtype"))return{width:320,height:480};var e=i(t,"data-adsize")||null;if(e){var n=e.split("x");return{width:n[0],height:n[1]}}return null},o=function(t,e){return e?"object"==typeof t&&null!==t:"object"==typeof t},a=function(t){return"function"==typeof t},d=function(e,i,n){try{var d="R"+parseInt(10000009*Math.random()),r={},l=document.createElement("script");l.type="text/javascript",l.src=e+"&callback="+d,document.body.appendChild(l),window[d]=function(e){if(a(i))if(o(e))"<span></span>"===e.ad?a(n)&&n("No Ad For This Id",e.ufid):i(e);else try{r=JSON.parse(e),o(r)&&("<span></span>"==typeof r.ad?a(n)&&n("No Ad For This Id",r.ufid):i(r))}catch(e){t.Error("_JsonpCall",e),a(n)&&n("Network Error")}}}catch(e){t.Error("_JsonpCall",e),a(n)&&n("Network Error")}},r=function(t,e){for(var i=function(t,e){return t[e]||null},n=0;n<e.length;n++){var o=i(t,e[n]);if(null===o)return null;if(t=o,n===e.length-1)return o}},l=function(t){return{SetStyle:function(e,i){t.style[e]=i},Html:function(e){t.innerHTML=e},Append:function(e){t.appendChild(e)}}},c=window.location.hostname.replace(/www\./g,"").replace(/m\./g,"").replace(/\./g,"_");return{Logger:t,Guid:e,GetAttribute:i,GetAdSize:n,JsonpCall:d,GetIfAvailable:r,ClearDomainString:c,Element:l}}(),DisplayConfigurationModule=function(t){var e={uzman_tv:{programmatic:{_300x250:{ligatusId:"78561",criteoId:"352383",googleId:{PartnerId:"ca-pub-4939207172719226",SlotId:"9236540058"}},_320x50:{ligatusId:"78559",criteoId:"352437",googleId:{PartnerId:"ca-pub-4939207172719226",SlotId:"9236540058"}}},rtb_rank:[],resize:{_320x50:{width:320,height:100},_300x250:{width:336,height:280},_320x142:{width:320,height:100},_Sticky:{width:320,height:50}}},zaytung_com:{programmatic:{_300x250:{},_320x50:{ligatusId:"78579",criteoId:"326379",googleId:{PartnerId:"ca-pub-4939207172719226",SlotId:"7759832178"}}},rtb_rank:[],resize:{_320x50:{width:320,height:100},_300x250:{width:336,height:280},_320x142:{width:320,height:100},_Sticky:{width:320,height:50}}},ucakara_com:{programmatic:{_300x250:{},_320x50:{ligatusId:"",criteoId:"353982",googleId:"",dfpId:""}},rtb_rank:[],resize:{_320x50:{width:320,height:100},_300x250:{width:336,height:280},_320x142:{width:320,height:100},_Sticky:{width:320,height:50}}},nefisyemektarifleri_com:{rtb_rank:[]},internethaber_com:{rtb_rank:["adx","inrool","admatic"],programmatic:{_320x50:{size:{width:320,height:100}},_300x250:{size:{width:336,height:280}},_320x142:{size:{width:320,height:100}},_320x100:{size:{width:320,height:100}},_Sticky:{size:{width:320,height:50}},_Fullpage:{size:{width:320,height:480}}}},elmaelma_com:{rtb_rank:["adx","inrool","admatic"],programmatic:{_320x50:{size:{width:320,height:100}},_300x250:{size:{width:336,height:280}},_320x142:{size:{width:320,height:100}},_320x100:{size:{width:320,height:100}},_Sticky:{size:{width:320,height:50}},_Fullpage:{size:{width:320,height:480}}}},internetspor_com:{rtb_rank:["adx","inrool","admatic"],programmatic:{_320x50:{size:{width:320,height:100}},_300x250:{size:{width:336,height:280}},_320x142:{size:{width:320,height:100}},_320x100:{size:{width:320,height:100}},_Sticky:{size:{width:320,height:50}},_Fullpage:{size:{width:320,height:480}}}},memurhaber_com:{rtb_rank:["adx","inrool","admatic"],programmatic:{_320x50:{size:{width:320,height:100}},_300x250:{size:{width:336,height:280}},_320x142:{size:{width:320,height:100}},_320x100:{size:{width:320,height:100}},_Sticky:{size:{width:320,height:50}},_Fullpage:{size:{width:320,height:480}}}},localhost:{programmatic:{_300x250:{ligatusId:"89193",googleId:{PartnerId:"ca-pub-4939207172719226",SlotId:"7759832178"},criteoId:"",dfpId:"",size:{width:336,height:280}},_320x50:{ligatusId:"",googleId:{PartnerId:"ca-pub-9612539386533291",SlotId:"3606100010"},size:{width:320,height:100}},_320x100:{ligatusId:"89195",googleId:{PartnerId:"ca-pub-4939207172719226",SlotId:"7759832178"},size:{width:320,height:100}},_320x142:{ligatusId:"89195",criteoId:"",googleId:{PartnerId:"ca-pub-4939207172719226",SlotId:"9236540058"},size:{width:320,height:100}},_Fullpage:{admaticId:{PublisherId:"adm-pub-159427406117",NetworkId:"132121923976",SlotId:"206"},tagonId:{AccountId:"57fb51268a672",InventoryId:"57c6be3c4b674",AdunitId:"57c6be3c4d26e"},size:{width:320,height:480}},_Sticky:{inroolId:["http://c.inrool.com/js/c.js?m=1","http://c.inrool.com/js/trigger.js"],googleId:{PartnerId:"ca-pub-9612539386533291",SlotId:"3606100010"},size:{width:320,height:50}}},rtb_rank:["criteo","adx","admatic","inrool","ligatus"]}},i=function(){return"undefined"!=typeof e[t.ClearDomainString]?e[t.ClearDomainString]:null},n=function(){return i().rtb_rank||[]},o=function(e,n,o){var a=null;return a="sticky"===e.AdType?{Id:o||t.GetIfAvailable(i(),["programmatic","_Sticky",n]),Size:t.GetIfAvailable(i(),["programmatic","_Sticky","size"])}:"fullpage"===e.AdType?{Id:o||t.GetIfAvailable(i(),["programmatic","_Fullpage",n]),Size:t.GetIfAvailable(i(),["programmatic","_Fullpage","size"])}:{Id:o||t.GetIfAvailable(i(),["programmatic","_"+e.AdSize.width+"x"+e.AdSize.height,n]),Size:t.GetIfAvailable(i(),["programmatic","_"+e.AdSize.width+"x"+e.AdSize.height,"size"])},a||null};return{GetConfig:i,GetProgrammaticSourceForSize:o,GetRTBRank:n}}(DisplayUtilityModule),DisplayAdunitModule=function(t,e){var i=i||{},n=function(t){var e=t?t.split("/"):[];return e.length>=1?{PartnerId:e[0],SlotId:e[1]}:null},o=function(t){var e=t?t.split("/"):[];return e.length>=1?{PublisherId:e[0],NetworkId:e[1],SlotId:e[2]}:null},a=function(t){var e=t?t.split("/"):[];return e.length>=1?{AccountId:e[0],InventoryId:e[1],AdunitId:e[2]}:null},d=function(t){var e=t?t.split("/"):[];return e.length>=1?e:null},r=function(e){var i=e.id;return i||(e.id=t.Guid()),e.id},l=function(i){var l={};l.AdElement=i,l.AdunitId=r(i),l.AdType=t.GetAttribute(i,"data-adtype"),l.AdId=t.GetAttribute(i,"data-adid"),l.AdSize=t.GetAdSize(i),l.AdElement.setAttribute("data-adstate","ready"),l.Programmatic={AdX:e.GetProgrammaticSourceForSize(l,"googleId",n(t.GetAttribute(i,"data-googleid"))),Ligatus:e.GetProgrammaticSourceForSize(l,"ligatusId",t.GetAttribute(i,"data-ligatusid")),Criteo:e.GetProgrammaticSourceForSize(l,"criteoId",t.GetAttribute(i,"data-criteoid")),Tagon:e.GetProgrammaticSourceForSize(l,"tagonId",a(t.GetAttribute(i,"data-tagonid"))),AdMatic:e.GetProgrammaticSourceForSize(l,"admaticId",o(t.GetAttribute(i,"data-admaticid"))),InRool:e.GetProgrammaticSourceForSize(l,"inroolId",d(t.GetAttribute(i,"data-inroolid")))},l.Callback={Success:function(){},Fail:function(){}};var s=t.GetAttribute(i,"data-success");"undefined"!=typeof window[s]&&(l.Callback.Success=window[s]);var u=t.GetAttribute(i,"data-fail");return"undefined"!=typeof window[u]&&(l.Callback.Fail=window[u]),c.Set(l),l},c={Get:function(t){return i[t]||null},Set:function(t){i[t.AdunitId]=t}};return{ElementToAdunit:l,Adunits:c}}(DisplayUtilityModule,DisplayConfigurationModule),DisplayUserModule=function(t){var e=function(e){NMOBS_USER_URL="//user.tagon.co?v=1",null!==sessionStorage.getItem("tg_str")?n(JSON.parse(sessionStorage.getItem("tg_str")),e):t.JsonpCall(NMOBS_USER_URL,function(t){sessionStorage.setItem("tg_str",JSON.stringify(t)),n(t,e)})},i={ID:"undefined",Country:"undefined",City:"undefined",Platform:"undefined",Browser:{Version:"undefined",Name:"undefined"},OS:{Version:"undefined",Name:"undefined"},Language:"undefined",Manufacturer:"undefined",Model:"undefined",Carrier:"undefined",IsRobot:"undefined",Connection:"undefined"},n=function(t,e){function n(t){return""!==t&&"undefined"!=typeof t&&null!==t}function o(t){return t.toLocaleUpperCase()}n(t.uid)&&(i.ID=o(t.uid)),n(t.country)&&(i.Country=o(t.country)),n(t.city)&&(i.City=o(t.city)),n(t.platform)&&(t.platform.toLowerCase().indexOf("mobile")>=0?i.Platform="MOBILE":i.Platform="DESKTOP"),n(t.browser.name)&&(i.Browser.Name=o(t.browser.name)),n(t.browser.version)&&(i.Browser.Version=o(t.browser.version)),n(t.os.name)&&(i.OS.Name=o(t.os.name)),n(t.os.version)&&(i.OS.Version=o(t.os.version)),n(t.language)&&(i.Language=o(t.language)),n(t.manufacturer)&&(i.Manufacturer=o(t.manufacturer)),n(t.model)&&(i.Model=o(t.model)),n(t.isp)&&(i.Carrier=o(t.isp)),n(t.isRobot)&&(i.IsRobot=t.isRobot),n(t.connection)&&(i.Connection=o(t.connection)),e()};return{Init:e,SetValue:n,User:i}}(DisplayUtilityModule),DisplayViewModule=function(t,e){var i=function(e){var i=t.Adunits.Get(e.ufid);console.log(i,e);var n=document.createElement("DIV");n.style.textAlign="center",document.getElementById(e.ufid).appendChild(n),"zaytung.com"==window.location.host||"www.zaytung.com"==window.location.host?n.style.width="320px":n.style.width="100%",n.style.display="none",n.style.position="fixed",n.style.height="100%",n.style.top="0px",n.style.left="0px",n.style.right="0px",n.style.bottom="0px",n.style.textAlign="center",n.style.backgroundColor="#000",n.style.zIndex="2147483647",n.style.paddingTop="45px",n.innerHTML='<div id="nmobs_fullpage_loader" class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>';var o=document.createElement("iframe");o.width=320,o.height=480,o.frameBorder=0,o.style.display="none",o.onload=function(){console.log("adFrame loaded"),document.getElementById("nmobs_fullpage_loader").style.display="none",o.style.display="inline-block"};var a=window.top.innerWidth/320<(window.top.innerHeight-45)/480?window.top.innerWidth/320:(window.top.innerHeight-45)/480;o.style.transform="scale("+a+")",o.style.transformOrigin="top",o.style.width="320px",o.style.minWidth="320px",n.appendChild(o),o.src="about:self",adDocument=o.contentWindow.document,adDocument.open("text/html","replace"),e.clickUrl?adDocument.write('<html><head><style>body { margin:0px; padding:0px; }</style></head><body onload="inDapIF=true; inFIF=true"><script>inDapIF=true; inFIF=true;</script><div id="'+e.ufid+'">'+adUnit.ad+'<script> for (var a = document.getElementsByTagName("a"), b = 0; b < a.length; b++) { var c = a[b]; if("#" != c.href) c.href = "'+e.clickUrl+'" + "&r=" + encodeURIComponent(c.href); c.target="_top"; c.onclick = function(){ window.open(c.href); }</script></div></body></html>'):adDocument.write('<html><head><style>body { margin:0px; padding:0px; }</style></head><body onload="inDapIF=true; inFIF=true"><script>inDapIF=true; inFIF=true;</script><div id="'+e.ufid+'">'+e.ad+"</div></body></html>"),adDocument.close();var d=document.createElement("DIV");d.style.height="45px","zaytung.com"==window.location.host||"www.zaytung.com"==window.location.host?d.style.width="320px":d.style.width="100%",d.style.position="fixed",d.style.top="0px",d.style.left="0px",d.style.right="0px",d.style.backgroundColor="#000",d.style.opacity="0.65";var r=document.createElement("DIV");r.style.float="left",r.style.margin="3px",r.style.color="white",r.style.padding="9px",r.style.fontSize="16px",r.innerHTML="Detaylı bilgi için tıklayın",d.appendChild(r);var l=document.createElement("canvas");l.style.position="absolute",l.style.width="20px",l.style.height="20px",l.style.top="13px",l.style.right="13px",l.width=20,l.height=20,l.style.zIndex="99999999",l.style.display="none",setTimeout(function(){l.style.display="block"},3500);var c=l.getContext("2d");c.fillStyle="#000",c.fill(),c.strokeStyle="#FFF",c.lineWidth=5,c.beginPath(),c.moveTo(0,0),c.lineTo(20,20),c.moveTo(0,20),c.lineTo(20,0),c.stroke(),l.addEventListener("click",function(){document.getElementById(e.ufid).style.display="none"}),d.appendChild(l),n.appendChild(d),n.style.display="block"},n=function(t,e){var i=document.createElement("canvas");i.style.position="absolute",i.style.width="25px",i.style.height="25px",i.style.top="-13px",i.style.left="1px",i.width=25,i.height=25,i.style.zIndex="99999999";var n=i.getContext("2d");n.fillStyle="#000",n.fill(),n.strokeStyle="#000",n.lineWidth=3,n.beginPath(),n.moveTo(6.5,6.5),n.lineTo(16,16),n.moveTo(6.5,16),n.lineTo(16,6.5),n.moveTo(21,15.5),n.arc(11.5,11.5,10,0,2*Math.PI),n.fillStyle="#FFF",n.fill(),n.stroke(),i.addEventListener("click",function(){document.getElementById(t.ufid).style.display="none"});var o=document.getElementById(t.ufid);if(o.style.position="fixed",o.style.bottom="0px",o.style.left="0px",o.style.right="0px",o.style.textAlign="center",o.style.width="100%",o.style.height="50px",o.style.zIndex="99999998",o.style.backgroundColor="#FFF",o.style.borderTop="2px solid #000",o.innerHTML="",o.appendChild(i),"google"===e){var a=document.createElement("DIV");a.style.width="320px",a.style.height="50px",a.style.backgroundColor="#FFF",a.style.marginLeft="auto",a.style.marginRight="auto",a.innerHTML=t.ad,o.appendChild(a)}else{var a=document.createElement("iframe");a.width=320,a.height=50,a.frameBorder=0,t.clickUrl?a.srcdoc='<head><style>body { margin:0px; padding:0px; background-color: #FFF }</style></head><body><div id="'+t.ufid+'" style="width: 320px; height:50px; overflow:hidden;">'+t.ad+'</div><script> for (var a = document.getElementsByTagName("a"), b = 0; b < a.length; b++) { var c = a[b]; if("#" != c.href) c.href = "'+t.clickUrl+'" + "&r=" + encodeURIComponent(c.href); c.target="_top"; c.onclick = function(){ window.open(c.href); }; }</script></body>':a.srcdoc='<head><style>body { margin:0px; padding:0px; background-color: #FFF }</style></head><body><div id="'+t.ufid+'">'+t.ad+"</div></body>",a.allowTransparency="true",a.frameBorder="0",o.appendChild(a)}},o=function(e,i){var n=document.getElementById(e.ufid),o=t.Adunits.Get(e.ufid);if(null!==n){n.style.zIndex="1",n.style.width=o.AdSize.width+"px",n.style.height=o.AdSize.height+"px",n.style.backgroundColor="#FFF",n.innerHTML="";var a=document.createElement("IFRAME");a.width=o.AdSize.width,a.height=o.AdSize.height,a.frameBorder=0,e.clickUrl&&"[[IFRAME]]"!==e.ad?a.srcdoc='<head><style>body { margin:0px; padding:0px; background-color: #FFF }</style></head><body><div id="'+e.ufid+'" style="width:'+o.AdSize.width+"px; height:"+o.AdSize.height+'px; overflow:hidden;">'+e.ad+'</div><script> for (var a = document.getElementsByTagName("a"), b = 0; b < a.length; b++) { var c = a[b]; if("#" != c.href) c.href = "'+e.clickUrl+'" + "&r=" + encodeURIComponent(c.href); c.target="_parent"; }</script></body>':"[[IFRAME]]"!==e.ad&&(a.srcdoc='<head><style>body { margin:0px; padding:0px; background-color: #FFF }</style></head><body><div id="'+e.ufid+'" style="width:'+o.AdSize.width+"px; height:"+o.AdSize.height+'px; overflow:hidden;">'+e.ad+"</div></body>"),a.allowTransparency="true",a.frameBorder="0",n.appendChild(a)}},a=function(e,a){var d=t.Adunits.Get(e.ufid);"fullpage"===d.AdType?i(e,a):"sticky"===d.AdType?n(e,a):"dynamic"===d.AdType&&o(e,a)};return{Show:a}}(DisplayAdunitModule,DisplayMopubModule),ProgrammaticAdmaticModule=function(t,e){var i=function(i){if(i){var n=t.Adunits.Get(i);if(n.Programmatic.AdMatic.Id){var o=n.Programmatic.AdMatic.Id,a=n.Programmatic.AdMatic.Size,d=e.Element(n.AdElement);d.Html(""),d.SetStyle("display","none");var r=document.createElement("ins");r.setAttribute("data-publisher",o.PublisherId),r.setAttribute("data-ad-type","interstitial"),r.setAttribute("class","adm-ads-area"),r.setAttribute("data-ad-network",o.NetworkId),r.setAttribute("data-ad-sid",o.SlotId),r.setAttribute("data-ad-width",a.width),r.setAttribute("data-ad-height",a.height);var l=document.createElement("script");l.type="text/javascript",l.src="http://cdn2.admatic.com.tr/showad/showad.js",document.body.appendChild(r),document.body.appendChild(l)}else window.top.ad_passback(i)}};return{Init:i}}(DisplayAdunitModule,DisplayUtilityModule),ProgrammaticAdxModule=function(t,e,i,n){var o=function(e){if(e){var o=t.Adunits.Get(e);if(o.Programmatic.AdX.Id){var a=o.Programmatic.AdX.Id,d=o.Programmatic.AdX.Size,r=i.Element(o.AdElement),l='<ins class="adsbygoogle" style="display:inline-block;width:'+d.width+"px;height:"+d.height+'px" data-ad-client="'+a.PartnerId+'" data-ad-slot="'+a.SlotId+'"></ins>';"sticky"===o.AdType?n.Show({ufid:o.AdunitId,ad:l},"google"):(r.SetStyle("width",d.width+"px"),r.SetStyle("height",d.height+"px"),r.Html(l)),(adsbygoogle=window.adsbygoogle||[]).push({params:{google_alternate_ad_url:window.location.origin+"/ad_passback.html?placeid="+e}})}else window.top.ad_passback(e)}};return{Init:o}}(DisplayAdunitModule,DisplayConfigurationModule,DisplayUtilityModule,DisplayViewModule),ProgrammaticCriteoModule=function(t,e){var i=function(i){if(i){var n=t.Adunits.Get(i);if(n.Programmatic.Criteo.Id&&"fullpage"!==n.AdType){var o=e.Element(n.AdElement),a=n.Programmatic.Criteo.Id,d=n.Programmatic.Criteo.Size;336===d.width&&280===d.height&&(d={width:300,height:250}),320===d.width&&100===d.height&&(d={width:320,height:50}),o.SetStyle("width",d.width+"px"),o.SetStyle("height",d.height+"px"),o.Html(""),Criteo.DisplayAd({zoneid:a,async:!0,containerId:i,callbackerror:window.top.ad_passback(i)})}else window.top.ad_passback(i)}};return{Init:i}}(DisplayAdunitModule,DisplayUtilityModule),ProgrammaticInroolModule=function(t,e){var i=function(i){if(i){var n=t.Adunits.Get(i);if(n.Programmatic.InRool.Id&&n.Programmatic.InRool.Id.length>=1){var o=e.Element(n.AdElement),a=n.Programmatic.InRool.Id;o.Html(""),o.SetStyle("display","none");var d=document.createElement("script");d.src=decodeURIComponent(a[0]),d.onload=function(){var t=document.createElement("script");t.src=decodeURIComponent(a[1]),document.body.appendChild(t)},document.body.appendChild(d)}else window.top.ad_passback(i)}};return{Init:i}}(DisplayAdunitModule,DisplayUtilityModule),ProgrammaticLigatusModule=function(t,e,i){var n=function(e){if(e){var n=t.Adunits.Get(e);if(n.Programmatic.Ligatus.Id&&"fullpage"!==n.AdType){var n=t.Adunits.Get(e),o=n.Programmatic.Ligatus.Id,a=n.Programmatic.Ligatus.Size,d=i.Element(n.AdElement);d.SetStyle("width",a.width+"px"),d.SetStyle("height",a.height+"px"),d.Html("");var r=document.createElement("IFRAME");r.style.width=a.width+"px",r.style.height=a.height+"px",r.frameBorder=0,r.src="http://a.ligatus.com/?ids="+o+"&t=async",d.Append(r)}else window.top.ad_passback(e)}};return{Init:n}}(DisplayAdunitModule,DisplayConfigurationModule,DisplayUtilityModule),ProgrammaticTagonModule=function(t,e){var i=function(i){if(i){var n=t.Adunits.Get(i);if(n.Programmatic.Tagon.Id){var o=e.Element(n.AdElement),a=n.Programmatic.Tagon.Id;o.Html(""),o.SetStyle("display","none");var d=document.createElement("script");d.type="text/javascript",d.src="//js.tagon.co/tagon.js",d.onload=function(){Tagon.Init([{AccountId:a.AccountId,Format:"FULLPAGE",InventoryId:a.InventoryId,AdunitId:a.AdunitId,FailCallback:function(){window.top.ad_passback(i)},SuccessCallback:function(){}}])},document.body.appendChild(d)}else window.top.ad_passback(i)}};return{Init:i}}(DisplayAdunitModule,DisplayUtilityModule),DisplayProgrammaticModule=function(t,e,i,n,o,a,d,r,l){var c={},s=e.GetRTBRank()||[],u=function(t){var e=null;if(t){for(var i=0;i<s.length;i++)if(t==s[i]&&s.length>=i+2){e=s[i+1];break}}else e=s[0];return e},h=function(e){var s=u(c[e]);if(s)return c[e]=s,"criteo"===s?i.Init(e):"adx"===s?n.Init(e):"ligatus"===s?o.Init(e):"admatic"===s?d.Init(e):"inrool"===s?r.Init(e):"tagon"===s&&a.Init(e),null;var h=l.Adunits.Get(e),p=t.Element(h.AdElement);p.Html(""),p.SetStyle("display","none")};return{Run:h,ProgressTable:c}}(DisplayUtilityModule,DisplayConfigurationModule,ProgrammaticCriteoModule,ProgrammaticAdxModule,ProgrammaticLigatusModule,ProgrammaticTagonModule,ProgrammaticAdmaticModule,ProgrammaticInroolModule,DisplayAdunitModule),DisplayMopubModule=function(t,e,i,n){var o=function(){var t="";return t+=encodeURIComponent(n.User.Browser.Name)+",",t+=encodeURIComponent(n.User.Carrier)+",",t+=encodeURIComponent(n.User.City)+",",t+=encodeURIComponent(n.User.Connection)+",",t+=encodeURIComponent(n.User.Country)+",",t+=encodeURIComponent(n.User.Language)+",",t+=encodeURIComponent(n.User.Manufacturer)+",",t+=encodeURIComponent(n.User.Model)+",",t+=encodeURIComponent(n.User.OS.Name)+",","ISTANBUL"!==n.User.City&&(t+=encodeURIComponent("ISTANBULDISI")+","),t},a=function(n){function a(t){var e=document.cookie.indexOf(t+"="),i=e+t.length+1;if(!e&&t!=document.cookie.substring(0,t.length))return null;if(e==-1)return null;var n=document.cookie.indexOf(";",i);return n==-1&&(n=document.cookie.length),unescape(document.cookie.substring(i,n))}function d(){if(!a(r)||"#nofcap"===window.location.hash){var e=new Date;document.cookie=r+"="+escape(t.Guid())+";expires="+new Date(e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()+" 23:59:59 GMT+0000").toGMTString()+";path=/;domain="}return a(r)}var r="mopub-udid-cookie",l="https://ads.mopub.com:/m/ad?id="+n.AdId+"&ufid="+n.AdunitId+"&q="+o()+"&mobile_web=1&udid=MOBILEWEBCOOKIE:"+d()+"&jsonp=1";t.JsonpCall(l,function(t,e){i.Show(t)},function(t,i){e.Run(i)})};return{GetAd:a}}(DisplayUtilityModule,DisplayProgrammaticModule,DisplayViewModule,DisplayUserModule),DisplayLoaderModule=function(t,e,i){var n=function(){var n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href="//campaign.nmobs.com/display.css",document.getElementsByTagName("head")[0].appendChild(n),i.Init(function(){if("MOBILE"===i.User.Platform)for(var n=document.getElementsByClassName("nmobs"),o=0;o<n.length;o++)if(!n[o].hasAttribute("data-adstate")){var a=t.ElementToAdunit(n[o]);e.GetAd(a)}})};return{Init:n}}(DisplayAdunitModule,DisplayMopubModule,DisplayUserModule);window.top.ad_passback=window.top.ad_passback||function(t){return function(e,i){setTimeout(function(){t.Run(e)},"1000")}}(DisplayProgrammaticModule),DisplayLoaderModule.Init(),window.top.nmobs={refresh:function(){DisplayLoaderModule.Init()}};