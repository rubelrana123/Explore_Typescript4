//spread oprator

const heroArr1 : string [] = ["khan" ,"rana", "Abul"];
const heroArr2 : string [] = ["alom", "sharukh", "helen"];

const [hero1, hero2, x] = heroArr1;
console.log(hero1, hero2, x)

// heroArr1.push(...heroArr2
//     );
// console.log(heroArr1
//     )

//score1 : number, score2 :number, score13 : number
// const restFunc = (...score : number[]) : number => {
//     let sum : number = 0;
//   score.map(n=> {
//         sum = sum + n
//     })
//     return  sum;
// }
// // const scoreArray = [3,5,67,8,98]
// const final = restFunc(15,67,6);
// console.log(final)


// const heroStrinf = (...name : string[]) : void => {
//     name.map(n => console.log(n))
// }
// heroStrinf("Rubel", "Rana")