goog.require('ol.Map');
goog.require('ol.View');
goog.require('ol.layer.Tile');
goog.require('ol.source.MapQuest');
goog.require('ol.source.TileWMS');


var layers = [
  new ol.layer.Tile({
    source: new ol.source.MapQuest({layer: 'sat'})
  }),
  new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: 'http://demo.boundlessgeo.com/geoserver/ne/wms',
      params: {'LAYERS': 'ne:ne_10m_admin_0_countries', 'TILED': true},
      serverType: 'geoserver',
      wrapX: true
    })
  })
];
var map = new ol.Map({
  layers: layers,
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: 1
  })
});
