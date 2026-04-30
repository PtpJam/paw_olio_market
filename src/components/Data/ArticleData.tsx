import type IArticle from "../interface/IArticle";
import User from "../../assets/Data/avatarUser.jpg";
import Botl from "../../assets/Data/oilBotl.jpg";
import Oil from "../../assets/Data/oil.png";

const articleData : IArticle = {
    id: "12345",
    userId: "12345",
    avatar: User,
    name: "Natalia Luca",
    time: "Jan 3, 2025",
    data: "5:22 PM",
    description: "Hi everyone! I’d like to share my latest discovery — Monica’s olive oil. I came across it by...",
    foto: [Botl, Oil],
    like: 3,
    comments: 7,
    active: false
}
export default articleData

export const articleDataArr : IArticle[] = [
    articleData, 
    articleData,
    articleData,
    articleData,
    articleData,
    articleData
]