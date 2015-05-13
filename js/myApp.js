var categoryList = ["cat_1", "cat_2"];
var articleList1 = ["cat_1_1", "cat_1_2"];
var articleList2 = ["cat_2_1", "cat_2_2"];

var myApp = angular.module('myApp', ['ui.router']);
        	// For Component users, it should look like this:
        	// var myApp = angular.module('myApp', [require('angular-ui-router')]);
myApp.config(function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("error");
	//
	// Now set up the states
	$stateProvider
        .state('home', {
            url: "^",
            
        })
		.state('blogCategoryList', {
			url: "/blogCategoryList",
			templateUrl: "partials/blogCategoryList.html",
             controller: function($scope) {
                $scope.categoryList = categoryList;
            }
		})
        .state('blogCategoryList.cat', {
            url: "/{catName}",
            templateUrl: "partials/blogCategoryList.cat.html",
            params: {category: "default"},
            resolve:{

            },
            controller: function($scope, $stateParams) {
                $scope.catName = $stateParams.catName;
                if($scope.catName == "cat_1") {
                    $scope.articleList = articleList1;
                }
                else {
                    $scope.articleList = articleList2;
                }
            }
        })
        .state('blogCategoryList.cat.detail', {
            url: "/{id}",
            templateUrl: "partials/blogCategoryList.cat.detail.html",
            controller: function($scope, $stateParams) {
                $scope.articleId = $stateParams.id;
            }
        })
        .state('blogCategoryList.cat.detail.comment', {
            url: "/comment",
            templateUrl: "partials/blogCategoryList.cat.detail.comment.html",
            controller: function($scope, $stateParams) {
            }
        })
        .state('askDoctorCategoryList', {
    	   url: "/list",
    	   templateUrl: "partials/state1.list.html",
    	   controller: function($scope) {
    		  $scope.items = ["A", "List", "Of", "Items"];
    	   }
        })
        .state('doctorInfoCategoryList', {
    	   url: "/state2",
    	   templateUrl: "partials/state2.html"
        })
        .state('login', {
            url: "/list",
    	   	templateUrl: "partials/state2.list.html",
    	   	   controller: function($scope) {
    			$scope.things = ["A", "Set", "Of", "Things"];
    		}
        })
        .state('error', {
            url: "^/error",
            templateUrl: "partials/error.html",
        })
    });