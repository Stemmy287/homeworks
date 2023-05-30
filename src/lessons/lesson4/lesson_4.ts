console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

const promise01 = new Promise((resolve, reject) => {
    console.log('Promise is created')
})

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const promise02 = Promise.resolve('Promise Data')

promise02.then(resolve => {
    console.log(resolve)
})

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

const promise03 = Promise.reject('Promise Data')

promise03.catch(error => {
    console.log(error)
})

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const promise04 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Data')
    }, 3000)
})

promise04.then(resolve => {
    console.log(resolve)
})

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

type  HandlePromiseType = {
    promise: null | object,
    resolve: ((value?: any) => void) | null
    reject:  ((value?: any) => void) | null
    onSuccess: (paramName: string) => void
    onError: (paramName: string) => void
}

const handlePromise: HandlePromiseType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess(paramName: string) {
        return `Promise is resolved with data: ${paramName}`
    },
    onError(paramName: string) {
        return `Promise is rejected with error: ${paramName}`
    },
}

export const createPromiseHandler = () => {
    handlePromise.promise = new Promise((resolve,reject) => {
        handlePromise.resolve = resolve
        handlePromise.reject = reject
    })
}
export const resolvePromiseHandler = () => {
    handlePromise.resolve && handlePromise.resolve(handlePromise.onSuccess('Data'))
}

export const rejectPromiseHandler = () => {
    handlePromise.reject && handlePromise.reject(handlePromise.onError('Error'))
}

export const logFunc = () => {
    console.log(handlePromise.promise)
}


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

const promise06 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('My name is')
    }, 1000)
})

const onSuccess = (param: string) => {
    return `${param} Evhen`
}

const print = (param: string) => {
    console.log(param)
}

promise06.then((resolve) => {
    return onSuccess(resolve as string)
}).then((resolve) => {
    print(resolve)
})

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: "Anna"})
    }, 2000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({age: 16})
    }, 3000)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({city: ''})
    }, 4000)
})

Promise.all([promise1, promise2, promise3]).then(resolve => {
    const [ob1, ob2, ob3] = [...resolve]
    // @ts-ignore
    const {name, age, city} = {...ob1, ...ob2, ...ob3}
    console.log({name, age, city})
})

// just a plug
export default ()=>{};