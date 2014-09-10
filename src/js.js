
var tamanhowidth = 450;
 
 var milisec=0 
 var seconds=5 


var palavramomento = 0;
var frasequeb = new Array();
var quant;
var teste = false;
var quantpalavraserradas = 0;
var palcert=false;
var timeron = true;

var tempofeito=0;

function display(){
if (document.getElementById('contagem1').innerHTML != "0.0"){
	 if (milisec<=0){ 
		milisec=9 
		seconds-=1 
	 } 
	 if (seconds<=-1){ 
		milisec=0 
		seconds+=1 
	 } 
	 else 
		milisec-=1 
		document.getElementById('contagem1').innerHTML =seconds+"."+milisec 
		setTimeout("display()",100) 
	}else{
		//fim do primeiro cronometro
		document.getElementById('contadorsumir').style.visibility = 'hidden'
		document.getElementById('campodigitar').disabled = false;
		document.getElementById('campodigitar').focus();
		timer();
		}
} 

function timer(){
	if (timeron){
	if (tempofeito <= 180){
		tempofeito += 1;
		if (document.getElementById('contador2').innerHTML > 0){document.getElementById('contador2').innerHTML -= 1;}
		setTimeout("timer()",1000);
	}else{
		document.getElementById('parabens').innerHTML = "<b>Oooops</b><br><br>O seu tempo acabou! Por favor tente novamente!<br><br>";
		document.getElementById('parabens').style.visibility = 'visible';
		timeron = false;
		document.getElementById('contador2').innerHTML = 0;
	}}
} 

function movercarrinho(palavramomento){
	var porc = Math.floor((palavramomento/quant)*100);
	var left = Math.floor(((tamanhowidth - 60) * porc)/100);
	document.getElementById('car').style.left = left+"px";
}

function fim(boleano){//o que acontece quando termina o jogo e o cara conseguiu se boleano for true.
	var tempofinal = tempofeito/60;
	var aprov = (100 - (Math.floor((quantpalavraserradas/quant)*100)));
	document.getElementById('idvelocidade').innerHTML = Math.floor(quant /tempofinal);
	document.getElementById('idaproveitamento').innerHTML = aprov;
	document.getElementById('parabens').style.visibility = 'visible';
	tempofinal = Math.floor(quant / tempofinal);
	//document.getElementById('blahcomp').href = "javascript: window.open('http://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fjapaneseway.freetzi.com%2F1%2F"+tempofinal+".jpg&t=Digit%C3%B4metro','Digitometro','menubar=1,resizable=1,width=450,height=300')";
	timeron = false; 
	document.getElementById('contador2').innerHTML = 0;
}

function acender(qual){
	document.getElementById('fraseparte' + (parseInt(qual) - 1)).className = 'normal';
	document.getElementById('fraseparte' + (parseInt(qual))).className = 'marcado';
	}
	
function digitar(escrito){
	if (escrito.substr(0, escrito.length) == frasequeb[palavramomento].substr(0, escrito.length)){
		document.getElementById('campodigitar').className = 'semerrar';
		document.getElementById('erro').style.visibility = 'hidden';
		
		if (escrito.length == frasequeb[palavramomento].length){if (palcert){quantpalavraserradas += 1;palcert = false;}parcert=false;movercarrinho(palavramomento);palavramomento += 1;document.getElementById('campodigitar').value = '';if (teste){fim(true)}acender(palavramomento);if (palavramomento < (quant)){frasequeb[palavramomento] += String.fromCharCode(32)}else{teste = true}}
		}else{//escreveu errado
			palcert = true;
			document.getElementById('campodigitar').className = 'errado';
			document.getElementById('erro').style.visibility = 'visible';
			}	
}


window.onload = function(){
	
	document.getElementById('campodigitar').value = '';
	var randomnumber = Math.floor(Math.random()*(numfrases));
	
	frasequeb = frases[randomnumber][1].split(" ");
	quant = (frasequeb.length - 1);
	
	document.getElementById('autorf').innerHTML = frases[randomnumber][2];
	for(i = 0; i <= quant; i++){
		if (i == quant){document.getElementById('frase').innerHTML += '<div id="fraseparte'+i+'" class="normal">'+frasequeb[i]+'</div>';}else{
		document.getElementById('frase').innerHTML += '<div id="fraseparte'+i+'" class="normal">'+frasequeb[i]+'</div>'+String.fromCharCode(32);}
	}
	document.getElementById('fraseparte0').className = 'marcado';
	frasequeb[0] += ' ';
	
	document.getElementById('campodigitar').disabled = true;
	display();
	
	
}
