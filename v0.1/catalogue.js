var app;
Ext.onReady(function() {
    app = new gxp.Viewer({
        //proxy: "/geoserver/rest/proxy?url=",
	//authenticate: "null",
	proxy: "/cgi-bin/proxy?url=",
        portalConfig: {
            renderTo: document.body,
            layout: "border",
            height: "900",
            
            // by configuring items here, we don't need to configure portalItems
            // and save a wrapping container
            items: [{
                // a TabPanel with the map and a dummy tab
                id: "centerpanel",
                xtype: "tabpanel",
                region: "center",
                activeTab: 0, // map needs to be visible on initialization
                border: true,
                items: ["mymap", {title: "Acerca de IDERA"}]
            }, {
                // container for the queryform
                id: "west",
                xtype: "container",
                layout: "fit",
                region: "west",
                width: 200
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
            outputTarget: "west"
        }, {
            ptype: "gxp_addlayers",
            actionTarget: "tree.tbar",
            search: {selectedSource: "geointa"}
        }, {
            ptype: "gxp_removelayer",
            actionTarget: ["tree.tbar", "tree.contextMenu"]
        }, {
            ptype: "gxp_layerproperties",
            actionTarget: ["tree.tbar", "tree.contextMenu"]
        }, {
            ptype: "gxp_zoomtolayerextent",
            actionTarget: ["tree.tbar", "tree.contextMenu"]
        }, {
            ptype: "gxp_zoomtoextent",
            actionTarget: "map.tbar",
	    extent: new OpenLayers.Bounds(-75,-56,-52,-20)
        }, {
            ptype: "gxp_zoom",
            actionTarget: "map.tbar"
        }, {
            ptype: "gxp_navigationhistory",
            actionTarget: "map.tbar"
        },{
            ptype: "gxp_print",
            actionTarget: "map.tbar"
        }, {
            ptype: "gxp_wmsgetfeatureinfo",
            outputConfig: {
                width: 400,
                height: "auto"
            },
            actionTarget: "map.tbar", // this is the default, could be omitted
            toggleGroup: "layertools"
        },{
            ptype: "gxp_measure",
            outputConfig: {
                width: 400,
                height: "auto"
            },
            actionTarget: "map.tbar", // this is the default, could be omitted
            toggleGroup: "layertools"
        }, {
            // shared FeatureManager for feature editing, grid and querying
            ptype: "gxp_featuremanager",
            id: "featuremanager",
            maxFeatures: 20
        }, {
            ptype: "gxp_queryform",
            featureManager: "featuremanager",
            outputConfig: {
                title: "Consulta",
                width: 320
            },
            actionTarget: "tree.contextMenu",
            appendActions: false
        }, {
            // not a useful tool - just a demo for additional items
            actionTarget: "mybbar", // ".bbar" would also work
            actions: [{text: "Acerca de"}]
        },{
            // NUEVOOOOOO

            actionTarget: "mybbar", // ".bbar" would also work
            actions: [{text: "Acerca de"}]
        }],
        
        // layer sources
        defaultSourceType: "gxp_wmssource",
        sources: {
                ign: {
                    url: "wms/ign.xml",
                    title: "Instituto Geografico Nacional",
                    ptype: "gxp_wmscsource"
                },
		catamarca: {
                    url: "wms/catamarca.xml",
                    title: "ETISIG Catamarca",
                    ptype: "gxp_wmscsource"
                },
		chaco: {
                    url: "wms/chaco.xml",
                    title: "IDE Chaco",
                    ptype: "gxp_wmscsource"
                },
                formosa: {
                    url: "wms/formosa.xml",
                    title: "IDE Formosa",
                    ptype: "gxp_wmscsource"
                },
		santacruz: {
                    url: "wms/santacruz.xml",
                    title: "SIT Santa Cruz",
                    ptype: "gxp_wmscsource"
                },
		santafe: {
                    url: "wms/santafe.xml",
                    title: "IDESF Santa Fe",
                    ptype: "gxp_wmscsource"
                },
		tucuman: {
                    url: "wms/tucuman.xml",
                    title: "Provincia de Tucumán",
                    ptype: "gxp_wmscsource"
                },
		rosario: {
                    url: "wms/rosario.xml",
                    title: "IDE Rosario",
                    ptype: "gxp_wmscsource"
                },
                /*inta: {
                    url: "http://geointa.inta.gov.ar/geoserver/wms?",
                    title: "INTA",
                    ptype: "gxp_wmscsource"
                },*/ol: {
                    ptype: "gxp_olsource"
                },
                                
           geointa: {
                ptype: "gxp_cataloguesource",
                url: "csw/csw.xml",
                title: "Catalogo IDERA"
            }
        },
        
        // map and layers
        map: {
            id: "mymap", // id needed to reference map in portalConfig above
            title: "Mapa",
            projection: "EPSG:4326",
            units: "degrees",
            //maxResolution: 156543.0339,
            //maxExtent: [-75,-56,-52,-20],
            center: [-64,-35],
            zoom: 4,
	    //scales: [2000,5000,25000,50000,100000,250000,500000,1000000,2500000,5000000,10000000,5000000],
            layers: [{
                source: "ign",
                name: "SIGN",
                title: "Capa Base IGN",
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
