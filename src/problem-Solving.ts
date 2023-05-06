// function convertToUpperCase (str : string | string[]) : string | string[] | undefined {
//    if (typeof str === 'string') {
//      return str.toUpperCase();
//    } else if(Array.isArray(str)) {
    
//    }
// }
// const result = convertToUpperCase("hello");
// console.log(result)


function getFirtElement <T extends number | string> (arr : T[]) {
    if (arr.length  > 0) {
        return arr[0]
        
    } else {
        return undefined;
        
    }

}
const pbArray = ["abc", "def"];

console.log(getFirtElement(pbArray))