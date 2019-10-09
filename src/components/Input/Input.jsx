import React from 'react';


import './Input.css'


const Input = ({...otherProps}) => (
    <div className='mt-1 mb-2'>
        {
            otherProps.label ? <label>{otherProps.label}</label> : ''
        }
        <input className={`p-2 ${otherProps.status}`} {...otherProps}/>
    </div>
)

export default Input;