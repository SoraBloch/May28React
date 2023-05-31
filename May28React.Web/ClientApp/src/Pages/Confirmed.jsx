import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCount } from '../CountContextComponent';
import PersonRow from '../PersonRow';

const Confirmed = () => {

    const [confirmedPeople, setConfirmedPeople] = useState([]);
    const [showNotes, setShowNotes] = useState(true);

    const getConfirmedPeople = async () => {
        const { data } = await axios.get('/api/registration/getallconfirmedcandidates');
        setConfirmedPeople(data);
    }

    useEffect(() => {
        getConfirmedPeople();
    }, []);

    const onToggleClick = () => {
        setShowNotes(!showNotes);
    }

    return (
        <div className="container" style={{ marginTop: 80 }}>
            <div>
                <h1>Confirmed</h1>
                <div>
                    <button onClick={onToggleClick} className="btn btn-success">Toggle Notes</button>
                    <table className="table table-hover table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                {showNotes && <th>Notes</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {confirmedPeople.map(p =>
                                <tr>
                                    <PersonRow key={p.id} person={p} />
                                    {showNotes && <td>{p.notes}</td>}
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Confirmed;
