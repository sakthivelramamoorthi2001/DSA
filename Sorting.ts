
const numbe = [6,5,4,3,2,1,1000];

console.log(numbe.sort((a, b) => {
    console.log(a,b,'==============');
    return b -a ;
}));

console.log(numbe.sort());

