import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'; // Import useNavigate


function Frontpage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        navigate('/front-page'); // Navigate after form submission
    };
    return (



        <div className='pt-20'>

            <p className='text-white font-semibold  flex items-center justify-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim facilis non molestiae ut aliquam magni ducimus sed. In aliquid, nulla ipsum est ex unde distinctio temporibus doloribus perferendis natus facere!</p>
            {/* The button to open modal */}
            <div className='pt-10 items-center justify-center flex'>
                <label htmlFor="my_modal_6" className="btn">SignIn</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input placeholder="username" {...register("example", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            {/* include validation with required or other standard HTML validation rules */}
                            <input placeholder="email" type='email' {...register("exampleRequired", { required: true })} className="modal-action" />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input placeholder="password" type='password' {...register("exampleRequired", { required: true })} className="modal-action" />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <button htmlFor="my_modal_6" type="submit" className="modal-action"  >Submit </button>
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

export default Frontpage