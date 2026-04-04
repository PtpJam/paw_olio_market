import { Box, type SxProps, type Theme } from "@mui/material";

interface Props{
    src: string,
    sx?: SxProps<Theme>;
}

export default function InfoOutline({src, sx} : Props){
    const patternId = `icon-pattern-${src.replace(/[^a-zA-Z0-9]/g, '')}`;
    return(
        <Box
            component="svg"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
                width: "25px",
                height: "25px",
                ...sx 
            }}
        >
            <defs>
                <pattern 
                    id={patternId} 
                    patternUnits="userSpaceOnUse" 
                    width="25" 
                    height="25"
                >
                    <image 
                        href={src} 
                        x="0" 
                        y="0" 
                        width="25" 
                        height="25" 
                        preserveAspectRatio="xMidYMid slice" 
                    />
                </pattern>
            </defs>
            <path 
                d="M12.5 10.5V9M12.5 12V16M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z" 
                stroke={`url(#${patternId})`}
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Box>
    )
}