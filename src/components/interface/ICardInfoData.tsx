export default interface ICardInfoData{
    name: string;
    src?: string;
    info:{
        companyName: string;
        description: string;
        codeCountry: string;
        nameCountry: string;
        starCount: number;
        countRating: number;
        src?: string;
    }
    map:{
        x: number;
        y: number;
    }
}