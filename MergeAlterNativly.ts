//ts-worksheet

function mergeAlternately(word1: string, word2: string): string {

    let mergeAl = "";
    if (!word1.length) {
        return word1 + word2;
    }

    for (let i = 0; i < word1.length + word2.length; i++) {
        if(word2.charAt(i)){
            mergeAl += word1.charAt(i);
            mergeAl += word2.charAt(i);
        }else{
            mergeAl += word1.slice(i);
            mergeAl += word2.slice(i);
            break;
        }   
    }
    return mergeAl;

};

const vvv = 2 + 6;
console.log(vvv);


let ss = mergeAlternately("ab", "pqrs");
console.log(ss.split(""));
