function missingNum(arr: number[]): number {

    let ourtotal:number = arr.reduce((i,  item) => {
        return i + item;
    },0);
    


    let sumNatural:number = (arr.length) * (arr.length + 1 )/2
    return sumNatural - ourtotal;
    

    // if numer have 0 done need to add 1 extra , if doesnt have 0 we need to add ;
};


let missing: number = missingNum([1,2,3,5]);
console.log(missing);



