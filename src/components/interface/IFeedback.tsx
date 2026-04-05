export default interface IFeedback{
    avatar: string;
    name: string;
    time: string;
    description: string;
    star: number;
    like: number;
    disLike: number;
    likeActive?: boolean;
    dislikeActive?: boolean;
}