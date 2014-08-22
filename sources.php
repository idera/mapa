<?php
// Abrir archivo de sources
$sources = file_get_contents('sources.js');
//$contenido = fread($gestor, filesize($nombre_fichero));
// Responder peticion plana

if ($_GET['format']=='plain') {

	$sources_json=str_replace("var sources = ","",$sources); 
	$plano = json_decode($sources_json,true);
foreach ($plano as $nombre=>$datos){
	echo $nombre.",".$datos['url'].",";
} 
//	echo json_last_error().json_last_error_msg();
//	echo "<hr>";
//	var_dump($plano);
//	echo "<hr>";
//	echo "Source json: ".$sources_json;

//	echo "Source original: ".$sources;

}
// 
else if ($_GET['format']=='html'){
	$jSources=str_replace("var sources = ","",$sources); 
	$aSources = json_decode($jSources,true);

?>
<html>
<body>
<h1>Listado de servicios WMS</h1>
<ul>
<?php
foreach ($aSources as $nombre=>$datos){
if (($datos['ptype']=='gxp_wmssource') or ($datos['ptype']=='gxp_wmscsource'))
	echo "<li><h3>".htmlentities($datos['title'])."</h3><a href=".$datos['url'].">".htmlentities($datos['url'])."</a></li>";
}
?>
</ul>
</body>
</html>
<?php
}
// Responder peticion JSON
else {
	echo $sources;
}
?>
