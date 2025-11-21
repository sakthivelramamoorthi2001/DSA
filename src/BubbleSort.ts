//ts-worksheet
const arrs: number[] = [17233,32521,14087,42738,46669,65662,43204,8224];


const bubbleSortFn = (ar: number[]): number[] => {


    let seapCompleted;

    do {


        seapCompleted = false;
        for (let i = 0; i < ar.length - 1; i++) {
            if (ar[i] < ar[i + 1]) {
                [ar[i], ar[i + 1]] = [ar[i + 1], ar[i]];
                seapCompleted = true;
            }
        }

    } while (seapCompleted)

        
        console.log(ar,'------------');
        

    return ar;
}

bubbleSortFn(arrs);

