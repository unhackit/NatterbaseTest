import React from 'react';
import axios from 'axios';

import './Table.css'

import Button from '../Button/Button';


class Table extends React.Component {
    constructor(){
        super();

        this.state = {
            applications: [
                {
                    Type: '',
                    Amount: '',
                    Date: '',
                    Complete: ''  
                },
                {
                    Type: '',
                    Amount: '',
                    Date: '',
                    Complete: ''  
                  },
                  {
                    Type: '',
                    Amount: '',
                    Date: '',
                    Complete: ''  
                  },
                  {
                    Type: '',
                    Amount: '',
                    Date: '',
                    Complete: ''  
                  }
            ]
        }
    }

    componentDidMount(){
        axios({
          method: 'get',
          url: 'http://test.natterbase.com:5050/api/interview/get-applications',
          headers: {
            token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg'
          }
        })
          .then(response => this.setApplications(response.data.applications)
         )
    }

    setApplications = (applications) => {
        let applicationsData = {...this.state.applications};
        this.state.applications.forEach((item, i) => {
          applicationsData[i].Type = applications[i].insuranceType;
          applicationsData[i].Date = applications[i].createdDate;
          applicationsData[i].Complete = applications[i].complete;
          applicationsData[i].Amount = applications[i].amount;
        })
        this.setState({applicationsData}, console.log(this.state))
    }
    


    renderTable = () => {
      return this.state.applications.map((item, i) => {
        const { Type, Amount, Date, Complete } = item;
        return (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{Type}</td>
              <td>&#8358;{Amount}</td>
              <td>{Date.substring(0, 10)}</td>
              <td>{Complete ? <Button formType='statusTrue'><i className="fas fa-circle mr-1" style={{fontSize: '8px', position: 'relative', bottom: '2px'}}></i>Completed</Button> : <Button formType='statusFalse'><i className="fas fa-circle mr-1" style={{fontSize: '8px', position: 'relative', bottom: '2px'}}></i>Incomplete</Button> }</td>
              <td>{Complete ? <Button formType='action'>Make a Claim</Button> : <Button formType='action'>Complete Process</Button> }</td>
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

export default Table;