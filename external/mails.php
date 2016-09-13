<?php

$path= '/var/www/mapa/ogc';
# Consulta Servidores de los servicios.
$file = file_get_contents("http://servicios.idera.gob.ar/mapa/sources.php?format=json");
$jSources=str_replace("var sources = ","", $file); 
$services = json_decode($jSources,true);


$file_db = new PDO('sqlite:emails.sqlite');

// Create table messages
$file_db->exec("CREATE TABLE IF NOT EXISTS emails (
                id INTEGER PRIMARY KEY AUTOINCREMENT, 
                provider TEXT, 
                email TEXT,
                fecha_envio TEXT)");

// Prepare INSERT statement to SQLite3 file db
$sql_insert = "INSERT INTO emails (provider, email, fecha_envio) 
            VALUES (:provider, :email, '2015-01-01 00:00:00')";
$insert= $file_db->prepare($sql_insert);

// Bind parameters to statement variables
$insert->bindParam(':provider', $_provider);
$insert->bindParam(':email', $_email);

// Prepare UPDATE statement to SQLite3 file db
$sql_update = "UPDATE emails SET email = :email where provider = :provider";
$update= $file_db->prepare($sql_update);

// Bind parameters to statement variables
$update->bindParam(':provider', $_provider);
$update->bindParam(':email', $_email);

// Loop thru all messages and execute prepared insert statement
foreach ($services as $provider => $service) {    
    //exec("wget --tries=2 --timeout=30 -O $path/$provider.xml '$service[url]'");
    if (file_exists("$path/$provider.xml")){        
       $source = file_get_contents("$path/$provider.xml");
       $pos_inic = strpos($source, "<ContactElectronicMailAddress>");
       $pos_fin = strpos($source, "</ContactElectronicMailAddress>");
       
       //SI existen las etiquetas
       if ($pos_inic && $pos_fin){           
          $_email = substr($source, $pos_inic+30, $pos_fin-$pos_inic-30);
          $_provider = $provider;
          
          //Si es un email valido
          if (strpos($_email, "@")){              
            $sql_consulta = "SELECT * FROM emails where provider = '$_provider'";
            $consulta= $file_db->prepare($sql_consulta);
            $consulta->execute();
            $fila = $consulta->fetch(PDO::FETCH_ASSOC);

            //Si existe  el provider en la base de datos
            if (empty($fila)){                
                $insert->execute();
            }else{                
                $update->execute();
            }
          }
          
        }
    }
}