export default interface IManufacturerProfile{
    headImg: string;
    avatar: string;
    name: string;

    region: string
    country: string;
    countryCode: string,


    followers: number;
    following: number;
    rankIn: number;

    star: number;
    map: {
        x: number;
        y: number;
    }
}