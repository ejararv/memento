//Zamykanie
var log = console.log

const calc = (n) => {
    return function(){
        console.log(10 * n)
    }
}

const x = calc(20)

x()

function incrementor(n) {
    return function(num) {
        return n + num
    }
}

const add = incrementor(1) // 1= n
const addTwo = incrementor(2)
log(add(15)) //15 =num
log(addTwo(2))

function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}
const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')

log( comUrl('facebook'))
log( comUrl('intel'))
log(ruUrl('vk'))