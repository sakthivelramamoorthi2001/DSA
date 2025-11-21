//ts-worksheet


const sumArray = (arr: number[], size = 0, sum = 0): number => {


    if (size == 0) {
        // sum += ar[size]
        return sum;
    }
    // sum += ar[size]
    return sumArray(arr, size - 1, sum);
}

const sumA = (arr: number[]) :number => {

    if(arr.length == 0){
        return 0;
    }

    let ls = arr.pop();

    return ls ? ls + sumA(arr) : 0;
}

sumA([5,5,5,5,5])


const ar = [5, 5, 5, 5, 5, 5, 5, 5];
const sum = sumArray(ar, ar.length - 1);

console.log(sum);

