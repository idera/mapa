var sources = {
    "ign": {
        "url": "http://wms.ign.gob.ar/geoserver/wms?version=1.1.1&request=GetCapabilities",
        "title": "Instituto Geográfico Nacional ",
        "ptype": "gxp_wmscsource"
    },
    "rosario": {
        "url": "http://infomapa.rosario.gov.ar/wms/planobase?service=WMS&version=1.1.1&request=GetCapabilities",
        "title": "Municipalidad de Rosario",
        "ptype": "gxp_wmscsource"
    },
    "catamarca": {
        "url": "http://200.43.169.148:8080/cgi-bin/wms_acat?service=WMS&version=1.1.1&request=GetCapabilities",
        "title": "ETISIG Catamarca",
        "ptype": "gxp_wmscsource"
    },
    "chaco": {
        "url": "http://idechaco.gob.ar/geoserver/IDEChaco/wms?service=WMS&version=1.1.1&request=GetCapabilities",
        "title": "IDE Chaco",
        "ptype": "gxp_wmssource"
    },
    "formosa": {
        "url": "http://idef.formosa.gob.ar/servicios/ows?service=wms&version=1.1.1&request=GetCapabilities",
        "title": "IDE Formosa",
        "ptype": "gxp_wmscsource"
    },
    "mendoza": {
        "url": "http://www.siat.mendoza.gov.ar/geoserver/ows?service=wms&version=1.1.1&request=GetCapabilities",
        "title": "SIAT Mendoza",
        "ptype": "gxp_wmscsource"
    },
    "rionegro": {
        "url": "http://ide.extranet.rionegro.gov.ar/geoserver/ows?service=wms&version=1.1.1&request=GetCapabilities",
        "title": "IDE Rio Negro",
        "ptype": "gxp_wmscsource"
    },
    "santacruz": {
        "url": "http://spm.sitsantacruz.gob.ar/geoserver/ows?service=wms&version=1.1.1&request=GetCapabilities",
        "title": "SIT Santa Cruz",
        "ptype": "gxp_wmscsource"
    },
    "santafe": {
        "url": "https://aswe.santafe.gov.ar/idesf/wms?service=WMS&version=1.1.1&request=GetCapabilities",
        "title": "IDESF Santa Fe",
        "ptype": "gxp_wmscsource"
    },
    "tucuman": {
        "url": "http://idet.tucuman.gov.ar/geoserver/idet/ows?service=wms&version=1.1.1&request=GetCapabilities",
        "title": "Provincia de Tucumán",
        "ptype": "gxp_wmscsource"
    },
    "educacion": {
        "url": "http://wms.mapaeducativo.edu.ar/geoserver/ogc/ows?service=wms&version=1.1.1&request=GetCapabilities",
        "title": "Ministerio de Educación de Nación",
        "ptype": "gxp_wmscsource"
    },
    "educacion2": {
        "url": "http://www.mapaeducativo.edu.ar/geoserver/men/ows?service=wms&version=1.1.1&request=GetCapabilities",
        "title": "Base de Asentamientos Humanos de la República Argentina (BAHRA)",
        "ptype": "gxp_wmscsource"
    },
    "inta": {
        "url": "http://geointa.inta.gov.ar/geoserver/ows?service=wms&version=1.1.1&request=GetCapabilities",
        "title": "INTA - Instituto Nacional de Tecnología Agropecuaria",
        "ptype": "gxp_wmscsource"
    },
    "indec": {
        "url": "http://200.51.91.231/cgi-bin/mapserv?program=/cgibin/mapserv&map=/prosiga/INDEC_WMS_Poblacion.map&SERVICE=WMS&Version=1.1.1&REQUEST=GetCapabilities",
        "title": "INDEC - Censos 1991 y 2001",
        "ptype": "gxp_wmscsource"
    },
    "indec2": {
        "url": "http://www.opex.sig.indec.gov.ar/cgi-bin/mapserv?map=/home/wms/codgeo_2010.map&REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.1.1",
        "title": "INDEC - Censo 2010",
        "ptype": "gxp_wmscsource"
    },
    "conae_focoscalor": {
        "url": "http://focosdecalor.conae.gov.ar/geoserver/FocosDeCalor/wms?service=WMS&version=1.1.1&request=GetCapabilities",
        "title": "Comisión Nacional de Actividades Espaciales. Focos de calor, instrumento MODIS.",
        "ptype": "gxp_wmscsource"
    },
    "energia": {
        "url": "http://sig.se.gob.ar/cgi-bin/mapserv6?map=/var/www/html/visor/geofiles/map/mapase.map&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetCapabilities",
        "title": "Secretaría de Energía de Nacion",
        "ptype": "gxp_wmscsource"
    },
    "arba": {
        "url": "http://cartoservices.arba.gov.ar/geoserver/cartoservice/ows?service=WMS&version=1.1.1&request=GetCapabilities",
        "title": "Buenos Aires-ARBA",
        "ptype": "gxp_wmscsource"
    },
    "mapaescolar": {
        "url": "http://190.210.101.129/cgi-bin/mapaescolar?service=WMS&version=1.1.1&request=getcapabilities",
        "title": "Dirección General de Cultura y Educación - GBA - Mapa Escolar",
        "ptype": "gxp_wmscsource"
    },
    "rides": {
        "url": "http://rides.producciontucuman.gov.ar/ArcGIS/services/Informacion_Productiva/mapserver/WMSServer?version=1.1.1&request=getcapabilities",
        "title": "Tucumán-MDP",
        "ptype": "gxp_wmscsource"
    },
    "urbasig": {
        "url": "http://sig.gobierno.gba.gov.ar:8080/geoserver/urbasig/wms?service=WMS&version=1.1.1&request=GetCapabilities",
        "title": "Dirección Provincial de Ordenamiento Urbano y Territorial (Subsecretaria de Gobierno, Ministerio de Gobierno (urBAsig))",
        "ptype": "gxp_wmscsource"
    },
    "mosp": {
        "url": "http://www.mosp.gba.gov.ar/wms_hidraulica/cgi-bin/mapserv.exe?map=/ms4w/apps/m/wms.map&REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.1.1",
        "title": "Dirección de Hidráulica - Ministerio de Infraestructura - GBA",
        "ptype": "gxp_wmscsource"
    },
    "msgba": {
        "url": "http://sig.gobierno.gba.gov.ar:8080/geoserver/salud/wms?version=1.1.1&request=GetCapabilities",
        "title": "Ministerio de Salud - GBA",
        "ptype": "gxp_wmscsource"
    },
    "aptgba": {
        "url": "http://sig.gobierno.gba.gov.ar:8080/geoserver/apt/wms?version=1.1.1&request=GetCapabilities",
        "title": "Transporte - GBA",
        "ptype": "gxp_wmscsource"
    },
    "vialidadgba": {
        "url": "http://sig.gobierno.gba.gov.ar:8080/geoserver/vialidad/wms?version=1.1.1&request=GetCapabilities",
        "title": "Vialidad - GBA",
        "ptype": "gxp_wmscsource"
    },
    "recnatgba": {
        "url": "http://sig.gobierno.gba.gov.ar:8080/geoserver/opds/wms?version=1.1.1&request=GetCapabilities",
        "title": "Recursos Naturales - GBA",
        "ptype": "gxp_wmscsource"
    },
    "cdigba": {
        "url": "http://sig.gobierno.gba.gov.ar:8080/geoserver/cdi/wms?version=1.1.1&request=GetCapabilities",
        "title": "CDI - GBA",
        "ptype": "gxp_wmscsource"
    },
    "dcgba": {
        "url": "http://sig.gobierno.gba.gov.ar:8080/geoserver/dc/wms?version=1.1.1&request=GetCapabilities",
        "title": "Defensa Civil - GBA",
        "ptype": "gxp_wmscsource"
    },
    "dcgba": {
        "url": "http://www.sannicolas.gov.ar:8081/geoserver/ows?service=wms&version=1.1.1&request=GetCapabilities",
        "title": "Municipalidad de San Nicolás de los Arroyos",
        "ptype": "gxp_wmscsource"
    },
    "jujuy": {
        "url": "http://181.15.175.27/geoserver/ows?service=wms&version=1.1.1&request=GetCapabilities",
        "title": "IDE Jujuy",
        "ptype": "gxp_wmscsource"
    },
    "misiones": {
        "url": "http://www.ide.misiones.gov.ar/cgi-bin/mapserv?map=/var/www/ide/htdocs/WMSdextraGD.map&SERVICE=WMS&Version=1.1.1&REQUEST=GetCapabilities",
        "title": "IDE Misiones",
        "ptype": "gxp_wmscsource"
    },
    "neuquen": {
        "url": "http://geodesia.neuquen.gov.ar:8080/geoserver/ows?service=wms&version=1.1.1&request=GetCapabilities",
        "title": "IDE Neuquén",
        "ptype": "gxp_wmscsource"
    },
    "santacruz": {
        "url": "http://spm.sitsantacruz.gob.ar/geoserver/ows?service=wms&version=1.1.1&request=GetCapabilities",
        "title": "IDE Santa Cruz",
        "ptype": "gxp_wmscsource"
    },
    "santafe": {
        "url": "http://www.idesf.santafe.gov.ar/cgi-bin/idesf?service=WMS&version=1.1.1&request=GetCapabilities",
        "title": "IDEF Santa Fe",
        "ptype": "gxp_wmscsource"
    },
    "tucuman": {
        "url": "http://idet.tucuman.gov.ar/geoserver/idet/ows?service=wms&version=1.1.1&request=GetCapabilities",
        "title": "IDET Tucumán",
        "ptype": "gxp_wmscsource"
    },
    "mptucuman": {
        "url": "http://rides.producciontucuman.gov.ar/ArcGIS/services/Informacion_Productiva/mapserver/WMSServer?request=GetCapabilities&service=WMS&version=1.1.1",
        "title": "Ministerio de Desarrollo Productivo - Tucumán",
        "ptype": "gxp_wmscsource"
    },

    
    "ol": {
        "ptype": "gxp_olsource"
    },
    "ideracsw": {
        "ptype": "gxp_cataloguesource",
        "url": "http://catalogo.idera.gob.ar:10080/geonetwork/srv/spa/csw",
        "title": "Catalogo IDERA"
    }
}
 
 
 
 