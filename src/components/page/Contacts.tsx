import { Stack, Typography } from "@mui/material";
import PolicyBox from "../StyleBlock/PolicyBox";
import { useTranslation } from "react-i18next";

function Contacts(){
    const {t} = useTranslation("contacts");
    const list = t('description', { returnObjects: true }) as string[];
        
    return(
        <PolicyBox>
            <Typography
                sx={{
                    fontSize: {lg: "40px", md: "36px", xs: "32px"},
                    fontWeight: 500
                }}    
            >
                {t("title")}
            </Typography>   
            <Stack spacing="20px" 
                sx={{
                    "& *": {
                        fontSize: {lg: "20px", md: "18px", xs: "16px"},
                        textAlign: "justify"
                    },
                    pb: "90px"
                }}
            >
                {
                    list.map((item, index) => (
                        <Typography key={index}>{item}</Typography>
                    ))
                }
            </Stack>
        </PolicyBox>
    )
}
export default Contacts