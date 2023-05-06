const object : {heroname : string; readonly age : number; status : string; isMarried? : boolean} = 
{
    heroname : "Rubel",
    age : 20,
    status : "Actor",
    // isMarried : false
};

const {heroname} = object;
// object.age = 40;can't change
 
console.log(heroname)