var sources = {
    "ign": {
        "url": "http://wms.ign.gob.ar/geoserver/wms?",
        "title": "Instituto Geográfico Nacional ",
        "ptype": "gxp_wmscsource"
    },
    "rosario": {
        "url": "http://infomapa.rosario.gov.ar/wms/planobase?",
        "title": "Municipalidad de Rosario",
        "ptype": "gxp_wmscsource"
    },
    "catamarca": {
        "url": "http://200.43.169.148:8080/cgi-bin/wms_acat?",
        "title": "ETISIG Catamarca",
        "ptype": "gxp_wmscsource"
    },
    "chaco": {
        "url": "http://idechaco.gob.ar/geoserver/IDEChaco/wms?",
        "title": "IDE Chaco",
        "ptype": "gxp_wmscsource"
    },
    "formosa": {
        "url": "http://idef.formosa.gob.ar/servicios/ows?",
        "title": "IDE Formosa",
        "ptype": "gxp_wmscsource"
    },
    "mendoza": {
        "url": "http://www.siat.mendoza.gov.ar/geoserver/ows?",
        "title": "SIAT Mendoza",
        "ptype": "gxp_wmscsource"
    },
    "rionegro": {
        "url": "http://ide.extranet.rionegro.gov.ar/geoserver/ows?",
        "title": "IDE Rio Negro",
        "ptype": "gxp_wmscsource"
    },
    "santacruz": {
        "url": "http://spm.sitsantacruz.gob.ar/geoserver/ows?",
        "title": "SIT Santa Cruz",
        "ptype": "gxp_wmscsource"
    },
    "santafe": {
        "url": "https://aswe.santafe.gov.ar/idesf/wms?",
        "title": "IDESF Santa Fe",
        "ptype": "gxp_wmscsource"
    },
    "tucuman": {
        "url": "http://idet.tucuman.gov.ar/geoserver/idet/ows?",
        "title": "Provincia de Tucumán",
        "ptype": "gxp_wmscsource"
    },
    "educacion": {
        "url": "http://wms.mapaeducativo.edu.ar/geoserver/ogc/ows?",
        "title": "Ministerio de Educación de Nación",
        "ptype": "gxp_wmscsource"
    },
    "educacion2": {
        "url": "http://www.mapaeducativo.edu.ar/geoserver/men/ows?",
        "title": "Base de Asentamientos Humanos de la República Argentina (BAHRA)",
        "ptype": "gxp_wmscsource"
    },
    "inta": {
        "url": "http://geointa.inta.gov.ar/geoserver/ows?",
        "title": "INTA - Instituto Nacional de Tecnología Agropecuaria",
        "ptype": "gxp_wmscsource"
    },
    "indec": {
        "url": "http://200.51.91.231/cgi-bin/mapserv?program=/cgibin/mapserv&map=/prosiga/INDEC_WMS_Poblacion.map?",
        "title": "INDEC - Censos 1991 y 2001",
        "ptype": "gxp_wmscsource"
    },
    "indec2": {
        "url": "http://geoservicios.indec.gov.ar/geoserver/ows?",
        "title": "INDEC - Censo 2010",
        "ptype": "gxp_wmscsource"
    },
    "conae_focoscalor": {
        "url": "http://focosdecalor.conae.gov.ar/geoserver/FocosDeCalor/wms?",
        "title": "Comisión Nacional de Actividades Espaciales. Focos de calor, instrumento MODIS.",
        "ptype": "gxp_wmscsource"
    },
    "energia": {
        "url": "http://sig.se.gob.ar/wmsenergia",
        "title": "Secretaría de Energía de Nacion",
        "ptype": "gxp_wmscsource"
    },
    "arba": {
        "url": "http://cartoservices.arba.gov.ar/geoserver/cartoservice/ows?",
        "title": "Buenos Aires-ARBA",
        "ptype": "gxp_wmscsource"
    },
    "mapaescolar": {
        "url": "http://190.210.101.129/cgi-bin/mapaescolar?",
        "title": "Dirección General de Cultura y Educación - GBA - Mapa Escolar",
        "ptype": "gxp_wmscsource"
    },
    "rides": {
        "url": "http://rides.producciontucuman.gov.ar/ArcGIS/services/Informacion_Productiva/mapserver/WMSServer?",
        "title": "Tucumán-MDP",
        "ptype": "gxp_wmscsource"
    },
    "urbasig": {
        "url": "http://sig.gobierno.gba.gov.ar:8080/geoserver/urbasig/wms?",
        "title": "Dirección Provincial de Ordenamiento Urbano y Territorial (Subsecretaria de Gobierno, Ministerio de Gobierno (urBAsig))",
        "ptype": "gxp_wmscsource"
    },
    "mosp": {
        "url": "http://www.mosp.gba.gov.ar/wms_hidraulica/cgi-bin/mapserv.exe?map=/ms4w/apps/m/wms.map?",
        "title": "Dirección de Hidráulica - Ministerio de Infraestructura - GBA",
        "ptype": "gxp_wmscsource"
    },
    "msgba": {
        "url": "http://sig.gobierno.gba.gov.ar:8080/geoserver/salud/wms?",
        "title": "Ministerio de Salud - GBA",
        "ptype": "gxp_wmscsource"
    },
    "aptgba": {
        "url": "http://sig.gobierno.gba.gov.ar:8080/geoserver/apt/wms?",
        "title": "Transporte - GBA",
        "ptype": "gxp_wmscsource"
    },
    "vialidadgba": {
        "url": "http://sig.gobierno.gba.gov.ar:8080/geoserver/vialidad/wms?",
        "title": "Vialidad - GBA",
        "ptype": "gxp_wmscsource"
    },
    "recnatgba": {
        "url": "http://sig.gobierno.gba.gov.ar:8080/geoserver/opds/wms?",
        "title": "Recursos Naturales - GBA",
        "ptype": "gxp_wmscsource"
    },
    "cdigba": {
        "url": "http://sig.gobierno.gba.gov.ar:8080/geoserver/cdi/wms?",
        "title": "CDI - GBA",
        "ptype": "gxp_wmscsource"
    },
    "dcgba": {
        "url": "http://sig.gobierno.gba.gov.ar:8080/geoserver/dc/wms?",
        "title": "Defensa Civil - GBA",
        "ptype": "gxp_wmscsource"
    },
    "san-nicolas": {
        "url": "http://www.sannicolas.gov.ar:8081/geoserver/ows?",
        "title": "Municipalidad de San Nicolás de los Arroyos",
        "ptype": "gxp_wmscsource"
    },
    "jujuy": {
        "url": "http://181.15.175.27/geoserver/ows?",
        "title": "IDE Jujuy",
        "ptype": "gxp_wmscsource"
    },
    "misiones": {
        "url": "http://www.ide.misiones.gov.ar/cgi-bin/mapserv?map=/var/www/ide/htdocs/WMSdextraGD.map?",
        "title": "IDE Misiones",
        "ptype": "gxp_wmscsource"
    },
    "neuquen": {
        "url": "http://geodesia.neuquen.gov.ar:8080/geoserver/ows?",
        "title": "IDE Neuquén",
        "ptype": "gxp_wmscsource"
    },
    "santacruz": {
        "url": "http://spm.sitsantacruz.gob.ar/geoserver/ows?",
        "title": "IDE Santa Cruz",
        "ptype": "gxp_wmscsource"
    },
    "tucuman": {
        "url": "http://idet.tucuman.gov.ar/geoserver/idet/ows?",
        "title": "IDET Tucumán",
        "ptype": "gxp_wmscsource"
    },
    "mptucuman": {
        "url": "http://rides.producciontucuman.gov.ar/ArcGIS/services/Informacion_Productiva/mapserver/WMSServer?&",
        "title": "Ministerio de Desarrollo Productivo - Tucumán",
        "ptype": "gxp_wmscsource"
    },
    "siia": {
        "url": "http://ide.siia.gov.ar/geoserver/ows?",
        "title": "SIIA - Ministerio de Agricultura, Ganaderia y Pesca",
        "ptype": "gxp_wmscsource"
    },
    "ol": {
        "ptype": "gxp_olsource"
    },
    "ideracsw": {
        "ptype": "gxp_cataloguesource",
        "url": "http://catalogo.idera.gob.ar/geonetwork/srv/spa/csw?",
        "title": "Catalogo IDERA"
    }
}
