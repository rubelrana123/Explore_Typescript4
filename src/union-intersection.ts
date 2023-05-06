type HeroTypeTwo = {
    name : string;
    age : number
}

type HerpTypeThree = HeroTypeTwo & {
    // name : string;
    // age : number;
    salary : number;
    position : string
}

const HeroData : HerpTypeThree = {
    name : "Jaili",
    age  : 20,
    salary : 5555,
    position : "Boss"
}

const myFavHero : HeroTypeTwo | HerpTypeThree  = {
    name : "Rubel",
    age : 20,
    salary : 522,
    position :"kjk"
}