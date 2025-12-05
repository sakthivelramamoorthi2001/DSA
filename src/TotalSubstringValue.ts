//ts-worksheet


function TotalSubstringValue(arr: number[], k: number): number {

    let start = 0, end = 0, max = 0;

    let total = 0;

    while (end < arr.length) {


        console.log([start, end, (end - start) + 1]);

        total += arr[end]

        if (Math.floor(end - start + 1) == k) {
            max = Math.max(total, max);
            console.log(arr.slice(start, end+1), total, );
            total -= arr[start];

            start++;
        }

        end++;

    }


    return max;

};


console.log("dd");


TotalSubstringValue([1, 2, 3, 4, 5], 2);

/*

1 2 3
2 3 5
3 4 7
4 5 9

*/



