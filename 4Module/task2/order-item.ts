import { Product } from './product';
export abstract class OrderItem {
    constructor(protected readonly delegate: Product, private quantity: number) {}

    getProduct(): Product {return this.delegate;}

    getQuantity(): number {return this.quantity;}
    setQuantity(quantity: number): void {this.quantity = quantity;}

    log(): void {
        this.delegate.log();
        console.log(`${this.quantity};${this.getCost()}`);
        // console.log(`${this.delegate.log()};${this.quantity};${this.getCost()}`);
    }

    abstract getCost(): number;
    compare(other: OrderItem): number {
        if (this.getCost() > other.getCost()) {
            return 1;
        } else if (this.getCost() < other.getCost()) {
            return -1;
        }
        return 0;
    }
}