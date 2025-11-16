const binary1 = (arr: number[] = [], target: number): number => {

    if (!arr.length) {
        return -1;
    }


    let start = 0, end = arr.length -1;
    console.log(start,end);
    

    while (end >= start) {

        let mid = Math.floor((start + end) / 2);
        console.log(mid,'mid');

        if (arr[mid] == target) {
            return mid;
        }

        if (arr[mid] > target) {
            end = mid -1;
        }

        if (arr[mid] < target) {
           start = mid + 1;
        }
    }

    return -1;
};




let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let sss = binary1(arr, 14);
console.log("🚀 ~ sss:", sss)
