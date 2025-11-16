


const floorCeilCheck = (arr: number[] = [], target: number): number[] => {

    let start = 0, end = arr.length - 1, floor = -1, ceil = -1;

    while (start <= end) {


        let mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) {
            floor = arr[mid];
            ceil = arr[mid];
            return [floor, ceil];
        }

        if (arr[mid] > target) {
            end = mid - 1;
            ceil = arr[mid];
        }

        if (arr[mid] < target) {
            start = mid + 1;
            floor = arr[mid];

        }
    }

    return [floor, ceil];

}


let arr = [1, 2, 3, 4, 5, 5.1, 5.8, 6, 7, 8, 9];

console.log(floorCeilCheck(arr, 5.6));
