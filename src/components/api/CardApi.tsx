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
    page: number;
    limit: number;
    sorting?: ISortingParams;
    regions?: string[];
    countries?: string[];
    brands?: string[]
}
//8 25 50 100
export async function Sort({page, limit, sorting, /*regions, countries, brands*/} : ISort) {
    try{
        const params = new URLSearchParams();

        //["Italy", "Spain"].forEach(c => params.append("countries[]", c));
        //["OroBailen"].forEach(c => params.append("brands[]", c));
        //brands?.forEach(c => params.append("brands[]", c));

        const respons = await fetch(
            `${path}gpt-products-filtered/query?page=${page}&limit=${limit}` +
            (sorting?.param ? `&sort=${sorting.param}` : "") +
           `&${params}`
        )
        if(respons.status == 404){
            return undefined;
        }
        const data = await respons.json(); 
        return data;
    }
    catch(e){
        console.log(e)
    }
}
        // const respons = await fetch(
        //     `${path}gpt-products-filtered/query?page=${page}&limit=${limit}` +
        //     (sorting?.param ? `&sort=${sorting.param}` : "") +
        //     `${brands?.map((item) => `&brands=${item}`)}`
        // )
        // if(respons.status == 404){
        //     return undefined;
        // }