var sources = {
    ign: {
        url: "http://wms.ign.gob.ar/geoserver/wms?",
        title: "Instituto Geográfico Nacional ",
        ptype: "gxp_wmscsource"
    },
    rosario: {
        url: "ogc/rosario.xml",
        title: "Municipalidad de Rosario",
        ptype: "gxp_wmscsource"
    },
    catamarca: {
        url: "ogc/catamarca.xml",
        title: "ETISIG Catamarca",
        ptype: "gxp_wmscsource"
    },
    chaco: {
        url: "http://etisig.siup.gov.ar/mapasetisig.map",
        title: "IDE Chaco",
        ptype: "gxp_wmssource"
    },
    formosa: {
        url: "http://idef.formosa.gob.ar/geoserver/ows?service=wms&version=1.1.1&request=GetCapabilities",
        title: "IDE Formosa",
        ptype: "gxp_wmscsource"
    },
    santacruz: {
        url: "ogc/santacruz.xml",
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
    educacion: {
        url: "ogc/educacion.xml",
        title: "Ministerio de Educación",
        ptype: "gxp_wmscsource"
    },
    inta: {
        url: "ogc/inta.xml",
        title: "INTA",
        ptype: "gxp_wmscsource"
    },
    indec: {
        url: "http://200.51.91.231/cgi-bin/mapserv?program=/cgibin/mapserv&map=/prosiga/INDEC_WMS_Poblacion.map&SERVICE=WMS&Version=1.1.1&REQUEST=GetCapabilities",
        title: "INDEC",
        ptype: "gxp_wmscsource"
    },
    energia: {
        url: "http://sig.se.gov.ar/gis/wms6/?service=WMS&version=1.1.1&request=GetCapabilities",
        title: "Secretaría de Energía",
        ptype: "gxp_wmscsource"
    },
    segemar: {
        url: "http://www.onegeology-arg.com.ar/geoserver/wms?service=WMS&version=1.1.1&request=GetCapabilities",
        title: "SEGEMAR",
        ptype: "gxp_wmscsource"
    },
    arba: {
        url: "http://cartoservices.arba.gov.ar/geoserver/wms?service=WMS&request=getcapabilities",
        title: "Buenos Aires - ARBA",
        ptype: "gxp_wmscsource"
    },
    urbasig: {
        url: "http://www.mosp.gba.gov.ar/webmapping/cgi-bin/urbasig",
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
    idera_csw: {
        ptype: "gxp_cataloguesource",
        url: "http://www.idera.gob.ar/catalogo/srv/es/csw?request=GetCapabilities&service=CSW",
        //url: "http://ide.se.gov.ar/geonetwork/srv/en/csw",
        title: "Catalogo IDERA"
    }
}
