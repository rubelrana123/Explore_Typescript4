 class Person {
    name  : string,
    age : number,
    constructor(name : string, age : number) {
        this.name = name;
        this.age = age

    }
}

const p1 = new Person("hello", 4);

inheritance


class Person1 {
    name : string;
    age : number;
    constructor(name : string, age :number) {
        this.name = name;
        this.age = age;
    }
    show () {
        console.log(`name ${this.name} age ${this.age}`)
    }
}
 class Person2 {
     name : string;
     age : number;
     position : string
     constructor(name : string, age :number, position : string) {
         this.name = name;
         this.age = age;
         this.position = position;
     }
     show () {
         console.log(`name ${this.name} age ${this.age} ${this.position}`)
     }
 }



 class Person3 extends Person2 {
     salary : string;
    
 }
 const p2 = new Person1("Rube", 25);
 console.log(p2) */