import { Injectable } from "@angular/core";
import { Product } from "src/app/pages/products/interfaces/product.interface";
import { Observable, Subject } from "rxjs";

@Injectable(
    {providedIn: 'root'}
)
export class ShoppingCartService{
    products: Product[] = [];

    private cartSubject = new Subject<Product[]>();
    private totalSubject = new Subject<number>();
    private quantitySubject = new Subject<number>();

    get totalActions$():Observable<number>{
        return this.totalSubject.asObservable();
    }
    get quantityActions$():Observable<number>{
        return this.quantitySubject.asObservable();
    }
    get cartActions$():Observable<Product[]>{
        return this.cartSubject.asObservable();
    }

    //METODO INTERMEDIO PUBLICO
updateCart(product:Product):void{
    this.addToCart(product);
    this.quantityProducts();
    this.calcTotal();
}

    private addToCart(product:Product):void {
        this.products.push(product);
        this.cartSubject.next(this.products);
    }
    private quantityProducts():void {
        const quantity = this.products.length;
        this.quantitySubject.next(quantity);
    }
    private calcTotal():void {
        const total = this.products.reduce((acc, prod) => acc += prod.price, 0);
        this.totalSubject.next(total);
        
    }
}