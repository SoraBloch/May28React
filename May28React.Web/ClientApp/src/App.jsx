import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Confirmed from './Pages/Confirmed';
import Refused from './Pages/Refused';
import Pending from './Pages/Pending';
import Details from './Pages/Details';
import Layout from './Layout';
import { CountContextComponent } from './CountContextComponent';

class App extends React.Component {
    render() {
        return (
            < CountContextComponent>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/addcandidate' element={<AddCandidate />} />
                        <Route exact path='/confirmed' element={<Confirmed />} />
                        <Route exact path='/refused' element={<Refused />} />
                        <Route exact path='/pending' element={<Pending />} />
                        <Route exact path='/details/:id' element={<Details />} />
                    </Routes>
                </Layout>
            </ CountContextComponent>
        );
    }

};

export default App;