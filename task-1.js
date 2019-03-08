(function () {
    'use strict';

    let points = [{x:1, y:2}, {x:3, y:4}, {x:5, y:6}, {x:7, y:8}];

    
    function transformToPolygonPoints(arr) {
        let polygonPoints = [];
        for (let point of arr) {
            polygonPoints.push(Object.values(point));
        }

        return polygonPoints.join(' ');
    }

    console.log(transformToPolygonPoints(points));
}());