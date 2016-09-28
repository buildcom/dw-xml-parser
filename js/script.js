var app = angular.module('xmlParser', []);

app.directive('xmlparsedirective', function() {
  return {
    restrict : 'E',
    templateUrl : '../templates/xml-parser-template.html'
  };
});

app.controller('XmlController', function($scope, $http){
  
  $http.get("../xml/sharedContentExport.xml", {
    transformResponse: function (cnv) {
      var x2js = new X2JS();
      var aftCnv = x2js.xml_str2json(cnv);
      return aftCnv;
    }
  }).success(function(response) {
    var list = response['custom-objects']['custom-object'];
    $scope.customObjectList = list;
  });

});