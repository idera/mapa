<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$path = '/var/www/mapa/ogc';
# Consulta Servidores de los servicios.
$file = file_get_contents("http://servicios.idera.gob.ar/mapa/sources.php?format=json");
$jSources = str_replace("var sources = ", "", $file);
$services = json_decode($jSources, true);


$file_db = new PDO('sqlite:emails.sqlite');

$hoy = new DateTime();

// Prepare UPDATE statement to SQLite3 file db
$sql_update = "UPDATE emails SET fecha_envio = :fecha where provider = :provider";
$update = $file_db->prepare($sql_update);

// Bind parameters to statement variables
$update->bindParam(':provider', $_provider);
$update->bindParam(':fecha', $_fecha);



#Borra xml cacheados anteriormente
exec("rm $path/*.xml");

# Recorre los servidores y obtiene capacidades de cada servicio.

foreach ($services as $provider => $service) {
    if (isset($service["url"])) {
        exec("wget --tries=2 --timeout=30 -O $path/$provider.xml '$service[url]&service=WMS&version=1.1.1&request=GetCapabilities'");

        if (0 == filesize("$path/$provider.xml")) {

            $_provider = $provider;

            $sql_consulta = "SELECT * FROM emails where provider = '$_provider'";
            $consulta = $file_db->prepare($sql_consulta);
            $consulta->execute();
            $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
            echo "Existe el email \n";
                
            if (!empty($resultado)) { //si tiene email entra
                $fecha_envio = $resultado["fecha_envio"];
                $ultimo_envio = DateTime::createFromFormat("Y-m-d H:i:s", $fecha_envio);

                $intervalo = $hoy->diff($ultimo_envio);
                $diferencia_dias = $intervalo->format("%R%a");
                if (abs($diferencia_dias) > 7) {

                    $para = $resultado["email"];
                    echo "Intento enviar email \n";
                    $exitoso = mail($para, "Su servidor wms ha caído", "Desde Idera informamos que su servidor wms se encuentra inaccesible.");
                    if ($exitoso) {
                        echo "envio un email porque el servidor de $_provider esta caido \n";
                        $_fecha = $hoy->format("Y-m-d H:i:s");
                        $update->execute();
                    }
                }
            }
        }
    }
}



    