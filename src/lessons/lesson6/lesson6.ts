console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.



class Student {
    firstName: string;
    lastName: string;
    points: number[]
    static plusElem = function (array: Array<number>) {
        return  array.reduce((acc,el) => acc + el) / array.length
    }

    constructor(firstName: string, lastName: string, points: Array<number>) {
        this.firstName = firstName
        this.lastName = lastName
        this.points = points
    }

    get stud(){
        if ( Student.plusElem(this.points) >= 4) {
            return this.lastName
        } else {
            return 'bad student'
        }
    }
}

let arrStudents = [
    new Student('a', 'a', [5,5,5,5,5]),
    new Student('b', 'b', [4,3,4,2,1]),
    new Student('c', 'c', [4,4,4,4,4]),
    new Student('d', 'd', [3,3,3,3,3]),
    new Student('e', 'e', [2,2,2,2,2]),
    new Student('k', 'k', [1,1,1,1,1]),
    new Student('l', 'l', [1,2,3,4,5]),
    new Student('m', 'm', [2,3,4,5,5]),
    new Student('n', 'n', [3,4,5,5,5]),
    new Student('p', 'p', [4,5,5,5,5]),
].sort((a,b) =>
    Student.plusElem(b.points)
    - Student.plusElem(a.points))

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

type CustomerType = {
    firstName: string
    lastName: string
    address: string
    bankNumber: number
    getFirstName: () => void
    getLastName: () => void
    getAddress: () => void
    getBankNumber: () => void
    setFirstName: (firstname: string) => void
    setLastName: (lastName: string) => void
    setAddress: (address: string) => void
    setBankNumber: (bankNumber: number) => void
    getInfo: () => void
}

class Customer {
    firstName: string
    lastName: string
    address: string
    bankNumber: number

    static sort = function (arr: Array<CustomerType>, down: number, up: number) {
        return arr.filter(el => el.bankNumber >= down && el.bankNumber <= up).sort()
    }

    constructor(firstName: string, lastName: string, address: string, bankNumber: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.bankNumber = bankNumber
    }

    getFirstName() {
        return this.firstName
    }
    getLastName() {
        return this.lastName
    }
    getAddress() {
        return this.address
    }
    getBankNumber() {
        return this.bankNumber
    }

    setFirstName(firstname: string) {
        this.firstName = firstname
    }
    setLastName(lastName: string) {
        this.lastName = lastName
    }
    setAddress(address: string) {
        this.address = address
    }
    setBankNumber(bankNumber: number) {
        this.bankNumber = bankNumber
    }

    getInfo() {
        return (
            `first name -> ${this.firstName}
last name -> ${this.lastName}
address -> ${this.address}
bank number -> ${this.bankNumber}`
        )
    }

}

const customers = [
    new Customer('a', 'a', 'some address', 1),
    new Customer('b', 'b', 'some address', 2),
    new Customer('c', 'c', 'some address', 3),
    new Customer('d', 'd', 'some address', 4),
    new Customer('e', 'e', 'some address', 5),
    new Customer('f', 'f', 'some address', 6),
    new Customer('g', 'g', 'some address', 7),
    new Customer('k', 'k', 'some address', 8),
    new Customer('l', 'l', 'some address', 9),
    new Customer('m', 'm', 'some address', 10),
]

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

class Car {
    brand: string
    cylindersNumber: number
    power: number

    constructor(brand: string, cylindersNumber: number, power: number) {
        this.brand = brand
        this.cylindersNumber = cylindersNumber
        this.power = power
    }
}

class Truck extends Car {
    loadСapacity: number
    purpose: string
    constructor(brand: string, cylindersNumber: number, power: number, loadСapacity: number) {
        super(brand, cylindersNumber, power);
        this.loadСapacity = loadСapacity
        this.purpose = 'some'
    }
    purposeBrand(purpose: string){
        this.purpose = purpose
    }
}

// just a plug
export default () => {
};