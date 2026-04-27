export default interface INewsInfo{
    title: string,
    by: string,
    data: string,
    time: string,
    update: string,
    description: {
        items: string[];
    }[];
}
