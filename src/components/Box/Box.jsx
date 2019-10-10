import React from 'react';

import './Box.css';

const formatAsMoney = (data) => {
    return data = '₦' + data
}

const Box = ({title, bg, img, data}) => (
    <div className="col-sm-12 col-md-6 col-lg-3 mt-2 mb-2">
        <div className={`box ${bg}`}>
            <div className="container-fluid">
                <div className="mt-3">
                    <img alt="total-icon" src={require(`../../Assets/Img/${img}`)}/>
                </div>
                <div>
                    <p className="total-number mt-2">{title.includes('Amount') ? formatAsMoney(data) : data }</p>
                    <p className="total">{title}</p>
                </div>
            </div>
        </div>
    </div>
)


export default Box;