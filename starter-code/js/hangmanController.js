angular.module('hangmanApp', [])
  .controller('HangmanController', HangmanController);

	HangmanController.$inject = ['$scope'];
	function HangmanController($scope){
		console.log('controller loaded');
		$scope.game = new HangmanGame('elephant');

		this.oneLetterGuess = function(letter){
			if(letter.length === 1){
				downcaseLetter = letter.toLowerCase();
				$scope.game.guess(downcaseLetter);
				$scope.game.input = '';

			}

		};

	  }