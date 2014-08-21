<?php
// Abrir archivo de sources
$sources = file_get_contents('sources.js');
//$contenido = fread($gestor, filesize($nombre_fichero));
// Responder peticion plana

if ($_GET['format']=='plain') {
echo '"ign","http://wms.ign.gob.ar/geoserver/wms?",
	"rosario","http://infomapa.rosario.gov.ar/wms/planobase?version=1.1.1&request=GetCapabilities"';
/*
	$plano=json_decode($sources);
	var_dump(json_decode($sources));
	echo $sources;

*/
}
// Responder peticion JSON
else {
	echo "var sources = {".$sources." }";
}
?>
