function getEstilo45() {


    var miestilo= {
        version: 8,
        center: [1.537786, 41.837539],
        zoom: 12,
        bearing: 0,
        pitch: 0,
        sources: {
            orto1945: {
                type: "raster",
                tiles: [
                    "https://geoserveis.icgc.cat/icc_ortohistorica/wms/service?bbox={bbox-epsg-3857}&format=image/png&styles=&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=512&height=512&layers=ovaa10m",
                ],
                tileSize: 512,
                maxzoom: 19,
                minZoom: 7.5,
            },

        },
        sprite: "https://tilemaps.icgc.cat/tileserver/sprites/geologic/sprite",
        glyphs:
            "https://tilemaps.icgc.cat/tileserver/glyphs/{fontstack}/{range}.pbf",
        layers: [
            {
                id: "orto1945",
                source: "orto1945",
                type: "raster",
                maxzoom: 18

            },

        ],
    };


} //final funcion