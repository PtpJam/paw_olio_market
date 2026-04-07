import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router";

interface Props {
  active: number;
}

const ProductBtn = ({ active }: Props) => {
    const {t} = useTranslation("product")
    const { id } = useParams<{ id: string }>();

    return(
        <Box
            sx={{
                display: "flex",
                gap: {
                    lg: "5px",
                    md: "3.5px",
                    xs: "2px"
                },
                height:{
                    lg: "38px",
                    md: "33px",
                    xs: "28px",
                },
                '& .MuiButton-root': {
                    borderRadius: "32px",
                    textTransform: "none",
                    alignItems: "center",
                    fontSize: {
                        md: "14px",
                        xs: "12px"
                    },
                    padding: {
                        xs: "5px 10px"
                    }

                },
                '& .MuiButton-contained': {
                    backgroundColor: '#73843D',
                    boxShadow: 'none',
                    },

                '& .MuiButton-outlined': {
                    borderColor: '#000',
                    color: '#000',
                },
                
            }}
        >
            <Button component={Link} to={`/product/${id}`} sx={{widht: {lg: "133px", md: "122px", xs: "111px"}}} variant={active == 0 ? "contained" : "outlined"}>{t("AllAbout")}</Button>
            <Button component={Link} to={`/product/${id}/sommelier`} sx={{widht: {lg: "116px", md: "97px", xs: "78px"}}} variant={active == 1 ? "contained" : "outlined"}>{t("Sommelier")}</Button>
            <Button component={Link} to={`/product/${id}/about`} sx={{widht: {lg: "106px", md: "105.5px", xs: "95px"}}} variant={active == 2 ? "contained" : "outlined"}>{t("AboutOil")}</Button>
        </Box>
    )
}
export default ProductBtn;