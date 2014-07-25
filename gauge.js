
function GaugeCtrl($scope){
    var gauge = Raphael('mydiv', 120, 200);
    var semicircle = gauge.circle(20, 100, 100).attr({"fill": "#9cf",'stroke-width': 0});
    var indicator = gauge.rect(15, 94, 8, 90,5).attr({fill: '#FFFFFF','stroke-width': 0});
    indicator.animate({"transform": "r-90,19,100"}, 2000, "bounce");
    
    $scope.setLitres = function(litres){
        indicator.animate({"transform": "r-"+litres+",19,100"}, 2000, "bounce");
    }
}