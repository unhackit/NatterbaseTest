import React from 'react';

import './TableComponent.css';



const TableComponent = (props) => (
    <div className='container-fluid'>
        <div className='table-container'>
            <table className="table table-striped">
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
                    <tr>
                        <th scope="row">1</th>
                        <td>i</td>
                        <td>i</td>
                        <td>i</td>
                        <td><button>completed</button></td>
                        <td><button>Make a claim</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export default TableComponent;