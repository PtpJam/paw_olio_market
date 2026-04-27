import { Box, Checkbox, Divider, InputLabel, Slider, Typography } from "@mui/material";
import Filter from "../assets/svg/filter.svg" 
import type ISideBar from "./interface/ISideBar";
import CheckBox from "../assets/svg/checkBox.svg";
import CheckBoxActive from "../assets/svg/checkBoxActive.svg";

type SelectedFilters = Record<string, string[]>;

interface SideBarProps 
{
    statickRange: number[];
    sideData: ISideBar;
    selected: SelectedFilters;
    setSelected: React.Dispatch<React.SetStateAction<SelectedFilters>>;
    priceRange: number[];
    setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
    setClose: React.Dispatch<React.SetStateAction<boolean>>;
}
function SideBar({statickRange, sideData, selected, setSelected, priceRange, setPriceRange, setClose }: SideBarProps){


    const handleChange = (_event: Event, newValue: number[]) => {
        setPriceRange(newValue);
    };
    const handleToggle = (category: string, value: string) => {
        setSelected((prev) => {
            const currentCategoryValues = prev[category] || [];
            
            const isAlreadySelected = currentCategoryValues.includes(value);
            
            const nextValues = isAlreadySelected
            ? currentCategoryValues.filter((item) => item !== value)
            : [...currentCategoryValues, value];

            return {
            ...prev,
            [category]: nextValues,
            };
        });
    };

    return(

        <>
        <Box>
            <Box display={"flex"}justifyContent={"space-between"} >
                <Typography fontSize={18}>Filters</Typography>
                <Box component={"img"} src={Filter} onClick={() => setClose(false)}/>
            </Box>
            <Box>
                <Typography color="#929292" fontSize={14}>
                    Price Catalog
                </Typography>
                <Box>
                <Slider 
                    getAriaLabel={() => 'Minimum distance'}
                    value={priceRange}
                    onChange={handleChange}
                    disableSwap
                    min={statickRange[0]}
                    max={statickRange[1]}
                    size="small"
                    sx={
                        { 
                            color: "#73843D",
                            padding: "12px 0",
                            height: 8,
                                '& .MuiSlider-thumb': {
                                    width: 13,         
                                    height: 13,
                                    transform: 'translate(-50%, -55%)', 
                                    backgroundColor: '#fff',
                                    border: '2px solid currentColor',
                                '&:hover': {
                                    boxShadow: "none",
                                    animation: "none"
                                },
                                '&.Mui-active': {
                                    animation: "none",
                                    boxShadow: "none"
                                },
                                '&.Mui-focusVisible': {
                                    boxShadow: 'none',
                                },
                            },
                        }
                    }

                />
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography>{priceRange[0]}$</Typography>
                    <Typography>{priceRange[1]}$</Typography>
                </Box>
                </Box>
                <Divider sx={{margin: "15px 0"}}></Divider>
                {sideData.param.map((item, index) =>(
                        
                        <Box key={index}>
                        <Typography color="#929292" fontSize={14}>
                            {item.name}
                        </Typography>
                        {item.param.map((param, indexParam) => (
                            
                            <InputLabel key={indexParam} sx={{color:"#141412", display: "flex", justifyContent: "space-between", mt: "8px", mb: "8px" }}>
                                <Typography fontSize={14} sx={{overflow: "hidden"}}>{param}</Typography>
                                <Checkbox
                                    checked={selected[item.name]?.includes(param) || false}
                                    onChange={() => handleToggle(item.name, param)} 
                                    icon={<Box component={"img"} src={CheckBox} />}
                                    checkedIcon={<Box component={"img"} src={CheckBoxActive} />}
                                    sx={{
                                        padding: 0,
                                        borderRadius: "40px",
                                        color: "#A1A1AA",
                                        '&.Mui-checked': {
                                            color: "#000",
                                        }
                                    }}
                                    disableRipple />
                            </InputLabel>

                        )
                        )}
                        {item.saveAll && <Typography fontSize={14} fontWeight={550} color="#4B551E" textTransform="uppercase">Save all</Typography>}
                        {index+1 != sideData.param.length && <Divider sx={{ margin: "15px 0" }}></Divider>}
                    </Box>
                    ) 
                )}
            </Box>
        </Box>
        </>
    )
}
export default SideBar;