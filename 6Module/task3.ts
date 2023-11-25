// @ts-ignore
type Todo = {
    title: string
    description: string
    completed: boolean
}

type MyReadonly2<T, K extends keyof T = never> =  K extends never ? Readonly<Pick<T, K>> & Omit<T, K> : Readonly<T>
// @ts-ignore
const todo: MyReadonly2<Todo> = {
    title: "Hey",
    description: "foobar",
    completed: true
}

