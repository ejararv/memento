var log = console.log

const person =new Object ({
    name : "Tobola",
    age : 21,
    sayMyName: function() {
        log("TOBOLAAAA")
    }
})


Object.prototype.myJob = function(job) {
    log(`I am ${job}`)
}


log(person.myJob('Krypto Investor'))

const person2 = Object.create(person)
person2.name = 'Daniel'

log(person2)