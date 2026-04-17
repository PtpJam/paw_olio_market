export default interface IProductCard{
    _id: string,
    name: string,
    image: string,
    averagePrice: number,
    isPublished: boolean,
    country: string,
    region?: string,
    scroll: boolean,

    codeCountry?: string,
    star: number,
    comentary: number,
    updatedAt: string,
}