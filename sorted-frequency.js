function sortedFrequency(arr, val) {

    function findFirst(arr, val) {
        let leftIdx = 0;
        let rightIdx = arr.length - 1;
        let result = -1;

        while (leftIdx <= rightIdx) {
            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            let middleVal = arr[middleIdx];

            if (middleVal < val) {
                leftIdx = middleIdx + 1
            } else if (middleVal > val) {
                rightIdx = middleIdx - 1
            } else if (middleVal === val) {
                result = middleIdx
                rightIdx = middleIdx - 1;
            }
        }
        return result
    }

    function findLast(arr, val) {
        let leftIdx = 0;
        let rightIdx = arr.length - 1;
        let result = -1;

        while (leftIdx <= rightIdx) {
            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            let middleVal = arr[middleIdx];

            if (middleVal < val) {
                leftIdx = middleIdx + 1
            } else if (middleVal > val) {
                rightIdx = middleIdx - 1
            } else if (middleVal === val) {
                result = middleIdx
                leftIdx = middleIdx + 1;
            }
        }
        return result
    }
    let first = findFirst(arr, val);
    if (first === -1) return -1;
    let last = findLast(arr, val);
    return last - first + 1;
}

module.exports = sortedFrequency