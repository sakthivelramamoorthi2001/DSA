const primeNumList = (end) => {
    let data =  [];
    for (let i = 0; i <= end; i++) {        
        if (i % 2 == 0) {
            data.push(i);
        }
    }
    return data;
}


let ans = primeNumList(10);

console.log(ans,'---');