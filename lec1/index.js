// const Person = {
//     name: "alawoddin",
//     age : 20
// }

// console.log(Person)


const Person = {
    name : "alawoddin", 
    age : 20,
    greet: function() {
        console.log("Hi I am " , this.name)
        
    }
    greet() {
        console.log("Hi I am " , this.name)
        
    }
}


// console.log(Person)
Person.greet()