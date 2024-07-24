import React from 'react'
import { useState, useEffect } from 'react'
import HashLoader from "react-spinners/HashLoader";

function Bord() {
    let [loading, setLoading] = useState(false);
 
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    return (
        <div>
            {
                loading ?
                    <HashLoader
                        color="#fcfcfc"
                        loading={true}
                        cssOverride={{ display: 'block', margin: '0 auto', marginTop: '20%', marginBottom: '20%', marginLeft: '50%', marginRight: '50%', position: 'absolute' }}
                        size={50}
                        speedMultiplier={1}
                    /> :
                    <div className=' pt-10 items-center justify-center flex  '>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Bord