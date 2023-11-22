//я решил задачу двумя методами, поэтому решил не разделять файлы, а просто оставить типа деление на файлы в комментах
// этот метод вроде идет прям по условию, но он какой-то странный(какой смысл добавлять заведомо нерабочий метод ломающий программ: voidу)
// поэтому я сделал еще одно решение, которое мне кажется более правильным
// interfaces.ts
export interface canRun {
    run(): void;
}

export interface canSwim {
    swim(): void;
}

export interface canFly {
    fly(): void;
}

// Human.ts
export abstract class Human implements canRun, canSwim, canFly {
    abstract run(): void;
    abstract swim(): void;
    abstract fly(): void;
}

//Niberian.ts

export class Niberian extends Human {
    run(): void {
        console.log('Niberian is running');
    }

    swim(): void {
        throw new Error("Niberian ain't running.");
    }

    fly(): void {
        throw new Error("Niberian ain't flying.");
    }
}

//Earthling.ts
export class Earthling extends Human implements canSwim {
    run(): void {
        console.log('Earthling is running');
    }
    swim(): void {
        console.log('Earthling is swimming');
    }

    fly(): void {
        throw new Error("Earthling ain't flying.");
    }
}

//Kryptonian.ts

export class Kryptonian extends Human implements canFly {
    run(): void {
        console.log('Kryptonian is running');
    }

    swim(): void {
        console.log('Kryptonian is swimming');
    }
    fly(): void {
        console.log('Kryptonian is flying');
    }
}

const niberian: Niberian = new Niberian();
const earthling: Earthling = new Earthling();
const kryptonian: Kryptonian = new Kryptonian();
niberian.run();
niberian.swim();
niberian.fly();
earthling.run();
earthling.swim();
earthling.fly();
kryptonian.run();
kryptonian.swim();
kryptonian.fly();


