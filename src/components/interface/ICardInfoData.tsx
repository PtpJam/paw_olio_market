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
    },
    ImpDetal: {
        src: string;
        description: string;
    } [],
    infoProduct:{
        averagePriceUSD: number;
        volume: { value: number, unit: string },
        ratings: { rating: number, unit?: string};
        rateCount: number;
        certificates?: string[],
        oilAwards?: {
            src: string;
            title: string;
        } []
    },
    map:{
        x: number;
        y: number;
    },
    sommiler: string[]
}