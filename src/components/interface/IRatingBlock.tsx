import type IRatings from "./IRatings";

export default interface IRatingBlock{
    rating: IRatings;
    title: string;
    allCount: number;
    ratingCount: {
        one: number
        three: number;
        two: number;
        four: number;
        five: number;   
    }
}