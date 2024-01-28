
const person = {
    name: "Zishan Shams",
    age: 20,
    occupation: "Software Engineer"
};


function printPersonDetails(person) {
    for (let property in person) {
        console.log(`${property}: ${person[property]}`);
    }
}


printPersonDetails(person);
