export default interface IManuFacture {
    AboutSeller: string;
    ProducesOils: {
        color: string;
        text: string;
    }[],
    Video?: string;
    Galery?: string[];
}