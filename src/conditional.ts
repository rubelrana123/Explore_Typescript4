type TypeA = boolean;
type TypeB = TypeA extends boolean ? boolean : null;
//nested


type TypeC = string;
type TypeD = boolean;


type TypeE = TypeA extends number ? number : TypeB extends string ? string : TypeD extends boolean ? boolean : null; 