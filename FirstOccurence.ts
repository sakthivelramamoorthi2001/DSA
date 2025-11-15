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

    return 0


};

let reponce = strStr2("sakththi", "thi");

console.log(reponce);
