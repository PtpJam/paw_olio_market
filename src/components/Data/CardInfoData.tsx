import type ICardInfoData from "../interface/ICardInfoData"
import plants from "../../assets/plants.png"
import certificate1 from "../../assets/сertificates/certificate1.svg"
import certificate2 from "../../assets/сertificates/certificate2.svg"
import award1 from "../../assets/awards/award1.svg"
import award2 from "../../assets/awards/award2.svg"
import award3 from "../../assets/awards/award3.svg"

import olives from "../../assets/svg/olives.svg"
import food from "../../assets/svg/food.svg"
import rating from "../../assets/svg/rating.svg"
import medal from "../../assets/svg/medal.svg"


const cardInfoData : ICardInfoData = {
    name: "Extra Virgin Olive Oil", 
    info:{
        companyName: "Olive Dew",
        description: "Our company is a leading producer of premium extra virgin olive oil, committed to excellence and sustainability. \n\nLocated in the heart of the Mediterranean, we grow and harvest olives from our own orchards, ensuring the highest quality and purity in every bottle. ",
        codeCountry: "IT",
        nameCountry: "Sicily, Italy",
        starCount: 4.5,
        countRating: 15729,
        src: plants
    },
    ImpDetal:[
        {
            src: rating,
            description: "Ranks among the top 5% of olive oils"
        },
        {
            src: food,
            description: "This oil is recommended by nutritionists."
        },
        {
            src: medal,
            description: "Becoming popular. Already over 1,000 reviews."
        },
        {
            src: olives,
            description: "You haven't tried this kind of oil yet. Check it out!"
        },
    ],
    infoProduct:{
        averagePriceUSD: 16.97,
        volume: { value: 500, unit: "ml" },
        ratings: {rating: 1.5, unit: "K"},
        rateCount: 4.5,
        certificates: [certificate1, certificate2], 
        oilAwards: [
            {
                src: award1,
                title: "NYIOOC 2021 Gold Award"
            },
            {
                src: award2,
                title: "Gambero Rosso"
            },
            {
                src: award3,
                title: "FLOS OLEI 2024"
            }
        ]
    },
    map: {
        x: 37.635,
        y: 12.720
    }
}
export default cardInfoData;