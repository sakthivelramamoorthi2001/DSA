function longestCommonPrefix(strs: string[]): string {

    
    if(!strs.length) return '';
    
    let comonPrefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {

        
        while(!strs[i].startsWith(comonPrefix)){
            comonPrefix = comonPrefix.slice(0,-1);
            if(!comonPrefix) {
                return ""
            }
        }
    }

    return comonPrefix;
};


let bb:string = longestCommonPrefix(["flow", "flowght","flowdf"]);


console.log(bb,'sss');




