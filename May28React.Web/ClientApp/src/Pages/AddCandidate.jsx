import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCount } from '../CountContextComponent';

const AddCandidate = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [notes, setNotes] = useState('');

    const { refreshCounts } = useCount();
    const navigate = useNavigate();

    const formIsValid = !!firstName && !!lastName && !!email && !!phoneNumber;

    const onSubmitClick = async () => {
        await axios.post('/api/registration/addcandidate', { firstName, lastName, email, phoneNumber, notes });
        await refreshCounts();
        navigate('/');
    }

    return (
        <div className="row" style={{ marginTop: 20 }}>
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Add Candidate</h4>
                    <form>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className="form-control"
                            onChange={e => setFirstName(e.target.value)} value={firstName}
                        />
                        <br />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className="form-control"
                            onChange={e => setLastName(e.target.value)} value={lastName}
                        />
                        <br />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                            onChange={e => setEmail(e.target.value)} value={email}
                        />
                        <br />
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            className="form-control"
                            onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}
                        />
                        <br />
                        <textarea
                            rows={5}
                            className="form-control"
                            name="notes"
                            onChange={e => setNotes(e.target.value)} value={notes}
                        />
                        <br />
                        <button type="button" onClick={onSubmitClick} disabled={!formIsValid} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default AddCandidate;

