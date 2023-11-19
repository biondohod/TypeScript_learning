import { Product } from './product';
import { OrderItem } from './order-item';
export class DiscountedOrderItem extends OrderItem {
    constructor(delegate: Product, quantity: number, private discount: number) {
        super(delegate, quantity);
    }

    getCost(): number {return (this.delegate.getPrice() * (1 - this.discount / 100)) * this.getQuantity();}
}