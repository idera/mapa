var sources = {
    ign: {
        url: "http://wms.ign.gob.ar/geoserver/wms?",
        title: "Instituto Geográfico Nacional ",
        ptype: "gxp_wmscsource"
    },
    rosario: {
        url: "http://infomapa.rosario.gov.ar/wms/planobase?",
        title: "Municipalidad de Rosario",
        ptype: "gxp_wmscsource"
    },
   // malvinas: {
     //   url: "http://mapas.malvinasargentinas.gov.ar/cgi-bin/mapserv?map=/var/www/visor/config/malvinas/malvin.map&",
     //   title: "Municipalidad de Malvinas Argentinas. BA",
     //   ptype: "gxp_wmscsource"
   // },
    catamarca: {
        url: "ogc/catamarca.xml",
        title: "ETISIG Catamarca",
        ptype: "gxp_wmscsource"
    },
    chaco: {
        url: "http://etisig.chaco.gov.ar/mapasetisig.map",
        title: "IDE Chaco",
        ptype: "gxp_wmssource"
    },
    formosa: {
        url: "http://idef.formosa.gob.ar/servicios/ows?service=wms&version=1.1.1&request=GetCapabilities",
        title: "IDE Formosa",
        ptype: "gxp_wmscsource"
    },
    mendoza: {
        url: "http://www.siat.mendoza.gov.ar/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities",
        title: "SIAT Mendoza",
        ptype: "gxp_wmscsource"
    },

    neuquen: {
        url: "http://geodesia.neuquen.gov.ar:8080/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities",
        title: "Catastro Neuquén",
        ptype: "gxp_wmscsource"
    },
    rionegro: {
        url: "http://ide.extranet.rionegro.gov.ar/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities",
        title: "IDE Rio Negro",
        ptype: "gxp_wmscsource"
    },
    santacruz: {
        url: "http://spm.sitsantacruz.gob.ar/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities",
        title: "SIT Santa Cruz",
        ptype: "gxp_wmscsource"
    },
    santafe: {
        url: "ogc/santafe.xml",
        title: "IDESF Santa Fe",
        ptype: "gxp_wmscsource"
    },
    tucuman: {
        url: "ogc/tucuman.xml",
        title: "Provincia de Tucumán",
        ptype: "gxp_wmscsource"
    },
    smtucuman: {
        url: "http://sigcap.no-ip.org:8082/geoserver/wms",
        title: "Municipalidad de San Miguel de Tucumán",
        ptype: "gxp_wmscsource"
    },
    educacion: {
        url: "ogc/educacion.xml",
        title: "Ministerio de Educación",
        ptype: "gxp_wmscsource"
    },
    inta: {
        url: "http://geointa.inta.gov.ar/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities",
        title: "INTA",
        ptype: "gxp_wmscsource"
    },
    indec: {
        url: "http://200.51.91.231/cgi-bin/mapserv?program=/cgibin/mapserv&map=/prosiga/INDEC_WMS_Poblacion.map&SERVICE=WMS&Version=1.1.1&REQUEST=GetCapabilities",
        title: "INDEC",
        ptype: "gxp_wmscsource"
    },
    energia: {
        url: "http://sig.se.gob.ar/cgi-bin/mapserv6?map=/var/www/html/visor/geofiles/map/mapase.map&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetCapabilities",  //?service=WMS&version=1.1.1&request=GetCapabilities",
        title: "Secretaría de Energía",
        ptype: "gxp_wmscsource"
    },
    segemar: {
        url: "http://www.onegeology-arg.com.ar/geoserver/wms?service=WMS&version=1.1.1&request=GetCapabilities",
        title: "SEGEMAR",
        ptype: "gxp_wmscsource"
    },
   // senasa: {
   //     url: "http://geoserver.senasa.gov.ar/geoserver/ows?service=wms&version=1.1.1&request=GetCapabilities",
   //     title: "SENASA",
   //     ptype: "gxp_wmscsource"
   // },
    arba: {
        url: "http://cartoservices.arba.gov.ar/geoserver/wms?service=WMS&request=getcapabilities",
        title: "Buenos Aires - ARBA",
        ptype: "gxp_wmscsource"
    },
    urbasig: {
        url: "http://sig.gobierno.gba.gov.ar:8080/geoserver/urbasig/wms?",
        title: "Buenos Aires - URBASIG",
        ptype: "gxp_wmscsource"
    },
    mapaescolar: {
        url: "http://190.210.101.129/cgi-bin/mapaescolar",
        title: "Buenos Aires - Mapa Escolar",
        ptype: "gxp_wmscsource"
    },
    hidraulica: {
        url: "http://www.mosp.gba.gov.ar/wms_hidraulica/cgi-bin/mapserv.exe?map=/ms4w/apps/m/wms.map",
        title: "Buenos Aires - Dccion. Hidraulica",
        ptype: "gxp_wmscsource"
    },
    rides: {
    	url: "http://rides.producciontucuman.gov.ar/ArcGIS/services/Informacion_Productiva/mapserver/WMSServer",
	title: "Tucumán - MDP",
	ptype: "gxp_wmscsource"
    },
    ol: {
        ptype: "gxp_olsource"
    },
            ideracsw: {
                ptype: "gxp_cataloguesource",
                url: "http://idera.gob.ar/catalogo/srv/en/csw",
                title: "Catalogo IDERA"
            },
            geonode: {
                ptype: "gxp_cataloguesource",
                url: "http://gxp.opengeo.org/geonetwork/srv/en/csw",
                title: "Geonode"
            },
            pycsw: {
                ptype: "gxp_cataloguesource",
                url: "http://gxp.opengeo.org/pycsw",
                title: "pycsw"
            }
}
