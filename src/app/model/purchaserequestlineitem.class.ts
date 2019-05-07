import { PurchaseRequest } from "./purchaserequest.class";
import { Product } from "./product.class";

export class PurchaseRequestLineItem {
    id:number;
    purchaseRequest:PurchaseRequest;
    product:Product;
    quantity:number;

    constructor(id:number=0, request:PurchaseRequest= new PurchaseRequest(), 
        product:Product= new Product, quantity:number=0) {
            this.id = id;
            this.purchaseRequest = request;
            this.product = product;
            this.quantity = quantity;
        }
    about():string {
        return "PurchaseRequestLineItem id=" + this.id + ", purchaserequest="
        + this.purchaseRequest + ", product=" + this.product 
        + ", quantity=" + this.quantity;
    }
}