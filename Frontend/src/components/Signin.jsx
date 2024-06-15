import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }

        console.log(userInfo);
        // localStorage.setItem('loginCredentials', JSON.stringify(data));

        await axios.post('http://localhost:3000/get/users', userInfo)
            .then((response) => {
                const userdata = response.data;
                console.log(userdata);
                if (response.data && response.data.user) {
                    localStorage.setItem('userData', JSON.stringify(response.data.user));
                    navigate('/front-page');
                }

            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.error("Data:", error.response.data);
                    console.error("Status:", error.response.status);
                    console.error("Headers:", error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error("Request:", error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error("Error Message:", error.message);
                }
                console.error("Config:", error.config);
            });
        // navigate('/front-page'); // Navigate after form submission
    };


    return (
        <div className='pt-10 items-center justify-center flex'>
            <label htmlFor="my_modal_6" className="btn">login</label>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Please login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="email" type='email' {...register("email", { required: true })} className="modal-action" />
                        {errors.email && <span>This field is required</span>}
                        <input placeholder="password" type='password' {...register("password", { required: true })} className="modal-action" />
                        {errors.password && <span>This field is required</span>}
                        <button htmlFor="my_modal_6" type="submit" className="modal-action">Submit</button>
                        <div>
                            If you do not have an account then <Link to="/">signup</Link>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn">Close!</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signin;