//ts-worksheet

function isValid(s: string): boolean {

    let obj: { [Key: string]: string } = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    let stack:string[] = [];
    for (let i = 0; i < s.length; i++) {
        console.log(stack, 'stck update')
        if (obj.hasOwnProperty(s[i])) {
            stack.push(s[i]);
        } else {
            if (stack.length == 0) {
                return false;
            }

            if (obj[String(stack.at(-1))] != s[i]) {
                return false; stack.at(-1)
            }

            stack.pop();
        }
    }

    return stack.length ? false : true

};

isValid("(())")

