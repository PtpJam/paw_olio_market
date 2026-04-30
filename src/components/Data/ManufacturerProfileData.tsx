import type IManufacturerProfile from "../interface/IManufacturerProfile";
import plants from "../../assets/plants.png"
import avatar from "../../assets/Data/avatarUser.jpg"

const manufacturerProfileData : IManufacturerProfile = {
    headImg: plants,
    avatar: avatar,
    name: "Oliver Oils",
    country: "Sicily",
    region: "Italy",

    countryCode: "IT",
    followers: 2470,
    following: 870,
    rankIn: 6,
    star: 4.5,
    map: {
        x: 10,
        y: 10
    }
}
export default manufacturerProfileData