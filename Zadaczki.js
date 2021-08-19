var log = console.debug;

// function transform(arr) {

//     let result = {}
//     for(let item of arr) {
//         result[item.name] = item.value
//         return result
//     }

// }

// const arr = [
//     {name :'name', value: 'Anatoli'},
//     {name :'age', value: '40'}
// ]

// console.log(transform(arr)
// )

// function sumAll(...all){
//     let res = 0
//     for(let item of all) {
//         res += item

//         }
//         return res

// }

// const x = sumAll(1,2,3,4,5)
// log (x)

// function createMember (name){
//     return function(lastName){
//         log( name + lastName)
//     }
// }

// const names = createMember("Vlad")

// log(names('rash'))

// const names = ['Vlad', 'Liza' , 'Mychajlo']

// function replaceItems (arr, item, replaceItem){

//     return arr.map( i => i === item ? replaceItem : i)
// }

// log(replaceItems([1,2,3,4,5], 2, 'a'))

// let arr = [1, 2, [3, 4, [5]], 6, 7, [[8]]];

// function flatArr(array) {
//   const res = [];
//   array.map((item) => {
//     return function () {
//       if (Array.isArray(item) === true) {
//         res.push(flatArr(array[i]));
//       } else {
//       }
//     };
//   });

//   return res;
// }

// log(flatArr(arr));

// function camelize(str){
//     let arr = str.split()
//    let string = []
//     for(let i = 0; i < arr.length; i++ )
//     if (arr[i] !== '-'){
//        string.push(arr[i])
//     }
//     return

// }
// log(camelize("background-color")) == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// function duplicate(arr) {
//     return [...arr, ...arr]
// }

// log(duplicate([1,2,3,4,5]))

// function getRandomArr() {
//     let mySet = new Set()

//     for (let i = 0; i < 100; i++){
//         if(mySet.has()) {

//         }
//         mySet.add( Math.floor(Math.random() * (200 - 1)))

//     }
//     return mySet
// }
// log(getRandomArr())

// function zwezdoczki (n){
//     let gwiazdka = '*'
//     for (let i = 0; i <= n; i++){
//      gwiazdka += '*'
//       log(gwiazdka)
//     }

// }

// log(zwezdoczki(10))

// function fibonaci(n) {
//     if (n <= 0) {
//         return 0
//     }if (n <= 2) {
//         return 1
//     }
//     let prev = 1
//     let res = 1
//     for( let i = 0; i < n - 2 ; i++){
//         let r = res
//         res += prev
//         prev = r

//     }
//      return res

// // return fibonaci(n - 1) + fibonaci(n + 2)
// }

// log(fibonaci(7))

// function palindrom(str) {
//     str = str.toLowerCase()

//     return str === str.split('').reverse().join('')
//     // for(let i; i < str.length / 2; i++){
//     //     if( srt[i] !== str[str.length - i - 1]){
//     //         return false
//     //     }
//     // }
//     // return true

// }
// log(palindrom('zaaeaaaz'))
// let counter = 0
// function binary(arr, item) {
//     let start = 0
//     let end = arr.length
//     let midle
//     let isFound = false
//     let position = -1
//     while(isFound === false && start <= end) {
//         counter += 1
//         midle = (end + start) /2
//         if (arr[midle] === item){
//             isFound = true
//             position = midle;
//             return position ;
//         }
//         if(item < arr[midle]){
//             end = midle - 1
//         } else {
//             start = midle + 1
//         }

//     }
//     return position;
// }

// log(binary([1,2,3,4,5,6,7], 6))
// log(counter)

// let string = 'aaazzza'

// function palindrom(str){

//   if(Array.from(str).join('') === Array.from(str).reverse().join('')){
//       return true
//   } return false

// }

// log(palindrom(string))

// var o = new Object(null);
// log(o)

// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: 33
//   };

//   for (const [value] of Object.entries(object1)) {
//     console.log(` ${value}`);
//   }

// function sumTo(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// log(sumTo(10)); // 5050

// function factorial(n) {
//   return n ? n * factorial(n - 1) : 1;
// }

// alert(factorial(5)); // 120

// function faktorial(num) {

//     // res = num === 1 ?  num : (num < 0 ? num :  num * faktorial(num - 1))

//       if (num === 1) return num

//       return num * faktorial(num - 1)
//   }
//   log(faktorial(5))

//   function sum (arr) {
//       let res = 0
//       for(let i = 0; i <= arr.length; i++) {
//         res = arr[i] += res

//       }
//       return res

//   }

