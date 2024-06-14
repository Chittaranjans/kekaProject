import React from 'react'
// import { useForm } from "react-hook-form"
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Login from './Login'

function Frontpage() {

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

                        <Login />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontpage