import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LoginAction } from '../../Redux/actions/login_actions/loagin_actions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {

    const dispatch = useDispatch();

    const [datas, setDatas] = useState({
        email: "",
        password: ""
    })


    const router=useNavigate();

    const { email, password } = datas;

    const handleChange=(e)=>{
        setDatas({...datas,[e.target.name]:e.target.value});
    }

    const Submits = (e) => {
        e.preventDefault();

        const datass = {
            email: email,
            password: password
        }


        console.log(datass,"datass")

        dispatch(LoginAction(datass,router,toast));
    }
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control"  aria-describedby="emailHelp" name="email" value={email} onChange={handleChange}/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control"  name="password" value={password} onChange={handleChange} />
                </div>

                <button  class="btn btn-primary" onClick={Submits}>Submit</button>
            </form>
        </div>
    )
}

export default Login