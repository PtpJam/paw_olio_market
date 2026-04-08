export default interface IAboutOil{
    title: string;
    description?: {
        title: string;
        description?: string;
    }[],
    info: boolean
}