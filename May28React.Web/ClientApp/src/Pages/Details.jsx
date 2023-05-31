import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCount } from '../CountContextComponent';


const Details = () => {
    const [person, setPerson] = useState({});
    const [statusIsPending, setStatus] = useState()

    const { refreshCounts } = useCount();

    const { id } = useParams();
    const getPerson = async () => {
        const person = await axios.get(`/api/registration/getpersonbyid?id=${id}`);
        setPerson(person.data);
        setStatus(true);
    }

    useEffect(() => {
        getPerson();
    }, []);

    const onConfirmClick = async () => {
        const person = await axios.post(`/api/registration/updatepersonstatus`, { id, status: 'Confirmed' });
        setPerson(person.data);
        setStatus(false);
        refreshCounts();
    }

    const onRefuseClick = async () => {
        const person = await axios.post(`/api/registration/updatepersonstatus`, { id, status: 'Refused' });
        setPerson(person.data);
        setStatus(false);
        refreshCounts();
    }

    const { firstName, lastName, email, phoneNumber, registrationStatus, notes } = person;
    return (
        <div className="container" style={{ marginTop: 80 }}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Name: {firstName} {lastName}</h4>
                        <h4>Email: {email}</h4>
                        <h4>Phone: {phoneNumber}</h4>
                        <h4>Status: {registrationStatus}</h4>
                        <h4>Notes:</h4>
                        <p>{notes}</p>
                        {statusIsPending &&
                            <div>
                                <button onClick={onConfirmClick} className="btn btn-primary">Confirm</button>
                                <button onClick={onRefuseClick} className="btn btn-danger">Refuse</button>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details;

