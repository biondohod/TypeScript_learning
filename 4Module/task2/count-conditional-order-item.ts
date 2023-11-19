import { Product } from "./product";
import { OrderItem } from "./order-item";
export class QuantityConditionalOrderItem extends OrderItem {
    constructor(delegate: Product, quantity: number, private discount: number, private quantityCondition: number) {
        super(delegate, quantity);
    }

    getCost(): number {
        if (this.getQuantity() >= this.quantityCondition) {
            return (this.delegate.getPrice() * (1 - this.discount / 100)) * this.getQuantity();
        }
        return this.delegate.getPrice() * this.getQuantity();
    }
}