import { styled, type SxProps, type Theme } from "@mui/material";

interface Props{
    color: string;
    sx?: SxProps<Theme>;
}
const StyledSvg = styled('svg')({});

export default function Drop({color, sx, ...props }: Props){
    return(
        <StyledSvg {...props} width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg" sx={sx}>
            <g clip-path="url(#clip0_692_206082)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0017259 12.7584C0.0429012 9.85612 1.49094 7.74064 4.37642 3.64116C5.41542 2.16525 6.33928 1.00383 6.97515 0.234517C7.20988 -0.0751001 7.63766 -0.0796828 7.87213 0.229934C8.50234 0.997531 9.41411 2.15122 10.4437 3.6234C13.3033 7.71229 14.7386 9.82232 14.7792 12.7174C14.7871 13.2868 14.7595 15.1792 13.7496 17.0458C11.7256 20.7872 7.68278 20.8657 7.41403 20.866C5.03695 20.8674 2.3142 19.5677 0.918186 16.8072C0.0394496 15.0692 0.00616397 13.3799 0 12.7174" fill={color}/>
                <path d="M5.99687 17.4907C4.16388 17.2919 2.8298 15.729 3.01764 14" stroke="white" stroke-width="0.869416" stroke-miterlimit="10" stroke-linecap="round"/>
            </g>
            <defs>
                <clipPath id="clip0_692_206082">
                    <rect width="14.7801" height="20.866" fill="white"/>
                </clipPath>
            </defs>
        </StyledSvg>
    )
}