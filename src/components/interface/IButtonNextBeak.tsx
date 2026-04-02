export default interface IButtonNextBeak{
    team: boolean;
    nextBack: boolean; // true - next, false - beak
    color?: string;
    width: {
        lg: number;
        md: number;
        xs: number;
    };
    onClick?: () => void;
}