//ts-worksheet

function maxSumDivThree(nums: number[]): number {

    let overAllTotal = 0;
    nums.map(i => overAllTotal += i);
    console.log(overAllTotal);

    console.log(nums);
    


    let highTotalNums: number | null = null;

    nums.map(i => {
        console.log(i);
        
        let curretOverAll: number = overAllTotal - i;

        console.log(curretOverAll);

        if(curretOverAll % 3 == 0 && !highTotalNums){
            highTotalNums = curretOverAll;
        }


        if (highTotalNums && highTotalNums < curretOverAll && curretOverAll % 3 == 0) {
            highTotalNums = overAllTotal - i;
        }

    })



    return highTotalNums || 0;

};


maxSumDivThree([3, 6, 5, 1, 8])