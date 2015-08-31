angular.module('InstAngular', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/search.html',
        controller: 'MainCtrl'
      })

      .when('/favorites', {
        templateUrl: 'templates/favorites.html',
        controller: 'FavoritesCtrl'
      })

      .when('/chat', {
      	templateUrl: 'templates/chat.html',
      	controller: 'ChatCtrl'
      });

   
  }])

.controller('MainCtrl', ['$scope', '$http', function ($scope, $http){
	$scope.photos = [];

	$scope.searchTag = function(){
		console.log($scope.tag);
		$scope.tag = "jellyfish";
		var url = 'https://api.instagram.com/v1/tags/' + $scope.tag + '/media/recent?client_id=34852ee303674ea9aaabcad7c3b99196&callback=JSON_CALLBACK'
		$http.jsonp(url)
		.then(function (response){
			console.log(response.data.data);
			$scope.photos = response.data.data;
		});

	};

	$scope.savePhoto = function (photo){
		// check if localStorage.photos doesnt exists
		if (!localStorage.photos) {
			localStorage.photos = JSON.stringify([]);
		}
		sweetAlert("THATS A SEXY JELLY");

		var allPhotos = JSON.parse(localStorage.photos);
		allPhotos.push(photo);

		localStorage.photos = JSON.stringify(allPhotos);

		//stringinfy photo object and push into localstorage.photos
		console.log(photo);
		console.log(localStorage.photos)
	};
	}])

	.controller('FavoritesCtrl', ['$scope', function ($scope) {
    if (!localStorage.photos) {
      $scope.favorites = [];
    } else {
      $scope.favorites = JSON.parse(localStorage.photos);
    }
  }]);