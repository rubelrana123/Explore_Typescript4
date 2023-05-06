const isHeroAvailable : boolean = true;
// if(isHeroAvailable) {
//     console.log("book now")
// }
// else {
//     console.log("you can not book")
// };
    //   varible         condition    ?       true      :   false
const checkAvailable= isHeroAvailable ? "book Now" : "out of stock";
console.log(checkAvailable);


//nullish operator

const inputSomething : unknown = null;
//null= no input   undefined = no input    hello = hello 4=4  "strt" = strt false = false   true = true 
const checkInput = inputSomething ?? "no input";
console.log(checkInput);