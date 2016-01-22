angular.module('theSocialModwork', [])

angular.module('theSocialModwork')
	.controller('faceRoller', ['$scope', function($scope) {
		$scope.duckName = 'Ducky'
		$scope.bio = "I was born in a pond. I live in that same pond. I sometimes leave the pond and go to another pond. Then I come back to the pond. It's a good pond."
		$scope.books = "I don't have much time to read, but I do have one little favorite. It's called 'Whole Wheat Bread'. I sometimes find it floating in my pond after some god damn townies come throw food at me. Anyway, it's pretty good, I really like the Nutritional Info chapter."
		$scope.jsLibs = "Well, considering the fact that I'm a duck I'm pretty sure most people know my answer to this question. Mojito is my favorite. It's built on YUI 3 that enables agile development of Web applications. Mojito allows developers to use a combination of configuration and an MVC architecture to create HTML5 applications. Because client and server components are both written in JavaScript, Mojito can run on the client or the server. So naturally it's kind of a favorite for ducks everywhere."
		$scope.subForm = function(event) {
			$scope.duckName = $scope.nameForm
			$scope.bio = $scope.bioThing
			$scope.books = $scope.favBooksForm
			$scope.jsLibs = $scope.favLibsForm
		}

		$scope.editProf = false

		$scope.showForm = function(event) {
			$scope.editProf = !$scope.editProf
		}
	}])