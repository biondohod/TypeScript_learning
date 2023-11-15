const actor: object = {
    name: 'Michael',
    firstName: 'Ivanov',
    country: 'Russia',
    city: 'Machachkala',
    hasOskar: false,
    filmsCount: 10,
    age: '14',
    languages: ['RU-ru', 'EN-us', 'TR-tr'],
};
const howOldWillBeActorAfterTwentyYears = (actor: object): number => {
    return parseInt(actor.age) + 20;
}
console.log(howOldWillBeActorAfterTwentyYears(actor));

// Суть ошибки заключалась в том, что мы пытались сложить строку и число, а также в том, что мы не указали тип возвращаемого значения функции.
// Можно сделать 2 путями - либо поменять тип переменной age на число, либо привести ее к числу внутри функции.
// Я выбрал второй вариант, т.к. он безопаснее