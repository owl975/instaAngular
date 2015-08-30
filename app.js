angular.module('InstAngular', [])

.controller('MainCtrl', ['$scope', '$http', function ($scope, $http){
	$scope.photos = [];

	$scope.searchTag = function(){
		console.log($scope.tag);
		var url = 'https://api.instagram.com/v1/tags/' + $scope.tag + '/media/recent?client_id=34852ee303674ea9aaabcad7c3b99196&callback=JSON_CALLBACK'
		$http.jsonp(url)
		.then(function (response){
			console.log(response.data.data);
			$scope.photos = response.data.data;
		});

	};
	}]);