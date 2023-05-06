// const myLuckyNums = [1,2,5,4,6,6,8];
// const myLuckyString = myLuckyNums.map(num => num.toString());
// console.log(myLuckyString);

type ListFriendType = {
    friend1 : string;
    friend2 : string;
    friend3 : string;
    friend4 : string;
    friend5 : string;
}
type ListFriendOfTypeReadOnly = {
    // [key in 'friend1 | "froend2' | "friend3"]
  readonly  [ key in keyof ListFriendType] : ListFriendType[key];
}

const friendList : ListFriendType = {
    friend1 : "RUbel",
    friend2 : "Hello",
    friend3 : "Sohel",
    friend4 : "Rana",
    friend5 : "RUbel",
    
}

friendList.friend1 = "fahim";
console.log(friendList)