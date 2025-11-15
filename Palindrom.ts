

function reverNum(num :number = 0, reversedNum : number = 0): number {
    
    if(num == 0){
        return reversedNum;
    }

    num = Math.abs(num);
    reversedNum =  (reversedNum * 10) + (num % 10);   
    num = Math.floor(num / 10) ;
    return reverNum(num, reversedNum);
}


let r:number = reverNum(-123); 
console.log(r,'eee');
