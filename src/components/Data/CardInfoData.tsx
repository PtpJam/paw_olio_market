import type ICardInfoData from "../interface/ICardInfoData"
import plants from "../../assets/plants.png"

const cardInfoData : ICardInfoData = {
    name: "Extra Virgin Olive Oil", 
    info:{
        companyName: "Olive Dew",
        description: "Our company is a leading producer of premium extra virgin olive oil, committed to excellence and sustainability. \n\nLocated in the heart of the Mediterranean, we grow and harvest olives from our own orchards, ensuring the highest quality and purity in every bottle. ",
        codeCountry: "IT",
        nameCountry: "Sicily, Italy",
        starCount: 4.9,
        countRating: 15729,
        src: plants
    },
    map: {
        x: 37.635,
        y: 12.720
    }
}
export default cardInfoData;