class Father {
    showInfo() : void {
        console.log("father")
    }
}

class Son1 extends Father {
    showInfo() : void {
        console.log("Son1")
    }
}
class Son2 extends Father {
    showInfo() : void {
        console.log("Son2")
    }
}


function show(param : Father){
    param.showInfo();
}


const xx = new Father();
const y = new Son1();
const z = new Son2();
show(xx);
show(y);