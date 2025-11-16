//ts-worksheet

function strStr(haystack: string, needle: string): number {

    if (haystack.match(needle) == null) {
        return -1;
    }

    return haystack.indexOf(needle);
};


function strStr2(haystack: string, needle: string): number {

    if (haystack.match(needle) == null) {
        return -1;
    }


    let checkWord = ""
    for (let i = 0; i < haystack.length; i++) {


        if (haystack.charAt(i) == needle.charAt(0) || checkWord.length) {
            checkWord += haystack.charAt(i);
        }

        if (checkWord.length == needle.length && checkWord != needle) {
            i = i - (checkWord.length -1);
            checkWord = "";
        }

        if (checkWord.length == needle.length && checkWord == needle) {
            return i - checkWord.length + 1;
        }
    }


    return -1;
};


function strStr3(haystack: string, needle: string): number {


    return haystack.trim().indexOf(needle) || -1;
}




function strStr22(haystack: string, needle: string): number {


    let j = 0, s = 0;

    for (let i = 0; i < haystack.length; i++) {

        if(haystack[i] == needle[j]){
            if(j == 0){
                s = 1;
            }
            j++;
            if(j == needle.length){
                return s
            }
        }else{
            if(haystack[i] == needle[0]){
                s = i;
                j = 1
            }else{
                j = 0;
            }
        }
    }
    return -1;

};

let responce = strStr3("sakththi","hiv");


console.log(responce,'-------');

