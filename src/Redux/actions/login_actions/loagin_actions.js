import { Loginuser, Sellerprofileget } from "../../../services/authservices/login_services";
import { loginFail, loginRequest, loginSuccess } from "../../reducer/login_reducer/login_reducer";


export const LoginAction = (data, history, toast) => async (dispatch) => {
    try {
        const response = await Loginuser(data);
        console.log(response, "response")
        localStorage.setItem("accesstoken", JSON.stringify(response?.token));
        localStorage.setItem("id", JSON.stringify(response?.seller?._id));
        setTimeout(() => {
            history("/home");
        }, 1000);
        toast.success("User Login Successfully");
    }
    catch (err) {
        toast.error(err?.response?.data?.message);
    }
}


export const LoginActiongetdata = () => async (dispatch) => {
    try {

        const data = localStorage.getItem("id");

        const fors = {
            userId: JSON.parse(data)
        }

        dispatch(loginRequest());

        

        const response = await Sellerprofileget(fors);

        console.log(response,"response")
        dispatch(loginSuccess(response));


        console.log(response,"response")

    }
    catch (err) {
        // toast.error(err?.response?.data?.message);
        dispatch(loginFail("Something error"));

    }
}