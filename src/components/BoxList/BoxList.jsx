import React from 'react';

import './BoxList.css';

import Box from '../Box/Box'
import axios from 'axios';

import { connect } from 'react-redux';
import { setSummaryData } from '../../redux/summary/summary.actions';
import { boxData } from '../../box.data';

class BoxList extends React.Component {

    componentDidMount(){
        axios({
          method: 'get',
          url: 'http://test.natterbase.com:5050/api/interview/get-statistics',
          headers: {
            token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg'
          }
        })
          .then(response => this.props.setSummaryData(Object.values(response.data.statistics))
         ).catch(error => console.log(error))
    }

    


    renderSummary = () => {
        return this.props.summaryData.map((item, i) => {
            return <Box key={i} item={item} bg={boxData[i].bg} img={boxData[i].img} title={boxData[i].title}/>
        })
    }
    

    render(){
        return(
            <div className="container-fluid">
                <div className="row pb-3">
                    {this.renderSummary()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    summaryData: state.summary.currentData
})

const mapDispatchToProps = dispatch => ({
    setSummaryData: summary => dispatch(setSummaryData(summary))
})

export default connect(mapStateToProps, mapDispatchToProps)(BoxList);