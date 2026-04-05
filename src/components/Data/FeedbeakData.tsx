import Avatar from "../../assets/avatar.jpg";
import type IFeedback from "../interface/IFeedback";

const feedbackData : IFeedback[] = [
    {
        avatar: Avatar,
        name: "Olivka Olivka",
        description: "The vegetable salad was fresh, colorful, and full of flavor. The vegetables were crisp and well-balanced, and the dressing was light but tasty. It felt healthy and satisfying at the same time. A great choice for anyone who enjoys fresh food.",
        like: 15,
        disLike: 15,
        star: 5,
        time: "Year ago",
    },
    {
        avatar: Avatar,
        name: "Olivka Olivka",
        description: "I had the pleasure of working with Jack Nutri, and I can confidently say that it was one of the best decisions I've made for my health. Thanks to their guidance, I feel more energized, healthier, and better equipped.",
        like: 15,
        disLike: 15,
        star: 5,
        time: "Year ago",
        likeActive: true
    }
] 
export default feedbackData