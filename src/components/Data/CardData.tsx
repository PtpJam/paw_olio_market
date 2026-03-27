import country from "../../assets/country.png"
import oil1 from "../../assets/oil1.png"
import oil2 from "../../assets/oil2.png"
import oil3 from "../../assets/oil3.png"
import type ICard from "../interface/ICard"

const cards : ICard[] = [
  {
  name: 'Extra Virgin Olive Oil Planeta Val di Mazara - 500ml',
  star: 4,
  comentary: 97,
  isStoce: true,
  country: {
    name: "Val di Mazara",
    src: country
  },
  price: 699,
  id: 12345689,
  code: "000086213",
  src: oil1
},
{
  name: 'Monini Classico Extra Virgin Olive Oil for Salads 1L',
  star: 4,
  comentary: 97,
  isStoce: true,
  price: 699,
  id: 12345689,
  code: "000086213",
  src: oil2
},
{
  name: 'Borges Classic Olive Oil for frying and stewing',
  star: 4,
  comentary: 97,
  isStoce: true,
  country: {
    name: "Val di Mazara",
    src: country
  },
  price: 499,
  id: 12345689,
  code: "000086213",
  src: oil3
  }
]
export default cards;