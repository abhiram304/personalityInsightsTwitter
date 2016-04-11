var home = angular.module('home', []);
// defining the login controller
home.controller('home', function($scope,$http) {
	// Initializing the 'invalid_login' and 'unexpected_error'
	// to be hidden in the UI by setting them true,
	// Note: They become visible when we set them to false
	$scope.home="Home";
	/*$scope.postTweet= function() {
			$http({
				method: "GET",
				url: "/getHandle",
				data: {
					"tweet": $scope.tweet
				}
			}).success(function(data){
				//$scope.firstName=data.firstName;
				$scope.e = "abc";
				res.render('result.js');
				//$scope.tweets=data.data;
			}).error(function(error) {
				console.log("some error");
			});
	};*/
});
