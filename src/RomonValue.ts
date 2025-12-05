//ts-worksheet





function romanToInt(s: string): number {

    let obj: { [Key: string]: number } = {
        "I": 1,
        "II": 2,
        "III": 3,
        
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };


    let sum = 0;
    s.split('').map(i => {
        console.log(i, obj[i]);

        sum += obj[i]
    })
    return sum;
};


romanToInt("MCMXCIV")
