(function () {
    'use strict';

    let numbers = [1, 1, 2, 3, 4, 3];

    function removeDuplicates(arr) {
        let duplicates = {},
        result = [];
        for (let number of arr) {
            if (duplicates.hasOwnProperty(number)) {
                duplicates[number] = 'repeating';
            } else {
                duplicates[number] = 'single';
            }
        }
        for (let numbers in duplicates ) {
            if (duplicates[numbers] ==='repeating') {
                delete duplicates[numbers];
            }
        }
        let resultOfStr = Object.keys(duplicates);
        for (let item of resultOfStr) {
            result.push(parseFloat(item));
        }
        return result;
    }

    console.log(removeDuplicates(numbers));

}());