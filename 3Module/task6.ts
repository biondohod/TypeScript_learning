//Я немного не понял условие, а именно нужно ли добавлять фильтрацию admin
// Я на всякий ее сделал, но если она была не нужна, то нужно просто в функции filterPersons
// поменятяь все Person на User

type User = {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

type Admin = {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball'
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }
];

export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
export const isUser = (person: Person): person is User => person.type === 'user';

export const isPerson = (person: Person): person is Person => person.type === 'user' || person.type === 'admin';
export function logPerson(person: Person) {
    let additionalInformation : string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterPersons(persons: Person[], criteria: Partial<Person>): Person[] {
    return persons.filter(isPerson).filter((person : Person) => {
        const criteriaKeys : (keyof Person)[] = Object.keys(criteria) as (keyof Person)[];
        return criteriaKeys.every((fieldName : keyof Person) => {
            return person[fieldName] === criteria[fieldName];
        });
    });
}


console.log('Persons of age 23:');

filterPersons(
    persons,
    {
        age: 23
    }
).forEach(logPerson);