import { Box } from "@mui/material"
import manufacturerProfileData from "../Data/ManufacturerProfileData"
import ManufacturerProfileHead from "../ManufacturerProfileHead"

function ManufacturerProfile(){
    return(
        <Box>
            <ManufacturerProfileHead {...manufacturerProfileData}/>

        </Box>
    )
}
export default ManufacturerProfile