var sources = {
  "inta": {
    "url": "http://geointa.inta.gov.ar/geoserver/wms?",
    "title": "INTA - Instituto Nacional de Tecnología Agropecuaria",
    "ptype": "gxp_wmscsource"
  },
  "senasa": {
    "url": "https://geonode.senasa.gov.ar/geoserver/ows?",
    "title": "SENASA",
    "ptype": "gxp_wmscsource"
  },
  "minagro": {
    "url": "http://ide.siia.gov.ar/geoserver/ows?",
    "title": "Ministerio de Agroindustria de la Nación",
    "ptype": "gxp_wmscsource"
  },
  "ambiente": {
    "url": "http://geo2.ambiente.gob.ar/geoserver/ows?",
    "title": "Ambiente",
    "ptype": "gxp_wmscsource"
  },
  "arba": {
    "url": "http://cartoservices.arba.gov.ar/geoserver/cartoservice/wms?",
    "title": "ARBA",
    "ptype": "gxp_wmscsource"
  },
  "ordenamiento-tyu": {
    "url": "http://sig.gobierno.gba.gov.ar/geoserver/urbasig/wms?",
    "title": "Dirección Provincial de Ordenamiento Urbano y Territorial - GBA",
    "ptype": "gxp_wmscsource"
  },
  "mosp": {
    "url": "http://www.mosp.gba.gov.ar/wms_hidraulica/cgi-bin/mapserv.exe?map=/ms4w/apps/m/wms.map?",
    "title": "Dirección de Hidráulica - Ministerio de Infraestructura - GBA",
    "ptype": "gxp_wmscsource"
  },
  "mapaescolar": {
    "url": "http://190.210.101.129/cgi-bin/mapaescolar?",
    "title": "Dirección General de Cultura y Educación - GBA - Mapa Escolar",
    "ptype": "gxp_wmscsource"
  },
  "geodesia-gba": {
    "url": "http://www.geobasig.com.ar/geoserver/ows?",
    "title": "Ministerio de Infraestructura y Servicios Públicos - Dirección de Geodesia",
    "ptype": "gxp_wmscsource"
  },
  "urbasig": {
    "url": "http://sig.gobierno.gba.gov.ar/geoserver/urbasig/wms?",
    "title": "Subsecretaría de Gobierno, Min. de Gobierno (URBASIG)",
    "ptype": "gxp_wmscsource"
  },
  "ide-catamarca": {
    "url": "http://200.43.169.149/geoserver/ows?",
    "title": "IDE Catamarca",
    "ptype": "gxp_wmscsource"
  },
  "ide-chaco": {
    "url": "http://idechaco.gob.ar/geoserver/IDEChaco/wms?",
    "title": "IDE Chaco",
    "ptype": "gxp_wmscsource"
  },
  "dgcit-chubut": {
    "url": "http://catastro.chubut.gov.ar/geoserver/wms?",
    "title": "Dirección General de Catastro e Información Territorial -Chubut",
    "ptype": "gxp_wmscsource"
  },
  "idedgeyc-chubut": {
    "url": "http://idedgeyc.chubut.gov.ar/geoserver/ows??",
    "title": "Nodo Estadísticas y Censos – IDE Chubut",
    "ptype": "gxp_wmscsource"
  },
  "idemindef": {
    "url": "http://idemindef.ign.gob.ar/geoserver/ows?",
    "title": "IDEMinDef",
    "ptype": "gxp_wmscsource"
  },
  "ign": {
    "url": "http://wms.ign.gob.ar/geoserver/ows?",
    "title": "Instituto Geográfico Nacional ",
    "ptype": "gxp_wmscsource"
  },
  "indec": {
    "url": "http://200.51.91.231/cgi-bin/mapserv?program=/cgibin/mapserv&map=/prosiga/INDEC_WMS_Poblacion.map?",
    "title": "INDEC - Censos 1991 y 2001",
    "ptype": "gxp_wmscsource"
  },
  "indec2": {
    "url": "http://geoservicios.indec.gov.ar/geoserver/geocenso2010/ows?",
    "title": "INDEC - Censo 2010",
    "ptype": "gxp_wmscsource"
  },
  "mapa-educativo": {
    "url": "http://wms.mapaeducativo.edu.ar/geoserver/ogc/ows?",
    "title": "Mapa Educativo",
    "ptype": "gxp_wmscsource"
  },
  "ide-formosa": {
    "url": "http://idef.formosa.gob.ar/servicios/ows?",
    "title": "IDE Formosa",
    "ptype": "gxp_wmscsource"
  },
  "subs-planificacion": {
    "url": "http://sig.planificacion.gob.ar/layers/public_wxs?",
    "title": "Subsecretaría de Planificación Territorial de la Inversión Pública",
    "ptype": "gxp_wmscsource"
  },
  "eea-anguil": {
    "url": "http://geointa.inta.gov.ar/geoserverLP/wms?",
    "title": "Nodo EEA Anguil (GeoINTA)",
    "ptype": "gxp_wmscsource"
  },
  "siat-mendoza": {
    "url": "http://www.siat.mendoza.gov.ar/geoserver/ows?",
    "title": "Secretaría de Ambiente y Desarrollo Sustentable (SIAT) -Mendoza",
    "ptype": "gxp_wmscsource"
  },
  "ide-moreno": {
    "url": "http://mapas.moreno.gob.ar/cgi-bin/mapserv?map=ide?",
    "title": "IDE Moreno",
    "ptype": "gxp_wmscsource"
  },
  "dpcit-neuquen": {
    "url": "http://geodesia.neuquen.gov.ar:8080/geoserver/ows?",
    "title": "Dirección Provincial de Catastro e Información Territorial",
    "ptype": "gxp_wmscsource"
  },
  "subs-mineria-nqn": {
    "url": "http://www.energianeuquen.gov.ar:38080/geoserver/hidrocarburos/wms?",
    "title": "Subsecretaria de Minería e Hidrocarburos (wms hidrocarburos)",
    "ptype": "gxp_wmscsource"
  },
  "subs-mineria-nqn2": {
    "url": "http://www.energianeuquen.gov.ar:38080/geoserver/mineria/wms?",
    "title": "Subsecretaria de Minería e Hidrocarburos (wms minería)",
    "ptype": "gxp_wmscsource"
  },
  "subs-planif-nqn": {
    "url": "http://copadesvr02.copade.neuquen.gov.ar/geoserver/wms?",
    "title": "Subsecretaria de Planificación y Acción para el Desarrollo (COPADE)",
    "ptype": "gxp_wmscsource"
  },
  "ide-pergamino": {
    "url": "http://ide.pergamino.gob.ar:8080/geoserver/wms?",
    "title": "IDE Pergamino",
    "ptype": "gxp_wmscsource"
  },
  "sec-energia": {
    "url": "http://sig.se.gob.ar/wmsenergia?",
    "title": "Secretaría de Energía de Nación",
    "ptype": "gxp_wmscsource"
  },
  "ide-rionegro": {
    "url": "http://ide.extranet.rionegro.gov.ar/geoserver/ows?",
    "title": "IDE Río Negro",
    "ptype": "gxp_wmscsource"
  },
  "eea-bariloche": {
    "url": "http://sipan.inta.gov.ar/geoserver/wms?",
    "title": "Nodo EEA Bariloche",
    "ptype": "gxp_wmscsource"
  },
  "munic-rosario": {
    "url": "http://www.rosario.gov.ar/wms/planobase?",
    "title": "Municipalidad de Rosario",
    "ptype": "gxp_wmscsource"
  },
  "eea-salta": {
    "url": "http://geosalta.inta.gov.ar/geoserver/wms?",
    "title": "Nodo EEA Salta ",
    "ptype": "gxp_wmscsource"
  },
  "geoycat-sanjuan": {
    "url": "http://geoserver.sgis.com.ar/geoserver/dgc_sj/wms?",
    "title": "Dirección de Geodesia y Catastro -San Juan",
    "ptype": "gxp_wmscsource"
  },
  "geoycat-sanluis": {
    "url": "http://visualcatsl.dyndns.info/geoserver/SanLuis/wms?",
    "title": "Dirección de Geodesia y Catastro -San Luis",
    "ptype": "gxp_wmscsource"
  },
  "munic-tucuman": {
    "url": "http://sigcap.no-ip.org:8082/geoserver/wms?",
    "title": "Municipalidad de San Miguel de Tucumán",
    "ptype": "gxp_wmscsource"
  },
  "sit-santacruz": {
    "url": "http://www.sitsantacruz.com.ar/geoserver/ows?",
    "title": "SIT Santa Cruz",
    "ptype": "gxp_wmscsource"
  },
  "ide-santafe": {
    "url": "https://aswe.santafe.gov.ar/idesf/wms?",
    "title": "IDESF, Infraestructura de Datos Espaciales de Santa Fe",
    "ptype": "gxp_wmscsource"
  },
  "eea-rafaela": {
    "url": "http://geointa.inta.gov.ar/geoserversf/wms?",
    "title": "Nodo EEA Rafaela",
    "ptype": "gxp_wmscsource"
  },
  "estadistica-tucuman": {
    "url": "http://181.88.186.115:8080/geoserver/servidor/wms?",
    "title": "Dirección de Estadística de la Provincia -Tucumán",
    "ptype": "gxp_wmscsource"
  },
  "vialidad-tucuman": {
    "url": "http://idet.tucuman.gob.ar/geoserver/Dir_Prov_Vialidad/wms?",
    "title": "Dirección de Vialidad -Tucumán",
    "ptype": "gxp_wmscsource"
  },
  "edamet": {
    "url": "http://dami.tucuman.gov.ar/ArcGIS/services/DAMI_Ambiental/MapServer/WMSServer?",
    "title": "Estudio de Diagnóstico del Área Metropolitana de Tucumán (EDAMET)",
    "ptype": "gxp_wmscsource"
  },
  "vivienda-tucuman": {
    "url": "http://190.226.54.180:8080/geoserver/IPVyDU/wms?",
    "title": "Instituto Provincial de Vivienda y Desarrollo Urbano -Tucumán",
    "ptype": "gxp_wmscsource"
  },
  "min-desarrollo-tucuman": {
    "url": "http://web2.desarrollosocialtuc.gov.ar/geoserver/wms?",
    "title": "Ministerio de Desarrollo Social -Tucumán",
    "ptype": "gxp_wmscsource"
  },
  "dgc-tucuman": {
    "url": "http://200.45.224.101:8080/geoserver/dgc/wms?",
    "title": "Dirección General de Catastro -Tucumán",
    "ptype": "gxp_wmscsource"
  },
  "ide-tucuman": {
    "url": "http://idet.tucuman.gov.ar/geoserver/idet/ows?",
    "title": "IDET Tucumán",
    "ptype": "gxp_wmscsource"
  },
  "educacion-tucuman": {
    "url": "http://www.educaciontuc.gov.ar/sistema/sistemas/tilecache/wms.cgi?",
    "title": "Ministerio de Educación de la Provincia de Tucumán",
    "ptype": "gxp_wmscsource"
  },
  "pirna-uba": {
    "url": "http://pirna.com.ar:8080/geoserver/wms?",
    "title": "PIRNA FFyL UBA",
    "ptype": "gxp_wmscsource"
  },
  "labsig-ungs": {
    "url": "http://mapas-lsig.ungs.edu.ar/wmsGBA?",
    "title": "Servicios WMS del Laboratorio SIG - UNGS",
    "ptype": "gxp_wmscsource"
  },
  "conae_focoscalor": {
    "url": "http://focosdecalor.conae.gov.ar/geoserver/FocosDeCalor/wms?",
    "title": "Comisión Nacional de Actividades Espaciales. Focos de calor, instrumento MODIS.",
    "ptype": "gxp_wmscsource"
  },
  "san-nicolas": {
    "url": "http://www.sannicolas.gov.ar:8081/geoserver/ows?",
    "title": "Municipalidad de San Nicolás de los Arroyos",
    "ptype": "gxp_wmscsource"
  },
  "misiones": {
    "url": "http://www.ide.misiones.gov.ar/cgi-bin/mapserv?map=/var/www/ide/htdocs/WMSdextraGD.map?",
    "title": "IDE Misiones",
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
