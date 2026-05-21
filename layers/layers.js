var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_KECAMATANGENTENG_1 = new ol.format.GeoJSON();
var features_KECAMATANGENTENG_1 = format_KECAMATANGENTENG_1.readFeatures(json_KECAMATANGENTENG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KECAMATANGENTENG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KECAMATANGENTENG_1.addFeatures(features_KECAMATANGENTENG_1);
var lyr_KECAMATANGENTENG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KECAMATANGENTENG_1, 
                style: style_KECAMATANGENTENG_1,
                popuplayertitle: 'KECAMATAN GENTENG',
                interactive: true,
    title: 'KECAMATAN GENTENG<br />\
    <img src="styles/legend/KECAMATANGENTENG_1_0.png" /> Embong Kaliasin<br />\
    <img src="styles/legend/KECAMATANGENTENG_1_1.png" /> Genteng<br />\
    <img src="styles/legend/KECAMATANGENTENG_1_2.png" /> Kapasari<br />\
    <img src="styles/legend/KECAMATANGENTENG_1_3.png" /> Ketabang<br />\
    <img src="styles/legend/KECAMATANGENTENG_1_4.png" /> Peneleh<br />' });
var format_Kelurahanterjangkau_2 = new ol.format.GeoJSON();
var features_Kelurahanterjangkau_2 = format_Kelurahanterjangkau_2.readFeatures(json_Kelurahanterjangkau_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelurahanterjangkau_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahanterjangkau_2.addFeatures(features_Kelurahanterjangkau_2);
var lyr_Kelurahanterjangkau_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelurahanterjangkau_2, 
                style: style_Kelurahanterjangkau_2,
                popuplayertitle: 'Kelurahan terjangkau',
                interactive: true,
    title: 'Kelurahan terjangkau<br />\
    <img src="styles/legend/Kelurahanterjangkau_2_0.png" /> 264008 - 1344256<br />\
    <img src="styles/legend/Kelurahanterjangkau_2_1.png" /> 1344256 - 1690436<br />\
    <img src="styles/legend/Kelurahanterjangkau_2_2.png" /> 1690436 - 882907<br />\
    <img src="styles/legend/Kelurahanterjangkau_2_3.png" /> 882907 - 264008<br />' });
var format_AREAJANGKAUAN400m_3 = new ol.format.GeoJSON();
var features_AREAJANGKAUAN400m_3 = format_AREAJANGKAUAN400m_3.readFeatures(json_AREAJANGKAUAN400m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAJANGKAUAN400m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAJANGKAUAN400m_3.addFeatures(features_AREAJANGKAUAN400m_3);
var lyr_AREAJANGKAUAN400m_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAJANGKAUAN400m_3, 
                style: style_AREAJANGKAUAN400m_3,
                popuplayertitle: 'AREA JANGKAUAN 400m',
                interactive: true,
                title: '<img src="styles/legend/AREAJANGKAUAN400m_3.png" /> AREA JANGKAUAN 400m'
            });
var format_JARINGANJALAN_4 = new ol.format.GeoJSON();
var features_JARINGANJALAN_4 = format_JARINGANJALAN_4.readFeatures(json_JARINGANJALAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JARINGANJALAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARINGANJALAN_4.addFeatures(features_JARINGANJALAN_4);
var lyr_JARINGANJALAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARINGANJALAN_4, 
                style: style_JARINGANJALAN_4,
                popuplayertitle: 'JARINGAN JALAN',
                interactive: true,
                title: '<img src="styles/legend/JARINGANJALAN_4.png" /> JARINGAN JALAN'
            });
var format_HALTE_5 = new ol.format.GeoJSON();
var features_HALTE_5 = format_HALTE_5.readFeatures(json_HALTE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HALTE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HALTE_5.addFeatures(features_HALTE_5);
var lyr_HALTE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HALTE_5, 
                style: style_HALTE_5,
                popuplayertitle: 'HALTE',
                interactive: true,
                title: '<img src="styles/legend/HALTE_5.png" /> HALTE'
            });

lyr_Positron_0.setVisible(true);lyr_KECAMATANGENTENG_1.setVisible(true);lyr_Kelurahanterjangkau_2.setVisible(true);lyr_AREAJANGKAUAN400m_3.setVisible(true);lyr_JARINGANJALAN_4.setVisible(true);lyr_HALTE_5.setVisible(true);
var layersList = [lyr_Positron_0,lyr_KECAMATANGENTENG_1,lyr_Kelurahanterjangkau_2,lyr_AREAJANGKAUAN400m_3,lyr_JARINGANJALAN_4,lyr_HALTE_5];
lyr_KECAMATANGENTENG_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas Total': 'Luas Total', });
lyr_Kelurahanterjangkau_2.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'L.jangkau': 'L.jangkau', });
lyr_AREAJANGKAUAN400m_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_JARINGANJALAN_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_HALTE_5.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'FOTO': 'FOTO', });
lyr_KECAMATANGENTENG_1.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Luas Total': 'TextEdit', });
lyr_Kelurahanterjangkau_2.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'L.jangkau': 'TextEdit', });
lyr_AREAJANGKAUAN400m_3.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', });
lyr_JARINGANJALAN_4.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'width': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'railway': 'TextEdit', 'layer': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'smoothness': 'TextEdit', });
lyr_HALTE_5.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_KECAMATANGENTENG_1.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', 'Luas Total': 'no label', });
lyr_Kelurahanterjangkau_2.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'L.jangkau': 'no label', });
lyr_AREAJANGKAUAN400m_3.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_JARINGANJALAN_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_HALTE_5.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'FOTO': 'no label', });
lyr_HALTE_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});