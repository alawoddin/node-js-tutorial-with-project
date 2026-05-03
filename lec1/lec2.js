const Person = {
    name : "alawoddin",
    job : "developer",
    age : 20
}

// console.log(Person)

// const printname = (Person) => {
//     console.log(Person.name)
// }

const printname = ({name}) => {
    console.log(name)
}


// printname(Person.name)
printname(Person)

const {name , age } = Person;

console.log(name , age)