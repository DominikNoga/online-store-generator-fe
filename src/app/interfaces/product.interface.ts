import GenericType from "./generic.interface";

export default interface Product extends GenericType {
    price: number;
    description: string;
    quantity: number;
}  
