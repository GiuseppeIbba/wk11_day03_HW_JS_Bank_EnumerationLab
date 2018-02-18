const arrayTasks = {


	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},


	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},


	square: function (arr) {
		const squareNumber = function(number){
			return number * number;
		}
		return arr.map(squareNumber);
	},


	sum: function (arr) {
		return arr.reduce(function (a, b) {
			return a + b;
		});
	},


	removeAndClone: function (arr, numberToRemove) {
		  return arr.filter(function(number) {
			return numberToRemove !== number;
		});
	},

	findIndexesOf: function (arr, itemToFind) {
		const arrayWithIndexesOfItemOccurences = [];
		let indexOfItemToFind = arr.indexOf(itemToFind);
		while (indexOfItemToFind != -1) {
			arrayWithIndexesOfItemOccurences.push(indexOfItemToFind);
			indexOfItemToFind = arr.indexOf(itemToFind, indexOfItemToFind + 1);
		}
		return arrayWithIndexesOfItemOccurences;
	},
	//I did it but i didn't understand 100 % how does it work.

	// _________________alternative__________
	// findIndexesOf: function (arr, itemToFind) {
	// 	const arrayWithIndexesOfItemOccurences = [];
	// 	for(let i = 0; i < arr.length; i++) {
	// 		if (itemToFind === arr[i]) {
	// 			arrayWithIndexesOfItemOccurences.push(i);
	// 		}
	// 	}
	// 		return arrayWithIndexesOfItemOccurences;
	// },

	sumOfAllEvenNumbersSquared: function (arr) {
				return arr.filter(function(number) {
				return number % 2 === 0
			}).map(function(number){
				return number * number
			}).reduce(function (a, b) {
				return a + b;
			});
		},

	findDuplicates: function (arr) {
		const arrayOfMultipleOccIndex = [];
    i = 0;
		while( i < arr.length){
		if (arrayTasks.findIndexesOf(arr, arr[i]).length > 1) {
				arrayOfMultipleOccIndex.push(arr[i]);
			arr = arrayTasks.removeAndClone(arr, arr[i])
		}
		i++;
	}
	return arrayOfMultipleOccIndex;

}
// Why removeAndClone works? I thought it gave an error cause arr[i] is different from numberToRemove



}

module.exports = arrayTasks
