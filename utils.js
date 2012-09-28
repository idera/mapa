addOverview = function() {
    var mapOptions = {
        maxExtent: new OpenLayers.Bounds(-111, -62, -16, -7),
        //numZoomLevels: 1,
        projection: new OpenLayers.Projection("EPSG:4326"),
        units: "m"
    };
    var controlOptions = {
        size: new OpenLayers.Size(196, 153),
        div: Ext.get('overviewmap'),
        mapOptions: mapOptions,
        destroy: function() {},
        layers: [
            new OpenLayers.Layer.WMS(
                "overview", 
                "http://wms.ign.gob.ar/geoserver/wms?", 
                {
                    layers: 'SIGN'
                }, {
                    buffer: 0, 
                    ratio: 1, 
                    singleTile: true
                }
            )
        ]
    };
    var overview = new OpenLayers.Control.OverviewMap(controlOptions);
    app.mapPanel.map.addControl(overview);
}

permalinkProvider = new GeoExt.state.PermalinkProvider({encodeType: false});
Ext.state.Manager.setProvider(permalinkProvider);
permalinkProvider.on({
    statechange: function(provider) {
        permalink = provider.getLink();
    }
});
