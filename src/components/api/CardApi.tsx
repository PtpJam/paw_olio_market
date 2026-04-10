import {path} from "./Path"
import type IProductCard from "../interface/IProductCard";


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
        const data = await respons.json();
        
        console.log(data);
    }
    catch(e){
        console.log(e)
    }
}