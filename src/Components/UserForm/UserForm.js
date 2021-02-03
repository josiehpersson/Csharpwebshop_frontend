import React, {useState} from 'react';
import './userform.css';

export default function UserForm(props) {
    const formDefault = {
        fullname: '',
        address: '',
        zipcode: '',
        city: '',
    };

    const [userForm, setUserForm] = useState(formDefault);

    const updateUserForm = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserForm({...userForm, [name]: value});
        props.updateParent(userForm);
    }

    return(
        <form>
            <div className="form-container">

                <label htmlFor="fullname">Full Name</label>
                <input
                type="text"
                id="fullname"
                name="fullname"
                value={userForm.fullname}
                onChange={updateUserForm}
                />

                <label htmlFor="address">Address</label>
                <input
                type="text"
                id="address"
                name="address"
                value={userForm.address}
                onChange={updateUserForm}
                />

                <label htmlFor="zipcode">Zip Code</label>
                <input
                type="text"
                id="zipcode"
                name="zipcode"
                value={userForm.zipcode}
                onChange={updateUserForm}
                />

                <label htmlFor="city">City</label>
                <input
                type="text"
                id="city"
                name="city"
                value={userForm.city}
                onChange={updateUserForm}
                />


            </div>
        </form>
    )
}