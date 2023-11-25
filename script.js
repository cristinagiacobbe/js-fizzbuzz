/* Oggi lavorerete a forse uno dei programmi piú noti nel ns settore, FizzBuzz!
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

const ContainerElement = document.querySelector(".container")
//create a 'div'
const boxElement = document.createElement("div")
//give 'class=box' to created div
boxElement.classList.add("box")

for (let i = 1; i <= 100; i++) {
    //console.log(i);
    
    const ContainerElement = document.querySelector(".container")
    //create a 'div'
    const boxElement = document.createElement("div")
    //give 'class=box' to created div
    boxElement.classList.add("box")
    
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz", i );  
        boxElement.innerText = "FizzBuzz";
        ContainerElement.append(boxElement)

    } else if (i % 3 === 0) {
        console.log("Fizz", i );  
        boxElement.innerText = "Fizz";
        ContainerElement.append(boxElement)

    } else if (i % 5 === 0) {
        console.log("Buzz", i );  
        boxElement.innerText = "Buzz" ;
        ContainerElement.append(boxElement)

    } else {
        console.log(i); 
        boxElement.innerText = i ; 
        ContainerElement.append(boxElement)
    }
   
}
