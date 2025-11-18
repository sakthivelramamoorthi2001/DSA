function searchRange(finding: number[], target: number): number[] {
    let nums = finding
    let start = 0, end = nums.length;
    let findingreps: number[] = [];



    while (end >= start) {

        let mid = Math.floor((start + end) / 2);

        if (mid == )
    }





    return findingreps
};


function binary1(arr, start, end, target):number {


    let mid = Math.floor((start + end) / 2);

    if(target == arr[mid]) {
        let f = binary1(arr, 0, mid-1,target);
        let l = binary1(arr, mid + 1, arr.length,target);
        return target;

    }


    if(arr[mid] < target){
        start = mid + 1
    }


    if(arr[mid] >  target){
        end = mid - 1
    }

    return -1


}