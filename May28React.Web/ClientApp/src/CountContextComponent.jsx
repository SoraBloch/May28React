import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const CountContext = createContext();

const CountContextComponent = ({ children }) => {
    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [refusedCount, setRefusedCount] = useState(0);


    const refreshCounts = async () => {
        const pending = await axios.get('/api/registration/getallpendingcandidatescount');
        setPendingCount(pending.data);
        const confirmed = await axios.get('/api/registration/getallconfirmedcandidatescount');
        setConfirmedCount(confirmed.data);
        const refused = await axios.get('/api/registration/getallrefusedcandidatescount');
        setRefusedCount(refused.data);
    }

    useEffect(() => {
        refreshCounts();
    }, []);

    return (
        <CountContext.Provider value={{pendingCount, confirmedCount, refusedCount, refreshCounts }}>
            {children}
        </CountContext.Provider>
    )

}

const useCount = () => {
    return useContext(CountContext);
}

export { CountContextComponent, useCount };