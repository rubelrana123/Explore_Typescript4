class MyBank {
    id : number;
  private   amount : number;
    name : string;

    constructor(id : number, amount : number, name : string){
        this.id = id;
        this.amount = amount;
        this.name = name;
    }
}


const bank = new MyBank(101,5000,"fahim hello");
// bank.amount = 0;
console.log(bank)