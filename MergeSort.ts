//ts-worksheet



function mergeSortWay1(arr: number[]): number[] {

    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(((arr.length + 0) / 2));
    let leftArr = arr.slice(0, mid);       
    let rigthArr = arr.slice(mid);
    let left = mergeSortWay1(leftArr);
    let right = mergeSortWay1(rigthArr);
    return mergeBothArray(left, right);
};

function mergeBothArray(left: number[], right: number[]): number[] {

    let respon = [];
    let leftIndex = 0, rightIndex = 0;

    while(left.length > leftIndex && right.length > rightIndex){

        if(left[leftIndex] < right[rightIndex]){
            respon.push(left[leftIndex]);
            leftIndex++;
        }else{
            respon.push(right[rightIndex]);
            rightIndex++;
        }
    };

    while (left.length > leftIndex) {
        respon.push(left[leftIndex]);
        leftIndex++;
    }

    while (right.length > rightIndex) {
        respon.push(right[rightIndex]);
        rightIndex++;
    }

    console.log({
        left,
        right,
        respon
    });
        
    return respon;
}


const arr = [2, 6, 3, 1, 12, 5];

const responce1 = mergeSortWay1(arr);
console.log(responce1);

// const responce2 = mergeSortWay2();
