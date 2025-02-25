//type assertion
// const thinkSomething = "Hello";
// console.log((thinkSomething as string).charAt())
//assertion
type Pet = {
   name: string;
   walk: () => void;
 };
 
 type Fish = {
   name: string;
   swim: () => void;
 };
 
 let myPet: Pet | Fish = { name: 'Goldie', swim: () => console.log('Swimming') };
 
 (myPet as Fish).swim();
 

const myLuckNum = (num : string | number) : number | string | undefined => {
   if (typeof num === "number") {
    return "this number"
    
   } else if (typeof num === "string") {
    return "string "
   }
}
myLuckNum(5)