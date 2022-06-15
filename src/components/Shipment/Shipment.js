import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Shipment = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [error, setError] = useState('')

    const handleOnBlur = (event) => {
        const innputField = event.target.name;
        if (innputField === 'name') {
            setName(event.target.value);
        }
        else if (innputField === 'address') {
            setAddress(event.target.value);
        }
        if (innputField === 'phone-number') {
            setNumber(event.target.value);
        }

    }
    // console.log(name,address,number);
    const handleCreateUser = event => {

    }
    return (
        <div className='form-container'>

            <div>
                <form onSubmit={handleCreateUser}>
                    <h2 className='form-label'>Shipping information</h2>
                    <div className="input-group">
                        <label htmlFor="name" >name</label>
                        <input type="text" name='name' onBlur={handleOnBlur} required></input>

                    </div>
                    <div className="input-group">
                        <label htmlFor="email" >email</label>
                        <input type="email" name='email' onBlur={handleOnBlur} required></input>

                    </div>
                    <div className="input-group">
                        <label htmlFor="address">address</label>
                        <input type="text" name='address' onBlur={handleOnBlur} required></input>

                    </div>
                    <div className="input-group">
                        <label htmlFor="phone-number">phone no</label>
                        <input type="number" name='phone-number' onBlur={handleOnBlur} required></input>

                    </div>
                    <p> {error}</p>
                    <div> <input type="submit" className='button-submit' value='save shipping info'></input>
                    </div>
                </form>

            </div>



        </div>
    );
};

export default Shipment;