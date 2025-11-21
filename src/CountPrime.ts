//ts-worksheet

function countPrimes(n: number): number {

    if (n < 2) {
        return 0;
    }

    let count = 0;

    for (let i = 2; i < n; i++) {
        if (checkIsPrime(i)) {
            count++;
        }
    };

    return count;

};

function checkIsPrime(n: number): boolean {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}


countPrimes(499979)