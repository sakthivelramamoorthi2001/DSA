//ts-worksheet
// function sortPeople(names: string[], heights: number[]): string[] {
//     let current;
//     let isCompleted = false;

//     const temp = (arr: number[] | string[], index1: number, index2: number) => {
//         let temp = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = temp;
//     }


//     do {
//         isCompleted = false;
//         for (let i = 0; i < heights.length - 1; i++) {

//             current = i;
//             if (heights[current] < heights[i + 1]) {
//                 temp(names, current, i + 1);
//                 temp(heights, current, i + 1);
//                 isCompleted = true;
//             }

//             console.log(heights)


//         }
//     } while (isCompleted);


//     return names;


// };


function sortPeople(names: string[], heights: number[]): string[] {


    let newArr = Array(heights.length).fill(null);
    let beforeOrder = heights.map((i, index) => ({ i, old: index, new: null }));
    let afterSort = beforeOrder.sort((a, b) => a.i - b.i).map((i, index) => ({ ...i, new: index }));

    console.log(afterSort);

    let j = 0;
    while (j < afterSort.length) {
        newArr[afterSort[j].new] = names[afterSort[j].old];
        j++;

    }

    [].includes

    console.log("🚀 ~ sortPeople ~ beforeOrder:", beforeOrder)
    console.log("🚀 ~ sortPeople ~ afterSort:", afterSort)
    console.log(newArr);



    return names;

};

sortPeople(["sakr", "sfggf", "sf"], [180, 165, 170])