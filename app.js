var app;
var permalink;

Ext.onReady(function() {
    GeoExt.Lang.set("es");

    app = new gxp.Viewer({
        proxy: "/mapa/proxy/?url=",
        portalConfig: {
            layout: "border",
            items: [{
                id: "centerpanel",
                xtype: "tabpanel",
                //layout: "fit",
                region: "center",
                border: false,
                activeTab: 0,
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
                width: 250,
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
                        listeners: {'afterlayout': {fn: addOverview, single: true}},
                        html: "<div id='overviewmap' style='width:100%;height:100%;'></div>"
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
                autoScroll: true,
                tbar: []
            },
            outputTarget: "layers_tree"
        }, {
            ptype: "gxp_addlayers",
            actionTarget: "tree.tbar",
            search: {selectedSource: "ideracsw"}
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
            extent: new OpenLayers.Bounds(-111, -62, -16, -7)
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
            outputTarget: "legend",
            outputConfig: {
                header: false,
                autoScroll: true
            }
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

        mapPlugins: {
            ptype:"gxp_loadingindicator",
            onlyShowOnFirstLoad: true,
            loadingMapMessage:"Cargando mapa..."
        },

        // layer sources
        defaultSourceType: "gxp_wmssource",
        sources: sources,

        // map and layers
        map: {
            id: "mymap",
            title: "Mapa",
            projection: "EPSG:4326",
            units: "degrees",
            //maxResolution: 156543.0339,
            //maxExtent: [-75,-56,-52,-20],
            center: [-64, -35],
            zoom: 4,
            stateId: "map",
            prettyStateKeys: true,
            layers: [{
                source: "ign",
                name: "argentina500k:argentina500k_satelital",
                title: "Satelital SAC-C. IGN - CONAE",
                //selected: false,
                group: "background"
            }, {
                source: "ign",
                name: "capabaseargenmap",
                title: "Capa Base IGN",
                selected: true,
                //transparent:false,
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
