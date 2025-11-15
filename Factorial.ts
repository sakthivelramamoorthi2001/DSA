//ts-worksheet

const factorialNum = (n: number, treeside = ""): number => {

    console.log(n, treeside);
    
    if (n == 0) {
        return 1;
    }

    return factorialNum(n - 1) * n;
};


const s = factorialNum(5);

console.log(s, 'factorila');
