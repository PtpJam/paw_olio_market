export default interface IArticle{
    id: string;
    avatar: string;
    name: string;
    time: string;
    data: string;
    description: string;
    
    foto: string[]

    like: number;
    active: boolean;
    comments: number;
}   