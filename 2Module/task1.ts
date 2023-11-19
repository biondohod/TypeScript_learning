const arrayDiff = (a : number[], b : number[]) : number[] => {
    return a.filter((item : number) => !b.includes(item));
}

console.log(arrayDiff([1, 2, 3, 5, 4, 7, 6], [5, 6]));