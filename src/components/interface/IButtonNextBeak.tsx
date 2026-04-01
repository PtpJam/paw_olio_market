export default interface IButtonNextBeak{
    team: boolean;
    nextBack: boolean; // true - next, false - beak
    color?: string;
    onClick?: () => void;
}