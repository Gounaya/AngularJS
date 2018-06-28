var app = angular.module('AngularAPP',[]); // table to inject to the my application dfferent modules
        // starting route with app.config
        app.config(function ($routeProvider){
            $routeProvider
                .when('/',{templateUrl: 'partials/home.html'})
                .when('/comments',{templateUrl: 'partials/comments.html'})
                .otherwise({redirectTo: '/'})
        });