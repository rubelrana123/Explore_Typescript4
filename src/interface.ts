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
interface User {
    name: string;
    id: number;
  }
   
  const user: User = {
    username: "Hayes",
  Object literal may only specify known properties, and 'username' does not exist in type 'User'.
    id: 0,
  };