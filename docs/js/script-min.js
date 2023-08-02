document.addEventListener("DOMContentLoaded",(function(){let e=[];const t=L.map("map").setView([-14.235004,-51.92528],5),a=L.layerGroup(),o=L.layerGroup(),r=L.layerGroup(),n=L.layerGroup(),s=L.layerGroup(),i=L.layerGroup(),l=L.layerGroup(),c=document.getElementById("telaerro-conteudo"),d=document.getElementById("telaerro"),p=document.getElementById("load"),m=document.getElementById("loadImg"),g=(e,t)=>e?`./js/locations/old/${e}/${t}`:`./js/locations/${t}`,u=["./img/loading0.gif","./img/loading1.gif","./img/loading2.gif"],h=[[!0,"GPON",()=>v(g(verData,"locations-gpon.json"),"GPON","green","somatorio-gpon")],[!0,"HFC",()=>v(g(verData,"locations-hfc.json"),"HFC","red","somatorio-hfc")],[!0,"Sobreposição",()=>v(g(verData,"locations-sobrepo.json"),"Sobreposição","yellow","somatorio-sobre")],[!0,"GPON Rede neutra",()=>v(g(verData,"locations-neutrogpon.json"),"GPON Rede neutra","grey","somatorio-neutragpon")],[!1,"HFC Rede neutra",()=>v(g(verData,"locations-neutrohfc.json"),"HFC Rede neutra","violet","somatorio-neutrahfc")],[!1,"ERRO Consulta API",()=>v(g(verData,"locations-erroapi.json"),"ERRO Consulta API","orange","somatorio-erroapi")],[!1,"Sem serviço FIXO",()=>v(g(verData,"locations-nada.json"),"Sem serviço FIXO","black","somatorio-nada")]],y=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors',maxZoom:18}),b={OpenStreetMap:y,"Satélite":L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:'Imagery &copy; <a href="https://www.arcgis.com/" target="_blank">ArcGIS</a>',maxZoom:18}),"Stamen Terrain":L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png",{attribution:'Map tiles by <a href="http://stamen.com" target="_blank">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0" target="_blank">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0" target="_blank">CC BY SA</a>',maxZoom:18}),"Esri World Imagery":L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri",maxZoom:18}),"CartoDB Positron":L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.carto.com/" target="_blank">CartoDB</a> contributors'}),"CartoDB Voyager":L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.carto.com/" target="_blank">CartoDB</a> contributors'}),"CartoDB Positron (Sem rótulos)":L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.carto.com/" target="_blank">CartoDB</a> contributors'}),"CartoDB Voyager (Sem rótulos)":L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.carto.com/">CartoDB</a> contributors'}),"CartoDB Dark Matter (Sem rótulos)":L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.carto.com/" target="_blank">CartoDB</a> contributors'}),"Esri World Street Map":L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri",maxZoom:18}),"Esri World Topo Map":L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri",maxZoom:18})},f={'GPON <img height="20" width="15" src="./img/marker-icon-green.png" alt="Marcador GPON"/>':a,'HFC <img height="20" width="15" src="./img/marker-icon-red.png" alt="Marcador HFC"/>':o,'Sobreposição <img height="20" width="15" src="./img/marker-icon-yellow.png" alt="Marcador Sobreposição"/>':r,'GPON Rede neutra <img height="20" width="15" src="./img/marker-icon-grey.png" alt="Marcador GPON Rede Neutra"/>':n,'HFC Rede neutra <img height="20" width="15" src="./img/marker-icon-violet.png" alt="Marcador HFC Rede Neutra"/>':s,'Sem serviço FIXO <img height="20" width="15" src="./img/marker-icon-black.png" alt="Marcador Sem serviço FIXO"/>':i,'ERRO Consulta API <img height="20" width="15" src="./img/marker-icon-orange.png" alt="Marcador ERRO Consulta API"/>':l},E={GPON:a,HFC:o,"Sobreposição":r,"GPON Rede neutra":n,"HFC Rede neutra":s,"Sem serviço FIXO":i,"ERRO Consulta API":l};async function v(t,a,o,r){try{const n=L.layerGroup(),s=await async function(e){try{const t=await fetch(e);if(!t.ok)throw new Error("Erro ao carregar dados.");return t.json()}catch(e){c.textContent=e.message,d.style.display="block"}}(t);e.push({type:a,color:o,data:s}),document.getElementById(r).innerHTML=`<span class="center">${s.length}</span>`;const i=L.icon({iconUrl:`./img/marker-icon-${o}.png`,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[0,-41]});s.forEach((function(e){L.marker([e.latitude,e.longitude],{icon:i}).bindPopup(e.name).addTo(n)})),s.length>0&&(a in E?E[a].addLayer(n):(c.textContent=`Tipo de localização desconhecido: ${a}`,d.style.display="block"))}catch(e){c.textContent=`Erro ao carregar dados: ${e}`,d.style.display="block"}}async function w(){if(m.setAttribute("src",u[Math.floor(Math.random()*u.length)]),!function(){const e=document.getElementById("cep").value,t=document.getElementById("numero").value;return p.style.display="none",8!==e.length?(c.innerHTML="O campo CEP deve conter 8 números.",d.style.display="block",!1):!(t.length<1||t.length>9)||(c.innerHTML="O campo Número deve conter de 1 a 9 números.",d.style.display="block",!1)}())return;d.style.display="none",p.style.display="block";const e=document.getElementById("cep").value,a=document.getElementById("numero").value,o=`https://api.amxrest.net/viability/${e}/${a}`,r=`https://planos.claro.com.br/monte-sua-combinacao?cep=${e}&number=${a}`;try{const n=await fetch(o);if(n.ok){const o=await n.json();let s="",i="",l="",p="";try{const t=await fetch(`https://viacep.com.br/ws/${e}/json/`);if(t.ok){const e=await t.json();s=e.logradouro||o.data.logradouro,i=e.bairro||o.data.bairro,l=e.localidade||o.data.cidade,p=e.uf||o.data.uf}else s=o.data.logradouro,i=o.data.bairro,l=o.data.cidade,p=o.data.uf,a=o.data.number}catch(e){s=o.data.logradouro,i=o.data.bairro,l=o.data.cidade,p=o.data.uf,a=o.data.number}let m="<span> Localização aproximada <br> ";m+=`Ver no <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${s}, ${a}, ${l}, ${p}, Brasil`)}" target="_blank"> Google Maps <img src="./img/google_maps_icon.png" /></a> </span> <br>`,m+=`Consulta oficial disponível na <a href="${r}" target="_blank">CLARO</a>`,m+=`<p>CEP: ${e} Número: ${a}<br>`,m+=`Endereço: ${s}, ${a}, ${i}, ${l}, ${p}, Brasil </p>`;for(const e of o.data.technologies){let t=null;const a=[];if("GPONAVTAL"===o.data.cableNodeID)t="REDE NEUTRA VTAL";else if("GPONAATC"===o.data.cableNodeID)t="REDE NEUTRA ATC";else if("Satellite"===e.name)t="SATELLITE / MÓVEL";else if(e.gpon)t="GPON (FIBRA)";else{if(e.gpon){const t='Erro ao definir tipo de tecnologia, se possível reporte via <a href="https://github.com/dudu15051505/mapa-claro-beta/issues/" target="_blank">GITHUB</a> informando o CEP e Numero pesquisado para futura verificação. <br>';throw t+=m+=`<span>${JSON.stringify(e,null,"\t")}</span>`,new Error(t)}t="HFC (COAXIAL)"}if(e.tv&&a.push("TV"),e.phone&&a.push("TELEFONE FIXO"),e.internet&&a.push("INTERNET"),a.length>0){m+=`<p> SERVIÇOS VIA ${t}:<br>`;for(const e of a)m+=`&#9679; ${e}<br>`;m+="</p>"}else"Cable"===e.name&&0===a.length?(m+=`<span> A tecnologia ${t} retornou na consulta, mas não a serviços ativos na API</span> <br>`,m+=`<span>Realize uma consulta oficial diretamente no site da <a href="${r}" target="_blank">CLARO</a> para confirmar os serviços disponíveis</span> <br>`):(m+='<span> Ocorreu algum erro, se possível reporte via <a href="https://github.com/dudu15051505/mapa-claro-beta/issues/" target="_blank">GITHUB</a> informando o CEP e Numero pesquisado para futura verificação.</span> <br>',m+=`<span>${JSON.stringify(e,null,"\t")}</span>`)}try{const e=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(`${s} ${a}, ${l}, ${p}, Brasil`)}`);if(e.ok){const o=await e.json();if(o.length>0){const e=o[0],a=parseFloat(e.lat),r=parseFloat(e.lon),n=L.icon({iconUrl:"./img/marker-icon-blue.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[0,-41]});L.marker([a,r],{icon:n}).addTo(t).bindPopup(m).openPopup(),t.panTo(new L.LatLng(a,r)),t.setView([a,r],16)}else{const e=`https://www.openstreetmap.org/search?query=${encodeURIComponent(`${s} ${a}, ${l}, ${p}, Brasil#map=5/-13.240/-50.383`)}`;c.innerHTML=`<b>Endereço não encontrado na base de geolocalização <a href="${e}" target="_blank">OpenStreetMap <img src="./img/osm_icon.svg" style="height: 20px;width: 20px;" /></a></b> <br><br>Dados retornados pela API Claro: <br><br> ${m}`,d.style.display="block"}}else c.innerHTML="Erro ao processar a solicitação de geocodificação.",d.style.display="block"}catch(e){c.innerHTML="Erro ao processar a solicitação de geocodificação.",d.style.display="block"}}else c.innerHTML="Erro ao consultar a API.",d.style.display="block"}catch(e){c.innerHTML="Erro ao processar a solicitação.",d.style.display="block"}p.style.display="none"}L.control.layers(b,f).addTo(t),async function(){fetch("./js/locations/locations-data-lista.json").then((e=>{if(!e.ok)throw new Error("Erro ao carregar lista de dados passados.");return e.json()})).then((e=>{const t=document.getElementById("lista-data-dados");if(e.forEach(((e,t)=>{const a=new Date(e.data),o=`${a.getDate()+1}/${a.getMonth()+1}/${a.getFullYear()}`,r=new Option(e.informacaoExtra?`${o} - ${e.informacaoExtra}`:`${o}`,e.valorCampo);document.getElementById("lista-data-dados").appendChild(r);const n=document.getElementById("dados-info"),s=document.createElement("span");if(s.setAttribute("id",`dados-info-${t}`),s.style.display="none",e.textoUrl){const t=document.createElement("a");t.setAttribute("href",e.url),t.setAttribute("target","_blank"),t.textContent=e.textoUrl,s.appendChild(t),n.appendChild(s)}})),verData)t.value=verData;else{t.options[t.options.length-1].selected=!0}if(document.getElementById(`dados-info-${t.selectedIndex}`)){document.getElementById(`dados-info-${t.selectedIndex}`).style.display="block"}})).catch((e=>{c.textContent=e,d.style.display="block"}))}(),h.forEach((async(e,a)=>{try{await Promise.race([e[2]()]);e[0]&&async function(e){const a=E[e];a?a.addTo(t):(c.textContent=`Camada não encontrada: ${e}`,d.style.display="block")}(e[1])}catch(e){c.textContent=`Erro ao carregar dados: ${e}`,d.style.display="block"}})),y.addTo(t),document.getElementById("formulario").addEventListener("submit",(function(e){e.preventDefault(),w()})),document.getElementById("busca").addEventListener("submit",(function(e){e.preventDefault(),function(){const e=document.getElementById("busca-valor").value;fetch("https://nominatim.openstreetmap.org/search?format=json&q="+e).then((e=>e.json())).then((a=>{if(a.length>0)d.style.display="none",t.setView([parseFloat(a[0].lat),parseFloat(a[0].lon)],10),L.marker([parseFloat(a[0].lat),parseFloat(a[0].lon)]).addTo(t);else{const t=`https://www.openstreetmap.org/search?query=${encodeURIComponent(e)}`;c.innerHTML=`Local não encontrado na base de geolocalização <a href="${t}#map=5/-13.240/-50.383" target="_blank">OpenStreetMap <img src="./img/osm_icon.svg" style="height: 20px;width: 20px;" /></a></b> <br><br>`,d.style.display="block"}})).catch((e=>{c.innerHTML=`Erro na busca: <br><br> ${e}`,d.style.display="block"}))}()}))}));