// type guard 3 


//of guard
type typeOFData = number | string;
const doSomeThing = (a : typeOFData) : typeOFData => {
    if (typeof a === "number") {
        return a;
        
    } else {
        return `string ${a}`
        
    }
}

// console.log(doSomeThing("23"));
// console.log(doSomeThing(20));

//in guard
type X = {
    name : string;
    phone : number;
    age : number;
}
type Y = {
    name : string;
    address : string;
    position : string
}

const getInfo  = (info : X | Y) => {
 if ('phone' in info) {
    return `type a ${info.phone}`
    
 } else if("salary" in info) {
    return `type B ${info.salary}`
    
 }
}

//instance of guard
class P {
    position : string;
    salary : number;

    constructor(position : string, salary : number) {
        this.position= position;
        this.salary = salary;
    }
    showDetails() {
        console.log(`position ${this.position}`)
    }
}
class Q extends P  {
    constructor(position : string, salary : number) {
         super(position, salary)
    }
    showSalary() {
        console.log(`position ${this.salary}`)
    }

}
class R extends P  {
    constructor(position : string, salary : number) {
         super(position, salary)
    }
    showPosition() {
        console.log(`position ${this.position}`)
    }

}

function findInstance (person : P) {
    if (person instanceof Q) {
        
    } else if(person instanceof R){

        
    }

}
const p4 = new Q ("developer", 20558);
const p5 = new R ("developer", 20558);


