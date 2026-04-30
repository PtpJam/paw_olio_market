import { Box } from "@mui/material"
import ProfileUserHead from "../ProfileUserHead"
import profileUserHeadData from "../Data/ProfileUserHeadData"

function ProfileUser(){
    return(
        <Box>
            <ProfileUserHead {...profileUserHeadData}/>
        </Box>
    )
}
export default ProfileUser