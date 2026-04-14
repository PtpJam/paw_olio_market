import type IProductCard from "./IProductCard";

export interface ISortData{
    currentPage: number,
    products: IProductCard[],
    totalPages: number,
    totalProducts: number   
}