class Student {
    fullName: string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}

interface Person {
    firstName: String;
    lastName: String;
}

function greeter(person: Person) {
    return 'Hello,' + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M", "User");

document.body.innerHTML = greeter(user);