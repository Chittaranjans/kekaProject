import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import axios from 'axios';
function Signin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const navigate = useNavigate();

    const onSubmit = async (data) => {
        const existingUser = {
            email: data.email,
            password: data.password
        }

        await axios.get('http://localhost:3000/get/users', existingUser)
            .then((response) => {
                alert(JSON.stringify(response.data)); // Use JSON.stringify to view the response object
            })
            .catch((error) => {
                alert(error);
            });

        // await axios.get('http://localhost:3000/get/users', existingUser)
        //     .then((response) => {
        //         alert(response);
        //     })
        //     .catch((error) => {
        //         alert(error);
        //     });
        // navigate('/front-page'); // Navigate after form submission
    };
    return (
        <div>
            <div className='pt-10 items-center justify-center flex'>

                <label htmlFor="my_modal_6" className="btn">login</label>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">pls login </h3>



                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input placeholder="email" type='email' {...register("email", { required: true })} className="modal-action" />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input placeholder="password" type='password' {...register("password", { required: true })} className="modal-action" />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <button htmlFor="my_modal_6" type="submit" className="modal-action"  >Submit </button>
                            <div>
                                If you have not  an account then <Link to="/">signin</Link>
                            </div>
                            {/* <button type="submit" className="modal-action" >Submit </button> */}
                            <div className="modal-action">
                                <label htmlFor="my_modal_6" className="btn">Close!</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin