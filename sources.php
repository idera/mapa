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
// Responder peticion JSON
else {
	echo $sources;
}
?>
