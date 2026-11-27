import User from "../models/userModel.js";
import { successRes ,errorRes} from "../utils/utils.js";



const getAllUsers = async (req, res) => {
    try{
        const allusers = await User.find();

        if(allusers){
           successRes(200, "true", allusers, res );
        }
        
    } catch (error) {
        errorRes(500, "false", "Error fetching users", res );
    }
}

export { getAllUsers };