// const arr =[1,4,5,8]

//   function summ(arr) {

//     return arr.length ? arr[0] + summ(arr.slice(1)) : 0;
// 	// sum = sum || 0
// 	// if (arr.length) {
// 	// 	return summ(arr, sum + arr.pop())
// 	// } else {
// 	// 	return sum
// 	// }
// }
//   log(summ(arr))

//   const string ='Hello Worlds'

// function findShort(str){

//     return str.split(' ').sort((a,b) => a.length - b.length)[0]

// }

// log(findShort(string))

// define(['module1', ',module2'], function(module1, module2) {
//     console.log(module1.setName());
//   });

// function checkBrackets(str) {
//     const stack = []
//     for(let i = 0; i < str.length; i++){
//        const bracket = str[i]

//        if(bracket ==='('){
//            stack.push(bracket)
//        }else {
//            const lastEl =  stack.pop();
//            if(!lastEl) {
//                return false
//            }
//        }
//     }

//    return  stack.length  ? false : true
// }

// log(checkBrackets('()'))

// const arr = [1,1,2,4,4,4,5,5,6,7,7,8]

// function noRepeat(array){

//     let res = []

//     for(let item of array){
//         let counter = 0
//         let currItem = item
//         for(let repItem of array){
//             if(currItem === repItem) {
//                 counter++
//             }

//         }
//         if(counter === 1){
//             res.push(currItem)
//         }
//     }
//     return res
// }

// log(noRepeat(arr))

// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10
////////////////////////////////////////////////////////////////////////

// function sum(arr, targetSum){
//     const res = []
//     for(let firstNum of arr){
//         for(let secondNum of arr){
//             if(firstNum !==secondNum && firstNum + secondNum === targetSum){
//                 return [firstNum, secondNum]
//             }
//         }
//     } return res

// }

// log(sum(array, 10))
// //

// const arr = [{name: 'Vlad',age: 22, groupId: 321}, {name: 'Liza',age: 16, groupId: 3322},{name: 'Lizaveta',age: 19, groupId: 32}]

// function students(array) {
//     const res = {}
//     array.map(item => {

//         if(item.age >= 17){

//         }
//         log(item)
//     })
// }

// log(students(arr))

// function konstruktor(name, age){
//     return {
//         name, age
//     }
// }
// const str = () =>{

//     for(let i=0; i<10; i++) {
//         setTimeout(function() {
//           log(i);
//         }, 100);
//       }
// }

// log(str() )

// function nums(x, y){

//     let res = []
//     if(y -x === 2) {
//         return [x + 1]
//     }
//     return nums(x + 1, y)

// }
// // log(nums(10, 18))
// let string = 'aaazzzaaaa'

// function palindrom(str){

// //   if(Array.from(str).join('') === Array.from(str).reverse().join('')){
// //       return true
// //   } return false
//     let palindrom = []
//     for (let i = str.length; i >= 0; i--){
//          palindrom.push(str[i])
//     }

//     return palindrom.join('') == str ? true : false

// //    return str === str.split('').reverse().join('') ? true : false

// }

// log(palindrom(string))

// const first = [1, 2, 3, 4];
// const second = [3,4,5,6]
// function intersection (a, b) {

//     const res = []
//     for(let i = 0; i <= a.length; i ++){
//         var aNum = a[i]
//         for(let j = 0; j <= b.length; j ++){
//             let bNum = b[j]
//             return aNum === bNum ? res.push(bNum) : bNum
//         }
//     }
//     return [...res]

// }

// log(intersection(first,second))

// function filter(arr, x) {
//   const res = [];
//   for (let item of arr) {
//     if (item == x) {
//       res.push(item);
//     }
//   }
//   return res;
// }

// log(filter([first], (n) => n < 3));



//  const add = (a, b) => { 

//    return b !== undefined ? a + b : (c) => a + c

//  }

//  log (add(2,5)) 
// let str = 'main.de.getr.exe'

// const getExtention = (filename) => {
//     const parts = filename.split('.')
//     return parts.length === 1 ? null : parts[parts.length - 1]  
// }
// log (getExtention(str))

// let string = 'helloworld'

// function reverse (str, from , to) {

//     const reversePath = Array.from(str).slice(from - 1, to).reverse().join('')
    
    
//      return str.slice(0, from) + reversePath + str.slice( to)

// }

// log(reverse(string,1, 5))
const arr = [1,2,3,4,5,6]


const sum = (array) => {
  return array.reduce((ac, x) =>  ac + x)
   
}

log(sum(arr))