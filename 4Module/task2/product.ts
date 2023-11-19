export class Product {
    constructor(private name: string, private price: number) {}

    getName(): string {return this.name;}
    setName(name: string): void {this.name = name;}

    getPrice(): number {return this.price;}
    setPrice(price: number): void {this.price = price;}

    log(): void {
        console.log(`${this.name};${this.price}`);
        // return `${this.name};${this.price}`;
    }
}