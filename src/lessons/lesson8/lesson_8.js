// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]
// 'f'

// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4

Number.prototype.plus = function (num) {
	return this + num
}
Number.prototype.minus = function (num) {
	return this - num
}

// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'

const concat = (a, b, c ,d ) => {
	return [b,c,d].join(a)
}

// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

const tree = {
	valueNode: 3,
	next: [{
		valueNode: 1,
		next: null
	},
		{
			valueNode: 3,
			next: null
		},
		{
			valueNode: 2,
			next: null
		},
		{
			valueNode: 2,
			next: [
				{
					valueNode: 1,
					next: null
				},
				{
					valueNode: 5,
					next: null
				}
			]
		}]
};

// Task 5
// исправить код, что бы работал правильно

for (let i = 0; i < 10; i++) {
	setTimeout(function () {
		console.log(i);
	}, 100);
}

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало

function Book(name, author) {
	this.name = name;
	this.author = author;
	return this;
}

// function Foo(Book, 'Учебник javascript', 'Петр Сергеев')
//
// var book = Foo(Book, 'js', 'petr');
// console.log(book.name);

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

function f (a,b) {
	if (arguments.length === 2) {
		return a + b
	}
	return (c) => {
		return a + c
	}

}

// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8

// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3

const seven = (func) => {
	if (!func) {
		return 7
	} else {
		return func
	}

}
const plus = (funcNum) => {
	return funcNum + seven()
}
const one = () => {
	return 1
}
//-----------------------------------

const five = (func) => {
	if (!func) {
		return 5
	} else {
		return func
	}
}
const minus = (funcNum) => {
	return five() - funcNum
}
const two = () => {
	return 2
}

// Task 10
// Реализовать функцию сортировки массива пузырьком

const bubbleFunc = (array) => {

	for(let i = array.length - 1; i > 0; i--){
		debugger
		for (let j = 0; j < i; j++){
			debugger
			if (array[j] > array[j + 1]) {
				let temp = array[j]
				array[j] = array[j + 1]
				array[j + 1] = temp
			}
		}
	}
	return array
}

// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.

// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.

const uniqueArray = (arr) => {
	return Array.from(new Set(arr))
}

// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]

const sumArray = (arr) => {
	return arr.map(num => num * 2)
}

// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
	value: 1,
	children: [
		{
			value: 2,
			children: [
				{ value: 4 },
				{ value: 5 },
			]
		},
		{
			value: 3,
			children: [
				{ value: 6 },
				{ value: 7 },
			]
		}
	]
};

// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).

function BombSet(ms, str) {
	this.time = ms
	this.boom = str
}

BombSet.prototype.bomb = function () {
	const ms = this.time
	const boom = this.boom
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(boom)
		}, this.time)
	})
}

// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

const rle = (str) => {
	const obj = {}
	let localStr = ''

	for (let i = 0; i < str.length; i++) {
		if (!obj[str[i]]) {
			obj[str[i]] = 0
		}
		obj[str[i]]++
		if (str[i] !== str[i + 1]) {
			localStr += (str[i] + obj[str[i]])
			obj[str[i]] = 0
		}
	}
	return localStr.split('1').join('')
}

// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.

const isSorted = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]){
			return false
		}
	}
	return true
}

// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

class LinkedList {
	constructor(...args) {
		this.i = {
			...args
		}
	}
	add(some) {
		this.i[Object.keys(this.i).length] = some
	}
	has(some) {
		return Object.values(this.i).some(el => el === some)
	}
}

// Task 21
// Что выведет консоль?

Promise
	.resolve()
	.then(() => console.log(1))
	.then(() => console.log(2))
	.then(() => console.log(3));

Promise
	.resolve()
	.then(() => console.log(4))
	.then(() => console.log(5))
	.then(() => console.log(6));

//1 4 2 5 3 6