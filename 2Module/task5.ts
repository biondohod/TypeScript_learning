const areEqual = (a : object, b : object) : boolean => {
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    return JSON.stringify(a) === JSON.stringify(b);
}

const obj1 : object = {
    id: 1,
    name: 'Студент',
}
const obj2 : object = {
    id: 1,
    name: 'Студент',
}

console.log(areEqual(obj1, obj2));