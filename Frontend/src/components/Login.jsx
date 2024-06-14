import React from 'react'
import { useForm } from "react-hook-form"
import Signin from './Signin';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {


    const { register, handleSubmit, formState: { errors } } = useForm();
    // const navigate = useNavigate();

    const onSubmit = async (data) => {

        const userInfo = {
            username: data.username,
            name: data.name,
            email: data.email,
            password: data.password
        }

        console.log(userInfo);

        await axios.post('http://localhost:3000/signup/user', userInfo)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        // navigate('/front-page'); // Navigate after form submission
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder="username" {...register("username", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                {/* include validation with required or other standard HTML validation rules */}
                <input placeholder="name" {...register("name", { required: true })} className="modal-action" />
                {errors.exampleRequired && <span>This field is required</span>}
                {/* include validation with required or other standard HTML validation rules */}
                <input placeholder="email" type='email' {...register("email", { required: true })} className="modal-action" />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input placeholder="password" type='password' {...register("password", { required: true })} className="modal-action" />
                {errors.exampleRequired && <span>This field is required</span>}
                <button htmlFor="my_modal_6" type="submit" className="modal-action"  >Submit </button>
                <div>
                    If you have an account then <Link to="/login">login</Link>
                </div>
                {/* <button type="submit" className="modal-action" >Submit </button> */}
                <div className="modal-action">
                    <label htmlFor="my_modal_6" className="btn">Close!</label>
                </div>
            </form>
        </div>
    )
}

export default Login