import { Box, Grid, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    title?: string;
    src?: string;    
}

function PolicyBox({children, title, src} : Props){
    return(
        <Grid 
            container
            sx={{
                padding:{
                    lg: "40px 79px 62px 98px",
                    md: "30px, 54.5px 58px 64px",
                    xs: "20px 30px 54px"
                }
            }}    
        >
            <Grid 
                size={{lg: 7, md: 8, xs: 12}}>
                <Stack spacing="20px"> 
                    {title &&
                        <Typography
                            sx={{
                                fontSize: {lg: "36px !important", md: "30px !important", xs: "24px !important"} ,
                                fontWeight: 700,
                                textAlign: "justify"
                            }}
                        >
                            {title}
                        </Typography>
                    }
                    {children}
                </Stack> 
            </Grid>
            <Grid size={{lg: 5, md: 4, xs:0}} sx={{display: {md: "block", xs: "none"}}}>
                {src &&
                    <Box 
                        component={"img"} src={src}
                        sx={{
                            width: "100%"
                        }}
                    />
                }
            </Grid>
        </Grid>
    )
}
export default PolicyBox