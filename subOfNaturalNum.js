//ts-worksheet

const sumOfNaturalNumWay1 = (num) => {
    let count = 0;

    for (let i = 1; i <= num; i++) {
        count += i;
    }
    return count;
}


const sumOfNaturalNumWay2 = (num) => {
    return num * (num +1) /2;
}



console.log(sumOfNaturalNumWay1(15));
console.log(sumOfNaturalNumWay2(15));
