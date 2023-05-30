//this

//!use strict ---> object
//use strict ----> any data type


//1. Global Scope  ----> global object(window)
//2. Inside functions ( not arrow function ) ---> как именно вызывается функция!!!
    //-- вызвана с помощью ключевого слова new
    //-- с помощью методов call bind apply
    //-- вызывается от имени объекта ---> this = тому что слева от точки
    //-- simple call ---> this === undefined (!use strict === window)
//3. Arrow functions ---> this берется из внешнего скоупа

// ================ GLOBAL SCOPE ===============

// console.log(this)
//
// console.log(this === window)
//
// this.age = 23
//
// console.log(window.age)


// ================ INSIDE FUNCTIONS ===============


// function foo() {
//     console.log(this)
// }
//
// foo() //undefined ---> window


// function foo() {
//     console.log(this)
// }
//
// const user = {
//     foo: foo
// }
//
// foo() //window
// user.foo() //user
//
//
// const alex = {
//     name: 'Alex',
//     showName() {
//         console.log(this.name)
//     }
// }
//
// const hanna = {
//     name: 'Hanna',
//     showName: alex.showName
// }
//
// alex.showName() //alex
// hanna.showName() //hanna


// ================ CALL BIND APPLY =============

// const alex = {
//     name: 'Alex',
// }
//
// const hanna = {
//     name: 'Hanna',
// }
//
// function foo(a, b) {
//     console.log(a, b)
//     console.log(this)
// }
//
// foo.call(alex, 1, 2)
// foo.apply(alex, [1, 2])
//
// foo.bind(alex, 1)(2)
// foo.bind(alex, 1, 2)()
// foo.bind(alex)(1, 2)


// const alex = {
//     age: 23,
//     showAge() {
//         console.log(this.age)
//     }
// }
//
// setTimeout(alex.showAge, 1000)
//
// setTimeout(() => { alex.showAge() }, 1000)


// function User(name) {
//     this.name = name
// }
//
// const user = new User('Alex') //{ name: 'Alex' }
// console.log(user)


// const user = {
//     name: 'Alex',
//     showName() {
//         console.log(this)
//         console.log(this.name)
//     }
// }
//
// user.showName()
// user.showName.call({ name: 'Hanna' })
//
//
// function User() {
//     console.log(this)
// }
//
//
// new (User.bind({ name: 'Alex' }))()


// ===================== ARROW ======================


// const foo = () => {
//     console.log(this)
// }
//
// foo()

//'use strict';



/*let user = {
    group: 'Samurai-1',
    students: ['Alex', 'Hanna'],
    showGroupUsers() {
      this.students.forEach((student) => {
          console.log(this.group + ' ' + student)
       })
    }
}*/


/*user.showGroupUsers()*/







