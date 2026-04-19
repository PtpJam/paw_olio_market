import { Box, Grid, Stack} from "@mui/material";
import type { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    src?: string;    
}

function PolicyBox({children, src} : Props){
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