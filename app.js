var app;
var permalink;

Ext.onReady(function() {
    GeoExt.Lang.set("es");

    permalinkProvider = new GeoExt.state.PermalinkProvider({encodeType: false});
    Ext.state.Manager.setProvider(permalinkProvider);
    permalinkProvider.on({
        statechange: function(provider) {
            permalink = provider.getLink();
        }
    });

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
                activeTab: 0,
                // map needs to be visible on initialization
                items: ["mymap",
                {
                    title: "Ayuda",
                    autoScroll: true,
                    html: "<iframe src='help.html'>"
                }, {
                    title: "Acerca de",
                    html: "<iframe src='about.html'>"
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
                    id: "layers_tree",
                    border: false,
                    flex: 1
                }, {
                    height: 250,
                    layout: "accordion",
                    title: "Herramientas",
                    items: [{
                        title: "Leyenda",
                        id: "legend"
                    }, {
                        title: "Mapa de Referencia",
                        html: "Pronto..."
                    }, {
                        title: "Posición",
                        id: "position"
                    }]
                }]
            }]
        },
        // configuration of all tool plugins for this application
        tools: [{
            ptype: "gxp_layertree",
            outputConfig: {
                id: "tree",
                border: true,
                tbar: []
            },
            outputTarget: "layers_tree"
        }, {
            ptype: "gxp_addlayers",
            actionTarget: "tree.tbar",
            search: {
                selectedSource: "idera_csw"
            }
        }, {
            ptype: "gxp_removelayer",
            actionTarget: ["tree.tbar", "tree.contextMenu"]
        }, {
            ptype: "gxp_zoomtolayerextent",
            actionTarget: ["tree.tbar", "tree.contextMenu"]
        }, {
            ptype: "gxp_layerproperties",
            actionTarget: ["tree.tbar", "tree.contextMenu"]
        }, {
            ptype: "gxp_zoomtoextent",
            actionTarget: "map.tbar",
            extent: new OpenLayers.Bounds(-75, -56, -52, -20)
        }, {
            ptype: "gxp_zoom",
            showZoomBoxAction: true,
            actionTarget: "map.tbar",
            toggleGroup: "navegacion"
        }, {
            ptype: "gxp_navigationhistory",
            actionTarget: "map.tbar",
            toggleGroup: "navegacion"
        }, {
            ptype: "gxp_wmsgetfeatureinfo",
            outputConfig: {
                width: 400,
                height: 400,
                draggable:true
            },
            actionTarget: "map.tbar",
            toggleGroup: "navegacion"
        }, {
            ptype: "gxp_measure",
            outputConfig: {
                width: 400,
                height: "auto"
            },
            actionTarget: "map.tbar",
            toggleGroup: "navegacion"
        }, {
            ptype: "gxp_legend",
            outputTarget: "legend"
        }, {
            ptype: "gxp_print",
            outputTarget: "map.tbar"
        }, {
            ptype: "gxp_googlegeocoder",
            outputTarget: "map.tbar",
            outputConfig: {
                emptyText: "Buscar un lugar ..."
            }
        }, {
            xtype: "gxp_scaleoverlay",
            actionTarget: "map.tbar"
        }, {
            xtype: "tbbutton",
            actionTarget: "map.tbar",
            actions: [{
                text: 'Permalink',
                iconCls: "gxp-icon-permalink",
                handler: function() {
                    Ext.MessageBox.show({
                        title: 'Permalink', 
                        msg: 'Seleccione y copie el texto con Ctrl+C',
                        value: permalink,
                        multiline: true,
                        width: 500,
                        icon: Ext.MessageBox.INFO
                    });
                }
            }]
        }/*, {
            xtype: "tbbutton",
            actionTarget: "map.tbar",
            actions: [{
                text: 'Cambiar a EPSG:900913',
                handler: function() {
                    window.location = 'index900913.html';
                }
            }]
        }*/],

        // layer sources
        defaultSourceType: "gxp_wmssource",
        sources: {
            ign: {
                url: "http://wms.ign.gob.ar/geoserver/wms?",
                title: "Instituto Geográfico Nacional ",
                ptype: "gxp_wmscsource"
            },
            ignviejowms: {
                url: "ogc/ign.xml",
                title: "IGN (antiguo WMS)",
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
            id: "mymap",
            // id needed to reference map in portalConfig above
            title: "Mapa",
            projection: "EPSG:4326",
            units: "degrees",
            //maxResolution: 156543.0339,
            //maxExtent: [-75,-56,-52,-20],
            center: [-64, -35],
            zoom: 4,
            stateId: "map",
            prettyStateKeys: true,

            //scales: [2000,5000,25000,50000,100000,250000,500000,1000000,2500000,5000000,10000000,5000000],
            layers: [{
                source: "ign",
                name: "argentina500k:argentina500k_satelital",
                title: "Satelital SAC-C. IGN - CONAE",
                selected: true,
                group: "background"
            }, {
                source: "ign",
                name: "SIGN",
                title: "Capa Base SIG 250 IGN",
                selected: true,
                transparent:false,
                group: "background"
            }, {
                source: "ol",
                group: "background",
                fixed: true,
                type: "OpenLayers.Layer",
                args: ["Sin capa base",
                {
                    visibility: false
                }]
            }],
            items: [{
                xtype: "gx_zoomslider",
                vertical: true,
                height: 100
            }]
        }
    });

    app.mapPanel.map.events.register("mousemove", app.mapPanel.map, function (e) {
        position = app.mapPanel.map.getLonLatFromViewPortPx(e.xy);
        Ext.getCmp('position').update("<label>Latitud: " + position.lat + "</label><br/><label>Longitud: " + position.lon + "</label>");
    });

});
