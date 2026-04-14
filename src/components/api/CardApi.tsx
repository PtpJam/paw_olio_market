import {path} from "./Path"
import type IProductCard from "../interface/IProductCard";
import type IProduct from "../interface/IProduct";


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
    limit: number
}

export async function Sort({page, limit} : ISort) {
    try{
        const respons = await fetch(`${path}gpt-products-filtered/query?page=${page}&limit=${limit}`)
        const data = await respons.json(); 
        console.log(data)
        return data;
        

    }
    catch(e){
        console.log(e)
    }
}