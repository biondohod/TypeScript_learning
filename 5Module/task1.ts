type Person = {
    name: string,
    age: number,
}

type Bridge = {
    city: string,
    age: number,


}


type Wine = {
    manufacturer: string,
    age: number,
    grade: string,
}


function getOldestObject<T extends {age: number}>(items: Array<T>): T {
    return items.sort((a: T, b: T) => b.age - a.age)[0];
}

const people: Person[] = [
    {name: 'Andrey', age: 32},
    {name: 'Anton', age: 28},
    {name: 'Ivan', age: 30},
];
const bridges: Bridge[] = [
    {city: 'New York', age: 50},
    {city: 'Moscow', age: 100},
    {city: 'London', age: 150},
];
const wines: Wine[] = [
    {manufacturer: 'Chile', age: 10, grade: 'Merlot'},
    {manufacturer: 'France', age: 5, grade: 'Bordeaux'},
    {manufacturer: 'Italy', age: 15, grade: 'Chianti'},
];

console.log(getOldestObject<Person>(people));
console.log(getOldestObject<Bridge>(bridges));
console.log(getOldestObject<Wine>(wines));
