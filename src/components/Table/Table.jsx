import React from 'react';
import axios from 'axios';

import './Table.css';

import Button from '../Button/Button';
import { connect } from 'react-redux';
import { setTableData } from '../../redux/table/table.actions';


class Table extends React.Component {
    componentDidMount(){
        axios({
          method: 'get',
          url: 'http://test.natterbase.com:5050/api/interview/get-applications',
          headers: {
            token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg'
          }
        })
          .then(response => this.props.setTableData(response.data.applications)
         ).catch(error => console.log(error))
    }



    renderTable = () => {
      return this.props.tableData.map((item, i) => {
        const { insuranceType, amount, createdDate, complete } = item;
        return (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{insuranceType}</td>
              <td>&#8358;{amount}</td>
              <td>{createdDate.substring(0, 10)}</td>
              <td>{complete ? <Button formType='statusTrue'><i className="fas fa-circle mr-1" style={{fontSize: '8px', position: 'relative', bottom: '2px'}}></i>Completed</Button> : <Button formType='statusFalse'><i className="fas fa-circle mr-1" style={{fontSize: '8px', position: 'relative', bottom: '2px'}}></i>Incomplete</Button> }</td>
              <td>{complete ? <Button formType='action'>Make a Claim</Button> : <Button formType='action'>Complete Process</Button> }</td>
              <td><a className="more" href='/'>More Actions</a></td>   
            </tr>
        )
      })
    }

    render(){
        return(
            <div className='mt-5 mb-5'>
              <div className='container-fluid'>
                <div className='table-container'>
                  <div className='table-responsive'> 
                      <table className='table table-striped'>
                          <caption className='pt-2 pb-2'>Insurance Applications</caption>
                          <thead>
                              <tr>
                                  <th scope="col">S.N</th>
                                  <th scope="col">Insurance Type</th>
                                  <th scope="col">Amount</th>
                                  <th scope="col">Date</th>
                                  <th scope="col">Status</th>
                                  <th scope="col">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {this.renderTable()}
                          </tbody>
                      </table>
                    </div>
                </div>
              </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  tableData: state.table.currentTableData
})

const mapDispatchToProps = dispatch => ({
  setTableData: table => dispatch(setTableData(table))
})


export default connect(mapStateToProps, mapDispatchToProps)(Table);

