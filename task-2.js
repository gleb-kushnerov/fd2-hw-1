(function () {
    'use strict';

    let numbers = [1, 2, 3, 6, 4, 3, 3, 6];

    // function removeDuplicates(arr) {
    //     let duplicates = {},
    //     result = [];
    //     for (let number of arr) {
    //         if (duplicates.hasOwnProperty(number)) {
    //             duplicates[number] = 'repeating';
    //         } else {
    //             duplicates[number] = 'single';
    //         }
    //     }
    //     for (let numbers in duplicates ) {
    //         if (duplicates[numbers] ==='repeating') {
    //             delete duplicates[numbers];
    //         }
    //     }
    //     let resultOfStr = Object.keys(duplicates);
    //     for (let item of resultOfStr) {
    //         result.push(parseFloat(item));
    //     }
    //     return result;
    // }

    function removeDuplicates(arr) {
        let result = [];
        for (let number of arr) {
            if (arr.indexOf(number) === arr.lastIndexOf(number)) {
                result.push(number)
            }
        }
        return result;
    }

    console.log(removeDuplicates(numbers));
}());