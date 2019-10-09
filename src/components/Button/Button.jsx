import React from 'react';


import './Button.css';

const Button = ({children, formType, ...otherProps}) => (
    <button className={`btn ${formType}`}>{children}</button>
)
    

export default Button;