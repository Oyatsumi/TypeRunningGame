<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Digitômetro</title>
<link rel="stylesheet" type="text/css" href="digi.css" media="screen" />
<div id="fb-root"></div>
<script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" 
        type="text/javascript">
</script>
<script language="javascript" src="frases.js"></script>
<script language="javascript" src="js.js"></script>
</head>
<body>

<div style="position:relative;width:inherit;text-align:center;">
<div style="position:absolute;left: 23%;z-index:10;margin:0 auto;visibility:hidden; text-align:center;" id="parabens" class="conclusao"><b>Parabéns!!</b><br><br>Você concluiu o percurso com:<br><br>Velocidade: <div style="display:inline;color:red" id="idvelocidade"></div> ppm<br>Aproveitamento: <div style="display:inline;color:red" id="idaproveitamento"></div>%<br><br>Compartilhar digitômetro no meu mural:<br>

<a name="fb_share" type="icon_link" 
   share_url="http://facebook.com/digitometro"><img border="0" src="share.gif"></a>
   <br><br>
   Postar minha velocidade obtida no mural:<br>
   <a id="blahcomp" target="_blank" href="#"><img border="0" src="share.gif"></a>

<br><br><a href="javascript:window.location.reload()">Fechar [x]</a><br><br></div>
</div>

<div style="width:inherit; text-align:center; padding-left:30px;padding-right:30px"><img border="0" src="logo.png" /></div>
<div style="position:relative" class="frase" id="frase"></div>
<div style="position:relative;width:inherit;padding-left:30px;padding-right:30px;top:-14px;padding-bottom:10px">
<div style="position:absolute" class="autor" id="autorf"></div>
</div>

<div style="position:relative;padding-bottom:23px;width:inherit">
<div style="position:absolute;padding-left:30px;padding-right:30px" id="car"><img border="0" src="car.png" /></div>
</div>

<div style="position:relative;width:inherit">
<div style="position:absolute; top:37px;z-index:5;padding-left:30px;padding-right:30px;visibility: hidden" id="erro"><img src="corrijaoerro.png"/></div>
<div style="position:absolute; padding-left:30px;padding-right:30px;top:-18px;left:60px" class="contador" id="contadorsumir">Iniciando em <div style="display:inline" id="contagem1">5.0</div>...</div>
<div style="position:absolute; padding-left:30px;padding-right:30px;top:-32px;" class="autor" id="contador2">180</div>
<div style="position:absolute;width:inherit;padding-left:30px;padding-right:30px"><input type="text" class="semerrar" onKeydown="digitar(this.value)" onKeyup="digitar(this.value)" id="campodigitar" disabled/></div>
</div>

<div style="position:relative;top:40;width:inherit;text-align:center;vertical-align:middle;padding-left:30px;padding-right:30px;padding-top:5px"><a href="#"><img border="0" src="recomecar.png" onClick="window.location.reload()"/></a></div>

</body>
</html>