import { Product } from "./product";
import { OrderItem } from "./order-item";
export class DeliveryCostOrderItem extends OrderItem {
    constructor(delegate: Product, quantity: number, private deliveryCost: number) {
        super(delegate, quantity);
    }

    getCost(): number {return this.delegate.getPrice() * this.getQuantity() + this.deliveryCost;}
}