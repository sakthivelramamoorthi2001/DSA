const arrs: number[] = [12, 24, 55, 67, 89, 35, 1];


const bubbleSortFn = (ar: number[]): number[] => {


    let seapCompleted;

    do {


        seapCompleted = false;
        for (let i = 0; i < ar.length - 1; i++) {
            if (ar[i] > ar[i + 1]) {
                [ar[i], ar[i + 1]] = [ar[i + 1], ar[i]];
                seapCompleted = true;
            }
        }

    } while (seapCompleted)

        
        console.log(ar,'------------');
        

    return ar;
}

bubbleSortFn(arrs);

