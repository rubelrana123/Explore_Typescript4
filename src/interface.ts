interface HeroInterface {
    name : string;
    age : number;
}
type HeroTypeOne = {
    name : string;
    age : number
}
type ABC = number; //allow
// interface ABC = number; not allow
const heroThree :  HeroInterface = {
    name : "RU bel",
    age : 22
}