import React from 'react';

import './BoxList.css';

import Box from '../Box/Box'
import axios from 'axios';



class BoxList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            statistics: [
                {
                    title: 'Total Insurance Bought',
                    img: 'insurance-bought.svg',
                    bg: 'insurance-shield',
                    data: '',
                },
                {
                    title: 'Total Amount of Insurance',
                    img: 'total amount insurance icon.svg',
                    bg: 'total-amount',
                    data: '',
                },
                {
                    title: 'Total Insurance Claims',
                    img: 'insurance claim icon (1).svg',
                    bg: 'insurance-claim',
                    data: '',
                },
                {
                    title: 'Total Amount of Claims',
                    img: 'amount of claims icon.svg',
                    bg: 'amount-of-claims',
                    data: '',
                }
            ]
        }
    }

    componentDidMount(){
        axios({
          method: 'get',
          url: 'http://test.natterbase.com:5050/api/interview/get-statistics',
          headers: {
            token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg'
          }
        })
          .then(response => this.setData(response.data.statistics)
         )
    }

    setData = (response) => {
        let statisticsData = {...this.state.statistics}
        statisticsData[0].data = response.totalClaimsAmount;
        statisticsData[1].data = response.totalInsuranceAmount;
        statisticsData[2].data = response.totalInsuranceClaims;
        statisticsData[3].data = response.totalInsurancesBought;

        this.setState({statisticsData})
    }
    
    

    render(){
        const BoxItem = this.state.statistics.map((item, i) => {
            return <Box key={i} title={item.title} img={item.img} bg={item.bg} data={item.data} />
        })
        return(
            <div className="container-fluid">
                <div className="row pb-3">
                        {BoxItem}
                </div>
            </div>
        )
    }
}

export default BoxList;