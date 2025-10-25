import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router';

const PrivateRout = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user){
        return children
    }
    return <Navigate to="/"></Navigate>
};

export default PrivateRout;