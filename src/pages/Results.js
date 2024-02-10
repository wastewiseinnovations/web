import React from 'react'
import { useLocation } from 'react-router-dom';

const Results = () => {
    const location = useLocation();
    const data = location.state;
  
  
    return (
    <div>
        <p>name: {data.name}</p>
        <p>email: {data.email}</p>
        <p>subject: {data.subject}</p>
        <p>message: {data.message}</p>
    </div>
  )
}

export default Results