import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useNavigate, Link } from 'react-router-dom';
import { useCount } from '../CountContextComponent';
import PersonRow from '../PersonRow';

const Pending = () => {
    const [pendingPeople, setPendingPeople] = useState([]);

    const getPendingPeople = async () => {
        const pending = await axios.get('/api/registration/getallpendingcandidates');
        setPendingPeople(pending.data);
    }

    useEffect(() => {
        getPendingPeople();
    }, []);


    return (
        <div className="container" style={{ marginTop: 80 }}>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th />
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {pendingPeople.map(p =>
                        <tr>
                            <td>
                                <Link to={`/details/${p.id}`}>View Details</Link>
                            </td>
                            <PersonRow key={p.id} person={p} />
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Pending;