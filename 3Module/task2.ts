type Cat = {
    name: string,
    meow: () => string,
}

type Dog = {
    name: string,
    bark: () => string,
}

const cat: Cat = {
    name: 'Pushok',
    meow: () => 'meow!',
};

const dog: Dog = {
    name: 'Bobik',
    bark: () => 'bark!',
};

function whatDoesThePetSay(pet: Dog | Cat): string {
    if ('meow' in pet) {
        return pet.meow();
    }
    return pet.bark();
}

function whatDoesThePetSay2(pet: Dog | Cat): string {
    if (isCat(pet)) {
        return pet.meow();
    }
    return pet.bark();
}

function isCat(pet: Dog | Cat): pet is Cat {
    return 'meow' in pet;
}

console.log(whatDoesThePetSay(cat));
console.log(whatDoesThePetSay(dog));
console.log(whatDoesThePetSay2(cat), 2);
console.log(whatDoesThePetSay2(dog),2);
