//type assertion
const thinkSomething = "Hello";
console.log((thinkSomething as string).charAt())



const myLuckNum = (num : string | number) : number | string | undefined => {
   if (typeof num === "number") {
    return "this number"
    
   } else if (typeof num === "string") {
    return "string "
   }
}
myLuckNum(5)