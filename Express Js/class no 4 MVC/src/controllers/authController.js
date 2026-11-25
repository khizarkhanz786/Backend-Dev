import { successRes ,errorRes} from "../utils/utils.js";
import User from "../models/userModel.js";

const signup = (req, res) => {

    const body = req.body;
    console.log(body);
    User.create(body);
    successRes(200, "true", "signup successful", res );

}
const login = (req, res) => {

    errorRes(200, "true", "login successful", res );
}



export { signup, login };