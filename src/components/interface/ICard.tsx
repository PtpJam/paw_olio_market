export default interface card{
    id: number;
    name: string;
    star: number; //param 1-5
    comentary: number;
    country?: {
        name: string;
        src: string;
    }
    isStoce: boolean;
    price: number;
    code: string;
    src?: string;
    scroll: boolean; 
} 