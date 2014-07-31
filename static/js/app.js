angular.module('app', ['ngRoute']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'template/index.html', controller: IndexCtrl}).
            when('/:id', {templateUrl: 'template/post.html', controller: PostCtrl})

}])