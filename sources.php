<?php
// Abrir archivo de sources
$sources = file_get_contents('https://raw.githubusercontent.com/idera/mapa/master/sources.js');

// Responder peticion plana (cron)
if ($_GET['format']=='plain') {

	$jSources=str_replace("var sources = ","",$sources); 
	$plano = json_decode($jSources,true);

	foreach ($plano as $nombre=>$datos){
		if (($datos['ptype']=='gxp_wmssource') || ($datos['ptype']=='gxp_wmscsource'))
			echo $nombre . "," . $datos['url'] . (($datos['ptype']=='gxp_wmscsource')? "&TILED=true," : ",");
	} 
}
//Responder peticion HTML 
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
// Responder capabilities cacheados (.xml)
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
	$jSources = json_encode($aSources, JSON_UNESCAPED_UNICODE);
	echo "var sources = ".stripslashes($jSources);
}
//Solo responder servicios WMS (app estado servicios wms)
else if ($_GET['format']=='wms') {
	//paso a json para usar array
	$jSources=str_replace("var sources = ","",$sources); 
	$aSources = json_decode($jSources,true);

	//recorro array
	foreach ($aSources as $nombre=>$datos){
		//modifico solo si es wms
		if (!(($datos['ptype']=='gxp_wmssource') || ($datos['ptype']=='gxp_wmscsource'))) {
			//quito source
			unset($aSources[$nombre]);
		}
	}

	//vuelta al formato original
	$jSources = json_encode($aSources, JSON_UNESCAPED_UNICODE);
	echo "var sources = ".stripslashes($jSources);
}
else if ($_GET['format']=='qgis') {
        header('Content-type: text/xml');
        header('Content-Disposition: attachment; filename="qgis.xml"');
        header('Content-Type: charset=utf-8');
	$jSources=str_replace("var sources = ","",$sources); 
	$plano = json_decode($jSources,true);
        
        $cadena = "<wms ignoreGetMapURI='false' smoothPixmapTransform='false' dpiMode='7' password='' ignoreGetFeatureInfoURI='false' referer='' username='' invertAxisOrientation='false' ignoreAxisOrientation='false'";
        
        echo "<qgsWMSConnections version='1.0'>";
	foreach ($plano as $nombre=>$datos){
            if (($datos['ptype']=='gxp_wmssource') || ($datos['ptype']=='gxp_wmscsource')){
                $cadena2 = $cadena. " url='" .htmlentities($datos['url'])."' name='IDERA_". $datos['title']. "'/>"; 
            }
            echo $cadena2;                            
	}
        echo "</qgsWMSConnections>";        
} 
else {
	echo $sources;
}
?>