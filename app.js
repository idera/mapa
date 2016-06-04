GeoExt.Lang.set("es");

var permalink, capabilities = {},
    temasPerfilMetadatos = {
        'Agricultura': true,
        'Aguas interiores': true,
        'Biota': true,
        'Clima': true,
        'Coberturas Básicas': true,
        'Economía': true,
        'Elevación': true,
        'Estructura': true,
        'Información geocientífica': true,
        'Inteligencia / Militar': true,
        'Límites': true,
        'Medio ambiente': true,
        'Océanos': true,
        'Planificación de catastro': true,
        'Salud': true,
        'Sociedad': true,
        'Transporte': true,
        'Ubicación': true,
        'Utilidades / Comunicaciones': true
    };

var slider = new GeoExt.LayerOpacitySlider({
    width: 120,
    layer: null,
    aggressive: true,
    inverse: true,
    plugins: new GeoExt.LayerOpacitySliderTip({template: '<div>{opacity}%</div>'})
});

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
                layout: "fit",
                autoScroll: true
            },
            items: [{
                title: "Capas",
                id: "layers_tree",
                flex: 1
            }, {
                height: 250,
                layout: "accordion",
                title: "Herramientas",
                defaults: {
                    width: "100%",
                    layout: "fit",
                    autoScroll: true
                },
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
        groups: {
            "default": {
                title: "Capas incluidas",
                expanded: true
            },
            "temas": {
                title: "Temas Perfil de Metadatos",
                expanded: true
            },
            "background": {
                title: "Capas base disponibles",
                exclusive: true
            }
        },
        outputConfig: {
            id: "tree",
            autoScroll: true,
            tbar: [],
            bbar: ["Transparencia:&nbsp;&nbsp;", slider]
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
        projection: "EPSG:3857",
        units: "meters",
        center: [-7255062, -5216481],
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

btnMetadatos = new Ext.Button({
    text: 'Metadatos',
    tooltip: 'Acceso a metadatos de la capa',
    icon: './theme/info-new-window.png',
    disabled: true,
    handler: function(baseItem, e){
        if (Ext.getCmp('ventanaMetadatos')) {
            Ext.getCmp('ventanaMetadatos').destroy();
        }
        new Ext.Window({
            title: 'Metadatos de la capa',
            id: 'ventanaMetadatos',
            maximizable: true,
            width: 800,
            height: 550,
            stateful : false,
            html: '<iframe src ="' + app.selectedLayer.data.layer.MetadataURL +
                '" width="100%" height="100%"></iframe>'
        }).show();
    }
});

app.mapPanel.map.events.register("mousemove", app.mapPanel.map, function (e) {
    position = app.mapPanel.map.getLonLatFromViewPortPx(e.xy);
    Ext.getCmp('position').update("<label>Latitud: " + position.lat + "</label><br/><label>Longitud: " + position.lon + "</label>");
});


app.on('ready', function() {
    //asocia el layer seleccionado al slider
    var tree = Ext.getCmp('tree');
    tree.on("click", function (node, e) {
        if (node.isLeaf()) {
            slider.setLayer(node.layer);

            if (app.selectedLayer.data.layer.MetadataURL){
                btnMetadatos.enable();
            } else {
                btnMetadatos.disable();
            }
        }
    });
    // agrega boton Metadatos
    var treeTbar = Ext.getCmp('layers_tree').items.items[0].toolbars[0];
    treeTbar.add(btnMetadatos);
    treeTbar.doLayout();

    addArbolTemas();
    loadCapabilities();
});

// agrega arbol de temas del perfil de metadatos de IDERA
function addArbolTemas() {
    //UI provider
    var treeNodeUI = Ext.extend(
        GeoExt.tree.LayerNodeUI,
        new GeoExt.tree.TreeNodeUIEventMixin()
    );
    // agrega un nodo por tema del perfil
    for(tema in temasPerfilMetadatos) {
        var attr = {
            uiProvider: treeNodeUI,
            text: tema,
            checked: false,
            leaf: true,
            qtip: 'capas que contengan uno o más temas entre sus "keywords"',
            iconCls: "gxp-tree-rasterlayer-icon",
            listeners: {
                "checkchange": function(node, checked){
                    if(checked){
                        addLayerByKw(this.text);
                    } else{
                        removeLayerByKw(this.text);
                    }
                }
            }
        };
        var nodoTema = new Ext.tree.TreeNode(attr);
        var treeCmp = Ext.getCmp('tree');
        treeCmp.root.childNodes[1].appendChild(nodoTema);
    };
}

function loadCapabilities(){
    for(var s in sources) {
        if(sources[s].ptype == "gxp_wmssource" || sources[s].ptype == "gxp_wmscsource")
            getCapabilitiesXML(s, sources[s]);
    };
}

//carga variable capabilities con los xmls
function getCapabilitiesXML(id, source) {
    OpenLayers.Request.GET({
        url: source.url,
        params: {
            SERVICE: "WMS",
            VERSION: "1.1.1",
            REQUEST: "GetCapabilities",
            timestamp: Math.round((new Date()).getTime() / 1000)
        },
        callback: function(request) {
            if (request.status != 200) {
                Log('El servidor ' + source.title + ' está caído');
                return;
            }

            var doc = request.responseXML;
            if (!doc || !doc.documentElement)
                doc = request.responseText;

            //TODO eliminar partes innecesarias del doc
            if(doc && doc.documentElement) capabilities[id] = doc;
        },
        failure: function() {
            var msj = 'El servidor ' + source.title + ' no está accesible.';
            Log(msj);
        }
    });
};

function Log( texto ) {
    if (window.console)
        console.log( texto);
};

//agrega capas que tengan una keyword especifica
function addLayerByKw(keyword) {

    for(var k in capabilities) {

        var capability = capabilities[k];
        var layerSection = capabilities[k].getElementsByTagName("Layer")[0];
        var layers;

        if(!layerSection) continue;

        layers = layerSection.getElementsByTagName("Layer");

        if(!layers) continue;

        for (var i = layers.length - 1; i >= 0; i--) {

            //checkeo que no sea un tag de categoria
            if(!("queryable" in layers[i].attributes)) continue;

            var keywords = layers[i].getElementsByTagName("Keyword");

            for (var j = keywords.length - 1; j >= 0; j--) {

                if(keywords[j].textContent.toUpperCase() == keyword.toUpperCase()) {
                    var layerName = layers[i].getElementsByTagName("Name")[0].textContent;
                    var layerTitle = layers[i].getElementsByTagName("Title")[0].textContent;
                    var getMapUrl = capability.getElementsByTagName("OnlineResource")[0].attributes["xlink:href"].value;
                    var metaUrl = layers[i].getElementsByTagName("MetadataURL")[0] || null;
                    if(metaUrl) metaUrl = metaUrl.getElementsByTagName("OnlineResource")[0].attributes["xlink:href"].value;

                    var newLayer = new OpenLayers.Layer.WMS(
                         layerTitle + " (" + k + ")",
                         getMapUrl,
                         {
                             layers: layerName,
                             transparent: "true",
                             format: "image/png"
                         }, {
                             isBaseLayer: false,
                             visibility: false,
                             keyword: keyword,
                             MetadataURL : metaUrl
                         }
                     );
                    app.mapPanel.map.addLayer(newLayer);
                }
            };
        };
    }
};

//quita las capas en base a una keyword
function removeLayerByKw(keyword) {
    var map = app.mapPanel.map;

    for (var i = map.layers.length - 1; i >= 0; i--)
        if(map.layers[i].keyword == keyword) map.layers[i].destroy();
};
