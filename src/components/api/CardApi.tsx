import {path} from "./Path"
import type IProductCard from "../interface/IProductCard";
import type IProduct from "../interface/IProduct";
import type ISortingParams from "../interface/ISortingParams";


export async function ProductsData(scroll: boolean){
    try{
        const respons = await fetch(`${path}gpt-products-popular`)
        const data = await respons.json();
        const items = data.products;

        const products: IProductCard[] = items.map((item : any) => ({
            ...item,
            scroll: scroll,

            codeCountry: "UA",
            star: 5,
            comentary: 10
        }));
        return products
    }
    catch(e){
        console.log(e)
    }
}

export async function ProductData(id: string){
    try{
        const respons = await fetch(`${path}gpt-products/public/${id}`)
        if(respons.status === 200){
            const dataProduct : IProduct = await respons.json(); 
            return dataProduct;
        }
        else {
            return undefined
        }
    }
    catch(e){
        console.log(e)
    }
}

interface ISort{
    page: number,
    limit: number,
    sorting?: ISortingParams
}

export async function Sort({page, limit, sorting} : ISort) {
    try{
        const respons = await fetch(
            `${path}gpt-products-filtered/query?page=${page}&limit=${limit}` +
            (sorting?.param ? `&sort=${sorting.param}` : "")
        )
        const data = await respons.json(); 
        return data;
    }
    catch(e){
        console.log(e)
    }
}