console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают

class Animal {
    name: string
    constructor(name: string) {
        this.name = name
    }
    walk() {
        console.log(this.name + ' goes')
    }
    eat() {
        console.log(this.name + ' eats')
    }
    sleep() {
        console.log(this.name + ' sleeps')
    }
}

//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают

class Monkey extends Animal{
    constructor(name: string) {
        super(name);
    }
    roar() {
        console.log(this.name + ' roars')
    }
    climb() {
        console.log(this.name + ' climbs')
    }
}

//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают

class Human extends Monkey {
    constructor(name: string) {
        super(name);
    }
    speak() {
        console.log(this.name + ' speaks')
    }
    think() {
        console.log(this.name + ' thinks')
    }
}


// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование

//----------------------------------------------------------
/*
function Animal(name = 'Animal') {
    this.name = name
    this.walk = function () {
        console.log(this.name + ' goes')
    }
    this.eat = function () {
        console.log(this.name + ' eats')
    }
    this.sleep = function () {
        console.log(this.name + ' sleeps')
    }
}

function Monkey(name = 'Monkey') {
    this.name = name

    this.roar = function () {
        console.log(this.name + ' roars')
    }
    this.climb = function () {
        console.log(this.name + ' climbs')
    }

}
Monkey.prototype = new Animal()

function Human(name = 'Human') {
    this.name = name
    this.speak = function () {
        console.log(this.name + ' speaks')
    }
    this.think = function () {
        console.log(this.name + ' thinks')
    }
}
Human.prototype = new Monkey()


let human = new Human()
human.walk()
*/
//----------------------------------------------------------

// Task 05
// Используя метод Apply реализовать свой собственный метод bind
//@ts-ignore
Function.prototype.customBind = function (context: any) {
    const func = this
    return function (...args: any) {
        func.apply(context, args)
    }
}


// just a plug
export default () => {};