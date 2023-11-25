type X = {
    x: {
        a: 1
        b: 'hi'
        z: string
    }
    y: string
}


type Expected = {
    readonly x: {
        readonly a: 1
        readonly b: 'hi'
    }
    readonly y: 'hey'
}


type DeepReadonly<T> = Readonly<{ readonly [K in keyof T]: T[K] extends Object ? DeepReadonly<T[K]> : T[K]}>
type Todo2 = DeepReadonly<X> // should be same as `Expected`


const test: Todo2 = {
    x: {
        a: 1,
        b: 'hi',
        z: 'try change me too',
    },
    y: 'try change me',
};


// test.y = 'changed'; // Error
// test.x.z = 'changed'; // Error
