import { Product } from "./product";
import { OrderItem } from "./order-item";
import { DiscountedOrderItem } from "./discounted-order-item";
import { QuantityConditionalOrderItem } from "./count-conditional-order-item";
import { DeliveryCostOrderItem } from "./delivery-cost-order-item";


const phone: Product = new Product('phone', 1000);
const laptop: Product = new Product('laptop', 2000);
const orders: OrderItem[] = [
    new DiscountedOrderItem(phone, 4, 10),
    new DiscountedOrderItem(laptop, 2, 20),
    new QuantityConditionalOrderItem(phone, 2, 15, 2),
    new QuantityConditionalOrderItem(laptop, 3, 50, 10),
    new DeliveryCostOrderItem(phone, 1, 100),
    new DeliveryCostOrderItem(laptop, 1, 100)
];

orders.forEach((order: OrderItem) => order.log());
orders.sort((a: OrderItem, b: OrderItem) => a.compare(b));
console.log('sorted:');
orders.forEach((order: OrderItem) => order.log());