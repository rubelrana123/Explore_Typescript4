//null

const myText =   (text : string | null ) : void => {
     console.log(text)
     if (text === "null") {
        console.log("no text")
        
     } else {
        console.log(text)
        
     }


}
// myText("hello")


//unknow

const guessSomething = (guess : unknown) => {
console.log(guess)

}

// guessSomething(undefined)\\

