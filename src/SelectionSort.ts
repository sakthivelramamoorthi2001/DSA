//ts-worksheet

import type { NumberofArray } from "./index";


// select the samll value and move into them first 

function SelectionSort(arr: NumberofArray): NumberofArray {


    let smallindex;
    for (let i = 0; i < arr.length; i++) {

        smallindex = i;

        for (let j = i + 1; j < arr.length ; j++) {

            if (arr[smallindex] > arr[j]) {
                smallindex = j;
            }
        }

        if(i != smallindex){

            [arr[smallindex], arr[i]] = [arr[i],arr[smallindex]];
        }

    }


    return arr;

};

SelectionSort([-2,-4,-5,0,2,34,55]);
