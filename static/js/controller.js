API = 'http://sspai.com/ipa/article';
CALLBACK = '?callback=JSON_CALLBACK&key=63679324';

function IndexCtrl($scope, $http) {
    $http.jsonp(API + CALLBACK).success(function(data) {
        $scope.articles = data;
    })
}

function PostCtrl($scope, $http, $routeParams) {
    var id = $routeParams.id;
    $http.jsonp(API + '/' + id + CALLBACK).success(function(data) {
        $scope.post = data;
    })
}

