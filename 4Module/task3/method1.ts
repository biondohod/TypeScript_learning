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
export abstract class Human implements canRun {
    abstract run(): void;
}

//Niberian.ts

export class Niberian extends Human {
    run(): void {
        console.log('Niberian is running');
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
}

//Kryptonian.ts

export class Kryptonian extends Human implements canSwim, canFly {
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
earthling.run();
earthling.swim();
kryptonian.run();
kryptonian.swim();
kryptonian.fly();


