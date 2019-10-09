import React from 'react';

import './Dashboard.css'

import Welcome from '../../components/Welcome/Welcome';
import BoxList from '../../components/BoxList/BoxList';
import Table from '../../components/Table/Table';


class Dashboard extends React.Component {
    render(){
        return (
            <div className="dashboard"> 
                <Welcome/>
                <BoxList/>
                <Table/>
            </div>
        )
    }
}

export default Dashboard;