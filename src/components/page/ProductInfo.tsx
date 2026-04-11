import { Route, Routes, useParams } from "react-router"
import Product from "./Product"
import AllFeedbeak from "./AllFeedbeak"
import Sommelier from "./Sommelier"
import AboutOil from "./AboutOil"
import { useEffect } from "react"
import { ProductData } from "../api/CardApi"

function ProductInfo(){
    const { id } = useParams();

    useEffect(() => {
        console.log(id)
        if(id)
            ProductData(id)
    },[])

    return(
          <Routes>
            <Route index element={<Product />} />
            <Route path="feedback" element={<AllFeedbeak/>} />
            <Route path="sommelier" element={<Sommelier/>} />
            <Route path="about" element={<AboutOil/>} />
          </Routes>
    )
}
export default ProductInfo;