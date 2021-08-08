var log = console.log

function hello() {
    log('hello', this)
}



const  person = {
    name : "Vladimir",
    age : 28,
    sayHello: hello,
    sayHelloWindow: hello.bind(),
     logInfo : function (job) {
         console.group(`${this.name} info:`)
         log(`Name is ${this.name} `)
         log(`age is ${this.age}`)
         log(`Work in ${job}`)
         console.groupEnd
     }
}

const secondPerson = {
    name : "Kek",
    age : 22,
}

const persons = {
    onePerson : person

}
hello()

// log(person.sayHello()) //hello { name: 'Vladimir', age: 28, sayHello: [Function: hello] }
// log(persons.onePerson.sayHello())
// log(person.sayHelloWindow())
// log(person.logInfo.bind(secondPerson)())

const infoKek = person.logInfo.bind(secondPerson)

// log (infoKek("IT")) //Kek info:
//                         // Name is Kek
//                         // age is 22
//                         // Work in IT

// person.logInfo.call(secondPerson)

// person.logInfo.apply(secondPerson)


const array  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.multBy = function(n) {return this.map(i => i * n)} 

log(array.multBy(2))