function findFloor(arr, val) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let floor = -1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        if (arr[middleIdx] <= val) {
            floor = arr[middleIdx];
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx - 1;
        }

    }

    return floor;
}


module.exports = findFloor