<?php
// Abrir archivo de sources
$sources = file_get_contents('sources.js');
//$contenido = fread($gestor, filesize($nombre_fichero));
// Responder peticion plana

if ($_GET['format']=='plain') {

	$jSources=str_replace("var sources = ","",$sources); 
	$plano = json_decode($jSources,true);

	foreach ($plano as $nombre=>$datos){
		if (($datos['ptype']=='gxp_wmssource') || ($datos['ptype']=='gxp_wmscsource'))
			echo $nombre.",".$datos['url'].",";
	} 
	
//	echo json_last_error().json_last_error_msg();
//	echo "<hr>";
//	var_dump($plano);
//	echo "<hr>";
//	echo "Source json: ".$jSources;

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
else if ($_GET['format']=='xml') {
	//paso a json para usar array
	$jSources=str_replace("var sources = ","",$sources); 
	$aSources = json_decode($jSources,true);
	
	//recorro array
	foreach ($aSources as $nombre=>$datos){
		//genero nombre del archivo
		$filename = 'ogc/'.$nombre.'.xml';

		//modifico solo si es wms
		if (($datos['ptype']=='gxp_wmssource') || ($datos['ptype']=='gxp_wmscsource')) {
			if (file_exists($filename)) {
				//reemplazo url con path al xml
				$aSources[$nombre]['url'] = $filename;
			} else {
				//quito source
				unset($aSources[$nombre]);
			}
		}
	} 

	//vuelta al formato original
	$jSources = json_encode($aSources);
	echo "var sources = ".stripslashes($jSources);

}
else {
	echo $sources;
}
?>
