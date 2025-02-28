var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_mergelotpa_1 = new ol.format.GeoJSON();
var features_mergelotpa_1 = format_mergelotpa_1.readFeatures(json_mergelotpa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mergelotpa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mergelotpa_1.addFeatures(features_mergelotpa_1);
var lyr_mergelotpa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mergelotpa_1, 
                style: style_mergelotpa_1,
                popuplayertitle: 'merge lotpa',
                interactive: true,
                title: '<img src="styles/legend/mergelotpa_1.png" /> merge lotpa'
            });
var format_mergetandasempadan_2 = new ol.format.GeoJSON();
var features_mergetandasempadan_2 = format_mergetandasempadan_2.readFeatures(json_mergetandasempadan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mergetandasempadan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mergetandasempadan_2.addFeatures(features_mergetandasempadan_2);
var lyr_mergetandasempadan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mergetandasempadan_2, 
                style: style_mergetandasempadan_2,
                popuplayertitle: 'merge tanda sempadan',
                interactive: true,
                title: '<img src="styles/legend/mergetandasempadan_2.png" /> merge tanda sempadan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_mergelotpa_1.setVisible(true);lyr_mergetandasempadan_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_mergelotpa_1,lyr_mergetandasempadan_2];
lyr_mergelotpa_1.set('fieldAliases', {'FID': 'FID', 'no_lot': 'no_lot', 'area': 'area', 'tsp — hakm': 'tsp — hakm', 'tsp — ha_1': 'tsp — ha_1', 'tsp — pemi': 'tsp — pemi', 'layer': 'layer', 'path': 'path', });
lyr_mergetandasempadan_2.set('fieldAliases', {'FID': 'FID', 'vertex_ind': 'vertex_ind', 'vertex_par': 'vertex_par', 'vertex_p_1': 'vertex_p_1', 'vertex_p_2': 'vertex_p_2', 'distance': 'distance', 'angle': 'angle', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'path': 'path', });
lyr_mergelotpa_1.set('fieldImages', {'FID': '', 'no_lot': '', 'area': '', 'tsp — hakm': '', 'tsp — ha_1': '', 'tsp — pemi': '', 'layer': '', 'path': '', });
lyr_mergetandasempadan_2.set('fieldImages', {'FID': 'TextEdit', 'vertex_ind': 'TextEdit', 'vertex_par': 'TextEdit', 'vertex_p_1': 'TextEdit', 'vertex_p_2': 'TextEdit', 'distance': 'TextEdit', 'angle': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'path': 'TextEdit', });
lyr_mergelotpa_1.set('fieldLabels', {'FID': 'hidden field', 'no_lot': 'header label - visible with data', 'area': 'header label - always visible', 'tsp — hakm': 'no label', 'tsp — ha_1': 'no label', 'tsp — pemi': 'no label', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_mergetandasempadan_2.set('fieldLabels', {'FID': 'no label', 'vertex_ind': 'no label', 'vertex_par': 'no label', 'vertex_p_1': 'no label', 'vertex_p_2': 'no label', 'distance': 'no label', 'angle': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'path': 'no label', });
lyr_mergetandasempadan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});