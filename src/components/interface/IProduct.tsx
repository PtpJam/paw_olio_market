interface Awards_generated {
    id?: string,
    title?: string,
    year?: number,
    medal?: string,
    image?: string,
}

export default interface IProduct{
    _id?: string,
    name?: string,
    image?: string,
    brand?: string,
    averagePrice?: number,
    country?: string,
    region?: string,
    volume?: number,
    volume_type?: string,
    manufactrerInfo?: string,
    awards_generated?: Awards_generated[],
    certificates_generated?: Awards_generated[],
    foodPairings?: string[],

    //sommile
    sommelierAdvices?: string

    //about the oil
    description?: string,
    quality?: string,

}
