//ts-worksheet

import type { NumberofArray } from "./index";


function InsertionSort(arr: NumberofArray): NumberofArray {


    let selecteIndex;
    for (let i = 1; i < arr.length; i++) {

        selecteIndex = i;
        for (let j = i - 1; j >= 0; j--) {

            if (arr[selecteIndex] > arr[j]) {
                selecteIndex = j;
            }
        }

        [arr[selecteIndex], arr[i]] = [arr[i], arr[selecteIndex]]

    }

    return arr;

}


InsertionSort([33, 43, 23])