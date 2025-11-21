//ts-worksheet

function sortSentence(s: string): string {

    if (!s.length) {
        return s;
    }

    let sv = s.split(" ").map(i => {
        let ss = i.slice(-1);
        return i = ss + i
    }).sort().map(i => {
        return i.slice(1);
    });

    console.log(sv);


    return s;
};

sortSentence("is2 sentence4 This1 a3")