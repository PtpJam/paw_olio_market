import {Route, Routes, /*useNavigate,*/ useParams } from "react-router"
import Product from "./Product"
import AllFeedbeak from "./AllFeedbeak"
import Sommelier from "./Sommelier"
import AboutOil from "./AboutOil"
import {useEffect, useState } from "react"
import { ProductData } from "../api/CardApi"
import type IProduct from "../interface/IProduct"

function ProductInfo(){
    const { id } = useParams();
    const [dataGet, dataSet] = useState<IProduct>()
    //const navigate = useNavigate();
    
    useEffect(() => {
        const featchData = async() => {
            if(id){
                const data : IProduct | undefined = await ProductData(id);            
                // if(!data){
                //     navigate('/'); 
                //     return;
                // }

                dataSet(data)
            }
        }
        featchData()
    },[id])

    return(
          <Routes>
            <Route index element={<Product {...dataGet} />} />
            <Route path="feedback" element={<AllFeedbeak/>} />
            <Route path="sommelier" element={<Sommelier {...dataGet} />} />
            <Route path="about" element={<AboutOil {...dataGet}/>} />
          </Routes>
    )
}
export default ProductInfo;