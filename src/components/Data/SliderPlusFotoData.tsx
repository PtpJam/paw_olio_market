import type ISliderPlusFoto from "../interface/ISliderPlusFoto";
import Tomato from "../../assets/tomato.png"

const data : ISliderPlusFoto[] = [
    {
        src: Tomato,
        title: "Tomato",
        slider: {
            textStart: "Weak",
            textEnd: "Strong",
            point: 30,
            type: 0
        }
    },
    {
        src: Tomato,
        title: "Citrus",
    },
    {
        src: Tomato,
        title: "Grassy",
        slider: {
            textStart: "Weak",
            textEnd: "Strong",
            point: 20,
            type: 0
        }
    },
    {
        src: Tomato,
        title: "Spicy",
        slider: {
            textStart: "Subtle",
            textEnd: "Rich",
            point: 30,
            type: 0
        }
    },
    {
        src: Tomato,
        title: "Fruit",
        slider: {
            textStart: "Subtle",
            textEnd: "Rich",
            point: 30,
            type: 0
        }
    },
    {
        src: Tomato,
        title: "Bitter",
    },
]
export default data