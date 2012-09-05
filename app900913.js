var app;
Ext.onReady(function() {
    GeoExt.Lang.set("es");
    app = new gxp.Viewer({
        //proxy: "/geoserver/rest/proxy?url=",
	//authenticate: "null",
	proxy: "/mapa/proxy/?url=",
        portalConfig: {
            layout: "border",
            //region: "center",
            
            // by configuring items here, we don't need to configure portalItems
            // and save a wrapping container
            items: [{
                id: "centerpanel",
                xtype: "tabpanel",
                //layout: "fit",
                region: "center",
                border: false,
		activeTab: 0, // map needs to be visible on initialization
                items: ["mymap",


{title: "Ayuda", autoScroll: true,
html:"<b>Ayuda para la utilizaci&oacute;n del mapa</b><br><br>Por defecto la herramienta que aparece activada al acceder al mapa es la de paneo, que permite mover correr el mapa hacia las zonas aledañas.<br><br>Haciendo doble clic sobre un punto del mapa, se produce un acercamiento a esa zona.<br><br><img src='./theme/gxp/img/silk/add.png' /> Agregar capas<br>Este bot&oacute;n abre una ventana en donde se puede seleccionar el origen de los datos, y luego la capa o las capas que se desean agregar al mapa por medio del bot&oacute;n Agregar capas.<br><br><img src='./theme/gxp/img/silk/add.png' /> Buscar capas a partir del cat&aacute;logo<br>Este bot&oacute;n abre una ventana de opciones para la búsqueda de datos a partir del catálogo de IDERA. Est&aacute; en desarrollo.<br><br><b>Con una capa seleccionada:</b><br><img src='./theme/gxp/img/silk/delete.png' /> Eliminar capa<br><img src='./theme/gxp/img/silk/magnifier.png' /> Ver toda la capa<br><img src='./theme/gxp/img/silk/wrench.png' /> Propiedades de la capa<br><br><b>Bot&oacute;n derecho sobre una capa en el &aacute;rbol de capas de la de izquierda:</b><br><img src='./theme/gxp/img/silk/delete.png' /> Eliminar capa<br><img src='./theme/gxp/img/silk/magnifier.png' /> Ver toda la capa<br><img src='./theme/gxp/img/silk/wrench.png' /> Propiedades de la capa<br><br><b>Herramientas para manejar el mapa:</b><br><img src='./theme/gxp/img/silk/arrow_out.png' /> Ver extensión total del mapa<br><img src='./theme/gxp/img/silk/magnifier_zoom.png' /> Zoom sobre el mapa dibujando un rect&aacute;ngulo. Con un clic en el mismo bot&oacute;n, se desactiva la herramienta<br><img src='./theme/gxp/img/silk/magnifier_zoom_in.png' /> Acercar mapa<br><img src='./theme/gxp/img/silk/magnifier_zoom_out.png' /> Alejar mapa<br><img src='./theme/gxp/img/silk/arrow_left.png' /> Ir a la vista anterior<br><img src='./theme/gxp/img/silk/arrow_right.png' /> Ir a la vista siguiente<br><br><img src='./theme/gxp/img/silk/add.png' /> Medir longitudes. Se utiliza haciendo clics sobre el mapa para medir una distancia entre dos puntos o la longitud de una ruta.<br><img src='./theme/gxp/img/silk/add.png' /> Medir &aacute;reas. Se usa dibujando un área por medio de clics sobre el mapa.<br><br><b>Buscar un lugar…</b><br>Este es un cuadro de texto para introducir el nombre de alg&uacute;n lugar del pa&iacute;s o del mundo para llevar el mapa hacia esa localizaci&oacute;n. Luego de agregar un nombre o parte de &eacute;l, la herramienta muestra una lista de opciones que pueden ser seleccionadas para realizar el zoom. Es una herramienta provista por Google.<br><br><b>Cambiar a EPSG:900913</b><br>Este bot&oacute;n lleva a un visualizador similar a &eacute;ste, pero que utiliza la proyecci&oacute;n conocida como geogr&aacute;fica. En esta proyecci&oacute;n no es posible visualizar capas provistas por los servidores de mapas m&aacute;s populares: Google, Bing, OSM, MapBox, BlueMarble, etc.<br>"
},
{title: "Acerca de",
html:'<br><b>Visualizador de IDERA</b><p>Este visualizador fue desarrollado por el Grupo de Trabajo Investigación, tecnología y Desarrollo</p><p>Está basado en:<a href="http://www.openlayers.org" target="_blank">OpenLayers</a>, <a href="http://www.geoext.org" target="_blank">GeoExt </a> y en <a href="http://gxp.opengeo.org/master/doc/" target="_blank">GXP</a><br><img src="http://www.hostgis.com/home/logos/openlayers.jpg"/><img src="http://cloud.ohloh.net/attachments/30093/GeoExt_small.png"/></p><br><b>Más información sobre el Grupo</b><p><a href="http://www.idera.gob.ar/portal/?q=node/21" target="_blank">Listado de servicios WMS utilizados en este visualizador</a></p><p><a href="http://www.idera.gob.ar/portal/?q=node/28" target="_blank">Acceder a la sección del Grupo de Trabajo en el Portal de IDERA</a></p><p>Para contactarse con el coordinador del grupo:<br><a href="mailto:coordinador_id@idera.gob.ar">coordinador_id@idera.gob.ar</a></p><img src="http://meinname.com/images/logo-developer-github.png"/><br>Acceder al c&oacute;digo de esta aplicaci&oacute;n en GitHub<br>Repositorio <a href="https://github.com/idera/visualizador" target="_blank">idera/visualizador</a>'
}]
            }, {
        id: "westcontainer",
        xtype: "container",
        layout: "vbox",
        region: "west",
        width: 200,
        defaults: {
            width: "100%",
            layout: "fit"
        },
        items: [{
            title: "Capas",
            id: "arbol",
            border: false,
            flex: 1
        }, {
            height: 250,
	    layout: "accordion",
            title: "Herramientas",
	    items: [
		{title: "Leyenda",
		id: "leyenda"
		},
		{title: "Mapa de Referencia", 
		html:"Pronto..."
		}]
           }]
        }],
        bbar: {id: "mybbar"}
        },
        // configuration of all tool plugins for this application
        tools: [{
            ptype: "gxp_layertree",
            outputConfig: {
                id: "tree",
                border: true,
                tbar: [] // we will add buttons to "tree.bbar" later
            },
            outputTarget: "arbol"
        },{
            ptype: "gxp_addlayers",
            actionTarget: "tree.tbar",
	    search: {selectedSource: "idera_csw"}
        },{
            ptype: "gxp_removelayer",
            actionTarget: ["tree.tbar", "tree.contextMenu"]
        },{
            ptype: "gxp_zoomtolayerextent",
            actionTarget: ["tree.tbar", "tree.contextMenu"]
        },{
            ptype: "gxp_layerproperties",
            actionTarget: ["tree.tbar", "tree.contextMenu"]
        },{
            ptype: "gxp_zoomtoextent",
            actionTarget: "map.tbar",
	    extent: new OpenLayers.Bounds(-75,-56,-52,-20)
        },{
            ptype: "gxp_zoom",
	    showZoomBoxAction: true,
            actionTarget: "map.tbar",
	    toggleGroup: "navegacion"
        },{
            ptype: "gxp_navigationhistory",
            actionTarget: "map.tbar",
	    toggleGroup: "navegacion"
        },{
            ptype: "gxp_wmsgetfeatureinfo",
            outputConfig: {
                width: 400,
                height: "auto"
            },
            actionTarget: "map.tbar",
	    toggleGroup: "navegacion"
        },{
            ptype: "gxp_measure",
            outputConfig: {
                width: 400,
                height: "auto"
            },
            actionTarget: "map.tbar",
	    toggleGroup: "navegacion"
        },{
            ptype: "gxp_legend",
            outputTarget: "leyenda"
        },{
            ptype: "gxp_googlegeocoder",
            outputTarget: "map.tbar",
            outputConfig: {
               emptyText: "Buscar un lugar ..."
            }
        },{ 
            xtype: "gxp_scaleoverlay",
            actionTarget: "map.tbar"
          },
	{
            // not a useful tool - just a demo for additional items
            xtype: "tbbutton",
	    actionTarget: "map.tbar",
            actions: [{
                  text: 'Cambiar a EPSG:4326',
                  handler: function() {
                  window.location = 'index.html' ;
                      }
                     }
            ]

        }],
        
        // layer sources
        defaultSourceType: "gxp_wmssource",
        sources: {
                ign: {
                    url: "ogc/ign.xml",
                    title: "Instituto Geografico Nacional",
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
                    url: "ogc/chaco.xml",
                    title: "IDE Chaco",
                    ptype: "gxp_wmssource"
                },
                formosa: {
                    url: "ogc/formosa.xml",
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
		ol: {
                    ptype: "gxp_olsource"
                },
                          
		idera_csw: {
                ptype: "gxp_cataloguesource",
		url: "http://www.idera.gob.ar/catalogo/srv/es/csw?request=GetCapabilities&service=CSW",
                //url: "http://ide.se.gov.ar/geonetwork/srv/en/csw",
                title: "Catalogo IDERA"
            }
        },
        
        // map and layers
        map: {
            id: "mymap", // id needed to reference map in portalConfig above
            title: "Mapa",
            projection: "EPSG:900913",
            units: "degrees",
            //maxResolution: 156543.0339,
            //maxExtent: [-75,-56,-52,-20],
            center: [-7191768.31357743, -4491869.4932269],
            zoom: 4,

	    //scales: [2000,5000,25000,50000,100000,250000,500000,1000000,2500000,5000000,10000000,5000000],
            layers: [{
                source: "ign",
                name: "SIGN",
                title: "Capa Base SIG 250 IGN",
                selected: true,
		group: "background"
            },{
                    source: "ol",
                    group: "background",
                    fixed: true,
                    type: "OpenLayers.Layer",
                    args: [
                        "Sin capa base", {visibility: false}
                    ]
                }],
            items: [{
                xtype: "gx_zoomslider",
                vertical: true,
                height: 100
            }]
        }
    });
});
