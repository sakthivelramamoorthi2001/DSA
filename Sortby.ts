type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {


    let s = fn(arr);

    if (s) {
        return s.toString().split(" ").sort();
    } else {
        return arr.filter(i => i?.toString).sort();
    }

};

