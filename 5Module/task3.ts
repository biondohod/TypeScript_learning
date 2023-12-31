class MyArray<T> {

    constructor(public elements?: T[]) {
    }

    areElementsEqual(index1: number, index2: number): boolean {
        if (this.elements) {
            if (this.elements[index1] && this.elements[index2]) {
                const element1: T = this.elements[index1];
                const element2: T = this.elements[index2];

                if (typeof element1 === 'object' && typeof element2 === 'object') {
                    return this.deepObjectEquality(element1, element2);
                    // return JSON.stringify(element1) === JSON.stringify(element2);
                }
            }
            return false;
        }
        return false;
    }

    flatten(): T[] {
        if (this.elements) {
            if (Array.isArray(this.elements)) {
                return this.flatArray(this.elements);
            }
            return [this.elements];
        }
        return [];
    }

    private deepObjectEquality(obj1: any, obj2: any, depth: number = 2): boolean {
        if (obj1 instanceof Object && obj2 instanceof Object) {
            const keys1 = Object.keys(obj1);
            const keys2 = Object.keys(obj2);

            if (keys1.length !== keys2.length) {
                return false;
            }

            for (let i: number = 0; i < keys1.length; i++) {
                if (depth === 0) {
                    break;
                }
                if (!this.deepObjectEquality(obj1[keys1[i] as keyof T], obj2[keys2[i] as keyof T], depth - 1)) {
                    return  false;
                }
            }
            return  true;
        } else {
            return obj1 === obj2;
        }
    }

    private flatArray(arr: T[]): T[] {
        const result: T[] = [];

        arr.forEach((item: T): void => {
            if (Array.isArray(item)) {
                result.push(...this.flatArray(item));
            }
            else {
                result.push(item);
            }
        })

        return result;
    }
}


const arr: MyArray<number> = new MyArray<any>([1, 2, 3, 4, 4, [5, 6, [7, [8, 9]]]]);
console.log(arr.elements);
console.log(arr.areElementsEqual(0, 1));
console.log(arr.areElementsEqual(3, 4));
console.log(arr.flatten());

const objArr: MyArray<object> = new MyArray<object>([
    {a: 1 },
    {a: 1 },
    {c: 3 },
    {d: [1, 3, 3, 3]},
    {d: [1, 3, 3, 4]},
]);
console.log(objArr.areElementsEqual(0, 1));
console.log(objArr.areElementsEqual(3, 4)); // должно быть true, но у меня сравнение на всю глубину