/* // type myArray = Array<string>
type myArray <T> = Array<T>

// const myNumbers : number[] = [4,5,5,7,98,7];
const myNumbers : Array<number> = [4,5,5,7,98,7];

const myString : myArray<string> = ["a","b", "c"];

const myBoolean : Array<boolean>= [true, false, true, false];

type dataTypeObj = {name : string; age : number}
// const ourInfo : myArray<object> = [
const ourInfo : myArray<dataTypeObj> = [
    { name : "RUbel", age : 24},
    { name : "Rana", age : 20},
    { name : "Sohel", age : 23},
]


//tupple generic
// type MyGenericType = [number, string];
type MyGenericType<X, Y> = [X, Y];
const A : MyGenericType <number, string>= [2, "jjh"];
const B : MyGenericType <boolean, string>= [true, "jjh"];

///function generic

const meDetails= <X,Y> (param1: X, param2 : Y) : X => {
    console.log(`param1 ${param1} param2 ${param2}`);
    return param1;

}
console.log(meDetails<string, number>("Shawon", 22) */
// )
// meDetails<string, number>("Shawon", 22)
// meDetails<string, boolean>("Rubel", true)

//generic interface

// interface IInfo <T> {
//     name :string;
//     age : T;
//     mark : number
// }


// const info : IInfo <T> = {
//     name : "Firoz",
//     age : 22,
//     mark : 34
// }

//keyof 
type MovieType = {
    name : string,
    age : number
}
//type movieType = "name" | "age"
const data : MovieType = {
    name : "hello",
    age :  310,
}
type myMovieType = keyof MovieType;
const myText11 :  myMovieType = "name"
console.log(data["age"]);