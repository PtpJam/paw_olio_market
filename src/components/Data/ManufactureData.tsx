import type IManuFacture from "../interface/IManufacture";
import video from "../../assets/Data/video.svg";
import galery1 from "../../assets/Data/galery1.svg";
import galery2 from "../../assets/Data/galery2.svg";
import galery3 from "../../assets/Data/galery3.svg";

const galery: string[] =[galery1, galery2, galery3, galery1]

const manufacturerData : IManuFacture = {
    AboutSeller: "Our company is a leading producer of premium extra virgin olive oil, committed to excellence and sustainability. Located in the heart of the Mediterranean, we grow and harvest olives from our own orchards, ensuring the highest quality and purity in every bottle. ",
    ProducesOils: [
        {
            color: "#B7B337",
            text: "EVOO"
        },
        {
            color: "#7DD63C",
            text: "Virgin Olive"
        },
        {
            color: "#72C7F4",
            text: "Rafined Oil"
        }
    ],
    Video: video,
    Galery: [...galery, ...galery]
}
export default manufacturerData