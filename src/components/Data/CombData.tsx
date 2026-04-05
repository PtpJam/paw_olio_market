import type ICombBlock from "../interface/ICombBlock";
import Bread from "../../assets/svg/bread.svg"
import Salat from "../../assets/svg/salat.svg"
import Fried from "../../assets/svg/fried.svg"

const combData : ICombBlock[] = [
    {
        src: Bread,
        title: "Bread and snacks",
        color: "#8A6914" ,
        bgColor: "#FFE194",
    },
    {
        src: Salat,
        title: "Салат",
        color: "#5C7315" ,
        bgColor: "#BFDA6A",
    },
    {
        src: Fried,
        title: "Fried vegetables",
        color: "#903113" ,
        bgColor: "#FFAC92",
    },
]
export default combData