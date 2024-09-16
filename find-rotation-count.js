function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    if (arr[leftIdx] < arr[rightIdx]) {
        return 0;
    }

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        if (middleIdx < rightIdx && arr[middleIdx] > arr[middleIdx + 1]) {
            return middleIdx + 1;
        }

        if (middleIdx > leftIdx && arr[middleIdx] < arr[middleIdx - 1]) {
            return middleIdx;
        }

        if (arr[middleIdx] >= arr[leftIdx]) {
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx - 1;
        }
    }
    return 0;
}



module.exports = findRotationCount