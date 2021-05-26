// Написать функцию, которая возвращает
// массив только с уникальными значениями
// [1,1,2,2,3,4,5,5] -> [3,4]

function withoutRepeat(arr) { // O(N*N)
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
            }
        }
        if (count === 1) {
            result.push(arr[i])
        }
    }
    return result;
}

function linearWithoutRepeat(arr) { // O(N)
    const result = []
    const dictionary = {}
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        dictionary[item] = dictionary[item] ? dictionary[item] + 1 : 1;
    }
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (dictionary[item] === 1) {
            result.push(item);
        }
    }
    return result;
}

console.log(linearWithoutRepeat([1,1,2,2,3,4,5,5,5,5, 7, 8, 9, 9]))
