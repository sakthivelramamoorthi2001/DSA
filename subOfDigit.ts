function sumOfDigit(num : number): number {
 

    let sum:number = 0;

    while(num > 0){
         
       sum +=  num % 10;
       
       num = Math.floor(num / 10);;

       console.log(sum,num);

    }

    return sum;
}


let jj:number = sumOfDigit(1234)
console.log(jj);;
