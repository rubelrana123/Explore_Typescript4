//function
function heroFunction (a : number,b : number) : string{
    const sum = a + b;
    return `"this is normal function" ${sum}`
}
// heroFunction(1,4)

//arrow function
const heroArrowFunc = (c : number, d : number): string =>  {
    return  `hello ${c + d}`
}
const result = heroArrowFunc(5,8);
console.log(result)