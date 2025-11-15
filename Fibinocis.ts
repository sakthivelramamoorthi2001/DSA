//ts-worksheet

function fibinocis(n: number): number {

    if (n == 1 || n == 0) {
        return n;
    }


    return fibinocis(n- 1) + fibinocis(n - 2);

}


var fib = fibinocis(3);
console.log(fib);


