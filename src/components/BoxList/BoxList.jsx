import React from 'react';

import './BoxList.css';

import Box from '../Box/Box'
import axios from 'axios';

import { connect } from 'react-redux';
import { setSummaryData } from '../../redux/summary/summary.actions';

class BoxList extends React.Component {

    componentDidMount(){
        axios({
          method: 'get',
          url: 'http://test.natterbase.com:5050/api/interview/get-statistics',
          headers: {
            token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg'
          }
        })
          .then(response => this.setValue(response.data.statistics)
         ).catch(error => console.log(error))
    }

    setValue = (data) => {
        console.log(data)
    }

    renderSummary = () => {
        return this.props.summaryData.map((item, i) => {
            const { title, img, bg, data } = item
            return <Box key={i} title={title} img={img} bg={bg} data={data}/>
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